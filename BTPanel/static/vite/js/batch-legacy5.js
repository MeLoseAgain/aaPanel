System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./site-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(e,a){"use strict";var l,t,s,n,u,i,c,o,r,d,_,p,v,g,y,m,f,j,w;return{setters:[e=>{l=e._},e=>{t=e.cw,s=e.I,n=e.m},e=>{u=e.c},e=>{i=e.c,c=e.b1},e=>{o=e.d,r=e.O,d=e.r,_=e.R,p=e.S,v=e.P,g=e.a1,y=e.U,m=e.V,f=e.af},e=>{j=e.cn,w=e.ch},null,null],execute:function(){const a={class:"p-20px"},b={class:"w-150px"};e("default",o({__name:"batch",props:{data:{}},setup(e,{expose:o}){const{t:h}=r(),P=e,{rows:x}=P.data,S=t(),H=d(null),R=d([]),{loading:U,setLoading:k}=u();return(async()=>{try{k(!0);const{message:e}=await i();s(e)&&e.length>0?(R.value=e.map((e=>({label:e.name,value:e.id}))),H.value=e[0].id):(H.value=null,R.value=[])}finally{k(!1)}})(),o({onConfirm:async({hide:e})=>{await c((()=>{if(null===H.value)throw n.error(h("Site.PHP.add_site_46")),new Error(h("Site.PHP.add_site_46"));return{id:H.value,site_ids:x.map((e=>e.id))}})()),S.setRefresh(!0),e()}}),(e,t)=>{const s=j,n=w,u=l;return _(),p("div",a,[v(u,null,{default:g((()=>[v(n,{label:e.$t("Site.PHP.add_site_22"),"show-feedback":!1},{default:g((()=>[y("div",b,[v(s,{value:m(H),"onUpdate:value":t[0]||(t[0]=e=>f(H)?H.value=e:null),loading:m(U),options:m(R)},null,8,["value","loading","options"])])])),_:1},8,["label"])])),_:1})])}}}))}}}));
