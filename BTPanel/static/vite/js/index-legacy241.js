System.register(["./page_layout-legacy.js?v=1742891699271","./index-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./public-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1742891699271"],(function(e,a){"use strict";var t,s,l,n,i,c,o,d,_,u,r,y,p,b,g,m,x,j,f,h,v,w,D,k;return{setters:[e=>{t=e.fO,s=e.fP,l=e.b,n=e.a},e=>{i=e._},e=>{c=e._},e=>{o=e._},e=>{d=e.b,_=e.f,u=e.a,r=e.c,y=e.d},e=>{p=e.T,b=e.ck},e=>{g=e.d,m=e.O,x=e.R,j=e.a0,f=e.a1,h=e.P,v=e.V,w=e.c,D=e.a2,k=e.Y},null,null,null],execute:function(){e("default",g({__name:"index",props:{data:{}},setup(e){const g=k((()=>n((()=>a.import("./form-legacy9.js?v=1742891699271")),void 0))),q=e,{params:M}=q.data,{t:P}=m(),{keys:$,table:C,columns:L}=d([{key:"database",title:P("Site.PHP.add_site_16"),render:e=>"*"===e.database?`* -${P("Database.Mysql.index_22")}`:e.database},{key:"table",title:"Table",render:e=>"*"===e.table?`* -${P("Database.Mysql.index_23")}`:e.table},{key:"user",title:P("Database.index_21"),render:e=>`${P("Database.Mysql.index_24")}: ${e.access.map((e=>e.access)).join(",")}`,ellipsis:{tooltip:!0}},_({width:80,options:e=>[{label:P("Public.Btn.Del"),onClick:async()=>{u({title:P("Public.Btn.Del"),content:P("Database.Mysql.index_25",[e.database]),onConfirm:async()=>{let a={...M,db_name:e.database,tb_name:e.table,access:e.access.map((e=>e.access)).join(","),with_grant:0};await t(a),O()}})}}]})]),{loading:B,setLoading:H}=r(),O=async()=>{try{H(!0);const{message:e}=await s(M);l(e)&&(C.data=e.data)}finally{H(!1),$.value=[]}};O();const S=y(P("Database.Mysql.index_21"),{getList:O,params:M});return(e,a)=>{const t=p,s=o,l=c,n=i,d=b;return x(),j(d,{class:"p-16px"},{default:f((()=>[h(l,null,{toolsLeft:f((()=>[h(t,{type:"primary",onClick:a[0]||(a[0]=e=>v(S).show=!0)},{default:f((()=>[w(D(e.$t("Database.Mysql.index_21")),1)])),_:1})])),table:f((()=>[h(s,{loading:v(B),data:v(C).data,"max-height":500,columns:v(L)},null,8,["loading","data","columns"])])),_:1}),h(n,{show:v(S).show,"onUpdate:show":a[1]||(a[1]=e=>v(S).show=e),title:v(S).title,data:v(S).data,width:600,"min-height":250,footer:!0,component:v(g)},null,8,["show","title","data","component"])])),_:1})}}}))}}}));
