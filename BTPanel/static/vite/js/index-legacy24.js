System.register(["./page_layout-legacy.js?v=1741416570306","./index-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1741416570306","./public-legacy.js?v=1741416570306","./index-legacy122.js?v=1741416570306","./hooks-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1741416570306","./index-legacy123.js?v=1741416570306","./soft-legacy.js?v=1741416570306"],(function(e,a){"use strict";var t,n,l,i,s,d,c,o,u,_,p,r,y,g,b,m,h,k,x,f,v,w,j,D,C,R,$,U,W,B,S,P,q,z,G,H,L,I,K,O,A,E,M,N,T,F,J,Q,V,X,Y,Z,ee,ae;return{setters:[e=>{t=e.d,n=e.j,l=e.aA,i=e.aD,s=e.aE,d=e.aH,c=e.b,o=e.G,u=e.av,_=e.aG,p=e.a,r=e.l},e=>{y=e._},e=>{g=e._},e=>{b=e._},e=>{m=e._},e=>{h=e._},e=>{k=e._},e=>{x=e.n,f=e.d,v=e.b,w=e.p,j=e.f,D=e.a,C=e.c,R=e.q},e=>{$=e.a,U=e.b,W=e.c,B=e.u,S=e.d,P=e._,q=e.e,z=e.f,G=e.g},e=>{H=e.g},e=>{L=e.N,I=e.c,K=e.i,O=e.d,A=e.M,E=e.j,M=e.w,N=e.P,T=e._,F=e.$,J=e.S,Q=e.a7,V=e.R,X=e.a0,Y=e.ae,Z=e.W},e=>{ee=e.T,ae=e.ce},null,null,null,null,null],execute:function(){const{t:te}=t.global;function ne(){return{key:"password",title:te("Database.index_14"),minWidth:150,render:e=>L(x,{value:e.password},null)}}function le(){return{key:"backup_count",title:te("Database.index_16"),width:"12%",render:e=>{let a;return L("div",{class:"flex items-center"},[L(n,{type:e.backup_count>0?"primary":"warning",onClick:()=>{$(e)}},{default:()=>[e.backup_count>0?`${te("Database.mongo.index_7")}(${e.backup_count})`:te("Database.index_18")]}),L("span",{class:"mx-4px"},[I("|")]),L(n,{onClick:()=>{U(e)}},(t=a=te("Public.Btn.Import"),"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!K(t)?a:{default:()=>[a]}))]);var t}}}function ie(){return{key:"sid",title:te("Database.mongo.index_8"),width:"12%",minWidth:120,render:e=>H(e)}}const se={class:"p-16px"};e("default",O({__name:"index",setup(e){const t=Z((()=>p((()=>a.import("./index-legacy129.js?v=1741416570306")),void 0))),{t:n}=A(),x=l(),$=f(),U=()=>{$.show=!0},H=()=>{z()},K=()=>{G()},O=async()=>{await i(x.type,{ids:[]}),re()},te=E({p:1,limit:10,sid:-1,search:""}),{keys:de,table:ce,columns:oe}=v([{type:"selection",width:40},{key:"name",title:n("Database.index_12"),width:"12%",minWidth:120},{key:"username",title:n("Database.index_13"),width:"12%",minWidth:120},ne(),le(),ie(),w({onBlur:async(e,a)=>{await _({id:a.id,ps:e})}}),j({width:100,options:e=>[{label:"CHG PW",onClick:()=>{B(e)}},{label:n("Public.Btn.Del"),onClick:()=>{W([e])}}]})]),ue=[{key:"sync",label:n("Database.index_24"),onBatch:e=>{D({title:n("Database.index_25"),content:n("Database.index_26"),onConfirm:async({hide:a})=>{await i(x.type,{ids:e.map((e=>e.id))}),a()}})}},{key:"backup",type:"confirm",label:n("Database.index_27"),confirm:{title:n("Database.index_28"),desc:n("Database.index_29"),api:e=>s(x.type,{id:e.id},!1),done:()=>{re()},columns:[{key:"name",title:n("Database.index_12")}]}},{key:"delete",label:n("Database.index_30"),onBatch:e=>{W(e)}}],{loading:_e,setLoading:pe}=C(),re=async()=>{try{pe(!0);const{message:e}=await d(x.type,(()=>{const e={...Q(te)};return-1===e.sid&&delete e.sid,e})());c(e)?(ce.data=o(e.data)?e.data:[],ce.total=u(e.page)):(ce.data=[],ce.total=0)}finally{de.value=[],pe(!1)}};return M((()=>x.isRefresh),(e=>{e&&(x.setRefresh(!1),x.delRemoteId===te.sid&&(te.sid=-1),re())})),(async()=>{await x.getRemote(),x.install?re():R()})(),(e,a)=>{const n=ee,l=r,i=k,s=h,d=m,c=b,o=g,u=y,_=ae;return N(),T(J(q),null,{default:F((()=>[L(_,null,{default:F((()=>[V("div",se,[L(o,null,{toolsLeft:F((()=>[L(n,{type:"primary",onClick:U},{default:F((()=>[I(X(e.$t("Database.index_1")),1)])),_:1}),L(n,{onClick:H},{default:F((()=>[I(X(e.$t("Database.index_2")),1)])),_:1}),L(n,{onClick:K},{default:F((()=>[I(X(e.$t("Database.index_4")),1)])),_:1}),L(l,{class:"mx-0!",vertical:""}),L(n,{onClick:O},{default:F((()=>[I(X(e.$t("Database.index_5")),1)])),_:1}),L(n,{onClick:J(S)},{default:F((()=>[I(X(e.$t("Database.index_6")),1)])),_:1},8,["onClick"])])),toolsRight:F((()=>[L(J(P),{value:J(te).sid,"onUpdate:value":a[0]||(a[0]=e=>J(te).sid=e),"store-key":"database-pgsql-page",onChange:re},null,8,["value"]),L(i,{value:J(te).search,"onUpdate:value":a[1]||(a[1]=e=>J(te).search=e),placeholder:"Database search",onSearch:re},null,8,["value"])])),table:F((()=>[L(s,{"checked-row-keys":J(de),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>Y(de)?de.value=e:null),loading:J(_e),data:J(ce).data,columns:J(oe)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:F((()=>[L(d,{"checked-row-keys":J(de),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>Y(de)?de.value=e:null),data:J(ce).data,options:ue},null,8,["checked-row-keys","data"])])),pageRight:F((()=>[L(c,{page:J(te).p,"onUpdate:page":a[4]||(a[4]=e=>J(te).p=e),"page-size":J(te).limit,"onUpdate:pageSize":a[5]||(a[5]=e=>J(te).limit=e),"store-key":"database-pgsql-page","item-count":J(ce).total,onRefresh:re},null,8,["page","page-size","item-count"])])),_:1}),L(u,{show:J($).show,"onUpdate:show":a[6]||(a[6]=e=>J($).show=e),title:e.$t("Database.mongo.index_4"),width:540,"min-height":280,footer:!0,component:J(t)},null,8,["show","title","component"])])])),_:1})])),_:1})}}}))}}}));
