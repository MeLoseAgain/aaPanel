const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index247.js?v=1741416570306","js/index.js?v=1741416570306","js/vue.js?v=1741416570306","js/__commonjsHelpers__.js?v=1741416570306","js/common.js?v=1741416570306","js/public.js?v=1741416570306","js/page_layout.js?v=1741416570306","js/naive.js?v=1741416570306","css/page_layout.css?v=1741416570306","css/public.css?v=1741416570306","css/index90.css?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang.js?v=1741416570306","js/index95.js?v=1741416570306","js/file.js?v=1741416570306","js/site.js?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang15.js?v=1741416570306","js/theme-chrome.js?v=1741416570306","js/index223.js?v=1741416570306","css/index54.css?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang4.js?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang8.js?v=1741416570306","css/index19.css?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang12.js?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306","js/index99.js?v=1741416570306","css/index16.css?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang10.js?v=1741416570306","js/index96.js?v=1741416570306","css/index15.css?v=1741416570306","js/index240.js?v=1741416570306","js/new.js?v=1741416570306","js/index123.js?v=1741416570306","css/index23.css?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang5.js?v=1741416570306","js/index.vue_vue_type_script_setup_true_lang7.js?v=1741416570306","js/soft.js?v=1741416570306","js/index103.js?v=1741416570306","css/index20.css?v=1741416570306","js/index104.js?v=1741416570306","css/index21.css?v=1741416570306","js/old5.js?v=1741416570306","js/site4.js?v=1741416570306"])))=>i.map(i=>d[i]);
import{d as e,j as t,eP as a,eQ as n,G as l,m as i,eR as o,cj as s,eS as d,eT as c,eU as r,eV as u,eW as p,eX as _,eY as m,k as x,bO as v,U as f,h as g,eZ as y,b as w,a6 as b,a7 as h,ck as j,cl as k,e_ as C,eM as N,e$ as S,eN as $,f0 as R,n as U,I as P,a as T}from"./page_layout.js?v=1741416570306";import{_ as D}from"./index223.js?v=1741416570306";import{p as L,a as I,N as M,d as A,M as F,r as q,P as B,Q as O,R as z,$ as E,a0 as V,S as H,ae as K,c as Q,j as W,_ as G,ao as Y,m as X,f as Z,F as J,L as ee,af as te,e as ae,n as ne,Y as le,w as ie,W as oe}from"./vue.js?v=1741416570306";import{_ as se}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1741416570306";import{_ as de}from"./index.vue_vue_type_script_setup_true_lang12.js?v=1741416570306";import{_ as ce}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{_ as re}from"./index99.js?v=1741416570306";import{a as ue,Q as pe,b as _e,c as me,f as xe,w as ve,u as fe}from"./public.js?v=1741416570306";import{T as ge,_ as ye,bO as we,bV as be,ch as he,cb as je,bS as ke,a2 as Ce,bt as Ne}from"./naive.js?v=1741416570306";import{_ as Se}from"./index95.js?v=1741416570306";import{_ as $e}from"./index.vue_vue_type_script_setup_true_lang15.js?v=1741416570306";import{_ as Re}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{_ as Ue}from"./index.vue_vue_type_script_setup_true_lang10.js?v=1741416570306";import{v as Pe}from"./index240.js?v=1741416570306";import{o as Te}from"./new.js?v=1741416570306";import{_ as De}from"./index103.js?v=1741416570306";import{_ as Le}from"./index104.js?v=1741416570306";import{aE as Ie,aF as Me,a as Ae,aG as Fe,g as qe,aH as Be}from"./site.js?v=1741416570306";import{_ as Oe}from"./index.js?v=1741416570306";const ze=Symbol("site-config");function Ee(){return I(ze)}const{t:Ve}=e.global;function He({delDomain:e}){return{key:"action",title:Ve("Public.Table.Action"),width:80,align:"right",render:t=>M(pe,{options:[{label:Ve("Public.Btn.Del"),onClick:()=>{ue({title:"".concat(Ve("Site.Batch.index_12"),"[").concat(t.name,"]"),content:Ve("Site.Batch.index_13"),onConfirm:async({hide:a})=>{await e(t),a()}})}}]},null)}}const Ke={class:"flex justify-between items-center mb-24px"},Qe={class:"w-400px"},We={class:"pr-40px"},Ge=A({__name:"index",setup(e,{expose:s}){const{t:d}=F(),{data:c}=Ee(),r=q(""),u=async()=>{""!==r.value.trim()?(await o({project_name:c.name,domains:r.value.trim().split("\n").map((e=>e.trim())).filter((e=>e))}),r.value="",w()):i.error(d("Site.RulesError.index_31"))},p=async e=>{await a({project_name:c.name,domain:e.name}),w()},{keys:_,table:m,columns:x}=_e([{type:"selection",width:40},{key:"name",title:Ve("Site.TableRow.index_19"),render:e=>M(t,{href:"http://".concat(e.name,":").concat(e.port),target:"_blank"},{default:()=>[e.name]})},{key:"port",title:Ve("Site.TableRow.index_16"),width:100},He({delDomain:p})]),v=()=>{m.data.length>1?x.value[x.value.length-1]=He({delDomain:p}):x.value[x.value.length-1]={key:"action",title:Ve("Public.Table.Action"),width:80,align:"right",render:()=>M("span",{class:"text-default"},[Ve("Config.Panel.index_82")])}},f=[{key:"del",type:"confirm",label:d("Site.Batch.index_20"),confirm:{title:d("Site.Batch.index_21"),desc:d("Site.Batch.index_11"),api:e=>a({project_name:c.name,domain:e.name},!1),done:()=>{w()},columns:[{key:"name",title:d("Site.Cert.index_29"),ellipsis:{tooltip:{width:"trigger"}}}]}}],{loading:g,setLoading:y}=me(),w=async()=>{try{y(!0);const{message:e}=await n({project_name:c.name});m.data=l(e)?e:[],v()}finally{_.value=[],y(!1)}};return w(),s({init:w}),(e,t)=>{const a=re,n=ge,l=ce,i=de,o=se;return B(),O("div",null,[z("div",Ke,[z("div",Qe,[M(a,{value:H(r),"onUpdate:value":t[0]||(t[0]=e=>K(r)?r.value=e:null)},{default:E((()=>[z("p",null,V(e.$t("Site.Config.index_30")),1),z("p",null,V(e.$t("Site.Config.index_31")),1),z("p",null,V(e.$t("Site.Config.index_32")),1)])),_:1},8,["value"])]),z("div",We,[M(n,{type:"primary",onClick:u},{default:E((()=>[Q(V(e.$t("Site.Cert.index_62")),1)])),_:1})])]),M(o,null,{table:E((()=>[M(l,{"checked-row-keys":H(_),"onUpdate:checkedRowKeys":t[1]||(t[1]=e=>K(_)?_.value=e:null),loading:H(g),"max-height":400,data:H(m).data,columns:H(x)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:E((()=>[M(i,{"checked-row-keys":H(_),"onUpdate:checkedRowKeys":t[2]||(t[2]=e=>K(_)?_.value=e:null),data:H(m).data,options:f},null,8,["checked-row-keys","data"])])),_:1})])}}}),Ye=A({__name:"index",setup(e,{expose:t}){const{t:a}=F(),{data:n}=Ee(),o=s(),_=W({module:""}),m=async()=>{""!==_.module?(await u({project_name:n.name,mod_name:_.module}),b(),_.module=""):i.error(a("Node.index_72"))},x=async()=>{await p({project_name:n.name}),b()},{keys:v,table:f,columns:g}=_e([{key:"name",title:a("Node.index_46"),ellipsis:{tooltip:{width:"trigger"}}},{key:"version",title:a("Site.TableRow.index_3"),width:80},{key:"license",title:a("Node.index_47"),width:80,render:e=>"object"==typeof e.license&&null!==e.license?e.license.type:e.license},{key:"description",title:a("Docker.Container.config.image.index_11"),ellipsis:{tooltip:{width:"trigger"}}},xe({width:130,options:e=>[{label:a("Home.index_5"),onClick:()=>{ve({title:a("Node.index_48"),content:a("Node.index_49",[e.name]),onConfirm:async()=>{await d({project_name:n.name,mod_name:e.name}),b()}})}},{label:a("Public.Btn.Uninstall"),onClick:()=>{ve({title:a("Node.index_50"),content:a("Node.index_51",[e.name]),onConfirm:async()=>{await c({project_name:n.name,mod_name:e.name}),b()}})}}]})]),{loading:y,setLoading:w}=me(),b=async()=>{try{w(!0);const{message:e}=await r({project_name:n.name,project_cwd:o.nodePath});l(e)&&(f.data=e)}finally{v.value=[],w(!1)}},h=async()=>{await o.getConfig(!1),b()};return h(),t({init:h}),(e,t)=>{const a=ye,n=ge,l=we,i=ce,o=se;return B(),O("div",null,[M(l,{class:"justify-between!"},{default:E((()=>[z("div",null,[M(a,{class:"w-240px!",value:H(_).module,"onUpdate:value":t[0]||(t[0]=e=>H(_).module=e),placeholder:e.$t("Node.index_45")},null,8,["value","placeholder"]),M(n,{type:"primary",onClick:m},{default:E((()=>[Q(V(e.$t("Docker.App.index_4")),1)])),_:1})]),z("div",null,[H(f).data.length?Y("",!0):(B(),G(n,{key:0,type:"primary",onClick:x},{default:E((()=>[Q(V(e.$t("Node.index_74")),1)])),_:1}))])])),_:1}),M(o,{class:"mt-16px"},{table:E((()=>[M(i,{"checked-row-keys":H(v),"onUpdate:checkedRowKeys":t[1]||(t[1]=e=>K(v)?v.value=e:null),loading:H(y),"max-height":440,data:H(f).data,columns:H(g)},null,8,["checked-row-keys","loading","data","columns"])])),_:1})])}}}),Xe=A({__name:"index",setup(e,{expose:t}){const{t:a}=F(),{data:n}=Ee(),l=s(),i=q(!0),o=async e=>{i.value=!e;const t=a("Node.index_42"),o=a("Node.index_80"),s=a("Node.index_81");ue({title:t,content:e?s:o,onConfirm:async({hide:t})=>{e?await m({project_name:n.name,domains:l.domains}):await _({project_name:n.name}),i.value=e,t()}})},{loading:d,setLoading:c}=me(),r=async()=>{try{c(!0),await l.getConfig(!1),i.value=l.isMapping}finally{c(!1)}};return r(),t({init:r}),(e,t)=>{const a=be,n=we,l=Se;return B(),O("div",null,[M(n,{class:"items-center"},{default:E((()=>[z("span",null,V(e.$t("Node.index_42")),1),M(a,{value:H(i),"onUpdate:value":[t[0]||(t[0]=e=>K(i)?i.value=e:null),o],"rubber-band":!1,loading:H(d)},null,8,["value","loading"])])),_:1}),M(l,{class:"mt-16px"},{default:E((()=>[z("li",null,V(e.$t("Node.index_43")),1),z("li",null,V(e.$t("Node.index_44")),1)])),_:1})])}}}),Ze={class:"relative h-full"},Je={key:0,class:"install-box"},et={class:"install-desc"},tt=x(A({__name:"index",props:{active:{type:Boolean,default:!0}},setup:e=>(e,t)=>(B(),O("div",Ze,[X(e.$slots,"default",{},void 0,!0),e.active?Y("",!0):(B(),O("div",Je,[z("div",et,[X(e.$slots,"desc",{},void 0,!0)])]))]))}),[["__scopeId","data-v-3fa52c5e"]]),at={class:"mt-8px"},nt=A({__name:"index",setup(e,{expose:a}){const{data:n}=Ee(),l=v(),i=s(),o=q(null),d=()=>{i.activeMenu="mapping"},c=q((()=>{const{webserver:e}=l,t="openlitespeed"===e?"".concat(e,"/detail"):e;return"/www/server/panel/vhost/".concat(t,"/node_").concat(n.name,".conf")})()),r=async()=>{var e;await i.getConfig(),null==(e=o.value)||e.getContent()},u=()=>{var e;null==(e=o.value)||e.saveFile()};return Z((()=>{r()})),a({init:r}),(e,a)=>{const n=t,l=ge,s=Se,r=tt;return B(),G(r,{active:H(i).isMapping},{desc:E((()=>[z("span",null,[Q(V(e.$t("Node.index_55"))+" ",1),M(n,{onClick:d},{default:E((()=>[Q(V(e.$t("Node.index_42")),1)])),_:1}),Q(" "+V(e.$t("Node.index_56")),1)])])),default:E((()=>[z("div",null,[M($e,{ref_key:"configRef",ref:o,path:H(c),"onUpdate:path":a[0]||(a[0]=e=>K(c)?c.value=e:null),height:"500"},null,8,["path"]),z("div",at,[M(l,{type:"primary",onClick:u},{default:E((()=>[Q(V(e.$t("Site.Cert.index_60")),1)])),_:1})]),M(s,{class:"mt-16px"},{default:E((()=>[z("li",null,V(e.$t("Site.Config.index_59")),1),z("li",null,V(e.$t("Site.Config.index_60")),1)])),_:1})])])),_:1},8,["active"])}}}),{t:lt}=e.global,it=q([{label:lt("Config.Alarm.index_43"),value:"name"},{label:lt("Component.UploadFile.index_5"),value:"status"},{label:lt("Ftp.Analysis.Index_27"),value:"user"},{label:lt("Public.Search.StartTime"),value:"create_time",isTime:!0},{label:"PID",value:"pid"},{label:"PPID",value:"ppid"},{label:lt("Node.index_75"),value:"threads"},{label:"Socket",value:"connects"},{label:"CPU",value:"cpu_percent"},{label:"RAM",value:"memory_used",isSize:!0},{label:"Disk/R",value:"io_read_bytes",isSize:!0},{label:"Disk/W",value:"io_write_bytes",isSize:!0},{label:lt("Term.index_24"),value:"exe"}]),ot={class:"my-16px"},st={class:"my-16px"},dt=x(A({__name:"index",setup(e,{expose:a}){const{t:n}=F(),{data:l}=Ee(),i=s(),o=()=>{i.activeMenu="service"},d=q(!0),c=q(""),r=q([]),u=e=>{const t=k.value[e];p.value=t,m.data=t.connections,v.data=t.open_files},p=q(),_=e=>{if(!p.value)return;const t=p.value[e.value];return void 0===t?"--":e.isTime?f(t):e.isSize?g(t):t},{table:m,columns:x}=_e([{key:"client_addr",title:n("Node.index_77")},{key:"client_rport",title:n("Node.index_78")},{key:"family",title:n("Docker.Container.create.port_4")},{key:"fd",title:"FD",width:"50px"},{key:"local_addr",title:n("Node.index_79")},{key:"status",title:n("Component.UploadFile.index_5")}]),{table:v,columns:j}=_e([{key:"path",title:n("Logs.Soft.index_3")},{key:"mode",title:n("Site.TableRow.index_12"),width:"50px"},{key:"position",title:n("Database.tools.index_76"),width:"100px"},{key:"flags",title:"Flags",width:"100px"},{key:"fd",title:"FD",width:"50px"}]),k=q({}),{loading:C,setLoading:N}=me(),S=async()=>{try{N(!0);const{message:e}=await y({project_name:l.name});if(w(e)){if(d.value=e.run,0===Object.keys(e.load_info).length)return;k.value=e.load_info,r.value=Object.keys(e.load_info).map((e=>({label:e,value:e}))),c.value=r.value[0].value,u(c.value)}}finally{N(!1)}};return S(),a({init:S}),(e,a)=>{const n=t,l=he,i=we,s=b,p=h,f=ce,g=tt;return B(),G(g,{active:H(d)},{desc:E((()=>[z("span",null,[Q(V(e.$t("Node.index_64"))+" ",1),M(n,{onClick:o},{default:E((()=>[Q(V(e.$t("Node.index_65")),1)])),_:1})])])),default:E((()=>[z("div",null,[M(i,{class:"items-center"},{default:E((()=>[a[1]||(a[1]=z("span",null,"PID",-1)),M(l,{class:"w-150px!",value:H(c),"onUpdate:value":[a[0]||(a[0]=e=>K(c)?c.value=e:null),u],loading:H(C),options:H(r)},null,8,["value","loading","options"])])),_:1}),M(p,{"label-placement":"left",bordered:"",column:4,class:"mt-16px"},{default:E((()=>[(B(!0),O(J,null,ee(H(it),(e=>(B(),G(s,{label:e.label,key:e.value},{default:E((()=>[Q(V(_(e)),1)])),_:2},1032,["label"])))),128))])),_:1}),z("div",ot,V(e.$t("Docker.Container.create.index_31")),1),M(f,{"max-height":150,data:H(m).data,columns:H(x)},null,8,["data","columns"]),z("div",st,V(e.$t("Node.index_76")),1),M(f,{"max-height":150,data:H(v).data,columns:H(j)},null,8,["data","columns"])])])),_:1},8,["active"])}}}),[["__scopeId","data-v-9c2e6736"]]),ct=A({__name:"index",setup(e,{expose:t}){const{data:a}=Ee(),{t:n}=F(),l=s(),o=q(!0),d=()=>{ue({title:n("Node.index_58"),content:o.value?n("Node.index_70"):n("Node.index_59"),onConfirm:async()=>{o.value?await k({project_name:a.name}):await j({project_name:a.name}),r(),l.setRefresh(!0)}})},c=()=>{ue({title:n("Node.index_58"),content:n("Node.index_60"),onConfirm:async()=>{await C({project_name:a.name}),r()}})},r=async()=>{i.loading(n("Component.Api.index_1")),await l.getConfig(!1),o.value=l.isRun,i.clear()};return r(),t({init:r}),(e,t)=>{const a=we,l=ge;return B(),O(J,null,[M(a,{class:"items-center",size:0},{default:E((()=>[Q(V(e.$t("Node.index_57"))+"："+V(H(o)?e.$t("Public.Status.Start"):e.$t("Public.Status.Stop")),1),z("span",{class:te(["iconfont","icon-".concat(H(o)?"start":"stop")])},null,2)])),_:1}),M(a,{class:"mt-16px"},{default:E((()=>[M(l,{onClick:d},{default:E((()=>[Q(V(H(o)?e.$t("Public.Status.Stop"):e.$t("Public.Status.Start")),1)])),_:1}),M(l,{onClick:c},{default:E((()=>[Q(V(H(n)("Public.Status.Restart")),1)])),_:1})])),_:1})],64)}}}),rt={class:"w-360px"},ut={class:"w-360px"},pt={class:"w-200px"},_t={class:"ml-10px text-default"},mt={class:"w-440px"},xt={class:"w-200px"},vt={class:"ml-10px text-default"},ft={class:"w-150px"},gt={class:"ml-10px text-default"},yt={class:"w-150px"},wt={class:"ml-10px text-default"},bt={class:"w-440px"},ht=A({__name:"index",setup(e,{expose:a}){const{t:n}=F(),o=s(),d=q(null),c=q(""),r=W({project_cwd:"/www/wwwroot",project_name:"",project_script:"",project_script_two:"",port:null,run_user:"www",nodejs_version:null,project_ps:"",boot:!1}),u={project_cwd:{trigger:["blur","input"],required:!0,message:n("Node.index_28")},project_name:{trigger:["blur","input"],required:!0,message:n("Node.index_29")},project_script:{trigger:["change"],required:!0,message:n("Node.index_30")},project_script_two:{trigger:["blur","input"],required:!0,message:n("Node.index_31")},port:Pe(),nodejs_version:{trigger:["change"],required:!0,message:n("Node.index_32")}},p=()=>{const e=r.project_cwd.split("/"),t=e[e.length-1];r.project_name=t,r.project_ps=t,c.value=r.project_cwd,m()},_=q([]),m=async()=>{const{message:e}=await N({project_cwd:r.project_cwd});if(w(e)){const t=Object.keys(e).map((t=>({label:"".concat(t," [").concat(e[t],"]"),value:t})));t.find((e=>e.value==r.project_script))||(r.project_script_two=r.project_script,r.project_script="custom"),t.push({label:n("Node.index_33"),value:"custom"}),_.value=t}},x=[{label:"www",value:"www"},{label:"root",value:"root"}],v=q([]),f=e=>{r.project_ps=e},g=async()=>{var e;await(null==(e=d.value)?void 0:e.validate());const t=(()=>{var e;return{project_cwd:r.project_cwd,project_name:r.project_name,project_script:"custom"===r.project_script?r.project_script_two:r.project_script,port:null==(e=r.port)?void 0:e.toString(),run_user:r.run_user,nodejs_version:r.nodejs_version,project_ps:r.project_ps,is_power_on:r.boot?1:0}})();await S(t),o.setRefresh(!0)},b=async()=>{await(async()=>{const{message:e}=await y({project_name:o.siteName});w(e)&&(r.project_cwd=e.path,c.value=e.path,r.project_name=e.name,r.project_script=e.project_config.project_script,r.port=e.project_config.port,r.run_user=e.project_config.run_user,r.nodejs_version=e.project_config.nodejs_version,r.project_ps=e.ps,r.boot=!!Number(e.project_config.is_power_on))})(),m(),(async()=>{const{message:e}=await $();l(e)&&e.length>0?v.value=e.map((e=>({label:e,value:e}))):i.error({close:!0,content:n("Node.index_34"),onClose:()=>{Te()}})})()};return b(),a({init:b}),(e,a)=>{const n=Ue,l=je,i=ye,o=he,s=ke,m=t,y=Ce,w=ge,b=Re,h=Se;return B(),O("div",null,[M(b,{ref_key:"formRef",ref:d,model:H(r),rules:u},{default:E((()=>[M(l,{label:e.$t("Docker.Container.index_17"),path:"project_cwd"},{default:E((()=>[z("div",rt,[M(n,{value:H(r).project_cwd,"onUpdate:value":a[0]||(a[0]=e=>H(r).project_cwd=e),readonly:!0,onChange:p},null,8,["value"])])])),_:1},8,["label"]),M(l,{label:e.$t("Config.Alarm.index_43"),path:"project_name"},{default:E((()=>[z("div",ut,[M(i,{disabled:"",value:H(r).project_name,"onUpdate:value":[a[1]||(a[1]=e=>H(r).project_name=e),f],placeholder:e.$t("Node.index_11")},null,8,["value","placeholder"])])])),_:1},8,["label"]),M(l,{label:e.$t("Node.index_12"),path:"project_script","show-feedback":!("custom"===H(r).project_script)},{default:E((()=>[z("div",pt,[M(o,{value:H(r).project_script,"onUpdate:value":a[2]||(a[2]=e=>H(r).project_script=e),placeholder:e.$t("Node.index_13"),options:H(_)},null,8,["value","placeholder","options"])]),z("div",_t,"* "+V(e.$t("Node.index_14")),1)])),_:1},8,["label","show-feedback"]),"custom"===H(r).project_script?(B(),G(l,{key:0,class:"mt-8px",label:" ",path:"project_script_two"},{default:E((()=>[z("div",mt,[M(n,{defaultPath:H(c),"checked-type":["file"],value:H(r).project_script_two,"onUpdate:value":a[3]||(a[3]=e=>H(r).project_script_two=e)},null,8,["defaultPath","value"])])])),_:1})):Y("",!0),M(l,{label:e.$t("Docker.Container.create.index_7"),path:"port"},{default:E((()=>[z("div",xt,[M(s,{value:H(r).port,"onUpdate:value":a[4]||(a[4]=e=>H(r).port=e),min:1,max:65535,"show-button":!1,placeholder:e.$t("Node.index_15")},null,8,["value","placeholder"])]),z("div",vt,"* "+V(e.$t("Node.index_15")),1)])),_:1},8,["label"]),M(l,{label:e.$t("Ftp.Analysis.Index_27")},{default:E((()=>[z("div",ft,[M(o,{value:H(r).run_user,"onUpdate:value":a[5]||(a[5]=e=>H(r).run_user=e),options:x},null,8,["value"])]),z("div",gt,"* "+V(e.$t("Node.index_16")),1)])),_:1},8,["label"]),M(l,{label:"Node",path:"nodejs_version"},{default:E((()=>[z("div",yt,[M(o,{value:H(r).nodejs_version,"onUpdate:value":a[6]||(a[6]=e=>H(r).nodejs_version=e),options:H(v)},null,8,["value","options"])]),z("div",wt,[z("span",null,"* "+V(e.$t("Node.index_17"))+", ",1),M(m,{onClick:H(Te)},{default:E((()=>[Q(V(e.$t("Node.index_18")),1)])),_:1},8,["onClick"])])])),_:1}),M(l,{label:e.$t("Docker.Container.create.index_46"),path:"project_ps"},{default:E((()=>[z("div",bt,[M(i,{value:H(r).project_ps,"onUpdate:value":a[7]||(a[7]=e=>H(r).project_ps=e),placeholder:e.$t("Node.index_19")},null,8,["value","placeholder"])])])),_:1},8,["label"]),M(l,{label:e.$t("Node.index_52")},{default:E((()=>[M(y,{checked:H(r).boot,"onUpdate:checked":a[8]||(a[8]=e=>H(r).boot=e)},{default:E((()=>[Q(V(e.$t("Node.index_53")),1)])),_:1},8,["checked"])])),_:1},8,["label"]),M(l,{label:" "},{default:E((()=>[M(w,{type:"primary",onClick:g},{default:E((()=>[Q(V(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1})])),_:1},8,["model"]),M(h,{class:"mt-8px"},{default:E((()=>[z("li",null,V(e.$t("Node.index_24")),1),z("li",null,V(e.$t("Node.index_25")),1),z("li",null,V(e.$t("Node.index_26")),1),z("li",null,V(e.$t("Node.index_27")),1)])),_:1})])}}}),jt=A({__name:"index",setup(e,{expose:t}){const{data:a}=Ee(),n=q("None"),{loading:l,setLoading:i}=me(),o=async()=>{try{i(!0);const{message:e}=await R({project_name:a.name});w(e)&&(n.value=U(e.result)?e.result:"None")}finally{i(!1)}};return o(),t({init:o}),(e,t)=>{const a=De,i=P;return B(),G(i,{class:"h-full",show:H(l)},{default:E((()=>[M(a,{log:H(n)},null,8,["log"])])),_:1},8,["show"])}}}),kt=A({__name:"index",setup(e,{expose:t}){const{data:a}=Ee(),n=s(),l=q("None"),{loading:i,setLoading:o}=me(),d=async()=>{await n.getConfig();try{o(!0);const{message:e}=await Ie({siteName:a.name});w(e)&&(l.value=U(e.result)?e.result:"None")}finally{o(!1)}};return d(),t({init:d}),(e,t)=>{const a=De,n=P;return B(),G(n,{class:"h-560px",show:H(i)},{default:E((()=>[M(a,{log:H(l)},null,8,["log"])])),_:1},8,["show"])}}}),Ct=A({__name:"index",setup(e,{expose:t}){const{data:a}=Ee(),n=q("None"),{loading:l,setLoading:i}=me(),o=async()=>{try{i(!0);const{message:e}=await Me({siteName:a.name});w(e)&&(n.value=U(e.result)?e.result:"None")}finally{i(!1)}};return o(),t({init:o}),(e,t)=>{const a=De,i=P;return B(),G(i,{class:"h-560px",show:H(l)},{default:E((()=>[M(a,{log:H(n)},null,8,["log"])])),_:1},8,["show"])}}}),Nt=A({__name:"logs",props:{data:{}},setup(e){const t=e,{type:a,path:n}=t.data,l=q(""),{loading:i,setLoading:o}=me();return(async()=>{try{o(!0);const{message:e}=await Ae({type:a,path:n});w(e)&&(l.value=e.result)}finally{o(!1)}})(),(e,t)=>{const a=De,n=P;return B(),G(n,{class:"w-650px h-550px bg-#282C34",show:H(i)},{default:E((()=>[M(a,{log:H(l)},null,8,["log"])])),_:1},8,["show"])}}}),St={class:"text-error"},$t={class:"w-400px p-20px"},Rt={class:"mb-16px"},Ut=A({__name:"index",setup(e,{expose:a}){const{t:n}=F(),l=v(),{data:o}=Ee(),s=ae((()=>{let e="";switch(l.webserver){case"nginx":e=".log";break;case"apache":e="-access_log";break;default:e="_ols.access_log"}return"/www/wwwlogs/".concat(o.name).concat(e)})),d=ae((()=>{const e=s.value.split("/");return e[e.length-1]})),c=()=>{ue({title:n("Site.Config.index_104"),content:"".concat(n("Site.Config.index_105")," [").concat(d.value,"] ").concat(n("Site.Config.index_106")),onConfirm:async({hide:e})=>{try{await Fe({path:s.value}),e(),p()}catch(t){e()}}})},r=q(!1),u=q(0),p=async()=>{r.value=!0,_()},_=(e=0)=>{let t=setTimeout((async()=>{const{message:e}=await qe({path:s.value});w(e)&&(u.value=e.result,u.value>=100?(i.success(n("Site.Config.index_107")),r.value=!1,u.value=0,b(),clearTimeout(t)):_(1e3))}),e)},m=e=>{fe({title:"[".concat(e,"] ").concat(n("Site.Config.index_103")),data:{type:e,path:s.value},component:Nt})},{table:x,columns:f}=_e([{key:"start_time",title:n("Site.Cert.index_68")},{key:"time",title:n("Site.DelSite.index_6"),render:e=>"".concat(e.time.substring(0,4)," s")},{key:"xss",title:n("Site.TableRow.index_4"),render:e=>e.xss>0?M("span",{class:"text-error"},[e.xss]):e.xss},{key:"sql",title:n("Site.TableRow.index_5"),render:e=>e.sql>0?M("span",{class:"text-error"},[e.sql]):e.sql},{key:"san",title:n("Site.TableRow.index_6"),render:e=>e.san>0?M("span",{class:"text-error"},[e.san]):e.san},{key:"php",title:n("Site.TableRow.index_27"),render:e=>e.php>0?M("span",{class:"text-error"},[e.php]):e.php},{key:"ip",title:n("Site.TableRow.index_7"),render:e=>e.ip>0?M(t,{onClick:()=>{m("ip")}},{default:()=>[e.ip]}):e.ip},{key:"url",title:n("Site.TableRow.index_8"),render:e=>e.url>0?M(t,{onClick:()=>{m("url")}},{default:()=>[e.url]}):e.url}]),{loading:g,setLoading:y}=me(),b=async()=>{try{y(!0);const{message:e}=await Be({path:s.value});w(e)&&(x.data=[e])}finally{y(!1)}},h=()=>{b()};return h(),a({init:h}),(e,a)=>{const n=ge,l=ce,i=se,o=Se,s=Ne,d=Oe;return B(),O("div",null,[M(i,null,{toolsLeft:E((()=>[M(n,{type:"primary",onClick:c},{default:E((()=>[Q(V(e.$t("Site.Config.index_104")),1)])),_:1})])),table:E((()=>[M(l,{loading:H(g),"loading-num":1,data:H(x).data,columns:H(f)},null,8,["loading","data","columns"])])),_:1}),M(o,{class:"mt-16px"},{default:E((()=>[z("li",null,[Q(V(e.$t("Site.Config.index_108"))+" ",1),z("span",St,V(e.$t("Site.Config.index_109")),1)]),z("li",null,V(e.$t("Site.Config.index_110")),1),z("li",null,V(e.$t("Site.Config.index_111")),1),z("li",null,V(e.$t("Site.Config.index_112")),1),z("li",null,[M(t,{href:"https://www.aapanel.com/forum/d/3351-nginx-waf-instructions",target:"_blank"},{default:E((()=>[Q(V(e.$t("Site.Config.index_113")),1)])),_:1}),Q(" "+V(e.$t("Site.Config.index_114")),1)])])),_:1}),M(d,{show:H(r),"onUpdate:show":a[0]||(a[0]=e=>K(r)?r.value=e:null)},{default:E((()=>[z("div",$t,[z("div",Rt,V(e.$t("Site.Config.index_115")),1),M(s,{type:"line",status:"success",height:24,percentage:H(u),"border-radius":4,"indicator-placement":"inside"},null,8,["percentage"])])])),_:1},8,["show"])])}}}),Pt=A({__name:"index",setup(e,{expose:a}){const{t:n}=F(),{config:l}=Ee(),i=s(),o=()=>{i.activeMenu="mapping"},d=q("access"),c=q(),r=[{key:"access",label:n("Site.Config.index_100"),component:kt},{key:"error",label:n("Site.Config.index_101"),component:Ct},{key:"security",label:n("Site.Config.index_102"),component:Ut}];return d.value=l.subMenu||"access",l.subMenu="",a({init:()=>{d.value="access",ne((()=>{var e;null==(e=c.value)||e.init()}))}}),(e,a)=>{const n=t,l=Le,s=tt;return B(),G(s,{active:H(i).isMapping},{desc:E((()=>[z("span",null,[Q(V(e.$t("Node.index_55"))+" ",1),M(n,{onClick:o},{default:E((()=>[Q(V(e.$t("Node.index_42")),1)])),_:1}),Q(" "+V(e.$t("Node.index_56")),1)])])),default:E((()=>[M(l,{value:H(d),"onUpdate:value":a[0]||(a[0]=e=>K(d)?d.value=e:null),ref_key:"tabsRef",ref:c,options:r},null,8,["value"])])),_:1},8,["active"])}}}),Tt={class:"h-full"},Dt=A({__name:"index",props:{siteInfo:{},config:{}},setup(e){const{t:t}=F(),a=s(),{siteName:n}=le(a),l=oe((()=>T((()=>import("./index247.js?v=1741416570306")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39])))),i=oe((()=>T((()=>import("./old5.js?v=1741416570306")),__vite__mapDeps([40,6,2,3,7,4,5,9,8,41,17,18,19,20,21,22,23,24,25,12,15,16,13,11,26,27,28,29,30,31,32,1,10,33,34,14,35,36,37,38,39])))),o=e,{siteInfo:d,config:c}=o;n.value=o.siteInfo.name;const r=q();d&&L(ze,{data:d,config:c});const u=q("project"),p=[{key:"project",label:t("Node.index_61"),component:ht},{key:"domain",label:t("Site.Config.index_1"),component:Ge},{key:"mapping",label:t("Node.index_42"),component:Xe},{key:"rewrite",label:t("Site.Config.index_7"),component:l},{key:"config",label:t("Site.Config.index_10"),component:nt},{key:"ssl",label:()=>M(J,null,[t("Site.Config.index_11")]),component:i},{key:"load",label:t("Home.index_30"),component:dt},{key:"service",label:t("Config.Safe.index_54"),component:ct},{key:"module",label:t("Node.index_46"),component:Ye},{key:"project log",label:t("Node.index_62"),component:jt},{key:"logs",label:t("Node.index_63"),component:Pt}];return ie((()=>a.activeMenu),(e=>{e&&(a.setMenu(),u.value=e)})),u.value=c.menu||"project",c.menu="",Z((()=>{window.siteConfigInit=r.value.init})),(e,t)=>{const a=D;return B(),O("div",Tt,[M(a,{value:H(u),"onUpdate:value":t[0]||(t[0]=e=>K(u)?u.value=e:null),ref_key:"tabsRef",ref:r,data:p},null,8,["value"])])}}}),Lt=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"}));export{tt as _,Lt as i,Ee as u};
