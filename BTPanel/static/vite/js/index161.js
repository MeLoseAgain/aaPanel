import{_ as a}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{aR as e,er as l}from"./page_layout.js?v=1741416570306";import{d as s,M as o,r as t,j as r,P as p,Q as u,N as n,$ as m,R as i,S as c,a7 as _}from"./vue.js?v=1741416570306";import{ch as d,cb as v,_ as f}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";import"./public.js?v=1741416570306";const g={class:"px-20px pt-24px pb-8px"},b={class:"w-240px"},h={class:"w-240px"},x=s({__name:"index",props:{row:{},list:{default:()=>[]}},setup(s,{expose:x}){const j=s,{t:w}=o(),k=e(),D=t(null),y=r({name:"",tag:""}),I=t([]),L={tag:{trigger:["blur","input"],validator:()=>""===y.tag.trim()?new Error(w("Docker.LocalImage.push_4")):!!y.tag.includes(":")||new Error(w("Docker.LocalImage.push_5"))}};return(()=>{const a=j.list.filter((a=>"Docker public repository"!==a.name));I.value=a.map((a=>({label:a.name,value:a.name}))),y.name=a[0].name})(),x({onConfirm:async()=>{var a;await(null==(a=D.value)?void 0:a.validate()),await l({..._(y),id:j.row.id}),k.setRefresh(!0)}}),(e,l)=>{const s=d,o=v,t=f,r=a;return p(),u("div",g,[n(r,{ref_key:"formRef",ref:D,model:c(y),rules:L},{default:m((()=>[n(o,{label:e.$t("Docker.LocalImage.push_1")},{default:m((()=>[i("div",b,[n(s,{value:c(y).name,"onUpdate:value":l[0]||(l[0]=a=>c(y).name=a),options:c(I)},null,8,["value","options"])])])),_:1},8,["label"]),n(o,{label:e.$t("Docker.LocalImage.push_2"),path:"tag"},{default:m((()=>[i("div",h,[n(t,{value:c(y).tag,"onUpdate:value":l[1]||(l[1]=a=>c(y).tag=a),placeholder:e.$t("Docker.LocalImage.push_3")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{x as default};
