System.register(["./index-legacy104.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./index-legacy95.js?v=1742891699271","./public-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1742891699271"],(function(e,t){"use strict";var a,n,l,i,s,u,r,o,c,d,p,_,y,g,m,h,x,f,b,v,S,k,I,w,$,C,U,H,j,L,R,P,q,z,M,O,T,A,W,F,B,E,N,J,V,Y,D,G;return{setters:[e=>{a=e._},e=>{n=e._},e=>{l=e.d,i=e.bh,s=e.b,u=e.l,r=e.I,o=e.b7,c=e._,d=e.k},e=>{p=e.cq,_=e.b$,y=e.bY,g=e.ch,m=e._,h=e.a2,x=e.T,f=e.bU,b=e.cn,v=e.ck},e=>{S=e.d,k=e.O,I=e.r,w=e.j,$=e.R,C=e.S,U=e.U,H=e.c,j=e.a2,L=e.F,R=e.N,P=e.V,q=e.ap,z=e.P,M=e.a1,O=e.a0,T=e.af,A=e.M},e=>{W=e._},e=>{F=e.c,B=e.f,E=e.a,N=e.b},e=>{J=e._},e=>{V=e._},e=>{Y=e._},e=>{D=e._},e=>{G=e.T},null,null],execute:function(){var t=document.createElement("style");t.textContent=".n-alert[data-v-88b60c14]{--n-color: #f2dede;--n-icon-color: #ef0808;--n-content-text-color: #ef0808}\n",document.head.appendChild(t);const{t:K}=l.global,Q=()=>i.post("/breaking_through?action=get_config"),X=e=>i.post("/breaking_through?action=set_config",e,{requestOptions:{loading:K("Security.Api.Index_6"),successMessage:!0}}),Z=e=>i.post("/breaking_through?action=panel_ip_white",e,{requestOptions:{loading:K("Security.Api.Index_4"),successMessage:!0}}),ee=e=>i.post("/breaking_through?action=get_black_white",e),te=e=>i.post("/breaking_through?action=add_black_white",e,{requestOptions:{loading:K("Security.Api.Index_6"),successMessage:!0}}),ae=()=>i.post("/breaking_through?action=clear_history_record_limit",{},{requestOptions:{loading:K("Security.Api.Index_7"),successMessage:!0}}),ne=e=>i.post("/breaking_through?action=set_history_record_limit",e,{requestOptions:{loading:K("Security.Api.Index_6"),successMessage:!0}}),le={class:"pl-5px"},ie={key:0},se={class:"mb-15px"},ue={class:"mr-10px"},re={key:0},oe={class:"mr-10px"},ce=S({__name:"index",setup(e,{expose:t}){const{t:a}=k(),l=I(null),r=I(null),o=I(null),c=w({protectionUsername:!0,minutes:5,failures:5,radio:0,check:!1}),d=w({protectionIP:!0,minutes:15,failures:5,ip:"1s",check:!1}),f=w({failures:360}),b=w({user:["aapanel"],ip:["ssh"]}),v=async e=>{await X({username_status:e})},S=async e=>{await X({ip_status:e})},T=async()=>{f.failures&&await ne({history_limit:f.failures})},A={minutes:{trigger:["blur","change"],validator:(e,t)=>null!==t&&0!==t||new Error(a("Security.Conf.Index_27"))},failures:{required:!0,type:"number",trigger:["blur","change"],message:a("Security.Conf.Index_28")}},W={minutes:{trigger:["blur","change"],validator:(e,t)=>null!==t&&0!==t||new Error(a("Security.Conf.Index_27"))},failures:{required:!0,type:"number",trigger:["blur","change"],message:a("Security.Conf.Index_28")}},F={failures:{required:!0,type:"number",trigger:["blur","change"],message:a("Security.Conf.Index_28")}},B=async()=>{await(l.value?.validate()),await(r.value?.validate()),await(o.value?.validate()),await X({username_limit:c.minutes,username_count:c.failures,username_type:c.radio,username_limit_root:c.check,ip_limit:d.minutes,ip_count:d.failures,ip_command:d.ip,ip_ipset_filter:d.check,history_limit:f.failures}),E()},E=async()=>{const{message:e}=await Q();s(e)&&(c.protectionUsername=e.username_status,c.minutes=e.based_on_username.limit,c.failures=e.based_on_username.count,c.radio=e.based_on_username.type,c.check=e.based_on_username.limit_root,d.protectionIP=e.ip_status,d.minutes=e.based_on_ip.limit,d.failures=e.based_on_ip.count,d.ip=e.based_on_ip.command,d.check=e.based_on_ip.ipset_filter,f.failures=e.history_limit);const{message:t}=await i.post("/breaking_through?action=get_protected_services");s(t)&&(b.user=t.based_on_username,b.ip=t.based_on_ip)};return E(),t({init:E}),(e,t)=>{const a=p,i=_,s=y,k=g,I=n,w=u,E=m,N=h,J=x;return $(),C("div",le,[U("h3",null,[H(j(e.$t("Security.Conf.Index_5"))+" ("+j(e.$t("Security.Conf.Index_37"))+" ",1),($(!0),C(L,null,R(P(b).user,((e,t)=>($(),C("span",{key:t},[H(j(e),1),t<P(b).user.length-1?($(),C("span",ie,"、")):q("",!0)])))),128)),t[9]||(t[9]=H(") "))]),z(a,{"show-icon":!1,class:"my-15px"},{default:M((()=>[H(j(e.$t("Security.Conf.Index_6")),1)])),_:1}),U("div",se,[U("span",ue,j(e.$t("Site.TableRow.index_14")),1),z(i,{size:"small",value:P(c).protectionUsername,"onUpdate:value":[t[0]||(t[0]=e=>P(c).protectionUsername=e),v]},null,8,["value"])]),P(c).protectionUsername?($(),O(I,{key:0,ref_key:"userFormRef",ref:l,"label-placement":"top",model:P(c),rules:A},{default:M((()=>[z(k,{label:e.$t("Security.Conf.Index_7"),path:"minutes"},{default:M((()=>[z(s,{"show-button":!1,value:P(c).minutes,"onUpdate:value":t[1]||(t[1]=e=>P(c).minutes=e)},null,8,["value"])])),_:1},8,["label"]),z(k,{label:e.$t("Security.Conf.Index_8"),path:"failures"},{default:M((()=>[z(s,{"show-button":!1,value:P(c).failures,"onUpdate:value":t[2]||(t[2]=e=>P(c).failures=e)},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["model"])):q("",!0),z(w,{class:"mb-20px!"}),U("h3",null,[H(j(e.$t("Security.Conf.Index_12"))+" ("+j(e.$t("Security.Conf.Index_37"))+" ",1),($(!0),C(L,null,R(P(b).ip,((e,t)=>($(),C("span",{key:t},[H(j(e),1),t<P(b).ip.length-1?($(),C("span",re,"、")):q("",!0)])))),128)),t[10]||(t[10]=H(") "))]),z(a,{"show-icon":!1,class:"my-15px"},{default:M((()=>[H(j(e.$t("Security.Conf.Index_13")),1)])),_:1}),U("span",oe,j(e.$t("Site.TableRow.index_14")),1),z(i,{size:"small",value:P(d).protectionIP,"onUpdate:value":[t[3]||(t[3]=e=>P(d).protectionIP=e),S]},null,8,["value"]),P(d).protectionIP?($(),O(I,{key:1,ref_key:"ipFormRef",ref:r,"label-placement":"top",model:P(d),rules:W,class:"pt-15px"},{default:M((()=>[z(k,{label:e.$t("Security.Conf.Index_14"),path:"minutes"},{default:M((()=>[z(s,{"show-button":!1,value:P(d).minutes,"onUpdate:value":t[4]||(t[4]=e=>P(d).minutes=e)},null,8,["value"])])),_:1},8,["label"]),z(k,{label:e.$t("Security.Conf.Index_15"),path:"failures"},{default:M((()=>[z(s,{"show-button":!1,value:P(d).failures,"onUpdate:value":t[5]||(t[5]=e=>P(d).failures=e)},null,8,["value"])])),_:1},8,["label"]),z(k,{label:e.$t("Security.Conf.Index_16")},{default:M((()=>[z(E,{class:"w-150px!",value:P(d).ip,"onUpdate:value":t[6]||(t[6]=e=>P(d).ip=e),placeholder:e.$t("Security.Conf.Index_38")},null,8,["value","placeholder"])])),_:1},8,["label"]),z(N,{checked:P(d).check,"onUpdate:checked":t[7]||(t[7]=e=>P(d).check=e)},{default:M((()=>[H(j(e.$t("Security.Conf.Index_17")),1)])),_:1},8,["checked"])])),_:1},8,["model"])):q("",!0),z(w,{class:"my-20px!"}),U("h3",null,j(e.$t("Security.Conf.Index_22")),1),z(I,{"label-placement":"top",model:P(f),rules:F,ref_key:"historyFormRef",ref:o,class:"pt-15px"},{default:M((()=>[z(k,{label:e.$t("Security.Conf.Index_23"),path:"failures"},{default:M((()=>[z(s,{"show-button":!1,placeholder:e.$t("Site.Placeholder.Index_10"),value:P(f).failures,"onUpdate:value":t[8]||(t[8]=e=>P(f).failures=e),onBlur:T},null,8,["placeholder","value"])])),_:1},8,["label"])])),_:1},8,["model"]),z(w,{class:"mb-20px!"}),z(J,{type:"primary",onClick:B},{default:M((()=>[H(j(e.$t("Site.Cert.index_60")),1)])),_:1})])}}}),de={class:"pl-5px"},pe=S({__name:"index",setup(e,{expose:t}){const a=I(""),{loading:n,setLoading:l}=F(!0),i=async()=>{const e=JSON.stringify(a.value);await te({ips:e.replace(/^"|"$/g,""),types:"white",hand:!0}),s()},s=async()=>{try{l(!0);const{message:e}=await ee({types:"white"});r(e)&&(a.value=e.map((e=>`${e.ip} # ${e.ps}`)).join("\n"))}finally{l(!1)}};return s(),t({init:s}),(e,t)=>{const l=p,s=m,u=W,r=f,o=x;return $(),C("div",de,[z(l,{"show-icon":!1},{default:M((()=>[H(j(e.$t("Security.WhiteList.Index_1")),1)])),_:1}),z(r,{class:"items-center my-15px"},{default:M((()=>[z(s,{class:"w-500px!",type:"textarea",loading:P(n),value:P(a),"onUpdate:value":t[0]||(t[0]=e=>T(a)?a.value=e:null),autosize:{minRows:10},placeholder:e.$t("Ftp.Placeholder.Index_3")},null,8,["loading","value","placeholder"]),z(u,null,{default:M((()=>[U("li",null,j(e.$t("Security.WhiteList.Index_2")),1),U("li",null,j(e.$t("Security.WhiteList.Index_3")),1),U("li",null,j(e.$t("Security.WhiteList.Index_4")),1)])),_:1})])),_:1}),z(o,{type:"primary",onClick:i},{default:M((()=>[H(j(e.$t("Site.Cert.index_60")),1)])),_:1})])}}}),_e={class:"pl-5px"},ye=S({__name:"index",setup(e,{expose:t}){const a=I(""),{loading:n,setLoading:l}=F(!0),i=async()=>{const e=JSON.stringify(a.value);await te({ips:e.replace(/^"|"$/g,""),types:"black",hand:!0}),s()},s=async()=>{try{l(!0);const{message:e}=await ee({types:"black"});r(e)&&(a.value=e.map((e=>`${e.ip} # ${e.ps}`)).join("\n"))}finally{l(!1)}};return s(),t({init:s}),(e,t)=>{const l=p,s=m,u=W,r=f,o=x;return $(),C("div",_e,[z(l,{"show-icon":!1},{default:M((()=>[H(j(e.$t("Security.BlackList.Index_1")),1)])),_:1}),z(r,{class:"items-center my-15px"},{default:M((()=>[z(s,{class:"w-500px!",type:"textarea",loading:P(n),value:P(a),"onUpdate:value":t[0]||(t[0]=e=>T(a)?a.value=e:null),autosize:{minRows:10},placeholder:e.$t("Ftp.Placeholder.Index_3")},null,8,["loading","value","placeholder"]),z(u,null,{default:M((()=>[U("li",null,j(e.$t("Security.WhiteList.Index_2")),1),U("li",null,j(e.$t("Security.WhiteList.Index_3")),1),U("li",null,j(e.$t("Security.WhiteList.Index_4")),1)])),_:1})])),_:1}),z(o,{type:"primary",onClick:i},{default:M((()=>[H(j(e.$t("Site.Cert.index_60")),1)])),_:1})])}}}),ge=S({__name:"index",setup(e,{expose:t}){const{t:a}=k(),n=w({p:1,limit:10,keyword:"",types:"login"}),l=[{key:"user",title:a("Security.History.Index_7"),width:"15%"},{key:"ip",title:a("Security.History.Index_8"),width:"15%"},{key:"service",title:a("Security.History.Index_10"),width:"15%"},{key:"logintime",title:a("Security.History.Index_11"),align:"center",width:"10%"}],u=[{key:"ip",title:a("Security.History.Index_8"),width:"15%"},{key:"lock_status",title:a("Home.index_66"),width:"20%"},{key:"block_reason",title:a("Security.Anti.Index_21"),width:"20%"},{key:"exptime",title:a("Security.History.index_20"),width:"20%"},{key:"timeleft",title:a("Security.History.index_21"),width:"20%",align:"center"},B({title:a("Public.Table.Action"),align:"right",options:e=>[{label:a("Security.History.Index_16"),onClick:async()=>{E({title:`${a("Security.History.Index_16")} [${e.ip}]`,content:a("Security.History.Index_17"),onConfirm:async()=>{await Z({ip:e.ip,hand:!0,ps:"Manually add",clear_black:1}),v()}})}}]})],{keys:r,table:d,columns:p}=N(l),_=[{label:a("Security.History.Index_3"),value:"login"},{label:a("Security.History.Index_5"),value:"ip"}],y=async()=>{n.keyword="",n.p=1,d.data=[],p.value="ip"===n.types?u:l,v()},g=async()=>{E({title:a("Security.History.Index_1"),content:a("Security.History.Index_18"),onConfirm:async()=>{await ae(),v()}})},{loading:m,setLoading:h}=F(!0),v=async()=>{try{h(!0);const{message:t}=await(e=A(n),i.post("/breaking_through?action=get_history_record",e));s(t)?(d.data=t.data,d.total=o(t.page)):(d.data=[],d.total=0)}finally{r.value=[],h(!1)}var e};return v(),t({init:v}),(e,t)=>{const a=c,l=x,i=b,s=D,u=f,r=Y,o=V,h=J,S=W;return $(),C(L,null,[z(h,{class:"pl-5px"},{toolsLeft:M((()=>[z(l,{type:"primary",onClick:v},{icon:M((()=>[z(a,{name:"refresh",size:"14"})])),default:M((()=>[H(" "+j(e.$t("Public.Btn.Refresh")),1)])),_:1}),z(l,{onClick:g},{default:M((()=>[H(j(e.$t("Security.History.Index_1")),1)])),_:1})])),toolsRight:M((()=>[H(j(e.$t("Security.History.Index_2"))+" ",1),z(u,{class:"flex-nowrap!"},{default:M((()=>[z(i,{value:P(n).types,"onUpdate:value":[t[0]||(t[0]=e=>P(n).types=e),y],options:_,class:"w-200px"},null,8,["value"]),z(s,{value:P(n).keyword,"onUpdate:value":t[1]||(t[1]=e=>P(n).keyword=e),placeholder:e.$t("Security.History.Index_14"),onSearch:v},null,8,["value","placeholder"])])),_:1})])),table:M((()=>[z(r,{loading:P(m),data:P(d).data,columns:P(p)},null,8,["loading","data","columns"])])),pageRight:M((()=>[z(o,{page:P(n).p,"onUpdate:page":t[2]||(t[2]=e=>P(n).p=e),"page-size":P(n).limit,"onUpdate:pageSize":t[3]||(t[3]=e=>P(n).limit=e),"item-count":P(d).total,onRefresh:v},null,8,["page","page-size","item-count"])])),_:1}),"ip"===P(n).types?($(),O(S,{key:0},{default:M((()=>[U("li",null,j(e.$t("Security.History.Index_19")),1)])),_:1})):q("",!0)],64)}}}),me=S({__name:"index",setup(e){const{t:t}=k(),n=I("config"),l=[{key:"config",label:t("Security.Tabs.Index_1"),component:ce},{key:"white",label:t("Security.Tabs.Index_2"),component:pe},{key:"black",label:t("Security.Tabs.Index_3"),component:ye},{key:"history",label:t("Security.Tabs.Index_4"),component:ge}];return(e,t)=>{const i=a;return $(),O(i,{value:P(n),"onUpdate:value":t[0]||(t[0]=e=>T(n)?n.value=e:null),options:l},null,8,["value"])}}}),he={class:"mr-15px"},xe=S({__name:"index",setup(e){const{t:t}=k(),a=w({address:"",show:!1}),n=I(!1),l=async e=>{n.value=!e;const a=t("Security.Conf.Index_1"),l=t("Security.Conf.Index_4");E({title:a,content:l,onConfirm:async({hide:t})=>{await X({global_status:e}),n.value=e,t()}})},u=async()=>{await Z({ip:a.address,hand:!0}),c()},{loading:r,setLoading:o}=F(!0),c=async()=>{o(!0);const{message:e}=await Q();if(s(e)&&(n.value=e.global_status,o(!1),!e.global_status))return;const{data:t}=await G.get("https://api.ipify.org?format=json");a.address=t.ip;try{await(e=>i.post("/breaking_through?action=check_local_ip_white",e,{requestOptions:{loading:"",successMessage:!1,errorMessage:!1}}))({ip:t.ip}),a.show=!1}catch(l){a.show=!0,console.error(l)}};return c(),(e,t)=>{const i=x,s=p,o=_,c=f,d=v;return $(),C(L,null,[P(a).show&&P(n)?($(),O(s,{key:0,class:"py-10px",type:"warning",bordered:!1},{default:M((()=>[U("span",he,j(e.$t("Security.Conf.Index_2",[P(a).address])),1),z(i,{text:"",type:"primary",onClick:u},{default:M((()=>[H(" ["+j(e.$t("Security.Conf.Index_3"))+"] ",1)])),_:1})])),_:1})):q("",!0),z(d,{class:"my-15px"},{default:M((()=>[z(c,{class:"p-15px items-center"},{default:M((()=>[U("span",null,j(e.$t("Security.Conf.Index_1")),1),z(o,{value:P(n),"onUpdate:value":[t[0]||(t[0]=e=>T(n)?n.value=e:null),l],"rubber-band":!1,loading:P(r),size:"small"},null,8,["value","loading"])])),_:1})])),_:1}),P(n)?($(),O(d,{key:1,class:"p-15px"},{default:M((()=>[z(me)])),_:1})):q("",!0)],64)}}});e("default",d(xe,[["__scopeId","data-v-88b60c14"]]))}}}));
