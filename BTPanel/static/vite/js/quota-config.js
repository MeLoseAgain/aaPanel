import{_ as a}from"./index95.js?v=1742891699271";import{_ as e}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{h as t}from"./page_layout.js?v=1742891699271";import{m as s,a as o}from"./config3.js?v=1742891699271";import{bR as l,_ as n,cr as i,y as u,ch as p,bY as d}from"./naive.js?v=1742891699271";import{d as m,j as r,r as _,R as c,S as f,P as x,a1 as b,U as v,V as j,c as z,a2 as w,ap as y}from"./vue.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./public.js?v=1742891699271";const h={class:"px-20px py-24px"},C={class:"w-160px"},Q={class:"w-160px"},$={class:"text-error"},g={key:0},q=m({__name:"quota-config",props:{data:{}},setup(m,{expose:q}){const U=m,{type:k,info:B,callback:M}=U.data,R=r({used:"0",size:0}),H=_("MB");return(()=>{const a=l(B,"quota.used",0);if(a>0){const e=t(a).split(" ");R.used=e[0],H.value=e[1]}R.size=l(B,"quota.size",0)})(),q({onConfirm:async({hide:a})=>{"site"!==k&&"ftp"!==k||await s({size:R.size,quota_type:k,path:l(B,"path","")}),"database"===k&&await o({size:R.size,db_name:l(B,"name","")}),null==M||M(),a()}}),(t,s)=>{const o=n,l=i,m=u,r=p,_=d,q=e,U=a;return c(),f("div",h,[x(q,{"label-width":"180"},{default:b((()=>[x(r,{label:t.$t("Component.Quota.index_6")},{default:b((()=>[v("div",C,[x(m,null,{default:b((()=>[x(o,{value:j(R).used,"onUpdate:value":s[0]||(s[0]=a=>j(R).used=a),disabled:!0},null,8,["value"]),x(l,{class:"w-44px text-center"},{default:b((()=>[z(w(j(H)),1)])),_:1})])),_:1})])])),_:1},8,["label"]),x(r,{label:t.$t("Component.Quota.index_7")},{default:b((()=>[v("div",Q,[x(m,null,{default:b((()=>[x(_,{value:j(R).size,"onUpdate:value":s[1]||(s[1]=a=>j(R).size=a),min:0,"show-button":!1},null,8,["value"]),x(l,{class:"w-44px text-center"},{default:b((()=>s[2]||(s[2]=[z("MB")]))),_:1})])),_:1})])])),_:1},8,["label"])])),_:1}),x(U,{class:"mt-8px"},{default:b((()=>[v("li",$,w(t.$t("Component.Quota.index_8")),1),v("li",null,w(t.$t("Component.Quota.index_9")),1),"database"!==j(k)?(c(),f("li",g,w(t.$t("Component.Quota.index_10")),1)):y("",!0),v("li",null,w(t.$t("Component.Quota.index_11")),1)])),_:1})])}}});export{q as default};
