System.register(["./page_layout-legacy.js?v=1741416570306","./index-legacy39.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./index-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1741416570306","./index-legacy101.js?v=1741416570306","./global-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy13.js?v=1741416570306","./soft-legacy.js?v=1741416570306","./index-legacy143.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy16.js?v=1741416570306"],(function(e,t){"use strict";var l,a,n,s,o,i,c,p,d,r,m,u,v,y,g,f,x,A,_,b,h,I,H,C,w,E,L,j,B,S,V,k,N,P,Q,q;return{setters:[e=>{l=e.u,a=e.m,n=e.ez,s=e._,o=e.k,i=e.eA,c=e.G,p=e.j},e=>{d=e.o,r=e.a},e=>{m=e.ch,u=e.a2,v=e.cg,y=e.bW,g=e.cf,f=e.T,x=e.ck},e=>{A=e.d,_=e.M,b=e.t,h=e.r,I=e.P,H=e.Q,C=e.R,w=e.a0,E=e.S,L=e.F,j=e.L,B=e._,S=e.N,V=e.$,k=e.c,N=e.ae,P=e.x,Q=e.ah,q=e.a1},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".recommend-item[data-v-6bd1cbf5]{flex:1 1 0%}.recommend-item+.recommend-item[data-v-6bd1cbf5]{margin-left:24px}.recommend-item .recommend-title[data-v-6bd1cbf5]{margin-bottom:10px;padding-left:5px;font-size:20px}.recommend-item .content[data-v-6bd1cbf5]{border-radius:4px;padding:20px 16px;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.2s;border:1px solid #ddd}.recommend-item .content[data-v-6bd1cbf5]:hover{background-color:#fcfcfc;border:1px solid #20a53a}.recommend-item .content .soft-list li[data-v-6bd1cbf5]{display:flex;align-items:center}.recommend-item .content .soft-list li+li[data-v-6bd1cbf5]{margin-top:12px}.recommend-list[data-v-9eee8ee6]{display:flex}\n",document.head.appendChild(t);const D={class:"recommend-item"},R={class:"recommend-title"},T={class:"content"},U={class:"soft-list"},W={key:0,class:"flex-center w-32px"},F=["src"],M={class:"flex items-center my-20px"},Y={class:"mr-10px"},z={class:"w-280px"},J={class:"w-280px"},Z={class:"flex justify-center"},K=o(A({__name:"item",props:{data:{},memTotal:{default:0}},emits:["close"],setup(e,{emit:t}){const o=e,i=t,{t:c}=_(),p=l(),r=b((()=>o.data)),x=b((()=>o.memTotal)),A=h((()=>{const{soft:e}=r.value,t={};return e.forEach((e=>{t[e.type]={value:e.value,checked:!0},"DNS-Server"!==e.type&&"Mail-Server"!==e.type||(t[e.type].checked=!1)})),t})()),P=h(1),Q=new Map([["5.1",{max:256,rec:512}],["5.5",{max:600,rec:1024}],["5.6",{max:800,rec:1024}],["5.7",{max:1500,rec:2048}],["8.0",{max:5e3,rec:6144}],["AliSQL",{max:800,rec:1024}],["mariadb_10.0",{max:800,rec:1024}],["mariadb_10.1",{max:1500,rec:2048}]]),q=new Map([["5.2","4.0"],["5.3","4.0"],["5.4","4.4"],["5.5","4.4"]]),K={mysql:e=>{const t=Q.get(e),l=t?.max||0,n=t?.rec||0;if(x.value<l){const t=c("Home.Install.index_10",[n/1024,e]);a.error(t)}},apache:e=>{"2.2"==e?a.info(c("Home.Install.index_11",["2.2","php5_module"])):a.info(c("Home.Install.index_11",["2.4","php-fpm"]))},php:e=>{if("lnmp"===r.value.type){const t=q.get(e)||"4.9";A.value.phpMyAdmin.value=t}if("lamp"===r.value.type){const t=e;"2.2"==A.value.Apache.value?"5.2"!=t&&"5.3"!=t&&"5.4"!=t&&(a.error(c("Home.Install.index_12",["2.2",t])),A.value.PHP.value="5.4"):"5.2"==t&&(a.error(c("Home.Install.index_12",["2.4",t])),A.value.PHP.value="5.4")}}},X=async()=>{const e=a.loading(c("Home.Install.index_13"));try{const e=(()=>{const e=[];return Object.entries(A.value).forEach((([t,l])=>{if(l.checked){let a=t.toLowerCase();"pure-ftpd"===a&&(a="pureftpd"),"php"===a&&(a="php-"+l.value),"dns-server"===a&&(a="dns_manager"),"mail-server"===a&&(a="mail_sys"),e.push({sName:a,version:`${l.value}`,type:P.value,id:"lnmp"===r.value.type?50:41})}})),e})();for(let t=0;t<e.length;t++)await n(e[t]);a.success(c("Home.Install.index_14")),p.getConfigSimple(),i("close"),d()}finally{e.close()}};return(e,t)=>{const l=s,a=m,n=u,o=v,i=y,c=g,p=f;return I(),H("div",D,[C("div",R,w(E(r).title),1),C("div",T,[C("ul",U,[(I(!0),H(L,null,j(E(r).soft,(e=>(I(),H("li",{key:e.type},["mail"===e.icon||"dns"===e.icon?(I(),H("div",W,[C("img",{class:"w-20px",src:"mail"===e.icon?E("/static/vite/images/mail-server.png"):E("data:image/png;base64,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"),alt:""},null,8,F)])):(I(),B(l,{key:1,name:`soft-${e.icon}`,size:"32"},null,8,["name"])),S(a,{value:E(A)[e.type].value,"onUpdate:value":[t=>E(A)[e.type].value=t,t=>((e,t)=>{e=e.toLowerCase();const l=K[e];l?.(t)})(e.type,t)],class:"flex-1 ml-10px mr-20px",options:e.options},null,8,["value","onUpdate:value","options"]),S(n,{checked:E(A)[e.type].checked,"onUpdate:checked":t=>E(A)[e.type].checked=t},null,8,["checked","onUpdate:checked"])])))),128))]),C("div",M,[C("span",Y,w(e.$t("Home.Install.index_4")),1),S(c,{value:E(P),"onUpdate:value":t[0]||(t[0]=e=>N(P)?P.value=e:null)},{default:V((()=>[S(i,{trigger:"hover"},{trigger:V((()=>[S(o,{value:1},{default:V((()=>[k(w(e.$t("Home.Install.index_5")),1)])),_:1})])),default:V((()=>[C("div",z,w(e.$t("Home.Install.index_6")),1)])),_:1}),S(i,{trigger:"hover"},{trigger:V((()=>[S(o,{value:0},{default:V((()=>[k(w(e.$t("Home.Install.index_7")),1)])),_:1})])),default:V((()=>[C("div",J,w(e.$t("Home.Install.index_8")),1)])),_:1})])),_:1},8,["value"])]),C("div",Z,[S(p,{type:"primary",onClick:X},{default:V((()=>[k(w(e.$t("Home.Install.index_9")),1)])),_:1})])])])}}}),[["__scopeId","data-v-6bd1cbf5"]]);h("");const X=h(""),O={class:"w-680px p-20px"},G={class:"recommend-list"},$=A({__name:"index",props:{memTotal:{}},emits:["close"],setup(e,{expose:t,emit:l}){const a=e,n=l,{t:s}=_(),{memTotal:o}=a,d=P([]),m=[{type:"lnmp",title:s("Home.Install.index_2"),soft:[{type:"Nginx",icon:"nginx",value:void 0,options:[]},{type:"MySQL",icon:"mysql",value:void 0,options:[]},{type:"PHP",icon:"php",value:void 0,options:[]},{type:"Pure-Ftpd",icon:"pure-ftpd",value:void 0,options:[]},{type:"phpMyAdmin",icon:"phpmyadmin",value:void 0,options:[]},{type:"DNS-Server",icon:"dns",value:void 0,options:[]},{type:"Mail-Server",icon:"mail",value:void 0,options:[]}]},{type:"lamp",title:s("Home.Install.index_3"),soft:[{type:"Apache",icon:"apache",value:void 0,options:[]},{type:"MySQL",icon:"mysql",value:void 0,options:[]},{type:"PHP",icon:"php",value:void 0,options:[]},{type:"Pure-Ftpd",icon:"pure-ftpd",value:void 0,options:[]},{type:"phpMyAdmin",icon:"phpmyadmin",value:void 0,options:[]},{type:"DNS-Server",icon:"dns",value:void 0,options:[]},{type:"Mail-Server",icon:"mail",value:void 0,options:[]}]}],u=Q(),v=()=>{u.push("/soft")},y=()=>{n("close")};return(async()=>{const{message:e}=await i();c(e)&&e.forEach((e=>{const{name:t}=e;if("Tomcat"===t)return;let l;const a=[];e.versions.forEach((({version:e},n)=>{(!l&&"PHP"===t&&0===n||"MySQL"===t&&0===n||"phpMyAdmin"===t&&0===n)&&(l=e),a.push({label:`${t} ${e}`,value:e})})),!l&&a.length>0&&(l=a[0].value),m.forEach((e=>{for(let n=0;n<e.soft.length;n++)if(e.soft[n].type===t){e.soft[n].value=l,e.soft[n].options=a;break}})),d.value=m}))})(),t({onClose:()=>{r()}}),(e,t)=>{const l=p,a=q("i18n-t"),n=x;return I(),H(L,null,[k(w(E(X))+" ",1),C("div",O,[S(n,{class:"mb-16px",type:"warning"},{default:V((()=>[S(a,{tag:"div",keypath:"Home.Install.index_1_1",scope:"global"},{soft_:V((()=>[S(l,{class:"mx-4px",onClick:v},{default:V((()=>[k(w(e.$t("Home.Install.index_1_2")),1)])),_:1})])),_:1})])),_:1}),C("div",G,[(I(!0),H(L,null,j(E(d),(e=>(I(),B(K,{key:e.type,data:e,"mem-total":E(o),onClose:y},null,8,["data","mem-total"])))),128))])])],64)}}});e("default",o($,[["__scopeId","data-v-9eee8ee6"]]))}}}));
