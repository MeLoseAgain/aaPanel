import{aP as e,aQ as a,H as s}from"./page_layout.js?v=1741416570306";import{cr as p}from"./naive.js?v=1741416570306";import{d as i,aq as o,e as t,ar as r,P as u,_ as l,ax as g,$ as n,R as c,a0 as d,u as f}from"./vue.js?v=1741416570306";const m={class:"ml-8px text-14px"},z=i({__name:"index",props:o({storeKey:{default:""},pageSizes:{default:()=>[10,20,50,100]},showTotal:{type:Boolean,default:!0},showSizePicker:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!0}},{page:{},pageModifiers:{},pageSize:{},pageSizeModifiers:{}}),emits:o(["refresh"],["update:page","update:pageSize"]),setup(i,{emit:o}){const z=i,v=o,h=t((()=>{const{storeKey:e}=z;return e?"".concat(e,"-page"):""})),k=r(i,"page"),w=r(i,"pageSize"),S=e=>{k.value=e,v("refresh")},x=e=>{k.value=1,w.value=e,y(e),v("refresh")},y=a=>{h.value&&e(h.value,String(a))};return(()=>{if(h.value){const e=a(h.value);e&&(w.value=s(e))}})(),(e,a)=>{const s=p;return u(),l(s,f(e.$attrs,{page:k.value,"onUpdate:page":[a[0]||(a[0]=e=>k.value=e),S],"page-size":w.value,"onUpdate:pageSize":[a[1]||(a[1]=e=>w.value=e),x],"show-size-picker":e.showSizePicker,"show-quick-jumper":e.showQuickJumper,"page-sizes":e.pageSizes,"display-order":["pages","size-picker","quick-jumper"]}),g({_:2},[e.showTotal?{name:"suffix",fn:n((({itemCount:a})=>[c("span",m,d(e.$t("Public.Table.Page.index_4",[a])),1)])),key:"0"}:void 0]),1040,["page","page-size","show-size-picker","show-quick-jumper","page-sizes"])}}});export{z as _};
