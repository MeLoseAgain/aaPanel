System.register(["./page_layout-legacy.js?v=1742891699271","./index-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1742891699271","./index-legacy121.js?v=1742891699271","./public-legacy.js?v=1742891699271","./index-legacy122.js?v=1742891699271","./hooks-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./index-legacy95.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1742891699271","./php-legacy.js?v=1742891699271","./soft-legacy.js?v=1742891699271","./index-legacy123.js?v=1742891699271","./index-legacy96.js?v=1742891699271"],(function(e,a){"use strict";var t,n,s,l,o,i,d,u,c,r,p,_,g,y,b,m,h,x,w,f,v,k,D,j,C,$,U,R,z,B,I,S,L,P,W,q,O,H,K,M,T,V,Y,A,E,F,G,J,N,Q,X,Z,ee,ae,te,ne,se,le,oe,ie,de,ue,ce,re,pe,_e,ge;return{setters:[e=>{t=e.d,n=e.j,s=e.bq,l=e.br,o=e.b,i=e.n,d=e.bs,u=e.bi,c=e.bl,r=e.bm,p=e.bp,_=e.I,g=e.b7,y=e.bo,b=e.a,m=e.m,h=e.l},e=>{x=e._},e=>{w=e._},e=>{f=e._},e=>{v=e._},e=>{k=e._},e=>{D=e._},e=>{j=e._},e=>{C=e.n,$=e.c,U=e.d,R=e.b,z=e.p,B=e.f,I=e.a,S=e.q},e=>{L=e.a,P=e.b,W=e.c,q=e.u,O=e.d,H=e._,K=e.e,M=e.g},e=>{T=e.g},e=>{V=e.P,Y=e.c,A=e.i,E=e.d,F=e.O,G=e.r,J=e.j,N=e.R,Q=e.S,X=e.a1,Z=e.U,ee=e.V,ae=e.M,te=e.a2,ne=e.w,se=e.a0,le=e.ap,oe=e.af,ie=e.Y},e=>{de=e._},e=>{ue=e._},e=>{ce=e.ch,re=e.b$,pe=e.T,_e=e.ck},e=>{ge=e._},null,null,null,null,null,null,null],execute:function(){const{t:ye}=t.global;function be(){return{key:"name",title:ye("Database.index_12"),width:"12%",minWidth:120}}function me(){return{key:"username",title:ye("Database.form.index_3"),width:"12%",minWidth:120}}function he(){return{key:"password",title:ye("Database.index_14"),minWidth:150,render:e=>V(C,{value:e.password},null)}}function xe(){return{key:"backup_count",title:ye("Database.index_16"),width:"12%",render:e=>{let a;return V("div",{class:"flex items-center"},[V(n,{type:e.backup_count>0?"primary":"warning",onClick:()=>{L(e)}},{default:()=>[e.backup_count>0?`${ye("Database.mongo.index_7")}(${e.backup_count})`:ye("Database.index_18")]}),V("span",{class:"mx-4px"},[Y("|")]),V(n,{onClick:()=>{P(e)}},(t=a=ye("Public.Btn.Import"),"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!A(t)?a:{default:()=>[a]}))]);var t}}}function we(){return{key:"sid",title:ye("Database.mongo.index_8"),width:"12%",minWidth:120,render:e=>T(e)}}const fe={class:"px-20px pt-24px pb-8px"},ve={class:"w-320px"},ke=E({__name:"index",setup(e,{expose:a}){const{t:t}=F(),n=G(null),d=J({password:""}),u={password:{required:!0,message:t("Database.tools.index_65"),trigger:"blur"}},{loading:c,setLoading:r}=$();return(async()=>{try{r(!0);const{message:e}=await l();o(e)&&(d.password=i(e.root)?e.root:"")}finally{r(!1)}})(),a({onConfirm:async({hide:e})=>{try{await(n.value?.validate()),await s(ae(d)),e()}catch(a){console.error(a)}}}),(e,a)=>{const t=ue,s=ce,l=de;return N(),Q("div",fe,[V(l,{ref_key:"formRef",ref:n,model:ee(d),rules:u},{default:X((()=>[V(s,{label:e.$t("Database.index_2"),path:"password"},{default:X((()=>[Z("div",ve,[V(t,{value:ee(d).password,"onUpdate:value":a[0]||(a[0]=e=>ee(d).password=e),loading:ee(c),default:!1},null,8,["value","loading"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),De={class:"px-20px py-24px"},je=E({__name:"index",props:{data:{}},setup(e){const a=e,{status:t,getInfo:n}=a.data,s=J({status:t}),l=async()=>{await d(ae(s)),n?.()};return(e,a)=>{const t=re,n=ce,o=de,i=ge;return N(),Q("div",De,[V(o,{"label-width":"160"},{default:X((()=>[V(n,{label:e.$t("Database.mongo.index_1"),"show-feedback":!1},{default:X((()=>[V(t,{value:ee(s).status,"onUpdate:value":[a[0]||(a[0]=e=>ee(s).status=e),l],"checked-value":1},null,8,["value"])])),_:1},8,["label"])])),_:1}),V(i,{class:"mt-16px"},{default:X((()=>[Z("li",null,te(e.$t("Database.mongo.index_2")),1)])),_:1})])}}}),Ce={class:"p-16px"};e("default",E({__name:"index",setup(e){const{t:t}=F(),n=ie((()=>b((()=>a.import("./index-legacy125.js?v=1742891699271")),void 0))),s=u(),i=U(t("Database.mongo.index_4"),{status:!1}),d=()=>{i.data.status="enabled"===ce.authorization,i.show=!0},C=U(t("Database.tools.index_70")),L=()=>{"enabled"===ce.authorization?C.show=!0:(T(),m.warning(t("Database.mongo.index_5")))},P=U(t("Database.mongo.index_1"),{status:0}),T=()=>{P.data.status="enabled"===ce.authorization?1:0,P.data.getInfo=re,P.show=!0},A=()=>{M()},E=async()=>{await c(s.type,{ids:[]}),ve()},{keys:G,table:Q,columns:de}=R([{type:"selection",width:40},be(),me(),he(),xe(),we(),z({onBlur:async(e,a)=>{await y({id:a.id,ps:e})}}),B({width:100,options:e=>[{label:"Password",onClick:()=>{q(e)}},{label:t("Public.Btn.Del"),onClick:()=>{W([e])}}]})]),ue=[{key:"sync",label:t("Database.index_24"),onBatch:e=>{I({title:t("Database.index_25"),content:t("Database.index_26"),onConfirm:async({hide:a})=>{await c(s.type,{ids:e.map((e=>e.id))}),a()}})}},{key:"backup",type:"confirm",label:t("Database.index_27"),confirm:{title:t("Database.index_28"),desc:t("Database.index_29"),api:e=>r(s.type,{id:e.id},!1),done:()=>{ve()},columns:[{key:"name",title:t("Database.index_12")}]}},{key:"delete",label:t("Database.index_30"),onBatch:e=>{W(e)}}],ce=J({authorization:"",msg:"",port:"",root:""}),re=async()=>{const{message:e}=await l();o(e)&&(ce.authorization=e.authorization,ce.msg=e.msg,ce.port=e.port,ce.root=e.root)},{loading:ge,setLoading:ye}=$(),fe=J({p:1,limit:10,sid:-1,search:""}),ve=async()=>{try{ye(!0);const{message:e}=await p(s.type,(()=>{const e={...ae(fe)};return-1===e.sid&&delete e.sid,e})());o(e)?(Q.data=_(e.data)?e.data:[],Q.total=g(e.page)):(Q.data=[],Q.total=0)}finally{G.value=[],ye(!1)}};return ne((()=>s.isRefresh),(e=>{e&&(s.setRefresh(!1),s.delRemoteId===fe.sid&&(fe.sid=-1),ve())})),(async()=>{await s.getRemote(),s.install?(ve(),re()):S()})(),(e,a)=>{const t=pe,l=h,o=j,u=D,c=k,r=v,p=f,_=w,g=x,y=_e;return N(),se(ee(K),null,{default:X((()=>[V(y,null,{default:X((()=>[Z("div",Ce,[V(_,null,{toolsLeft:X((()=>[V(t,{type:"primary",onClick:d},{default:X((()=>[Y(te(e.$t("Database.index_1")),1)])),_:1}),V(t,{onClick:L},{default:X((()=>[Y(te(e.$t("Database.index_2")),1)])),_:1}),V(t,{onClick:T},{default:X((()=>[Y(te(e.$t("Database.mongo.index_1")),1)])),_:1}),V(t,{onClick:A},{default:X((()=>[Y(te(e.$t("Database.index_4")),1)])),_:1}),V(l,{class:"mx-0!",vertical:""}),V(t,{onClick:E},{default:X((()=>[Y(te(e.$t("Database.index_5")),1)])),_:1}),V(t,{onClick:ee(O)},{default:X((()=>[Y(te(e.$t("Database.index_6")),1)])),_:1},8,["onClick"]),ee(s).isInstallMongoDB?(N(),se(o,{key:0,"soft-name":"mongodb"})):le("",!0)])),toolsRight:X((()=>[V(ee(H),{value:ee(fe).sid,"onUpdate:value":a[0]||(a[0]=e=>ee(fe).sid=e),"store-key":"database-mongo-page",onChange:ve},null,8,["value"]),V(u,{value:ee(fe).search,"onUpdate:value":a[1]||(a[1]=e=>ee(fe).search=e),placeholder:e.$t("Database.mongo.index_3"),onSearch:ve},null,8,["value","placeholder"])])),table:X((()=>[V(c,{"checked-row-keys":ee(G),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>oe(G)?G.value=e:null),loading:ee(ge),data:ee(Q).data,columns:ee(de)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:X((()=>[V(r,{"checked-row-keys":ee(G),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>oe(G)?G.value=e:null),data:ee(Q).data,options:ue},null,8,["checked-row-keys","data"])])),pageRight:X((()=>[V(p,{page:ee(fe).p,"onUpdate:page":a[4]||(a[4]=e=>ee(fe).p=e),"page-size":ee(fe).limit,"onUpdate:pageSize":a[5]||(a[5]=e=>ee(fe).limit=e),"store-key":"database-mongo-page","item-count":ee(Q).total,onRefresh:ve},null,8,["page","page-size","item-count"])])),_:1}),V(g,{show:ee(i).show,"onUpdate:show":a[6]||(a[6]=e=>ee(i).show=e),title:ee(i).title,width:540,minHeight:176,footer:!0,data:ee(i).data,component:ee(n)},null,8,["show","title","data","component"]),V(g,{show:ee(C).show,"onUpdate:show":a[7]||(a[7]=e=>ee(C).show=e),title:ee(C).title,width:520,footer:!0,component:ke},null,8,["show","title"]),V(g,{show:ee(P).show,"onUpdate:show":a[8]||(a[8]=e=>ee(P).show=e),title:ee(P).title,width:400,data:ee(P).data,component:je},null,8,["show","title","data"])])])),_:1})])),_:1})}}}))}}}));
