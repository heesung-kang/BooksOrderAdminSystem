(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c5092124"],{"593c":function(t,e,s){"use strict";s("77a8")},"6f4c":function(t,e,s){"use strict";s.r(e);s("14d9");var a=s("2f62"),o=s("e31c"),i=s("e71f"),c=s("f3e4"),n={name:"PublisherList",components:{TableSkeleton:s("78c6").a},data:()=>({origin:[],shops:[],keyword:"",sid:"",sids:[],loadRate:[],shopsUids:[]}),computed:{...Object(a.b)("common",["skeletonLoading"])},async created(){const t=Object(c.b)("userInfo");this.sid=t.info.sid,this.sids=[],this.$store.commit("common/setSkeleton",!0);const e=Object(i.j)(Object(i.b)(o.b,"booksData"),Object(i.n)("sid","==",this.sid));(await Object(i.f)(e)).forEach(t=>{this.sids.push(t.id)}),await this.load()},methods:{async load(){this.origin=[],this.shops=[];try{this.$store.commit("common/setSkeleton",!0);const t=Object(i.j)(Object(i.b)(o.b,"shopInfo"),Object(i.n)("shop",">=",this.keyword));(await Object(i.f)(t)).forEach(t=>{this.origin.push({uid:t.id,data:t.data()}),this.shops.push({uid:t.id,data:t.data()}),this.shopsUids.push(t.id)});const e=Object(i.j)(Object(i.b)(o.b,"booksData"),Object(i.n)("sid","==",this.sid),Object(i.h)(1));(await Object(i.f)(e)).forEach(t=>{this.loadRate=t.data().shop_rate}),this.shops.forEach((t,e)=>{this.loadRate.forEach(s=>{t.uid===s.uid&&(this.shops[e].data.rate=s.rate,this.origin[e].data.rate=s.rate)})}),this.$store.commit("common/setSkeleton",!1)}catch(t){console.log(t)}},async shopRateSave(){try{this.$store.commit("common/setLoading",!0);const t=[];this.shops.forEach(e=>{""!==e.data.rate&&void 0!==e.data.rate&&t.push({uid:e.uid,rate:e.data.rate})});const e=Object(i.o)(o.b);await this.sids.forEach(s=>{const a=Object(i.d)(o.b,"booksData",s);e.update(a,{shop_rate:t})});const s=this.shopsUids.map(async s=>{(await Object(i.f)(Object(i.b)(o.b,"cart-"+s))).forEach(a=>{const c=Object(i.d)(o.b,"cart-"+s,a.id);e.update(c,{shop_rate:t})})});await Promise.all(s),await e.commit(),await this.load(),alert("저장되었습니다."),this.$store.commit("common/setLoading",!1)}catch(t){this.$store.commit("common/setLoading",!1),console.log(t)}},search(){if(""!==this.keyword){const t=this.origin.filter(t=>{if(t.data.shop.includes(this.keyword))return t});this.shops=t}else this.shops=this.origin}}},r=(s("593c"),s("2877")),d=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("h2",{staticClass:"sub-title"},[t._v("서점별 공급률 설정")]),e("section",{staticClass:"sub-container"},[e("section",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text"},domProps:{value:t.keyword},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{on:{click:t.search}},[t._v("검색")])]),t.skeletonLoading?e("TableSkeleton"):e("table",[e("thead",[e("tr",[e("th",[t._v("서점명")]),e("th",[t._v("이메일")]),e("th",[t._v("서점 공급률")])])]),e("tbody",t._l(t.shops,(function(s,a){return e("tr",{key:a},[e("td",[t._v(t._s(s.data.shop))]),e("td",[t._v(t._s(s.data.email))]),e("td",[e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:s.data.rate,expression:"item.data.rate"}],attrs:{type:"number"},domProps:{value:s.data.rate},on:{input:function(e){e.target.composing||t.$set(s.data,"rate",e.target.value)}}})])])])})),0),0===t.shops.length?e("tfoot",[e("tr",[e("td",{attrs:{colspan:"4"}},[t._v("서점 리스트가 없습니다.")])])]):t._e()]),e("div",{staticClass:"save mt20"},[e("button",{staticClass:"primary",on:{click:function(e){return t.shopRateSave()}}},[t._v("저장")])])],1)])}),[],!1,null,"56b8b6fe",null);e.default=d.exports},"77a8":function(t,e,s){},"78c6":function(t,e,s){"use strict";var a=s("3129"),o={name:"TableSkeleton"},i=s("2877"),c=Object(i.a)(o,(function(){return(0,this._self._c)(a.a,{attrs:{type:"table-thead, table-tbody",types:{"table-tbody":"table-row-divider@3","table-row":"table-cell@3","table-thead":"heading@3"}}})}),[],!1,null,"1c06d3ce",null);e.a=c.exports}}]);