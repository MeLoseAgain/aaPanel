import{_ as a}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{aA as e,dL as s,j as r,m as l}from"./page_layout.js?v=1741416570306";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1741416570306";import{d as o,M as d,Y as i,r as n,j as u,e as p,P as m,_,$ as c,N as b,R as v,S as f,c as x,a0 as g,a7 as h}from"./vue.js?v=1741416570306";import{g as j}from"./index122.js?v=1741416570306";import{_ as w,cb as D,ch as $}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./public.js?v=1741416570306";import"./index96.js?v=1741416570306";import"./index123.js?v=1741416570306";import"./soft.js?v=1741416570306";const y={class:"w-240px"},U={class:"w-240px"},q={class:"w-240px"},R={class:"w-240px"},k={class:"ml-8px"},C=o({__name:"index",setup(o,{expose:C}){const{t:E}=d(),L=e(),{remoteList:A}=i(L),H=n(null),M=u({sid:A.value.length>0?A.value[0].id:null,name:"",db_user:"",password:"",active:!1,ssl:""}),N=p((()=>A.value.map((a=>({label:"".concat(a.ps," (").concat(a.db_host,")"),value:a.id}))))),P={name:{required:!0,message:E("Database.form.index_15"),trigger:["blur","change"]},db_user:{required:!0,message:E("Database.form.index_16"),trigger:["blur","change"]},password:{required:!0,message:E("Database.form.index_17"),trigger:["blur","change"]},sid:{trigger:"change",validator:(a,e)=>null!==e||new Error(E("Database.form.index_18"))}},S=a=>{M.db_user=a},Y=()=>{j()};return C({onConfirm:async({hide:a})=>{var e;try{await(null==(e=H.value)?void 0:e.validate());const r=(()=>{const{sid:a}=M;if(null===a)throw l.error(E("Database.form.index_18")),new Error(E("Database.form.index_18"));return{...h(M),sid:a,ps:M.name}})();await s(L.type,r),L.setRefresh(!0),a()}catch(r){console.error(r)}}}),(e,s)=>{const l=w,o=D,d=t,i=$,n=r,u=a;return m(),_(u,{ref_key:"formRef",ref:H,model:f(M),rules:P,class:"p-20px"},{default:c((()=>[b(o,{label:e.$t("Database.index_12"),path:"name"},{default:c((()=>[v("div",y,[b(l,{value:f(M).name,"onUpdate:value":[s[0]||(s[0]=a=>f(M).name=a),S],placeholder:e.$t("Database.form.index_2")},null,8,["value","placeholder"])])])),_:1},8,["label"]),b(o,{label:e.$t("Database.index_13"),path:"db_user"},{default:c((()=>[v("div",U,[b(l,{value:f(M).db_user,"onUpdate:value":s[1]||(s[1]=a=>f(M).db_user=a),placeholder:e.$t("Database.form.index_4")},null,8,["value","placeholder"])])])),_:1},8,["label"]),b(o,{label:e.$t("Database.index_14"),path:"password"},{default:c((()=>[v("div",q,[b(d,{value:f(M).password,"onUpdate:value":s[2]||(s[2]=a=>f(M).password=a),placeholder:""},null,8,["value"])])])),_:1},8,["label"]),b(o,{label:e.$t("Database.form.index_9"),path:"sid"},{default:c((()=>[v("div",R,[b(i,{value:f(M).sid,"onUpdate:value":s[3]||(s[3]=a=>f(M).sid=a),options:f(N)},null,8,["value","options"])]),v("div",k,[b(n,{onClick:Y},{default:c((()=>[x(g(e.$t("Database.form.index_10")),1)])),_:1})])])),_:1},8,["label"])])),_:1},8,["model"])}}});export{C as default};
