System.register(["./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./site-legacy3.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306"],(function(e,t){"use strict";var a,s,l,n,i,u,c,o,r,p,m;return{setters:[e=>{a=e._},e=>{s=e.c8},e=>{l=e.b},e=>{n=e.b},e=>{i=e.d,u=e.M,c=e.N,o=e.P,r=e.Q,p=e.S},e=>{m=e.bV},null,null],execute:function(){const t={class:"p-20px"};e("default",i({__name:"site",props:{list:{}},setup(e){const i=e,_=s(),{t:d}=u(),{table:y,columns:g}=l([{key:"name",title:d("Waf.Overview.index_18"),ellipsis:{tooltip:!0}},{key:"status",title:d("Waf.Overview.index_19"),width:"40%",render:(e,t)=>c(m,{value:e.status,size:"small",onUpdateValue:async a=>{a&&(await n({siteName:e.name,obj:"open"}),y.data.splice(t,1),_.getNewInfo())}},null)}]);return y.data=i.list.map((e=>({name:e,status:!1}))),(e,s)=>{const l=a;return o(),r("div",t,[c(l,{"max-height":470,data:p(y).data,columns:p(g)},null,8,["data","columns"])])}}}))}}}));
