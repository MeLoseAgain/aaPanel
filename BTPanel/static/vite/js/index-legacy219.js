System.register(["./index-legacy95.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1741416570306","./index-legacy99.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1741416570306","./index-legacy240.js?v=1741416570306","./new-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./index-legacy96.js?v=1741416570306","./index-legacy123.js?v=1741416570306","./index-legacy.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy12.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1741416570306","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1741416570306","./site-legacy.js?v=1741416570306","./soft-legacy.js?v=1741416570306"],(function(e,l){"use strict";var t,n,a,o,r,s,d,_,i,u,c,p,v,j,x,m,g,w,y,f,h,b,N,$,k,C,U,q,D,E,M,O,P,R;return{setters:[e=>{t=e._},e=>{n=e._},e=>{a=e._},e=>{o=e.cj,r=e.eL,s=e.eM,d=e.b,_=e.eN,i=e.G,u=e.m,c=e.eO,p=e.j},e=>{v=e._},e=>{j=e.v},e=>{x=e.o},e=>{m=e.d,g=e.M,w=e.r,y=e.j,f=e.e,h=e.P,b=e.Q,N=e.N,$=e.$,k=e.R,C=e.S,U=e.a0,q=e._,D=e.ao,E=e.c},e=>{M=e.cb,O=e._,P=e.ch,R=e.bS},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"p-20px"},S={class:"w-360px"},A={class:"w-360px"},F={class:"w-200px"},G={class:"ml-10px text-default"},H={class:"w-440px"},I={class:"w-200px"},L={class:"ml-10px text-default"},Q={class:"w-150px"},z={class:"ml-10px text-default"},B={class:"w-150px"},J={class:"ml-10px text-default"},K={class:"w-440px"},T={class:"w-440px"};e("default",m({__name:"index",setup(e,{expose:m}){const{t:V}=g(),W=o(),X=w(null),Y=w(""),Z=y({project_cwd:"/www/wwwroot",project_name:"",project_script:null,project_script_two:"",port:null,run_user:"www",nodejs_version:null,project_ps:"",domains:""}),ee={project_cwd:{trigger:["blur","input"],required:!0,message:V("Node.index_28")},project_name:{trigger:["blur","input"],required:!0,message:V("Node.index_29")},project_script:{trigger:["change"],required:!0,message:V("Node.index_30")},project_script_two:{trigger:["blur","input"],required:!0,message:V("Node.index_31")},port:j(),nodejs_version:{trigger:["change"],required:!0,message:V("Node.index_32")},domains:{trigger:["blur"],validator:()=>{const e=Z.domains.trim().split("\n");if(""===Z.domains.trim())return!0;for(let l=0;l<e.length;l++)if(!r(e[l]))return new Error(`[${e[l]}] ${V("Node.index_82")}`);return!0}}},le=()=>{const e=Z.project_cwd.split("/"),l=e[e.length-1];Z.project_name=l,Z.project_ps=l,Y.value=Z.project_cwd,ae()},te=w([]),ne=f((()=>0===te.value.length)),ae=async()=>{const{message:e}=await s({project_cwd:Z.project_cwd});if(d(e)){const l=Object.keys(e).map((l=>({label:`${l} [${e[l]}]`,value:l})));Z.project_script=l.length?l[0].value:"custom",l.push({label:V("Node.index_33"),value:"custom"}),te.value=l}},oe=[{label:"www",value:"www"},{label:"root",value:"root"}],re=w([]),se=e=>{Z.project_ps=e};return(async()=>{const{message:e}=await _();i(e)&&e.length>0?(re.value=e.map((e=>({label:e,value:e}))),Z.nodejs_version=e[0]):(re.value=[],Z.nodejs_version=null,u.error({close:!0,content:V("Node.index_34"),onClose:()=>{x()}}))})(),m({onConfirm:async({hide:e})=>{await(X.value?.validate());const l=(()=>{const{project_script:e,port:l,nodejs_version:t}=Z;if(null===e)throw u.error(V("Node.index_35")),new Error(V("Node.index_35"));if(null===l)throw u.error(V("Node.index_36")),new Error(V("Node.index_36"));if(null===t)throw u.error(V("Node.index_37")),new Error(V("Node.index_37"));const n=Z.domains.trim()?Z.domains.trim().split("\n").map((e=>e.trim())).map((e=>e.indexOf(":")>-1?e:e+":80")):[];return{project_cwd:Z.project_cwd,project_name:Z.project_name,project_script:"custom"===Z.project_script?Z.project_script_two:e,port:`${l}`,run_user:Z.run_user,nodejs_version:t,project_ps:Z.project_ps,domains:n,bind_extranet:n.length?1:0,is_power_on:1,max_memory_limit:4096,project_env:""}})();await c(l),W.setRefresh(!0),e()}}),(e,o)=>{const r=v,s=M,d=O,_=P,i=R,u=p,c=a,j=n,m=t;return h(),b("div",l,[N(j,{ref_key:"formRef",ref:X,model:C(Z),rules:ee},{default:$((()=>[N(s,{label:e.$t("Docker.Container.index_17"),path:"project_cwd"},{default:$((()=>[k("div",S,[N(r,{value:C(Z).project_cwd,"onUpdate:value":o[0]||(o[0]=e=>C(Z).project_cwd=e),readonly:!0,onChange:le},null,8,["value"])])])),_:1},8,["label"]),N(s,{label:e.$t("Config.Alarm.index_43"),path:"project_name"},{default:$((()=>[k("div",A,[N(d,{value:C(Z).project_name,"onUpdate:value":[o[1]||(o[1]=e=>C(Z).project_name=e),se],placeholder:e.$t("Node.index_11")},null,8,["value","placeholder"])])])),_:1},8,["label"]),N(s,{label:e.$t("Node.index_12"),path:"project_script","show-feedback":!("custom"===C(Z).project_script)},{default:$((()=>[k("div",F,[N(_,{value:C(Z).project_script,"onUpdate:value":o[2]||(o[2]=e=>C(Z).project_script=e),placeholder:e.$t("Node.index_13"),disabled:C(ne),options:C(te)},null,8,["value","placeholder","disabled","options"])]),k("div",G,"* "+U(e.$t("Node.index_14")),1)])),_:1},8,["label","show-feedback"]),"custom"===C(Z).project_script?(h(),q(s,{key:0,class:"mt-8px",label:" ",path:"project_script_two"},{default:$((()=>[k("div",H,[N(r,{defaultPath:C(Y),"checked-type":["file"],value:C(Z).project_script_two,"onUpdate:value":o[3]||(o[3]=e=>C(Z).project_script_two=e)},null,8,["defaultPath","value"])])])),_:1})):D("",!0),N(s,{label:e.$t("Docker.Container.create.index_7"),path:"port"},{default:$((()=>[k("div",I,[N(i,{value:C(Z).port,"onUpdate:value":o[4]||(o[4]=e=>C(Z).port=e),min:1,max:65535,"show-button":!1,placeholder:e.$t("Node.index_15")},null,8,["value","placeholder"])]),k("div",L,"* "+U(e.$t("Node.index_15")),1)])),_:1},8,["label"]),N(s,{label:e.$t("Ftp.Analysis.Index_27")},{default:$((()=>[k("div",Q,[N(_,{value:C(Z).run_user,"onUpdate:value":o[5]||(o[5]=e=>C(Z).run_user=e),options:oe},null,8,["value"])]),k("div",z,"* "+U(e.$t("Node.index_16")),1)])),_:1},8,["label"]),N(s,{label:"Node",path:"nodejs_version"},{default:$((()=>[k("div",B,[N(_,{value:C(Z).nodejs_version,"onUpdate:value":o[6]||(o[6]=e=>C(Z).nodejs_version=e),options:C(re)},null,8,["value","options"])]),k("div",J,[k("span",null,"* "+U(e.$t("Node.index_17"))+", ",1),N(u,{onClick:C(x)},{default:$((()=>[E(U(e.$t("Node.index_18")),1)])),_:1},8,["onClick"])])])),_:1}),N(s,{label:e.$t("Docker.Container.create.index_46"),path:"project_ps"},{default:$((()=>[k("div",K,[N(d,{value:C(Z).project_ps,"onUpdate:value":o[7]||(o[7]=e=>C(Z).project_ps=e),placeholder:e.$t("Node.index_19")},null,8,["value","placeholder"])])])),_:1},8,["label"]),N(s,{label:e.$t("Mail.Domain.index_3"),path:"domains"},{default:$((()=>[k("div",T,[N(c,{value:C(Z).domains,"onUpdate:value":o[8]||(o[8]=e=>C(Z).domains=e),rows:5},{default:$((()=>[k("p",null,U(e.$t("Node.index_20")),1),k("p",null,U(e.$t("Node.index_21")),1),k("p",null,U(e.$t("Node.index_22")),1),k("p",null,U(e.$t("Node.index_23")),1)])),_:1},8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"]),N(m,{class:"mt-8px"},{default:$((()=>[k("li",null,U(e.$t("Node.index_24")),1),k("li",null,U(e.$t("Node.index_25")),1),k("li",null,U(e.$t("Node.index_26")),1),k("li",null,U(e.$t("Node.index_27")),1)])),_:1})])}}}))}}}));
