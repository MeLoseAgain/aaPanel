const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index239.js?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang.js?v=1742891699271","js/vue.js?v=1742891699271","js/__commonjsHelpers__.js?v=1742891699271","js/naive.js?v=1742891699271","js/common.js?v=1742891699271","js/index95.js?v=1742891699271","js/page_layout.js?v=1742891699271","js/public.js?v=1742891699271","css/public.css?v=1742891699271","css/page_layout.css?v=1742891699271","js/index.js?v=1742891699271","css/index93.css?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang4.js?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang8.js?v=1742891699271","css/index19.css?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang5.js?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang12.js?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang7.js?v=1742891699271","js/index.vue_vue_type_script_setup_true_lang18.js?v=1742891699271","js/site.js?v=1742891699271","js/index238.js?v=1742891699271"])))=>i.map(i=>d[i]);
import{d as e,j as t,a,bh as l,k as n,W as o,b as i}from"./page_layout.js?v=1742891699271";import{_ as s}from"./index.js?v=1742891699271";import{_ as r}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1742891699271";import{_}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1742891699271";import{_ as d}from"./index.vue_vue_type_script_setup_true_lang12.js?v=1742891699271";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang7.js?v=1742891699271";import{u as c,d as m,b as f,f as g,a as v,c as w}from"./public.js?v=1742891699271";import{P as h,Y as b,d as x,r as k,j as y,n as P,R as S,S as j,a1 as R,V as C,c as L,a2 as W,U,af as O,O as $,M as q,a0 as z}from"./vue.js?v=1742891699271";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang18.js?v=1742891699271";import{ch as B,bU as D,ck as M,T as E}from"./naive.js?v=1742891699271";const{t:H}=e.global,I=e=>{const{row:a}=e;return h(t,null,{default:()=>[a.site_url]})},A=e=>{const{row:a}=e;return h(t,null,{default:()=>[a.env_info.wordpress_version?a.env_info.wordpress_version:"--"]})},K=e=>{const{row:a}=e;return h(t,null,{default:()=>[a.env_info.php_version?a.env_info.php_version:"--"]})},Y=e=>{const{row:a}=e;return h(t,null,{default:()=>[a.env_info.plugin_version?a.env_info.plugin_version:"--"]})};const{t:F}=e.global,G=e=>l.post("/site?action=wp_remote_add",e,{requestOptions:{loading:F("WP.api.tamper_7"),successMessage:!0}}),J=e=>l.post("/site?action=wp_remote_add_manually",e,{requestOptions:{loading:F("WP.api.tamper_7"),successMessage:!0}}),N=(e,t=!0)=>l.post("/site?action=wp_remote_remove",e,{requestOptions:{loading:t?F("WP.api.tamper_3"):"",successMessage:t}}),Q={class:"p-20px"},X=["title"],Z=n(x({__name:"index",props:{data:{}},setup(e){const a=e,{row:l}=a.data,n=k(null),o=y({Login_url:"",wp:"",php:"",sql:"",worker:"",username:"",language:"en"});return P((()=>{o.Login_url=l.login_url,o.wp=l.env_info.wordpress_version,o.php=l.env_info.php_version,o.worker=l.env_info.plugin_version,o.username=l.username,o.language=l.env_info.locale,o.sql=l.env_info.mysql_version})),(e,a)=>{const l=t,i=B,s=D,r=T;return S(),j("div",Q,[h(r,{"label-width":"160px",modelValue:C(o),"onUpdate:modelValue":a[1]||(a[1]=e=>O(o)?o.value=e:null),ref_key:"formRef",ref:n},{default:R((()=>[h(i,{label:e.$t("WP.Config.index_1")},{default:R((()=>[h(l,{href:C(o).Login_url,target:"_blank"},{default:R((()=>[L(W(C(o).Login_url),1)])),_:1},8,["href"])])),_:1},8,["label"]),h(s,null,{default:R((()=>[h(i,{label:e.$t("Site.Lable.index_23")},{default:R((()=>[h(l,null,{default:R((()=>[L(W(C(o).wp),1)])),_:1})])),_:1},8,["label"]),h(i,{label:e.$t("WP.Remote.index_17")},{default:R((()=>[h(l,null,{default:R((()=>[L(W(C(o).worker),1)])),_:1})])),_:1},8,["label"])])),_:1}),h(s,null,{default:R((()=>[h(i,{label:e.$t("Site.PHP.add_site_21")},{default:R((()=>[h(l,null,{default:R((()=>[L(W(C(o).php),1)])),_:1})])),_:1},8,["label"]),h(i,{label:e.$t("WP.Remote.index_18")},{default:R((()=>[h(l,null,{default:R((()=>[L(W(C(o).sql),1)])),_:1})])),_:1},8,["label"])])),_:1}),h(i,{label:e.$t("Site.Lable.index_24")},{default:R((()=>[U("div",{class:"text",title:C(o).username},W(C(o).username),9,X)])),_:1},8,["label"]),h(i,{label:e.$t("WP.Label.index_3")},{default:R((()=>[h(V,{class:"language",value:C(o).language,"onUpdate:value":a[0]||(a[0]=e=>C(o).language=e),disabled:""},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-517d771e"]]),ee=x({__name:"index",setup(e){const t=b((()=>a((()=>import("./index239.js?v=1742891699271")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])))),{t:n}=$(),x=()=>{Q.show=!0},k=m(),P=e=>{k.title="".concat(n("Site.Cert.index_58")," [").concat(e.site_url,"] -- ").concat(n("Site.Cert.index_59")," [").concat(o(e.create_time),"]"),k.data.row=e,k.show=!0},{keys:j,table:U,columns:T}=f([{type:"selection",width:40},{key:"name",title:n("Site.TableRow.index_1"),ellipsis:{tooltip:!0},render:e=>h(I,{row:e,onClick:()=>{P(e)}},null)},{key:"name",title:n("Site.Lable.index_23"),align:"center",render:e=>h(A,{row:e,onClick:()=>{P(e)}},null)},{key:"name",title:n("WP.Remote.index_17"),align:"center",render:e=>h(Y,{row:e,onClick:()=>{P(e)}},null)},{key:"name",title:n("Site.PHP.add_site_21"),align:"center",render:e=>h(K,{row:e,onClick:()=>{P(e)}},null)},{key:"create_time",title:n("Docker.Container.index_9"),align:"center",render:e=>o(e.create_time)},g({title:n("Site.TableRow.index_30"),width:200,options:e=>[{label:n("Site.TableOP.index_1"),onClick:()=>{var t;t=e,c({title:H("WP.index_21"),width:420,minHeight:180,footer:!1,data:t,component:b((()=>a((()=>import("./index238.js?v=1742891699271")),__vite__mapDeps([22,6,7,2,3,4,5,8,9,10]))))})}},{label:n("Public.Btn.Del"),onClick:()=>{v({title:"".concat(n("Public.Btn.Delete")," ").concat(e.site_url),content:n("WP.Remote.index_19"),onConfirm:async()=>{await N({remote_id:e.id}),J()}})}}]})]),V=[{key:"delete",type:"confirm",label:n("Site.Batch.index_10"),confirm:{title:n("Crontab.Planned.index_16",[n("Site.Batch.index_10")]),desc:n("Crontab.Planned.index_17",[n("Site.Batch.index_10")]),columns:[T.value[1]],api:e=>N({remote_id:e.id},!1),done:()=>{J()}}}],{loading:B,setLoading:D}=w(!0),F=y({p:1,p_size:10,keyword:""}),G=()=>{F.p=1,J()},J=async()=>{try{D(!0);const{message:t}=await(e=q(F),l.post("/site?action=wp_remote_sites",e));i(t)?(U.data=t.list,U.total=t.total):(U.data=[],U.total=0)}finally{j.value=[],D(!1)}var e},Q=m(n("Site.PHP.index_4"),{getList:J});return J(),(e,a)=>{const l=E,n=p,o=u,i=d,c=_,m=r,f=s,g=M;return S(),z(g,null,{default:R((()=>[h(m,{class:"p-16px",feedback:!0},{toolsLeft:R((()=>[h(l,{type:"primary",onClick:x},{default:R((()=>[L(W(e.$t("WP.index_5")),1)])),_:1})])),toolsRight:R((()=>[h(n,{value:C(F).keyword,"onUpdate:value":a[0]||(a[0]=e=>C(F).keyword=e),placeholder:e.$t("WP.index_4"),onSearch:G},null,8,["value","placeholder"])])),table:R((()=>[h(o,{"checked-row-keys":C(j),"onUpdate:checkedRowKeys":a[1]||(a[1]=e=>O(j)?j.value=e:null),loading:C(B),data:C(U).data,columns:C(T)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:R((()=>[h(i,{"checked-row-keys":C(j),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>O(j)?j.value=e:null),data:C(U).data,options:V},null,8,["checked-row-keys","data"])])),pageRight:R((()=>[h(c,{page:C(F).p,"onUpdate:page":a[3]||(a[3]=e=>C(F).p=e),"page-size":C(F).p_size,"onUpdate:pageSize":a[4]||(a[4]=e=>C(F).p_size=e),"item-count":C(U).total,"store-key":"wp-toolkit",onRefresh:J},null,8,["page","page-size","item-count"])])),_:1}),h(f,{show:C(Q).show,"onUpdate:show":a[5]||(a[5]=e=>C(Q).show=e),title:C(Q).title,data:C(Q).data,width:550,"min-height":250,footer:!0,component:C(t)},null,8,["show","title","data","component"]),h(f,{show:C(k).show,"onUpdate:show":a[6]||(a[6]=e=>C(k).show=e),title:C(k).title,data:C(k).data,width:580,"min-height":250,component:Z},null,8,["show","title","data"])])),_:1})}}}),te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{J as a,G as c,te as i};
