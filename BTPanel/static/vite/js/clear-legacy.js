System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./tools-legacy2.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./rules-legacy.js?v=1742891699271"],(function(e,l){"use strict";var a,t,s,n,c,i,o,u,r,_,p,f,d,g,v,m,y,x,j,h,b;return{setters:[e=>{a=e._},e=>{t=e.I},e=>{s=e.a},e=>{n=e.i,c=e.r},e=>{i=e.T,o=e.aV,u=e.cn,r=e.ch},e=>{_=e.d,p=e.O,f=e.r,d=e.j,g=e.R,v=e.S,m=e.P,y=e.a1,x=e.U,j=e.V,h=e.c,b=e.a2},null,null,null],execute:function(){const l={class:"p-20px pt-24px pb-8px"},k={class:"w-260px"};e("default",_({__name:"clear",setup(e,{expose:_}){const{t:w}=p(),B=f(null),C=d({site:[]}),W={site:{trigger:["change"],validator:()=>0!==C.site.length||new Error(w("Waf.Block.index_27"))}},$=f([]),P=()=>{C.site=$.value.map((e=>e.value))},N=()=>{C.site=[]};return(async()=>{const{message:e}=await n();t(e)&&($.value=e.map((e=>({label:e.siteName,value:e.siteName}))))})(),_({onConfirm:async()=>(await(B.value?.validate()),s({title:w("Waf.Block.index_28"),content:w("Waf.Block.index_29"),onConfirm:async()=>{const e=C.site.length===$.value.length;await c({safe_logs:0,site_all:e?1:0,site_logs:C.site})}}),!1)}),(e,t)=>{const s=i,n=o,c=u,_=r,p=a;return g(),v("div",l,[m(p,{ref_key:"formRef",ref:B,model:j(C),rules:W},{default:y((()=>[m(_,{label:e.$t("Waf.Block.index_25"),path:"site"},{default:y((()=>[x("div",k,[m(c,{value:j(C).site,"onUpdate:value":t[0]||(t[0]=e=>j(C).site=e),options:j($),multiple:!0,filterable:!0,"max-tag-count":"responsive",placeholder:e.$t("Waf.Block.index_27")},{header:y((()=>[m(n,{class:"w-full"},{default:y((()=>[m(s,{class:"flex-1",onClick:P},{default:y((()=>[h(b(e.$t("Public.All")),1)])),_:1}),m(s,{class:"flex-1",onClick:N},{default:y((()=>[h(b(e.$t("Public.Btn.Cancel")),1)])),_:1})])),_:1})])),_:1},8,["value","options","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}))}}}));
