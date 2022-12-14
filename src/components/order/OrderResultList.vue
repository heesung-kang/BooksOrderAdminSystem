<template>
  <section>
    <BookListSkeleton v-if="!mobile && skeletonLoading" />
    <BookListMobileSkeleton v-if="mobile && skeletonLoading" />
    <!-- 발주 내역 -->
    <section class="header d-flex" v-if="!mobile && !skeletonLoading">
      <div>품목정보</div>
      <div>ISBN</div>
      <div class="d-flex">
        <div>정가</div>
        <div>공급률</div>
      </div>
      <div>공급가</div>
      <div>주문</div>
      <div>공급</div>
      <div>회신</div>
    </section>
    <ul class="body">
      <li
        class="d-flex align-center"
        v-for="(book, index) in books"
        :key="index"
        :class="{ none: book.data.shop_order_status > 1 && book.data.order_check === false }"
      >
        <div class="d-flex align-center info-wrap">
          <div class="book-info">
            <h3 class="book-name">{{ book.data.subject }}</h3>
            <div class="author">{{ book.data.author }}</div>
          </div>
        </div>
        <div class="isbn">{{ book.data.isbn }}</div>
        <div class="d-flex price-info">
          <div class="normal-price"><span v-if="mobile">정가</span> {{ book.data.price?.toLocaleString() }}원</div>
          <div><span v-if="mobile">공급률</span> {{ book.data.supply_rate }}%</div>
        </div>
        <div class="final-price"><span v-if="mobile">공급가</span> {{ ((book.data.price * book.data.supply_rate) / 100).toLocaleString() }}원</div>
        <div class="count"><span v-if="mobile">주문</span> {{ book.data.count }}</div>
        <div class="count">
          <span v-if="mobile" class="mr4">공급</span>
          <input
            type="number"
            class="basic reply-count"
            v-model="book.data.reply_count"
            :disabled="book.data.publisher_reply_status !== 3"
            v-if="book.data.shop_order_status === 0"
          />
          <span v-else :class="{ warning: book.data.count > book.data.reply_count }">{{ book.data.reply_count }}</span>
        </div>
        <!-- 버튼종류 : 정상, 품절, 절판, 재고부족 -->
        <div class="btn-wrap">
          <SelectsReply
            @select="changeStatus"
            :index="index"
            :dafaultValue="book.data.publisher_reply_status"
            v-if="book.data.shop_order_status === 0"
          />
          <div v-else>
            {{
              book.data.publisher_reply_status === 0
                ? "정상"
                : book.data.publisher_reply_status === 1
                ? "품절"
                : book.data.publisher_reply_status === 2
                ? "절판"
                : "재고부족"
            }}
          </div>
        </div>
      </li>
    </ul>
    <!-- //발주 내역 -->
    <!-- 총 합계 --->
    <section class="total-wrap mt24" v-if="!skeletonLoading">
      <div>
        <span class="total-prod">총 {{ bookCount }}권</span>
        <span class="total">합계 {{ totalPrice.toLocaleString() }}원</span>
      </div>
      <div class="d-flex">
        <span v-if="books[0].data.shop_order_status !== 0">회신완료</span>
        <button v-else class="primary" @click="showModal" :disabled="books[0].data.shop_order_status !== 0">회신</button>
      </div>
    </section>
    <!-- //총 합계 --->
    <Toast :status="status" :message="message" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { getPopupOpt } from "@/utils/modal";
