System.register(["./index-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./site-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306"],(function(e,a){"use strict";var t,l,i,n,s,d,c,u,o,r,m,p,_,v,x,y,b,g,f,h,w,P,j,S,H,$,C,k,U,B,N;return{setters:[e=>{t=e._},e=>{l=e._},e=>{i=e.G,n=e.m},e=>{s=e.ba,d=e.c,c=e.bb,u=e.bc},e=>{o=e.d,r=e.b,m=e.f,p=e.a},e=>{_=e._,v=e.T,x=e.bO,y=e.cn,b=e.cb},e=>{g=e.d,f=e.M,h=e.r,w=e.j,P=e.P,j=e.Q,S=e.N,H=e.$,$=e.R,C=e.S,k=e.ae,U=e.c,B=e.a0,N=e.a7},null,null],execute:function(){const a={class:"p-20px"},O={class:"flex-1"},R={class:"mt-12px"},q={class:"px-20px pt-24px pb-8px"},D={class:"w-150px"};e("default",g({__name:"set",props:{data:{}},setup(e){const{t:g}=f(),E=e,{setOptions:G}=E.data,M=h(""),Q=async()=>{const e=M.value.trim();""!==e?(await c({name:e}),M.value="",await L(),G?.(J.data)):n.error(g("Site.PHP.index_46"))},T=o(),z=h(null),A=w({id:-1,name:""}),F={name:{required:!0,message:g("Site.PHP.index_46"),trigger:["blur","change"]}},I=async({hide:e})=>{await(z.value?.validate()),await u(N(A)),await L(),G?.(J.data),e()},{table:J,columns:K}=r([{key:"name",title:"Name"},m({width:120,options:e=>[{label:g("Public.Btn.Edit"),disabled:0===e.id,onClick:()=>{(e=>{A.id=e.id,A.name=e.name,T.title=`${g("Site.PHP.index_48")} [${e.name}]`,T.show=!0})(e)}},{label:g("Public.Btn.Delete"),disabled:0===e.id,onClick:()=>{p({title:`${g("Site.PHP.index_49")} [${e.name}]`,content:g("Site.PHP.index_50"),onConfirm:async({hide:a})=>{await s({id:e.id}),await L(),G?.(J.data,e.id),a()}})}}]})]),L=async()=>{const{message:e}=await d();J.data=i(e)?e:[]};return L(),(e,i)=>{const n=_,s=v,d=x,c=y,u=b,o=l,r=t;return P(),j("div",a,[S(d,null,{default:H((()=>[$("div",O,[S(n,{value:C(M),"onUpdate:value":i[0]||(i[0]=e=>k(M)?M.value=e:null),placeholder:e.$t("Site.PHP.index_46")},null,8,["value","placeholder"])]),$("div",null,[S(s,{type:"primary",onClick:Q},{default:H((()=>[U(B(e.$t("Site.Cert.index_62")),1)])),_:1})])])),_:1}),$("div",R,[S(c,{"max-height":300,data:C(J).data,columns:C(K)},null,8,["data","columns"])]),S(r,{show:C(T).show,"onUpdate:show":i[2]||(i[2]=e=>C(T).show=e),title:C(T).title,width:350,footer:!0,onConfirm:I},{default:H((()=>[$("div",q,[S(o,{ref_key:"formRef",ref:z,model:C(A),rules:F},{default:H((()=>[S(u,{label:e.$t("Site.PHP.index_47"),path:"name"},{default:H((()=>[$("div",D,[S(n,{value:C(A).name,"onUpdate:value":i[1]||(i[1]=e=>C(A).name=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])])),_:1},8,["show","title"])])}}}))}}}));
