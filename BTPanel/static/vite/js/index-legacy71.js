System.register(["./index-legacy104.js?v=1742891699271","./page_layout-legacy.js?v=1742891699271","./index-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1742891699271","./public-legacy.js?v=1742891699271","./tools-legacy2.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1742891699271","./rules-legacy.js?v=1742891699271"],(function(e,t){"use strict";var l,a,i,n,o,d,c,r,u,s,_,p,y,k,f,x,m,W,h,v,B,g,w,b,C,$,j,q,S,U,M,R,P,z,D,L,A,E,O,I,N,T,Y,F,H,V,X,G,J,K,Q,Z,ee,te,le,ae;return{setters:[e=>{l=e._},e=>{a=e.bf,i=e.n,n=e.a9,o=e.k,d=e.W,c=e.cX,r=e.b,u=e.a,s=e.cI,_=e.m},e=>{p=e._},e=>{y=e._},e=>{k=e._},e=>{f=e._},e=>{x=e._},e=>{m=e.d,W=e.b,h=e.f,v=e.a},e=>{B=e.a,g=e.b,w=e.s,b=e.g,C=e.u,$=e.c,j=e.r,q=e.d,S=e.e,U=e.f},e=>{M=e.d,R=e.ar,P=e.O,z=e.r,D=e.as,L=e.y,A=e.R,E=e.S,O=e.P,I=e.a1,N=e.F,T=e.N,Y=e.c,F=e.a2,H=e.V,V=e.af,X=e.e,G=e.U,J=e.j,K=e.Y,Q=e.a0},e=>{Z=e.cs,ee=e.cl,te=e.T,le=e.ck},e=>{ae=e.j},null,null,null],execute:function(){var ie=document.createElement("style");ie.textContent=".bt-radio[data-v-bf5d25af] .n-radio-button:last-child{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.bt-date-picker[data-v-bf5d25af] .n-input{border-top-left-radius:0;border-bottom-left-radius:0}\n",document.head.appendChild(ie);const ne={class:"flex"},oe=o(M({__name:"query-date",props:{value:{default:()=>"all"},valueModifiers:{}},emits:R(["search"],["update:value"]),setup(e,{emit:t}){const l=t,{t:o}=P(),d=z("all"),c=z(null),r=D(e,"value"),u=[{label:o("Public.All"),value:"all"},{label:o("Public.Search.Today"),value:"today"},{label:o("Public.Search.Yesterday"),value:"yesterday"}],s=e=>{c.value=null,r.value=e,l("search")},_=e=>{d.value=e?"":"all",r.value=a(e)?e:"all",l("search")};return L((()=>{a(r.value)?(d.value="",c.value=r.value):i(r.value)&&(d.value=r.value||"",c.value=null)})),(e,t)=>{const l=Z,a=ee,i=n;return A(),E("div",ne,[O(a,{value:H(d),"onUpdate:value":[t[0]||(t[0]=e=>V(d)?d.value=e:null),s],class:"bt-radio"},{default:I((()=>[(A(),E(N,null,T(u,(e=>O(l,{key:e.value,value:e.value},{default:I((()=>[Y(F(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"]),O(i,{value:H(c),"onUpdate:value":[t[1]||(t[1]=e=>V(c)?c.value=e:null),_],type:"date",class:"bt-date-picker",clearable:!0},null,8,["value"])])}}}),[["__scopeId","data-v-bf5d25af"]]),de={class:"mt-4px mb-20px text-center"},ce={class:"text-18px"},re={class:"mt-4px text-desc text-13px"},ue=M({__name:"query-total",props:{total:{default:0},date:{default:"all"},isRule:{type:Boolean,default:!1}},setup(e){const t=e,{t:l}=P(),a=X((()=>{const{date:e}=t;return"all"===e?l("Public.All"):i("today"===e?new Date:"yesterday"===e?ae(new Date,-1):new Date(e))})),i=e=>`${d(e,"yyyy-MM-dd")} 00:00:00-23:59:59`;return(e,t)=>(A(),E("div",de,[G("div",ce,F(e.$t("Waf.Block.index_4",[e.total])),1),G("div",re,[e.isRule?(A(),E(N,{key:1},[Y(F(e.$t("Waf.Block.index_6")),1)],64)):(A(),E(N,{key:0},[Y(F(e.$t("Waf.Block.index_5",[H(a)])),1)],64))])]))}}),se=M({__name:"index",setup(e){const l=K((()=>u((()=>t.import("./clear-legacy.js?v=1742891699271")),void 0))),{t:i}=P(),n=()=>{const e=s();window.open(`${e}/btwaf/export_logs.json?siteName=all`)},o=m(i("Waf.Block.index_10")),_=()=>{o.show=!0},{table:v,columns:C,setLoading:$}=W([{key:"time_localtime",title:i("Waf.Block.index_12"),minWidth:150,width:"12%",render:e=>d(e.time_localtime)},{key:"ip",title:i("Waf.Block.index_13"),minWidth:120,width:"10%",ellipsis:{tooltip:!0}},{key:"server_name",title:i("Waf.Block.index_14"),minWidth:120,width:"12%",ellipsis:{tooltip:!0}},{key:"type",title:i("Waf.Block.index_15"),minWidth:60,width:"6%",ellipsis:{tooltip:!0}},{key:"uri",title:i("Waf.Block.index_16"),minWidth:140,ellipsis:{tooltip:{contentStyle:{maxWidth:"500px"}}},render:e=>c(e.uri)},{key:"status",title:i("Waf.Block.index_17"),minWidth:60,width:"6%",render:()=>i("Waf.Block.index_18")},{key:"ip_country",title:i("Waf.Block.index_19"),minWidth:140,width:"14%",render:e=>e.ip_country===i("Waf.Block.index_20")?e.ip_country:(e=>e.ip_country)(e)},{key:"filter_rule",title:i("Waf.Block.index_21"),minWidth:120,width:"10%",ellipsis:{tooltip:!0}},h({width:200,options:e=>[{label:i("Waf.Block.index_22"),onClick:()=>{B(e)}},{label:i("Waf.Block.index_23"),onClick:()=>{g(e,-1!==e.uri.indexOf("?")&&-1!==e.uri.indexOf("="))}},{label:i("Waf.Block.index_24"),onClick:()=>{w(e)}}]})]),j=J({p:1,limit:10,keyword:"",query_data:"all"}),q=()=>{const e=(()=>{if(a(j.query_data))return d(new Date(j.query_data),"yyyy-MM-dd");if("today"===j.query_data)return d(new Date,"yyyy-MM-dd");if("yesterday"===j.query_data){const e=new Date,t=ae(e,-1);return d(t,"yyyy-MM-dd")}return""})();return{p:j.p,limit:j.limit,...e?{query_data:e}:{},...j.keyword?{keyword:j.keyword}:{}}},S=async()=>{try{$(!0);const e=q(),{message:t}=await b(e);r(t)&&(v.data=t.data,v.total=t.total)}finally{$(!1)}},U=()=>{j.p=1,S()};return S(),(e,t)=>{const a=x,i=te,d=f,c=k,r=y,u=p;return A(),E("div",null,[O(r,null,{toolsLeft:I((()=>[O(a,{value:H(j).keyword,"onUpdate:value":t[0]||(t[0]=e=>H(j).keyword=e),width:"300",placeholder:e.$t("Waf.Block.index_8"),onSearch:U},null,8,["value","placeholder"]),O(i,{type:"primary",onClick:U},{default:I((()=>[Y(F(e.$t("Public.Btn.Search")),1)])),_:1}),O(i,{onClick:n},{default:I((()=>[Y(F(e.$t("Public.Btn.Export")),1)])),_:1}),O(i,{onClick:_},{default:I((()=>[Y(F(e.$t("Waf.Block.index_9")),1)])),_:1})])),toolsRight:I((()=>[O(oe,{value:H(j).query_data,"onUpdate:value":t[1]||(t[1]=e=>H(j).query_data=e),onSearch:U},null,8,["value"])])),table:I((()=>[O(ue,{total:H(v).total,date:H(j).query_data},null,8,["total","date"]),O(d,{loading:H(v).loading,data:H(v).data,columns:H(C)},null,8,["loading","data","columns"])])),pageRight:I((()=>[O(c,{page:H(j).p,"onUpdate:page":t[2]||(t[2]=e=>H(j).p=e),"page-size":H(j).limit,"onUpdate:pageSize":t[3]||(t[3]=e=>H(j).limit=e),"item-count":H(v).total,"store-key":"waf-block-record",onRefresh:S},null,8,["page","page-size","item-count"])])),_:1}),O(u,{show:H(o).show,"onUpdate:show":t[4]||(t[4]=e=>H(o).show=e),title:H(o).title,width:460,"min-height":96,footer:!0,component:H(l)},null,8,["show","title","component"])])}}}),_e={class:"mb-10px"},pe=M({__name:"index",setup(e){const{t:t}=P(),l=()=>{const e=s();window.open(`${e}/btwaf/index?export=export`)},i=()=>{v({title:t("Waf.Block.index_31"),content:t("Waf.Block.index_32"),onConfirm:async()=>{await j({safe_logs:1,site_all:0,site_logs:[]}),M()}})},n=()=>{v({title:t("Waf.Block.index_33"),content:t("Waf.Block.index_34"),onConfirm:async()=>{await q(),M()}})},{table:o,columns:u,setLoading:p}=W([{key:"time",title:t("Waf.Block.index_12"),minWidth:150,width:"12%",render:e=>d(e.time)},{key:"ip",title:t("Waf.Block.index_13"),minWidth:120,width:"10%",ellipsis:{tooltip:!0},render:e=>c(e.ip)},{key:"server_name",title:t("Waf.Block.index_25"),minWidth:120,width:"12%",ellipsis:{tooltip:!0}},{key:"uri",title:t("Waf.Block.index_16"),minWidth:140,ellipsis:{tooltip:{contentStyle:{maxWidth:"500px"}}},render:e=>c(e.uri)},{key:"blockade",title:t("Waf.Block.index_35"),minWidth:120,width:"10%",render:e=>"cc"==e.blockade&&e.incoming_value===t("Waf.Block.index_36")?t("Waf.Block.index_37"):"cc"==e.blockade&&e.incoming_value.startsWith(t("Waf.Block.index_38"))?t("Waf.Block.index_38"):"cc"==e.blockade&&e.incoming_value.startsWith(t("Waf.Block.index_39"))?t("Waf.Block.index_39"):"php"==e.blockade&&e.filter_rule.startsWith(t("Waf.Block.index_40"))?t("Waf.Block.index_40"):"upload"===e.blockade?t("Waf.Block.index_41"):"xss"===e.blockade?t("Waf.Block.index_42"):"sql"===e.blockade?t("Waf.Block.index_43"):"scan"===e.blockade?t("Waf.Block.index_44"):"user_agent"===e.blockade?t("Waf.Block.index_45"):"inc"===e.blockade&&e.incoming_value.startsWith(t("Waf.Block.index_46"))?t("Waf.Block.index_46"):"drop_abroad"===e.blockade&&e.incoming_value.startsWith(t("Waf.Block.index_47"))?t("Waf.Block.index_48"):"inc"===e.blockade?t("Waf.Block.index_49"):"cc"===e.blockade?"CC":t("Waf.Block.index_49")},{key:"blocking_time",title:t("Waf.Block.index_50"),minWidth:70,width:"6%",render:e=>t("Waf.Block.index_51",[e.blocking_time])},{key:"is_feng",title:t("Waf.Block.index_17"),minWidth:60,width:"6%",render:e=>e.is_feng?O("span",{class:"text-error"},[t("Waf.Block.index_56")]):t("Waf.Block.index_18")},{key:"ip_country",title:t("Waf.Block.index_19"),minWidth:140,width:"14%",render:e=>e.ip_country===t("Waf.Block.index_20")?e.ip_country:(e=>e.ip_country)(e)},h({width:240,options:e=>[{label:t("Waf.Block.index_52"),onClick:()=>{g(e,!1)}},{label:t("Waf.Block.index_22"),onClick:()=>{B(e)}},{label:t("Waf.Block.index_53"),onClick:()=>{m(e)}},{label:t("Waf.Block.index_24"),onClick:()=>{w(e)}}]})]),m=e=>{e.is_feng?v({title:t("Waf.Block.index_33"),content:t("Waf.Block.index_54",[e.ip]),onConfirm:async()=>{await C({ip:e.ip}),U()}}):_.success(t("Waf.Block.index_55"))},b=J({p:1,limit:10,keyword:"",query_data:"all"}),S=()=>{const e=(()=>{if(a(b.query_data))return d(new Date(b.query_data),"yyyy-MM-dd");if("today"===b.query_data)return d(new Date,"yyyy-MM-dd");if("yesterday"===b.query_data){const e=new Date,t=ae(e,-1);return d(t,"yyyy-MM-dd")}return""})();return{p:b.p,limit:b.limit,...e?{query_data:e}:{},...b.keyword?{keyword:b.keyword}:{}}},U=async()=>{try{p(!0);const e=S(),{message:t}=await $(e);r(t)&&(o.data=t.data,o.total=t.count)}finally{p(!1)}},M=()=>{b.p=1,U()};return U(),(e,t)=>{const a=x,d=te,c=f,r=k,s=y;return A(),E("div",null,[O(s,null,{toolsLeft:I((()=>[O(a,{value:H(b).keyword,"onUpdate:value":t[0]||(t[0]=e=>H(b).keyword=e),width:"300",placeholder:e.$t("Waf.Block.index_8"),onSearch:M},null,8,["value","placeholder"]),O(d,{type:"primary",onClick:M},{default:I((()=>[Y(F(e.$t("Public.Btn.Search")),1)])),_:1}),O(d,{onClick:l},{default:I((()=>[Y(F(e.$t("Public.Btn.Export")),1)])),_:1}),O(d,{onClick:i},{default:I((()=>[Y(F(e.$t("Waf.Block.index_9")),1)])),_:1})])),toolsRight:I((()=>[O(oe,{value:H(b).query_data,"onUpdate:value":t[1]||(t[1]=e=>H(b).query_data=e),onSearch:M},null,8,["value"])])),table:I((()=>[O(ue,{total:H(o).total,date:H(b).query_data},null,8,["total","date"]),G("div",_e,[O(d,{onClick:n},{default:I((()=>[Y(F(e.$t("Waf.Block.index_30")),1)])),_:1})]),O(c,{loading:H(o).loading,data:H(o).data,columns:H(u)},null,8,["loading","data","columns"])])),pageRight:I((()=>[O(r,{page:H(b).p,"onUpdate:page":t[2]||(t[2]=e=>H(b).p=e),"page-size":H(b).limit,"onUpdate:pageSize":t[3]||(t[3]=e=>H(b).limit=e),"item-count":H(o).total,"store-key":"waf-ip-record",onRefresh:U},null,8,["page","page-size","item-count"])])),_:1})])}}}),ye=M({__name:"index",setup(e){const l=K((()=>u((()=>t.import("./config-legacy4.js?v=1742891699271")),void 0))),{t:a}=P(),i=()=>{v({title:a("Waf.Block.index_60"),content:a("Waf.Block.index_61"),onConfirm:async()=>{await U(),g()}})},n=m(a("Waf.Block.index_57")),o=()=>{n.show=!0},{table:c,columns:s,setLoading:_}=W([{key:"timestimp",title:a("Waf.Block.index_12"),minWidth:150,width:"14%",render:e=>d(e.timestimp)},{key:"status",title:a("Waf.Block.index_17"),minWidth:80,width:"6%",render:e=>O("span",{class:e.status===a("Waf.Block.index_58")?"text-error":""},[e.status])},{key:"rule_ps",title:a("Waf.Block.index_62"),minWidth:120,ellipsis:{tooltip:!0},render:e=>O("span",{class:"text-primary"},[`${e.key}-${e.rule_ps}`])},{key:"server_name",title:a("Waf.Block.index_14"),minWidth:140,width:"14%",ellipsis:{tooltip:{contentStyle:{maxWidth:"500px"}}}},{key:"ip",title:a("Waf.Block.index_63"),minWidth:140,width:"14%",ellipsis:{tooltip:!0}},{key:"ip_country",title:a("Waf.Block.index_64"),minWidth:140,width:"14%",render:e=>O("span",null,[e.ip_country])}]),h=J({p:1,limit:10,filter:"all",keyword:""}),B=async()=>{try{_(!0);const e={p:1,limit:10,..."all"!==h.filter?{filter:h.filter}:{},...h.keyword?{keyword:h.keyword}:{}},{message:t}=await S(e);r(t)&&(c.data=t.list,c.total=t.total)}finally{_(!1)}},g=()=>{h.p=1,B()};return B(),(e,t)=>{const a=x,d=te,r=Z,u=ee,_=f,m=k,W=y,v=p;return A(),E("div",null,[O(W,null,{toolsLeft:I((()=>[O(a,{value:H(h).keyword,"onUpdate:value":t[0]||(t[0]=e=>H(h).keyword=e),width:"300",placeholder:e.$t("Waf.Block.index_8"),onSearch:g},null,8,["value","placeholder"]),O(d,{type:"primary",onClick:g},{default:I((()=>[Y(F(e.$t("Public.Btn.Search")),1)])),_:1}),O(d,{onClick:i},{default:I((()=>[Y(F(e.$t("Waf.Block.index_9")),1)])),_:1}),O(d,{onClick:o},{default:I((()=>[Y(F(e.$t("Waf.Block.index_57")),1)])),_:1})])),toolsRight:I((()=>[O(u,{value:H(h).filter,"onUpdate:value":[t[1]||(t[1]=e=>H(h).filter=e),g]},{default:I((()=>[O(r,{value:"all"},{default:I((()=>[Y(F(e.$t("Public.All")),1)])),_:1}),O(r,{value:"refuse"},{default:I((()=>[Y(F(e.$t("Waf.Block.index_58")),1)])),_:1}),O(r,{value:"accept"},{default:I((()=>[Y(F(e.$t("Waf.Block.index_59")),1)])),_:1})])),_:1},8,["value"])])),table:I((()=>[O(ue,{total:H(c).total,"is-rule":!0},null,8,["total"]),O(_,{loading:H(c).loading,data:H(c).data,columns:H(s)},null,8,["loading","data","columns"])])),pageRight:I((()=>[O(m,{page:H(h).p,"onUpdate:page":t[2]||(t[2]=e=>H(h).p=e),"page-size":H(h).limit,"onUpdate:pageSize":t[3]||(t[3]=e=>H(h).limit=e),"item-count":H(c).total,"store-key":"waf-rule-record",onRefresh:B},null,8,["page","page-size","item-count"])])),_:1}),O(v,{show:H(n).show,"onUpdate:show":t[4]||(t[4]=e=>H(n).show=e),title:H(n).title,data:H(n).data,width:400,"min-height":370,footer:!0,component:H(l)},null,8,["show","title","data","component"])])}}});e("default",M({__name:"index",setup(e){const{t:t}=P(),a=z("block"),i=[{key:"block",label:t("Waf.Block.index_1"),component:se},{key:"ip",label:t("Waf.Block.index_2"),component:pe},{key:"rule",label:t("Waf.Block.index_3"),component:ye}];return(e,t)=>{const n=l,o=le;return A(),Q(o,{class:"p-16px"},{default:I((()=>[O(n,{value:H(a),"onUpdate:value":t[0]||(t[0]=e=>V(a)?a.value=e:null),options:i},null,8,["value"])])),_:1})}}}))}}}));
