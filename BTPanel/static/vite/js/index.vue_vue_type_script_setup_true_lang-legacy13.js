System.register(["./vue-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271"],(function(e,t){"use strict";var r,o,a,l,u,n,i,d;return{setters:[e=>{r=e.d,o=e.e,a=e.R,l=e.a0,u=e.u,n=e.V},e=>{i=e.ap},e=>{d=e.bz}],execute:function(){e("_",r({__name:"index",props:{value:{default:0},type:{default:"line"},height:{default:5},borderRadius:{default:4},textColor:{},defaultColor:{default:""}},setup(e){const t=e,r=i(),s=o((()=>{const{value:e,defaultColor:o}=t;return e>90?r.value.errorColor:e>80?r.value.warningColor:o||r.value.primaryColor}));return(e,t)=>{const r=d;return a(),l(r,u({type:e.type,color:n(s),height:e.height,percentage:e.value,"indicator-text-color":e.textColor,"border-radius":e.borderRadius},e.$attrs),null,16,["type","color","height","percentage","indicator-text-color","border-radius"])}}}))}}}));
