import{d as t,bh as s}from"./page_layout.js?v=1742891699271";const{t:a}=t.global,o=t=>s.post("/data?action=getData&table=logs&tojs=getLogs&limit=".concat(t.limit,"&p=").concat(t.p,"&search=").concat(t.search)),e=()=>s.post("/ajax?action=delClose",{requestOptions:{loading:a("Security.Api.Index_3"),successMessage:!0}}),i=()=>s.post("/config?action=get_panel_error_logs"),g=t=>s.post("/data?action=getData&table=crontab",t),l=t=>s.post("/data?action=getData&table=sites",t),n=t=>s.post("/logs/panel/get_logs_bytype",{data:JSON.stringify(t)}),c=t=>s.post("/site?action=GetSiteLogs",t),p=t=>s.post("/site?action=get_site_err_log",t),r=t=>s.post("/ajax?action=get_result&path=".concat(t.siteName)),_=t=>s.post("/ajax?action=log_analysis&path=".concat(t.siteName)),d=()=>s.post("/safe/syslog/get_sys_logfiles"),y=t=>s.post("/safe/syslog/get_sys_log",{data:JSON.stringify(t)}),f=t=>s.post("/safe/syslog/get_ssh_list",{data:JSON.stringify(t)}),b=()=>s.post("/logs/panel/get_slow_logs",{data:JSON.stringify({limit:5e3})}),m=t=>s.post("/database?action=GetErrorLog",t,{requestOptions:{loading:t?a("Security.Api.Index_3"):"",successMessage:!!t}}),u=()=>s.post("/data?action=getData&table=ftps",{p:1,limit:9999});export{g as a,o as b,l as c,e as d,n as e,c as f,i as g,p as h,r as i,d as j,y as k,f as l,u as m,b as n,m as o,_ as s};
