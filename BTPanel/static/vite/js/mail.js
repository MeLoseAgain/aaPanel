import{az as s,d as a}from"./page_layout.js?v=1741416570306";const i=a=>s.post("/plugin?action=a&name=mail_sys&s=get_data_info",a),e=a=>s.post("/plugin?action=a&name=mail_sys&s=get_domains",a),n=a=>s.post("/plugin?action=a&name=mail_sys&s=flush_domain_record",a),t=i=>s.post("/plugin?action=a&name=mail_sys&s=enable_catchall",i,{requestOptions:{loading:a.global.t("Mail.Api.index_1"),successMessage:!0}}),l=i=>s.post("/plugin?action=a&name=mail_sys&s=set_mail_certificate_multiple",{...i,act:"add"},{requestOptions:{loading:a.global.t("Mail.Api.index_2"),successMessage:!0}}),o=i=>s.post("/plugin?action=a&name=mail_sys&s=set_mail_certificate_multiple",{...i,act:"delete"},{requestOptions:{loading:a.global.t("Mail.Api.index_5"),successMessage:!0}}),p=i=>s.post("/plugin?action=a&name=mail_sys&s=add_domain_new",i,{requestOptions:{loading:a.global.t("Mail.Api.index_3"),successMessage:!0,errorMessage:{close:!0}}}),_=i=>s.post("/plugin?action=a&name=mail_sys&s=update_domain",i,{requestOptions:{loading:a.global.t("Mail.Api.index_4"),successMessage:!0}}),g=i=>s.post("/plugin?action=a&name=mail_sys&s=delete_domain",i,{requestOptions:{loading:a.global.t("Mail.Api.index_5"),successMessage:!0}}),c=i=>s.post("/plugin?action=a&name=mail_sys&s=delete_mx_txt_cache",i,{requestOptions:{loading:a.global.t("Mail.Api.index_6"),successMessage:!0}}),u=()=>s.post("/plugin?action=a&name=mail_sys&s=get_domain_name"),m=a=>s.post("/plugin?action=a&name=mail_sys&s=get_mailboxs",a),d=i=>s.post("/plugin?action=a&name=mail_sys&s=add_mailbox",i,{requestOptions:{loading:a.global.t("Mail.Api.index_7"),successMessage:!0}}),r=i=>s.post("/plugin?action=a&name=mail_sys&s=update_mailbox",i,{requestOptions:{loading:a.global.t("Mail.Api.index_8"),successMessage:!0}}),y=(i,e=!0)=>s.post("/plugin?action=a&name=mail_sys&s=delete_mailbox",i,{requestOptions:{loading:e?a.global.t("Mail.Api.index_9"):"",successMessage:e}}),M=()=>s.post("/plugin?action=a&name=mail_sys&s=get_bcc"),b=i=>s.post("/plugin?action=a&name=mail_sys&s=set_mail_bcc",i,{requestOptions:{loading:a.global.t("Mail.Api.index_10"),successMessage:!0}}),x=i=>s.post("/plugin?action=a&name=mail_sys&s=update_bcc",i,{requestOptions:{loading:a.global.t("Mail.Api.index_11"),successMessage:!0}}),O=i=>s.post("/plugin?action=a&name=mail_sys&s=del_bcc",i,{requestOptions:{loading:a.global.t("Mail.Api.index_12"),successMessage:!0}}),q=()=>s.post("/plugin?action=a&name=mail_sys&s=get_mail_forward"),A=i=>s.post("/plugin?action=a&name=mail_sys&s=set_mail_forward",i,{requestOptions:{loading:a.global.t("Mail.Api.index_13"),successMessage:!0}}),k=i=>s.post("/plugin?action=a&name=mail_sys&s=edit_mail_forward",i,{requestOptions:{loading:a.global.t("Mail.Api.index_14"),successMessage:!0}}),f=i=>s.post("/plugin?action=a&name=mail_sys&s=delete_mail_forward",i,{requestOptions:{loading:a.global.t("Mail.Api.index_15"),successMessage:!0}}),h=()=>s.post("/plugin?action=a&name=mail_sys&s=get_all_user"),v=a=>s.post("/plugin?action=a&name=mail_sys&s=get_mails",a),w=i=>s.post("/plugin?action=a&name=mail_sys&s=move_to_junk",i,{requestOptions:{loading:a.global.t("Mail.Api.index_16"),successMessage:!0,isOriginalResult:!0}}),P=(i,e=!0)=>s.post("/plugin?action=a&name=mail_sys&s=delete_mail",i,{requestOptions:{loading:e?a.global.t("Mail.Api.index_17"):"",successMessage:e,isOriginalResult:!0}}),j=a=>s.post("/plugin?action=a&name=mail_sys&s=get_junk_mails",a),C=i=>s.post("/plugin?action=a&name=mail_sys&s=move_out_junk",i,{requestOptions:{loading:a.global.t("Mail.Api.index_18"),successMessage:!0}}),R=a=>s.post("/plugin?action=a&name=mail_sys&s=get_sent_mails",a),W=i=>s.post("/plugin?action=a&name=mail_sys&s=send_mail",i,{requestOptions:{loading:a.global.t("Mail.Api.index_19"),successMessage:!0}}),z=a=>s.post("/plugin?action=a&name=mail_sys&s=get_task_list",a),B=a=>s.post("/plugin?action=a&name=mail_sys&s=get_log_rank",a),D=a=>s.post("/plugin?action=a&name=mail_sys&s=get_log_list",a),E=i=>s.post("/plugin?action=a&name=mail_sys&s=delete_task",i,{requestOptions:{loading:a.global.t("Mail.Api.index_20"),successMessage:!0}}),F=i=>s.post("/plugin?action=a&name=mail_sys&s=pause_task",i,{requestOptions:{loading:a.global.t("Mail.Api.index_23"),successMessage:!0}}),G=()=>s.post("/plugin?action=a&name=mail_sys&s=get_backup_task_status",{},{requestOptions:{errorMessage:!1}}),H=()=>s.post("/plugin?action=a&name=mail_sys&s=close_backup_task",{},{requestOptions:{loading:a.global.t("Mail.Api.index_39"),successMessage:!0}}),I=()=>s.post("/plugin?action=a&name=mail_sys&s=get_cloud_storage_list"),J=i=>s.post("/plugin?action=a&name=mail_sys&s=open_backup_task",i,{requestOptions:{loading:a.global.t("Mail.Api.index_24"),successMessage:!0}}),K=()=>s.post("/plugin?action=a&name=mail_sys&s=get_backup_path"),L=a=>s.post("/plugin?action=a&name=mail_sys&s=get_backup_file_list",a),N=i=>s.post("/plugin?action=a&name=mail_sys&s=restore",i,{requestOptions:{loading:a.global.t("Mail.Api.index_25"),successMessage:!0}}),Q=()=>s.post("/plugin?action=a&name=mail_sys&s=get_service_status"),S=i=>s.post("/plugin?action=a&name=mail_sys&s=service_admin",i,{requestOptions:{loading:a.global.t("Mail.Api.index_26"),successMessage:!0}}),T=i=>s.post("/plugin?action=a&name=mail_sys&s=set_alarm_black_switch",i,{requestOptions:{loading:a.global.t("Mail.Api.index_26"),successMessage:!0}}),U=i=>s.post("/plugin?action=a&name=mail_sys&s=repair_service_conf",i,{requestOptions:{loading:a.global.t("Mail.Api.index_27"),successMessage:!0}}),V=a=>s.post("/plugin?action=a&name=mail_sys&s=get_config",a),X=i=>s.post("/plugin?action=a&name=mail_sys&s=save_config",i,{requestOptions:{loading:a.global.t("Mail.Api.index_28"),successMessage:!0}}),Y=()=>s.post("/plugin?action=a&name=mail_sys&s=get_service_monitor_status",{},{requestOptions:{errorMessage:!1}}),Z=i=>s.post("/crontab?action=set_cron_status",i,{requestOptions:{loading:a.global.t("Mail.Api.index_29"),successMessage:!0}}),$=()=>s.post("/plugin?action=a&name=mail_sys&s=create_service_monitor_task",{},{requestOptions:{loading:a.global.t("Component.Pay.index_12"),successMessage:!0}}),ss=()=>s.post("/plugin?action=a&name=mail_sys&s=get_save_day"),as=i=>s.post("/plugin?action=a&name=mail_sys&s=set_save_day",i,{requestOptions:{loading:a.global.t("Mail.Api.index_31"),successMessage:!0}}),is=()=>s.post("/plugin?action=a&name=mail_sys&s=check_mail_env"),es=(i,e)=>s.post("/plugin?action=a&name=mail_sys&s=".concat(e),{},{requestOptions:{loading:a.global.t("Mail.Api.index_32",[i]),successMessage:!0}}),ns=i=>s.post("/plugin?action=a&name=mail_sys&s=change_hostname",i,{requestOptions:{loading:a.global.t("Mail.Api.index_33"),successMessage:!0}}),ts=()=>s.post("/plugin?action=a&name=mail_sys&s=setup_mail_sys"),ls=()=>s.post("/plugin?action=a&name=mail_sys&s=get_init_log"),os=()=>s.post("/plugin?action=a&name=mail_sys&s=get_roundcube_status"),ps=()=>s.post("/plugin?action=a&name=mail_sys&s=get_domain"),_s=i=>s.post("/plugin?action=a&name=mail_sys&s=uninstall_roundcube",i,{requestOptions:{loading:a.global.t("Mail.Api.index_34"),successMessage:!0}}),gs=i=>s.post("/plugin?action=a&name=mail_sys&s=add_roundcube",i,{requestOptions:{loading:a.global.t("Mail.Api.index_35"),successMessage:!0}}),cs=i=>s.post("/plugin?action=a&name=mail_sys&s=add_roundcube_info",i,{requestOptions:{loading:a.global.t("Mail.Api.index_35"),successMessage:!0}}),us=i=>s.post("/plugin?action=a&name=mail_sys&s=login_roundcube",i,{requestOptions:{loading:a.global.t("Mail.Api.index_36")}}),ms=()=>s.post("/plugin?action=a&name=mail_sys&s=get_unsubscribe_info"),ds=i=>s.post("/plugin?action=a&name=mail_sys&s=set_unsubscribe_info",i,{requestOptions:{loading:a.global.t("Mail.Api.index_40"),successMessage:!0}}),rs=(i={})=>s.post("/plugin?action=a&name=mail_sys&s=del_unsubscribe_info",i,{requestOptions:{loading:a.global.t("Mail.Api.index_41"),successMessage:!0}}),ys=i=>s.post("/auth?action=get_expand_pack_prices",i,{requestOptions:{loading:a.global.t("Component.Pay.index_12")}}),Ms=i=>s.post("/plugin?action=a&name=mail_sys&s=import_contacts",i,{requestOptions:{loading:a.global.t("WP.api.tamper_2"),successMessage:!0}}),bs=i=>s.post("/plugin?action=a&name=mail_sys&s=check_blacklists",i,{requestOptions:{loading:a.global.t("Component.Pay.index_12"),successMessage:!0}}),xs=()=>s.post("/plugin?action=a&name=mail_sys&s=get_blacklist_tips"),Os=i=>s.post("/plugin?action=a&name=mail_sys&s=Blacklist_tips",i,{requestOptions:{loading:a.global.t("Component.Pay.index_12"),successMessage:!0}}),qs=a=>s.post("/plugin?action=a&name=mail_sys&s=get_alarm_send ",a),As=a=>s.post("/plugin?action=a&name=mail_sys&s=read_blacklist_scan_log",a),ks=i=>s.post("/plugin?action=a&name=mail_sys&s=import_users",i,{requestOptions:{loading:a.global.t("Mail.Api.index_21"),successMessage:!0}}),fs=i=>s.post("/plugin?action=a&name=mail_sys&s=export_users",i,{requestOptions:{loading:a.global.t("Mail.Api.index_38")}}),hs=i=>s.post("/plugin?action=a&name=mail_sys&s=create_email_batch_random",i,{requestOptions:{loading:a.global.t("Mail.Api.index_44")}}),vs=i=>s.post("/plugin?action=a&name=mail_sys&s=create_auto_reply_email",i,{requestOptions:{loading:a.global.t("WP.api.tamper_2"),successMessage:!0}}),ws=i=>s.post("/plugin?action=a&name=mail_sys&s=update_auto_reply_email",i,{requestOptions:{loading:a.global.t("Crontab.Api.index_5"),successMessage:!0}}),Ps=a=>s.post("/plugin?action=a&name=mail_sys&s=get_auto_reply_email",a),js=i=>s.post("/plugin?action=a&name=mail_sys&s=delete_auto_reply_email",i,{requestOptions:{loading:a.global.t("Mail.Api.index_37"),successMessage:!0}});export{J as $,w as A,v as B,R as C,C as D,j as E,W as F,as as G,ss as H,gs as I,cs as J,ps as K,_s as L,V as M,X as N,Z as O,$ as P,Y as Q,T as R,S,U as T,Q as U,qs as V,O as W,M as X,k as Y,f as Z,q as _,h as a,H as a0,I as a1,G as a2,N as a3,L as a4,K as a5,ws as a6,vs as a7,js as a8,Ps as a9,rs as aa,ms as ab,ds as ac,_ as ad,p as ae,l as af,o as ag,c as ah,As as ai,hs as aj,ns as ak,ls as al,ts as am,es as an,is as ao,x as ap,b as aq,A as ar,i as b,u as c,D as d,B as e,E as f,ys as g,z as h,Ms as i,xs as j,Os as k,t as l,bs as m,e as n,g as o,n as p,us as q,r,F as s,d as t,y as u,m as v,fs as w,os as x,ks as y,P as z};
