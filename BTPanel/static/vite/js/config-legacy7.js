System.register(["./index-legacy95.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./setting-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306"],(function(e,l){"use strict";var t,a,n,i,c,s,u,o,g,r,d,_,y,f,p,m,v,x,j,b,S,$,h,W;return{setters:[e=>{t=e._},e=>{a=e._},e=>{n=e.d,i=e.M,c=e.r,s=e.P,u=e.Q,o=e.R,g=e.N,r=e.S,d=e.ae,_=e.am,y=e.$,f=e.c,p=e.a0},e=>{m=e.G,v=e.m},e=>{x=e.b,j=e.f},e=>{b=e.q,S=e.t,$=e.v},e=>{h=e._,W=e.T},null,null],execute:function(){const l={class:"p-20px"},w={class:"flex mb-16px"},k={class:"flex-1 mr-16px"};e("default",n({__name:"config",setup(e){const{t:n}=i(),P=c(""),B=async()=>{""!==P.value.trim()?(await $({text:P.value}),P.value="",U()):v.error(n("Waf.Setting.config_81"))},{table:C,columns:L,setLoading:R}=x([{key:"rule",title:"URL"},j({width:80,options:e=>[{label:n("Public.Btn.Del"),onClick:async()=>{await b({text:e.rule}),U()}}]})]),U=async()=>{try{R(!0);const{message:e}=await S();m(e)&&(C.data=e.map((e=>({rule:e}))))}finally{R(!1)}};return U(),(e,n)=>{const i=h,c=W,m=a,v=t;return s(),u("div",l,[o("div",w,[o("div",k,[g(i,{value:r(P),"onUpdate:value":n[0]||(n[0]=e=>d(P)?P.value=e:null),placeholder:e.$t("Waf.Setting.config_78"),onKeyup:_(B,["enter"])},null,8,["value","placeholder"])]),g(c,{type:"primary",onClick:B},{default:y((()=>[f(p(e.$t("Public.Btn.Add")),1)])),_:1})]),g(m,{"max-height":368,loading:r(C).loading,data:r(C).data,columns:r(L)},null,8,["loading","data","columns"]),g(v,{class:"mt-16px"},{default:y((()=>[o("li",null,p(e.$t("Waf.Setting.config_77")),1),o("li",null,p(e.$t("Waf.Setting.config_79")),1),o("li",null,p(e.$t("Waf.Setting.config_80")),1)])),_:1})])}}}))}}}));
