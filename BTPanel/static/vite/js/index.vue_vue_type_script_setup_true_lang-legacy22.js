System.register(["./page_layout-legacy.js?v=1741416570306","./soft-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306"],(function(e,n){"use strict";var a,t,l,s,i,u,o,r,c,v,p,m,g,d,y,_,f,x,b,j,P,$,w;return{setters:[e=>{a=e.m,t=e.c5,l=e.b,s=e.bo,i=e.f},e=>{u=e.p},e=>{o=e.c,r=e.a},e=>{c=e.ch,v=e.T,p=e.bO},e=>{m=e.d,g=e.M,d=e.r,y=e.P,_=e._,f=e.$,x=e.R,b=e.a0,j=e.N,P=e.S,$=e.ae,w=e.c}],execute:function(){e("_",m({__name:"index",setup(e,{expose:n}){const{t:m}=g(),C=d(),F=d(),N=d([]),S=()=>{F.value!==C.value?r({title:m("Public.Btn.Install"),content:m("Plugin.Ftp.index_12",[u.title,C.value]),onConfirm:()=>{h()}}):a.error(m("Plugin.Ftp.index_11"))},h=async(e=1)=>{const{message:n}=await t({sName:u.name,version:C.value,type:e});l(n)&&n.result&&s()},{loading:k,setLoading:B}=o(),I=async()=>{try{B(!0);const{message:e}=await i({sName:"pure-ftpd"===u.name?"pureftpd":u.name});l(e)&&(N.value=e.versions.map((n=>(1==n.m_version.length?C.value=e.version.split(".")[0]:C.value=e.version.split(".")[0]+"."+e.version.split(".")[1],F.value=C.value,{label:`${e.name} ${n.m_version}`,value:n.m_version}))))}finally{B(!1)}};return I(),n({init:I}),(e,n)=>{const a=c,t=v,l=p;return y(),_(l,{class:"items-center"},{default:f((()=>[x("span",null,b(e.$t("Plugin.Ftp.index_9")),1),j(a,{class:"w-200px",loading:P(k),value:P(C),"onUpdate:value":n[0]||(n[0]=e=>$(C)?C.value=e:null),options:P(N)},null,8,["loading","value","options"]),j(t,{type:"primary",onClick:S},{default:f((()=>[w(b(e.$t("Site.Cert.index_61")),1)])),_:1})])),_:1})}}}))}}}));
