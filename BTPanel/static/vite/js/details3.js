import{_ as t}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{cb as e,G as i}from"./page_layout.js?v=1741416570306";import{b as s,f as r}from"./public.js?v=1741416570306";import{g as p}from"./index77.js?v=1741416570306";import{s as _}from"./tools2.js?v=1741416570306";import{d as o,M as a,P as n,Q as u,N as l,S as m}from"./vue.js?v=1741416570306";import"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./rules.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import"./index99.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang16.js?v=1741416570306";const d={class:"p-20px"},c=o({__name:"details",props:{list:{}},setup(o){const c=o,{t:j}=a(),{table:v,columns:x}=s([{key:"time_localtime",title:j("Waf.Report.index_13"),width:140},{key:"ip",title:j("Waf.Report.index_7"),width:120},{key:"server_name",title:j("Waf.Report.index_14"),width:120},{key:"ip_country",title:j("Waf.Report.index_8"),width:140,render:t=>t.ip_country||"--"},{key:"uri",title:"URI",ellipsis:{tooltip:!0},render:t=>e(t.uri)},{key:"filter_rule",title:j("Waf.Report.index_1"),width:140},r({width:80,options:t=>[{label:j("Public.Btn.Details"),onClick:async()=>{const{message:e}=await p({id:t.id});i(e)&&e.length>0&&_(e[0])}}]})]);return v.data=c.list,(e,i)=>{const s=t;return n(),u("div",d,[l(s,{"max-height":550,data:m(v).data,columns:m(x)},null,8,["data","columns"])])}}});export{c as default};
