System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306"],(function(e,l){"use strict";var s,t,a,n,r,o,u,i,c,d,_,p,v,g,y,m,x,b;return{setters:[e=>{s=e._},e=>{t=e.d,a=e.M,n=e.Y,r=e.r,o=e.j,u=e.e,i=e.P,c=e.Q,d=e.N,_=e.$,p=e.R,v=e.S},e=>{g=e.aA,y=e.dd,m=e.m},e=>{x=e.ch,b=e.cb},null,null,null],execute:function(){const l={class:"px-20px pt-24px pb-8px"},f={class:"w-260px"};e("default",t({__name:"index",setup(e,{expose:t}){const{t:h}=a(),j=g(),{remoteList:w}=n(j),D=r(null),$=o({sid:w.value.length>0?w.value[0].id:null}),R=u((()=>w.value.map((e=>({label:`${e.ps||e.db_host} (${e.db_host})`,value:e.id}))))),E={sid:{trigger:"change",validator:(e,l)=>null!==l||new Error(h("Database.tools.index_63"))}};return t({onConfirm:async({hide:e})=>{try{await(D.value?.validate());const l=(()=>{const{sid:e}=$;if(null===e)throw m.error(h("Database.tools.index_64")),new Error(h("Database.tools.index_64"));return{sid:e}})();await y(j.type,l),j.setRefresh(!0),e()}catch(l){console.error(l)}}}),(e,t)=>{const a=x,n=b,r=s;return i(),c("div",l,[d(r,{ref_key:"formRef",ref:D,model:v($),rules:E},{default:_((()=>[d(n,{label:e.$t("Database.tools.index_76"),path:"sid"},{default:_((()=>[p("div",f,[d(a,{value:v($).sid,"onUpdate:value":t[0]||(t[0]=e=>v($).sid=e),class:"server-select",options:v(R)},null,8,["value","options"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}))}}}));
