System.register(["./index-legacy95.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./site-legacy3.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(e,a){"use strict";var l,t,s,n,i,c,u,d,r,o,m,_,g,p,y,f,v,x,h,j,b,N,C;return{setters:[e=>{l=e._},e=>{t=e._},e=>{s=e.I,n=e.m},e=>{i=e.b,c=e.f},e=>{u=e.t,d=e.u,r=e.v},e=>{o=e._,m=e.T},e=>{_=e.d,g=e.O,p=e.r,y=e.R,f=e.S,v=e.U,x=e.P,h=e.V,j=e.af,b=e.a1,N=e.c,C=e.a2},null,null],execute:function(){const a={class:"p-20px"},S={class:"flex mb-16px"},w={class:"flex-1 mr-16px"};e("default",_({__name:"index",props:{siteName:{default:""}},setup(e){const _=e,{t:k}=g(),P=p(""),W=async()=>{""!==P.value.trim()?(await r({siteName:_.siteName,cdn_header:P.value}),U()):n.error(k("Waf.Site.Config.index_61"))},{table:$,columns:B,setLoading:H}=i([{key:"header",title:"Header"},c({width:80,options:e=>[{label:k("Public.Btn.Del"),onClick:async()=>{await u({siteName:_.siteName,cdn_header:e.header}),U()}}]})]),U=async()=>{try{H(!0);const{siteName:e}=_,{message:a}=await d({siteName:e});s(a)&&($.data=a.map((e=>({header:e}))))}finally{H(!1)}};return U(),(e,s)=>{const n=o,i=m,c=t,u=l;return y(),f("div",a,[v("div",S,[v("div",w,[x(n,{value:h(P),"onUpdate:value":s[0]||(s[0]=e=>j(P)?P.value=e:null),placeholder:e.$t("Waf.Site.Config.index_59")},null,8,["value","placeholder"])]),x(i,{type:"primary",onClick:W},{default:b((()=>[N(C(e.$t("Public.Btn.Add")),1)])),_:1})]),x(c,{"max-height":368,loading:h($).loading,data:h($).data,columns:h(B)},null,8,["loading","data","columns"]),x(u,{class:"mt-16px"},{default:b((()=>[v("li",null,C(e.$t("Waf.Site.Config.index_60")),1)])),_:1})])}}}))}}}));