import ModalMemo from "@/components/modal/ModalMemo.vue";
import SelectsReply from "@/components/form/SelectsReply";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/db";
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
import Toast from "@/components/common/Toast";
export default {
  components: { SelectsReply, BookListSkeleton, BookListMobileSkeleton, Toast },
  props: ["id", "orderTimeId", "uid"],
  data() {
    return {
      selected: [],
      books: [],
      error: 0,
      message: "",
      status: false,
    };
  },
  computed: {
    ...mapGetters("common", ["windowWidth", "mobile", "skeletonLoading"]),
    bookCount() {
      //총 권수 계산
      let count = 0;
      this.books.forEach(ele => (count += Number(ele.data.reply_count)));
      return count;
    },
    totalPrice() {
      //총 금액 계산
      let price = 0;
      this.books.forEach(ele => {
        price += (ele.data.price * Number(ele.data.supply_rate) * ele.data.reply_count) / 100;
      });
      return price;
    },
  },
  created() {
    this.load();
  },
  mounted() {
    window.onresize = () => {
      this.setSize();
    };
  },
  methods: {
    async load() {
      try {
        this.books = [];
        this.$store.commit("common/setSkeleton", true);
        const first = query(
          collection(db, "orderRequest"),
          where("uid", "==", this.uid),
          where("sid", "==", Number(this.id)),
          where("order_time_id", "==", this.orderTimeId),
        );
        const documentSnapshots = await getDocs(first);
        await documentSnapshots.forEach(doc => {
          this.books.push({ id: doc.id, data: doc.data() });
        });
        this.setSize();
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setSkeleton", false);
    },
    showModal() {
      this.error = 0; //공급 수량 체크
      this.books.forEach(ele => {
        if (ele.data.count < ele.data.reply_count) {
          this.error += 1;
        }
      });
      if (this.error === 0) {
        this.mobile
          ? this.$modal.show(ModalMemo, { books: this.books, update: this.load }, getPopupOpt("ModalMemo", "95%", "auto", false))
          : this.$modal.show(ModalMemo, { books: this.books, update: this.load }, getPopupOpt("ModalMemo", "500px", "auto", false));
      } else {
        this.status = !this.status;
        this.message = "공급이 주문보다 많습니다.";
      }
    },
    //회신상태 변경
    changeStatus(payload) {
      this.books[payload.index].data.publisher_reply_status = payload.value;
      //회신상태에 따라 공급수량 변경
      switch (payload.value) {
        case 0:
          this.books[payload.index].data.reply_count = this.books[payload.index].data.count;
          break;
        case 1:
          this.books[payload.index].data.reply_count = 0;
          break;
        case 2:
          this.books[payload.index].data.reply_count = 0;
          break;
      }
    },
    setSize() {
      if (this.mobile) {
        this.listWidth = document.querySelector(".body").clientWidth;
        this.titleMaxWidth = this.listWidth;
        setTimeout(() => {
          const select = document.querySelectorAll(".book-name");
          select.forEach(ele => {
            ele.style.maxWidth = `${this.titleMaxWidth}px`;
          });
        }, 200);
      } else {
        this.listWidth = document.querySelector(".body").clientWidth;
        this.titleMaxWidth = this.listWidth - 630;
        setTimeout(() => {
          const select = document.querySelectorAll(".book-name");
          select.forEach(ele => {
            ele.style.maxWidth = `${this.titleMaxWidth}px`;
          });
        }, 200);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 5px 13px;
  & > div {
    text-align: center;
    @include NotoSans(1.6, 500, #000);
    @extend .size;
  }
  .dual {
    div {
      &:nth-child(1) {
        text-align: left;
        width: 80px;
      }
      &:nth-child(2) {
        text-align: center;
        width: calc(100% - 80px);
      }
    }
  }
}
.body {
  li {
    background-color: #fff;
    padding: 5px 13px;
    margin-bottom: 6px;
    .book-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left !important;
    }
    .final-price {
      @include NotoSans(1.4, 700, #000);
    }
    & > div {
      text-align: center;
      @extend .size;
      .book-info {
        h3 {
          @include NotoSans(1.5, 500, #000);
        }
        .author {
          text-align: left;
          @include NotoSans(1.4, 400, #888);
        }
      }
      .reply-count {
        width: 50px !important;
      }
    }
    .btn-wrap {
      display: flex;
      justify-content: center;
    }
    &.none {
      h3 {
        color: #989898 !important;
        text-decoration: line-through;
      }
      div {
        color: #989898 !important;
        text-decoration: line-through;
      }
    }
    .count {
      .warning {
        color: red !important;
        background-color: #fff !important;
        font-weight: 700 !important;
      }
    }
    .isbn {
      color: #888;
    }
    .normal-price {
      color: #888;
    }
  }
}
.total-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  max-width: 550px;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 15px 42px;
  .total-prod {
    @include NotoSans(1.6, 700, #000);
    margin-right: 48px;
  }
  .total {
    @include NotoSans(1.6, 700, #000);
  }
}
.size {
  &:nth-child(1) {
    width: calc(100% - 608px);
  }
  &:nth-child(2) {
    width: 120px;
  }
  &:nth-child(3) {
    width: 160px;
    & > div {
      &:nth-child(1) {
        width: 80px;
      }
      &:nth-child(2) {
        width: 80px;
      }
    }
  }
  &:nth-child(4) {
    width: 80px;
  }
  &:nth-child(5) {
    width: 60px;
  }
  &:nth-child(5) {
    width: 60px;
  }
  &:nth-child(6) {
    width: 80px;
  }
  &:nth-child(7) {
    width: 108px;
  }
}
@include mobile {
  .body {
    li {
      padding: 19px 18px;
      flex-direction: column;
      align-items: flex-start !important;
      div {
        font-size: 1.6rem;
      }
      .isbn {
        text-align: left;
      }
      .info-wrap {
        width: 100% !important;
        align-items: flex-start !important;
        .book-info {
          width: 100%;
          h3 {
            text-align: left;
          }
        }
      }
      .price-info {
        .normal-price {
          margin-right: 20px;
        }
        div {
          text-align: left;
          white-space: nowrap;
        }
      }
      .final-price {
        margin: 10px 0 0 0;
        text-align: left;
        white-space: nowrap;
      }
      .count {
        text-align: left;
        white-space: nowrap;
      }
      .btn-wrap {
        justify-content: flex-start;
        margin: 10px 0 0 0;
      }
    }
  }
  .total-wrap {
    background-color: #fff;
    max-width: 100%;
    padding: 15px 20px;
    .total-prod {
      @include NotoSans(1.6, 700, #000);
      margin-right: 28px;
    }
    .total {
      @include NotoSans(1.6, 700, #000);
    }
  }
}
</style>
