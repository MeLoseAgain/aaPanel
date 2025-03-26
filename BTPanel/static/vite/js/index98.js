import{av as e,b as a,bb as s,I as t,bc as u,bd as o,be as n,ap as i,k as l}from"./page_layout.js?v=1742891699271";import{r as c,d as p,as as r,av as d,R as m,S as v,P as _,a1 as b,m as f,U as h,a2 as k,V as y,H as w,F as g}from"./vue.js?v=1742891699271";import{a2 as x,bZ as I}from"./naive.js?v=1742891699271";const S=c({listenIpv6:!1,offlineMode:!1,debugMode:!1,apiInterface:!1,lang:null,langList:[],webname:"",session_timeout:"",session_timeout_source:0,sites_path:"",backup_path:"",serverIp:"",systemDate:"",username:"",account:"",backup_info:{auto_backup:0,backup_number:0,total_size:0}}),C=c({panelSSL:!1,basicAuth:!1,dynamicPwd:!1,pwdComplexity:!1,domain:"",limitIp:"",port:"7800",adminPath:"/",statusCode:404,pwdSetDay:0,pwdExpireDay:0,pwdExpireTime:0,uaAstrict:!1}),D=c([]);async function P(){const{message:s}=await e();a(s)&&(function(e){S.value.listenIpv6="checked"===e.ipv6,S.value.offlineMode="checked"===e.is_local,S.value.debugMode="checked"===e.debug,S.value.apiInterface="checked"===e.api,S.value.lang=e.language,S.value.langList=e.language_list.map((e=>({label:e.title,value:e.name}))),S.value.webname=e.webname||"",S.value.session_timeout=e.session_timeout||"",S.value.session_timeout_source=e.session_timeout_source||86400,S.value.sites_path=e.sites_path||"",S.value.backup_path=e.backup_path||"",S.value.systemDate=e.systemdate||"",S.value.username=e.username||"";const{panel:s,user_info:t}=e;a(s)&&(S.value.serverIp=s.address||"",S.value.backup_info=s.backup_info);a(t)&&(S.value.account=t.data.username)}(s),function(e){var s;const{panel:t,SSL:u}=e;C.value.panelSSL=u||location.protocol.indexOf("https:")>-1,C.value.basicAuth=(null==(s=e.basic_auth)?void 0:s.open)||!1,C.value.statusCode=e.status_code||404,a(t)&&(C.value.domain=t.domain||"",C.value.limitIp=t.limitip||"",C.value.port=t.listen_port||"7800",C.value.adminPath=t.admin_path||"/")}(s))}async function L(){const{message:e}=await s();D.value=t(e)?e:[]}async function M(){const{message:e}=await u();a(e)&&(C.value.dynamicPwd=e.result)}async function A(){const{message:e}=await o();a(e)&&(C.value.pwdSetDay=e.expire,C.value.pwdExpireDay=e.expire_day,C.value.pwdExpireTime=e.expire_time,C.value.pwdComplexity=e.password_safe)}async function E(){const{message:e}=await n();a(e)&&(C.value.uaAstrict="0"!==e.status)}function T(){return{webname:S.value.webname||"",session_timeout:S.value.session_timeout_source||86400,domain:C.value.domain,limitip:C.value.limitIp,sites_path:S.value.sites_path,backup_path:S.value.backup_path,address:S.value.serverIp,systemdate:S.value.systemDate,port:C.value.port,backup_number:S.value.backup_info.backup_number,auto_backup:S.value.backup_info.auto_backup}}function $(){S.value={listenIpv6:!1,offlineMode:!1,debugMode:!1,apiInterface:!1,lang:null,langList:[],webname:"",session_timeout:"",session_timeout_source:0,sites_path:"",backup_path:"",serverIp:"",systemDate:"",username:"",account:"",backup_info:{auto_backup:0,backup_number:0,total_size:0}},C.value={panelSSL:!1,basicAuth:!1,dynamicPwd:!1,pwdComplexity:!1,domain:"",limitIp:"",port:"7800",adminPath:"/",statusCode:404,pwdSetDay:0,pwdExpireDay:0,pwdExpireTime:0,uaAstrict:!1},D.value=[]}function j(){S.value=null,C.value=null,D.value=[]}const R=p({__name:"index",props:{checked:{type:[String,Number,Boolean]},checkedModifiers:{}},emits:["update:checked"],setup(e,{expose:a}){const s=r(e,"checked"),t=i(),u=c(0),o=c(0),n=c(!1),l=c(),p=()=>{const e=l.value.$el.getClientRects(),{x:a,y:s}=e[0];u.value=a-5,o.value=s-3,n.value=!0,S()},S=d((()=>{n.value=!1}),2500);return a({validate:()=>new Promise(((e,a)=>{s.value?e(!0):(p(),a(!1))})),showTips:p}),(e,a)=>{const i=x,c=I;return m(),v(g,null,[_(i,{ref_key:"checkboxRef",ref:l,checked:s.value,"onUpdate:checked":a[0]||(a[0]=e=>s.value=e)},{default:b((()=>[f(e.$slots,"default")])),_:3},8,["checked"]),_(c,{show:y(n),x:y(u),y:y(o),trigger:"manual",placement:"top-start",style:w({backgroundColor:y(t).errorColor,color:"#fff"}),"arrow-style":{backgroundColor:y(t).errorColor}},{default:b((()=>[h("span",null,k(e.$t("Config.Safe.index_169")),1)])),_:1},8,["show","x","y","style","arrow-style"])],64)}}}),z={class:"confirm-tips"};const U=l({},[["render",function(e,a){return m(),v("ul",z,[f(e.$slots,"default",{},void 0,!0)])}],["__scopeId","data-v-afc54be1"]]);export{U as _,L as a,M as b,A as c,E as d,j as e,R as f,P as g,T as h,$ as i,D as m,S as p,C as s};
