System.register(["./page_layout-legacy.js?v=1741416570306"],(function(t,s){"use strict";var e,i;return{setters:[t=>{e=t.d,i=t.az}],execute:function(){const{t:s}=e.global;t("g",(t=>i.post("/panel/public/get_soft_status",{...t}))),t("s",(t=>i.post("/system?action=ServiceAdmin",{...t},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),t("b",(()=>i.post("/plugin?action=a&name=security_notice&s=get_status",{},{requestOptions:{isOriginalResult:!0,prefix:""}}))),t("a",(t=>i.post("/plugin?action=a&name=security_notice&s="+(t?"start_site":"stop_site"),{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}}))),t("d",(()=>i.post("/site?action=get_https_mode"))),t("c",(()=>i.post("/site?action=set_https_mode",{},{requestOptions:{loading:s("WP.api.tamper_8"),successMessage:!0}})))}}}));
