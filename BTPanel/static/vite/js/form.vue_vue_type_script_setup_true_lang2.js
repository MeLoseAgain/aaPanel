import{_ as e}from"./index95.js?v=1742891699271";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{b as a}from"./page_layout.js?v=1742891699271";import{aD as s,U as l}from"./site.js?v=1742891699271";import{_ as i,ch as r,a2 as u,T as n}from"./naive.js?v=1742891699271";import{d,O as o,t as _,r as p,j as f,R as m,S as c,P as x,a1 as v,U as h,V as b,c as g,a2 as S}from"./vue.js?v=1742891699271";const k={class:"w-300px"},w={class:"w-300px"},$={class:"w-300px"},j={class:"flex flex-col"},y=d({__name:"form",props:{site:{}},emits:["changeHotlink"],setup(d,{expose:y,emit:C}){const{t:U}=o(),R=C,E=_(d,"site"),L=p(null),H=f({fix:"",domains:"",return_rule:"",status:!1,http_status:!1}),z={fix:{trigger:["blur","change"],validator:()=>""!==H.fix.trim()||new Error(U("Site.RulesError.index_330"))},return_rule:{trigger:["blur","change"],validator:()=>""!==H.return_rule.trim()||new Error(U("Site.RulesError.index_330"))}},D=()=>{P()},O=()=>{P()},P=async()=>{var e;await(null==(e=L.value)?void 0:e.validate()),await s({id:E.value.id,name:E.value.name,fix:H.fix,domains:H.domains.trim().split("\n").join(","),return_rule:H.return_rule,status:H.status,http_status:H.http_status}),R("changeHotlink",H.status),T()},T=async()=>{const{message:e}=await l({id:E.value.id,name:E.value.name});a(e)&&(H.fix=e.fix,H.domains=e.domains.split(",").join("\n"),H.return_rule=e.return_rule,H.status=e.status,H.http_status="true"===e.http_status||!0===e.http_status)};return T(),y({init:T}),(a,s)=>{const l=i,d=r,o=u,_=n,p=t,f=e;return m(),c("div",null,[x(p,{ref_key:"formRef",ref:L,class:"px-8px",model:b(H),rules:z},{default:v((()=>[x(d,{label:a.$t("Site.Lable.index_6"),path:"fix"},{default:v((()=>[h("div",k,[x(l,{value:b(H).fix,"onUpdate:value":s[0]||(s[0]=e=>b(H).fix=e),disabled:b(H).status,placeholder:""},null,8,["value","disabled"])])])),_:1},8,["label"]),x(d,{label:a.$t("Site.Lable.index_7")},{default:v((()=>[h("div",w,[x(l,{value:b(H).domains,"onUpdate:value":s[1]||(s[1]=e=>b(H).domains=e),type:"textarea",autosize:{minRows:6,maxRows:6},placeholder:""},null,8,["value"])])])),_:1},8,["label"]),x(d,{label:a.$t("Site.Lable.index_13"),path:"return_rule"},{default:v((()=>[h("div",$,[x(l,{value:b(H).return_rule,"onUpdate:value":s[2]||(s[2]=e=>b(H).return_rule=e),disabled:b(H).status,placeholder:""},null,8,["value","disabled"])])])),_:1},8,["label"]),x(d,{label:" "},{default:v((()=>[h("div",j,[x(o,{checked:b(H).status,"onUpdate:checked":[s[3]||(s[3]=e=>b(H).status=e),D]},{default:v((()=>[g(S(a.$t("Site.Config.index_94")),1)])),_:1},8,["checked"]),x(o,{checked:b(H).http_status,"onUpdate:checked":[s[4]||(s[4]=e=>b(H).http_status=e),O],class:"mt-16px"},{default:v((()=>[g(S(a.$t("Site.Config.index_95")),1)])),_:1},8,["checked"])])])),_:1}),x(d,{label:" ","show-feedback":!1},{default:v((()=>[x(_,{type:"primary",onClick:P},{default:v((()=>[g(S(a.$t("Site.Cert.index_60")),1)])),_:1})])),_:1})])),_:1},8,["model"]),x(f,{class:"mt-20px"},{default:v((()=>[h("li",null,[g(S(a.$t("Site.Config.index_96")),1),s[5]||(s[5]=h("br",null,null,-1)),g(" "+S(a.$t("Site.Config.index_97")),1)]),h("li",null,S(a.$t("Site.Config.index_98")),1),h("li",null,S(a.$t("Site.Config.index_99")),1)])),_:1})])}}});export{y as _};
