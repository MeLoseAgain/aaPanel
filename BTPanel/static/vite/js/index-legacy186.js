System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./mail-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271"],(function(e,l){"use strict";var a,n,s,t,i,u,c,o,r,m,_,d;return{setters:[e=>{a=e._},e=>{n=e.l},e=>{s=e.d,t=e.j,i=e.R,u=e.S,c=e.P,o=e.a1,r=e.U,m=e.V},e=>{_=e._,d=e.ch},null,null,null,null],execute:function(){const l={class:"p-20px"},p={class:"w-290px"};e("default",s({__name:"index",props:{row:{}},emits:["refresh"],setup(e,{expose:s,emit:y}){const g=e,j=y,{row:v}=g,f=t({email:""});return s({onConfirm:async()=>{await n({domain:v.domain,email:f.email}),j("refresh")}}),(e,n)=>{const s=_,t=d,y=a;return i(),u("div",l,[c(y,null,{default:o((()=>[c(t,{label:e.$t("Mail.Domain.index_28"),"show-feedback":!1},{default:o((()=>[r("div",p,[c(s,{value:m(f).email,"onUpdate:value":n[0]||(n[0]=e=>m(f).email=e),placeholder:e.$t("Mail.Domain.index_29")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1})])}}}))}}}));
