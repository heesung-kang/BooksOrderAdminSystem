(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0495f450"],{"0640":function(t,e,i){"use strict";i("0ced")},"0ced":function(t,e,i){},"0e83":function(t,e,i){"use strict";i("c6ae")},4809:function(t,e,i){},"68e0":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));const s=function(t,e,i,s){return{name:t,width:e,height:i,resizable:s,clickToClose:!0,draggable:".popup-title",scrollable:!0}}},7402:function(t,e,i){"use strict";var s=i("132d"),a={methods:{close(){this.$emit("close")}}},o=(i("cc0a"),i("2877")),n=Object(o.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"modal-wrap"},[t("div",{staticClass:"close",on:{click:this.close}},[t(s.a,[this._v("mdi-window-close")])],1),this._t("head"),t("div",{staticClass:"line"}),t("div",{staticClass:"body"},[this._t("body")],2),this._t("footer")],2)}),[],!1,null,"1c84da6b",null);e.a=n.exports},c6ae:function(t,e,i){},cc0a:function(t,e,i){"use strict";i("4809")},dfe2:function(t,e,i){"use strict";var s={components:{modalWrap:i("7402").a},data:()=>({zip:"",addr1:"",sido:"",sigungu:"",bname:""}),watch:{zip(){this.$attrs.updateZip({zip:this.zip,addr1:this.addr1,sido:this.sido,sigungu:this.sigungu,dong:this.bname}),this.$emit("close")}},mounted(){this.showApi()},methods:{showApi(){new window.daum.Postcode({width:"100%",oncomplete:t=>{let e=t.roadAddress,i="";""!==t.bname&&/[동|로|가]$/g.test(t.bname)&&(i+=t.bname),""!==t.buildingName&&"Y"===t.apartment&&(i+=""!==i?", "+t.buildingName:t.buildingName),""!==i&&(i=" ("+i+")"),""!==e&&(e+=i),this.zip=t.zonecode,this.addr1=e,this.sido=t.sido,this.sigungu=t.sigungu,this.bname=t.bname}}).embed(this.$refs.embed)},close(){this.$emit("close")}}},a=i("2877"),o=Object(a.a)(s,(function(){var t=this._self._c;return t("modalWrap",{on:{close:this.close}},[t("template",{slot:"head"},[t("h2",[this._v("주소찾기")])]),t("template",{slot:"body"},[t("div",{ref:"embed"})])],2)}),[],!1,null,null,null);e.a=o.exports},eb85:function(t,e,i){"use strict";i.r(e);var s=i("2f62"),a=i("f3e4"),o=i("e71f"),n=i("e31c"),c=i("dfe2"),m=i("68e0"),d={name:"Distribution",data:()=>({infoModify:!1,modify:!1,uid:"",info:{},infoTemp:{},bank:"",accNum:"",accHolder:"",supplyRate:"",zip:""}),computed:{...Object(s.b)("common",["mobile"])},created(){const{uid:t}=Object(a.b)("userInfo");this.uid=t,this.load()},methods:{statusChange(){this.modify=!0},infoStatusChange(){this.infoModify=!0},cancel(){this.infoModify=!1,this.infoTemp=this.info},async load(){try{this.$store.commit("common/setLoading",!0);const t=Object(o.d)(n.b,"publisherInfo",this.uid),e=await Object(o.e)(t);this.info=e.data(),this.infoTemp=e.data(),this.bank=e.data().bank,this.accNum=e.data().accNum,this.accHolder=e.data().accHolder,this.supplyRate=e.data().supplyRate}catch(t){console.log(t)}this.$store.commit("common/setLoading",!1)},async update(){this.modify=!1;try{const t=Object(o.d)(n.b,"publisherInfo",this.uid);await Object(o.l)(t,{bank:this.bank,accNum:this.accNum,accHolder:this.accHolder,supplyRate:this.supplyRate}),await this.load()}catch(t){console.log(t)}},async infoUpdate(){if(""!==this.infoTemp.publisher)if(""!==this.infoTemp.name)if(""!==this.infoTemp.tel)if(""!==this.infoTemp.cnNum)if(""!==this.infoTemp.address2){this.infoModify=!1,this.info=this.infoTemp;try{const t=Object(o.d)(n.b,"publisherInfo",this.uid);await Object(o.l)(t,{publisher:this.infoTemp.publisher,name:this.infoTemp.name,tel:this.infoTemp.tel,cnNum:this.infoTemp.cnNum,zip:this.zip,address1:this.infoTemp.address1,address2:this.infoTemp.address2}),await this.load()}catch(t){console.log(t)}}else alert("주소를 입력해주세요");else alert("사업자등록번호를 입력해주세요");else alert("대표연락처를 입력해주세요");else alert("대표자명을 입력해주세요");else alert("출판사명을 입력해주세요")},showAddressModalPopup(){this.mobile?this.$modal.show(c.a,{updateZip:this.updateZip},Object(m.a)("AddressModal","95%","auto",!1)):this.$modal.show(c.a,{updateZip:this.updateZip},Object(m.a)("AddressModal","600px","auto",!1))},updateZip(t){this.infoTemp.address1=t.addr1,this.zip=t.zip}}},l=(i("0640"),i("2877")),r=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("section",[e("h3",[t._v("출판사 정보")]),e("table",{staticClass:"info-tbl mt5"},[t._m(0),e("tbody",[e("tr",[e("td",[t._v("출판사명")]),e("td",[t.infoModify?e("input",{directives:[{name:"model",rawName:"v-model",value:t.infoTemp.publisher,expression:"infoTemp.publisher"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.infoTemp.publisher},on:{input:function(e){e.target.composing||t.$set(t.infoTemp,"publisher",e.target.value)}}}):e("span",[t._v(t._s(t.info.publisher))])])]),e("tr",[e("td",[t._v("아이디(이메일)")]),e("td",[t._v(t._s(t.info.email))])]),e("tr",[e("td",[t._v("대표자명")]),e("td",[t.infoModify?e("input",{directives:[{name:"model",rawName:"v-model",value:t.infoTemp.name,expression:"infoTemp.name"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.infoTemp.name},on:{input:function(e){e.target.composing||t.$set(t.infoTemp,"name",e.target.value)}}}):e("span",[t._v(t._s(t.info.name))])])]),e("tr",[e("td",[t._v("대표연락처")]),e("td",[t.infoModify?e("input",{directives:[{name:"model",rawName:"v-model",value:t.infoTemp.tel,expression:"infoTemp.tel"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.infoTemp.tel},on:{input:function(e){e.target.composing||t.$set(t.infoTemp,"tel",e.target.value)}}}):e("span",[t._v(t._s(t.info.tel))])])]),e("tr",[e("td",[t._v("사업자등록번호")]),e("td",[t.infoModify?e("input",{directives:[{name:"model",rawName:"v-model",value:t.infoTemp.cnNum,expression:"infoTemp.cnNum"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.infoTemp.cnNum},on:{input:function(e){e.target.composing||t.$set(t.infoTemp,"cnNum",e.target.value)}}}):e("span",[t._v(t._s(t.info.cnNum))])])]),e("tr",[e("td",[t._v("주소")]),e("td",[t.infoModify?e("div",[e("div",[e("button",{staticClass:"basic xs",on:{click:t.showAddressModalPopup}},[t._v("주소찾기")])]),e("div",{staticClass:"mt5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.infoTemp.address1,expression:"infoTemp.address1"}],staticClass:"basic",attrs:{type:"text",readonly:""},domProps:{value:t.infoTemp.address1},on:{input:function(e){e.target.composing||t.$set(t.infoTemp,"address1",e.target.value)}}})]),e("div",{staticClass:"mt5"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.infoTemp.address2,expression:"infoTemp.address2"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.infoTemp.address2},on:{input:function(e){e.target.composing||t.$set(t.infoTemp,"address2",e.target.value)}}})])]):e("span",[t._v(t._s(t.info.address1)+" "+t._s(t.info.address2))])])])])]),e("section",[t.infoModify?e("div",{staticClass:"d-flex justify-end mt5"},[e("button",{staticClass:"basic mr5",on:{click:t.cancel}},[t._v("취소")]),e("button",{staticClass:"primary",on:{click:t.infoUpdate}},[t._v("확인")])]):e("div",{staticClass:"d-flex justify-end mt5"},[e("button",{staticClass:"primary",on:{click:t.infoStatusChange}},[t._v("수정")])])]),e("h3",{staticClass:"mt50"},[t._v("정산 정보")]),e("section",{staticClass:"cal-wrap mt5"},[e("article",[e("div",[t._v("은행명")]),e("div",[t.modify?e("input",{directives:[{name:"model",rawName:"v-model",value:t.bank,expression:"bank"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.bank},on:{input:function(e){e.target.composing||(t.bank=e.target.value)}}}):e("span",[t._v(t._s(t.bank))])])]),e("article",[e("div",[t._v("계좌번호")]),e("div",[t.modify?e("input",{directives:[{name:"model",rawName:"v-model",value:t.accNum,expression:"accNum"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.accNum},on:{input:function(e){e.target.composing||(t.accNum=e.target.value)}}}):e("span",[t._v(t._s(t.accNum))])])]),e("article",[e("div",[t._v("예금주명")]),e("div",[t.modify?e("input",{directives:[{name:"model",rawName:"v-model",value:t.accHolder,expression:"accHolder"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.accHolder},on:{input:function(e){e.target.composing||(t.accHolder=e.target.value)}}}):e("span",[t._v(t._s(t.accHolder))])])]),e("article",[e("div",[t._v("기본 공급률")]),e("div",[t.modify?e("input",{directives:[{name:"model",rawName:"v-model",value:t.supplyRate,expression:"supplyRate"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.supplyRate},on:{input:function(e){e.target.composing||(t.supplyRate=e.target.value)}}}):e("span",[t._v(t._s(t.supplyRate))])])])]),e("section",[t.modify?e("div",{staticClass:"d-flex justify-end mt5"},[e("button",{staticClass:"basic mr5",on:{click:function(e){t.modify=!1}}},[t._v("취소")]),e("button",{staticClass:"primary",on:{click:t.update}},[t._v("확인")])]):e("div",{staticClass:"d-flex justify-end mt5"},[e("button",{staticClass:"primary",on:{click:t.statusChange}},[t._v("수정")])])])])}),[function(){var t=this._self._c;return t("colgroup",[t("col",{attrs:{width:"100"}}),t("col",{attrs:{width:"*"}})])}],!1,null,"4bd3c7c0",null).exports,p=i("132d"),u=(i("14d9"),{name:"Distribution",data:()=>({modify:"",companyNameTemp:"",nameTemp:"",companyName:"",telTemp:"",name:"",tel:"",uid:"",distribution:[]}),created(){const{uid:t}=Object(a.b)("userInfo");this.uid=t,this.load()},methods:{async load(){try{this.$store.commit("common/setLoading",!0);const t=Object(o.i)(Object(o.b)(n.b,"distribution"),Object(o.m)("uid","==",this.uid)),e=await Object(o.f)(t);this.modify="",this.distribution=[],e.forEach(t=>{this.distribution.push({id:t.id,data:t.data()})})}catch(t){console.log(t)}this.$store.commit("common/setLoading",!1)},async add(){if(""!==this.companyName)if(""!==this.name)if(""!==this.tel){try{this.$store.commit("common/setLoading",!0),await Object(o.a)(Object(o.b)(n.b,"distribution"),{companyName:this.companyName,name:this.name,tel:this.tel,uid:this.uid}),this.companyName="",this.name="",this.tel="",await this.load()}catch(t){console.log(t)}this.$store.commit("common/setLoading",!1)}else alert("연락처를 입력해주세요");else alert("담당자를 입력해주세요");else alert("배본사명을 입력해주세요")},async update(t){try{this.$store.commit("common/setLoading",!0);const e=Object(o.d)(n.b,"distribution",t);await Object(o.l)(e,{companyName:this.companyNameTemp,name:this.nameTemp,tel:this.telTemp}),await this.load()}catch(t){console.log(t)}this.$store.commit("common/setLoading",!1)},async del(t){try{this.$store.commit("common/setLoading",!0),await Object(o.c)(Object(o.d)(n.b,"distribution",t)),await this.load()}catch(t){console.log(t)}this.$store.commit("common/setLoading",!1)},modifyTemp(t){this.modify=t.id,this.companyNameTemp=t.companyName,this.nameTemp=t.name,this.telTemp=t.tel}}}),f=(i("0e83"),{components:{Distribution:Object(l.a)(u,(function(){var t=this,e=t._self._c;return e("section",[e("h3",{staticClass:"mt50"},[t._v("배본 정보")]),e("table",{staticClass:"dis-tbl mt5"},[t._m(0),t._m(1),e("tbody",[t._l(t.distribution,(function(i,s){return e("tr",{key:s},[e("td",[t.modify!==i.id?e("span",[t._v(t._s(i.data.companyName))]):e("input",{directives:[{name:"model",rawName:"v-model",value:t.companyNameTemp,expression:"companyNameTemp"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.companyNameTemp},on:{input:function(e){e.target.composing||(t.companyNameTemp=e.target.value)}}})]),e("td",[t.modify!==i.id?e("span",[t._v(t._s(i.data.name))]):e("input",{directives:[{name:"model",rawName:"v-model",value:t.nameTemp,expression:"nameTemp"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.nameTemp},on:{input:function(e){e.target.composing||(t.nameTemp=e.target.value)}}})]),e("td",[t.modify!==i.id?e("span",[t._v(t._s(i.data.tel))]):e("input",{directives:[{name:"model",rawName:"v-model",value:t.telTemp,expression:"telTemp"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.telTemp},on:{input:function(e){e.target.composing||(t.telTemp=e.target.value)}}})]),e("td",[e("div",{staticClass:"d-flex"},[t.modify!==i.id?e("div",[e("button",{staticClass:"basic xs",on:{click:function(e){return t.modifyTemp({id:i.id,companyName:i.data.companyName,name:i.data.name,tel:i.data.tel})}}},[t._v("\n                수정\n              ")])]):e("div",{staticClass:"d-flex"},[e("button",{staticClass:"basic xs mr5",on:{click:function(e){t.modify=""}}},[t._v("취소")]),e("button",{staticClass:"primary xs",on:{click:function(e){return t.update(i.id)}}},[t._v("확인")])]),t.modify!==i.id?e("div",[e(p.a,{staticClass:"delete",on:{click:function(e){return t.del(i.id)}}},[t._v("mdi-close")])],1):t._e()])])])})),e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),e("td",[e("button",{staticClass:"primary",on:{click:t.add}},[t._v("추가")])])])],2)])])}),[function(){var t=this._self._c;return t("colgroup",[t("col",{attrs:{width:"*"}}),t("col",{attrs:{width:"*"}}),t("col",{attrs:{width:"*"}}),t("col",{attrs:{width:"100"}})])},function(){var t=this._self._c;return t("thead",[t("tr",[t("th",[this._v("배본사명")]),t("th",[this._v("담당자")]),t("th",[this._v("연락처")]),t("th")])])}],!1,null,"6773669c",null).exports,PublisherInfo:r}}),h=Object(l.a)(f,(function(){var t=this._self._c;return t("section",[t("h2",{staticClass:"sub-title"},[this._v("출판사 정보")]),t("section",{staticClass:"sub-container"},[t("PublisherInfo"),t("Distribution")],1)])}),[],!1,null,"ecad2ad0",null);e.default=h.exports}}]);