System.register(["./vue-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306"],(function(e,t){"use strict";var a,o,l,c,n,u,i,s,r,d,m,p,_,g,b,k,A,v,h,y,w,x,f,F,S,V,q,D,H,j,L,P,U,C,M,N;return{setters:[e=>{a=e.V,o=e.M,l=e.N,c=e.F,n=e.j,u=e.u,i=e.r,s=e.d,r=e.f,d=e.w,m=e.t,p=e.i,_=e.c},e=>{g=e.c,b=e.h,k=e.a,A=e.f},e=>{v=e.ae,h=e.b,y=e.aa,w=e.af,x=e.h,f=e.m,F=e.ag,S=e.ah,V=e.ai,q=e.aj,D=e.d,H=e.a5},e=>{j=e.bV,L=e.bS,P=e.ci,U=e.cb,C=e.a2,M=e.ch,N=e._}],execute:function(){var t=document.createElement("style");t.textContent=".inline-item{width:100%;display:flex;align-items:center;justify-content:space-between}.inline-item .left-item{flex:1;margin-right:20px}\n",document.head.appendChild(t),e("b",I);const O=e("a",a("aapanelsub-account-store",(()=>{const e=z(),{t:t}=o(),a=async()=>{try{u(!0);const{message:t}=await v(e.search);h(t)&&(e.table.data=t.list,e.table.total=t.page.count,e.account_total=t.account_total)}finally{u(!1)}},{loading:n,setLoading:u}=g(),i=async()=>{const{message:t}=await y();h(t)&&(e.packageSourceList=t.list,e.packageList=t.list.map((e=>({label:e.package_name,value:e.package_id}))),t.list.length>0&&(e.expendFormState.package_id=t.list[0].package_id,r(e.expendFormState.package_id)))},s=async()=>{const a=await w();if(h(a)){let o={};e.diskMountSourceList=a.message,e.diskMountPointList=a.message.map((e=>(e.is_default&&(o=e),{label:`${e.mountpoint} (${x(e.used)}/${x(e.total)}) ${t("Account.Account.account_533924-7")}:${e.is_group_quota?t("Account.Account.account_533924-5"):t("Account.Account.account_533924-6")}`,value:e.mountpoint}))),a.message.length>0&&(e.expendFormState.mountpoint=o.mountpoint||a.message[0].mountpoint,e.currentChangeDisk=0===Object.keys(o).length?a.message[0]:o)}},r=async t=>{const a=e.packageSourceList.find((e=>e.package_id===t));if(a){const{package_name:t,disk_space_quota:o,monthly_bandwidth_limit:l,max_site_limit:c,max_database:n,php_start_children:u,php_max_children:i,remark:s}=a;e.wpForData.package_name=t,e.wpForData.disk_space_quota=0==o?{value:"",unlimited:!0}:{value:o/1024/1024,unlimited:!1},e.wpForData.monthly_bandwidth_limit=0==l?{value:"",unlimited:!0}:{value:l/1024/1024,unlimited:!1},e.wpForData.max_site_limit=0===c?{value:"",unlimited:!0}:{value:c,unlimited:!1},e.wpForData.max_database=0==n?{value:"",unlimited:!0}:{value:n,unlimited:!1},e.wpForData.php_start_children=u,e.wpForData.php_max_children=i,e.wpForData.remark=s}},d=()=>{e.acForData.username="",e.acForData.password="",e.acForData.email="",e.acForData.expire_date="0000-00-00",e.expendFormState.package_id=void 0,m()},m=()=>{e.wpForData.package_name="",e.wpForData.disk_space_quota={value:"",unlimited:!1},e.wpForData.monthly_bandwidth_limit={value:"",unlimited:!1},e.wpForData.max_site_limit={value:"",unlimited:!1},e.wpForData.max_database={value:"",unlimited:!1},e.wpForData.php_start_children=1,e.wpForData.php_max_children=1,e.wpForData.remark=""};return{init:a,addHost:async()=>{if(e.table.total>=30)return f.error(t("Account.Account.account_533924-9",[30])),!1;d(),await i(),await s(),e.addVisible=!0,e.isEdit=!1},setLoading:u,loading:n,onLogin:async e=>{const{message:t}=await F({account_id:e});h(t)&&window.open(t.login_url+"?token="+t.token)},modifyStatus:async e=>{const{status:a,username:o}=e;k({title:`${t(0===a?"Site.PHP.index_21_2":"Site.PHP.index_21_3")} ${t("Account.Account.account_533924-0",[o])}`,content:t(0===a?"Account.Account.account_533924-1":"Account.Account.account_533924-2"),onConfirm:async()=>{await S({...e,status:0===a?1:0}),e.status=0===a?1:0}})},removeAccount:async e=>{k({title:t("Account.Account.account_673836-0",[e.username]),content:()=>l(c,null,[l("div",null,[t("Account.Account.account_673836-1")])]),onConfirm:async()=>{await q({account_id:e.account_id,is_del_resources:!0}),a()}})},form_save:async()=>{await(e.accountFormRef?.validate());const o=function(){const{package_id:t,mountpoint:a}=e.expendFormState,{username:o,password:l,email:c,expire_date:n,remark:u}=e.acForData,{disk_space_quota:i,monthly_bandwidth_limit:s,max_site_limit:r,max_database:d,php_start_children:m,php_max_children:p}=e.wpForData;return Object.assign({},{username:o,password:l,email:c,expire_date:n,package_id:t,mountpoint:a,disk_space_quota:i.unlimited?0:String(1024*Number(i.value)*1024),monthly_bandwidth_limit:s.unlimited?0:String(1024*Number(s.value)*1024),max_site_limit:r.unlimited?0:r.value,max_database:d.unlimited?0:d.value,php_start_children:m,php_max_children:p,remark:u})}();if(Number(o.disk_space_quota)>0&&!e.isEdit){const{is_group_quota:a,free:l}=e.currentChangeDisk;if(!a)return f.error(t("Account.Account.account_533924-3")),!1;if(l<Number(o.disk_space_quota))return f.error(t("Account.Account.account_533924-4")),!1}try{e.isEdit?(delete o.mountpoint,await S({account_id:e.current_account_id,...o}),d(),a()):(await V(o),d(),a())}catch(l){return Promise.reject(l)}},form_reset:d,package_form_reset:m,getPackageList:i,getDiskList:s,changePackage:r,copyInfo:e=>{const{url:t,user:a,pass:o}=e;b(`Access address: ${t}\nUsername: ${a}\ninit Password: ${o}`)}}}))),$=s({props:{options:Array,modelValue:Object,rules:Object,exclude:Array},setup(e,{attrs:t,slots:a,expose:o}){const s=i(null),d=n({});return o(d),r((()=>{Object.assign(d,{validate:s.value?.validate,restoreValidation:s.value?.restoreValidation})})),()=>l(c,null,[l(P,u(t,{model:e.modelValue,ref:s,rules:e.rules}),{default:()=>l(c,null,[e.options?.filter((t=>!e.exclude?.includes(t.key))).map((o=>function(e,t,a,o){const{label:c,key:n,type:i,options:s,el:r}=e;switch(i){case"input":case"password":return l(U,u({label:c,path:n},a),{default:()=>[l(N,u({value:t[n],"onUpdate:value":e=>t[n]=e},r),null)]});case"select":return l(U,u({label:c,path:e.key},a),{default:()=>[l(M,u({options:s,value:t[n],"onUpdate:value":e=>t[n]=e},r),null)]});case"checkbox":return l(U,u({label:c,path:e.key},a),{default:()=>[l(C,u({checked:t[n],"onUpdate:checked":e=>t[n]=e},r),null)]});case"date-picker":return l(U,u({label:c,path:e.key},a),{default:()=>[l(H,u({"formatted-value":t[n],"onUpdate:formatted-value":e=>t[n]=e,type:"date","value-format":"yyyy-MM-dd"},r),null)]});case"input-number":return l(U,u({label:c,path:e.key},a),{default:()=>[l(R,u({value:t[n],"onUpdate:value":e=>t[n]=e},r),null)]});case"custom-item":return l(U,u({label:c,path:e.key},a,{disabled:a.disabled}),{default:()=>[e.slots?.default(a)]});case"custom-slot":return l(U,u({label:c,path:e.key},a,{disabled:a.disabled}),{default:()=>[o&&o[e.key]?.()]})}}(o,e.modelValue,t,a)))])})])}});function E(){const e=[{type:"input",label:D.global.t("Account.Account.FormHooks-122755-1"),key:"username",el:{disabled:!0}},{type:"custom-slot",label:D.global.t("Account.Account.FormHooks-122755-2"),key:"password"},{type:"input",label:D.global.t("Account.Account.FormHooks-122755-4"),key:"email"},{type:"custom-slot",label:D.global.t("Account.Account.FormHooks-122755-5"),key:"expire_date"},{type:"input",label:D.global.t("Account.Account.FormHooks-122755-14"),key:"remark"}],t=n({username:"",password:"",email:"",expire_date:"0000-00-00",remark:""}),a=n({username:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-7"),trigger:"blur"}],password:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-8"),trigger:"blur"}],email:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-10"),trigger:"blur"}]});return[s({props:{isEdit:Boolean},setup(o,{attrs:c,expose:s,slots:d}){const m=i(),_=n({});return s(_),r((()=>{Object.assign(_,{validate:m.value?.validate,restoreValidation:m.value?.restoreValidation})})),o.isEdit?(e[0].el.disabled=!0,a.password[0].required=!1):(e[0].el.disabled=!1,a.password[0].required=!0),()=>{return l($,u({options:e,modelValue:t,"onUpdate:modelValue":e=>t=e,"label-placement":"left","label-width":"130px"},c,{rules:a,ref:m}),"function"==typeof(o=d)||"[object Object]"===Object.prototype.toString.call(o)&&!p(o)?d:{default:()=>[d]});var o}}}),t]}const B=s({props:{modelValue:Object},setup(e,{attrs:t}){const a=n({value:e.modelValue?.value?e.modelValue?.value:0,unlimited:!!e.modelValue?.unlimited&&e.modelValue?.unlimited});return d(a,(t=>{e.modelValue.value=t.value,e.modelValue.unlimited=t.unlimited})),()=>l("div",{class:"inline-item"},[l("div",{class:"left-item"},[l(R,{value:a.value,"onUpdate:value":e=>a.value=e,disabled:e.modelValue?.unlimited||t.disabled},null)]),l("div",{class:"right-item"},[l(j,{value:a.unlimited,"onUpdate:value":e=>a.unlimited=e,disabled:t.disabled},{checked:()=>D.global.t("Account.Account.FormHooks-122755-12"),unchecked:()=>D.global.t("Account.Account.FormHooks-122755-12")})])])}});function I(){const e=[{type:"input",label:D.global.t("Account.Account.FormHooks-122755-13"),key:"package_name"},{type:"input",label:D.global.t("Account.Account.FormHooks-122755-14"),key:"remark"},{type:"custom-item",label:D.global.t("Account.Account.FormHooks-122755-15"),key:"disk_space_quota",slots:{default:e=>l(B,u({modelValue:t.disk_space_quota,"onUpdate:modelValue":e=>t.disk_space_quota=e},e),null)}},{type:"custom-item",label:D.global.t("Account.Account.FormHooks-122755-16"),key:"monthly_bandwidth_limit",slots:{default:e=>l(B,u({modelValue:t.monthly_bandwidth_limit,"onUpdate:modelValue":e=>t.monthly_bandwidth_limit=e},e),null)}},{type:"custom-item",label:D.global.t("Account.Account.FormHooks-122755-17"),key:"max_site_limit",slots:{default:e=>l(B,u({modelValue:t.max_site_limit,"onUpdate:modelValue":e=>t.max_site_limit=e},e),null)}},{type:"input-number",label:D.global.t("Account.Account.FormHooks-122755-18"),key:"php_start_children"},{type:"input-number",label:D.global.t("Account.Account.FormHooks-122755-19"),key:"php_max_children"},{type:"custom-item",label:D.global.t("Account.Account.FormHooks-122755-21"),key:"max_database",slots:{default:e=>l(B,u({modelValue:t.max_database,"onUpdate:modelValue":e=>t.max_database=e},e),null)}}],t=n({package_name:"",remark:"",disk_space_quota:{value:0,unlimited:!0},monthly_bandwidth_limit:{value:0,unlimited:!0},max_site_limit:{value:0,unlimited:!0},php_start_children:1,php_max_children:3,max_email_account:{value:1,unlimited:!1},max_database:{value:0,unlimited:!0}}),a=n({package_name:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-22"),trigger:"blur"}],disk_space_quota:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-24"),trigger:"blur",validator:(e,t)=>!!t.unlimited||!!(t.value&&t.value>0)}],monthly_bandwidth_limit:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-25"),trigger:"blur",validator:(e,t)=>!!t.unlimited||!!(t.value&&t.value>0)}],max_site_limit:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-26"),trigger:"blur",validator:(e,t)=>!!t.unlimited||!!(t.value&&t.value>0)}],php_start_children:[{required:!0,validator:(e,t)=>!!t||new Error(D.global.t("Account.Account.FormHooks-122755-27"))}],php_max_children:[{required:!0,validator:(e,t)=>t>0||new Error(D.global.t("Account.Account.FormHooks-122755-28"))}],max_email_account:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-29"),trigger:"blur",validator:(e,t)=>!!t.unlimited||!!(t.value&&t.value>0)}],max_database:[{required:!0,message:D.global.t("Account.Account.FormHooks-122755-30"),trigger:"blur",validator:(e,t)=>!!t.unlimited||!!(t.value&&t.value>0)}]}),o=i();return[s({props:{isDisable:Boolean,exclude:Array},setup(u,{expose:s}){const m=n({}),p=i(!1);return s(m),r((()=>{Object.assign(m,{validate:o.value?.validate,restoreValidation:o.value?.restoreValidation})})),d(u,(e=>{"isDisable"in e&&(p.value=e.isDisable)}),{immediate:!0}),()=>l(c,null,[l($,{exclude:u.exclude,options:e,modelValue:t,"onUpdate:modelValue":e=>t=e,"label-placement":"left","label-width":"130px",rules:a,ref:o,disabled:p.value},null)])}}),t]}const R=s({props:{value:Number},emits:["update:value"],setup(e,{emit:t,attrs:a}){const o=m(e,"value"),c=i(e.value);function n(e){isNaN(Number(e))?(c.value=0,t("update:value",1)):(c.value=Math.round(e),t("update:value",Number(Math.floor(e))))}return d(o,(e=>{c.value=e})),()=>l(L,u(a,{value:c.value,clearable:!0,"onUpdate:value":n,min:1}),null)}}),T=e("q","data:image/svg+xml,%3csvg%20class='icon'%20style='vertical-align:%20bottom;'%20viewBox='0%200%201300%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4324'%20width='16'%20height='16'%3e%3cpath%20d='M1126.4%20512c0-113.152-91.648-204.8-204.8-204.8-61.952%200-115.2%2029.184-153.6%2082.432-38.4-53.248-91.136-82.432-153.6-82.432-113.152%200-204.8%2091.648-204.8%20204.8s91.648%20204.8%20204.8%20204.8c62.464%200%20115.2-29.184%20153.6-82.432%2038.4%2053.248%2091.648%2082.432%20153.6%2082.432%20113.152%200%20204.8-91.648%20204.8-204.8m102.4-307.2v614.4c0%2084.992-68.608%20153.6-153.6%20153.6H460.8c-84.992%200-153.6-68.608-153.6-153.6V204.8c0-84.992%2068.608-153.6%20153.6-153.6h614.4c84.992%200%20153.6%2068.608%20153.6%20153.6M614.4%20409.6c-56.32%200-102.4%2046.08-102.4%20102.4s46.08%20102.4%20102.4%20102.4c55.296%200%2084.992-52.736%20100.352-102.4-15.36-49.664-45.056-102.4-100.352-102.4m409.6%20102.4c0%2056.32-46.08%20102.4-102.4%20102.4-55.296%200-84.992-52.736-100.352-102.4%2015.36-49.664%2045.056-102.4%20100.352-102.4%2056.32%200%20102.4%2046.08%20102.4%20102.4'%20fill='%2320a53a'%20p-id='4325'%3e%3c/path%3e%3c/svg%3e"),z=e("u",a("account-state-store",(()=>{const e=O(),{t:t}=o(),a=i(!1),c=i(!1),u=i(null),s=i(30),r=n({data:[],total:0,loading:!1}),d=i([{title:t("Account.Account.accountState-721844-0"),key:"username",width:130,render:t=>l("span",{class:"text-primary cursor-pointer",onClick:()=>e.onLogin(t.account_id)},[t.username])},{title:t("Account.Account.accountState-721844-1"),key:"package_name",width:100},{title:t("Account.Account.accountState-721844-2"),key:"email"},{title:t("Account.Account.accountState-721844-20"),key:"login_info",width:80,render:a=>l("span",{class:"text-primary cursor-pointer",onClick:()=>e.copyInfo({url:a.login_url,user:a.username,pass:a.init_password})},[t("Public.Btn.Copy")])},{key:"quota",title:t("Account.Account.accountState-721844-3"),render:e=>l("span",{class:0===e.disk_space_status?"text-error":""},[0===e.disk_space_used&&0===e.disk_space_quota?"-":x(e.disk_space_used,!0,0),_(" /")," ",0===e.disk_space_quota?l("img",{class:"icon",title:"",src:T},null):x(e.disk_space_quota,!0,0)])},{key:"bandwidth",title:t("Account.Account.accountState-721844-7"),render:e=>l("span",{class:0===e.monthly_bandwidth_status?"text-error":""},[x(e.monthly_bandwidth_used,!0,2),_(" /")," ",0===e.monthly_bandwidth_limit?l("img",{class:"icon",title:"",src:T},null):x(e.monthly_bandwidth_limit,!0,0)])},{title:t("Account.Account.accountState-721844-8"),key:"status",width:68,render:a=>{const o=new Map([[-1,t("Account.Account.accountState-721844-9")],[0,t("Account.Account.accountState-721844-10")],[1,t("Account.Account.accountState-721844-11")],[2,t("Account.Account.accountState-721844-12")]]);return l("span",{onClick:()=>e.modifyStatus(a),class:"cursor-pointer "+(1===a.status||-1===a.status?"text-primary":"text-error")},[o.get(a.status)])}},{title:t("Account.Account.accountState-721844-13"),key:"expire_date",width:106,render:e=>"0000-00-00"===e.expire_date?t("Account.Account.account_index_10"):e.expire_date},{title:t("Account.Account.accountState-721844-14"),key:"remark",render:e=>e.remark?e.remark:"--"},A({title:t("Public.Table.Action"),align:"right",width:200,options:o=>[{label:t("Account.Account.accountState-721844-15"),onClick:async()=>{e.onLogin(o.account_id)}},{label:t("Account.Account.accountState-721844-16"),onClick:async()=>{await e.getPackageList(),await e.getDiskList(),g.value=Number(o.account_id),c.value=!0,w.username=o.username,w.password="",w.email=o.email,w.expire_date=o.expire_date,w.remark=o.remark,f.value.package_id=Number(o.package_id),f.value.mountpoint=o.mountpoint,e.changePackage(o.package_id),a.value=!0}},{label:t("Account.Account.accountState-721844-17"),onClick:async()=>{e.removeAccount(o)}}]})]),m=i([]),p=n({p:1,rows:10,type_id:-1,search_value:""}),g=i(null),b=i([]),k=i([]),v=i([]),h=i([]),[y,w]=E(),f=i({package_id:-1,mountpoint:""}),F=i(),[S,V]=I();return{addVisible:a,search:p,table:r,columns:d,keys:m,isEdit:c,accountFormRef:u,account_total:s,acForData:w,expendFormState:f,wpForData:V,packageList:b,packageSourceList:k,diskMountPointList:v,diskMountSourceList:h,current_account_id:g,currentChangeDisk:F,initAccountForm:()=>y,initPackageForm:()=>S}})))}}}));
