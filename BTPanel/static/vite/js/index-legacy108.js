System.register(["./index-legacy103.js?v=1742891699271","./organization-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(e,a){"use strict";var n,s,l,t,c,g,o,i,r,u;return{setters:[e=>{n=e._},e=>{s=e.f},e=>{l=e.c},e=>{t=e.I},e=>{c=e.bR},e=>{g=e.d,o=e.r,i=e.R,r=e.a0,u=e.V},null,null],execute:function(){e("default",g({__name:"index",props:{data:{}},setup(e){const a=e,{id:g,getList:y}=a.data,{loading:d,setLoading:j}=l(),_=o("None");return(async()=>{try{j(!0);const{message:e}=await s({trigger_id:g});t(e)&&(_.value=e.join("\n"))}catch(e){_.value=c(e,"message.result","None")}finally{y?.(),j(!1)}})(),(e,a)=>{const s=n;return i(),r(s,{class:"h-200px!",loading:u(d),log:u(_)},null,8,["loading","log"])}}}))}}}));
