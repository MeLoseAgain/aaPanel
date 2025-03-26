import{_ as e}from"./index.js?v=1742891699271";import{_ as l}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1742891699271";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271";import{d as t,b as i,f as r,a as n}from"./public.js?v=1742891699271";import{j as o,k as s,l as d,m as u,t as p,u as m}from"./alarm.js?v=1742891699271";import{_}from"./index95.js?v=1742891699271";import{_ as f}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{_ as v}from"./index99.js?v=1742891699271";import{J as c}from"./page_layout.js?v=1742891699271";import{d as g,O as x,t as w,e as h,r as C,j as b,R as A,S as q,P as y,a1 as k,U as E,V as $,a2 as j,c as U,a0 as M,a5 as T}from"./vue.js?v=1742891699271";import{_ as B,ch as P,bY as R,T as L}from"./naive.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1742891699271";const O={class:"px-20px py-24px"},D={class:"w-300px"},H={class:"w-300px"},I={class:"w-300px"},K={class:"w-300px"},N={class:"w-300px"},J={class:"w-300px"},S={class:"bt-link",href:"",target:"_blank"},V=g({__name:"form-email",props:{isEdit:{type:Boolean},alarm:{},row:{}},emits:["refresh"],setup(e,{expose:l,emit:a}){const t=e,i=a,{t:r}=x(),n=w(t,"isEdit"),d=w(t,"alarm"),u=h((()=>d.value.name)),p=C(null),m=b({title:"",qq_mail:"",qq_smtp_pwd:"",hosts:"",port:465,receiveMail:""}),g={title:{trigger:["blur","input"],validator:()=>""===m.title.trim()?new Error(r("Config.Alarm.index_67")):!(m.title.trim().length>15)||new Error(r("Config.Alarm.index_79"))},qq_mail:{trigger:["blur","input"],validator:()=>""!==m.qq_mail.trim()||new Error(r("Config.Alarm.index_80"))},qq_smtp_pwd:{trigger:["blur","input"],validator:()=>""!==m.qq_smtp_pwd.trim()||new Error(r("Config.Alarm.index_81"))},hosts:{trigger:["blur","input"],validator:()=>""!==m.hosts.trim()||new Error(r("Config.Alarm.index_82"))},port:{trigger:["blur","input"],validator:()=>!!m.port||new Error(r("Config.Alarm.index_83"))},receiveMail:{trigger:["blur","input"],validator:()=>""!==m.receiveMail.trim()||new Error(r("Config.Alarm.index_84"))}},U=()=>({sender_type:u.value,sender_data:{title:m.title,send:{qq_mail:m.qq_mail,qq_stmp_pwd:m.qq_smtp_pwd,hosts:m.hosts,port:"".concat(m.port)},receive:m.receiveMail.split("\n").filter((e=>""!==e.trim()))}});return(()=>{const{row:e}=t;if(n.value&&e){const{data:l}=e;m.title=l.title,m.qq_mail=l.send.qq_mail,m.qq_smtp_pwd=l.send.qq_stmp_pwd,m.hosts=l.send.hosts,m.port=c(l.send.port),m.receiveMail=l.receive.join("\n")}})(),l({onConfirm:async()=>{var e;await(null==(e=p.value)?void 0:e.validate()),n.value&&t.row?await o({...U(),sender_id:t.row.id}):await s(U()),i("refresh")}}),(e,l)=>{const a=B,t=P,i=R,r=v,n=f,o=_;return A(),q("div",O,[y(n,{ref_key:"formRef",ref:p,model:$(m),rules:g},{default:k((()=>[y(t,{label:e.$t("Config.Alarm.index_43"),path:"title"},{default:k((()=>[E("div",D,[y(a,{value:$(m).title,"onUpdate:value":l[0]||(l[0]=e=>$(m).title=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"]),y(t,{label:e.$t("Config.Alarm.index_71"),path:"qq_mail"},{default:k((()=>[E("div",H,[y(a,{value:$(m).qq_mail,"onUpdate:value":l[1]||(l[1]=e=>$(m).qq_mail=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"]),y(t,{label:e.$t("Config.Alarm.index_72"),path:"qq_smtp_pwd"},{default:k((()=>[E("div",I,[y(a,{value:$(m).qq_smtp_pwd,"onUpdate:value":l[2]||(l[2]=e=>$(m).qq_smtp_pwd=e),type:"password",placeholder:""},null,8,["value"])])])),_:1},8,["label"]),y(t,{label:e.$t("Config.Alarm.index_73"),path:"hosts"},{default:k((()=>[E("div",K,[y(a,{value:$(m).hosts,"onUpdate:value":l[3]||(l[3]=e=>$(m).hosts=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"]),y(t,{label:e.$t("Config.Alarm.index_74"),path:"port"},{default:k((()=>[E("div",N,[y(i,{value:$(m).port,"onUpdate:value":l[4]||(l[4]=e=>$(m).port=e),min:1,max:65535,"show-button":!1,placeholder:""},null,8,["value"])])])),_:1},8,["label"]),y(t,{label:e.$t("Config.Alarm.index_78"),path:"receiveMail"},{default:k((()=>[E("div",J,[y(r,{value:$(m).receiveMail,"onUpdate:value":l[5]||(l[5]=e=>$(m).receiveMail=e),row:8,placeholder:e.$t("Config.Alarm.index_75")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"]),y(o,{class:"mt-4px pl-8px"},{default:k((()=>[E("li",null,j(e.$t("Config.Alarm.index_76")),1),E("li",null,j(e.$t("Config.Alarm.index_77")),1),E("li",null,[E("a",S,j(e.$t("Public.Btn.Help")),1)])])),_:1})])}}}),Y={class:"px-20px py-24px"},z={class:"w-300px"},F={class:"w-300px"},G=["href"],Q=g({__name:"form-common",props:{isEdit:{type:Boolean},alarm:{},row:{}},emits:["refresh"],setup(e,{expose:l,emit:a}){const t=e,i=a,{t:r}=x(),n=w(t,"isEdit"),d=w(t,"alarm"),u=h((()=>d.value.name)),p=h((()=>d.value.title)),m=C(null),c=b({title:"",url:""}),g={title:{trigger:["blur","input"],validator:()=>""!==c.title.trim()||new Error(r("Config.Alarm.index_47"))},url:{trigger:["blur","input"],validator:()=>""!==c.url.trim()||new Error(r("Config.Alarm.index_48"))}},U=()=>({sender_type:u.value,sender_data:{title:c.title,url:c.url,atall:"True"}});return(()=>{const{row:e}=t;if(n.value&&e){const{data:l}=e;c.title=l.title,c.url=l.url}})(),l({onConfirm:async()=>{var e;await(null==(e=m.value)?void 0:e.validate()),n.value&&t.row?await o({...U(),sender_id:t.row.id}):await s(U()),i("refresh")}}),(e,l)=>{const a=B,t=P,i=v,r=f,n=_;return A(),q("div",Y,[y(r,{ref_key:"formRef",ref:m,model:$(c),rules:g},{default:k((()=>[y(t,{label:e.$t("Config.Alarm.index_43"),path:"title"},{default:k((()=>[E("div",z,[y(a,{value:$(c).title,"onUpdate:value":l[0]||(l[0]=e=>$(c).title=e),placeholder:e.$t("Config.Alarm.index_44")},null,8,["value","placeholder"])])])),_:1},8,["label"]),y(t,{label:"URL",path:"receiveMail"},{default:k((()=>[E("div",F,[y(i,{value:$(c).url,"onUpdate:value":l[1]||(l[1]=e=>$(c).url=e),row:5,placeholder:e.$t("Config.Alarm.index_45")},null,8,["value","placeholder"])])])),_:1})])),_:1},8,["model"]),y(n,{class:"mt-4px pl-24px"},{default:k((()=>[E("li",null,[E("a",{class:"bt-link",href:$(d).help,target:"_blank"},j(e.$t("Config.Alarm.index_46",[$(p)])),9,G)])])),_:1})])}}}),W={class:"px-20px py-24px"},X={class:"w-300px"},Z={class:"w-300px"},ee={class:"w-300px"},le={class:"bt-link",href:"",target:"_blank"},ae=g({__name:"form-tg",props:{isEdit:{type:Boolean},alarm:{},row:{}},emits:["refresh"],setup(e,{expose:l,emit:a}){const t=e,i=a,{t:r}=x(),n=w(t,"isEdit"),d=w(t,"alarm"),u=h((()=>d.value.name)),p=C(null),m=b({title:"",id:"",token:""}),v={title:{trigger:["blur","input"],validator:()=>""!==m.title.trim()||new Error(r("Config.Alarm.index_67"))},id:{trigger:["blur","input"],validator:()=>""!==m.id.trim()||new Error("Please enter Telegram ID")},token:{trigger:["blur","input"],validator:()=>""!==m.token.trim()||new Error("Please enter Telegram TOKEN")}},c=()=>({sender_type:u.value,sender_data:{title:m.title,my_id:m.id,bot_token:m.token}});return(()=>{const{row:e}=t;if(n.value&&e){const{data:l}=e;m.title=l.title,m.id=l.my_id,m.token=l.bot_token}})(),l({onConfirm:async()=>{var e;await(null==(e=p.value)?void 0:e.validate()),n.value&&t.row?await o({...c(),sender_id:t.row.id}):await s(c()),i("refresh")}}),(e,l)=>{const a=B,t=P,i=f,r=_;return A(),q("div",W,[y(i,{ref_key:"formRef",ref:p,model:$(m),rules:v},{default:k((()=>[y(t,{label:e.$t("Config.Alarm.index_43"),path:"title"},{default:k((()=>[E("div",X,[y(a,{value:$(m).title,"onUpdate:value":l[0]||(l[0]=e=>$(m).title=e),placeholder:e.$t("Config.Alarm.index_44")},null,8,["value","placeholder"])])])),_:1},8,["label"]),y(t,{label:"ID",path:"id"},{default:k((()=>[E("div",Z,[y(a,{value:$(m).id,"onUpdate:value":l[1]||(l[1]=e=>$(m).id=e),placeholder:"Telegram ID"},null,8,["value"])])])),_:1}),y(t,{label:"TOKEN",path:"token"},{default:k((()=>[E("div",ee,[y(a,{value:$(m).token,"onUpdate:value":l[2]||(l[2]=e=>$(m).token=e),placeholder:"Telegram TOKEN"},null,8,["value"])])])),_:1})])),_:1},8,["model"]),y(r,{class:"mt-4px pl-24px"},{default:k((()=>[E("li",null,j(e.$t("Config.Alarm.index_68")),1),E("li",null,j(e.$t("Config.Alarm.index_69")),1),E("li",null,[E("span",null,j(e.$t("Config.Alarm.index_70")),1),E("a",le,j(e.$t("Public.Btn.Help")),1)])])),_:1})])}}}),te={class:"p-20px"},ie=g({__name:"table-common",props:{row:{},refresh:{}},setup(o){const s=o,_=w(s,"row"),f=(()=>{switch(_.value.name){case"mail":default:return V;case"dingding":case"feishu":case"weixin":return Q;case"tg":return ae}})(),{t:v}=x(),c=new Map([["mail",{title:v("Config.Alarm.index_3")}],["dingding",{title:v("Config.Alarm.index_49")}],["feishu",{title:v("Config.Alarm.index_50")}],["weixin",{title:v("Config.Alarm.index_51")}],["tg",{title:"Telegram"}]]),g=t("",{isEdit:!1,alarm:_.value,onRefresh:()=>{R()}}),h=()=>{g.data.isEdit=!1,g.title=v("Config.Alarm.index_52",[_.value.title]),g.show=!0},{table:C,columns:b}=i([{key:"title",title:(null==(E=c.get(_.value.name))?void 0:E.title)||"--",ellipsis:{tooltip:!0},render:e=>e.original?v("Config.Alarm.index_64",[e.data.title]):e.data.title},{key:"used",title:v("Config.Alarm.index_54"),width:80,render:e=>y("a",{class:["bt-link",e.used?"":"error"],onClick:()=>{M(e)}},[e.used?v("Config.Alarm.index_65"):v("Config.Alarm.index_55")])},r({width:200,options:e=>[{label:v("Config.Alarm.index_56"),show:!e.original,onClick:()=>{T(e)}},{label:v("Public.Btn.Edit"),onClick:()=>{(e=>{g.data.row=e,g.data.isEdit=!0,g.title=v("Config.Alarm.index_53",[_.value.title]),g.show=!0})(e)}},{label:v("Config.Alarm.index_57"),onClick:()=>{B(e)}},{label:v("Config.Alarm.index_58"),onClick:()=>{P(e)}}]})]);var E;const M=e=>{const l=e.used?v("Config.Alarm.index_66"):v("Config.Alarm.index_18");n({title:v("Config.Alarm.index_59_1",[l,_.value.title,e.data.title]),content:v("Config.Alarm.index_59",[l.toLocaleLowerCase(),_.value.title,e.data.title]),onConfirm:async()=>{await d({sender_id:e.id}),e.used=!e.used}})},T=e=>{n({width:400,title:v("Config.Alarm.index_60"),content:v("Config.Alarm.index_61",[e.data.title]),onConfirm:async()=>{await u({sender_type:_.value.name,sender_id:e.id}),C.data.forEach((l=>{l.original=l.id===e.id}))}})},B=async e=>{await p({sender_id:e.id})},P=e=>{n({title:v("Config.Alarm.index_62",[_.value.title,e.data.title]),content:v("Config.Alarm.index_63",[_.value.title,e.data.title]),onConfirm:async()=>{await m({sender_id:e.id}),R()}})},R=async()=>{var e;await(null==(e=s.refresh)?void 0:e.call(s)),C.data=_.value.list};return C.data=_.value.list,(t,i)=>{const r=L,n=a,o=l,s=e;return A(),q("div",te,[y(o,null,{toolsLeft:k((()=>[y(r,{type:"primary",onClick:h},{default:k((()=>[U(j(t.$t("Public.Btn.Add")),1)])),_:1})])),table:k((()=>[y(n,{data:$(C).data,columns:$(b)},null,8,["data","columns"])])),_:1}),y(s,{show:$(g).show,"onUpdate:show":i[0]||(i[0]=e=>$(g).show=e),title:$(g).title,data:$(g).data,width:500,footer:!0,component:$(f)},null,8,["show","title","data","component"])])}}}),re=g({__name:"index",props:{row:{},refresh:{}},setup(e){const l=ie;return(e,a)=>(A(),M(T($(l)),{row:e.row,refresh:e.refresh},null,8,["row","refresh"]))}});export{re as default};
