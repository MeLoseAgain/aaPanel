import{_ as a}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{bx as e}from"./page_layout.js?v=1741416570306";import{h as o}from"./ftp.js?v=1741416570306";import{v as s}from"./index240.js?v=1741416570306";import{d as t,r,j as p,f as l,P as n,Q as i,N as m,$ as u,R as f,S as _,a7 as d}from"./vue.js?v=1741416570306";import{bS as v,cb as c}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./public.js?v=1741416570306";const x={class:"px-20px pt-24px pb-8px"},j={class:"w-220px"},b=t({__name:"index",setup(t,{expose:b}){const h=e(),y=r(null),g=r(null),w=p({port:h.port}),R={port:s()};l((()=>{var a;null==(a=g.value)||a.focus()}));return b({onConfirm:async({hide:a})=>{var e;await(null==(e=y.value)?void 0:e.validate()),await o(d(w)),h.getConfig(),a()}}),(e,o)=>{const s=v,t=c,r=a;return n(),i("div",x,[m(r,{ref_key:"formRef",ref:y,model:_(w),rules:R},{default:u((()=>[m(t,{label:e.$t("Ftp.Label.index_13"),path:"port"},{default:u((()=>[f("div",j,[m(s,{value:_(w).port,"onUpdate:value":o[0]||(o[0]=a=>_(w).port=a),ref_key:"portRef",ref:g,min:1,max:65535,"show-button":!1,"input-props":{name:"port"},placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{b as default};
