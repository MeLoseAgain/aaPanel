System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./planned-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(e,a){"use strict";var l,n,t,s,u,o,r,i,c,d,_,g,p,v,y,f,m,b,j;return{setters:[e=>{l=e._},e=>{n=e.cw,t=e.I,s=e.m},e=>{u=e.c},e=>{o=e.g,r=e.o},e=>{i=e.d,c=e.O,d=e.r,_=e.R,g=e.S,p=e.P,v=e.a1,y=e.U,f=e.V,m=e.af},e=>{b=e.cn,j=e.ch},null,null],execute:function(){const a={class:"p-20px"},w={class:"w-150px"};e("default",i({__name:"batch",props:{data:{}},setup(e,{expose:i}){const{t:x}=c(),h=e,{rows:C}=h.data,P=n(),S=d(null),O=d([]),{loading:R,setLoading:U}=u();return(async()=>{try{U(!0);const{message:e}=await o();t(e)&&e.length>0?(O.value=e.map((e=>({label:e.name,value:e.id}))),S.value=e[0].id):(S.value=null,O.value=[])}finally{U(!1)}})(),i({onConfirm:async({hide:e})=>{await r((()=>{if(null===S.value)throw s.error(x("Crontab.Planned.index_28")),new Error(x("Crontab.Planned.index_28"));return{id:S.value,crontab_ids:JSON.stringify(C.map((e=>e.id)))}})()),P.setRefresh(!0),e()}}),(e,n)=>{const t=b,s=j,u=l;return _(),g("div",a,[p(u,null,{default:v((()=>[p(s,{label:e.$t("Crontab.Planned.index_27"),"show-feedback":!1},{default:v((()=>[y("div",w,[p(t,{value:f(S),"onUpdate:value":n[0]||(n[0]=e=>m(S)?S.value=e:null),loading:f(R),options:f(O)},null,8,["value","loading","options"])])])),_:1},8,["label"])])),_:1})])}}}))}}}));
