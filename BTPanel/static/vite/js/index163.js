import{_ as e}from"./index104.js?v=1741416570306";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{d as o,M as l,r as s,j as t,P as r,Q as n,N as p,$ as m,R as d,S as c,k as i,v as u,x as _,ae as v}from"./vue.js?v=1741416570306";import{m as f}from"./page_layout.js?v=1741416570306";import{u as x}from"./public.js?v=1741416570306";import{_ as k}from"./index.vue_vue_type_script_setup_true_lang15.js?v=1741416570306";import{_ as h}from"./index166.js?v=1741416570306";import{_ as w,cb as b,a2 as C}from"./naive.js?v=1741416570306";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang24.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./common.js?v=1741416570306";import"./theme-chrome.js?v=1741416570306";import"./file.js?v=1741416570306";import"./index99.js?v=1741416570306";const y={class:"w-420px"},g={class:"w-420px"},N={class:"w-420px"},D={class:"w-420px"},$={class:"w-420px"},U=o({__name:"index",props:{send:{},refresh:{}},setup(e,{expose:o}){const _=e,{t:v}=l(),j=s(null),U=t({name:"",data:"",env:"",save:!1,template:"",remark:""}),R={name:{trigger:["input","blur"],validator:()=>!!U.name||new Error(v("Docker.ComposeNew.index_43"))}},z=e=>{const a=s("");_.send({mod_name:"docker",sub_mod_name:"com",def_name:"create",ws_callback:"create",project_name:U.name,config:U.data,env:U.env,remark:U.remark,add_template:U.save?1:0,...U.save?{template_name:U.template}:{}},{action:"create",callback:(o,l)=>{e();const s=JSON.parse(l.data);a.value+=s.msg,-1===s.data&&(s.status?(_.refresh(),f.success(s.msg)):f.error(s.msg))}}),x({title:v("Docker.ComposeNew.index_50"),width:640,content:()=>p(h,{class:"h-440px",lang:"log","pre-style":{fontSize:"12px"},content:a.value},null)})};return o({onConfirm:async({hide:e})=>{var a;return await(null==(a=j.value)?void 0:a.validate()),z(e),!1}}),(e,o)=>{const l=w,s=b,t=C,_=a;return r(),n("div",null,[p(_,{ref_key:"formRef",ref:j,model:c(U),rules:R},{default:m((()=>[p(s,{label:e.$t("Docker.ComposeNew.index_42"),path:"name"},{default:m((()=>[d("div",y,[p(l,{value:c(U).name,"onUpdate:value":o[0]||(o[0]=e=>c(U).name=e),placeholder:e.$t("Docker.ComposeNew.index_43")},null,8,["value","placeholder"])])])),_:1},8,["label"]),p(s,{label:e.$t("Docker.ComposeNew.index_44"),path:"data"},{default:m((()=>[d("div",g,[p(k,{value:c(U).data,"onUpdate:value":o[1]||(o[1]=e=>c(U).data=e),lang:"yaml",height:"240","show-tips":!1},null,8,["value"])])])),_:1},8,["label"]),p(s,{label:e.$t("Docker.ComposeNew.index_45")},{default:m((()=>[d("div",N,[p(k,{value:c(U).env,"onUpdate:value":o[2]||(o[2]=e=>c(U).env=e),height:"120","show-tips":!1},null,8,["value"])])])),_:1},8,["label"]),p(s,{label:e.$t("Docker.ComposeNew.index_46")},{default:m((()=>[p(t,{checked:c(U).save,"onUpdate:checked":o[3]||(o[3]=e=>c(U).save=e)},null,8,["checked"])])),_:1},8,["label"]),i(p(s,{label:e.$t("Docker.ComposeNew.index_47"),path:"name"},{default:m((()=>[d("div",D,[p(l,{value:c(U).template,"onUpdate:value":o[4]||(o[4]=e=>c(U).template=e),placeholder:e.$t("Docker.ComposeNew.index_48")},null,8,["value","placeholder"])])])),_:1},8,["label"]),[[u,c(U).save]]),p(s,{label:e.$t("Docker.ComposeNew.index_49"),path:"remark"},{default:m((()=>[d("div",$,[p(l,{checked:c(U).remark,"onUpdate:checked":o[5]||(o[5]=e=>c(U).remark=e),placeholder:e.$t("Docker.ComposeNew.index_49")},null,8,["checked","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),R=o({__name:"index",props:{refresh:{}},setup(e,{expose:a}){const o=e,l=s();return a({onConfirm:async()=>{await l.value.onConfirm(),o.refresh()}}),(e,a)=>(r(),n("div",null,[p(j,{ref_key:"formRef",ref:l,class:"pt-0px"},null,512)]))}}),z={class:"p-16px"},S=o({__name:"index",props:{send:{},refresh:{}},setup(a,{expose:o}){const t=a,{t:m}=l(),d=s("common"),i=s(),u=_([{key:"common",label:m("Docker.ComposeNew.index_40"),isLazy:!0,data:t,component:U},{key:"template",label:m("Docker.ComposeNew.index_41"),isLazy:!0,data:t,component:R}]);return o({onConfirm:async e=>{await i.value.onConfirm(e)}}),(a,o)=>{const l=e;return r(),n("div",z,[p(l,{ref_key:"tabsRef",ref:i,value:c(d),"onUpdate:value":o[0]||(o[0]=e=>v(d)?d.value=e:null),class:"max-h-640px",options:c(u)},null,8,["value","options"])])}}});export{S as default};
