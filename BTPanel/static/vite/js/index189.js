import{_ as a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{U as s,_ as e,k as t}from"./page_layout.js?v=1741416570306";import{b as l}from"./public.js?v=1741416570306";import{d as i,M as o,a1 as n,P as m,Q as r,R as c,N as p,$ as _,a0 as u,S as d,_ as b,c as x}from"./vue.js?v=1741416570306";import{bO as k}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";const j={class:"p-20px"},y={class:"title-top"},f={class:"text-center my-16px"},v=t(i({__name:"index",props:{row:{}},setup(t){const{t:i}=o(),v=t,{row:M}=v,{table:D,columns:g}=l([{key:"blacklist",title:i("Mail.Domain.index_60")},{key:"time",title:i("Mail.Domain.index_61"),render:a=>s(a.time)}]);return M&&(D.data=M.black_list),(s,t)=>{const l=n("i18n-t"),i=e,o=k,v=a;return m(),r("div",j,[c("p",y,[p(l,{keypath:"Mail.Domain.index_59",scope:"global"},{a:_((()=>[c("b",null,u(d(M).results),1)])),b:_((()=>[c("b",null,u(d(M).ip),1)])),c:_((()=>[c("b",null,u(d(M).tested),1)])),_:1})]),c("p",f,[c("b",null,u(s.$t("Mail.Domain.index_57"))+"："+u(d(M).blacklisted),1)]),d(M).blacklisted?(m(),b(v,{key:1,data:d(D).data,columns:d(g),"max-height":"200"},null,8,["data","columns"])):(m(),b(o,{key:0,class:"box justify-center!"},{default:_((()=>[p(i,{name:"base-success",size:"24",color:"#20a53a"}),x(" "+u(s.$t("Mail.Domain.index_58")),1)])),_:1}))])}}}),[["__scopeId","data-v-4871b60c"]]);export{v as default};
