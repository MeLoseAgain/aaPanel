import{_ as e}from"./index95.js?v=1741416570306";import{_ as a}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1741416570306";import{G as i,m as l}from"./page_layout.js?v=1741416570306";import{b as t,f as n}from"./public.js?v=1741416570306";import{w as s,x as o,z as u}from"./site3.js?v=1741416570306";import{_ as r,T as m}from"./naive.js?v=1741416570306";import{d,M as p,j as f,P as c,Q as _,R as x,N as v,S as g,$ as C,c as S,a0 as y}from"./vue.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";const W={class:"p-20px"},j={class:"flex mb-16px"},N={class:"flex-1 mr-16px"},$={class:"w-110px mr-16px"},h={class:"w-110px mr-32px"},b="url_tell",w=d({__name:"protect",props:{siteName:{default:""}},setup(d){const w=d,{t:k}=p(),P=f({uri:"",name:"",value:""}),U=async()=>{""!==P.uri.trim()&&""!==P.name.trim()&&""!==P.value.trim()?(await u({siteName:w.siteName,ruleName:b,ruleUri:P.uri,ruleValue:P.name,rulePass:P.value}),P.uri="",P.name="",P.value="",D()):l.error(k("Waf.Site.Config.index_95"))},{table:B,columns:z,setLoading:A}=t([{key:"uri",title:k("Waf.Site.Config.index_96")},{key:"name",title:k("Waf.Site.Config.index_89")},{key:"value",title:k("Waf.Site.Config.index_90")},n({width:80,options:(e,a)=>[{label:k("Public.Btn.Del"),onClick:async()=>{await s({index:a,siteName:w.siteName,ruleName:b}),D()}}]})]),D=async()=>{try{A(!0);const{siteName:e}=w,{message:a}=await o({siteName:e,ruleName:b});i(a)&&(B.data=a.map((([e,a,i])=>({uri:e,name:a,value:i}))))}finally{A(!1)}};return D(),(i,l)=>{const t=r,n=m,s=a,o=e;return c(),_("div",W,[x("div",j,[x("div",N,[v(t,{value:g(P).uri,"onUpdate:value":l[0]||(l[0]=e=>g(P).uri=e),placeholder:i.$t("Waf.Site.Config.index_88")},null,8,["value","placeholder"])]),x("div",$,[v(t,{value:g(P).name,"onUpdate:value":l[1]||(l[1]=e=>g(P).name=e),placeholder:i.$t("Waf.Site.Config.index_89")},null,8,["value","placeholder"])]),x("div",h,[v(t,{value:g(P).value,"onUpdate:value":l[2]||(l[2]=e=>g(P).value=e),placeholder:i.$t("Waf.Site.Config.index_90")},null,8,["value","placeholder"])]),v(n,{type:"primary",onClick:U},{default:C((()=>[S(y(i.$t("Public.Btn.Add")),1)])),_:1})]),v(s,{"max-height":250,loading:g(B).loading,data:g(B).data,columns:g(z)},null,8,["loading","data","columns"]),v(o,{class:"mt-16px"},{default:C((()=>[x("li",null,y(i.$t("Waf.Site.Config.index_91")),1),x("li",null,y(i.$t("Waf.Site.Config.index_81")),1),x("li",null,y(i.$t("Waf.Site.Config.index_92")),1),x("li",null,y(i.$t("Waf.Site.Config.index_93")),1),x("li",null,y(i.$t("Waf.Site.Config.index_94")),1)])),_:1})])}}});export{w as default};
