System.register(["./index-legacy226.js?v=1742891699271","./index-legacy95.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./ssl-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(e,a){"use strict";var t,l,s,n,i,o,c,r,u,d,m,p,v,h,_,f,y,g,x,S,b,j,w,L,k,R,U,$,z,N,C,H,O;return{setters:[e=>{t=e._},e=>{l=e._},e=>{s=e._,n=e.b,i=e.m,o=e.eN,c=e.K,r=e.k},e=>{u=e.t,d=e.v},e=>{m=e.c},e=>{p=e.bU,v=e.cS,h=e.cj,_=e.T},e=>{f=e.d,y=e.O,g=e.at,x=e.r,S=e.j,b=e.e,j=e.a3,w=e.R,L=e.S,k=e.U,R=e.P,U=e.a1,$=e.V,z=e.a2,N=e.ap,C=e.c,H=e.af,O=e.a0},null,null],execute:function(){var a=document.createElement("style");a.textContent="[data-v-2920fdd8] .n-tabs-tab__label{height:24px}[data-v-2920fdd8] .n-tabs-tab--active{color:#20a53a!important}\n",document.head.appendChild(a);const T={key:0,class:"text-#20a53a"},A={class:"mt-10px"},E=r(f({__name:"index",props:{row:{},onRefresh:{type:Function}},setup(e){const{t:a}=y(),t=e,{row:r}=g(t),f=x("all"),O=S({domains:r.value.use_for.sites}),E=x([]),F=x([]),I=b((()=>"matched"===f.value?F.value:E.value)),J=({option:e})=>{const a=e.match?"ssl-lock":"ssl-unlock",t=e.match?"text-#20a53a":"text-error";return R(p,{size:5,class:"items-center flex-nowrap!"},{default:()=>[R(s,{name:a,class:t,size:18},null),R("div",{class:"truncate w-full"},[e.label])]})},{loading:K,setLoading:P}=m(),V=async()=>{try{const{message:e}=await u({hash:r.value.hash,domains:JSON.stringify(O.domains)});n(e)&&(e.faild?i.error(`${a("SSL.index_31")}（${e.faildList.map((e=>e.siteName)).join(",")}）`):i.success(a("SSL.index_32")),t.onRefresh())}catch(e){console.error(e)}},q=e=>e.map((e=>({label:e.name,value:e.name,match:e.match})));return(async()=>{try{P(!0);const{message:e}=await d({hash:r.value.hash});if(n(e)){const a=e.sites.filter((e=>e.match)),t=e.sites.filter((e=>!e.match));E.value=q([...a,...t]),F.value=q(a)}}finally{P(!1)}})(),(e,a)=>{const t=j("i18n-t"),n=v,i=h,u=o,d=c,m=_,p=s,y=l;return w(),L("div",null,[k("div",null,[R(t,{keypath:"SSL.index_26",tag:"span",scope:"global"},{a:U((()=>[$(r).verify_domains.length?(w(),L("span",T,z($(r).verify_domains.join(",")),1)):N("",!0)])),_:1})]),R(i,{type:"segment",animated:"",value:$(f),"onUpdate:value":a[0]||(a[0]=e=>H(f)?f.value=e:null),class:"my-10px"},{default:U((()=>[R(n,{name:"all"},{default:U((()=>[C(z(e.$t("SSL.index_28")),1)])),_:1}),R(n,{name:"matched"},{default:U((()=>[C(z(e.$t("SSL.index_27")),1)])),_:1})])),_:1},8,["value"]),R(d,{show:$(K)},{default:U((()=>[R(u,{"render-source-label":J,"render-target-label":J,value:$(O).domains,"onUpdate:value":a[1]||(a[1]=e=>$(O).domains=e),options:I.value,"source-filterable":"","virtual-scroll":""},null,8,["value","options"])])),_:1},8,["show"]),k("div",A,[R(m,{type:"primary",onClick:V},{default:U((()=>[C(z(e.$t("SSL.index_29")),1)])),_:1})]),R(y,{class:"mt-20px"},{default:U((()=>[k("li",null,[R(p,{name:"ssl-lock",class:"text-#20a53a",size:18}),a[2]||(a[2]=k("span",{class:"ml-8px"},"This SSL is applicable to the this domain",-1))]),k("li",null,[R(p,{name:"ssl-unlock",class:"text-error",size:18}),a[3]||(a[3]=k("span",{class:"ml-8px"},'After using this SSL, accessing the domain will show a "Not Secure" warning',-1))])])),_:1})])}}}),[["__scopeId","data-v-2920fdd8"]]);e("default",f({__name:"index",props:{data:{}},setup(e){const{t:a}=y(),l=e,{row:s,onRefresh:n,menu:i}=l.data,o=x("site"),c=[{key:"site",label:a("Home.index_68"),component:E,data:{row:s,onRefresh:n}}];return o.value=i||"site",(e,a)=>{const l=t;return w(),O(l,{value:$(o),"onUpdate:value":a[0]||(a[0]=e=>H(o)?o.value=e:null),data:c},null,8,["value"])}}}))}}}));
