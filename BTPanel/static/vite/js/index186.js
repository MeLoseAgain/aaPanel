import{_ as a}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{l as e}from"./mail.js?v=1741416570306";import{d as s,j as o,P as i,Q as l,N as m,$ as r,R as t,S as p}from"./vue.js?v=1741416570306";import{_ as n,cb as _}from"./naive.js?v=1741416570306";import"./page_layout.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./public.js?v=1741416570306";const u={class:"p-20px"},d={class:"w-290px"},c=s({__name:"index",props:{row:{}},emits:["refresh"],setup(s,{expose:c,emit:f}){const j=s,v=f,{row:x}=j,b=o({email:""});return c({onConfirm:async()=>{await e({domain:x.domain,email:b.email}),v("refresh")}}),(e,s)=>{const o=n,c=_,f=a;return i(),l("div",u,[m(f,null,{default:r((()=>[m(c,{label:e.$t("Mail.Domain.index_28"),"show-feedback":!1},{default:r((()=>[t("div",d,[m(o,{value:p(b).email,"onUpdate:value":s[0]||(s[0]=a=>p(b).email=a),placeholder:e.$t("Mail.Domain.index_29")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1})])}}});export{c as default};
