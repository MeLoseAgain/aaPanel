System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./index-legacy122.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./index-legacy96.js?v=1742891699271","./index-legacy123.js?v=1742891699271","./soft-legacy.js?v=1742891699271"],(function(e,a){"use strict";var l,s,t,r,n,u,d,i,o,_,c,p,b,g,v,m,x,f,y,h,j,w,D,$,U,k,q;return{setters:[e=>{l=e._},e=>{s=e.bi,t=e.ew,r=e.j,n=e.m},e=>{u=e._},e=>{d=e.d,i=e.O,o=e._,_=e.r,c=e.j,p=e.e,b=e.R,g=e.a0,v=e.a1,m=e.P,x=e.U,f=e.V,y=e.k,h=e.v,j=e.c,w=e.a2,D=e.M},e=>{$=e.g},e=>{U=e._,k=e.ch,q=e.cn},null,null,null,null,null,null],execute:function(){const a={class:"w-240px"},R={class:"w-240px"},C={class:"w-240px"},E={class:"w-240px"},H={class:"ml-8px"};e("default",d({__name:"index",props:{data:{}},setup(e,{expose:d}){const{t:L}=i(),M=e,{status:O}=M.data,P=s(),{remoteList:S}=o(P),V=_(null),z=c({sid:S.value.length>0?S.value[0].id:null,name:"",db_user:"",password:"",active:!1,ssl:""}),A=p((()=>S.value.map((e=>({label:`${e.ps} (${e.db_host})`,value:e.id}))))),B={name:{required:!0,message:L("Database.form.index_15"),trigger:["blur","change"]},db_user:{required:!0,message:L("Database.form.index_16"),trigger:["blur","change"]},password:{required:!0,message:L("Database.form.index_17"),trigger:["blur","change"]},sid:{trigger:"change",validator:(e,a)=>null!==a||new Error(L("Database.tools.index_64"))}},F=e=>{z.db_user=e},G=()=>{$()};return d({onConfirm:async({hide:e})=>{try{await(V.value?.validate());const a=(()=>{const{sid:e}=z;if(null===e)throw n.error(L("Database.tools.index_64")),new Error(L("Database.tools.index_64"));return{...D(z),sid:e,ps:z.name}})();await t(P.type,a),P.setRefresh(!0),e()}catch(a){console.error(a)}}}),(e,s)=>{const t=U,n=k,d=u,i=q,o=r,_=l;return b(),g(_,{ref_key:"formRef",ref:V,model:f(z),rules:B,class:"p-20px"},{default:v((()=>[m(n,{label:e.$t("Database.index_12"),path:"name"},{default:v((()=>[x("div",a,[m(t,{value:f(z).name,"onUpdate:value":[s[0]||(s[0]=e=>f(z).name=e),F],placeholder:e.$t("Database.form.index_2")},null,8,["value","placeholder"])])])),_:1},8,["label"]),y(m(n,{label:e.$t("Database.index_13"),path:"db_user"},{default:v((()=>[x("div",R,[m(t,{value:f(z).db_user,"onUpdate:value":s[1]||(s[1]=e=>f(z).db_user=e),placeholder:e.$t("Database.form.index_4")},null,8,["value","placeholder"])])])),_:1},8,["label"]),[[h,f(O)]]),y(m(n,{label:e.$t("Database.index_14"),path:"password"},{default:v((()=>[x("div",C,[m(d,{value:f(z).password,"onUpdate:value":s[2]||(s[2]=e=>f(z).password=e)},null,8,["value"])])])),_:1},8,["label"]),[[h,f(O)]]),m(n,{label:e.$t("Database.form.index_9"),path:"sid"},{default:v((()=>[x("div",E,[m(i,{value:f(z).sid,"onUpdate:value":s[3]||(s[3]=e=>f(z).sid=e),options:f(A)},null,8,["value","options"])]),x("div",H,[m(o,{onClick:G},{default:v((()=>[j(w(e.$t("Database.form.index_10")),1)])),_:1})])])),_:1},8,["label"])])),_:1},8,["model"])}}}))}}}));
