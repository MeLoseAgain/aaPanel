import{I as a}from"./page_layout.js?v=1742891699271";import{c as e}from"./public.js?v=1742891699271";import{a as s}from"./mail.js?v=1742891699271";import{d as l,ar as t,as as n,r as o,R as u,a0 as i,V as r}from"./vue.js?v=1742891699271";import{cn as m}from"./naive.js?v=1742891699271";const p=l({__name:"index",props:t({isInit:{type:Boolean,default:!1}},{value:{},valueModifiers:{}}),emits:t(["change"],["update:value"]),setup(l,{expose:t,emit:p}){const v=l,c=p,{loading:d,setLoading:g}=e(),f=n(l,"value"),j=o([]),y=(a,e)=>{c("change",a,e)},h=async()=>{try{g(!0);const{message:e}=await s();a(e)&&e.length>0&&(j.value=[],j.value=e.map((a=>({label:a.username,value:a.username,data:a}))),f.value||(f.value=e[0].username,c("change",e[0].username,j.value[0])))}finally{g(!1)}};return v.isInit&&h(),t({getList:h}),(a,e)=>{const s=m;return u(),i(s,{value:f.value,"onUpdate:value":[e[0]||(e[0]=a=>f.value=a),y],loading:r(d),filterable:!0,options:r(j)},null,8,["value","loading","options"])}}});export{p as _};
