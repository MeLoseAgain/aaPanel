System.register(["./index-legacy103.js?v=1741416570306","./organization-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306"],(function(e,a){"use strict";var n,s,l,t,c,g,o,i,r,u;return{setters:[e=>{n=e._},e=>{s=e.f},e=>{l=e.c},e=>{t=e.G},e=>{c=e.bL},e=>{g=e.d,o=e.r,i=e.P,r=e._,u=e.S},null,null],execute:function(){e("default",g({__name:"index",props:{data:{}},setup(e){const a=e,{id:g,getList:y}=a.data,{loading:d,setLoading:j}=l(),_=o("None");return(async()=>{try{j(!0);const{message:e}=await s({trigger_id:g});t(e)&&(_.value=e.join("\n"))}catch(e){_.value=c(e,"message.result","None")}finally{y?.(),j(!1)}})(),(e,a)=>{const s=n;return i(),r(s,{class:"h-200px!",loading:u(d),log:u(_)},null,8,["loading","log"])}}}))}}}));
