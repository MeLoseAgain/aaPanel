System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./index-legacy56.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./index-legacy104.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./index-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1741416570306","./index-legacy96.js?v=1741416570306","./config-legacy3.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1741416570306"],(function(e,l){"use strict";var u,a,s,t,n,_,c,i,p,y,r,v,S,o;return{setters:[e=>{u=e._},e=>{a=e.o},e=>{s=e.d,t=e.M,n=e.j,_=e.P,c=e.Q,i=e.N,p=e.$,y=e.R,r=e.S,v=e.a7},e=>{S=e.ch,o=e.cb},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"p-20px"},g={class:"w-200px"},d={class:"w-200px"};e("default",s({__name:"open",emits:["refresh"],setup(e,{expose:s,emit:j}){const x=j,{t:b}=t(),f=n({ssh:"yes",type:"ed25519"}),H=[{label:b("Security.SSH.Basic.SSHKey.open_3"),value:"yes"},{label:b("Security.SSH.Basic.SSHKey.open_4"),value:"no"}],m=[{label:b("Security.SSH.Basic.SSHKey.open_5"),value:"ed25519"},{label:"ECDSA",value:"ecdsa"},{label:"RSA",value:"rsa"},{label:"DSA",value:"dsa"}];return s({onConfirm:async()=>{await a(v(f)),x("refresh")}}),(e,a)=>{const s=S,t=o,n=u;return _(),c("div",l,[i(n,{"label-width":"150"},{default:p((()=>[i(t,{label:e.$t("Security.SSH.Basic.SSHKey.open_1")},{default:p((()=>[y("div",g,[i(s,{value:r(f).ssh,"onUpdate:value":a[0]||(a[0]=e=>r(f).ssh=e),options:H},null,8,["value"])])])),_:1},8,["label"]),i(t,{label:e.$t("Security.SSH.Basic.SSHKey.open_2"),"show-feedback":!1},{default:p((()=>[y("div",d,[i(s,{value:r(f).type,"onUpdate:value":a[1]||(a[1]=e=>r(f).type=e),options:m},null,8,["value"])])])),_:1},8,["label"])])),_:1})])}}}))}}}));
