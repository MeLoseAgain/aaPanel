System.register(["./index-legacy226.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy21.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy22.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./index-legacy103.js?v=1742891699271","./php-legacy.js?v=1742891699271","./soft-legacy.js?v=1742891699271","./alarm-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1742891699271","./index-legacy95.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy15.js?v=1742891699271","./theme-chrome-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./file-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271"],(function(e,l){"use strict";var n,a,t,s,u,i,c,o,p,_,r,d,g,y,v,x,m,h,w,f,j,b,k,P,A,U,S,C,T,B,K,O,H,I,L;return{setters:[e=>{n=e._},e=>{a=e._,t=e.a},e=>{s=e._},e=>{u=e._},e=>{i=e.eA,c=e.b,o=e.eB,p=e.eC,_=e.I,r=e.K,d=e.eo},e=>{g=e.b,y=e.c},e=>{v=e.d,x=e.O,m=e.R,h=e.S,w=e.P,f=e.V,j=e.r,b=e.a0,k=e.a1,P=e.F,A=e.N,U=e.U,S=e.a2,C=e.ap,T=e.c,B=e.af},e=>{K=e.bY,O=e.cn,H=e.bU,I=e.T},e=>{L=e._},null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l=v({__name:"index",setup(e,{expose:l}){const{t:n}=x(),{table:a,columns:t}=g([{key:"title",title:n("Plugin.Apache.index_12")},{width:"30%",key:"value",title:n("Plugin.Apache.index_13")}]),s={RestartTime:n("Plugin.Apache.index_1"),UpTime:n("Plugin.Apache.index_2"),TotalAccesses:n("Plugin.Apache.index_3"),TotalKBytes:n("Plugin.Apache.index_4"),ReqPerSec:n("Plugin.Apache.index_5"),BusyWorkers:n("Plugin.Apache.index_6"),IdleWorkers:n("Plugin.Apache.index_7"),workercpu:n("Plugin.Apache.index_8"),workermem:n("Plugin.Apache.index_9")},{loading:o,setLoading:p}=y(),_=async()=>{try{p(!0);const{message:e}=await i();c(e)&&(a.data=Object.entries(e).map((([e,l])=>({title:`${s[e]}(${e})`,value:l}))))}finally{p(!1)}};return _(),l({init:_}),(e,l)=>{const n=u;return m(),h("div",null,[w(n,{data:f(a).data,columns:f(t),loading:f(o)},null,8,["data","columns","loading"])])}}}),N={class:"w-150px! text-right"},R={class:"w-250px! color-#666"},$={class:"text-center"},q=v({__name:"index",setup(e,{expose:l}){const{t:n}=x(),a=j(),t=[{label:n("Config.Panel.index_83_1"),value:"On"},{label:n("Config.Safe.index_84"),value:"Off"}],s=async()=>{const e=a.value.reduce(((e,l)=>(e[l.name]=l.value,e)),{});await o(e)},{loading:u,setLoading:i}=y(),c=async()=>{try{i(!0);const{message:e}=await p();_(e)&&(a.value=e)}finally{i(!1)}};return c(),l({init:c}),(e,l)=>{const n=K,i=O,c=H,o=I,p=r;return m(),b(p,{show:f(u)},{default:k((()=>[(m(!0),h(P,null,A(f(a),((e,l)=>(m(),b(c,{class:"items-center flex-nowrap! py-2px mb-16px",key:l},{default:k((()=>[U("div",N,S(e.name),1),"KeepAlive"!==e.name?(m(),b(n,{key:0,class:"w-150px!",value:e.value,"onUpdate:value":l=>e.value=l,min:0,"show-button":!1},null,8,["value","onUpdate:value"])):C("",!0),"KeepAlive"===e.name?(m(),b(i,{key:1,class:"w-150px!",value:e.value,"onUpdate:value":l=>e.value=l,options:t},null,8,["value","onUpdate:value"])):C("",!0),U("div",R,S(e.ps),1)])),_:2},1024)))),128)),U("div",$,[w(o,{type:"primary",onClick:s},{default:k((()=>[T(S(e.$t("Public.Btn.Save")),1)])),_:1})])])),_:1},8,["show"])}}}),F=v({__name:"index",setup(e,{expose:l}){const n=j("None"),{loading:a,setLoading:t}=y(),s=async()=>{try{t(!0);const{message:e}=await d({path:"/www/wwwlogs/error_log"});c(e)&&(n.value=e.result?e.result:"None")}finally{t(!1)}};return s(),l({init:s}),(e,l)=>{const t=L,s=r;return m(),b(s,{class:"h-580px",show:f(a)},{default:k((()=>[w(t,{log:f(n)},null,8,["log"])])),_:1},8,["show"])}}});e("default",v({__name:"index",setup(e){const{t:u}=x(),i=j("service"),c=[{key:"service",label:u("Security.History.Index_10"),component:a},{key:"file",label:u("Site.Config.index_15"),data:{path:"/www/server/apache/conf/httpd.conf"},component:t},{key:"version",label:u("Plugin.Ftp.index_9"),component:s},{key:"load",label:u("Home.index_30"),component:l},{key:"optimization",label:u("Plugin.Mysql.index_27"),component:q},{key:"logs",label:u("Docker.App.index_5"),component:F}];return(e,l)=>{const a=n;return m(),b(a,{value:f(i),"onUpdate:value":l[0]||(l[0]=e=>B(i)?i.value=e:null),data:c},null,8,["value"])}}}))}}}));
