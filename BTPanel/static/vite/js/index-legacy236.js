System.register(["./index-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./index-legacy84.js?v=1742891699271","./public-legacy.js?v=1742891699271","./index-legacy95.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1742891699271","./index-legacy123.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1742891699271","./site-legacy4.js?v=1742891699271","./soft-legacy.js?v=1742891699271","./site-legacy.js?v=1742891699271","./index-legacy226.js?v=1742891699271","./index-legacy99.js?v=1742891699271","./index-legacy104.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1742891699271","./index-legacy96.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy15.js?v=1742891699271","./theme-chrome-legacy.js?v=1742891699271","./file-legacy.js?v=1742891699271","./refersh-legacy.js?v=1742891699271","./php-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy18.js?v=1742891699271","./index-legacy103.js?v=1742891699271"],(function(e,t){"use strict";var l,a,n,i,s,d,o,u,c,r,_,p,y,g,h,m,x,w,v,f,k,b,j,S,P,W,R,C,$,U,T,z,L,B,I,O,q,D,H,K,A,E,G,J,M,N,V,F;return{setters:[e=>{l=e._},e=>{a=e._},e=>{n=e._},e=>{i=e._},e=>{s=e._},e=>{d=e.I,o=e.m,u=e.dd,c=e.b,r=e.l,_=e.k},e=>{p=e.n,y=e.p,g=e.q,h=e.s,m=e.r,x=e.t,w=e.u,v=e.v,f=e.x,k=e.y,b=e.z},e=>{j=e.b,S=e.c,P=e.G,W=e.f,R=e.d,C=e.a},e=>{$=e._},e=>{U=e._},e=>{T=e.d,z=e.O,L=e.r,B=e.j,I=e.R,O=e.S,q=e.P,D=e.a1,H=e.U,K=e.V,A=e.a2,E=e.af,G=e.ay,J=e.c,M=e.M},e=>{N=e._,V=e.ch,F=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent="[data-v-0607cdd4] .custom-table thead th{background-color:#fff}\n",document.head.appendChild(t);const Q={class:"p-20px"},X={class:"w-280px"},Y=T({__name:"index",props:{data:{}},setup(e,{expose:t}){const{t:l}=z(),a=e,{getList:n}=a.data,i=L(null),s=B({name:""}),d={name:{required:!0,message:l("Security.Conf.Index_28"),trigger:["blur","input"]}};return t({onConfirm:async({hide:e})=>{await(i.value?.validate()),await p({...s}),n?.(),e()}}),(e,t)=>{const l=N,a=V,n=U,o=$;return I(),O("div",Q,[q(n,{ref_key:"formRef",ref:i,model:K(s),rules:d},{default:D((()=>[q(a,{label:e.$t("Site.TableRow.index_2"),path:"name"},{default:D((()=>[H("div",X,[q(l,{type:"text",value:K(s).name,"onUpdate:value":t[0]||(t[0]=e=>K(s).name=e),placeholder:e.$t("WP.Sets.index_11")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"]),q(o,{class:"mt-4px"},{default:D((()=>[H("li",null,A(e.$t("WP.Sets.index_12")),1)])),_:1})])}}}),Z={class:"p-20px"},ee=T({__name:"index",props:{data:{}},setup(e,{expose:t}){const{t:l}=z(),a=e,{id:n}=a.data,{keys:s,table:u,columns:c}=j([{type:"selection",width:40},{key:"name",title:l("Site.TableRow.index_2")}]),{loading:r,setLoading:_}=S();return(async()=>{try{_(!0);const{message:e}=await y();d(e)&&(u.data=e)}finally{s.value=[],_(!1)}})(),t({onConfirm:async()=>{if(!s.value.length)return o.error(l("WP.Sets.index_18")),!1;const e=s.value.join(",");await g({set_id:n,site_ids:e})}}),(e,t)=>{const l=i,a=$;return I(),O("div",Z,[q(l,{"checked-row-keys":K(s),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>E(s)?s.value=e:null),"row-key":"id",loading:K(r),data:K(u).data,"max-height":220,columns:K(c)},null,8,["checked-row-keys","loading","data","columns"]),q(a,{class:"mt-16px"},{default:D((()=>[H("li",null,A(e.$t("WP.Sets.index_17")),1),H("li",null,A(e.$t("WP.Sets.index_19")),1)])),_:1})])}}}),te={class:"p-20px"},le=_(T({__name:"index",props:{data:{}},setup(e){const{t:t}=z(),l=L(),n=e,{id:_}=n.data,{type:p}=n.data,{getList:y}=n.data,{keys:g,table:k,columns:b}=j([{key:"title",title:t("Site.TableRow.index_2"),width:"70%"},P({key:"state",title:t("WP.TableRow.index_9"),minWidth:100,onClick:async(e,t)=>{await h({item_ids:t.id,state:e?1:0,type:p}),Y()}}),W({width:80,options:e=>[{label:t("Public.Btn.Del"),onClick:async()=>{await m({item_ids:e.id,type:p}),Y(),y?.()}}]})]),{keys:R,table:C,columns:U}=j([{type:"selection",width:40,disabled:e=>e.is_in_set},{key:"name",title:t("Site.TableRow.index_2"),width:"60%"},{key:"title",title:t("WP.index_19"),render:e=>q(u,{size:"small",readonly:!0,color:"#4fb233",value:e.rating/20},null)}]),T=B({p:1,p_size:999,keyword:"",set_id:_}),N=async()=>{if(!R.value.length)return o.error(t("WP.Sets.index_14")),void l.value?.focus();const e=C.data.filter((e=>R.value.includes(e.slug))).map((e=>({slug:e.slug,title:e.name,description:1===p?e.short_description:e.description})));await w({set_id:_,items:JSON.stringify(e),type:p}),Y(),y?.()},V=async()=>{if(T.keyword)try{const{message:e}=1===p?await v(M(T),!0):await f(M(T),!0);c(e)&&(C.total=e.total,d(e.list)?(C.data=e.list,C.data.length||o.error(t("WP.Sets.index_16"))):(C.data=[],C.total=0))}finally{R.value=[]}else o.error(t("WP.Sets.index_15"))},{loading:Q,setLoading:X}=S(),Y=async()=>{try{X(!0);const{message:e}=await x({set_id:_,type:p});d(e)&&(k.data=e)}finally{g.value=[],X(!1)}};return Y(),(e,t)=>{const n=F,d=s,o=i,u=a,c=r,_=$;return I(),O("div",te,[q(u,null,G({toolsLeft:D((()=>[q(n,{type:"primary",onClick:N},{default:D((()=>[J(A(e.$t("Public.Btn.Add")),1)])),_:1})])),toolsRight:D((()=>[q(d,{ref_key:"seachRef",ref:l,value:K(T).keyword,"onUpdate:value":t[0]||(t[0]=e=>K(T).keyword=e),placeholder:e.$t("Public.Btn.Search"),onSearch:V},null,8,["value","placeholder"])])),_:2},[K(C).data.length?{name:"table",fn:D((()=>[q(o,{class:"custom-table",bordered:!1,"checked-row-keys":K(R),"onUpdate:checkedRowKeys":t[1]||(t[1]=e=>E(R)?R.value=e:null),"row-key":"slug","max-height":150,data:K(C).data,columns:K(U)},null,8,["checked-row-keys","data","columns"])])),key:"0"}:void 0]),1024),q(c,{class:"my-20px!"}),q(o,{loading:K(Q),data:K(k).data,columns:K(b),"max-height":150},null,8,["loading","data","columns"]),q(_,{class:"mt-16px"},{default:D((()=>[H("li",null,A(e.$t("WP.Sets.index_13")),1)])),_:1})])}}}),[["__scopeId","data-v-0607cdd4"]]),ae={class:"p-20px"};e("default",T({__name:"index",setup(e,{expose:t}){const{t:d}=z(),o=R(d("WP.Sets.index_2")),u=B({p:1,p_size:10,keyword:""}),r=()=>{f.show=!0},_=()=>{u.p=1,w()},p=(e,t,l)=>{v.title=t,v.data.id=e.id,v.data.type=l,v.show=!0},{keys:y,table:g,columns:h}=j([{key:"name",title:d("Site.TableRow.index_2"),width:"40%",ellipsis:{tooltip:{width:"trigger"}}},W({title:d("WP.Sets.index_3"),align:"center",options:e=>[{label:d("WP.Sets.index_4",[e.plugins.length]),onClick:()=>{p(e,d("WP.Sets.index_5"),1)}}]}),W({title:d("WP.Sets.index_6"),align:"center",options:e=>[{label:d("WP.Sets.index_7",[e.themes.length]),onClick:()=>{p(e,d("WP.Sets.index_8"),2)}}]}),W({width:100,align:"center",options:e=>[{label:d("WP.TableRow.index_13"),disabled:!e.plugins.length&&!e.themes.length,onClick:()=>{o.data.id=e.id,o.show=!0}},{label:d("Public.Btn.Del"),onClick:()=>{C({title:`${d("Site.TableOP.index_6")} [${e.name}]`,content:d("WP.Sets.index_9"),onConfirm:async({hide:t})=>{await k({set_id:e.id}),w(),t()}})}}]})]),{loading:m,setLoading:x}=S(),w=async()=>{try{x(!0);const{message:e}=await b(M(u));c(e)&&(g.data=e.list,g.total=e.total)}finally{y.value=[],x(!1)}},v=R(d("WP.Sets.index_5"),{getList:w}),f=R(d("WP.Sets.index_10"),{getList:w});return w(),t({init:w}),(e,t)=>{const d=F,c=s,p=i,y=n,x=a,k=l;return I(),O("div",ae,[q(x,null,{toolsLeft:D((()=>[q(d,{type:"primary",onClick:r},{default:D((()=>[J(A(e.$t("WP.Sets.index_1")),1)])),_:1})])),toolsRight:D((()=>[q(c,{value:K(u).keyword,"onUpdate:value":t[0]||(t[0]=e=>K(u).keyword=e),placeholder:e.$t("Security.History.Index_14"),onSearch:_},null,8,["value","placeholder"])])),table:D((()=>[q(p,{"max-height":250,loading:K(m),data:K(g).data,columns:K(h)},null,8,["loading","data","columns"])])),pageRight:D((()=>[q(y,{page:K(u).p,"onUpdate:page":t[1]||(t[1]=e=>K(u).p=e),"page-size":K(u).p_size,"onUpdate:pageSize":t[2]||(t[2]=e=>K(u).p_size=e),"item-count":K(g).total,onRefresh:w},null,8,["page","page-size","item-count"])])),_:1}),q(k,{show:K(f).show,"onUpdate:show":t[3]||(t[3]=e=>K(f).show=e),title:K(f).title,data:K(f).data,width:480,footer:!0,component:Y},null,8,["show","title","data"]),q(k,{show:K(v).show,"onUpdate:show":t[4]||(t[4]=e=>K(v).show=e),title:K(v).title,data:K(v).data,width:600,"min-height":350,footer:!1,component:le},null,8,["show","title","data"]),q(k,{show:K(o).show,"onUpdate:show":t[5]||(t[5]=e=>K(o).show=e),title:K(o).title,data:K(o).data,width:480,"min-height":350,footer:!0,"confirm-text":e.$t("WP.TableRow.index_13"),component:ee},null,8,["show","title","data","confirm-text"])])}}}))}}}));
