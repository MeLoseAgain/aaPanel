import{_ as a}from"./index.js?v=1741416570306";import{b as e,d as t}from"./public.js?v=1741416570306";import{_ as s}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1741416570306";import{_ as l}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1741416570306";import{_ as i}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{S as n}from"./campaign.js?v=1741416570306";import{U as d,b as o,a6 as _,a7 as r}from"./page_layout.js?v=1741416570306";import{d as u,M as p,j as m,P as c,_ as b,$ as f,N as x,S as g,t as M,e as j,Q as v,c as h,a0 as y,F as $,L as w,R as k}from"./vue.js?v=1741416570306";import{cj as z,bO as U}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1741416570306";const C=u({__name:"index",props:{data:{}},setup(a){const t=a,{t:_}=p(),{id:r}=t.data,u=m({p:1,size:10}),{table:M,columns:j}=e([{key:"recipient",title:_("Config.Alarm.index_3")},{key:"created",title:_("Mail.Unsubscribe.index_24"),align:"right",render:a=>d(a.created)}]),v=async()=>{try{M.loading=!0;const{message:a}=await n({task_id:r,...u});o(a)&&(M.data=a.data,M.total=a.total)}finally{M.loading=!1}};return v(),(a,e)=>{const t=i,n=l,d=s;return c(),b(d,{class:"p-16px"},{table:f((()=>[x(t,{loading:g(M).loading,"loading-num":3,data:g(M).data,columns:g(j)},null,8,["loading","data","columns"])])),pageRight:f((()=>[x(n,{page:g(u).p,"onUpdate:page":e[0]||(e[0]=a=>g(u).p=a),"page-size":g(u).size,"onUpdate:pageSize":e[1]||(e[1]=a=>g(u).size=a),"item-count":g(M).total,onRefresh:v},null,8,["page","page-size","item-count"])])),_:1})}}}),R={class:"p-20px"},S=u({__name:"index",props:{row:{}},emits:["add"],setup(e,{expose:s,emit:l}){const i=e,{t:n}=p(),d=l,o=M(i,"row"),u=t(""),m=()=>{u.data.id=o.value.id,u.title="".concat(n("Mail.Unsubscribe.index_25")," [").concat(o.value.subject,"]"),u.show=!0},S=j((()=>o.value.mail_type.map((a=>Object.values(a)[0]))));return s({onConfirm:()=>{d("add",o.value)}}),(e,t)=>{const s=_,l=z,i=U,n=r,d=a;return c(),v("div",R,[x(n,{"label-placement":"left",bordered:!0,column:1,"label-style":{width:"180px"}},{default:f((()=>[x(s,{label:"Display Name"},{default:f((()=>[h(y(g(o).full_name),1)])),_:1}),x(s,{label:e.$t("Mail.Mass.index_4")},{default:f((()=>[h(y(g(o).addresser),1)])),_:1},8,["label"]),x(s,{label:e.$t("Mail.Mass.index_23")},{default:f((()=>[h(y(g(o).subject),1)])),_:1},8,["label"]),x(s,{label:e.$t("Mail.Mass.index_30")},{default:f((()=>[h(y(1===g(o).is_record?e.$t("Mail.Mass.index_64"):e.$t("Mail.Mass.index_65")),1)])),_:1},8,["label"]),x(s,{label:"Groups"},{default:f((()=>[x(i,null,{default:f((()=>[(c(!0),v($,null,w(g(S),(a=>(c(),b(l,{key:a,size:"small"},{default:f((()=>[h(y(a),1)])),_:2},1024)))),128))])),_:1})])),_:1}),x(s,{label:e.$t("Mail.Unsubscribe.index_25")},{default:f((()=>[k("span",{class:"bt-link",onClick:m},y(e.$t("Public.Btn.Click")),1)])),_:1},8,["label"]),x(s,{label:e.$t("Mail.Mass.index_31")},{default:f((()=>[h(y(1===g(o).unsubscribe?e.$t("Mail.Mass.index_64"):e.$t("Mail.Mass.index_65")),1)])),_:1},8,["label"]),x(s,{label:e.$t("Mail.Mass.index_33")},{default:f((()=>[h(y(0===g(o).threads?e.$t("Mail.Mass.index_34"):g(o).threads),1)])),_:1},8,["label"])])),_:1}),x(d,{show:g(u).show,"onUpdate:show":t[0]||(t[0]=a=>g(u).show=a),title:g(u).title,data:g(u).data,width:550,"min-height":280,component:C},null,8,["show","title","data"])])}}});export{S as default};
