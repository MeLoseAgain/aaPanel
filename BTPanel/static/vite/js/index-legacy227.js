System.register(["./index-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./index-legacy95.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./site-legacy.js?v=1741416570306","./index-legacy84.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy15.js?v=1741416570306","./file-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./index-legacy123.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1741416570306","./site-legacy4.js?v=1741416570306","./soft-legacy.js?v=1741416570306","./index-legacy223.js?v=1741416570306","./index-legacy99.js?v=1741416570306","./index-legacy104.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1741416570306","./index-legacy96.js?v=1741416570306","./refersh-legacy.js?v=1741416570306","./php-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy18.js?v=1741416570306","./index-legacy103.js?v=1741416570306","./theme-chrome-legacy.js?v=1741416570306"],(function(e,l){"use strict";var t,a,n,u,s,i,c,_,r,p,d,g,v,o,y,x,m,f,j,h,w,C,b,$,S,k,U,R,T,N,P,q,E,G;return{setters:[e=>{t=e._},e=>{a=e._},e=>{n=e._},e=>{u=e.cr,s=e.b,i=e.m,c=e.G,_=e.j},e=>{r=e.bf,p=e.bg},e=>{d=e.J},e=>{g=e._},e=>{v=e.s},e=>{o=e.cL,y=e.ch,x=e.bO,m=e.T,f=e._,j=e.cb},e=>{h=e.d,w=e.M,C=e.r,b=e.j,$=e.f,S=e.P,k=e.Q,U=e.N,R=e.$,T=e.R,N=e.S,P=e.ae,q=e.a0,E=e.c,G=e.a7},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"w-160px"},H={class:"w-380px px-20px pt-24px pb-8px"},J={class:"w-180px"};e("default",h({__name:"index",setup(e,{expose:h}){const{t:L}=w(),{data:M}=d(),O=u(),Q=C(null),z=C(null),A=C([]),B=C("");let D="";const F=e=>{B.value=I(e),Q.value?.getContent()},I=e=>{const{webserver:l}=O;return"0.Current"===e?"apache"===l||"openlitespeed"===l?`${D}/.htaccess`:`/www/server/panel/vhost/rewrite/${M.name}.conf`:`/www/server/panel/rewrite/${"openlitespeed"===l?"apache":l}/${z.value}.conf`},K=async()=>{const e=I("0.Current"),{message:l}=await v({path:e,data:Y.data,encoding:"utf-8"});s(l)&&i.success(l.msg);const t=A.value[0].value;z.value=t,F(t)},V=C(!1),W=()=>{V.value=!0},X=C(null),Y=b({name:"",data:""}),Z={name:{required:!0,trigger:["blur","change"],message:L("Site.RulesError.index_21")}},ee=async({hide:e})=>{await(X.value?.validate()),await r(G(Y)),Y.name="",le(),e()},le=async()=>{const{message:e}=await p({siteName:M.name});if(s(e)){D=e.sitePath;const l=c(e.rewrite)?e.rewrite:[];A.value=o(l).map((e=>({label:e,value:e}))),l.length&&(z.value=l[0],B.value=I(l[0]))}Q.value?.getContent()},te=async()=>{le()};return $((()=>{te()})),h({init:te}),(e,u)=>{const s=y,i=_,c=x,r=m,p=n,d=f,v=j,o=a,h=t;return S(),k("div",null,[U(c,{class:"items-center mb-12px"},{default:R((()=>[T("div",l,[U(s,{value:N(z),"onUpdate:value":[u[0]||(u[0]=e=>P(z)?z.value=e:null),F],options:N(A)},null,8,["value","options"])]),T("div",null,[T("span",null,q(e.$t("Site.Config.index_50"))+": ",1),U(i,{href:"https://winginx.com/en/htaccess",target:"_blank"},{default:R((()=>[E(q(e.$t("Site.Cert.index_42")),1)])),_:1})])])),_:1}),U(g,{ref_key:"configRef",ref:Q,path:N(B),"onUpdate:path":u[1]||(u[1]=e=>P(B)?B.value=e:null),value:N(Y).data,"onUpdate:value":u[2]||(u[2]=e=>N(Y).data=e),height:400,"show-tips":!1},null,8,["path","value"]),U(c,{class:"items-center mt-12px"},{default:R((()=>[U(r,{type:"primary",onClick:K},{default:R((()=>[E(q(e.$t("Site.Cert.index_60")),1)])),_:1}),U(r,{onClick:W},{default:R((()=>[E(q(e.$t("Site.Cert.index_39")),1)])),_:1})])),_:1}),U(p,{class:"mt-24px"},{default:R((()=>[T("li",null,q(e.$t("Site.Config.index_51")),1),T("li",null,q(e.$t("Site.Config.index_52")),1),T("li",null,q(e.$t("Site.Config.index_53")),1)])),_:1}),U(h,{show:N(V),"onUpdate:show":u[4]||(u[4]=e=>P(V)?V.value=e:null),title:"Save as rewrite template",footer:!0,onConfirm:ee},{default:R((()=>[T("div",H,[U(o,{ref_key:"formRef",ref:X,model:N(Y),rules:Z},{default:R((()=>[U(v,{label:"Template name",path:"name"},{default:R((()=>[T("div",J,[U(d,{value:N(Y).name,"onUpdate:value":u[3]||(u[3]=e=>N(Y).name=e),placeholder:"Template name"},null,8,["value"])])])),_:1})])),_:1},8,["model"])])])),_:1},8,["show"])])}}}))}}}));
