import{_ as e,a as n,C as a}from"./index.vue_vue_type_script_setup_true_lang9.js?v=1741416570306";import{D as l,m as t,b as i,h as s,_ as o,C as u,k as r}from"./page_layout.js?v=1741416570306";import{a as d,u as c,l as p,b as _}from"./public.js?v=1741416570306";import{d as f,e as m,f as x,h as v,b,g,i as C,j as P,k as w,l as y,m as $,n as k,o as h,p as U,q as j,r as S,s as B,t as q,u as I}from"./global.js?v=1741416570306";import{d as M,M as D,r as E,P as z,_ as H,$ as R,N as A,S as T,R as V,a0 as F,Q as L,c as N,j as O,F as Q,ao as G,k as J,v as K,a1 as W,e as X}from"./vue.js?v=1741416570306";import{bV as Y,cb as Z,T as ee,_ as ne,bS as ae,ch as le,cl as te,y as ie}from"./naive.js?v=1741416570306";import{p as se,_ as oe,f as ue,h as re,g as de,m as ce}from"./index98.js?v=1741416570306";import{_ as pe}from"./index95.js?v=1741416570306";import{_ as _e}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{_ as fe}from"./index99.js?v=1741416570306";import{_ as me}from"./index.vue_vue_type_script_setup_true_lang8.js?v=1741416570306";import{_ as xe}from"./index.vue_vue_type_script_setup_true_lang10.js?v=1741416570306";import{_ as ve}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1741416570306";import{_ as be}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";const ge=M({__name:"index",setup(n){const{t:a}=D(),t=E(!1),i=()=>{d({title:a("Config.Panel.index_2"),content:a("Config.Panel.index_4"),onConfirm:async()=>{await f(),l()}})};return(n,a)=>{const l=Y,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_2")},{content:R((()=>[A(l,{value:T(t),"onUpdate:value":i},null,8,["value"])])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_3")),1)])),_:1},8,["label"])}}}),Ce=M({__name:"index",setup(n){const a=async e=>{await m(),se.value.listenIpv6=e};return(n,l)=>{const t=Y,i=e;return z(),H(i,{label:n.$t("Config.Panel.index_5")},{content:R((()=>[A(t,{value:T(se).listenIpv6,"onUpdate:value":a},null,8,["value"])])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_6")),1)])),_:1},8,["label"])}}}),Pe=M({__name:"index",setup(n){const{t:a}=D(),l=e=>{d({width:e?480:380,title:a("Config.Panel.index_83",[a(e?"Config.Panel.index_83_1":"Config.Panel.index_83_2")]),content:a(e?"Config.Panel.index_85":"Config.Panel.index_84"),onConfirm:async()=>{await x(),se.value.offlineMode=e}})};return(n,a)=>{const t=Y,i=e;return z(),H(i,{label:n.$t("Config.Panel.index_7")},{content:R((()=>[A(t,{value:T(se).offlineMode,"onUpdate:value":l},null,8,["value"])])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_8")),1)])),_:1},8,["label"])}}}),we={class:"p-20px"},ye={class:"text-error"},$e=M({__name:"confirm",setup(e,{expose:a}){const l=E();return a({onConfirm:async()=>{await l.value.validate(),await v(),se.value.debugMode=!0}}),(e,a)=>{const t=n,i=oe,s=ue;return z(),L("div",we,[A(t,{class:"mb-20px"},{default:R((()=>[N(F(e.$t("Config.Panel.index_14")),1)])),_:1}),A(i,{class:"mb-20px"},{default:R((()=>[V("li",ye,F(e.$t("Config.Panel.index_15")),1),V("li",null,F(e.$t("Config.Panel.index_16")),1),V("li",null,F(e.$t("Config.Panel.index_17")),1)])),_:1}),A(s,{ref_key:"riskRef",ref:l},{default:R((()=>[N(F(e.$t("Config.Panel.index_18")),1)])),_:1},512)])}}}),ke=M({__name:"index",setup(n){const{t:a}=D(),l=e=>{e?c({title:a("Config.Panel.index_11"),width:440,footer:!0,component:$e}):d({title:a("Config.Panel.index_12"),content:a("Config.Panel.index_13"),onConfirm:async()=>{await v(),se.value.debugMode=e}})};return(n,a)=>{const t=Y,i=e;return z(),H(i,{label:n.$t("Config.Panel.index_9")},{content:R((()=>[A(t,{value:T(se).debugMode,"onUpdate:value":l},null,8,["value"])])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_10")),1)])),_:1},8,["label"])}}}),he={class:"p-20px"},Ue={class:"w-320px"},je={class:"inline-block text-center leading-[1.4]"},Se={class:"w-320px"},Be=M({__name:"config",setup(e){const{t:n}=D(),a=O({token:"",limit_addr:""}),l=async e=>{await b({t_type:2}),se.value.apiInterface=e},s=()=>{d({title:n("Config.Panel.index_33"),content:()=>A(Q,null,[A("div",{class:"mb-8px"},[n("Config.Panel.index_86")]),A("div",{class:"text-error"},[n("Config.Panel.index_87")])]),onConfirm:async()=>{const{message:e}=await b({t_type:1},!1);t.success({content:n("Config.Panel.index_34"),close:!0}),i(e)&&(a.token=e.result)}})},o=async()=>{await b({t_type:3,limit_addr:a.limit_addr})};return(async()=>{const{message:e}=await g();i(e)&&(a.token=e.token,a.limit_addr=e.limit_addr)})(),(e,n)=>{const t=Y,i=Z,u=ee,r=ne,d=fe,c=_e,p=pe;return z(),L("div",he,[A(c,{model:T(a)},{default:R((()=>[A(i,{label:e.$t("Config.Panel.index_19")},{default:R((()=>[A(t,{value:T(se).apiInterface,"onUpdate:value":l},null,8,["value"])])),_:1},8,["label"]),A(i,{label:e.$t("Config.Panel.index_26")},{default:R((()=>[V("div",Ue,[A(r,{value:T(a).token,"onUpdate:value":n[0]||(n[0]=e=>T(a).token=e),readonly:!0},{suffix:R((()=>[A(u,{class:"h-22px px-5px",type:"primary",size:"small",onClick:s},{default:R((()=>[N(F(e.$t("Public.Btn.Reset")),1)])),_:1})])),_:1},8,["value"])])])),_:1},8,["label"]),A(i,{class:"form-item"},{label:R((()=>[V("div",je,[N(F(e.$t("Config.Panel.index_27")),1),n[2]||(n[2]=V("br",null,null,-1)),N(" "+F(e.$t("Config.Panel.index_28")),1)])])),default:R((()=>[V("div",Se,[A(d,{value:T(a).limit_addr,"onUpdate:value":n[1]||(n[1]=e=>T(a).limit_addr=e),rows:4},null,8,["value"])])])),_:1}),A(i,{label:" ","show-feedback":!1},{default:R((()=>[A(u,{type:"primary",onClick:o},{default:R((()=>[N(F(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1})])),_:1},8,["model"]),A(p,{class:"mt-20px"},{default:R((()=>[V("li",null,F(e.$t("Config.Panel.index_29")),1),V("li",null,F(e.$t("Config.Panel.index_30")),1),V("li",null,F(e.$t("Config.Panel.index_31")),1),V("li",null,[N(F(e.$t("Config.Panel.index_32"))+" ",1),n[3]||(n[3]=V("a",{class:"bt-link",href:"https://www.aapanel.com/forum/d/482-api-interface-tutorial",target:"_blank"}," https://www.aapanel.com/forum/d/482-api-interface-tutorial ",-1))])])),_:1})])}}}),qe={class:"bt-link",href:"https://www.aapanel.com/forum/d/482-api-interface-tutorial",target:"_blank"},Ie=M({__name:"index",setup(n){const{t:a}=D(),l=async e=>{await b({t_type:2}),se.value.apiInterface=e,e&&t()},t=()=>{c({title:a("Config.Panel.index_25"),width:540,component:Be})};return(n,a)=>{const i=Y,s=ee,o=e;return z(),H(o,{label:n.$t("Config.Panel.index_19")},{content:R((()=>[A(i,{value:T(se).apiInterface,"onUpdate:value":l},null,8,["value"]),A(s,{class:"ml-12px h-24px px-8px",size:"small",onClick:t},{default:R((()=>[N(F(n.$t("Public.Btn.Set")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_21")),1),V("a",qe,F(n.$t("Config.Panel.index_24")),1)])),_:1},8,["label"])}}}),Me={class:"px-20px pt-28px pb-8px"},De={class:"w-200px"},Ee=M({__name:"set",setup(e,{expose:n}){const a=E(null),{t:l}=D(),t=O({backup_number:se.value.backup_info.backup_number}),i={backup_number:{required:!0,type:"number",trigger:["blur","input"],message:l("Config.Panel.index_94")}};return n({onConfirm:async()=>{var e;await(null==(e=a.value)?void 0:e.validate()),se.value.backup_info.backup_number=t.backup_number,await C(re())}}),(e,n)=>{const l=ae,s=Z,o=_e;return z(),L("div",Me,[A(o,{ref_key:"formRef",ref:a,model:T(t),rules:i,"require-mark-placement":"left"},{default:R((()=>[A(s,{label:e.$t("Mail.Mass.index_46"),path:"backup_number","show-require-mark":!0},{default:R((()=>[V("div",De,[A(l,{value:T(t).backup_number,"onUpdate:value":n[0]||(n[0]=e=>T(t).backup_number=e),min:1,"show-button":!1},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),ze={class:"text-default"},He={key:0},Re={class:"mx-12px"},Ae={class:"text-error"},Te=M({__name:"index",setup(n){const{t:a}=D(),l=async e=>{const n=async()=>{se.value.backup_info.auto_backup=e,await C(re()),de()};e?await n():d({title:a("Config.Panel.index_96"),content:a("Config.Panel.index_95"),onConfirm:n})},t=()=>{c({title:a("Config.Panel.index_90"),width:420,footer:!0,component:Ee})},i=async()=>{d({title:a("Config.Panel.index_92"),content:a("Config.Panel.index_93"),onConfirm:async()=>{await P(),se.value.backup_info.total_size=0}})};return(n,a)=>{const o=Y,u=ee,r=e;return z(),H(r,{label:n.$t("Config.Panel.index_88")},{content:R((()=>[A(o,{value:T(se).backup_info.auto_backup,"onUpdate:value":l,"checked-value":1,"unchecked-value":0},null,8,["value"]),A(u,{class:"mx-12px",type:"primary",onClick:t},{default:R((()=>[N(F(n.$t("Public.Btn.Set")),1)])),_:1}),A(u,{onClick:i},{default:R((()=>[N(F(n.$t("Config.Panel.index_89")),1)])),_:1})])),desc:R((()=>[V("div",ze,[T(se).backup_info.auto_backup?(z(),L("span",He,F(n.$t("Config.Panel.index_90"))+"："+F(T(se).backup_info.backup_number),1)):G("",!0),V("span",Re,F(n.$t("Config.Panel.index_91"))+"："+F(T(s)(T(se).backup_info.total_size)),1),V("span",Ae,F(n.$t("Config.Panel.index_97")),1)])])),_:1},8,["label"])}}}),Ve={class:"inline-flex items-center"},Fe={class:"mr-5px"},Le={class:"w-160px mr-16px"},Ne=M({__name:"index",setup(n){const a=async e=>{await w({name:e}),l()};return(n,l)=>{const t=o,i=le,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_35")},{label:R((()=>[V("div",Ve,[V("span",Fe,F(n.$t("Config.Panel.index_35")),1),A(t,{name:"base-lang",size:"18",color:"#666"})])])),content:R((()=>[V("div",Le,[A(i,{value:T(se).lang,"onUpdate:value":[l[0]||(l[0]=e=>T(se).lang=e),a],options:T(se).langList},null,8,["value","options"])]),A(me)])),_:1},8,["label"])}}}),Oe={class:"w-260px"},Qe=M({__name:"index",setup(n){const{t:a}=D(),i=async()=>{se.value.webname.includes("/")||se.value.webname.includes("\\")?t.error(a("Config.Panel.index_38")):(await y(re()),l())};return(n,a)=>{const l=ne,t=ee,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_36")},{content:R((()=>[V("div",Oe,[A(l,{value:T(se).webname,"onUpdate:value":a[0]||(a[0]=e=>T(se).webname=e),placeholder:""},null,8,["value"])]),A(t,{class:"ml-12px",type:"primary",onClick:i},{default:R((()=>[N(F(n.$t("Public.Btn.Save")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_37")),1)])),_:1},8,["label"])}}}),Ge={class:"p-20px"},Je={class:"w-140px"},Ke={class:"text-error"},We=M({__name:"set",setup(e,{expose:n}){const{t:a}=D(),t=O({type:null,time:5}),i=[{label:a("Public.Unit.Hours",[12]),value:a("Public.Unit.Hour",[12]),time:43200},{label:a("Public.Unit.Hours",[24]),value:a("Public.Unit.Hours",[24]),time:86400},{label:a("Public.Unit.Hours",[72]),value:a("Public.Unit.Hours",[72]),time:259200},{label:a("Public.Unit.Days",[7]),value:a("Public.Unit.Days",[7]),time:604800},{label:a("Public.Unit.Days",[30]),value:a("Public.Unit.Days",[30]),time:2592e3},{label:a("Config.Panel.index_43"),value:a("Config.Panel.index_43"),time:0}],s=()=>{t.type===a("Config.Panel.index_43")&&(t.time=5)};var o;return o=se.value.session_timeout,i.filter((e=>e.label!==a("Config.Panel.index_43"))).map((e=>e.label)).includes(o)?t.type=se.value.session_timeout:(t.type=a("Config.Panel.index_43"),t.time=se.value.session_timeout_source/60),n({onConfirm:async()=>{var e;let n=0;n=t.type===a("Config.Panel.index_43")?60*t.time:(null==(e=i.find((e=>e.label===t.type)))?void 0:e.time)||0;const s=re();return s.session_timeout=n,await $(s),l(),!1}}),(e,n)=>{const a=le,l=ae,o=te,u=ie,r=Z,d=_e;return z(),L("div",Ge,[A(d,null,{default:R((()=>[A(r,{label:e.$t("Config.Panel.index_39")},{default:R((()=>[V("div",Je,[A(a,{value:T(t).type,"onUpdate:value":[n[0]||(n[0]=e=>T(t).type=e),s],options:i},null,8,["value"])]),J(A(u,{class:"w-auto ml-10px"},{default:R((()=>[A(l,{value:T(t).time,"onUpdate:value":n[1]||(n[1]=e=>T(t).time=e),class:"w-80px","show-button":!1},null,8,["value"]),A(o,null,{default:R((()=>[N(F(e.$t("Public.Unit.Minute",T(t).time)),1)])),_:1})])),_:1},512),[[K,T(t).type===e.$t("Config.Panel.index_43")]])])),_:1},8,["label"])])),_:1}),V("div",Ke,F(e.$t("Config.Panel.index_44")),1)])}}}),Xe={class:"w-260px"},Ye={class:"text-error"},Ze=M({__name:"index",setup(n){const{t:a}=D(),l=async()=>{c({title:a("Config.Panel.index_42"),width:500,footer:!0,component:We})};return(n,a)=>{const t=ne,i=ee,s=W("i18n-t"),o=e;return z(),H(o,{label:n.$t("Config.Panel.index_39")},{content:R((()=>[V("div",Xe,[A(t,{value:T(se).session_timeout,"onUpdate:value":a[0]||(a[0]=e=>T(se).session_timeout=e),disabled:!0,placeholder:""},null,8,["value"])]),A(i,{class:"ml-12px",type:"primary",onClick:l},{default:R((()=>[N(F(n.$t("Public.Btn.Set")),1)])),_:1})])),desc:R((()=>[A(s,{keypath:"Config.Panel.index_40",scope:"global"},{time_1:R((()=>[V("span",Ye,F(T(se).session_timeout),1)])),_:1})])),_:1},8,["label"])}}}),en={class:"w-260px"},nn=M({__name:"index",setup(n){const a=async()=>{await k(re()),l()};return(n,l)=>{const t=xe,i=ee,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_45")},{content:R((()=>[V("div",en,[A(t,{value:T(se).sites_path,"onUpdate:value":l[0]||(l[0]=e=>T(se).sites_path=e)},null,8,["value"])]),A(i,{class:"ml-12px",type:"primary",onClick:a},{default:R((()=>[N(F(n.$t("Public.Btn.Save")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_46")),1)])),_:1},8,["label"])}}}),an={class:"w-260px"},ln=M({__name:"index",setup(n){const a=async()=>{await h(re()),l()};return(n,l)=>{const t=xe,i=ee,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_47")},{content:R((()=>[V("div",an,[A(t,{value:T(se).backup_path,"onUpdate:value":l[0]||(l[0]=e=>T(se).backup_path=e)},null,8,["value"])]),A(i,{class:"ml-12px",type:"primary",onClick:a},{default:R((()=>[N(F(n.$t("Public.Btn.Save")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_48")),1)])),_:1},8,["label"])}}}),tn={class:"w-260px"},sn=M({__name:"index",setup(n){const{t:a}=D(),t=async()=>{d({width:460,title:a("Config.Panel.index_51"),content:a("Config.Panel.index_52"),onConfirm:async()=>{await U(re()),l("".concat(location.protocol,"//").concat(se.value.serverIp,":").concat(location.port).concat(location.pathname),2e3)}})};return(n,a)=>{const l=ne,i=ee,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_49")},{content:R((()=>[V("div",tn,[A(l,{value:T(se).serverIp,"onUpdate:value":a[0]||(a[0]=e=>T(se).serverIp=e),placeholder:""},null,8,["value"])]),A(i,{class:"ml-12px",type:"primary",onClick:t},{default:R((()=>[N(F(n.$t("Public.Btn.Save")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_50")),1)])),_:1},8,["label"])}}}),on={class:"w-260px"},un=M({__name:"index",setup(n){const a=async()=>{await j(),de()};return(n,l)=>{const t=ne,i=ee,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_53")},{content:R((()=>[V("div",on,[A(t,{value:T(se).systemDate,"onUpdate:value":l[0]||(l[0]=e=>T(se).systemDate=e),readonly:!0,placeholder:""},null,8,["value"])]),A(i,{class:"ml-12px",type:"primary",onClick:a},{default:R((()=>[N(F(n.$t("Public.Btn.Sync")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_54")),1)])),_:1},8,["label"])}}}),rn={class:"px-20px pt-28px pb-8px"},dn={class:"w-210px"},cn={class:"w-210px"},pn=M({__name:"set",setup(e,{expose:n}){const a=E(null),{t:t}=D(),i=O({username1:se.value.username,username2:""}),s={username1:{trigger:["blur","input"],validator:()=>""!==i.username1.trim()||new Error(t("Config.Panel.index_60"))},username2:{trigger:["blur","input"],validator:()=>""===i.username2.trim()?new Error(t("Config.Panel.index_61")):i.username2===i.username1||new Error(t("Config.Panel.index_62"))}};return n({onConfirm:async()=>{var e;await(null==(e=a.value)?void 0:e.validate()),await S({username1:u(i.username1),username2:u(i.username2)}),l("/login?dologin=True",1500)}}),(e,n)=>{const l=ne,t=Z,o=_e;return z(),L("div",rn,[A(o,{ref_key:"formRef",ref:a,model:T(i),rules:s,"require-mark-placement":"left"},{default:R((()=>[A(t,{label:e.$t("Config.Panel.index_58"),path:"username1","show-require-mark":!0},{default:R((()=>[V("div",dn,[A(l,{value:T(i).username1,"onUpdate:value":n[0]||(n[0]=e=>T(i).username1=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"]),A(t,{label:e.$t("Config.Panel.index_59"),path:"username2","show-require-mark":!0},{default:R((()=>[V("div",cn,[A(l,{value:T(i).username2,"onUpdate:value":n[1]||(n[1]=e=>T(i).username2=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),_n={class:"w-260px"},fn=M({__name:"index",setup(n){const{t:a}=D(),l=async()=>{c({title:a("Config.Panel.index_57"),width:420,footer:!0,component:pn})};return(n,a)=>{const t=ne,i=ee,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_55")},{content:R((()=>[V("div",_n,[A(t,{value:T(se).username,disabled:!0,placeholder:""},null,8,["value"])]),A(i,{class:"ml-12px",type:"primary",onClick:l},{default:R((()=>[N(F(n.$t("Public.Btn.Set")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_56")),1)])),_:1},8,["label"])}}}),mn={class:"px-20px pt-28px pb-8px"},xn={class:"w-210px"},vn={class:"w-210px"},bn=M({__name:"set",setup(e,{expose:n}){const{t:a}=D(),t=E(null),i=O({password1:"",password2:""}),s={password1:{trigger:["blur","input"],validator:()=>""===i.password1.trim()?new Error(a("Config.Panel.index_67")):!(i.password1.trim().length<6)||new Error(a("Config.Panel.index_68"))},password2:{trigger:["blur","input"],validator:()=>""===i.password2.trim()?new Error(a("Config.Panel.index_69")):i.password2===i.password1||new Error(a("Config.Panel.index_70"))}};return n({onConfirm:async()=>{var e;await(null==(e=t.value)?void 0:e.validate()),await B({password1:u(i.password1),password2:u(i.password2)}),l("/login?dologin=True",1500)}}),(e,n)=>{const a=ve,l=Z,o=ne,u=_e;return z(),L("div",mn,[A(u,{ref_key:"formRef",ref:t,model:T(i),rules:s,"require-mark-placement":"left"},{default:R((()=>[A(l,{label:e.$t("Config.Panel.index_66"),path:"password1","show-require-mark":!0},{default:R((()=>[V("div",xn,[A(a,{value:T(i).password1,"onUpdate:value":n[0]||(n[0]=e=>T(i).password1=e),length:10,placeholder:""},null,8,["value"])])])),_:1},8,["label"]),A(l,{label:e.$t("Config.Panel.index_59"),path:"password2","show-require-mark":!0},{default:R((()=>[V("div",vn,[A(o,{value:T(i).password2,"onUpdate:value":n[1]||(n[1]=e=>T(i).password2=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),gn={class:"w-260px"},Cn=M({__name:"index",setup(n){const{t:a}=D(),l=async()=>{c({title:a("Config.Panel.index_65"),width:420,footer:!0,component:bn})};return(n,a)=>{const t=ne,i=ee,s=e;return z(),H(s,{label:n.$t("Config.Panel.index_63")},{content:R((()=>[V("div",gn,[A(t,{value:"********",type:"password",disabled:!0,placeholder:""})]),A(i,{class:"ml-12px",type:"primary",onClick:l},{default:R((()=>[N(F(n.$t("Public.Btn.Set")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_64")),1)])),_:1},8,["label"])}}}),Pn={class:"w-260px"},wn=M({__name:"index",setup(n){const{t:a}=D(),t=()=>{p()},i=()=>{d({title:a("Config.Panel.index_74"),content:a("Config.Panel.index_75"),onConfirm:async()=>{await q(),l()}})};return(n,a)=>{const l=ne,s=ee,o=e;return z(),H(o,{label:n.$t("Config.Panel.index_71")},{content:R((()=>[V("div",Pn,[A(l,{value:T(se).account,disabled:!0,placeholder:""},null,8,["value"])]),A(s,{class:"ml-12px",type:"primary",onClick:t},{default:R((()=>[N(F(n.$t("Public.Btn.Set")),1)])),_:1}),A(s,{class:"ml-12px",onClick:i},{default:R((()=>[N(F(n.$t("Config.Panel.index_72")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_73")),1)])),_:1},8,["label"])}}}),yn={class:"p-20px"},$n=M({__name:"set",setup(e){const{t:n}=D(),a=["memuA","memuAsoft","memuAconfig","dologin"],{columns:l}=_([{key:"title",title:n("Config.Panel.index_80")},{key:"show",title:n("Config.Panel.index_81"),align:"right",width:100,render:e=>a.includes(e.id)?n("Config.Panel.index_82"):A(Y,{value:e.show,size:"small",onUpdateValue:n=>{t(n,e)}},null)}]),t=async(e,n)=>{const a=ce.value.filter((e=>!e.show)).map((e=>e.id));e?a.splice(a.indexOf(n.id),1):a.push(n.id),await I({hide_list:a}),n.show=e};return(e,n)=>{const a=be;return z(),L("div",yn,[A(a,{data:T(ce),columns:T(l)},null,8,["data","columns"])])}}}),kn={class:"w-260px"},hn=M({__name:"index",setup(n){const{t:a}=D(),l=X((()=>ce.value.filter((e=>!e.show)).map((e=>e.title)).join(", "))),t=()=>{c({title:a("Config.Panel.index_79"),width:360,component:$n})};return(n,a)=>{const i=ne,s=ee,o=e;return z(),H(o,{label:n.$t("Config.Panel.index_76")},{content:R((()=>[V("div",kn,[A(i,{value:T(l)||n.$t("Config.Panel.index_77"),disabled:!0,placeholder:""},null,8,["value"])]),A(s,{class:"ml-12px",type:"primary",onClick:t},{default:R((()=>[N(F(n.$t("Public.Btn.Set")),1)])),_:1})])),desc:R((()=>[V("span",null,F(n.$t("Config.Panel.index_78")),1)])),_:1},8,["label"])}}}),Un=r(M({__name:"config",setup:e=>(e,n)=>(z(),L("div",null,[A(a,null,{default:R((()=>[N(F(e.$t("Config.Panel.index_1")),1)])),_:1}),A(ge),A(Ce),A(Pe),A(ke),A(Ie),A(Te),A(Ne),A(Qe),A(Ze),A(nn),A(ln),A(sn),A(un),A(fn),A(Cn),A(wn),A(hn)]))}),[["__scopeId","data-v-b7aa8cb0"]]);export{Un as P};
