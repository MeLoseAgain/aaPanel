import{_ as e}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{I as a}from"./page_layout.js?v=1742891699271";import{a as s}from"./public.js?v=1742891699271";import{i as l,r as t}from"./tools2.js?v=1742891699271";import{T as o,aV as i,cn as r,ch as n}from"./naive.js?v=1742891699271";import{d as c,O as p,r as u,j as m,R as _,S as f,P as d,a1 as v,U as x,V as g,c as j,a2 as h}from"./vue.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./rules.js?v=1742891699271";const b={class:"p-20px pt-24px pb-8px"},k={class:"w-260px"},w=c({__name:"clear",setup(c,{expose:w}){const{t:y}=p(),B=u(null),C=m({site:[]}),W={site:{trigger:["change"],validator:()=>0!==C.site.length||new Error(y("Waf.Block.index_27"))}},$=u([]),P=()=>{C.site=$.value.map((e=>e.value))},N=()=>{C.site=[]};return(async()=>{const{message:e}=await l();a(e)&&($.value=e.map((e=>({label:e.siteName,value:e.siteName}))))})(),w({onConfirm:async()=>{var e;return await(null==(e=B.value)?void 0:e.validate()),s({title:y("Waf.Block.index_28"),content:y("Waf.Block.index_29"),onConfirm:async()=>{const e=C.site.length===$.value.length;await t({safe_logs:0,site_all:e?1:0,site_logs:C.site})}}),!1}}),(a,s)=>{const l=o,t=i,c=r,p=n,u=e;return _(),f("div",b,[d(u,{ref_key:"formRef",ref:B,model:g(C),rules:W},{default:v((()=>[d(p,{label:a.$t("Waf.Block.index_25"),path:"site"},{default:v((()=>[x("div",k,[d(c,{value:g(C).site,"onUpdate:value":s[0]||(s[0]=e=>g(C).site=e),options:g($),multiple:!0,filterable:!0,"max-tag-count":"responsive",placeholder:a.$t("Waf.Block.index_27")},{header:v((()=>[d(t,{class:"w-full"},{default:v((()=>[d(l,{class:"flex-1",onClick:P},{default:v((()=>[j(h(a.$t("Public.All")),1)])),_:1}),d(l,{class:"flex-1",onClick:N},{default:v((()=>[j(h(a.$t("Public.Btn.Cancel")),1)])),_:1})])),_:1})])),_:1},8,["value","options","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{w as default};
