System.register(["./page_layout-legacy.js?v=1741416570306","./site-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306"],(function(e,a){"use strict";var t,l,s,u,n,i,r,c,o,v,g;return{setters:[e=>{t=e.b},e=>{l=e.aI},e=>{s=e.c},e=>{u=e.d,n=e.ar,i=e.r,r=e.P,c=e._,o=e.u,v=e.S},e=>{g=e.ch}],execute:function(){e("_",u({__name:"index",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const a=n(e,"value"),{loading:u,setLoading:p}=s(),y=i([]);return(async()=>{try{p(!0);const{message:e}=await l();t(e)&&(y.value=Object.entries(e).map((([e,a])=>({label:a,value:e}))))}finally{p(!1)}})(),(e,t)=>{const l=g;return r(),c(l,o({value:a.value,"onUpdate:value":t[0]||(t[0]=e=>a.value=e),loading:v(u),filterable:"",options:v(y)},e.$attrs),null,16,["value","loading","options"])}}}))}}}));
