System.register(["./index-legacy95.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./setting-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./index-legacy99.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(e,t){"use strict";var a,l,i,n,r,s,u,c,o,p,g,f,_,d,y,m,v,b,S,W,h,w,x,j,k,$,T;return{setters:[e=>{a=e._},e=>{l=e._},e=>{i=e.b},e=>{n=e.b,r=e.f,s=e.u},e=>{u=e.o,c=e.p,o=e.g},e=>{p=e._},e=>{g=e._},e=>{f=e.d,_=e.O,d=e.r,y=e.j,m=e.R,v=e.S,b=e.P,S=e.a1,W=e.U,h=e.V,w=e.c,x=e.a2},e=>{j=e.cn,k=e._,$=e.ch,T=e.T},null,null],execute:function(){const t={class:"p-20px"},U={class:"w-100px mr-8px"},R={class:"w-220px"},L={class:"w-328px"},B={class:"w-100px"},C=f({__name:"form",props:{isEdit:{type:Boolean,default:!1}},emits:["refresh"],setup(e,{expose:a,emit:l}){const i=l,{t:n}=_(),r=d(null),s=y({sType:"url",uri:"",param:"",type:1}),c=[{label:n("Waf.Setting.config_75"),value:"url"},{label:n("Waf.Setting.config_76"),value:"regular"}],o=[{label:n("Waf.Setting.config_68"),value:1},{label:n("Waf.Setting.config_69"),value:2},{label:n("Waf.Setting.config_70"),value:3},{label:n("Waf.Setting.config_71"),value:4}],f={uri:{trigger:["blur","input"],validator:()=>""!==s.uri.trim()||new Error(n("Waf.Setting.config_55"))}};return a({onConfirm:async()=>{await(r.value?.validate()),await u({stype:s.sType,uri:s.uri,param:s.param.replace(/\n/g,",").split(","),type:s.type}),i("refresh")}}),(e,a)=>{const l=j,i=k,n=$,u=g,_=p;return m(),v("div",t,[b(_,{ref_key:"formRef",ref:r,model:h(s),rules:f},{default:S((()=>[b(n,{label:e.$t("Waf.Setting.config_73"),path:"uri"},{default:S((()=>[W("div",U,[b(l,{value:h(s).sType,"onUpdate:value":a[0]||(a[0]=e=>h(s).sType=e),options:c},null,8,["value"])]),W("div",R,[b(i,{value:h(s).uri,"onUpdate:value":a[1]||(a[1]=e=>h(s).uri=e),placeholder:"URL"},null,8,["value"])])])),_:1},8,["label"]),b(n,{label:e.$t("Waf.Setting.config_65"),path:"param"},{default:S((()=>[W("div",L,[b(u,{value:h(s).param,"onUpdate:value":a[2]||(a[2]=e=>h(s).param=e),rows:4,placeholder:e.$t("Waf.Setting.config_74")},null,8,["value","placeholder"])])])),_:1},8,["label"]),b(n,{label:e.$t("Waf.Setting.config_67"),path:"type","show-feedback":!1},{default:S((()=>[W("div",B,[b(l,{value:h(s).type,"onUpdate:value":a[3]||(a[3]=e=>h(s).type=e),"consistent-menu-width":!1,options:o},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),E={class:"p-20px"},P={class:"flex mb-16px"};e("default",f({__name:"config",setup(e){const{t:t}=_(),u=async()=>{var e;e={title:t("Waf.Setting.config_64"),data:{isEdit:!1}},s({title:e.title,width:550,footer:!0,data:{...e.data,onRefresh:()=>{d()}},component:C})},{table:p,columns:g,setLoading:f}=n([{key:"url",title:"URL",ellipsis:{tooltip:!0}},{key:"param",title:t("Waf.Setting.config_65"),width:120,ellipsis:{tooltip:!0},render:e=>e.param?e.param.join(", "):"--"},{key:"sType",title:t("Waf.Setting.config_66"),width:80,render:e=>"regular"==e.sType?t("Waf.Setting.config_72"):"URL"},{key:"type",title:t("Waf.Setting.config_67"),width:90,render:e=>{var a="";switch(e.type){case 1:a=t("Waf.Setting.config_68");break;case 2:a=t("Waf.Setting.config_69");break;case 3:a=t("Waf.Setting.config_70");break;case 4:a=t("Waf.Setting.config_71")}return a}},r({width:60,options:e=>[{label:t("Public.Btn.Del"),onClick:async()=>{await c({uri:e.url}),d()}}]})]),d=async()=>{try{f(!0);const{message:e}=await o();i(e)&&(p.data=Object.entries(e.url_cc_param).map((([e,t])=>({url:e,type:t.type,param:t.param,sType:t.stype}))))}finally{f(!1)}};return d(),(e,t)=>{const i=T,n=l,r=a;return m(),v("div",E,[W("div",P,[b(i,{type:"primary",onClick:u},{default:S((()=>[w(x(e.$t("Public.Btn.Add")),1)])),_:1})]),b(n,{"max-height":368,loading:h(p).loading,data:h(p).data,columns:h(g)},null,8,["loading","data","columns"]),b(r,{class:"mt-12px"},{default:S((()=>[W("li",null,x(e.$t("Waf.Setting.config_60")),1),W("li",null,x(e.$t("Waf.Setting.config_61")),1),W("li",null,x(e.$t("Waf.Setting.config_62")),1),W("li",null,x(e.$t("Waf.Setting.config_63")),1)])),_:1})])}}}))}}}));
