System.register(["./index-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(e,a){"use strict";var t,l,i,n,s,d,u,o,c,r,p,_,m,y,v,x,f,h,g,w,P,b,j,S,H,$,C,k,U,O,R;return{setters:[e=>{t=e._},e=>{l=e._},e=>{i=e.ds,n=e.a8,s=e.I,d=e.m,u=e.dt,o=e.du},e=>{c=e.d,r=e.b,p=e.f,_=e.a},e=>{m=e._,y=e.T,v=e.bU,x=e.ct,f=e.ch},e=>{h=e.d,g=e.O,w=e.r,P=e.j,b=e.R,j=e.S,S=e.P,H=e.a1,$=e.U,C=e.V,k=e.af,U=e.c,O=e.a2,R=e.M},null,null],execute:function(){const a={class:"p-20px"},q={class:"flex-1"},D={class:"mt-12px"},E={class:"px-20px pt-24px pb-8px"},I={class:"w-150px"};e("default",h({__name:"set",props:{data:{}},setup(e){const{t:h}=g(),M=e,{setOptions:N}=M.data,T=w(""),V=async()=>{const e=T.value.trim();""!==e?(await u({name:e}),T.value="",await L(),N?.(J.data)):d.error(h("Site.PHP.index_46"))},z=c(),A=w(null),B=P({type_id:-1,name:""}),F={name:{required:!0,message:h("Site.PHP.index_46"),trigger:["blur","change"]}},G=async({hide:e})=>{await(A.value?.validate()),await o(R(B)),await L(),N?.(J.data),e()},{table:J,columns:K}=r([{key:"name",title:"Name"},p({width:80,options:e=>[{label:"Edit",onClick:()=>{(e=>{B.type_id=e.type_id,B.name=e.name,z.title=`${h("Site.PHP.index_48")} [${e.name}]`,z.show=!0})(e)}},{label:"Del",onClick:()=>{_({title:`${h("Site.PHP.index_49")} [${e.name}]`,content:h("Site.PHP.index_50"),onConfirm:async({hide:a})=>{await i({type_id:e.type_id}),await L(),N?.(J.data,e.type_id),a()}})}}]})]),L=async()=>{const{message:e}=await n();J.data=s(e)?e:[]};return L(),(e,i)=>{const n=m,s=y,d=v,u=x,o=f,c=l,r=t;return b(),j("div",a,[S(d,null,{default:H((()=>[$("div",q,[S(n,{value:C(T),"onUpdate:value":i[0]||(i[0]=e=>k(T)?T.value=e:null),placeholder:e.$t("Site.PHP.index_46")},null,8,["value","placeholder"])]),$("div",null,[S(s,{type:"primary",onClick:V},{default:H((()=>[U(O(e.$t("Site.Cert.index_62")),1)])),_:1})])])),_:1}),$("div",D,[S(u,{"max-height":300,data:C(J).data,columns:C(K)},null,8,["data","columns"])]),S(r,{show:C(z).show,"onUpdate:show":i[2]||(i[2]=e=>C(z).show=e),title:C(z).title,width:350,footer:!0,onConfirm:G},{default:H((()=>[$("div",E,[S(c,{ref_key:"formRef",ref:A,model:C(B),rules:F},{default:H((()=>[S(o,{label:e.$t("Site.PHP.index_47"),path:"name"},{default:H((()=>[$("div",I,[S(n,{value:C(B).name,"onUpdate:value":i[1]||(i[1]=e=>C(B).name=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])])),_:1},8,["show","title"])])}}}))}}}));
