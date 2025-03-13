import{_ as a}from"./index.js?v=1741416570306";import{k as t,_ as e,cJ as s,cK as o,cL as n,cM as r,m as i,D as d,as as l}from"./page_layout.js?v=1741416570306";import{a as m}from"./public.js?v=1741416570306";import{d as p,P as c,Q as x,R as _,a0 as y,af as u,M as f,r as v,N as H,F as R,L as w,_ as T,S as j,$ as h,c as C,ae as k}from"./vue.js?v=1741416570306";import{T as g}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";const $=t(p({__name:"info",props:{data:{}},setup:a=>(a,t)=>(c(),x("div",{class:u(["info",a.data.type])},[t[0]||(t[0]=_("div",{class:"mark"},null,-1)),_("div",null,y("start"===a.data.type?a.data.startText:a.data.loadText+"..."),1)],2))}),[["__scopeId","data-v-ffc5901a"]]),b={class:"w-466px p-16px text-[#555]"},I={class:"flex items-center text-error"},L={class:"ml-8px leading-17px"},M={class:"my-10px leading-26px"},S={class:"safe-restart"},z=t(p({__name:"index",emits:["setConfirm"],setup(a,{expose:t,emit:l}){const m=l,{t:p}=f(),u=v([{type:"start",startText:p("Home.Restart.index_7"),loadText:p("Home.Restart.index_8")},{type:"start",startText:p("Home.Restart.index_9"),loadText:p("Home.Restart.index_10")},{type:"start",startText:p("Home.Restart.index_11"),loadText:p("Home.Restart.index_11")},{type:"start",startText:p("Home.Restart.index_12"),loadText:p("Home.Restart.index_12")}]),h=()=>{setTimeout((async()=>{try{await r(),i.success(p("Home.Restart.index_13")),d()}catch(a){h()}}),1e3)};return t({onConfirm:async()=>{m("setConfirm",{loading:!0,disabled:!0});try{await(async()=>{u.value[0].type="load",await s(),u.value[0].type="done"})(),await(async()=>{u.value[1].type="load",await o(),u.value[1].type="done"})(),await(async()=>{u.value[2].type="load",await n(),u.value[2].type="done"})(),await(async()=>{u.value[3].type="load";try{await r()}finally{u.value[3].type="done"}})(),h()}catch(a){u.value.forEach((a=>{a.type="start"})),m("setConfirm",{loading:!1,disabled:!1})}}}),(a,t)=>{const s=e;return c(),x("div",b,[_("div",I,[H(s,{name:"common-ask",size:"17"}),_("span",L,y(a.$t("Home.Restart.index_5")),1)]),_("div",M,y(a.$t("Home.Restart.index_6")),1),_("div",S,[(c(!0),x(R,null,w(j(u),(a=>(c(),T($,{key:a.startText,data:a},null,8,["data"])))),128))])])}}}),[["__scopeId","data-v-a2ca3601"]]),D={class:"flex items-center justify-center h-110px px-30px"},E=t(p({__name:"index",setup(t){const{t:e}=f(),s=v(!1),o=()=>{s.value=!0},n=()=>{m({title:e("Home.Restart.index_3"),content:e("Home.Restart.index_4"),onConfirm:async()=>{await l(!0),d(3e3)}})};return(t,e)=>{const r=g,i=a;return c(),x("div",D,[H(r,{type:"primary",onClick:o},{default:h((()=>[C(y(t.$t("Home.Restart.index_1")),1)])),_:1}),H(r,{type:"primary",class:"ml-32px",onClick:n},{default:h((()=>[C(y(t.$t("Home.Restart.index_2")),1)])),_:1}),H(i,{show:j(s),"onUpdate:show":e[0]||(e[0]=a=>k(s)?s.value=a:null),title:"Safely reboot server",footer:!0,component:z},null,8,["show"])])}}}),[["__scopeId","data-v-f8929ce6"]]);export{E as default};
