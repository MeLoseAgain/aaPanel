import{_ as e}from"./index104.js?v=1742891699271";import{_ as a}from"./index123.js?v=1742891699271";import{_ as l}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{db as r,I as t,g as i,c as n,b as s,j as o,_ as d,m as u,cH as p}from"./page_layout.js?v=1742891699271";import{d as _,_ as v,as as m,r as c,R as h,a0 as f,V as b,n as g,w as x,e as w,O as y,j as k,a1 as S,U as j,a2 as P,c as $,ap as E,S as U,P as L,af as R,m as W}from"./vue.js?v=1742891699271";import{a as q}from"./soft.js?v=1742891699271";import{g as V,a as A,c as C,b as z}from"./index84.js?v=1742891699271";import{aq as H}from"./site.js?v=1742891699271";import{c as F}from"./public.js?v=1742891699271";import{cn as M,_ as D,ch as I,c0 as N,bU as O,a2 as Q,T,cs as B,cl as G,cr as J,y as K}from"./naive.js?v=1742891699271";import{_ as X}from"./index.vue_vue_type_script_setup_true_lang18.js?v=1742891699271";import{_ as Y}from"./index.vue_vue_type_script_setup_true_lang10.js?v=1742891699271";import{u as Z}from"./file.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./index.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang12.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang7.js?v=1742891699271";import"./site4.js?v=1742891699271";import"./index226.js?v=1742891699271";import"./index99.js?v=1742891699271";import"./index95.js?v=1742891699271";import"./index.vue_vue_type_script_setup_true_lang15.js?v=1742891699271";import"./theme-chrome.js?v=1742891699271";import"./refersh.js?v=1742891699271";import"./php.js?v=1742891699271";import"./index103.js?v=1742891699271";import"./index96.js?v=1742891699271";const ee=_({__name:"index",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const a=r(),{phpVersion:l}=v(a),i=m(e,"value"),{loading:n,setLoading:s}=F(),o=c([]),d=e=>{l.value=e};return(async()=>{try{s(!0);const{message:e}=await H(),a=t(e)?e:[];o.value=a.reverse().filter((e=>"00"!==e.version)).map((e=>({label:e.name,value:e.version}))),await g(),a.length>0&&(i.value="00"==a[0].version?"":a[0].version,l.value="00"==a[0].version?"":a[0].version)}finally{s(!1)}})(),(e,a)=>{const l=M;return h(),f(l,{value:i.value,"onUpdate:value":[a[0]||(a[0]=e=>i.value=e),d],loading:b(n),options:b(o)},null,8,["value","loading","options"])}}}),ae=_({__name:"index",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const a=r();x((()=>a.phpVersion),(e=>{d(e)}));const l=w((()=>a.phpVersion?"Not supported by current PHP":"Please select PHP version")),i=m(e,"value"),{loading:n,setLoading:s}=F(),o=c([]),d=async e=>{try{s(!0),i.value="";const{message:a}=await V({php_version_short:e});t(a)&&(o.value=a.map((e=>({label:e.version,value:e.version}))),await g(),a.length>0&&(i.value=a[0].version))}finally{s(!1)}};return a.phpVersion&&d(a.phpVersion),(e,a)=>{const r=M;return h(),f(r,{value:i.value,"onUpdate:value":a[0]||(a[0]=e=>i.value=e),loading:b(n),options:b(o),placeholder:b(l)},null,8,["value","loading","options","placeholder"])}}}),le={key:1},re={class:"w-400px"},te={class:"w-400px"},ie={class:"w-230px"},ne={class:"w-230px"},se={class:"w-400px"},oe={class:"w-230px mr-16px"},de={class:"w-400px"},ue={class:"w-400px"},pe=_({__name:"index",setup(e,{expose:t}){const{t:p}=y(),_=r(),{web:m,mysql:g,php:x}=v(_),w=c(null),W=k({domain:"",weblog_title:"",language:"en",php_version:null,wp_version:null,user_name:i(6),admin_password:n(16,"wp"),pw_weak:!1,admin_email:"",Login_url:"wp-admin",redirection_url:"404",prefix:"wp_"+i(6)+"_",enable_cache:!1,wps:!1}),V={domain:{required:!0,trigger:["blur","input"],validator:()=>""!==W.domain.trim()||new Error(p("Site.RulesError.index_31"))},weblog_title:{required:!0,trigger:["blur","input"],validator:()=>""!==W.weblog_title.trim()||new Error(p("Site.RulesError.index_3"))},language:{trigger:"change",validator:()=>null!==W.language||new Error(p("Site.RulesError.index_4"))},php_version:{trigger:"change",validator:()=>null!==W.php_version||new Error(p("Site.RulesError.index_5"))},wp_version:{trigger:"change",validator:()=>null!==W.php_version||new Error(p("Site.RulesError.index_6"))},user_name:{required:!0,trigger:["blur","input"],validator:()=>""!==W.user_name.trim()||new Error(p("Site.RulesError.index_7"))},admin_password:{required:!0,trigger:["blur","input"],validator:()=>""!==W.admin_password.trim()||new Error(p("Site.RulesError.index_8"))},admin_email:{required:!0,trigger:["blur","input"],validator:()=>""!==W.admin_email.trim()||new Error(p("Site.RulesError.index_9"))},redirection_url:{required:!0,trigger:["blur","input"],validator:()=>""!==W.redirection_url.trim()||new Error(p("Site.RulesError.index_12"))},Login_url:{required:!0,trigger:["blur","input"],validator:()=>""!==W.Login_url.trim()||new Error(p("Site.RulesError.index_11"))},prefix:{required:!0,trigger:["blur","input"],validator:()=>""!==W.prefix.trim()||new Error(p("Site.RulesError.index_10"))}};return t({onConfirm:async()=>{var e;await(null==(e=w.value)?void 0:e.validate());const{message:a}=await A((()=>{const{domain:e,php_version:a}=W,l=e.replace(new RegExp(/([-.])/g),"_");if(null===a)throw u.error(p("Site.RulesError.index_5")),new Error(p("Site.RulesError.index_5"));return{webname:{domain:e,domainlist:[],count:0},type:"PHP",port:80,type_id:0,ftp:!1,sql:"MySQL",codeing:"utf8",set_ssl:0,force_ssl:0,project_type:"WP",path:_.sitePath+"/"+e,ps:l,version:a,datauser:"sql_"+l,datapassword:i(16),password:W.admin_password,pw_weak:W.pw_weak?"on":"off",email:W.admin_email,weblog_title:W.weblog_title,language:W.language,user_name:W.user_name,prefix:W.prefix,enable_cache:W.enable_cache?1:0,enable_whl:0,whl_page:W.Login_url?W.Login_url:null,whl_redirect_admin:W.redirection_url?W.redirection_url:null,package_version:W.wp_version}})());s(a)&&_.setRefresh(!0)}}),(e,r)=>{const t=o,i=D,n=I,s=d,u=N,p=O,_=Q,v=l,c=a;return h(),f(c,{install:b(g).setup&&b(x).setup},{desc:S((()=>[j("span",null,P(e.$t("WP.index_6")),1),b(x).setup?E("",!0):(h(),f(t,{key:0,class:"ml-4px",onClick:r[0]||(r[0]=e=>b(q)("php-8.0"))},{default:S((()=>[$(P(e.$t("WP.index_7")),1)])),_:1})),b(g).setup?E("",!0):(h(),U("span",le,[r[14]||(r[14]=j("span",{class:"mx-4px"},"|",-1)),L(t,{onClick:r[1]||(r[1]=e=>b(q)("mysql"))},{default:S((()=>[$(P(e.$t("WP.index_8")),1)])),_:1})]))])),default:S((()=>[L(v,{ref_key:"formRef",ref:w,modelValue:b(W),"onUpdate:modelValue":r[13]||(r[13]=e=>R(W)?W.value=e:null),rules:V},{default:S((()=>[L(n,{label:e.$t("Site.Lable.index_1"),path:"domain"},{default:S((()=>[j("div",re,[L(i,{value:b(W).domain,"onUpdate:value":r[2]||(r[2]=e=>b(W).domain=e),placeholder:e.$t("Site.Placeholder.index_12")},null,8,["value","placeholder"])])])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_20"),path:"weblog_title"},{default:S((()=>[j("div",te,[L(i,{value:b(W).weblog_title,"onUpdate:value":r[3]||(r[3]=e=>b(W).weblog_title=e),placeholder:e.$t("Site.Placeholder.index_13")},null,8,["value","placeholder"])])])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_21"),path:"language"},{default:S((()=>[j("div",ie,[L(X,{value:b(W).language,"onUpdate:value":r[4]||(r[4]=e=>b(W).language=e)},null,8,["value"])])])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_22"),path:"php_version"},{default:S((()=>[j("div",ne,[L(ee,{value:b(W).php_version,"onUpdate:value":r[5]||(r[5]=e=>b(W).php_version=e)},null,8,["value"])])])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_23"),path:"wp_version"},{default:S((()=>[L(p,{class:"items-center",size:8},{default:S((()=>[L(ae,{value:b(W).wp_version,"onUpdate:value":r[6]||(r[6]=e=>b(W).wp_version=e),class:"w-230px"},null,8,["value"]),L(u,{trigger:"hover"},{trigger:S((()=>[L(s,{name:"common-ask",size:"18",color:"#999"})])),default:S((()=>[$(" "+P(e.$t("WP.Add.index_8")),1)])),_:1})])),_:1})])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_24"),path:"user_name"},{default:S((()=>[j("div",se,[L(i,{value:b(W).user_name,"onUpdate:value":r[7]||(r[7]=e=>b(W).user_name=e),placeholder:e.$t("Site.Placeholder.index_14")},null,8,["value","placeholder"])])])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_27"),path:"admin_password"},{default:S((()=>[j("div",oe,[L(i,{value:b(W).admin_password,"onUpdate:value":r[8]||(r[8]=e=>b(W).admin_password=e),placeholder:e.$t("Site.Placeholder.index_15")},null,8,["value","placeholder"])]),L(_,{checked:b(W).pw_weak,"onUpdate:checked":r[9]||(r[9]=e=>b(W).pw_weak=e)},{default:S((()=>[j("span",null,P(e.$t("WP.Add.index_9")),1)])),_:1},8,["checked"])])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_28"),path:"admin_email"},{default:S((()=>[j("div",de,[L(i,{value:b(W).admin_email,"onUpdate:value":r[10]||(r[10]=e=>b(W).admin_email=e),placeholder:e.$t("Site.Placeholder.index_16")},null,8,["value","placeholder"])])])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_29"),path:"prefix"},{default:S((()=>[j("div",ue,[L(i,{value:b(W).prefix,"onUpdate:value":r[11]||(r[11]=e=>b(W).prefix=e),placeholder:e.$t("Site.Placeholder.index_17")},null,8,["value","placeholder"])])])),_:1},8,["label"]),L(n,{label:e.$t("Site.Lable.index_31"),"show-feedback":!1},{default:S((()=>[L(_,{checked:b(W).enable_cache,"onUpdate:checked":r[12]||(r[12]=e=>b(W).enable_cache=e),disabled:"nginx"!==b(m).type},{default:S((()=>[j("span",null,P(e.$t("WP.Add.index_10")),1)])),_:1},8,["checked","disabled"])])),_:1},8,["label"])])),_:1},8,["modelValue"])])),_:1},8,["install"])}}}),_e=_({__name:"upload",props:{path:{default:"/"}},emits:["finish"],setup(e,{emit:a}){const l=e,r=a,t=c([]),i=async({file:e})=>{try{const a=new FormData;a.append("f_path",l.path),a.append("f_name",e.name),a.append("f_start","0"),e.file&&(a.append("blob",e.file),a.append("f_size",e.file.size.toString())),await Z(a),r("finish","".concat(l.path,"/").concat(e.name))}finally{t.value=[]}};return(e,a)=>{const l=T,r=p;return h(),f(r,{ref:"upload",class:"w-auto",action:"","file-list":b(t),"onUpdate:fileList":a[0]||(a[0]=e=>R(t)?t.value=e:null),"show-file-list":!1,multiple:!1,"custom-request":i},{default:S((()=>[L(l,null,{default:S((()=>[W(e.$slots,"default")])),_:3})])),_:3},8,["file-list"])}}}),ve={class:"w-302px ml-12px"},me={class:"w-400px"},ce={class:"w-230px"},he=_({__name:"index",setup(e,{expose:a}){const{t:t}=y(),i=r(),{web:n}=v(i),s=c(null),o=c(null),d=k({method:1,bak_file:"",domain:"",sub_path:"",php_version:null,enable_cache:!1}),u={bak_file:{trigger:["blur","input"],validator:()=>""!==d.bak_file.trim()||new Error(t("WP.Add.import_6"))},domain:{trigger:["blur","input"],validator:()=>""!==d.domain.trim()||new Error(t("Site.RulesError.index_31"))},php_version:{trigger:"change",validator:()=>null!==d.php_version||new Error(t("Site.RulesError.index_5"))}},p=w((()=>d.domain?"/".concat(d.domain,"/"):"/")),_=()=>{var e;null==(e=o.value)||e.restoreValidation()},m=e=>{d.bak_file=e};return a({onConfirm:async()=>{var e;await(null==(e=s.value)?void 0:e.validate());const a={bak_file:d.bak_file,domain:d.domain,sub_path:d.sub_path,php_ver_short:d.php_version||"",enable_cache:d.enable_cache?1:0};1===d.method?await C(a):await z(a),i.setRefresh(!0)}}),(e,a)=>{const r=B,t=G,v=I,c=Y,g=D,x=J,w=K,y=Q,k=l;return h(),f(k,{ref_key:"formRef",ref:s,modelValue:b(d),"onUpdate:modelValue":a[6]||(a[6]=e=>R(d)?d.value=e:null),rules:u},{default:S((()=>[L(v,{label:e.$t("WP.Add.import_1")},{default:S((()=>[L(t,{value:b(d).method,"onUpdate:value":a[0]||(a[0]=e=>b(d).method=e)},{default:S((()=>[L(r,{label:e.$t("WP.Add.import_2"),value:1},null,8,["label"]),L(r,{label:e.$t("WP.Add.import_3"),value:2},null,8,["label"])])),_:1},8,["value"])])),_:1},8,["label"]),L(v,{ref_key:"bakFileRef",ref:o,label:e.$t("WP.Add.import_4"),path:"bak_file"},{default:S((()=>[L(_e,{path:"/www/server/panel/temp",onFinish:m},{default:S((()=>a[7]||(a[7]=[$(" Upload file ")]))),_:1}),j("div",ve,[L(c,{value:b(d).bak_file,"onUpdate:value":a[1]||(a[1]=e=>b(d).bak_file=e),"default-path":"/www/backup/wordpress","checked-type":["file"],onChange:_},null,8,["value"])])])),_:1},8,["label"]),L(v,{label:e.$t("Site.Lable.index_1"),path:"domain"},{default:S((()=>[j("div",me,[L(g,{value:b(d).domain,"onUpdate:value":a[2]||(a[2]=e=>b(d).domain=e),placeholder:e.$t("Site.Placeholder.index_12")},null,8,["value","placeholder"])])])),_:1},8,["label"]),L(v,{label:e.$t("Site.PHP.add_site_9"),path:"path"},{default:S((()=>[L(w,{class:"w-400px"},{default:S((()=>[L(x,null,{default:S((()=>[$(P(b(i).sitePath)+P(b(p)),1)])),_:1}),L(g,{value:b(d).sub_path,"onUpdate:value":a[3]||(a[3]=e=>b(d).sub_path=e),placeholder:e.$t("WP.Add.import_5")},null,8,["value","placeholder"])])),_:1})])),_:1},8,["label"]),L(v,{label:e.$t("Site.Lable.index_22"),path:"php_version"},{default:S((()=>[j("div",ce,[L(ee,{value:b(d).php_version,"onUpdate:value":a[4]||(a[4]=e=>b(d).php_version=e)},null,8,["value"])])])),_:1},8,["label"]),L(v,{label:e.$t("Site.Lable.index_31"),"show-feedback":!1},{default:S((()=>[L(y,{checked:b(d).enable_cache,"onUpdate:checked":a[5]||(a[5]=e=>b(d).enable_cache=e),disabled:"nginx"!==b(n).type},{default:S((()=>[$(P(e.$t("WP.Add.index_10")),1)])),_:1},8,["checked","disabled"])])),_:1},8,["label"])])),_:1},8,["modelValue"])}}}),fe={class:"p-20px h-full"},be=_({__name:"index",setup(a,{expose:l}){const{t:r}=y(),t=c("single"),i=c(),n=[{key:"single",label:r("WP.Add.index_1"),isLazy:!0,component:pe},{key:"import",label:r("WP.Add.index_2"),isLazy:!0,component:he}];return l({onConfirm:async()=>{var e;await(null==(e=i.value)?void 0:e.onConfirm())}}),(a,l)=>{const r=e;return h(),U("div",fe,[L(r,{ref_key:"tabsRef",ref:i,value:b(t),"onUpdate:value":l[0]||(l[0]=e=>R(t)?t.value=e:null),options:n},null,8,["value"])])}}});export{be as default};
