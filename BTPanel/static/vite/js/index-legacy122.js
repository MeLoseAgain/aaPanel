System.register(["./index-legacy123.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./soft-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306"],(function(e,t){"use strict";var a,o,i,n,l,s,d,c,u,r,m,p,v,g,f,x,_,y,h,b,j,w,$,D,H,k,q,C,P,S;return{setters:[e=>{a=e._},e=>{o=e.aA,i=e.j,n=e.aP,l=e.aQ,s=e.d,d=e.a},e=>{c=e.d,u=e.Y,r=e.P,m=e._,p=e.$,v=e.R,g=e.a0,f=e.S,x=e.Q,_=e.N,y=e.c,h=e.F,b=e.ao,j=e.m,w=e.aq,$=e.M,D=e.e,H=e.ar,k=e.W},e=>{q=e.u,C=e.a},e=>{P=e.ch},e=>{S=e.u}],execute:function(){e({a:function(e){S({title:`${M("Database.tools.index_72")} [${e.name}]`,width:700,minHeight:196,data:{row:e},component:k((()=>d((()=>t.import("./index-legacy133.js?v=1741416570306")),void 0)))})},b:function(e){S({title:`${M("Database.tools.index_73")} [${e.name}]`,width:680,minHeight:234,data:{row:e},component:k((()=>d((()=>t.import("./index-legacy134.js?v=1741416570306")),void 0)))})},c:function(e){S({title:M("Database.index_30"),width:760,minHeight:226,footer:!0,confirmType:"error",data:{ids:e.map((e=>e.id))},component:k((()=>d((()=>t.import("./index-legacy136.js?v=1741416570306")),void 0)))})},d:function(){S({title:M("Database.tools.index_71"),width:460,minHeight:85,footer:!0,component:k((()=>d((()=>t.import("./index-legacy132.js?v=1741416570306")),void 0)))})},f:function(){S({title:M("Database.tools.index_70"),width:480,minHeight:84,footer:!0,component:k((()=>d((()=>t.import("./index-legacy131.js?v=1741416570306")),void 0)))})},g:function(){S({title:M("Database.tools.index_69"),width:860,minHeight:264,component:k((()=>d((()=>t.import("./index-legacy130.js?v=1741416570306")),void 0)))})},u:function(e){S({title:`${M("Database.tools.index_74")} [${e.name}]`,width:480,minHeight:140,footer:!0,data:{row:e},component:k((()=>d((()=>t.import("./index-legacy135.js?v=1741416570306")),void 0)))})}});const A={class:"mr-4px"},K=(e("e",c({__name:"index",setup(e){const t=o(),{type:n,install:l}=u(t),s=()=>{"pgsql"===n.value?q():C(n.value)};return(e,t)=>{const o=i,d=a;return r(),m(d,{install:f(l)},{desc:p((()=>[v("span",A,g(e.$t("Database.tools.index_39"))+", ",1),"sqlserver"!==f(n)?(r(),x(h,{key:0},[_(o,{onClick:s},{default:p((()=>[y(g(e.$t("Database.tools.index_40")),1)])),_:1}),t[0]||(t[0]=v("span",{class:"mx-4px"},"|",-1))],64)):b("",!0),_(o,{onClick:f(N)},{default:p((()=>[y(g(e.$t("Database.tools.index_41")),1)])),_:1},8,["onClick"])])),default:p((()=>[j(e.$slots,"default")])),_:3},8,["install"])}}})),{class:"w-120px"}),{t:M}=(e("_",c({__name:"index",props:w({storeKey:{default:""},value:{},all:{type:Boolean,default:!0}},{value:{},valueModifiers:{}}),emits:w(["change"],["update:value"]),setup(e,{emit:t}){const{t:a}=$(),i=e,s=t,d=D((()=>{const{storeKey:e}=i;return e?`${e}-select`:""})),c=H(e,"value"),m=o(),{remoteList:p}=u(m),v=D((()=>{const e=p.value.map((e=>({label:e.ps||e.db_host,value:e.id})));return i.all&&e.unshift({label:a("Public.All"),value:-1}),e})),g=e=>{d.value&&n(d.value,String(e)),s("change",e)};return(()=>{if(d.value){const e=l(d.value);e&&(c.value=Number(e))}})(),(e,t)=>{const a=P;return r(),x("div",K,[_(a,{value:c.value,"onUpdate:value":[t[0]||(t[0]=e=>c.value=e),g],options:f(v)},null,8,["value","options"])])}}})),s.global);function N(){S({title:M("Database.tools.index_41"),width:460,minHeight:388,footer:!0,data:{row:void 0,isEdit:!1},component:k((()=>d((()=>t.import("./form-legacy2.js?v=1741416570306")),void 0)))})}}}}));
