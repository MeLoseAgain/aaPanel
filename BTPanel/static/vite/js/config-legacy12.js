System.register(["./index-legacy95.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./setting-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(t,e){"use strict";var l,a,n,i,c,s,o,g,u,r,d,_,f,p,x,y,m,v,j,b,S,W,h;return{setters:[t=>{l=t._},t=>{a=t._},t=>{n=t.b,i=t.m},t=>{c=t.b,s=t.f},t=>{o=t.I,g=t.g,u=t.J},t=>{r=t._,d=t.T},t=>{_=t.d,f=t.O,p=t.j,x=t.R,y=t.S,m=t.U,v=t.P,j=t.V,b=t.a1,S=t.c,W=t.a2,h=t.M},null,null],execute:function(){const e={class:"p-20px"},$={class:"flex mb-16px"},k={class:"flex-1 mr-16px"},w={class:"w-230px mr-16px"};t("default",_({__name:"config",setup(t){const{t:_}=f(),P=p({text:"",text2:""}),U=async()=>{""!==P.text.trim()&&""!==P.text2.trim()?(await u(h(P)),P.text="",P.text2="",A()):i.error(_("Waf.Setting.config_170"))},{table:B,columns:C,setLoading:O}=c([{key:"text",title:_("Waf.Setting.config_164"),ellipsis:{tooltip:!0}},{key:"text2",title:_("Waf.Setting.config_165"),ellipsis:{tooltip:!0}},s({width:80,options:t=>[{label:_("Public.Btn.Del"),onClick:async()=>{await o({body:{[t.text]:t.text2}}),A()}}]})]),A=async()=>{try{O(!0);const{message:t}=await g();n(t)&&(B.data=t.body_character_string.map((t=>{const e=Object.keys(t);return{text:e[0],text2:t[e[0]]}})))}finally{O(!1)}};return A(),(t,n)=>{const i=r,c=d,s=a,o=l;return x(),y("div",e,[m("div",$,[m("div",k,[v(i,{value:j(P).text,"onUpdate:value":n[0]||(n[0]=t=>j(P).text=t),placeholder:t.$t("Waf.Setting.config_164")},null,8,["value","placeholder"])]),m("div",w,[v(i,{value:j(P).text2,"onUpdate:value":n[1]||(n[1]=t=>j(P).text2=t),placeholder:t.$t("Waf.Setting.config_165")},null,8,["value","placeholder"])]),v(c,{type:"primary",onClick:U},{default:b((()=>[S(W(t.$t("Public.Btn.Add")),1)])),_:1})]),v(s,{"max-height":230,loading:j(B).loading,data:j(B).data,columns:j(C)},null,8,["loading","data","columns"]),v(o,{class:"mt-16px"},{default:b((()=>[m("li",null,W(t.$t("Waf.Setting.config_166")),1),m("li",null,W(t.$t("Waf.Setting.config_167")),1),m("li",null,W(t.$t("Waf.Setting.config_168")),1),m("li",null,W(t.$t("Waf.Setting.config_169")),1)])),_:1})])}}}))}}}));
