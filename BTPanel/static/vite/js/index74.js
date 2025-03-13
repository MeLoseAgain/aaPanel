import{_ as e}from"./index123.js?v=1741416570306";import{_ as a}from"./index.js?v=1741416570306";import{_ as l}from"./index95.js?v=1741416570306";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1741416570306";import{_ as o}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{d as n,M as i,ar as s,r,P as u,Q as d,R as c,N as p,S as _,e as f,_ as m,ap as v,j as w,$ as x,a0 as F,c as W,ao as b,Y as g}from"./vue.js?v=1741416570306";import{az as h,d as q,cd as y,k as R,m as k,c7 as j,ce as $,G as U}from"./page_layout.js?v=1741416570306";import{c as E,d as N,b as P,f as T,a as C,k as O}from"./public.js?v=1741416570306";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{ch as I,_ as A,cj as S,bG as z,cb as B,cg as L,cf as G,a2 as J,bS as V,bV as D,T as H,ce as Q}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1741416570306";const Y={class:"flex w-380px"},K={class:"w-140px mr-12px"},X={class:"flex-1"},Z=n({__name:"path",props:{url:{},urlModifiers:{},type:{},typeModifiers:{}},emits:["update:url","update:type"],setup(e){const{t:a}=i(),l=s(e,"url"),t=s(e,"type"),o=r([{label:a("Waf.Flow.Form.index_36"),value:"url"},{label:a("Waf.Flow.Form.index_37"),value:"all"}]),n=e=>{if("all"===e)l.value="/"};return(e,a)=>{const i=I,s=A;return u(),d("div",Y,[c("div",K,[p(i,{value:t.value,"onUpdate:value":[a[0]||(a[0]=e=>t.value=e),n],options:_(o)},null,8,["value","options"])]),c("div",X,[p(s,{value:l.value,"onUpdate:value":a[1]||(a[1]=e=>l.value=e),disabled:"all"===t.value,placeholder:e.$t("Waf.Flow.Form.index_35")},null,8,["value","disabled","placeholder"])])])}}}),ee="allsite",ae=R(n({__name:"site",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const a=s(e,"value"),l=y(),{t:t}=i(),{loading:o,setLoading:n}=E(),d=r([]),c=r([{label:t("Waf.Flow.Form.index_39"),value:ee}]),v=f((()=>a.value===ee)),w=({option:e,handleClose:a})=>{if(e.value!==ee)return p(S,{class:"mr-6px",closable:!0,onClose:e=>{e.stopPropagation(),a()}},{default:()=>[e.label]})},x=e=>{v.value||(e.includes(ee)?(a.value=ee,d.value=c.value.map((e=>e.value))):e.length!==c.value.length-1?(a.value=e.filter((e=>e!==ee)),d.value=e.filter((e=>e!==ee))):e.length===c.value.length-1&&(a.value=ee,d.value=c.value.map((e=>e.value)))),v.value&&(e.includes(ee)?e.length!==c.value.length&&(a.value=e.filter((e=>e!==ee)),d.value=e.filter((e=>e!==ee))):(a.value=[],d.value=[]))};return(async()=>{try{n(!0),await l.getConfig(),c.value=Object.entries(l.config.sitemap).map((([e,a])=>({label:e,value:a}))),c.value.unshift({label:t("Waf.Flow.Form.index_39"),value:ee}),a.value===ee?d.value=c.value.map((e=>e.value)):z(a.value)&&(d.value=a.value)}finally{n(!1)}})(),(e,a)=>{const l=I;return u(),m(l,{loading:_(o),value:_(d),multiple:"",filterable:"",options:_(c),"max-tag-count":"responsive","consistent-menu-width":!1,"render-tag":w,placeholder:e.$t("Waf.Flow.Form.index_38"),"onUpdate:value":x},null,8,["loading","value","options","placeholder"])}}}),[["__scopeId","data-v-aba322fe"]]),le={class:"p-24px"},te={class:"form-title"},oe={class:"w-380px"},ne={class:"w-380px"},ie={class:"form-title mt-8px"},se={class:"w-60px mx-8px"},re={class:"text-desc"},ue={class:"w-60px mx-8px"},de={class:"text-desc"},ce={class:"w-60px mx-8px"},pe={class:"text-desc"},_e={class:"form-title mt-8px"},fe={class:"w-380px"},me={class:"w-380px"},ve=R(n({__name:"index",props:{isEdit:{type:Boolean},row:{},refresh:{}},setup(e,{expose:a}){const l=e,{t:t}=i(),o=v("formRef"),n=w({name:"",server:[],types:"url",url:"",condition:1,secondReq:!0,secondReqNum:void 0,countReq:!1,countReqTime:void 0,countReqNum:void 0,action:"status_503",return:"html"}),s=r([{label:t("Waf.Flow.Form.index_16"),value:"status_403"},{label:t("Waf.Flow.Form.index_17"),value:"status_404"},{label:t("Waf.Flow.Form.index_18"),value:"status_502"},{label:t("Waf.Flow.Form.index_19"),value:"status_503"},{label:t("Waf.Flow.Form.index_20"),value:"content"},{label:t("Waf.Flow.Form.index_21"),value:"drop"}]),f=r([{label:t("Waf.Flow.Form.index_22"),value:"html"},{label:t("Waf.Flow.Form.index_23"),value:"json"},{label:t("Waf.Flow.Form.index_24"),value:"444"}]),g={name:{required:!0,trigger:["blur","input"],message:t("Waf.Flow.Form.index_3")},server:{trigger:["change"],validator:()=>!(n.server.length<=0)||new Error(t("Waf.Flow.Form.index_25"))},path:{trigger:["blur","input","change"],validator:()=>{if("url"===n.types){if(!n.url)return new Error(t("Waf.Flow.Form.index_26"));if("/"===n.url)return new Error(t("Waf.Flow.Form.index_27"));if(!n.url.startsWith("/"))return new Error(t("Waf.Flow.Form.index_28"))}return!0}},second:{trigger:["blur","input"],validator:()=>!(n.secondReq&&!n.secondReqNum)||new Error(t("Waf.Flow.Form.index_29"))},count:{trigger:["blur","input"],validator:()=>{if(n.countReq){if(!n.countReqTime)return new Error(t("Waf.Flow.Form.index_30"));if(n.countReqTime<30)return new Error(t("Waf.Flow.Form.index_31"));if(!n.countReqNum)return new Error(t("Waf.Flow.Form.index_32"));if(n.countReqNum<20)return new Error(t("Waf.Flow.Form.index_33"))}return!0}}};return(()=>{const{isEdit:e,row:a}=l;e&&a&&(n.name=a.name,n.server=Object.keys(a.site),n.types=a.types,n.url=a.url,n.condition=a.condition,n.secondReq=!!a.region.req,a.region.req&&(n.secondReqNum=a.region.req),n.countReq=!!a.region.count,a.region.count&&(n.countReqTime=a.region.count.time,n.countReqNum=a.region.count.count),n.action=a.action,"content"===a.action&&(n.return=a.return))})(),a({onConfirm:async()=>{var e,a;if(await(null==(e=o.value)?void 0:e.validate()),!1===n.secondReq&&!1===n.countReq)return k.error(t("Waf.Flow.Form.index_34"),{close:!0}),!1;const i={name:n.name,site:n.server.join(","),types:n.types,url:n.url,condition:n.condition,action:n.action,region:{...n.secondReq?{req:n.secondReqNum}:{},...n.countReq?{count:{time:n.countReqTime,count:n.countReqNum}}:{}},..."content"===n.action?{return:n.return}:{}},{row:s,isEdit:r}=l;var u;r&&s?await(u={...i,id:s.id},h.post("/btwaf/edit_user_limit.json",{data:JSON.stringify(u)},{requestOptions:{loading:q.global.t("Waf.Flow.API.index_2"),successMessage:!0}})):await(e=>h.post("/btwaf/add_user_limit.json",{data:JSON.stringify(e)},{requestOptions:{loading:q.global.t("Waf.Flow.API.index_1"),successMessage:!0}}))(i),null==(a=l.refresh)||a.call(l)}}),(e,a)=>{const l=A,t=B,i=L,r=G,v=J,w=V,h=I,q=M;return u(),d("div",le,[p(q,{ref_key:"formRef",ref:o,model:_(n),rules:g},{default:x((()=>[c("div",te,F(e.$t("Waf.Flow.Form.index_1")),1),p(t,{label:e.$t("Waf.Flow.Form.index_2"),path:"name"},{default:x((()=>[c("div",oe,[p(l,{value:_(n).name,"onUpdate:value":a[0]||(a[0]=e=>_(n).name=e),placeholder:e.$t("Waf.Flow.Form.index_3")},null,8,["value","placeholder"])])])),_:1},8,["label"]),p(t,{label:e.$t("Waf.Flow.Form.index_4"),path:"server"},{default:x((()=>[c("div",ne,[p(ae,{value:_(n).server,"onUpdate:value":a[1]||(a[1]=e=>_(n).server=e)},null,8,["value"])])])),_:1},8,["label"]),c("div",ie,F(e.$t("Waf.Flow.Form.index_5")),1),p(t,{label:e.$t("Waf.Flow.Form.index_6"),path:"path"},{default:x((()=>[p(Z,{type:_(n).types,"onUpdate:type":a[2]||(a[2]=e=>_(n).types=e),url:_(n).url,"onUpdate:url":a[3]||(a[3]=e=>_(n).url=e)},null,8,["type","url"])])),_:1},8,["label"]),p(t,{label:e.$t("Waf.Flow.Form.index_7")},{default:x((()=>[p(r,{value:_(n).condition,"onUpdate:value":a[4]||(a[4]=e=>_(n).condition=e)},{default:x((()=>[p(i,{value:1},{default:x((()=>[W(F(e.$t("Waf.Flow.Form.index_8")),1)])),_:1}),p(i,{value:2},{default:x((()=>a[12]||(a[12]=[W("IP+UA")]))),_:1}),p(i,{value:3},{default:x((()=>[W(F(e.$t("Waf.Flow.Form.index_9")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),p(t,{label:" ",path:"second"},{default:x((()=>[p(v,{checked:_(n).secondReq,"onUpdate:checked":a[5]||(a[5]=e=>_(n).secondReq=e)},{default:x((()=>[W(F(e.$t("Waf.Flow.Form.index_10")),1)])),_:1},8,["checked"]),c("div",se,[p(w,{value:_(n).secondReqNum,"onUpdate:value":a[6]||(a[6]=e=>_(n).secondReqNum=e),"show-button":!1,placeholder:""},null,8,["value"])]),c("div",re,F(e.$t("Public.Unit.Times")),1)])),_:1}),p(t,{label:" ",path:"count"},{default:x((()=>[p(v,{checked:_(n).countReq,"onUpdate:checked":a[7]||(a[7]=e=>_(n).countReq=e)},{default:x((()=>[W(F(e.$t("Waf.Flow.Form.index_11")),1)])),_:1},8,["checked"]),c("div",ue,[p(w,{value:_(n).countReqTime,"onUpdate:value":a[8]||(a[8]=e=>_(n).countReqTime=e),"show-button":!1,placeholder:""},null,8,["value"])]),c("div",de,F(e.$t("Waf.Flow.Form.index_12")),1),c("div",ce,[p(w,{value:_(n).countReqNum,"onUpdate:value":a[9]||(a[9]=e=>_(n).countReqNum=e),"show-button":!1,placeholder:""},null,8,["value"])]),c("div",pe,F(e.$t("Public.Unit.Times")),1)])),_:1}),c("div",_e,F(e.$t("Waf.Flow.Form.index_13")),1),p(t,{label:e.$t("Waf.Flow.Form.index_14")},{default:x((()=>[c("div",fe,[p(h,{value:_(n).action,"onUpdate:value":a[10]||(a[10]=e=>_(n).action=e),options:_(s)},null,8,["value","options"])])])),_:1},8,["label"]),"content"===_(n).action?(u(),m(t,{key:0,label:e.$t("Waf.Flow.Form.index_15")},{default:x((()=>[c("div",me,[p(h,{value:_(n).return,"onUpdate:value":a[11]||(a[11]=e=>_(n).return=e),options:_(f)},null,8,["value","options"])])])),_:1},8,["label"])):b("",!0)])),_:1},8,["model"])])}}}),[["__scopeId","data-v-8a3017c5"]]),we={class:"mr-8px"},xe=n({__name:"index",setup(n){const{t:s}=i(),d=j(),{version:v}=g(d),w=r("9.6.0"),b=f((()=>$(v.value,w.value))),y=()=>{O("btwaf")},R=N(s("Waf.Flow.index_6"),{isEdit:!1,refresh:()=>A()}),k=()=>{R.data.row=null,R.data.isEdit=!1,R.title=s("Waf.Flow.index_6"),R.show=!0},{table:E,columns:M,setLoading:I}=P([{key:"name",title:s("Waf.Flow.index_8"),width:"12%",minWidth:160},{key:"site",title:s("Waf.Flow.index_9"),width:"16%",minWidth:200,render:e=>Object.keys(e.site).join(", ")},{key:"region",title:s("Waf.Flow.index_10"),minWidth:300,render:e=>{let a="";switch(e.condition){case 1:a=s("Waf.Flow.index_11");break;case 2:a=s("Waf.Flow.index_12");break;case 3:a=s("Waf.Flow.index_13")}const{region:l}=e;return l.req&&(a+=s("Waf.Flow.index_14",[l.req])),l.count&&l.count.count&&(l.req&&(a+=s("Waf.Flow.index_15")),a+=s("Waf.Flow.index_16",[l.count.time,l.count.count])),s("Waf.Flow.index_17",[a])}},{key:"action",title:s("Waf.Flow.index_18"),width:"16%",minWidth:260,render:e=>{let a="";switch(e.action){case"status_403":a=s("Waf.Flow.index_19");break;case"status_404":a=s("Waf.Flow.index_20");break;case"status_502":a=s("Waf.Flow.index_21");break;case"status_503":a=s("Waf.Flow.index_22");break;case"content":a=s("Waf.Flow.index_23");break;case"drop":a=s("Waf.Flow.index_24")}return a}},{key:"open",title:s("Waf.Flow.index_25"),width:"6%",minWidth:80,render:e=>p(D,{size:"small",value:e.open,onUpdateValue:async a=>{var l;await(l={id:e.id},h.post("/btwaf/set_user_limit.json",l,{requestOptions:{loading:q.global.t("Waf.Flow.API.index_3"),successMessage:!0}})),e.open=a}},null)},T({width:100,options:e=>[{label:s("Public.Btn.Edit"),onClick:()=>{(e=>{R.data.row=e,R.data.isEdit=!0,R.title=s("Waf.Flow.index_7"),R.show=!0})(e)}},{label:s("Public.Btn.Del"),onClick:()=>{C({title:s("Waf.Flow.index_26"),content:s("Waf.Flow.index_27",[e.name]),onConfirm:async()=>{var a;await(a={id:e.id},h.post("/btwaf/del_user_limit.json",a,{requestOptions:{loading:q.global.t("Waf.Flow.API.index_4"),successMessage:!0}})),A()}})}}]})]),A=async()=>{try{I(!0);const{message:e}=await h.post("/btwaf/get_user_limit.json");E.data=U(e)?e:[]}finally{I(!1)}};return b.value&&A(),(n,i)=>{const s=H,r=o,d=t,f=l,g=a,h=Q,q=e;return u(),m(q,{install:_(b)},{desc:x((()=>[c("span",we," The WAF is v"+F(_(v))+", please upgrade to the version above v"+F(_(w))+" to use ",1),p(s,{class:"px-8px h-24px",type:"primary",size:"small",onClick:y},{default:x((()=>i[1]||(i[1]=[W(" Upgrade ")]))),_:1})])),default:x((()=>[p(h,{class:"p-16px"},{default:x((()=>[p(d,null,{toolsLeft:x((()=>[p(s,{type:"primary",onClick:k},{default:x((()=>[W(F(n.$t("Waf.Flow.index_1")),1)])),_:1})])),table:x((()=>[p(r,{loading:_(E).loading,data:_(E).data,columns:_(M)},null,8,["loading","data","columns"])])),_:1}),p(f,{class:"mt-16px"},{default:x((()=>[c("li",null,F(n.$t("Waf.Flow.index_2")),1),c("li",null,F(n.$t("Waf.Flow.index_3")),1),c("li",null,F(n.$t("Waf.Flow.index_4")),1),c("li",null,F(n.$t("Waf.Flow.index_5")),1)])),_:1}),p(g,{show:_(R).show,"onUpdate:show":i[0]||(i[0]=e=>_(R).show=e),title:_(R).title,width:640,footer:!0,data:_(R).data,component:ve},null,8,["show","title","data"])])),_:1})])),_:1},8,["install"])}}});export{xe as default};
