import{_ as e}from"./index166.js?v=1741416570306";import{_ as a}from"./index104.js?v=1741416570306";import{b as s}from"./page_layout.js?v=1741416570306";import{c as l,s as t}from"./public.js?v=1741416570306";import{g as n,a as i}from"./index26.js?v=1741416570306";import{d as o,t as u,M as p,e as r,r as c,P as _,Q as m,N as v,S as d,ae as f}from"./vue.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang7.js?v=1741416570306";import"./index.vue_vue_type_script_setup_true_lang2.js?v=1741416570306";import"./index96.js?v=1741416570306";import"./index99.js?v=1741416570306";const g={class:"p-20px"},j=o({__name:"index",props:{app:{}},setup(o){const j=u(o,"app"),{t:x}=p(),y=r((()=>"initializing"===j.value.status)),b=c(y.value?"install":"run"),k=[{key:"run",show:!y.value,label:x("Docker.App.index_5")},{key:"install",label:x("Docker.App.index_6")}],h=c(""),{loading:w,setLoading:z}=l(),A=()=>{D(b.value)},D=e=>{switch(e){case"run":(async()=>{try{z(!0),h.value="";const{message:e}=await n({service_name:j.value.service_name,app_name:j.value.appname});s(e)&&(h.value=e.result)}finally{z(!1)}})();break;case"install":y.value?K():(async()=>{try{z(!0),h.value="";const{message:e}=await i({service_name:j.value.service_name});s(e)&&(h.value=e.result)}finally{z(!1)}})()}},{open:M,send:C,close:H}=t("/sock_shell",{immediate:!1,onMessage:(e,a)=>{const{data:s}=a;h.value+=a.data,(s.includes("bt_successful")||s.includes("bt_failed"))&&H()}}),K=()=>{const e=j.value.appinfo.filter((e=>"installed_log"===e.fieldKey));e.length>0&&(h.value="",H(),M(),C("tail -f ".concat(e[0].fieldValue)))};return A(),(s,l)=>{const t=a,n=e;return _(),m("div",g,[v(t,{value:d(b),"onUpdate:value":[l[0]||(l[0]=e=>f(b)?b.value=e:null),D],options:k,onClick:A},null,8,["value"]),v(n,{class:"h-468px",lang:"log","font-size":12,loading:d(w),content:d(h)},null,8,["loading","content"])])}}});export{j as default};
