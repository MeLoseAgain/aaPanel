import{_ as e}from"./index.js?v=1742891699271";import{fl as a,fm as t,aO as s,E as i,fn as o,j as p,l as n,k as l}from"./page_layout.js?v=1742891699271";import{w as d}from"./public.js?v=1742891699271";import{B as m}from"./details4.js?v=1742891699271";import{T as r}from"./naive.js?v=1742891699271";import{d as u,O as x,e as c,r as v,a3 as _,R as U,S as f,U as w,a2 as H,V as g,P as $,a1 as b,c as y,a0 as k,ap as j,F as h,af as M}from"./vue.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";const C={class:"update-old"},F={class:"absolute top-15px left-15px text-white text-14px"},P={class:"pt-140px"},T={class:"text-22px text-center font-bold text-[#565656]"},A={class:"flex justify-between mx-32px mt-20px mb-16px text-14px"},B={class:"mt-10px mx-32px mb-32px p-20px bg-[#F6FBF7] rounded-4px"},L=["innerHTML"],O={key:1,class:"update-tips"},E={class:"mr-16px"},I={class:"mr-16px"},N={class:"update-btn"},R=l(u({__name:"old",props:{info:{}},emits:["close"],setup(l,{expose:u,emit:R}){const S=l,V=R,{info:q}=S,{t:z}=x(),D=c((()=>q.is_pro)),G=c((()=>q.is_beta)),J=c((()=>D.value?K.value:G.value?W.value:Q.value)),K=c((()=>({uptime:q.pro.uptime.replaceAll("/","-"),downUrl:q.pro.downUrl,version:q.pro.version,updateMsg:q.pro.updateMsg}))),Q=c((()=>({uptime:q.uptime.replaceAll("/","-"),downUrl:q.downUrl,version:q.version,updateMsg:q.updateMsg}))),W=c((()=>({uptime:q.beta.uptime.replaceAll("/","-"),downUrl:q.beta.downUrl,version:q.beta.version,updateMsg:q.beta.updateMsg}))),X=v(!1),Y=()=>{X.value=!0},Z=()=>{d({title:z("Home.Update.index_11"),content:z("Home.Update.index_13"),onConfirm:async({hide:e})=>{await a(),await t(),await s(),i(),e()}})},ee=async()=>{await o({version:J.value.version}),setTimeout((()=>{V("close")}),2e3)},ae=async()=>{await t(),await s(),i()};return u({onClose:async()=>{await o({version:J.value.version},!1)}}),(a,t)=>{const s=p,i=n,o=_("i18n-t"),l=r,d=e;return U(),f("div",C,[t[1]||(t[1]=w("div",{class:"absolute -top-90px right-40px w-150px"},[w("img",{class:"w-full",src:"/static/vite/images/update-rocket.svg",alt:"rocket img"})],-1)),w("div",F,[w("span",null,H(a.$t("Home.Update.index_14",[g(D)?"Pro":g(G)?a.$t("Home.Update.index_7"):a.$t("Home.Update.index_8")])),1)]),w("div",P,[w("div",T,H(a.$t("Home.Update.index_15")),1),w("div",A,[w("div",null,[w("span",null,H(a.$t("Home.Update.index_17")),1),$(s,{href:"https://www.aapanel.com/forum/d/9-aapanel-linux-panel-6-1-5-installation-tutorial/36",target:"_blank"},{default:b((()=>[y(H(a.$t("Public.Name"))+" "+H(g(D)?"Pro":g(G)?a.$t("Home.Update.index_7"):a.$t("Home.Update.index_8"))+" "+H(g(J).version),1)])),_:1})]),w("div",null,H(a.$t("Home.Update.index_16",[g(J).uptime])),1)]),w("div",B,[w("div",{class:"update-logs",innerHTML:g(J).updateMsg},null,8,L),g(D)?j("",!0):(U(),k(i,{key:0,class:"my-20px!"})),g(D)?j("",!0):(U(),f("div",O,[g(G)?(U(),f(h,{key:1},[w("div",null,[w("span",I,H(a.$t("Home.Update.index_10",[g(Q).uptime])),1),w("span",null,H(a.$t("Home.Update.index_6",[g(Q).uptime])),1)]),w("div",null,[$(s,{onClick:Z},{default:b((()=>[y(H(a.$t("Home.Update.index_11")),1)])),_:1})])],64)):(U(),f(h,{key:0},[w("div",null,[w("span",E,H(a.$t("Home.Update.index_5",[g(W).version])),1),w("span",null,H(a.$t("Home.Update.index_6",[g(W).uptime])),1)]),$(o,{tag:"div",keypath:"Home.Update.index_9_1"},{btn_:b((()=>[$(s,{onClick:Y},{default:b((()=>[y(H(a.$t("Home.Update.index_9_2")),1)])),_:1})])),_:1})],64))]))]),w("div",N,[$(l,{class:"ignore mr-48px",round:"",onClick:ee},{default:b((()=>[y(H(a.$t("Home.Update.index_18")),1)])),_:1}),$(l,{type:"primary",round:"",onClick:ae},{default:b((()=>[y(H(a.$t("Home.Update.index_19")),1)])),_:1})])]),$(d,{show:g(X),"onUpdate:show":t[0]||(t[0]=e=>M(X)?X.value=e:null),title:a.$t("Home.Update.index_12"),component:m},null,8,["show","title"])])}}}),[["__scopeId","data-v-e86cd208"]]);export{R as default};
