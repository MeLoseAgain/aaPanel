const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index126.js?v=1742891699271","js/index95.js?v=1742891699271","js/page_layout.js?v=1742891699271","js/vue.js?v=1742891699271","js/__commonjsHelpers__.js?v=1742891699271","js/naive.js?v=1742891699271","js/common.js?v=1742891699271","js/public.js?v=1742891699271","css/public.css?v=1742891699271","css/page_layout.css?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang.js?v=1742891699271","js/index127.js?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang4.js?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang8.js?v=1742891699271","css/index19.css?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271","js/index128.js?v=1742891699271","css/index70.css?v=1742891699271"])))=>i.map(i=>d[i]);
import{_ as e,bi as a,bt as t,bu as s,bv as i,I as d,bw as l,b as n,b7 as o,a as r,l as u}from"./page_layout.js?v=1742891699271";import{_}from"./index.js?v=1742891699271";import{_ as c}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1742891699271";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1742891699271";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang12.js?v=1742891699271";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271";import{_ as b}from"./index.vue_vue_type_script_setup_true_lang7.js?v=1742891699271";import{_ as h}from"./index104.js?v=1742891699271";import{_ as v}from"./index121.js?v=1742891699271";import{h as w,d as f,b as y,f as g,c as k,a as D,q as j}from"./public.js?v=1742891699271";import{g as R,_ as C,e as I}from"./index122.js?v=1742891699271";import{d as U,R as E,S as L,U as P,P as $,a1 as W,c as z,a2 as A,O as B,r as O,x as S,j as T,w as V,a0 as H,V as K,M as q,ap as F,af as M,N,F as Y,Y as G}from"./vue.js?v=1742891699271";import{c1 as J,cu as Q,T as X,bU as Z,ci as ee,ck as ae}from"./naive.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1742891699271";import"./php.js?v=1742891699271";import"./soft.js?v=1742891699271";import"./index123.js?v=1742891699271";const te={class:"flex"},se={class:"w-0 flex-1 flex items-center"},ie={style:{minWidth:0}},de=["title"],le=U({__name:"index",props:{value:{default:""}},setup(a){const t=a,s=async()=>{w("".concat(t.value))};return(a,t)=>{const i=J,d=e;return E(),L("div",te,[P("div",se,[P("div",ie,[$(i,{class:"max-w-full",tooltip:{width:"trigger",scrollable:!0,contentStyle:{maxHeight:"360px",overflow:"auto"}}},{default:W((()=>[z(A(a.value),1)])),_:1})]),P("button",{class:"reset mx-8px text-15px cursor-pointer text-#333",title:a.$t("Public.Btn.Copy"),onClick:s},[$(d,{name:"common-copy"})],8,de)])])}}});function ne(){const{t:e}=B();return{key:"val",title:e("Database.redis.index_3"),render:e=>$(le,{value:e.val},null)}}const oe={class:"p-16px"},re={class:"flex flex-wrap justify-between mb-12px"},ue={class:"flex items-center text-warning"},_e={class:"ml-4px"},ce=U({__name:"index",setup(w){const{t:U}=B(),J=G((()=>r((()=>import("./index126.js?v=1742891699271")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))),te=G((()=>r((()=>import("./index127.js?v=1742891699271")),__vite__mapDeps([11,12,13,2,3,4,5,6,7,8,9,14,15])))),se=G((()=>r((()=>import("./index128.js?v=1742891699271")),__vite__mapDeps([16,10,3,4,5,6,2,7,8,9,17])))),ie=a(),de=O(null),le=S([]),ce=f("",{row:void 0,sid:null,dbIdx:0,isEdit:!1}),pe=()=>{ce.data.dbIdx=ve.db_idx,ce.data.row=void 0,ce.data.sid=de.value,ce.data.isEdit=!1,ce.title=U("Database.redis.index_20"),ce.show=!0},me=f(U("Database.redis.index_26"),{sid:null}),xe=()=>{me.data.sid=de.value,me.show=!0},be=f(U("Database.redis.index_27"),{sid:null,databaseList:[]}),he=()=>{be.data.sid=de.value,be.data.databaseList=le.value,be.show=!0},ve=T({db_idx:-1,db_type:0,p:1,limit:20,search:""}),{keys:we,table:fe,columns:ye}=y([{type:"selection",width:40},{key:"name",title:U("Database.redis.index_2"),width:"20%",minWidth:120,ellipsis:{tooltip:{width:"trigger"}}},ne(),{key:"type",title:U("Database.redis.index_28"),width:"10%",minWidth:100,render:e=>Q(e.type)},{key:"len",title:U("Database.redis.index_29"),width:"10%",minWidth:100},{key:"endtime",title:U("Database.redis.index_5"),width:"10%",minWidth:100,render:e=>0===e.endtime?U("Database.redis.index_30"):t(e.endtime)},g({width:100,options:e=>[{label:U("Public.Btn.Edit"),onClick:()=>{(e=>{ce.data.dbIdx=ve.db_idx,ce.data.row=e,ce.data.sid=de.value,ce.data.isEdit=!0,ce.title="".concat(U("Database.redis.index_25")," [").concat(e.name,"]"),ce.show=!0})(e)}},{label:U("Public.Btn.Del"),onClick:()=>{D({title:U("Database.redis.index_31"),content:U("Database.redis.index_31",[e.name]),onConfirm:async({hide:a})=>{null!==de.value&&-1!==ve.db_idx&&(await s({sid:de.value,key:e.name,db_idx:ve.db_idx}),1===fe.data.length&&(ve.db_idx=-1),Ce(),a())}})}}]})]),ge=[{key:"del",type:"confirm",label:U("Public.Batch.ChooseDel"),confirm:{title:U("Database.redis.index_33"),desc:U("Database.redis.index_34"),columns:[{key:"name",title:U("Database.redis.index_2"),ellipsis:{tooltip:{width:"trigger"}}}],api:async e=>{null!==de.value&&-1!==ve.db_idx&&await s({sid:de.value,key:e.name,db_idx:ve.db_idx},!1)},done:e=>{fe.total===e.length&&(ve.db_idx=-1),Ce()}}}],ke=async()=>{if(null===de.value)return;const{message:e}=await i({sid:de.value});d(e)&&e.length>0?(le.value=e,-1===ve.db_idx&&(ve.db_idx=e[0].id)):(le.value=[],fe.data=[],fe.total=0,ve.db_idx=-1)},{loading:De,setLoading:je}=k(),Re=async()=>{try{je(!0);const e=de.value;if(null===e)return;if(le.value.length<=0)return;if(-1===ve.db_idx)return;const{message:a}=await l({sid:e,...q(ve)});n(a)?(fe.data=d(a.data)?a.data:[],fe.total=o(a.page)):(fe.data=[],fe.total=0)}finally{we.value=[],je(!1)}},Ce=async()=>{await ke(),await Re()};V((()=>ie.isRefresh),(e=>{e&&(ie.setRefresh(!1),-1!==ie.addRedisId&&ie.addRedisId!==ve.db_idx&&(ve.db_idx=ie.addRedisId,ie.setAddRedisId(-1)),Ce())}));return(async()=>{await ie.getRemote(),ie.install?(ie.remoteList.length>0&&(de.value=ie.remoteList[0].id),await ke(),await Re()):j()})(),(a,t)=>{const s=X,i=u,d=v,l=Z,n=e,o=ee,r=h,w=b,f=x,y=m,g=p,k=c,D=_,j=ae;return E(),H(K(I),null,{default:W((()=>[$(j,null,{default:W((()=>[P("div",oe,[P("div",re,[$(l,{class:"items-center"},{default:W((()=>[$(s,{type:"primary",onClick:pe},{default:W((()=>[z(A(a.$t("Database.redis.index_20")),1)])),_:1}),$(s,{onClick:K(R)},{default:W((()=>[z(A(a.$t("Database.index_4")),1)])),_:1},8,["onClick"]),$(s,{onClick:xe},{default:W((()=>[z(A(a.$t("Database.redis.index_21")),1)])),_:1}),$(i,{class:"mx-0!",vertical:""}),$(s,{onClick:he},{default:W((()=>[z(A(a.$t("Database.redis.index_22")),1)])),_:1}),K(ie).isInstallRedis?(E(),H(d,{key:0,"soft-name":"redis"})):F("",!0)])),_:1}),$(l,{class:"items-center"},{default:W((()=>[P("div",ue,[$(n,{name:"base-info",size:"14"}),P("span",_e,A(a.$t("Database.redis.index_23")),1)]),$(K(C),{value:K(de),"onUpdate:value":t[0]||(t[0]=e=>M(de)?de.value=e:null),all:!1,"store-key":"database-redis-page",onChange:ke},null,8,["value"])])),_:1})]),K(le).length>0?(E(),H(r,{key:0,value:K(ve).db_idx,"onUpdate:value":[t[1]||(t[1]=e=>K(ve).db_idx=e),Re]},{default:W((()=>[(E(!0),L(Y,null,N(K(le),(e=>(E(),H(o,{key:e.id,name:e.id,tab:"".concat(e.name,"(").concat(e.keynum,")")},null,8,["name","tab"])))),128))])),_:1},8,["value"])):F("",!0),$(k,null,{toolsLeft:W((()=>t[10]||(t[10]=[P("div",null,null,-1)]))),toolsRight:W((()=>[$(w,{value:K(ve).search,"onUpdate:value":t[2]||(t[2]=e=>K(ve).search=e),placeholder:a.$t("Database.redis.index_24"),onSearch:Re},null,8,["value","placeholder"])])),table:W((()=>[$(f,{"checked-row-keys":K(we),"onUpdate:checkedRowKeys":t[3]||(t[3]=e=>M(we)?we.value=e:null),"row-key":"name",loading:K(De),data:K(fe).data,columns:K(ye)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:W((()=>[$(y,{"checked-row-keys":K(we),"onUpdate:checkedRowKeys":t[4]||(t[4]=e=>M(we)?we.value=e:null),"row-key":"name",data:K(fe).data,options:ge},null,8,["checked-row-keys","data"])])),pageRight:W((()=>[$(g,{page:K(ve).p,"onUpdate:page":t[5]||(t[5]=e=>K(ve).p=e),"page-size":K(ve).limit,"onUpdate:pageSize":t[6]||(t[6]=e=>K(ve).limit=e),"store-key":"database-redis-page","item-count":K(fe).total,onRefresh:Re},null,8,["page","page-size","item-count"])])),_:1}),$(D,{show:K(ce).show,"onUpdate:show":t[7]||(t[7]=e=>K(ce).show=e),title:K(ce).title,width:420,"min-height":340,footer:!0,data:K(ce).data,component:K(J)},null,8,["show","title","data","component"]),$(D,{show:K(me).show,"onUpdate:show":t[8]||(t[8]=e=>K(me).show=e),title:K(me).title,width:920,"min-height":156,footer:!1,data:K(me).data,component:K(te)},null,8,["show","title","data","component"]),$(D,{show:K(be).show,"onUpdate:show":t[9]||(t[9]=e=>K(be).show=e),title:K(be).title,width:420,"min-height":240,footer:!0,data:K(be).data,component:K(se)},null,8,["show","title","data","component"])])])),_:1})])),_:1})}}});export{ce as default};
