System.register(["./index-legacy123.js?v=1741416570306","./index-legacy.js?v=1741416570306","./index-legacy95.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1741416570306"],(function(e,a){"use strict";var l,t,n,o,i,u,r,s,d,c,_,p,f,v,m,w,x,F,g,W,b,h,y,q,R,k,j,$,U,E,N,C,P,T,O,M,I,A,S,z,B,L,G,J,V,D,H,Q,Y,K;return{setters:[e=>{l=e._},e=>{t=e._},e=>{n=e._},e=>{o=e._},e=>{i=e._},e=>{u=e.d,r=e.M,s=e.ar,d=e.r,c=e.P,_=e.Q,p=e.R,f=e.N,v=e.S,m=e.e,w=e._,x=e.ap,F=e.j,g=e.$,W=e.a0,b=e.c,h=e.ao,y=e.Y},e=>{q=e.az,R=e.d,k=e.cd,j=e.k,$=e.m,U=e.c7,E=e.ce,N=e.G},e=>{C=e.c,P=e.d,T=e.b,O=e.f,M=e.a,I=e.k},e=>{A=e._},e=>{S=e.ch,z=e._,B=e.cj,L=e.bG,G=e.cb,J=e.cg,V=e.cf,D=e.a2,H=e.bS,Q=e.bV,Y=e.T,K=e.ce},null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".n-select[data-v-aba322fe] .n-base-selection-tag-wrapper{padding:0 0 3px}.form-title[data-v-8a3017c5]{margin-bottom:20px;font-size:16px}\n",document.head.appendChild(a);const X={class:"flex w-380px"},Z={class:"w-140px mr-12px"},ee={class:"flex-1"},ae=u({__name:"path",props:{url:{},urlModifiers:{},type:{},typeModifiers:{}},emits:["update:url","update:type"],setup(e){const{t:a}=r(),l=s(e,"url"),t=s(e,"type"),n=d([{label:a("Waf.Flow.Form.index_36"),value:"url"},{label:a("Waf.Flow.Form.index_37"),value:"all"}]),o=e=>{"all"===e&&(l.value="/")};return(e,a)=>{const i=S,u=z;return c(),_("div",X,[p("div",Z,[f(i,{value:t.value,"onUpdate:value":[a[0]||(a[0]=e=>t.value=e),o],options:v(n)},null,8,["value","options"])]),p("div",ee,[f(u,{value:l.value,"onUpdate:value":a[1]||(a[1]=e=>l.value=e),disabled:"all"===t.value,placeholder:e.$t("Waf.Flow.Form.index_35")},null,8,["value","disabled","placeholder"])])])}}}),le="allsite",te=j(u({__name:"site",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const a=s(e,"value"),l=k(),{t:t}=r(),{loading:n,setLoading:o}=C(),i=d([]),u=d([{label:t("Waf.Flow.Form.index_39"),value:le}]),_=m((()=>a.value===le)),p=({option:e,handleClose:a})=>{if(e.value!==le)return f(B,{class:"mr-6px",closable:!0,onClose:e=>{e.stopPropagation(),a()}},{default:()=>[e.label]})},x=e=>{_.value||(e.includes(le)?(a.value=le,i.value=u.value.map((e=>e.value))):e.length!==u.value.length-1?(a.value=e.filter((e=>e!==le)),i.value=e.filter((e=>e!==le))):e.length===u.value.length-1&&(a.value=le,i.value=u.value.map((e=>e.value)))),_.value&&(e.includes(le)?e.length!==u.value.length&&(a.value=e.filter((e=>e!==le)),i.value=e.filter((e=>e!==le))):(a.value=[],i.value=[]))};return(async()=>{try{o(!0),await l.getConfig(),u.value=Object.entries(l.config.sitemap).map((([e,a])=>({label:e,value:a}))),u.value.unshift({label:t("Waf.Flow.Form.index_39"),value:le}),a.value===le?i.value=u.value.map((e=>e.value)):L(a.value)&&(i.value=a.value)}finally{o(!1)}})(),(e,a)=>{const l=S;return c(),w(l,{loading:v(n),value:v(i),multiple:"",filterable:"",options:v(u),"max-tag-count":"responsive","consistent-menu-width":!1,"render-tag":p,placeholder:e.$t("Waf.Flow.Form.index_38"),"onUpdate:value":x},null,8,["loading","value","options","placeholder"])}}}),[["__scopeId","data-v-aba322fe"]]),ne={class:"p-24px"},oe={class:"form-title"},ie={class:"w-380px"},ue={class:"w-380px"},re={class:"form-title mt-8px"},se={class:"w-60px mx-8px"},de={class:"text-desc"},ce={class:"w-60px mx-8px"},_e={class:"text-desc"},pe={class:"w-60px mx-8px"},fe={class:"text-desc"},ve={class:"form-title mt-8px"},me={class:"w-380px"},we={class:"w-380px"},xe=u({__name:"index",props:{isEdit:{type:Boolean},row:{},refresh:{}},setup(e,{expose:a}){const l=e,{t:t}=r(),n=x("formRef"),o=F({name:"",server:[],types:"url",url:"",condition:1,secondReq:!0,secondReqNum:void 0,countReq:!1,countReqTime:void 0,countReqNum:void 0,action:"status_503",return:"html"}),i=d([{label:t("Waf.Flow.Form.index_16"),value:"status_403"},{label:t("Waf.Flow.Form.index_17"),value:"status_404"},{label:t("Waf.Flow.Form.index_18"),value:"status_502"},{label:t("Waf.Flow.Form.index_19"),value:"status_503"},{label:t("Waf.Flow.Form.index_20"),value:"content"},{label:t("Waf.Flow.Form.index_21"),value:"drop"}]),u=d([{label:t("Waf.Flow.Form.index_22"),value:"html"},{label:t("Waf.Flow.Form.index_23"),value:"json"},{label:t("Waf.Flow.Form.index_24"),value:"444"}]),s={name:{required:!0,trigger:["blur","input"],message:t("Waf.Flow.Form.index_3")},server:{trigger:["change"],validator:()=>!(o.server.length<=0)||new Error(t("Waf.Flow.Form.index_25"))},path:{trigger:["blur","input","change"],validator:()=>{if("url"===o.types){if(!o.url)return new Error(t("Waf.Flow.Form.index_26"));if("/"===o.url)return new Error(t("Waf.Flow.Form.index_27"));if(!o.url.startsWith("/"))return new Error(t("Waf.Flow.Form.index_28"))}return!0}},second:{trigger:["blur","input"],validator:()=>!(o.secondReq&&!o.secondReqNum)||new Error(t("Waf.Flow.Form.index_29"))},count:{trigger:["blur","input"],validator:()=>{if(o.countReq){if(!o.countReqTime)return new Error(t("Waf.Flow.Form.index_30"));if(o.countReqTime<30)return new Error(t("Waf.Flow.Form.index_31"));if(!o.countReqNum)return new Error(t("Waf.Flow.Form.index_32"));if(o.countReqNum<20)return new Error(t("Waf.Flow.Form.index_33"))}return!0}}};return(()=>{const{isEdit:e,row:a}=l;e&&a&&(o.name=a.name,o.server=Object.keys(a.site),o.types=a.types,o.url=a.url,o.condition=a.condition,o.secondReq=!!a.region.req,a.region.req&&(o.secondReqNum=a.region.req),o.countReq=!!a.region.count,a.region.count&&(o.countReqTime=a.region.count.time,o.countReqNum=a.region.count.count),o.action=a.action,"content"===a.action&&(o.return=a.return))})(),a({onConfirm:async()=>{if(await(n.value?.validate()),!1===o.secondReq&&!1===o.countReq)return $.error(t("Waf.Flow.Form.index_34"),{close:!0}),!1;const e={name:o.name,site:o.server.join(","),types:o.types,url:o.url,condition:o.condition,action:o.action,region:{...o.secondReq?{req:o.secondReqNum}:{},...o.countReq?{count:{time:o.countReqTime,count:o.countReqNum}}:{}},..."content"===o.action?{return:o.return}:{}},{row:a,isEdit:i}=l;var u;i&&a?await(u={...e,id:a.id},q.post("/btwaf/edit_user_limit.json",{data:JSON.stringify(u)},{requestOptions:{loading:R.global.t("Waf.Flow.API.index_2"),successMessage:!0}})):await(e=>q.post("/btwaf/add_user_limit.json",{data:JSON.stringify(e)},{requestOptions:{loading:R.global.t("Waf.Flow.API.index_1"),successMessage:!0}}))(e),l.refresh?.()}}),(e,a)=>{const l=z,t=G,r=J,d=V,m=D,x=H,F=S,y=A;return c(),_("div",ne,[f(y,{ref_key:"formRef",ref:n,model:v(o),rules:s},{default:g((()=>[p("div",oe,W(e.$t("Waf.Flow.Form.index_1")),1),f(t,{label:e.$t("Waf.Flow.Form.index_2"),path:"name"},{default:g((()=>[p("div",ie,[f(l,{value:v(o).name,"onUpdate:value":a[0]||(a[0]=e=>v(o).name=e),placeholder:e.$t("Waf.Flow.Form.index_3")},null,8,["value","placeholder"])])])),_:1},8,["label"]),f(t,{label:e.$t("Waf.Flow.Form.index_4"),path:"server"},{default:g((()=>[p("div",ue,[f(te,{value:v(o).server,"onUpdate:value":a[1]||(a[1]=e=>v(o).server=e)},null,8,["value"])])])),_:1},8,["label"]),p("div",re,W(e.$t("Waf.Flow.Form.index_5")),1),f(t,{label:e.$t("Waf.Flow.Form.index_6"),path:"path"},{default:g((()=>[f(ae,{type:v(o).types,"onUpdate:type":a[2]||(a[2]=e=>v(o).types=e),url:v(o).url,"onUpdate:url":a[3]||(a[3]=e=>v(o).url=e)},null,8,["type","url"])])),_:1},8,["label"]),f(t,{label:e.$t("Waf.Flow.Form.index_7")},{default:g((()=>[f(d,{value:v(o).condition,"onUpdate:value":a[4]||(a[4]=e=>v(o).condition=e)},{default:g((()=>[f(r,{value:1},{default:g((()=>[b(W(e.$t("Waf.Flow.Form.index_8")),1)])),_:1}),f(r,{value:2},{default:g((()=>a[12]||(a[12]=[b("IP+UA")]))),_:1}),f(r,{value:3},{default:g((()=>[b(W(e.$t("Waf.Flow.Form.index_9")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),f(t,{label:" ",path:"second"},{default:g((()=>[f(m,{checked:v(o).secondReq,"onUpdate:checked":a[5]||(a[5]=e=>v(o).secondReq=e)},{default:g((()=>[b(W(e.$t("Waf.Flow.Form.index_10")),1)])),_:1},8,["checked"]),p("div",se,[f(x,{value:v(o).secondReqNum,"onUpdate:value":a[6]||(a[6]=e=>v(o).secondReqNum=e),"show-button":!1,placeholder:""},null,8,["value"])]),p("div",de,W(e.$t("Public.Unit.Times")),1)])),_:1}),f(t,{label:" ",path:"count"},{default:g((()=>[f(m,{checked:v(o).countReq,"onUpdate:checked":a[7]||(a[7]=e=>v(o).countReq=e)},{default:g((()=>[b(W(e.$t("Waf.Flow.Form.index_11")),1)])),_:1},8,["checked"]),p("div",ce,[f(x,{value:v(o).countReqTime,"onUpdate:value":a[8]||(a[8]=e=>v(o).countReqTime=e),"show-button":!1,placeholder:""},null,8,["value"])]),p("div",_e,W(e.$t("Waf.Flow.Form.index_12")),1),p("div",pe,[f(x,{value:v(o).countReqNum,"onUpdate:value":a[9]||(a[9]=e=>v(o).countReqNum=e),"show-button":!1,placeholder:""},null,8,["value"])]),p("div",fe,W(e.$t("Public.Unit.Times")),1)])),_:1}),p("div",ve,W(e.$t("Waf.Flow.Form.index_13")),1),f(t,{label:e.$t("Waf.Flow.Form.index_14")},{default:g((()=>[p("div",me,[f(F,{value:v(o).action,"onUpdate:value":a[10]||(a[10]=e=>v(o).action=e),options:v(i)},null,8,["value","options"])])])),_:1},8,["label"]),"content"===v(o).action?(c(),w(t,{key:0,label:e.$t("Waf.Flow.Form.index_15")},{default:g((()=>[p("div",we,[f(F,{value:v(o).return,"onUpdate:value":a[11]||(a[11]=e=>v(o).return=e),options:v(u)},null,8,["value","options"])])])),_:1},8,["label"])):h("",!0)])),_:1},8,["model"])])}}}),Fe=j(xe,[["__scopeId","data-v-8a3017c5"]]),ge={class:"mr-8px"};e("default",u({__name:"index",setup(e){const{t:a}=r(),u=U(),{version:s}=y(u),_=d("9.6.0"),x=m((()=>E(s.value,_.value))),F=()=>{I("btwaf")},h=P(a("Waf.Flow.index_6"),{isEdit:!1,refresh:()=>A()}),k=()=>{h.data.row=null,h.data.isEdit=!1,h.title=a("Waf.Flow.index_6"),h.show=!0},{table:j,columns:$,setLoading:C}=T([{key:"name",title:a("Waf.Flow.index_8"),width:"12%",minWidth:160},{key:"site",title:a("Waf.Flow.index_9"),width:"16%",minWidth:200,render:e=>Object.keys(e.site).join(", ")},{key:"region",title:a("Waf.Flow.index_10"),minWidth:300,render:e=>{let l="";switch(e.condition){case 1:l=a("Waf.Flow.index_11");break;case 2:l=a("Waf.Flow.index_12");break;case 3:l=a("Waf.Flow.index_13")}const{region:t}=e;return t.req&&(l+=a("Waf.Flow.index_14",[t.req])),t.count&&t.count.count&&(t.req&&(l+=a("Waf.Flow.index_15")),l+=a("Waf.Flow.index_16",[t.count.time,t.count.count])),a("Waf.Flow.index_17",[l])}},{key:"action",title:a("Waf.Flow.index_18"),width:"16%",minWidth:260,render:e=>{let l="";switch(e.action){case"status_403":l=a("Waf.Flow.index_19");break;case"status_404":l=a("Waf.Flow.index_20");break;case"status_502":l=a("Waf.Flow.index_21");break;case"status_503":l=a("Waf.Flow.index_22");break;case"content":l=a("Waf.Flow.index_23");break;case"drop":l=a("Waf.Flow.index_24")}return l}},{key:"open",title:a("Waf.Flow.index_25"),width:"6%",minWidth:80,render:e=>f(Q,{size:"small",value:e.open,onUpdateValue:async a=>{var l;await(l={id:e.id},q.post("/btwaf/set_user_limit.json",l,{requestOptions:{loading:R.global.t("Waf.Flow.API.index_3"),successMessage:!0}})),e.open=a}},null)},O({width:100,options:e=>[{label:a("Public.Btn.Edit"),onClick:()=>{(e=>{h.data.row=e,h.data.isEdit=!0,h.title=a("Waf.Flow.index_7"),h.show=!0})(e)}},{label:a("Public.Btn.Del"),onClick:()=>{M({title:a("Waf.Flow.index_26"),content:a("Waf.Flow.index_27",[e.name]),onConfirm:async()=>{var a;await(a={id:e.id},q.post("/btwaf/del_user_limit.json",a,{requestOptions:{loading:R.global.t("Waf.Flow.API.index_4"),successMessage:!0}})),A()}})}}]})]),A=async()=>{try{C(!0);const{message:e}=await q.post("/btwaf/get_user_limit.json");j.data=N(e)?e:[]}finally{C(!1)}};return x.value&&A(),(e,a)=>{const u=Y,r=i,d=o,m=n,y=t,q=K,R=l;return c(),w(R,{install:v(x)},{desc:g((()=>[p("span",ge," The WAF is v"+W(v(s))+", please upgrade to the version above v"+W(v(_))+" to use ",1),f(u,{class:"px-8px h-24px",type:"primary",size:"small",onClick:F},{default:g((()=>a[1]||(a[1]=[b(" Upgrade ")]))),_:1})])),default:g((()=>[f(q,{class:"p-16px"},{default:g((()=>[f(d,null,{toolsLeft:g((()=>[f(u,{type:"primary",onClick:k},{default:g((()=>[b(W(e.$t("Waf.Flow.index_1")),1)])),_:1})])),table:g((()=>[f(r,{loading:v(j).loading,data:v(j).data,columns:v($)},null,8,["loading","data","columns"])])),_:1}),f(m,{class:"mt-16px"},{default:g((()=>[p("li",null,W(e.$t("Waf.Flow.index_2")),1),p("li",null,W(e.$t("Waf.Flow.index_3")),1),p("li",null,W(e.$t("Waf.Flow.index_4")),1),p("li",null,W(e.$t("Waf.Flow.index_5")),1)])),_:1}),f(y,{show:v(h).show,"onUpdate:show":a[0]||(a[0]=e=>v(h).show=e),title:v(h).title,width:640,footer:!0,data:v(h).data,component:Fe},null,8,["show","title","data"])])),_:1})])),_:1},8,["install"])}}}))}}}));
