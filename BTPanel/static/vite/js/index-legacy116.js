System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./index-legacy122.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./index-legacy96.js?v=1741416570306","./index-legacy123.js?v=1741416570306","./soft-legacy.js?v=1741416570306"],(function(e,a){"use strict";var l,s,t,d,n,r,u,o,i,c,p,b,_,v,m,f,g,x,h,w,y,D,j,$,U,A,R;return{setters:[e=>{l=e._},e=>{s=e.aA,t=e.cN,d=e.j,n=e.m},e=>{r=e._},e=>{u=e.d,o=e.M,i=e.Y,c=e.r,p=e.j,b=e.e,_=e.P,v=e._,m=e.$,f=e.N,g=e.R,x=e.S,h=e.ao,w=e.c,y=e.a0,D=e.a7},e=>{j=e.g},e=>{$=e._,U=e.ch,A=e.cb,R=e.bV},null,null,null,null,null,null],execute:function(){const a={class:"w-240px"},k={class:"w-100px ml-8px"},S={class:"w-240px"},E={class:"w-240px"},q={class:"w-240px"},L={class:"w-240px"},C={class:"w-240px"},M={class:"ml-8px"};e("default",u({__name:"index",setup(e,{expose:u}){const{t:N}=o(),Q=s(),{remoteList:z}=i(Q),H=c(null),I=p({sid:z.value.length>0?z.value[0].id:null,name:"",codeing:"utf8",db_user:"",password:"",dataAccess:"127.0.0.1",address:"127.0.0.1",active:!1,ssl:""}),P=c([{label:"utf-8",value:"utf8"},{label:"utf8mb4",value:"utf8mb4"},{label:"gbk",value:"gbk"},{label:"big5",value:"big5"}]),V=c([{label:N("Database.form.index_12"),value:"127.0.0.1"},{label:N("Database.form.index_13"),value:"%"},{label:N("Database.form.index_14"),value:"ip"}]),Y=b((()=>z.value.map((e=>({label:`${e.ps} (${e.db_host})`,value:e.id}))))),B={name:{required:!0,message:N("Database.form.index_15"),trigger:["blur","change"]},db_user:{required:!0,message:N("Database.form.index_16"),trigger:["blur","change"]},password:{required:!0,message:N("Database.form.index_17"),trigger:["blur","change"]},sid:{trigger:"change",validator:(e,a)=>null!==a||new Error(N("Database.form.index_18"))}},F=e=>{I.db_user=e},G=e=>{I.address="ip"===e?"":e},J=e=>{I.ssl=e?"REQUIRE SSL":""},K=()=>{j()};return u({onConfirm:async()=>{await(H.value?.validate());try{const e=(()=>{const e=D(I),{sid:a}=e;if(null===a)throw n.error(N("Database.form.index_18")),new Error(N("Database.form.index_18"));return{...e,sid:a,ps:e.name,dtype:"MySQL",address:"ip"===I.dataAccess?I.address.trim().split("\n").join(","):I.address}})();await t(e),Q.setRefresh(!0)}catch(e){console.warn(e)}}}),(e,s)=>{const t=$,n=U,u=A,o=r,i=d,c=R,p=l;return _(),v(p,{ref_key:"formRef",ref:H,model:x(I),rules:B,class:"p-20px"},{default:m((()=>[f(u,{label:e.$t("Database.form.index_1"),path:"name"},{default:m((()=>[g("div",a,[f(t,{value:x(I).name,"onUpdate:value":[s[0]||(s[0]=e=>x(I).name=e),F],placeholder:e.$t("Database.form.index_2"),"input-props":{name:"name"}},null,8,["value","placeholder"])]),g("div",k,[f(n,{value:x(I).codeing,"onUpdate:value":s[1]||(s[1]=e=>x(I).codeing=e),class:"code-select",options:x(P)},null,8,["value","options"])])])),_:1},8,["label"]),f(u,{label:e.$t("Database.form.index_3"),path:"db_user"},{default:m((()=>[g("div",S,[f(t,{value:x(I).db_user,"onUpdate:value":s[2]||(s[2]=e=>x(I).db_user=e),placeholder:e.$t("Database.form.index_4"),"input-props":{name:"username"}},null,8,["value","placeholder"])])])),_:1},8,["label"]),f(u,{label:e.$t("Database.form.index_5"),path:"password"},{default:m((()=>[g("div",E,[f(o,{value:x(I).password,"onUpdate:value":s[3]||(s[3]=e=>x(I).password=e),placeholder:"","input-props":{name:"password"}},null,8,["value"])])])),_:1},8,["label"]),f(u,{label:e.$t("Database.form.index_6"),path:"dataAccess"},{default:m((()=>[g("div",q,[f(n,{value:x(I).dataAccess,"onUpdate:value":[s[4]||(s[4]=e=>x(I).dataAccess=e),G],class:"access-select",options:x(V)},null,8,["value","options"])])])),_:1},8,["label"]),"ip"===x(I).dataAccess?(_(),v(u,{key:0,label:e.$t("Database.form.index_7"),path:"address"},{default:m((()=>[g("div",L,[f(t,{value:x(I).address,"onUpdate:value":s[5]||(s[5]=e=>x(I).address=e),type:"textarea",autosize:{minRows:3,maxRows:3},"input-props":{name:"address"},placeholder:e.$t("Database.form.index_8")},null,8,["value","placeholder"])])])),_:1},8,["label"])):h("",!0),f(u,{label:e.$t("Database.form.index_9"),path:"sid"},{default:m((()=>[g("div",C,[f(n,{value:x(I).sid,"onUpdate:value":s[6]||(s[6]=e=>x(I).sid=e),class:"sid-select",options:x(Y)},null,8,["value","options"])]),g("div",M,[f(i,{onClick:K},{default:m((()=>[w(y(e.$t("Database.form.index_10")),1)])),_:1})])])),_:1},8,["label"]),f(u,{label:e.$t("Database.form.index_11"),"show-feedback":!1},{default:m((()=>[f(c,{value:x(I).active,"onUpdate:value":[s[7]||(s[7]=e=>x(I).active=e),J],class:"ssl-switch"},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["model"])}}}))}}}));
