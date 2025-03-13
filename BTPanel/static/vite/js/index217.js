import{_ as e}from"./index223.js?v=1741416570306";import{_ as a}from"./index104.js?v=1741416570306";import{bO as l,b as t,G as n,n as i,m as s}from"./page_layout.js?v=1741416570306";import{_ as o}from"./index.vue_vue_type_script_setup_true_lang15.js?v=1741416570306";import{T as u,ch as r,cb as p,bV as d}from"./naive.js?v=1741416570306";import{d as v,M as m,r as _,f as c,P as f,Q as x,N as P,S as h,ae as g,R as y,$ as b,c as w,a0 as S,n as H,j,a7 as $}from"./vue.js?v=1741416570306";import{_ as k}from"./index95.js?v=1741416570306";import{_ as C}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{c as U}from"./public.js?v=1741416570306";import{a$ as R,b0 as L,b as B,b1 as E}from"./site.js?v=1741416570306";import{c as M,d as q}from"./php.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./theme-chrome.js?v=1741416570306";import"./file.js?v=1741416570306";const D={class:"mt-12px"},F=v({__name:"default-page",setup(e){const{t:t}=m(),n=l(),i=_(null),s=_("index"),r=new Map([["index",{label:t("Site.PHP.index_51"),path:"/www/server/panel/data/defaultDoc.html"}],["404",{label:t("Site.PHP.index_52"),path:"/www/server/panel/data/404.html"}],["blank",{label:t("Site.PHP.index_53"),path:"nginx"===n.web.type?"/www/server/nginx/html/index.html":"/www/server/apache/htdocs/index.html"}],["stop",{label:t("Site.PHP.index_54"),path:"/www/server/stop/index.html"}]]),p=(()=>{const e=[];return r.forEach(((a,l)=>{e.push({key:l,label:a.label})})),e})(),d=()=>{var e;return(null==(e=r.get(s.value))?void 0:e.path)||""},v=_(d()),j=()=>{v.value=d()},$=()=>{H((()=>{var e;null==(e=i.value)||e.getContent()}))},k=async()=>{var e;null==(e=i.value)||e.saveFile()};return c((()=>{var e;null==(e=i.value)||e.getContent()})),(e,l)=>{const t=a,n=u;return f(),x("div",null,[P(t,{value:h(s),"onUpdate:value":[l[0]||(l[0]=e=>g(s)?s.value=e:null),j],options:h(p),onClick:$},null,8,["value","options"]),P(o,{ref_key:"configRef",ref:i,path:h(v),"onUpdate:path":l[1]||(l[1]=e=>g(v)?v.value=e:null),height:440,"show-encoding":!0},null,8,["path"]),y("div",D,[P(n,{type:"primary",onClick:k},{default:b((()=>[w(S(e.$t("Site.Cert.index_60")),1)])),_:1})])])}}}),G={class:"w-300px"},N=v({__name:"default-site",setup(e,{expose:a}){const{t:l}=m(),s=_(null),{loading:o,setLoading:d}=U(),v=j({name:"0"}),c=_([]),g=async()=>{try{d(!0);const{message:e}=await R();if(t(e)){const{sites:a,defaultSite:l}=e;c.value=n(a)?a.map((e=>({label:e.name,value:e.name}))):[],H(),v.name=i(l)?l:"0"}}finally{d(!1)}},H=()=>{c.value.unshift({label:l("Site.PHP.index_58"),value:"0"})},B=async()=>{var e;await(null==(e=s.value)?void 0:e.validate()),await L($(v))};return H(),g(),a({init:g}),(e,a)=>{const l=r,t=p,n=C,i=u,d=k;return f(),x("div",null,[P(n,{ref_key:"formRef",ref:s,model:h(v)},{default:b((()=>[P(t,{label:e.$t("Site.PHP.index_11")},{default:b((()=>[y("div",G,[P(l,{value:h(v).name,"onUpdate:value":a[0]||(a[0]=e=>h(v).name=e),class:"name-select",loading:h(o),options:h(c)},null,8,["value","loading","options"])])])),_:1},8,["label"])])),_:1},8,["model"]),P(i,{type:"primary",onClick:B},{default:b((()=>[w(S(e.$t("Public.Btn.Save")),1)])),_:1}),P(d,{class:"mt-20px"},{default:b((()=>[y("li",null,S(e.$t("Site.PHP.index_56")),1),y("li",null,S(e.$t("Site.PHP.index_57")),1)])),_:1})])}}}),O={class:"w-300px"},Q=v({__name:"https",setup(e,{expose:a}){const{loading:l,setLoading:n}=U(),i=j({value:!1}),s=async()=>{try{n(!0),await M()}catch(e){i.value=!i.value}finally{n(!1)}},o=async()=>{try{n(!0);const{message:e}=await q();t(e)&&(i.value=e.result)}finally{n(!1)}};return o(),a({init:o}),(e,a)=>{const t=d,n=p,o=C,u=k;return f(),x("div",null,[P(o,{model:h(i)},{default:b((()=>[P(n,{label:e.$t("Site.PHP.index_86")},{default:b((()=>[y("div",O,[P(t,{value:h(i).value,"onUpdate:value":[a[0]||(a[0]=e=>h(i).value=e),s],loading:h(l)},null,8,["value","loading"])])])),_:1},8,["label"])])),_:1},8,["model"]),P(u,{class:"mt-8px"},{default:b((()=>[y("li",null,S(e.$t("Site.PHP.index_87")),1),y("li",null,S(e.$t("Site.PHP.index_88")),1)])),_:1})])}}}),T={class:"w-300px"},V=v({__name:"index",setup(e,{expose:a}){const{t:l}=m(),i=_(null),{loading:o,setLoading:d}=U(),v=j({php_version:null}),c={php_version:{required:!0,message:l("Site.PHP.index_67"),trigger:"change"}},g=_([]),H=async()=>{try{d(!0);const{message:e}=await B();if(t(e)){const a=n(e.versions)?e.versions:[];g.value=a.map((e=>({label:e.name,value:e.version}))),t(e.select)&&(v.php_version="".concat(e.select.version))}}finally{d(!1)}},$=async()=>{var e;await(null==(e=i.value)?void 0:e.validate());const a=(()=>{const e=v.php_version;if(null===e)throw s.error(l("Site.PHP.index_67")),new Error(l("Site.PHP.index_67"));return{php_version:e}})();await E(a)};return H(),a({init:H}),(e,a)=>{const l=r,t=p,n=C,s=u,d=k;return f(),x("div",null,[P(n,{ref_key:"formRef",ref:i,model:h(v),rules:c},{default:b((()=>[P(t,{label:e.$t("Site.PHP.index_55"),path:"php_version"},{default:b((()=>[y("div",T,[P(l,{value:h(v).php_version,"onUpdate:value":a[0]||(a[0]=e=>h(v).php_version=e),class:"php-version-select",loading:h(o),options:h(g)},null,8,["value","loading","options"])])])),_:1},8,["label"])])),_:1},8,["model"]),P(s,{type:"primary",onClick:$},{default:b((()=>[w(S(e.$t("Public.Btn.Save")),1)])),_:1}),P(d,{class:"mt-20px"},{default:b((()=>[y("li",null,S(e.$t("Site.PHP.index_68")),1),y("li",null,S(e.$t("Site.PHP.index_69")),1)])),_:1})])}}}),z={class:"h-full"},A=v({__name:"index",props:{data:{}},setup(a){const{t:l}=m(),t=a,{config:n}=t.data||{},i=_("default-page"),s=[{key:"default-page",label:l("Site.PHP.index_5"),component:F},{key:"default-site",label:l("Site.PHP.index_6"),component:N},{key:"php-version",label:l("Site.PHP.index_7"),component:V},{key:"https",label:l("Site.PHP.index_86"),component:Q}];return i.value=(null==n?void 0:n.menu)||"default-page",n&&(n.menu=""),(a,l)=>{const t=e;return f(),x("div",z,[P(t,{value:h(i),"onUpdate:value":l[0]||(l[0]=e=>g(i)?i.value=e:null),data:s},null,8,["value"])])}}});export{A as default};
