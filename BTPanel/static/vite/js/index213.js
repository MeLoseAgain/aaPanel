import{_ as a}from"./index95.js?v=1742891699271";import{_ as e}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271";import{I as l,m as s}from"./page_layout.js?v=1742891699271";import{b as t,f as i,a as n}from"./public.js?v=1742891699271";import{f as u,m as r,h as o,i as p,j as c}from"./setting.js?v=1742891699271";import{_ as d,b$ as m,T as f}from"./naive.js?v=1742891699271";import{d as g,t as _,O as v,j as V,r as x,P as y,F as h,n as b,R as S,S as j,U as w,V as W,a1 as k,c as E,a2 as C,M as P}from"./vue.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";const $={class:"p-20px"},B={class:"flex mb-12px"},U={class:"flex-1 mr-12px"},N={class:"w-150px mr-12px"},z={class:"text-error"},D=g({__name:"index",props:{type:{}},setup(g,{expose:D}){const R=_(g,"type"),{t:A}=v(),F=V({ruleValue:"",ps:""}),H=async()=>{""!==F.ruleValue.trim()?(await c({...P(F),ruleName:R.value}),Q(),F.ruleValue="",F.ps=""):s.error(A("Waf.Setting.config_194"))},I=x(null),L=x(null),{table:M,columns:O,setLoading:T}=t([{key:"rule",title:A("Waf.Setting.config_82"),render:a=>y(h,null,[a.isEdit?y(d,{ref:I,value:a.ruleVal,size:"small",type:"textarea",autosize:{minRows:2,maxRows:2},placeholder:"",onUpdateValue:e=>{a.ruleVal=e}},null):a.rule])},{key:"ps",title:A("Waf.Setting.config_190"),width:150,render:a=>y(h,null,[a.isEdit?y(d,{ref:L,value:a.psVal,size:"small",placeholder:"",onUpdateValue:e=>{a.psVal=e}},null):a.ps])},{key:"status",title:A("Waf.Setting.config_82"),width:60,render:(a,e)=>y(m,{value:a.status,size:"small",checkedValue:1,uncheckedValue:0,onUpdateValue:async l=>{await u({index:e,ruleName:R.value}),a.status=l}},null)},i({width:100,options:(a,e)=>a.isEdit?[{label:A("Public.Btn.Save"),onClick:()=>{G(a,e)}},{label:A("Public.Btn.Cancel"),onClick:()=>{J(a)}}]:[{label:A("Public.Btn.Edit"),onClick:()=>{q(a)}},{label:A("Public.Btn.Del"),show:a.isDel,onClick:()=>{K(a,e)}}]})]),q=a=>{a.isEdit=!0,b((()=>{var a;null==(a=I.value)||a.focus()}))},G=async(a,e)=>{a.isEdit=!1,await r({index:e,ruleBody:a.ruleVal,rulePs:a.psVal,ruleName:R.value}),a.rule=a.ruleVal,a.ps=a.psVal},J=a=>{a.isEdit=!1,a.ruleVal=a.rule,a.psVal=a.ps},K=async(a,e)=>{n({title:A("Waf.Setting.config_195",[a.rule]),content:A("Waf.Setting.config_196"),onConfirm:async()=>{await o({index:e,ruleName:R.value}),Q()}})},Q=async()=>{try{T(!0);const{message:a}=await p({ruleName:R.value});l(a)&&(M.data=a.map((a=>({rule:a[1],ruleVal:a[1],ps:a[2],psVal:a[2],status:a[0],isEdit:!1,isDel:1===a[3]}))))}finally{T(!1)}};return Q(),D({init:Q}),(l,s)=>{const t=f,i=e,n=a;return S(),j("div",$,[w("div",B,[w("div",U,[y(W(d),{value:W(F).ruleValue,"onUpdate:value":s[0]||(s[0]=a=>W(F).ruleValue=a),placeholder:l.$t("Waf.Setting.config_189")},null,8,["value","placeholder"])]),w("div",N,[y(W(d),{value:W(F).ps,"onUpdate:value":s[1]||(s[1]=a=>W(F).ps=a),placeholder:l.$t("Waf.Setting.config_190")},null,8,["value","placeholder"])]),y(t,{type:"primary",onClick:H},{default:k((()=>[E(C(l.$t("Public.Btn.Add")),1)])),_:1})]),y(i,{"max-height":340,loading:W(M).loading,data:W(M).data,columns:W(O)},null,8,["loading","data","columns"]),y(n,{class:"mt-16px"},{default:k((()=>[w("li",z,C(l.$t("Waf.Setting.config_191")),1),w("li",null,C(l.$t("Waf.Setting.config_192")),1),w("li",null,C(l.$t("Waf.Setting.config_193")),1)])),_:1})])}}});export{D as default};
