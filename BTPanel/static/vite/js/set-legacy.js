System.register(["./index-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306"],(function(e,a){"use strict";var t,l,n,i,s,d,c,u,o,r,p,_,m,y,v,x,f,g,h,w,P,b,j,S,H,$,C,k,U,G,N;return{setters:[e=>{t=e._},e=>{l=e._},e=>{n=e.cG,i=e.a4,s=e.G,d=e.m,c=e.cH,u=e.cI},e=>{o=e.d,r=e.b,p=e.f,_=e.a},e=>{m=e._,y=e.T,v=e.bO,x=e.cn,f=e.cb},e=>{g=e.d,h=e.M,w=e.r,P=e.j,b=e.P,j=e.Q,S=e.N,H=e.$,$=e.R,C=e.S,k=e.ae,U=e.c,G=e.a0,N=e.a7},null,null],execute:function(){const a={class:"p-20px"},O={class:"flex-1"},R={class:"mt-12px"},q={class:"px-20px pt-24px pb-8px"},D={class:"w-150px"};e("default",g({__name:"set",props:{data:{}},setup(e){const{t:g}=h(),E=e,{setOptions:I}=E.data,M=w(""),Q=async()=>{const e=M.value.trim();""!==e?(await c({name:e}),M.value="",await L(),I?.(J.data)):d.error(g("Site.PHP.index_46"))},T=o(),z=w(null),A=P({type_id:-1,name:""}),B={name:{required:!0,message:g("Site.PHP.index_46"),trigger:["blur","change"]}},F=async({hide:e})=>{await(z.value?.validate()),await u(N(A)),await L(),I?.(J.data),e()},{table:J,columns:K}=r([{key:"name",title:"Name"},p({width:80,options:e=>[{label:"Edit",onClick:()=>{(e=>{A.type_id=e.type_id,A.name=e.name,T.title=`${g("Site.PHP.index_48")} [${e.name}]`,T.show=!0})(e)}},{label:"Del",onClick:()=>{_({title:`${g("Site.PHP.index_49")} [${e.name}]`,content:g("Site.PHP.index_50"),onConfirm:async({hide:a})=>{await n({type_id:e.type_id}),await L(),I?.(J.data,e.type_id),a()}})}}]})]),L=async()=>{const{message:e}=await i();J.data=s(e)?e:[]};return L(),(e,n)=>{const i=m,s=y,d=v,c=x,u=f,o=l,r=t;return b(),j("div",a,[S(d,null,{default:H((()=>[$("div",O,[S(i,{value:C(M),"onUpdate:value":n[0]||(n[0]=e=>k(M)?M.value=e:null),placeholder:e.$t("Site.PHP.index_46")},null,8,["value","placeholder"])]),$("div",null,[S(s,{type:"primary",onClick:Q},{default:H((()=>[U(G(e.$t("Site.Cert.index_62")),1)])),_:1})])])),_:1}),$("div",R,[S(c,{"max-height":300,data:C(J).data,columns:C(K)},null,8,["data","columns"])]),S(r,{show:C(T).show,"onUpdate:show":n[2]||(n[2]=e=>C(T).show=e),title:C(T).title,width:350,footer:!0,onConfirm:F},{default:H((()=>[$("div",q,[S(o,{ref_key:"formRef",ref:z,model:C(A),rules:B},{default:H((()=>[S(u,{label:e.$t("Site.PHP.index_47"),path:"name"},{default:H((()=>[$("div",D,[S(i,{value:C(A).name,"onUpdate:value":n[1]||(n[1]=e=>C(A).name=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])])),_:1},8,["show","title"])])}}}))}}}));
