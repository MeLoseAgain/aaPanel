System.register(["./index-legacy104.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy25.js?v=1741416570306","./index-legacy95.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy15.js?v=1741416570306","./theme-chrome-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./file-legacy.js?v=1741416570306","./index-legacy96.js?v=1741416570306","./common-legacy.js?v=1741416570306"],(function(e,a){"use strict";var l,t,n,c,s,d,r,u,i,o,_,p,m,y,x,k,v,g,h,f,j,T,D,b,w,R,$;return{setters:[e=>{l=e._},e=>{t=e._},e=>{n=e._},e=>{c=e._},e=>{s=e._},e=>{d=e.m,r=e.f5,u=e.G,i=e.f6},e=>{o=e.b,_=e.c},e=>{p=e.a2,m=e.T},e=>{y=e.d,x=e.M,k=e.j,v=e.r,g=e.P,h=e.Q,f=e.R,j=e.N,T=e.$,D=e.S,b=e.c,w=e.a0,R=e.ae,$=e.a7},null,null,null,null,null,null,null],execute:function(){const a={class:"px-16px"},C={class:"flex mb-10px"},U={class:"flex-1"},L={class:"ml-16px"},S={class:"text-error"},z=y({__name:"index",setup(e,{expose:l}){const{t:t}=x(),y=k({path:"",checked:!1}),z=v([]),{keys:P,table:B,columns:G}=o([{type:"selection",width:40},{key:"project_name",title:t("Docker.Template.add.index_9")},{key:"conf_file",title:t("Docker.Template.add.index_10")},{key:"remark",title:t("Docker.Template.add.index_3")}]),{loading:H,setLoading:K}=_(),M=async()=>{if(""!==y.path.trim())try{K(!0);const{message:e}=await r({path:y.path,sub_dir:y.checked?"1":"0"});B.data=u(e)?e:[]}finally{P.value=[],z.value=[],K(!1)}else d.error(t("Docker.Template.add.index_11"))},N=(e,a)=>{z.value=a};return l({onConfirm:async()=>{0!==z.value.length?await i({template_list:$(z.value)}):d.error(t("Docker.Template.add.index_12"))}}),(e,l)=>{const t=p,d=s,r=m,u=c,i=n;return g(),h("div",a,[f("div",C,[f("div",U,[j(d,{value:D(y).path,"onUpdate:value":l[1]||(l[1]=e=>D(y).path=e),placeholder:e.$t("Docker.Template.add.index_5")},{suffix:T((()=>[j(t,{checked:D(y).checked,"onUpdate:checked":l[0]||(l[0]=e=>D(y).checked=e),class:"mr-8px"},{default:T((()=>[b(w(e.$t("Docker.Template.add.index_6")),1)])),_:1},8,["checked"])])),_:1},8,["value","placeholder"])]),f("div",L,[j(r,{type:"primary",onClick:M},{default:T((()=>[b(w(e.$t("Public.Btn.Search")),1)])),_:1})])]),j(u,{"checked-row-keys":D(P),"onUpdate:checkedRowKeys":[l[2]||(l[2]=e=>R(P)?P.value=e:null),N],"row-key":"project_name",loading:D(H),"loading-num":7,columns:D(G),data:D(B).data},null,8,["checked-row-keys","loading","columns","data"]),j(i,{class:"mt-20px"},{default:T((()=>[f("li",S,w(e.$t("Docker.Template.add.index_8",[D(P).length])),1)])),_:1})])}}}),P={class:"p-16px"};e("default",y({__name:"index",emits:["refresh"],setup(e,{expose:a,emit:n}){const c=n,{t:s}=x(),d=v(),r=v("normal"),u=[{key:"normal",label:s("Docker.Template.add.index_13"),isLazy:!0,data:{onRefresh:()=>{c("refresh")}},component:t},{key:"command",label:s("Docker.Template.add.index_14"),isLazy:!0,data:{onRefresh:()=>{c("refresh")}},component:z}];return a({onConfirm:async()=>{await(d.value?.onConfirm()),c("refresh")}}),(e,a)=>{const t=l;return g(),h("div",P,[j(t,{ref_key:"tabsRef",ref:d,value:D(r),"onUpdate:value":a[0]||(a[0]=e=>R(r)?r.value=e:null),options:u},null,8,["value"])])}}}))}}}));
