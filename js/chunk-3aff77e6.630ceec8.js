(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3aff77e6"],{"2bb3":function(t,e,s){"use strict";s.r(e);s("14d9");var a=s("dfe2"),i=s("68e0"),o=s("2f62"),n=s("ea7b"),l=s("e71f"),d=s("e31c");const c=Object(n.c)(d.a);var r={name:"SignUp",data:()=>({email:"",password:"",publisher:"",name:"",tel:"",sid:0,cnNum:"",zip:"",address1:"",address2:""}),computed:{...Object(o.b)("common",["mobile"])},async created(){const t=await Object(l.e)(Object(l.d)(d.b,"sid","counting"));this.sid=t.data().count+1},methods:{userRegistration(){if(""!==this.publisher)if(""!==this.email)if(""!==this.password)if(""!==this.name)if(""!==this.tel)if(""!==this.cnNum)if(""!==this.address1)if(""!==this.address2)try{this.$store.commit("common/setLoading",!0),Object(n.b)(c,this.email,this.password).then(()=>{Object(n.g)(Object(n.c)().currentUser,{displayName:this.publisher+"-2"}).then(()=>{this.addInfo()}).catch(t=>{alert(t.message)})}).catch(t=>{alert(t.message),this.$store.commit("common/setLoading",!1)})}catch(t){console.log(t),this.$store.commit("common/setLoading",!1)}else alert("주소를 입력해주세요.");else alert("주소를 입력해주세요.");else alert("사업자등록 번호를 입력해주세요.");else alert("대표연락처를 입력해주세요.");else alert("대표자명을 입력해주세요.");else alert("비밀번호를 입력해주세요.");else alert("이메일을 입력해주세요.");else alert("출판사명 입력해주세요.")},async addInfo(){try{await Object(n.e)(c,this.email,this.password).then(async t=>{const{uid:e}=t.user;await Object(l.k)(Object(l.d)(d.b,"publisherInfo",e),{email:this.email,publisher:this.publisher,sid:this.sid,name:this.name,tel:this.tel,cnNum:this.cnNum,zip:this.zip,address1:this.address1,address2:this.address2,bank:null,accNum:null,accHolder:null,supplyRate:null,timestamp:Object(l.j)()}),this.$store.commit("common/setLoading",!1),alert("정상 가입 되셨습니다."),this.$router.push("/Login"),await Object(l.l)(Object(l.d)(d.b,"sid","counting"),{count:this.sid})}).catch(t=>{console.log(t),this.$store.commit("common/setLoading",!1)})}catch(t){console.log(t),this.$store.commit("common/setLoading",!1)}},showAddressModalPopup(){this.mobile?this.$modal.show(a.a,{updateZip:this.updateZip},Object(i.a)("AddressModal","95%","auto",!1)):this.$modal.show(a.a,{updateZip:this.updateZip},Object(i.a)("AddressModal","600px","auto",!1))},updateZip(t){this.address1=t.addr1,this.zip=t.zip}}},m=(s("ae44"),s("2877")),u=Object(m.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-container"},[e("div",{staticClass:"wrap"},[e("h1",[t._v("출판사 회원가입")]),e("div",{staticClass:"mt5"},[t._v("ID : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"basic",attrs:{placeholder:"이메일 입력",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"mt5"},[t._v("PW : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"basic",attrs:{placeholder:"비밀번호는 6자리이상 입력",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("div",{staticClass:"mt10"},[t._v("출판사명 : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.publisher,expression:"publisher"}],staticClass:"basic",attrs:{placeholder:"출판사명",type:"text"},domProps:{value:t.publisher},on:{input:function(e){e.target.composing||(t.publisher=e.target.value)}}})]),e("div",{staticClass:"mt10"},[t._v("대표자명 : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"basic",attrs:{placeholder:"대표자명",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",{staticClass:"mt10"},[t._v("대표연락처 : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"basic",attrs:{placeholder:"대표연락처",type:"text"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),e("div",{staticClass:"mt10"},[t._v("사업자등록번호 : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cnNum,expression:"cnNum"}],staticClass:"basic",attrs:{placeholder:"사업자등록번호",type:"text"},domProps:{value:t.cnNum},on:{input:function(e){e.target.composing||(t.cnNum=e.target.value)}}})]),e("div",{staticClass:"mt10 d-flex align-center"},[t._v("\n      주소 : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.zip,expression:"zip"}],staticClass:"basic zip",attrs:{placeholder:"우편번호",type:"text",readonly:""},domProps:{value:t.zip},on:{input:function(e){e.target.composing||(t.zip=e.target.value)}}}),e("button",{staticClass:"btn-zip",on:{click:t.showAddressModalPopup}},[t._v("\n        주소 찾기\n      ")])]),e("div",{staticClass:"mt2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.address1,expression:"address1"}],staticClass:"basic",attrs:{type:"text",readonly:""},domProps:{value:t.address1},on:{input:function(e){e.target.composing||(t.address1=e.target.value)}}})]),e("div",{staticClass:"mt2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.address2,expression:"address2"}],staticClass:"basic",attrs:{placeholder:"나머지주소",type:"text"},domProps:{value:t.address2},on:{input:function(e){e.target.composing||(t.address2=e.target.value)}}})]),e("div",{staticClass:"btn-wrap"},[e("button",{on:{click:t.userRegistration}},[t._v("가입")]),e("router-link",{staticClass:"login",attrs:{to:"/login"}},[t._v("로그인")])],1)])])}),[],!1,null,"2d678e64",null);e.default=u.exports},4457:function(t,e,s){},4809:function(t,e,s){},"68e0":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a=function(t,e,s,a){return{name:t,width:e,height:s,resizable:a,clickToClose:!0,draggable:".popup-title",scrollable:!0}}},7402:function(t,e,s){"use strict";var a=s("132d"),i={methods:{close(){this.$emit("close")}}},o=(s("cc0a"),s("2877")),n=Object(o.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"modal-wrap"},[t("div",{staticClass:"close",on:{click:this.close}},[t(a.a,[this._v("mdi-window-close")])],1),this._t("head"),t("div",{staticClass:"line"}),t("div",{staticClass:"body"},[this._t("body")],2),this._t("footer")],2)}),[],!1,null,"1c84da6b",null);e.a=n.exports},ae44:function(t,e,s){"use strict";s("4457")},cc0a:function(t,e,s){"use strict";s("4809")},dfe2:function(t,e,s){"use strict";var a={components:{modalWrap:s("7402").a},data:()=>({zip:"",addr1:"",sido:"",sigungu:"",bname:""}),watch:{zip(){this.$attrs.updateZip({zip:this.zip,addr1:this.addr1,sido:this.sido,sigungu:this.sigungu,dong:this.bname}),this.$emit("close")}},mounted(){this.showApi()},methods:{showApi(){new window.daum.Postcode({width:"100%",oncomplete:t=>{let e=t.roadAddress,s="";""!==t.bname&&/[동|로|가]$/g.test(t.bname)&&(s+=t.bname),""!==t.buildingName&&"Y"===t.apartment&&(s+=""!==s?", "+t.buildingName:t.buildingName),""!==s&&(s=" ("+s+")"),""!==e&&(e+=s),this.zip=t.zonecode,this.addr1=e,this.sido=t.sido,this.sigungu=t.sigungu,this.bname=t.bname}}).embed(this.$refs.embed)},close(){this.$emit("close")}}},i=s("2877"),o=Object(i.a)(a,(function(){var t=this._self._c;return t("modalWrap",{on:{close:this.close}},[t("template",{slot:"head"},[t("h2",[this._v("주소찾기")])]),t("template",{slot:"body"},[t("div",{ref:"embed"})])],2)}),[],!1,null,null,null);e.a=o.exports}}]);