System.register(["./index-legacy95.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./site-legacy3.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306"],(function(e,a){"use strict";var l,t,i,n,s,u,c,o,r,d,m,_,g,p,y,f,x,v,N,j,b,C,S,h;return{setters:[e=>{l=e._},e=>{t=e._},e=>{i=e.d,n=e.M,s=e.r,u=e.P,c=e.Q,o=e.R,r=e.N,d=e.S,m=e.ae,_=e.am,g=e.$,p=e.c,y=e.a0},e=>{f=e.G,x=e.m},e=>{v=e.b,N=e.f},e=>{j=e.w,b=e.x,C=e.y},e=>{S=e._,h=e.T},null,null],execute:function(){const a={class:"p-20px"},w={class:"flex mb-16px"},W={class:"flex-1 mr-16px"},$="disable_ext";e("default",i({__name:"index",props:{siteName:{default:""}},setup(e){const i=e,{t:k}=n(),P=s(""),B=async()=>{""!==P.value.trim()?(await C({siteName:i.siteName,ruleName:$,ruleValue:P.value}),P.value="",H()):x.error(k("Waf.Site.Config.index_65"))},{table:A,columns:D,setLoading:G}=v([{key:"rule",title:k("Waf.Site.Config.index_66")},N({width:80,options:(e,a)=>[{label:k("Public.Btn.Del"),onClick:async()=>{await j({index:a,siteName:i.siteName,ruleName:$}),H()}}]})]),H=async()=>{try{G(!0);const{siteName:e}=i,{message:a}=await b({siteName:e,ruleName:$});f(a)&&(A.data=a.map((e=>({rule:e}))))}finally{G(!1)}};return H(),(e,i)=>{const n=S,s=h,f=t,x=l;return u(),c("div",a,[o("div",w,[o("div",W,[r(n,{value:d(P),"onUpdate:value":i[0]||(i[0]=e=>m(P)?P.value=e:null),placeholder:e.$t("Waf.Site.Config.index_103"),onKeyup:_(B,["enter"])},null,8,["value","placeholder"])]),r(s,{type:"primary",onClick:B},{default:g((()=>[p(y(e.$t("Public.Btn.Add")),1)])),_:1})]),r(f,{"max-height":368,loading:d(A).loading,data:d(A).data,columns:d(D)},null,8,["loading","data","columns"]),r(x,{class:"mt-16px"},{default:g((()=>[o("li",null,y(e.$t("Waf.Site.Config.index_63")),1),o("li",null,y(e.$t("Waf.Site.Config.index_64")),1)])),_:1})])}}}))}}}));
