import{_ as t}from"./index.js?v=1741416570306";import{_ as e}from"./index95.js?v=1741416570306";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1741416570306";import{_ as s}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{M as o,N as i,d as l,Y as n,j as d,e as _,P as r,Q as p,$ as u,c as m,a0 as c,S as b,ao as y,R as x}from"./vue.js?v=1741416570306";import{aA as f,d6 as w,d7 as v}from"./page_layout.js?v=1741416570306";import{n as D,b as h,f as j,a as g,c as k}from"./public.js?v=1741416570306";import{_ as C}from"./form.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{T as R}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import"./index240.js?v=1741416570306";function $(){const{t:t}=o();return{key:"db_password",title:t("Database.index_14"),width:160,render:t=>i(D,{value:t.db_password},null)}}function E(){const{t:t}=o();return{key:"ps",title:t("Database.tools.index_62")}}const q={class:"p-20px"},B={key:0},L=l({__name:"index",setup(l){const{t:D}=o(),L=f(),{type:P,remoteList:A}=n(L),G=d({show:!1,title:D("Database.tools.index_41"),data:{row:void 0,isEdit:!1}}),H=()=>{G.data.row=void 0,G.data.isEdit=!1,G.title=D("Database.tools.index_41"),G.show=!0},I=_((()=>A.value.filter((t=>0!==t.id)))),{columns:M}=h([{key:"db_host",title:D("Database.tools.index_42")},{key:"db_port",title:D("Docker.Container.create.index_7")},{key:"db_type",title:D("Database.tools.index_59")},{key:"db_user",title:D("Database.index_13")},$(),E(),j({width:"mysql"===L.type?150:100,options:t=>[{label:"Get DB",show:"mysql"===t.db_type,onClick:()=>{(async t=>{await w(P.value,{sid:t.id}),L.setRefresh(!0)})(t)}},{label:D("Public.Btn.Edit"),onClick:()=>{(t=>{G.data.row=t,G.data.isEdit=!0,G.title=D("Database.tools.index_58"),G.show=!0})(t)}},{label:D("Public.Btn.Del"),onClick:()=>{g({title:"".concat(D("Database.tools.index_60")," [").concat(t.db_host,"]"),content:D("Database.tools.index_61"),onConfirm:async({hide:e})=>{await(async t=>{await v(P.value,{id:t.id}),L.getRemote(),L.setRefresh(!0),L.setDelRemoteId(t.id)})(t),e()}})}}]})]),{loading:N,setLoading:Q}=k();return(async()=>{try{Q(!0),L.getRemote()}finally{Q(!1)}})(),(o,l)=>{const n=R,d=s,_=a,f=e,w=t;return r(),p("div",q,[i(_,null,{toolsLeft:u((()=>[i(n,{type:"primary",onClick:H},{default:u((()=>[m(c(o.$t("Database.tools.index_41")),1)])),_:1})])),table:u((()=>[i(d,{loading:b(N),columns:b(M),data:b(I)},null,8,["loading","columns","data"])])),_:1}),i(f,{class:"mt-24px"},{default:u((()=>["mysql"===b(P)?(r(),p("li",B,c(o.$t("Database.tools.index_49")),1)):y("",!0),x("li",null,c(o.$t("Database.tools.index_50")),1),x("li",null,c(o.$t("Database.tools.index_51")),1),x("li",null,c(o.$t("Database.tools.index_52")),1)])),_:1}),i(w,{show:b(G).show,"onUpdate:show":l[0]||(l[0]=t=>b(G).show=t),title:b(G).title,width:460,footer:!0,data:b(G).data,component:C},null,8,["show","title","data"])])}}});export{L as default};
