import{_ as t}from"./index95.js?v=1741416570306";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{G as e}from"./page_layout.js?v=1741416570306";import{b as i,f as n}from"./public.js?v=1741416570306";import{T as l}from"./setting.js?v=1741416570306";import{d as s,M as o,N as r,P as d,Q as m,S as u,$ as p,R as _,a0 as c,i as f}from"./vue.js?v=1741416570306";import{a2 as g}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";const x={class:"p-20px"};const j=s({__name:"attack",setup(s){const{t:j}=o(),{table:S,columns:W,setLoading:b}=i([{key:"url",title:j("Waf.Setting.index_27"),minWidth:100,ellipsis:{tooltip:{width:"trigger"}},render:t=>r("a",{class:"bt-link",href:t.url,target:"_blank"},[t.url])},{key:"mode",title:j("Waf.Setting.index_28"),width:"20%",minWidth:100,render:()=>{let t;return r(g,{checked:!0},"function"==typeof(a=t=j("Waf.Setting.index_30"))||"[object Object]"===Object.prototype.toString.call(a)&&!f(a)?t:{default:()=>[t]});var a}},n({width:100,options:t=>[{label:j("Waf.Setting.index_29"),onClick:()=>{window.open(t.url)}}]})]);return(async()=>{try{b(!0);const{message:t}=await l();e(t)&&(S.data=t.map((t=>({url:t}))))}finally{b(!1)}})(),(e,i)=>{const n=a,l=t;return d(),m("div",x,[r(n,{"loading-num":6,loading:u(S).loading,data:u(S).data,columns:u(W)},null,8,["loading","data","columns"]),r(l,{class:"mt-16px"},{default:p((()=>[_("li",null,c(e.$t("Waf.Setting.index_22")),1),_("li",null,c(e.$t("Waf.Setting.index_23")),1),_("li",null,c(e.$t("Waf.Setting.index_24")),1),_("li",null,c(e.$t("Waf.Setting.index_25")),1),_("li",null,c(e.$t("Waf.Setting.index_26")),1)])),_:1})])}}});export{j as default};
