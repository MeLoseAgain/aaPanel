import{e,u as a,n as t,i as s,a as n,b as o,c as i,d as r,f as l,g as u,o as m,j as p,k as d,l as f}from"./echarts.js?v=1741416570306";import{bJ as v}from"./naive.js?v=1741416570306";import{d as c,r as h,w as g,n as y,au as j,f as w,o as _,P as b,Q as x,H as B,S as z}from"./vue.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./common.js?v=1741416570306";a([t,s,n,o,i,r,l,u,m,p,d,f]);const D=c({__name:"index",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"200px"},dataZoom:{type:Boolean,default:!1},option:{type:Object,required:!0}},setup(a){const t=a,s=h(null);function n(){if(null===s.value)return;let a=e.getInstanceByDom(s.value);null==a&&(a=e.init(s.value)),a.setOption(t.option,!0)}g((()=>t.option),(e=>{e&&y((()=>{n()}))}),{immediate:!0,deep:!0});const o=j((function(){var a;null!==s.value&&(null==(a=e.getInstanceByDom(s.value))||a.resize())}),300,{maxWait:800});return w((()=>{y((()=>{n(),window.addEventListener("resize",o)}))})),_((()=>{var a;s.value&&(null==(a=e.getInstanceByDom(s.value))||a.dispose(),window.removeEventListener("resize",o))})),(e,t)=>(b(),x("div",{ref_key:"chartRef",ref:s,style:B({width:z(v)(a.width),height:z(v)(a.height)})},null,4))}});export{D as default};
