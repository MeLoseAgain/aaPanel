System.register(["./index-legacy95.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./setting-legacy.js?v=1741416570306","./index-legacy99.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306"],(function(t,e){"use strict";var a,n,l,i,o,c,u,s,r,g,d,f,_,p,v,y,m,x,b,w,S,j,W,h,C,$,P,k,B,U,E;return{setters:[t=>{a=t._},t=>{n=t._},t=>{l=t.d,i=t.M,o=t.r,c=t.P,u=t.Q,s=t.R,r=t.N,g=t.S,d=t.ae,f=t.am,_=t.$,p=t.c,v=t.a0},t=>{y=t.b,m=t.m,x=t.eK},t=>{b=t.b,w=t.f,S=t.u,j=t.a},t=>{W=t.P,h=t.g,C=t.Q,$=t.R,P=t.S},t=>{k=t._},t=>{B=t._,U=t.T,E=t.bO},null,null],execute:function(){const e={class:"p-20px"},K={class:"flex mb-16px"},Q={class:"flex-1 mr-16px"};t("default",l({__name:"config",setup(t){const{t:l}=i(),R=o(""),A=async()=>{""!==R.value.trim()?(await C({text:R.value}),R.value="",O()):m.error(l("Waf.Setting.config_176"))},D=()=>{const t=o("");S({title:l("Waf.Setting.config_187"),width:440,footer:!0,content:()=>r("div",{class:"p-20px"},[r(k,{value:t.value,"onUpdate:value":e=>t.value=e,rows:14,placeholder:l("Waf.Setting.config_188")},null)]),onConfirm:async()=>{if(""===t.value.trim())return m.error(l("Waf.Setting.config_179")),!1;await $({text:t.value}),O()}})},H=()=>{const t=o(L.data.map((t=>t.word)).join("\n"));S({title:l("Waf.Setting.config_177"),width:440,footer:!0,content:()=>r("div",{class:"p-20px"},[r(k,{value:t.value,"onUpdate:value":e=>t.value=e,rows:14,readonly:!0},null)]),onConfirm:()=>(x(t.value,"body_intercept.json"),!1)})},I=()=>{j({title:l("Waf.Setting.config_180"),content:l("Waf.Setting.config_181"),onConfirm:async()=>{await P(),O()}})},{table:L,columns:M,setLoading:N}=b([{key:"word",title:l("Waf.Setting.config_184")},w({width:80,options:t=>[{label:l("Public.Btn.Del"),onClick:async()=>{await W({text:t.word}),O()}}]})]),O=async()=>{try{N(!0);const{message:t}=await h();y(t)&&(L.data=t.body_intercept.map((t=>({word:t}))))}finally{N(!1)}};return O(),(t,l)=>{const i=B,o=U,y=n,m=E,x=a;return c(),u("div",e,[s("div",K,[s("div",Q,[r(i,{value:g(R),"onUpdate:value":l[0]||(l[0]=t=>d(R)?R.value=t:null),placeholder:t.$t("Waf.Setting.config_184"),onKeyup:f(A,["enter"])},null,8,["value","placeholder"])]),r(o,{type:"primary",onClick:A},{default:_((()=>[p(v(t.$t("Public.Btn.Add")),1)])),_:1})]),r(y,{"max-height":258,loading:g(L).loading,data:g(L).data,columns:g(M)},null,8,["loading","data","columns"]),r(m,{class:"mt-16px"},{default:_((()=>[r(o,{onClick:D},{default:_((()=>[p(v(t.$t("Public.Btn.Import")),1)])),_:1}),r(o,{onClick:H},{default:_((()=>[p(v(t.$t("Public.Btn.Export")),1)])),_:1}),r(o,{onClick:I},{default:_((()=>[p(v(t.$t("Public.Btn.Empty")),1)])),_:1})])),_:1}),r(x,{class:"mt-16px"},{default:_((()=>[s("li",null,v(t.$t("Waf.Setting.config_185")),1),s("li",null,v(t.$t("Waf.Setting.config_186")),1)])),_:1})])}}}))}}}));
