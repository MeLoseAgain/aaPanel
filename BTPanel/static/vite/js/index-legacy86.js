System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./index-legacy95.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./index-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271"],(function(e,a){"use strict";var l,t,s,n,i,r,d,o,u,p,c,x,m,g,v,_,f,w,y,h,b,$,C,k,j,L,z,P,A,U,q,B,I,R,S;return{setters:[e=>{l=e._},e=>{t=e._},e=>{s=e.d,n=e.O,i=e.r,r=e.j,d=e.R,o=e.a0,u=e.a1,p=e.U,c=e.a2,x=e.P,m=e.V,g=e.S,v=e.c,_=e.an,f=e.ao,w=e.ap,y=e.M},e=>{h=e.x,b=e.b,$=e.m,C=e.y,k=e.z,j=e.r,L=e.A,z=e.k},null,e=>{P=e.bR,A=e._,U=e.ch,q=e.T,B=e.ci,I=e.cj,R=e.bU,S=e.ck},null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".box[data-v-506702ce]{height:calc(100vh - 52px)}.box .info[data-v-506702ce]{border:3px solid #48a337}.box .info .tips[data-v-506702ce]{background:linear-gradient(to bottom,#edf7ef,#d8efdb)}.box-text[data-v-506702ce]{word-wrap:break-word}\n",document.head.appendChild(a);const F={class:"font-600"},E={class:"info flex mt-50px w-820px mx-auto"},H={class:"tips py-40px w-50%"},K={class:"font-600 text-16px"},M={class:"mt-10px mb-20px font-600 text-16px"},O={key:0,class:"w-50% p-30px"},T={class:"w-100%"},V={class:"w-100%"},D={key:1,class:"w-50% p-30px"},G={class:"font-600 text-left"},J={class:"underline"},N={class:"text-16px my-20px text-left"},Q={key:0,class:"ml-5px"};e("default",z(s({__name:"index",setup(e){const{t:a}=n(),s=i(null),z=i(null),W=r({email:"",password:"",isPro:1}),X={email:{required:!0,trigger:["blur","input"],message:a("Component.BindAccount.index_4")},password:{required:!0,trigger:["blur","input"],message:a("Component.BindAccount.index_5")}},Y=r({username:"",password:"",isPro:1}),Z={username:{required:!0,trigger:["blur","input"],message:a("Component.BindAccount.index_4")},password:{required:!0,trigger:["blur","input"],message:a("Component.BindAccount.index_5")}},ee=i(!1),ae=i(!1),le=e=>{ae.value="login"===e},te=i(60),se=i(!0);let ne;const ie=async()=>{await(s.value?.validate());const{message:e}=await h(y(W));b(e)&&(e.status?(ee.value=!0,$.success(e.msg)):$.error(e.msg))},re=async()=>{await(z.value?.validate());try{await C(y(ae.value?Y:{username:W.email,password:W.password,isPro:1}))}catch(e){return void(P(e,"message.validated",!0)||(ee.value=!0))}await k({force:1}),j.push("/")},de=()=>{se.value=!1,ne&&clearInterval(ne),ne=setInterval((()=>{te.value--,te.value<=0&&(clearInterval(ne),te.value=60,se.value=!0)}),1e3);let e=ae.value?Y.username:W.email;L({email:e})};return(e,a)=>{const n=t,i=A,r=U,y=l,h=q,b=B,$=I,C=R,k=S;return d(),o(k,{class:"box pt-100px flex items-center text-center"},{default:u((()=>[p("h1",F,c(e.$t("Login.index_26")),1),p("div",E,[p("div",H,[a[7]||(a[7]=p("h3",{class:"font-600 mb-20px"},"aaPanel Pro",-1)),p("div",K,c(e.$t("Login.index_29")),1),p("div",M,c(e.$t("Login.index_30")),1),x(n,{class:"text-left pl-30px w-400px"},{default:u((()=>[p("li",null,c(e.$t("Login.index_27")),1),p("li",null,c(e.$t("Login.index_28")),1)])),_:1})]),m(ee)?(d(),g("div",D,[p("h3",G,[v(c(e.$t("Login.index_35"))+": ",1),p("span",J,c(m(ae)?m(Y).username:m(W).email),1)]),p("div",N,[v(c(e.$t("Login.index_36"))+": ",1),a[8]||(a[8]=p("span",{class:"underline"},"support@aapanel.com",-1))]),x(C,null,{default:u((()=>[x(h,{type:"primary",size:"large",onClick:a[6]||(a[6]=e=>re())},{default:u((()=>[v(c(e.$t("Login.index_37")),1)])),_:1}),x(h,{size:"large",onClick:de,disabled:!m(se)},{default:u((()=>[v(c(e.$t("Login.index_38"))+" ",1),m(se)?w("",!0):(d(),g("span",Q,"("+c(m(te))+")",1))])),_:1},8,["disabled"])])),_:1})])):(d(),g("div",O,[x($,{"default-value":"signup",size:"large",animated:"","onUpdate:value":le},{default:u((()=>[x(b,{name:"signup",tab:"Sign up",class:"text-left"},{default:u((()=>[x(y,{ref_key:"signFormRef",ref:s,model:m(W),rules:X,size:"large"},{default:u((()=>[x(r,{path:"email"},{default:u((()=>[x(i,{value:m(W).email,"onUpdate:value":a[0]||(a[0]=e=>m(W).email=e),class:"w-320px!",placeholder:e.$t("Config.Alarm.index_3")},null,8,["value","placeholder"])])),_:1}),x(r,{path:"password"},{default:u((()=>[x(i,{value:m(W).password,"onUpdate:value":a[1]||(a[1]=e=>m(W).password=e),class:"w-320px!",type:"password",placeholder:e.$t("Config.Panel.index_66")},null,8,["value","placeholder"])])),_:1})])),_:1},8,["model"]),p("div",T,[x(h,{type:"primary",onClick:ie,size:"large",class:"whitespace-normal w-320px!"},{default:u((()=>[v(c(e.$t("Login.index_31")),1)])),_:1})])])),_:1}),x(b,{name:"login",tab:"Login",class:"text-left"},{default:u((()=>[x(y,{ref_key:"loginFormRef",ref:z,model:m(Y),rules:Z,size:"large"},{default:u((()=>[x(r,{path:"username"},{default:u((()=>[x(i,{value:m(Y).username,"onUpdate:value":a[2]||(a[2]=e=>m(Y).username=e),class:"w-320px!",placeholder:e.$t("Config.Alarm.index_3")},null,8,["value","placeholder"])])),_:1}),x(r,{path:"password"},{default:u((()=>[x(i,{value:m(Y).password,"onUpdate:value":a[3]||(a[3]=e=>m(Y).password=e),class:"w-320px!",type:"password",placeholder:e.$t("Config.Panel.index_66"),onKeyup:a[4]||(a[4]=_(f((e=>re()),["prevent"]),["enter"]))},null,8,["value","placeholder"])])),_:1})])),_:1},8,["model"]),p("div",V,[x(h,{type:"primary",onClick:a[5]||(a[5]=e=>re()),size:"large",class:"whitespace-normal w-320px!"},{default:u((()=>[v(c(e.$t("Login.index_32")),1)])),_:1})])])),_:1})])),_:1})]))])])),_:1})}}}),[["__scopeId","data-v-506702ce"]]))}}}));
