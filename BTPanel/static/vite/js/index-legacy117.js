System.register(["./index-legacy223.js?v=1741416570306","./index-legacy95.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./site-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306"],(function(e,a){"use strict";var t,n,l,s,i,d,o,p,u,r,c,m,v,b,_,h,x,y,g,f,w,P,A,D,$,k,C,S,j,U,T,N,B,H,L,q,z,E,I,M,R,F,O,Q,V,G,W,J,K,X,Y,Z;return{setters:[e=>{t=e._},e=>{n=e._},e=>{l=e.u,s=e.cO,i=e.m,d=e.f,o=e.cP,p=e.b,u=e.l,r=e.k,c=e.G,m=e.cQ,v=e.cR,b=e.cS,_=e.cT,h=e.cU,x=e.cV,y=e.cW},e=>{g=e.a,f=e.e,w=e.c},e=>{P=e.p,A=e.a,D=e.d,$=e.M,k=e.r,C=e.P,S=e.Q,j=e.R,U=e.N,T=e.$,N=e.c,B=e.a0,H=e.S,L=e.j,q=e.ae,z=e.F,E=e.ao,I=e.t},e=>{M=e.T},e=>{R=e.bL,F=e.a2,O=e.T,Q=e.ch,V=e.bO,G=e.bH,W=e.bS,J=e.cb,K=e.bV,X=e._},e=>{Y=e.aq},e=>{Z=e._},null],execute:function(){var a=document.createElement("style");a.textContent=".n-button[data-v-ccb3caae]{padding:0 24px;--n-height: 40px;--n-border-radius: 2px;--n-color: #eee;--n-text-color: #333;--n-border: none;--n-color-hover: #20a53a;--n-border-hover: 1px solid #20a53a;--n-text-color-hover: #fff;--n-color-focus: #20a53a;--n-text-color-focus: #fff;--n-border-focus: 1px solid #20a53a}.bg-recommend[data-v-ccb3caae]{position:absolute;width:32px;height:32px;top:-1px;left:-1px;background-image:url(/static/vite/images/recommend.svg);background-repeat:no-repeat;background-position:center;background-size:contain}\n",document.head.appendChild(a);const ee=Symbol("php-admin");function ae(e,a,t,n){return new Promise((l=>{const s=`${e}/index.php?lang=en`,i=document.createElement("form"),d=`\n\t\t\t<input type="text" name="pma_username" id="pma_username" value="${t}" />\n\t\t\t<input type="password" name="pma_password" id="pma_password" value="${n}" />\n\t\t\t<input type="text" name="server" value="1" />\n\t\t\t<input type="text" name="target" value="index.php" />\n\t\t\t<input type="text" name="db" id="db" value="${a}" />\n\t\t`;i.action=s,i.setAttribute("public-data",s),i.method="post",i.target="_blank",i.style.display="none",i.innerHTML=d,document.body.appendChild(i),i.submit(),document.body.removeChild(i),l(i)}))}async function te(e,a){const{data:t}=await M.get("/phpmyadmin/index.php?lang=en"),n={session:"",token:""},l=t.match(/"set_session"\s+value="(\w+)"/),s=t.match(/"token"\s+value="(\w+)"/);l&&l.length>1&&(n.session=l[1]||""),s&&s.length>1&&(n.token=s[1]||"");const i=document.createElement("form");i.action="/phpmyadmin/index.php",i.method="post",i.target="_blank",i.style.display="none";const d=`\n\t\t<input  name="set_session" id="input_session" value="${n.session}" />\n\t\t<input type="text" name="pma_username" id="pma_username" value="${e}" size="24" />\n\t\t<input type="password" name="pma_password" id="pma_password" value="${a}" size="24" />\n\t\t<input  name="token" id="input_token" value="${n.token}" />\n\t\t<input  name="target" id="input_target" value="index.php" />\n\t\t<input  name="server" value="1" id="input_server" />\n\t`;i.innerHTML=d,document.body.appendChild(i),i.submit(),document.body.removeChild(i)}const ne={class:"p-4px"},le={class:"mb-16px"},se={class:"text-error"},ie={class:"mt-20px"},de="phpmyadmin",oe=D({__name:"index",setup(e,{expose:a}){const{t:t}=$(),r=l(),{mysqlInfo:c}=A(ee),m=k(!1),v=e=>{g({title:t("Database.PhpAdmin.index_12",[t(e?"Public.Status.Start":"Public.Status.Stop")]),content:t("Database.PhpAdmin.index_13",[t(e?"Public.Status.start":"Public.Status.stop")]),onConfirm:async()=>{await s({name:de,type:e?"start":"stop"}),_()}})},b=async e=>{const a=i.loading(t("Database.PhpAdmin.index_14"));try{const{message:n}=await d({sName:de}),l=R(n,"ext.url",""),s=R(n,"ext.auth",!1);if("panel"==e){if(s)return i.error(t("Database.PhpAdmin.index_15")),void a.close();if(r.isFree)return f({source:160}),void a.close();if(c.value)await te(c.value.username,c.value.password);else{const{message:e}=await o(),a=R(e,"result","");await te("root",a)}}else if(c.value)await ae(l,c.value.name,c.value.username,c.value.password);else{const{message:e}=await o(),a=R(e,"result","");await ae(l,"","root",a)}a.close()}catch(n){a.close(),console.error(n)}},_=async()=>{const{message:e}=await d({sName:de});p(e)&&(m.value=e.status)};return _(),a({init:_}),(e,a)=>{const t=F,l=n,s=u,i=O;return C(),S("div",ne,[j("div",le,[U(t,{checked:H(m),"onUpdate:checked":v},{default:T((()=>[N(B(e.$t("Database.PhpAdmin.index_4")),1)])),_:1},8,["checked"])]),U(l,{class:"mb-20px"},{default:T((()=>[j("li",se,B(e.$t("Database.PhpAdmin.index_5")),1)])),_:1}),U(s,{dashed:""}),j("div",ie,[U(i,{onClick:a[0]||(a[0]=e=>b("panel"))},{default:T((()=>[j("span",null,B(e.$t("Database.PhpAdmin.index_11")),1),a[2]||(a[2]=j("span",{class:"bg-recommend"},null,-1))])),_:1}),U(i,{class:"ml-24px",onClick:a[1]||(a[1]=e=>b())},{default:T((()=>[N(B(e.$t("Database.PhpAdmin.index_6")),1)])),_:1})]),U(l,{class:"mt-16px"},{default:T((()=>[j("li",null,B(e.$t("Database.PhpAdmin.index_7")),1),j("li",null,B(e.$t("Database.PhpAdmin.index_8")),1),j("li",null,B(e.$t("Database.PhpAdmin.index_9")),1),j("li",null,B(e.$t("Database.PhpAdmin.index_10")),1)])),_:1})])}}}),pe=r(oe,[["__scopeId","data-v-ccb3caae"]]),ue={class:"w-160px"},re=D({__name:"index",setup(e,{expose:a}){const{t:t}=$(),n=L({php_version:null}),l=k([]),{loading:s,setLoading:o}=w(),p=async()=>{try{o(!0);const[e,a]=await Promise.all([Y(),d({sName:"phpmyadmin"})]),{message:t}=e;c(t)&&(l.value=t.map((e=>({label:e.name,value:e.version}))));const{message:s}=a;n.php_version=R(s,"ext.phpversion",null)}finally{o(!1)}},u=async()=>{const e=n.php_version;null!==e?(await m({phpversion:e}),p()):i.error(t("Database.PhpAdmin.index_32"))};return p(),a({init:p}),(e,a)=>{const t=Q,i=O,d=V;return C(),S("div",null,[U(d,{class:"items-center"},{default:T((()=>[j("span",null,B(e.$t("Database.PhpAdmin.index_31")),1),j("div",ue,[U(t,{value:H(n).php_version,"onUpdate:value":a[0]||(a[0]=e=>H(n).php_version=e),loading:H(s),options:H(l)},null,8,["value","loading","options"])]),U(i,{type:"primary",onClick:u},{default:T((()=>[N(B(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1})])}}}),ce={class:"p-4px"},me={class:"w-142px mr-8px"},ve={class:"w-142px mr-8px"},be={class:"w-240px"},_e={class:"w-240px"},he={class:"w-240px"},xe=D({__name:"index",setup(e,{expose:a}){const{t:t}=$(),l=k(null),s=k(!1),o=k(null),p=k(!1);let r=!1;const c=L({username:"",password:"",repass:""}),m=async()=>{const e=l.value;null!==e?(await v({port:e}),I()):i.error(t("Database.PhpAdmin.index_25"))},f=async e=>{await b({v:e?1:0}),F()},w=async()=>{const e=o.value;null!==e?(await _({port:e}),F()):i.error(t("Database.PhpAdmin.index_26"))},P=e=>{!e&&r?g({title:t("Public.Confirm.Title"),content:t("Database.PhpAdmin.index_27"),onConfirm:async()=>{await h(),I()}}):p.value=e},A=async()=>{""!==c.password.trim()&&""!==c.username.trim()?c.password.length<3||c.username.length<3?i.error(t("Database.PhpAdmin.index_29")):c.password===c.repass?(await x({username:c.username,password:c.password}),I()):i.error(t("Database.PhpAdmin.index_30")):i.error(t("Database.PhpAdmin.index_28"))},D=k(!1),I=async()=>{try{D.value=!0;const{message:e}=await d({sName:"phpmyadmin"}),a=R(e,"ext.port",null);l.value=a?G(a):null,p.value=R(e,"ext.auth",!1),r=p.value}finally{D.value=!1}},M=k(!1),F=async()=>{try{M.value=!0;const{message:e}=await y();s.value=R(e,"status",!1);const a=R(e,"port",null);o.value=a?G(a):null}finally{M.value=!1}},Q=()=>{Promise.all([I(),F()])};return Q(),a({init:Q}),(e,a)=>{const t=W,i=O,d=J,r=u,v=K,b=X,_=n,h=Z;return C(),S("div",ce,[U(h,{"label-width":"160"},{default:T((()=>[U(d,{label:e.$t("Database.PhpAdmin.index_16")},{default:T((()=>[j("div",me,[U(t,{value:H(l),"onUpdate:value":a[0]||(a[0]=e=>q(l)?l.value=e:null),min:0,max:66325,"show-button":!1,loading:H(D),placeholder:""},null,8,["value","loading"])]),U(i,{type:"primary",onClick:m},{default:T((()=>[N(B(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1},8,["label"]),U(r,{dashed:""}),U(d,{class:"mt-20px",label:e.$t("Database.PhpAdmin.index_17")},{default:T((()=>[U(v,{value:H(s),loading:H(M),"onUpdate:value":f},null,8,["value","loading"])])),_:1},8,["label"]),U(d,{label:e.$t("Database.PhpAdmin.index_18")},{default:T((()=>[j("div",ve,[U(t,{value:H(o),"onUpdate:value":a[1]||(a[1]=e=>q(o)?o.value=e:null),min:0,max:66325,"show-button":!1,loading:H(M),placeholder:""},null,8,["value","loading"])]),U(i,{type:"primary",onClick:w},{default:T((()=>[N(B(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1},8,["label"]),U(r,{dashed:""}),U(d,{class:"mt-20px",label:e.$t("Database.PhpAdmin.index_19")},{default:T((()=>[U(v,{value:H(p),loading:H(D),"onUpdate:value":P},null,8,["value","loading"])])),_:1},8,["label"]),H(p)?(C(),S(z,{key:0},[U(d,{label:e.$t("Database.PhpAdmin.index_20")},{default:T((()=>[j("div",be,[U(b,{value:H(c).username,"onUpdate:value":a[2]||(a[2]=e=>H(c).username=e),placeholder:e.$t("Database.PhpAdmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),U(d,{label:e.$t("Database.PhpAdmin.index_21")},{default:T((()=>[j("div",_e,[U(b,{value:H(c).password,"onUpdate:value":a[3]||(a[3]=e=>H(c).password=e),type:"password",placeholder:e.$t("Database.PhpAdmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),U(d,{label:e.$t("Database.PhpAdmin.index_22")},{default:T((()=>[j("div",he,[U(b,{value:H(c).repass,"onUpdate:value":a[4]||(a[4]=e=>H(c).repass=e),type:"password",placeholder:e.$t("Database.PhpAdmin.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"]),U(d,{label:" "},{default:T((()=>[U(i,{type:"primary",onClick:A},{default:T((()=>[N(B(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1})],64)):E("",!0),U(_,null,{default:T((()=>[j("li",null,B(e.$t("Database.PhpAdmin.index_24")),1)])),_:1})])),_:1})])}}}),ye={class:"h-580px"};e("default",D({__name:"index",props:{row:{default:void 0}},setup(e){const a=I(e,"row"),{t:n}=$(),l=k("service"),s=[{key:"service",label:n("Database.PhpAdmin.index_1"),component:pe},{key:"php",label:n("Database.PhpAdmin.index_2"),component:re},{key:"safe",label:n("Database.PhpAdmin.index_3"),component:xe}];return P(ee,{mysqlInfo:a}),(e,a)=>{const n=t;return C(),S("div",ye,[U(n,{value:H(l),"onUpdate:value":a[0]||(a[0]=e=>q(l)?l.value=e:null),ref:"tabsRef",data:s},null,8,["value"])])}}}))}}}));
