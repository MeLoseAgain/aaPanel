import{_ as a}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{_ as s}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1742891699271";import{bi as e,dZ as r,d_ as o,b as t,n as p}from"./page_layout.js?v=1742891699271";import{c as l}from"./public.js?v=1742891699271";import{d as i,O as n,r as d,j as u,R as m,S as _,P as f,a1 as v,U as c,V as w,M as x}from"./vue.js?v=1742891699271";import{ch as g}from"./naive.js?v=1742891699271";import"./index96.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";const j={class:"px-20px pt-24px pb-8px"},b={class:"w-280px"},y=i({__name:"index",setup(i,{expose:y}){const{t:h}=n(),D=e(),E=d(null),R=u({password:""}),U={password:{trigger:["blur","input"],validator:()=>R.password?!(R.password.length<6)||new Error(h("Database.form.index_20")):new Error(h("Database.form.index_17"))}},{loading:k,setLoading:C}=l();return(async()=>{try{C(!0);const{message:a}=await o(D.type);t(a)&&(R.password=p(a.result)?a.result:"")}finally{C(!1)}})(),y({onConfirm:async({hide:a})=>{var s;await(null==(s=E.value)?void 0:s.validate()),await r(D.type,x(R)),a()}}),(e,r)=>{const o=s,t=g,p=a;return m(),_("div",j,[f(p,{ref_key:"formRef",ref:E,model:w(R),rules:U},{default:v((()=>[f(t,{label:e.$t("Database.tools.index_75"),path:"password"},{default:v((()=>[c("div",b,[f(o,{value:w(R).password,"onUpdate:value":r[0]||(r[0]=a=>w(R).password=a),loading:w(k),default:!1,"input-props":{name:"password"}},null,8,["value","loading"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{y as default};
