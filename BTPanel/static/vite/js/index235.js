import{c as t,a as e,e as s}from"./public.js?v=1742891699271";import{w as i,l as a}from"./index84.js?v=1742891699271";import{u as p,b as r,l as _}from"./page_layout.js?v=1742891699271";import{d as n,O as u,_ as o,r as d,j as m,R as l,S as x,P as c,a1 as j,U as v,a2 as y,V as g,a0 as f,ap as P,c as h}from"./vue.js?v=1742891699271";import{bR as W,cq as b,T as w,bU as $}from"./naive.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./index123.js?v=1742891699271";import"./index.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang12.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang7.js?v=1742891699271";import"./site4.js?v=1742891699271";import"./soft.js?v=1742891699271";import"./site.js?v=1742891699271";import"./index226.js?v=1742891699271";import"./index99.js?v=1742891699271";import"./index104.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang10.js?v=1742891699271";import"./index96.js?v=1742891699271";import"./index95.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang15.js?v=1742891699271";import"./theme-chrome.js?v=1742891699271";import"./file.js?v=1742891699271";import"./refersh.js?v=1742891699271";import"./php.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang18.js?v=1742891699271";import"./index103.js?v=1742891699271";const k={class:"p-20px"},C={class:"text-14px leading-22px"},H={class:"text-14px leading-22px"},L=["innerHTML"],T=n({__name:"index",props:{data:{}},setup(n){const{t:T}=u(),M=n,R=p(),{isPro:U}=o(R),{site:q}=M.data,{loading:O,setLoading:S}=t(!1),V=d(!1),z=m({status:!0,text:""}),A=()=>{e({title:T("WP.index_35"),content:T("WP.index_36"),onConfirm:async({hide:t})=>{if(!U.value)return void s({source:214});z.text="",V.value=!0,t();const{message:e}=await i({s_id:q.id});r(e)&&(z.text=e.result,z.status=!0,V.value=!1)}})},B=async()=>{z.text="",S(!0);try{const t=await a({s_id:q.id});z.status=!0,r(t.message)&&(z.text=t.message.result)}catch(t){z.status=!1,z.text=W(t,"message.result","")}finally{S(!1)}};return(t,e)=>{const s=b,i=_,a=w,p=$;return l(),x("div",k,[c(s,{type:"default",class:"mb-16px","show-icon":!1},{default:j((()=>[v("div",C,y(t.$t("WP.index_33")),1),v("div",H,y(t.$t("WP.index_37")),1)])),_:1}),g(z).text?(l(),f(s,{key:0,type:g(z).status?"success":"error"},{default:j((()=>[v("span",{innerHTML:g(z).text},null,8,L)])),_:1},8,["type"])):P("",!0),c(i,{class:"my-16px!"}),c(p,{class:"justify-evenly!"},{default:j((()=>[c(a,{type:"primary",onClick:B,loading:g(O)},{default:j((()=>[h(y(t.$t("WP.index_34")),1)])),_:1},8,["loading"]),c(a,{type:"info",onClick:A,loading:g(V)},{default:j((()=>[h(y(t.$t("WP.index_35")),1)])),_:1},8,["loading"])])),_:1})])}}});export{T as default};
