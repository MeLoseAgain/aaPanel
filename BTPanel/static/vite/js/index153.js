import{_ as e}from"./index226.js?v=1742891699271";import{_ as a,a as s}from"./index.vue_vue_type_script_setup_true_lang21.js?v=1742891699271";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang22.js?v=1742891699271";import{eF as n,eG as l,b as i,_ as p,K as o,k as u}from"./page_layout.js?v=1742891699271";import{c as r}from"./public.js?v=1742891699271";import{bY as _,_ as m,b$ as c,c0 as d,bU as v,T as x}from"./naive.js?v=1742891699271";import{d as f,O as g,r as y,R as j,a0 as b,a1 as k,S as h,F as w,N as P,V as S,P as C,U as O,a2 as U,ap as z,c as G,af as L}from"./vue.js?v=1742891699271";import"./php.js?v=1742891699271";import"./soft.js?v=1742891699271";import"./alarm.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang11.js?v=1742891699271";import"./index95.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang15.js?v=1742891699271";import"./theme-chrome.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./file.js?v=1742891699271";import"./common.js?v=1742891699271";const F={class:"w-200px! text-right"},R=u(f({__name:"index",setup(e,{expose:a}){const{t:s}=g(),t={connTimeout:s("Plugin.Openlitespeed.index_1"),enableGzipCompress:s("Plugin.Openlitespeed.index_2"),gzipCompressLevel:s("Plugin.Openlitespeed.index_3"),maxConnections:s("Plugin.Openlitespeed.index_4"),maxKeepAliveReq:s("Plugin.Openlitespeed.index_5"),maxSSLConnections:s("Plugin.Openlitespeed.index_6")},u=y(),f=async()=>{const e=u.value.reduce(((e,a)=>(e[a.name]=a.value,e)),{});await n(e)},{loading:L,setLoading:R}=r(),$=async()=>{try{R(!0);const{message:e}=await l();i(e)&&(u.value=Object.entries(e).map((([e,a])=>({name:e,value:"rollingSize"!==e?Number(a[0]):a[0],ps:t[e]}))))}finally{R(!1)}};return $(),a({init:$}),(e,a)=>{const s=_,t=m,n=c,l=p,i=d,r=v,g=x,y=o;return j(),b(y,{show:S(L)},{default:k((()=>[(j(!0),h(w,null,P(S(u),((e,a)=>(j(),h("div",{key:a},[C(r,{class:"list_box"},{default:k((()=>[O("div",F,U(e.name),1),"enableGzipCompress"!==e.name&&"rollingSize"!==e.name?(j(),b(s,{key:0,class:"w-200px!","show-button":!1,value:e.value,"onUpdate:value":a=>e.value=a},null,8,["value","onUpdate:value"])):z("",!0),"rollingSize"===e.name?(j(),b(t,{key:1,class:"w-200px!",value:e.value,"onUpdate:value":a=>e.value=a},null,8,["value","onUpdate:value"])):z("",!0),"enableGzipCompress"===e.name?(j(),b(n,{key:2,class:"w-200px! justify-start",value:e.value,"onUpdate:value":a=>e.value=a,"checked-value":1,"unchecked-value":0},null,8,["value","onUpdate:value"])):z("",!0),e.ps?(j(),b(i,{key:3,trigger:"hover",placement:"top-start"},{trigger:k((()=>[C(l,{name:"common-ask",class:"color-#fc7938",size:"16"})])),default:k((()=>[G(" "+U(e.ps),1)])),_:2},1024)):z("",!0)])),_:2},1024)])))),128)),C(r,{class:"justify-center!"},{default:k((()=>[C(g,{type:"primary",onClick:$},{default:k((()=>[G(U(e.$t("Public.Btn.Refresh")),1)])),_:1}),C(g,{type:"primary",onClick:f},{default:k((()=>[G(U(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1})])),_:1},8,["show"])}}}),[["__scopeId","data-v-4193d178"]]),$=f({__name:"index",setup(n){const{t:l}=g(),i=y("service"),p=[{key:"service",label:l("Security.History.Index_10"),component:a},{key:"version",label:l("Plugin.Ftp.index_9"),component:t},{key:"file",label:l("Site.Config.index_15"),data:{path:"/usr/local/lsws/conf/httpd_config.conf"},component:s},{key:"config",label:"OpenLiteSpeed",component:R}];return(a,s)=>{const t=e;return j(),b(t,{value:S(i),"onUpdate:value":s[0]||(s[0]=e=>L(i)?i.value=e:null),data:p},null,8,["value"])}}});export{$ as default};
