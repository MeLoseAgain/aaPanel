System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./ssl-legacy.js?v=1742891699271","./transition-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271"],(function(e,l){"use strict";var a,r,t,o,d,u,n,c,s,p,i,_,v,y,m,x,b,g,h,S,f,w,j,L;return{setters:[e=>{a=e._},e=>{r=e.a,t=e.o},e=>{o=e.a,d=e.t,u=e.h,n=e.c},e=>{c=e.d,s=e.e,p=e.O,i=e.r,_=e.j,v=e.R,y=e.a0,m=e.a1,x=e.P,b=e.U,g=e.V,h=e.ap},e=>{S=e._,f=e.ch,w=e.cn,j=e.bY,L=e.b$},null,null,null,null],execute:function(){const l={class:"w-300px"},$={class:"w-300px"};e("default",c({__name:"domain-form",props:{row:{},isEdit:{type:Boolean},onRefresh:{}},setup(e,{expose:c}){const D=e,{isEdit:U,row:k,onRefresh:C}=D,R=s((()=>U&&k?k.provider_name.includes("CloudFlare"):o.value.includes("CloudFlare"))),{t:T}=p(),q=i(null),E=_({record_type:"A",record_value:"",ttl:1,ps:"",proxy:0,record:""}),F={record:{required:!0,trigger:"change",message:T("SSL.Domain.index_12")},record_value:{required:!0,trigger:"blur",message:T("SSL.Domain.index_14")},ttl:{required:!0,trigger:"blur",type:"number",message:T("SSL.Domain.index_15")}},P=()=>({id:U&&k?k.id:null,pid:u.value,domain:n.value,record:E.record,record_type:E.record_type,record_value:E.record_value,ttl:E.ttl,ps:E.ps,proxy:R.value?E.proxy:-1});return(()=>{const{row:e,isEdit:l}=D;l&&e&&(E.record=e.record,E.record_type=e.record_type,E.record_value=e.record_value,E.ttl=e.ttl,E.ps=e.ps,E.proxy=e.proxy)})(),c({onConfirm:async()=>{await(q.value?.validate()),U&&k?await r(P()):await t(P()),C()}}),(e,r)=>{const t=S,o=f,u=w,n=j,c=L,s=a;return v(),y(s,{class:"p-20px",ref_key:"formRef",ref:q,model:g(E),rules:F},{default:m((()=>[x(o,{label:e.$t("SSL.Domain.index_11"),path:"record"},{default:m((()=>[b("div",l,[x(t,{value:g(E).record,"onUpdate:value":r[0]||(r[0]=e=>g(E).record=e),placeholder:e.$t("SSL.Domain.index_12")},null,8,["value","placeholder"])])])),_:1},8,["label"]),x(o,{label:e.$t("Ftp.Table.index_3"),path:"record_type"},{default:m((()=>[x(u,{class:"w-300px",value:g(E).record_type,"onUpdate:value":r[1]||(r[1]=e=>g(E).record_type=e),options:g(d),disabled:g(U)},null,8,["value","options","disabled"])])),_:1},8,["label"]),x(o,{label:e.$t("SSL.Domain.index_13"),path:"record_value"},{default:m((()=>[b("div",$,[x(t,{value:g(E).record_value,"onUpdate:value":r[2]||(r[2]=e=>g(E).record_value=e),placeholder:e.$t("SSL.Domain.index_14")},null,8,["value","placeholder"])])])),_:1},8,["label"]),x(o,{label:"TTL",path:"ttl"},{default:m((()=>[x(n,{min:1,max:1800,"show-button":!1,class:"w-300px!",value:g(E).ttl,"onUpdate:value":r[3]||(r[3]=e=>g(E).ttl=e),placeholder:e.$t("SSL.Domain.index_15")},null,8,["value","placeholder"])])),_:1}),x(o,{label:e.$t("Public.Table.Ps"),path:"ps"},{default:m((()=>[x(t,{class:"w-300px!",value:g(E).ps,"onUpdate:value":r[4]||(r[4]=e=>g(E).ps=e),placeholder:e.$t("Crontab.arrange.index_27")},null,8,["value","placeholder"])])),_:1},8,["label"]),g(R)?(v(),y(o,{key:0,label:e.$t("SSL.Domain.index_16"),path:"proxy"},{default:m((()=>[x(c,{value:g(E).proxy,"onUpdate:value":r[5]||(r[5]=e=>g(E).proxy=e),"checked-value":1,"unchecked-value":0},null,8,["value"])])),_:1},8,["label"])):h("",!0)])),_:1},8,["model"])}}}))}}}));
