System.register(["./index-legacy104.js?v=1742891699271","./index-legacy123.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./soft-legacy.js?v=1742891699271","./index-legacy84.js?v=1742891699271","./site-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy18.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1742891699271","./file-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./index-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1742891699271","./site-legacy4.js?v=1742891699271","./index-legacy226.js?v=1742891699271","./index-legacy99.js?v=1742891699271","./index-legacy95.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy15.js?v=1742891699271","./theme-chrome-legacy.js?v=1742891699271","./refersh-legacy.js?v=1742891699271","./php-legacy.js?v=1742891699271","./index-legacy103.js?v=1742891699271","./index-legacy96.js?v=1742891699271"],(function(e,l){"use strict";var a,n,t,i,r,u,d,s,o,p,_,c,v,g,h,m,b,f,x,w,y,k,S,$,j,P,E,U,L,R,W,q,V,A,C,z,H,F,M,D,I,N,O,Q,T,B,G,J,K,X,Y,Z,ee,le;return{setters:[e=>{a=e._},e=>{n=e._},e=>{t=e._},e=>{i=e.db,r=e.I,u=e.g,d=e.c,s=e.b,o=e.j,p=e._,_=e.m,c=e.cH},e=>{v=e.d,g=e._,h=e.as,m=e.r,b=e.R,f=e.a0,x=e.V,w=e.n,y=e.w,k=e.e,S=e.O,$=e.j,j=e.a1,P=e.U,E=e.a2,U=e.c,L=e.ap,R=e.S,W=e.P,q=e.af,V=e.m},e=>{A=e.a},e=>{C=e.g,z=e.a,H=e.c,F=e.b},e=>{M=e.aq},e=>{D=e.c},e=>{I=e.cn,N=e._,O=e.ch,Q=e.c0,T=e.bU,B=e.a2,G=e.T,J=e.cs,K=e.cl,X=e.cr,Y=e.y},e=>{Z=e._},e=>{ee=e._},e=>{le=e.u},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l=v({__name:"index",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const l=i(),{phpVersion:a}=g(l),n=h(e,"value"),{loading:t,setLoading:u}=D(),d=m([]),s=e=>{a.value=e};return(async()=>{try{u(!0);const{message:e}=await M(),l=r(e)?e:[];d.value=l.reverse().filter((e=>"00"!==e.version)).map((e=>({label:e.name,value:e.version}))),await w(),l.length>0&&(n.value="00"==l[0].version?"":l[0].version,a.value="00"==l[0].version?"":l[0].version)}finally{u(!1)}})(),(e,l)=>{const a=I;return b(),f(a,{value:n.value,"onUpdate:value":[l[0]||(l[0]=e=>n.value=e),s],loading:x(t),options:x(d)},null,8,["value","loading","options"])}}}),ae=v({__name:"index",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const l=i();y((()=>l.phpVersion),(e=>{s(e)}));const a=k((()=>l.phpVersion?"Not supported by current PHP":"Please select PHP version")),n=h(e,"value"),{loading:t,setLoading:u}=D(),d=m([]),s=async e=>{try{u(!0),n.value="";const{message:l}=await C({php_version_short:e});r(l)&&(d.value=l.map((e=>({label:e.version,value:e.version}))),await w(),l.length>0&&(n.value=l[0].version))}finally{u(!1)}};return l.phpVersion&&s(l.phpVersion),(e,l)=>{const i=I;return b(),f(i,{value:n.value,"onUpdate:value":l[0]||(l[0]=e=>n.value=e),loading:x(t),options:x(d),placeholder:x(a)},null,8,["value","loading","options","placeholder"])}}}),ne={key:1},te={class:"w-400px"},ie={class:"w-400px"},re={class:"w-230px"},ue={class:"w-230px"},de={class:"w-400px"},se={class:"w-230px mr-16px"},oe={class:"w-400px"},pe={class:"w-400px"},_e=v({__name:"index",setup(e,{expose:a}){const{t:r}=S(),c=i(),{web:v,mysql:h,php:w}=g(c),y=m(null),k=$({domain:"",weblog_title:"",language:"en",php_version:null,wp_version:null,user_name:u(6),admin_password:d(16,"wp"),pw_weak:!1,admin_email:"",Login_url:"wp-admin",redirection_url:"404",prefix:"wp_"+u(6)+"_",enable_cache:!1,wps:!1}),V={domain:{required:!0,trigger:["blur","input"],validator:()=>""!==k.domain.trim()||new Error(r("Site.RulesError.index_31"))},weblog_title:{required:!0,trigger:["blur","input"],validator:()=>""!==k.weblog_title.trim()||new Error(r("Site.RulesError.index_3"))},language:{trigger:"change",validator:()=>null!==k.language||new Error(r("Site.RulesError.index_4"))},php_version:{trigger:"change",validator:()=>null!==k.php_version||new Error(r("Site.RulesError.index_5"))},wp_version:{trigger:"change",validator:()=>null!==k.php_version||new Error(r("Site.RulesError.index_6"))},user_name:{required:!0,trigger:["blur","input"],validator:()=>""!==k.user_name.trim()||new Error(r("Site.RulesError.index_7"))},admin_password:{required:!0,trigger:["blur","input"],validator:()=>""!==k.admin_password.trim()||new Error(r("Site.RulesError.index_8"))},admin_email:{required:!0,trigger:["blur","input"],validator:()=>""!==k.admin_email.trim()||new Error(r("Site.RulesError.index_9"))},redirection_url:{required:!0,trigger:["blur","input"],validator:()=>""!==k.redirection_url.trim()||new Error(r("Site.RulesError.index_12"))},Login_url:{required:!0,trigger:["blur","input"],validator:()=>""!==k.Login_url.trim()||new Error(r("Site.RulesError.index_11"))},prefix:{required:!0,trigger:["blur","input"],validator:()=>""!==k.prefix.trim()||new Error(r("Site.RulesError.index_10"))}},C=()=>{const{domain:e,php_version:l}=k,a=e.replace(new RegExp(/([-.])/g),"_");if(null===l)throw _.error(r("Site.RulesError.index_5")),new Error(r("Site.RulesError.index_5"));return{webname:{domain:e,domainlist:[],count:0},type:"PHP",port:80,type_id:0,ftp:!1,sql:"MySQL",codeing:"utf8",set_ssl:0,force_ssl:0,project_type:"WP",path:c.sitePath+"/"+e,ps:a,version:l,datauser:"sql_"+a,datapassword:u(16),password:k.admin_password,pw_weak:k.pw_weak?"on":"off",email:k.admin_email,weblog_title:k.weblog_title,language:k.language,user_name:k.user_name,prefix:k.prefix,enable_cache:k.enable_cache?1:0,enable_whl:0,whl_page:k.Login_url?k.Login_url:null,whl_redirect_admin:k.redirection_url?k.redirection_url:null,package_version:k.wp_version}};return a({onConfirm:async()=>{await(y.value?.validate());const{message:e}=await z(C());s(e)&&c.setRefresh(!0)}}),(e,a)=>{const i=o,r=N,u=O,d=p,s=Q,_=T,c=B,g=t,m=n;return b(),f(m,{install:x(h).setup&&x(w).setup},{desc:j((()=>[P("span",null,E(e.$t("WP.index_6")),1),x(w).setup?L("",!0):(b(),f(i,{key:0,class:"ml-4px",onClick:a[0]||(a[0]=e=>x(A)("php-8.0"))},{default:j((()=>[U(E(e.$t("WP.index_7")),1)])),_:1})),x(h).setup?L("",!0):(b(),R("span",ne,[a[14]||(a[14]=P("span",{class:"mx-4px"},"|",-1)),W(i,{onClick:a[1]||(a[1]=e=>x(A)("mysql"))},{default:j((()=>[U(E(e.$t("WP.index_8")),1)])),_:1})]))])),default:j((()=>[W(g,{ref_key:"formRef",ref:y,modelValue:x(k),"onUpdate:modelValue":a[13]||(a[13]=e=>q(k)?k.value=e:null),rules:V},{default:j((()=>[W(u,{label:e.$t("Site.Lable.index_1"),path:"domain"},{default:j((()=>[P("div",te,[W(r,{value:x(k).domain,"onUpdate:value":a[2]||(a[2]=e=>x(k).domain=e),placeholder:e.$t("Site.Placeholder.index_12")},null,8,["value","placeholder"])])])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_20"),path:"weblog_title"},{default:j((()=>[P("div",ie,[W(r,{value:x(k).weblog_title,"onUpdate:value":a[3]||(a[3]=e=>x(k).weblog_title=e),placeholder:e.$t("Site.Placeholder.index_13")},null,8,["value","placeholder"])])])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_21"),path:"language"},{default:j((()=>[P("div",re,[W(Z,{value:x(k).language,"onUpdate:value":a[4]||(a[4]=e=>x(k).language=e)},null,8,["value"])])])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_22"),path:"php_version"},{default:j((()=>[P("div",ue,[W(l,{value:x(k).php_version,"onUpdate:value":a[5]||(a[5]=e=>x(k).php_version=e)},null,8,["value"])])])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_23"),path:"wp_version"},{default:j((()=>[W(_,{class:"items-center",size:8},{default:j((()=>[W(ae,{value:x(k).wp_version,"onUpdate:value":a[6]||(a[6]=e=>x(k).wp_version=e),class:"w-230px"},null,8,["value"]),W(s,{trigger:"hover"},{trigger:j((()=>[W(d,{name:"common-ask",size:"18",color:"#999"})])),default:j((()=>[U(" "+E(e.$t("WP.Add.index_8")),1)])),_:1})])),_:1})])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_24"),path:"user_name"},{default:j((()=>[P("div",de,[W(r,{value:x(k).user_name,"onUpdate:value":a[7]||(a[7]=e=>x(k).user_name=e),placeholder:e.$t("Site.Placeholder.index_14")},null,8,["value","placeholder"])])])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_27"),path:"admin_password"},{default:j((()=>[P("div",se,[W(r,{value:x(k).admin_password,"onUpdate:value":a[8]||(a[8]=e=>x(k).admin_password=e),placeholder:e.$t("Site.Placeholder.index_15")},null,8,["value","placeholder"])]),W(c,{checked:x(k).pw_weak,"onUpdate:checked":a[9]||(a[9]=e=>x(k).pw_weak=e)},{default:j((()=>[P("span",null,E(e.$t("WP.Add.index_9")),1)])),_:1},8,["checked"])])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_28"),path:"admin_email"},{default:j((()=>[P("div",oe,[W(r,{value:x(k).admin_email,"onUpdate:value":a[10]||(a[10]=e=>x(k).admin_email=e),placeholder:e.$t("Site.Placeholder.index_16")},null,8,["value","placeholder"])])])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_29"),path:"prefix"},{default:j((()=>[P("div",pe,[W(r,{value:x(k).prefix,"onUpdate:value":a[11]||(a[11]=e=>x(k).prefix=e),placeholder:e.$t("Site.Placeholder.index_17")},null,8,["value","placeholder"])])])),_:1},8,["label"]),W(u,{label:e.$t("Site.Lable.index_31"),"show-feedback":!1},{default:j((()=>[W(c,{checked:x(k).enable_cache,"onUpdate:checked":a[12]||(a[12]=e=>x(k).enable_cache=e),disabled:"nginx"!==x(v).type},{default:j((()=>[P("span",null,E(e.$t("WP.Add.index_10")),1)])),_:1},8,["checked","disabled"])])),_:1},8,["label"])])),_:1},8,["modelValue"])])),_:1},8,["install"])}}}),ce=v({__name:"upload",props:{path:{default:"/"}},emits:["finish"],setup(e,{emit:l}){const a=e,n=l,t=m([]),i=async({file:e})=>{try{const l=new FormData;l.append("f_path",a.path),l.append("f_name",e.name),l.append("f_start","0"),e.file&&(l.append("blob",e.file),l.append("f_size",e.file.size.toString())),await le(l),n("finish",`${a.path}/${e.name}`)}finally{t.value=[]}};return(e,l)=>{const a=G,n=c;return b(),f(n,{ref:"upload",class:"w-auto",action:"","file-list":x(t),"onUpdate:fileList":l[0]||(l[0]=e=>q(t)?t.value=e:null),"show-file-list":!1,multiple:!1,"custom-request":i},{default:j((()=>[W(a,null,{default:j((()=>[V(e.$slots,"default")])),_:3})])),_:3},8,["file-list"])}}}),ve={class:"w-302px ml-12px"},ge={class:"w-400px"},he={class:"w-230px"},me=v({__name:"index",setup(e,{expose:a}){const{t:n}=S(),r=i(),{web:u}=g(r),d=m(null),s=m(null),o=$({method:1,bak_file:"",domain:"",sub_path:"",php_version:null,enable_cache:!1}),p={bak_file:{trigger:["blur","input"],validator:()=>""!==o.bak_file.trim()||new Error(n("WP.Add.import_6"))},domain:{trigger:["blur","input"],validator:()=>""!==o.domain.trim()||new Error(n("Site.RulesError.index_31"))},php_version:{trigger:"change",validator:()=>null!==o.php_version||new Error(n("Site.RulesError.index_5"))}},_=k((()=>o.domain?`/${o.domain}/`:"/")),c=()=>{s.value?.restoreValidation()},v=e=>{o.bak_file=e};return a({onConfirm:async()=>{await(d.value?.validate());const e={bak_file:o.bak_file,domain:o.domain,sub_path:o.sub_path,php_ver_short:o.php_version||"",enable_cache:o.enable_cache?1:0};1===o.method?await H(e):await F(e),r.setRefresh(!0)}}),(e,a)=>{const n=J,i=K,g=O,h=ee,m=N,w=X,y=Y,k=B,S=t;return b(),f(S,{ref_key:"formRef",ref:d,modelValue:x(o),"onUpdate:modelValue":a[6]||(a[6]=e=>q(o)?o.value=e:null),rules:p},{default:j((()=>[W(g,{label:e.$t("WP.Add.import_1")},{default:j((()=>[W(i,{value:x(o).method,"onUpdate:value":a[0]||(a[0]=e=>x(o).method=e)},{default:j((()=>[W(n,{label:e.$t("WP.Add.import_2"),value:1},null,8,["label"]),W(n,{label:e.$t("WP.Add.import_3"),value:2},null,8,["label"])])),_:1},8,["value"])])),_:1},8,["label"]),W(g,{ref_key:"bakFileRef",ref:s,label:e.$t("WP.Add.import_4"),path:"bak_file"},{default:j((()=>[W(ce,{path:"/www/server/panel/temp",onFinish:v},{default:j((()=>a[7]||(a[7]=[U(" Upload file ")]))),_:1}),P("div",ve,[W(h,{value:x(o).bak_file,"onUpdate:value":a[1]||(a[1]=e=>x(o).bak_file=e),"default-path":"/www/backup/wordpress","checked-type":["file"],onChange:c},null,8,["value"])])])),_:1},8,["label"]),W(g,{label:e.$t("Site.Lable.index_1"),path:"domain"},{default:j((()=>[P("div",ge,[W(m,{value:x(o).domain,"onUpdate:value":a[2]||(a[2]=e=>x(o).domain=e),placeholder:e.$t("Site.Placeholder.index_12")},null,8,["value","placeholder"])])])),_:1},8,["label"]),W(g,{label:e.$t("Site.PHP.add_site_9"),path:"path"},{default:j((()=>[W(y,{class:"w-400px"},{default:j((()=>[W(w,null,{default:j((()=>[U(E(x(r).sitePath)+E(x(_)),1)])),_:1}),W(m,{value:x(o).sub_path,"onUpdate:value":a[3]||(a[3]=e=>x(o).sub_path=e),placeholder:e.$t("WP.Add.import_5")},null,8,["value","placeholder"])])),_:1})])),_:1},8,["label"]),W(g,{label:e.$t("Site.Lable.index_22"),path:"php_version"},{default:j((()=>[P("div",he,[W(l,{value:x(o).php_version,"onUpdate:value":a[4]||(a[4]=e=>x(o).php_version=e)},null,8,["value"])])])),_:1},8,["label"]),W(g,{label:e.$t("Site.Lable.index_31"),"show-feedback":!1},{default:j((()=>[W(k,{checked:x(o).enable_cache,"onUpdate:checked":a[5]||(a[5]=e=>x(o).enable_cache=e),disabled:"nginx"!==x(u).type},{default:j((()=>[U(E(e.$t("WP.Add.index_10")),1)])),_:1},8,["checked","disabled"])])),_:1},8,["label"])])),_:1},8,["modelValue"])}}}),be={class:"p-20px h-full"};e("default",v({__name:"index",setup(e,{expose:l}){const{t:n}=S(),t=m("single"),i=m(),r=[{key:"single",label:n("WP.Add.index_1"),isLazy:!0,component:_e},{key:"import",label:n("WP.Add.index_2"),isLazy:!0,component:me}];return l({onConfirm:async()=>{await(i.value?.onConfirm())}}),(e,l)=>{const n=a;return b(),R("div",be,[W(n,{ref_key:"tabsRef",ref:i,value:x(t),"onUpdate:value":l[0]||(l[0]=e=>q(t)?t.value=e:null),options:r},null,8,["value"])])}}}))}}}));
