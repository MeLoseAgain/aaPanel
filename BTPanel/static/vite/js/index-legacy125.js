System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./index-legacy122.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./index-legacy96.js?v=1741416570306","./index-legacy123.js?v=1741416570306","./soft-legacy.js?v=1741416570306"],(function(e,a){"use strict";var l,s,t,r,n,d,u,o,i,_,c,p,b,g,v,m,x,f,y,h,j,w,D,$,U,k,q;return{setters:[e=>{l=e._},e=>{s=e.aA,t=e.dL,r=e.j,n=e.m},e=>{d=e._},e=>{u=e.d,o=e.M,i=e.Y,_=e.r,c=e.j,p=e.e,b=e.P,g=e._,v=e.$,m=e.N,x=e.R,f=e.S,y=e.k,h=e.v,j=e.c,w=e.a0,D=e.a7},e=>{$=e.g},e=>{U=e._,k=e.cb,q=e.ch},null,null,null,null,null,null],execute:function(){const a={class:"w-240px"},R={class:"w-240px"},C={class:"w-240px"},E={class:"w-240px"},L={class:"ml-8px"};e("default",u({__name:"index",props:{data:{}},setup(e,{expose:u}){const{t:S}=o(),A=e,{status:H}=A.data,M=s(),{remoteList:N}=i(M),P=_(null),Y=c({sid:N.value.length>0?N.value[0].id:null,name:"",db_user:"",password:"",active:!1,ssl:""}),z=p((()=>N.value.map((e=>({label:`${e.ps} (${e.db_host})`,value:e.id}))))),B={name:{required:!0,message:S("Database.form.index_15"),trigger:["blur","change"]},db_user:{required:!0,message:S("Database.form.index_16"),trigger:["blur","change"]},password:{required:!0,message:S("Database.form.index_17"),trigger:["blur","change"]},sid:{trigger:"change",validator:(e,a)=>null!==a||new Error(S("Database.tools.index_64"))}},F=e=>{Y.db_user=e},G=()=>{$()};return u({onConfirm:async({hide:e})=>{try{await(P.value?.validate());const a=(()=>{const{sid:e}=Y;if(null===e)throw n.error(S("Database.tools.index_64")),new Error(S("Database.tools.index_64"));return{...D(Y),sid:e,ps:Y.name}})();await t(M.type,a),M.setRefresh(!0),e()}catch(a){console.error(a)}}}),(e,s)=>{const t=U,n=k,u=d,o=q,i=r,_=l;return b(),g(_,{ref_key:"formRef",ref:P,model:f(Y),rules:B,class:"p-20px"},{default:v((()=>[m(n,{label:e.$t("Database.index_12"),path:"name"},{default:v((()=>[x("div",a,[m(t,{value:f(Y).name,"onUpdate:value":[s[0]||(s[0]=e=>f(Y).name=e),F],placeholder:e.$t("Database.form.index_2")},null,8,["value","placeholder"])])])),_:1},8,["label"]),y(m(n,{label:e.$t("Database.index_13"),path:"db_user"},{default:v((()=>[x("div",R,[m(t,{value:f(Y).db_user,"onUpdate:value":s[1]||(s[1]=e=>f(Y).db_user=e),placeholder:e.$t("Database.form.index_4")},null,8,["value","placeholder"])])])),_:1},8,["label"]),[[h,f(H)]]),y(m(n,{label:e.$t("Database.index_14"),path:"password"},{default:v((()=>[x("div",C,[m(u,{value:f(Y).password,"onUpdate:value":s[2]||(s[2]=e=>f(Y).password=e)},null,8,["value"])])])),_:1},8,["label"]),[[h,f(H)]]),m(n,{label:e.$t("Database.form.index_9"),path:"sid"},{default:v((()=>[x("div",E,[m(o,{value:f(Y).sid,"onUpdate:value":s[3]||(s[3]=e=>f(Y).sid=e),options:f(z)},null,8,["value","options"])]),x("div",L,[m(i,{onClick:G},{default:v((()=>[j(w(e.$t("Database.form.index_10")),1)])),_:1})])])),_:1},8,["label"])])),_:1},8,["model"])}}}))}}}));
