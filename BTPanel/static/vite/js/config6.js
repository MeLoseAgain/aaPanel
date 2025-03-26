import{_ as a}from"./index95.js?v=1742891699271";import{_ as e}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271";import{b as t}from"./page_layout.js?v=1742891699271";import{b as i,f as l,u as n}from"./public.js?v=1742891699271";import{o as s,p as r,g as o}from"./setting.js?v=1742891699271";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{_ as u}from"./index99.js?v=1742891699271";import{d as f,O as c,r as g,j as _,R as m,S as d,P as v,a1 as y,U as b,V as S,c as W,a2 as h}from"./vue.js?v=1742891699271";import{cn as w,_ as x,ch as j,T as k}from"./naive.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";const $={class:"p-20px"},T={class:"w-100px mr-8px"},U={class:"w-220px"},R={class:"w-328px"},L={class:"w-100px"},B=f({__name:"form",props:{isEdit:{type:Boolean,default:!1}},emits:["refresh"],setup(a,{expose:e,emit:t}){const i=t,{t:l}=c(),n=g(null),r=_({sType:"url",uri:"",param:"",type:1}),o=[{label:l("Waf.Setting.config_75"),value:"url"},{label:l("Waf.Setting.config_76"),value:"regular"}],f=[{label:l("Waf.Setting.config_68"),value:1},{label:l("Waf.Setting.config_69"),value:2},{label:l("Waf.Setting.config_70"),value:3},{label:l("Waf.Setting.config_71"),value:4}],W={uri:{trigger:["blur","input"],validator:()=>""!==r.uri.trim()||new Error(l("Waf.Setting.config_55"))}};return e({onConfirm:async()=>{var a;await(null==(a=n.value)?void 0:a.validate()),await s({stype:r.sType,uri:r.uri,param:r.param.replace(/\n/g,",").split(","),type:r.type}),i("refresh")}}),(a,e)=>{const t=w,i=x,l=j,s=u,c=p;return m(),d("div",$,[v(c,{ref_key:"formRef",ref:n,model:S(r),rules:W},{default:y((()=>[v(l,{label:a.$t("Waf.Setting.config_73"),path:"uri"},{default:y((()=>[b("div",T,[v(t,{value:S(r).sType,"onUpdate:value":e[0]||(e[0]=a=>S(r).sType=a),options:o},null,8,["value"])]),b("div",U,[v(i,{value:S(r).uri,"onUpdate:value":e[1]||(e[1]=a=>S(r).uri=a),placeholder:"URL"},null,8,["value"])])])),_:1},8,["label"]),v(l,{label:a.$t("Waf.Setting.config_65"),path:"param"},{default:y((()=>[b("div",R,[v(s,{value:S(r).param,"onUpdate:value":e[2]||(e[2]=a=>S(r).param=a),rows:4,placeholder:a.$t("Waf.Setting.config_74")},null,8,["value","placeholder"])])])),_:1},8,["label"]),v(l,{label:a.$t("Waf.Setting.config_67"),path:"type","show-feedback":!1},{default:y((()=>[b("div",L,[v(t,{value:S(r).type,"onUpdate:value":e[3]||(e[3]=a=>S(r).type=a),"consistent-menu-width":!1,options:f},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),C={class:"p-20px"},E={class:"flex mb-16px"},P=f({__name:"config",setup(s){const{t:p}=c(),u=async()=>{var a;a={title:p("Waf.Setting.config_64"),data:{isEdit:!1}},n({title:a.title,width:550,footer:!0,data:{...a.data,onRefresh:()=>{w()}},component:B})},{table:f,columns:g,setLoading:_}=i([{key:"url",title:"URL",ellipsis:{tooltip:!0}},{key:"param",title:p("Waf.Setting.config_65"),width:120,ellipsis:{tooltip:!0},render:a=>a.param?a.param.join(", "):"--"},{key:"sType",title:p("Waf.Setting.config_66"),width:80,render:a=>"regular"==a.sType?p("Waf.Setting.config_72"):"URL"},{key:"type",title:p("Waf.Setting.config_67"),width:90,render:a=>{var e="";switch(a.type){case 1:e=p("Waf.Setting.config_68");break;case 2:e=p("Waf.Setting.config_69");break;case 3:e=p("Waf.Setting.config_70");break;case 4:e=p("Waf.Setting.config_71")}return e}},l({width:60,options:a=>[{label:p("Public.Btn.Del"),onClick:async()=>{await r({uri:a.url}),w()}}]})]),w=async()=>{try{_(!0);const{message:a}=await o();t(a)&&(f.data=Object.entries(a.url_cc_param).map((([a,e])=>({url:a,type:e.type,param:e.param,sType:e.stype}))))}finally{_(!1)}};return w(),(t,i)=>{const l=k,n=e,s=a;return m(),d("div",C,[b("div",E,[v(l,{type:"primary",onClick:u},{default:y((()=>[W(h(t.$t("Public.Btn.Add")),1)])),_:1})]),v(n,{"max-height":368,loading:S(f).loading,data:S(f).data,columns:S(g)},null,8,["loading","data","columns"]),v(s,{class:"mt-12px"},{default:y((()=>[b("li",null,h(t.$t("Waf.Setting.config_60")),1),b("li",null,h(t.$t("Waf.Setting.config_61")),1),b("li",null,h(t.$t("Waf.Setting.config_62")),1),b("li",null,h(t.$t("Waf.Setting.config_63")),1)])),_:1})])}}});export{P as default};
