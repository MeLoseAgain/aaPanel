System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./index-legacy96.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306"],(function(e,a){"use strict";var s,l,t,r,n,u,d,p,o,_,c,i,m,v,w,y,f;return{setters:[e=>{s=e._},e=>{l=e._},e=>{t=e.aA,r=e.di},e=>{n=e.d,u=e.M,d=e.r,p=e.j,o=e.P,_=e._,c=e.$,i=e.N,m=e.R,v=e.S,w=e.a7},e=>{y=e._,f=e.cb},null,null,null,null],execute:function(){const a={class:"w-280px"},g={class:"w-280px"};e("default",n({__name:"index",props:{data:{}},setup(e,{expose:n}){const{t:x}=u(),b=e,{row:j}=b.data,h=t(),D=d(null),R=p({name:j.username,password:j.password}),$={password:{trigger:["blur","input"],validator:()=>R.password?!(R.password.length<6)||new Error(x("Database.form.index_20")):new Error(x("Database.form.index_17"))}};return n({onConfirm:async()=>{try{await(D.value?.validate());const e={id:j.id,...w(R)};await r(h.type,e),h.setRefresh(!0)}catch(e){console.warn(e)}}}),(e,t)=>{const r=y,n=f,u=l,d=s;return o(),_(d,{ref_key:"formRef",ref:D,model:v(R),rules:$,class:"px-20px pt-28px pb-8px"},{default:c((()=>[i(n,{label:e.$t("Database.index_13"),path:"name"},{default:c((()=>[m("div",a,[i(r,{value:v(R).name,"onUpdate:value":t[0]||(t[0]=e=>v(R).name=e),disabled:!0},null,8,["value"])])])),_:1},8,["label"]),i(n,{label:e.$t("Database.index_14"),path:"password"},{default:c((()=>[m("div",g,[i(u,{value:v(R).password,"onUpdate:value":t[1]||(t[1]=e=>v(R).password=e),default:!v(j).password,"input-props":{name:"password"}},null,8,["value","default"])])])),_:1},8,["label"])])),_:1},8,["model"])}}}))}}}));
