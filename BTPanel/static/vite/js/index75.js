const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index211.js?v=1741416570306","js/page_layout.js?v=1741416570306","js/vue.js?v=1741416570306","js/__commonjsHelpers__.js?v=1741416570306","js/naive.js?v=1741416570306","js/common.js?v=1741416570306","js/public.js?v=1741416570306","css/public.css?v=1741416570306","css/page_layout.css?v=1741416570306","css/index82.css?v=1741416570306"])))=>i.map(i=>d[i]);
import{cd as t,cf as e,cg as a,g as s,ch as i,ci as o,b as n,a as l}from"./page_layout.js?v=1741416570306";import{_ as r}from"./index.js?v=1741416570306";import{_ as d}from"./index95.js?v=1741416570306";import{_ as c}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1741416570306";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{d as u,b as _,m as p,f,a as h}from"./public.js?v=1741416570306";import{cj as y,ce as x,T as C}from"./naive.js?v=1741416570306";import{d as w,M as W,N as g,P as j,_ as b,$ as v,i as k,c as E,a0 as O,S as P,R as $,W as B}from"./vue.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1741416570306";const L=w({__name:"index",setup(w){const L=B((()=>l((()=>import("./index211.js?v=1741416570306")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])))),{t:R}=W(),S=t(),V=u("",{isEdit:!1,onRefresh:()=>{H()}}),A=()=>{V.data.isEdit=!1,V.data.row=void 0,V.title=R("Waf.Custom.index_4"),V.show=!0},{table:D,columns:M,setLoading:N}=_([{key:"name",title:R("Waf.Custom.index_6"),minWidth:160,ellipsis:{tooltip:!0}},{key:"servers",title:R("Waf.Custom.index_7"),width:"20%",minWidth:260,ellipsis:{tooltip:!0},render:({servers:t})=>S.getSiteName(t)},p({width:"10%",minWidth:100,status:t=>({checkedValue:1,uncheckedValue:0,onClick:async a=>{await e({id:t.id,status:a}),t.status=a}})}),{key:"hit",title:R("Waf.Custom.index_8"),width:"10%",minWidth:100,render:({hit:t})=>{return g(y,{size:"small",type:t>0?"success":"default",bordered:!1},"function"==typeof(e=t)||"[object Object]"===Object.prototype.toString.call(e)&&!k(e)?t:{default:()=>[t]});var e}},{key:"root",title:R("Waf.Custom.index_9"),width:"20%",minWidth:160,render:({root:t})=>S.getMatchCondition(t)},{key:"action",title:R("Waf.Custom.index_10"),width:"20%",minWidth:160,render:({action:t})=>{var e;return S.getExecuteAction(t.type,(null==(e=t.response)?void 0:e.type)||"")}},f({width:140,options:t=>[{label:R("Public.Btn.Copy"),onClick:()=>{T(t)}},{label:R("Public.Btn.Edit"),onClick:()=>{(t=>{V.data.isEdit=!0,V.data.row=t,V.title=R("Waf.Custom.index_5",[t.name]),V.show=!0})(t)}},{label:R("Public.Btn.Del"),onClick:()=>{z(t)}}]})]),T=t=>{h({title:R("Waf.Custom.index_11",[t.name]),content:R("Waf.Custom.index_12"),onConfirm:async()=>{await a({name:"".concat(t.name,"_copy_").concat(s(6)),servers:t.servers?t.servers:[],status:1,is_global:0,priority:0,root:t.root,action:{type:t.action.type,response:Object.assign({},t.action.response,{headers:{}})}}),H()}})},z=t=>{h({title:R("Waf.Custom.index_13",[t.name]),content:R("Waf.Custom.index_14"),onConfirm:async()=>{await i({id:t.id}),H()}})},H=async()=>{try{N(!0);const{message:t}=await o();n(t)&&t.rules&&(D.data=Object.entries(t.rules).map((([t,e])=>({...e,id:t}))))}finally{N(!1)}};return(async()=>{try{N(!0),await S.getConfig(),await H()}finally{N(!1)}})(),(t,e)=>{const a=C,s=m,i=c,o=d,n=r,l=x;return j(),b(l,{class:"p-16px"},{default:v((()=>[g(i,null,{toolsLeft:v((()=>[g(a,{type:"primary",onClick:A},{default:v((()=>[E(O(t.$t("Waf.Custom.index_1")),1)])),_:1})])),table:v((()=>[g(s,{loading:P(D).loading,data:P(D).data,columns:P(M)},null,8,["loading","data","columns"])])),_:1}),g(o,{class:"mt-20px"},{default:v((()=>[$("li",null,O(t.$t("Waf.Custom.index_2")),1),$("li",null,O(t.$t("Waf.Custom.index_3")),1)])),_:1}),g(n,{show:P(V).show,"onUpdate:show":e[0]||(e[0]=t=>P(V).show=t),title:P(V).title,data:P(V).data,width:800,"min-height":448,footer:!0,component:P(L)},null,8,["show","title","data","component"])])),_:1})}}});export{L as default};
