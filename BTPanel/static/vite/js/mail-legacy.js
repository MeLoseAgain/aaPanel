System.register(["./page_layout-legacy.js?v=1741416570306"],(function(s,a){"use strict";var i,e;return{setters:[s=>{i=s.az,e=s.d}],execute:function(){s("b",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_data_info",s))),s("n",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_domains",s))),s("p",(s=>i.post("/plugin?action=a&name=mail_sys&s=flush_domain_record",s))),s("l",(s=>i.post("/plugin?action=a&name=mail_sys&s=enable_catchall",s,{requestOptions:{loading:e.global.t("Mail.Api.index_1"),successMessage:!0}}))),s("af",(s=>i.post("/plugin?action=a&name=mail_sys&s=set_mail_certificate_multiple",{...s,act:"add"},{requestOptions:{loading:e.global.t("Mail.Api.index_2"),successMessage:!0}}))),s("ag",(s=>i.post("/plugin?action=a&name=mail_sys&s=set_mail_certificate_multiple",{...s,act:"delete"},{requestOptions:{loading:e.global.t("Mail.Api.index_5"),successMessage:!0}}))),s("ae",(s=>i.post("/plugin?action=a&name=mail_sys&s=add_domain_new",s,{requestOptions:{loading:e.global.t("Mail.Api.index_3"),successMessage:!0,errorMessage:{close:!0}}}))),s("ad",(s=>i.post("/plugin?action=a&name=mail_sys&s=update_domain",s,{requestOptions:{loading:e.global.t("Mail.Api.index_4"),successMessage:!0}}))),s("o",(s=>i.post("/plugin?action=a&name=mail_sys&s=delete_domain",s,{requestOptions:{loading:e.global.t("Mail.Api.index_5"),successMessage:!0}}))),s("ah",(s=>i.post("/plugin?action=a&name=mail_sys&s=delete_mx_txt_cache",s,{requestOptions:{loading:e.global.t("Mail.Api.index_6"),successMessage:!0}}))),s("c",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_domain_name"))),s("v",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_mailboxs",s))),s("t",(s=>i.post("/plugin?action=a&name=mail_sys&s=add_mailbox",s,{requestOptions:{loading:e.global.t("Mail.Api.index_7"),successMessage:!0}}))),s("r",(s=>i.post("/plugin?action=a&name=mail_sys&s=update_mailbox",s,{requestOptions:{loading:e.global.t("Mail.Api.index_8"),successMessage:!0}}))),s("u",((s,a=!0)=>i.post("/plugin?action=a&name=mail_sys&s=delete_mailbox",s,{requestOptions:{loading:a?e.global.t("Mail.Api.index_9"):"",successMessage:a}}))),s("X",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_bcc"))),s("aq",(s=>i.post("/plugin?action=a&name=mail_sys&s=set_mail_bcc",s,{requestOptions:{loading:e.global.t("Mail.Api.index_10"),successMessage:!0}}))),s("ap",(s=>i.post("/plugin?action=a&name=mail_sys&s=update_bcc",s,{requestOptions:{loading:e.global.t("Mail.Api.index_11"),successMessage:!0}}))),s("W",(s=>i.post("/plugin?action=a&name=mail_sys&s=del_bcc",s,{requestOptions:{loading:e.global.t("Mail.Api.index_12"),successMessage:!0}}))),s("_",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_mail_forward"))),s("ar",(s=>i.post("/plugin?action=a&name=mail_sys&s=set_mail_forward",s,{requestOptions:{loading:e.global.t("Mail.Api.index_13"),successMessage:!0}}))),s("Y",(s=>i.post("/plugin?action=a&name=mail_sys&s=edit_mail_forward",s,{requestOptions:{loading:e.global.t("Mail.Api.index_14"),successMessage:!0}}))),s("Z",(s=>i.post("/plugin?action=a&name=mail_sys&s=delete_mail_forward",s,{requestOptions:{loading:e.global.t("Mail.Api.index_15"),successMessage:!0}}))),s("a",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_all_user"))),s("B",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_mails",s))),s("A",(s=>i.post("/plugin?action=a&name=mail_sys&s=move_to_junk",s,{requestOptions:{loading:e.global.t("Mail.Api.index_16"),successMessage:!0,isOriginalResult:!0}}))),s("z",((s,a=!0)=>i.post("/plugin?action=a&name=mail_sys&s=delete_mail",s,{requestOptions:{loading:a?e.global.t("Mail.Api.index_17"):"",successMessage:a,isOriginalResult:!0}}))),s("E",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_junk_mails",s))),s("D",(s=>i.post("/plugin?action=a&name=mail_sys&s=move_out_junk",s,{requestOptions:{loading:e.global.t("Mail.Api.index_18"),successMessage:!0}}))),s("C",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_sent_mails",s))),s("F",(s=>i.post("/plugin?action=a&name=mail_sys&s=send_mail",s,{requestOptions:{loading:e.global.t("Mail.Api.index_19"),successMessage:!0}}))),s("h",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_task_list",s))),s("e",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_log_rank",s))),s("d",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_log_list",s))),s("f",(s=>i.post("/plugin?action=a&name=mail_sys&s=delete_task",s,{requestOptions:{loading:e.global.t("Mail.Api.index_20"),successMessage:!0}}))),s("s",(s=>i.post("/plugin?action=a&name=mail_sys&s=pause_task",s,{requestOptions:{loading:e.global.t("Mail.Api.index_23"),successMessage:!0}}))),s("a2",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_backup_task_status",{},{requestOptions:{errorMessage:!1}}))),s("a0",(()=>i.post("/plugin?action=a&name=mail_sys&s=close_backup_task",{},{requestOptions:{loading:e.global.t("Mail.Api.index_39"),successMessage:!0}}))),s("a1",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_cloud_storage_list"))),s("$",(s=>i.post("/plugin?action=a&name=mail_sys&s=open_backup_task",s,{requestOptions:{loading:e.global.t("Mail.Api.index_24"),successMessage:!0}}))),s("a5",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_backup_path"))),s("a4",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_backup_file_list",s))),s("a3",(s=>i.post("/plugin?action=a&name=mail_sys&s=restore",s,{requestOptions:{loading:e.global.t("Mail.Api.index_25"),successMessage:!0}}))),s("U",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_service_status"))),s("S",(s=>i.post("/plugin?action=a&name=mail_sys&s=service_admin",s,{requestOptions:{loading:e.global.t("Mail.Api.index_26"),successMessage:!0}}))),s("R",(s=>i.post("/plugin?action=a&name=mail_sys&s=set_alarm_black_switch",s,{requestOptions:{loading:e.global.t("Mail.Api.index_26"),successMessage:!0}}))),s("T",(s=>i.post("/plugin?action=a&name=mail_sys&s=repair_service_conf",s,{requestOptions:{loading:e.global.t("Mail.Api.index_27"),successMessage:!0}}))),s("M",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_config",s))),s("N",(s=>i.post("/plugin?action=a&name=mail_sys&s=save_config",s,{requestOptions:{loading:e.global.t("Mail.Api.index_28"),successMessage:!0}}))),s("Q",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_service_monitor_status",{},{requestOptions:{errorMessage:!1}}))),s("O",(s=>i.post("/crontab?action=set_cron_status",s,{requestOptions:{loading:e.global.t("Mail.Api.index_29"),successMessage:!0}}))),s("P",(()=>i.post("/plugin?action=a&name=mail_sys&s=create_service_monitor_task",{},{requestOptions:{loading:e.global.t("Component.Pay.index_12"),successMessage:!0}}))),s("H",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_save_day"))),s("G",(s=>i.post("/plugin?action=a&name=mail_sys&s=set_save_day",s,{requestOptions:{loading:e.global.t("Mail.Api.index_31"),successMessage:!0}}))),s("ao",(()=>i.post("/plugin?action=a&name=mail_sys&s=check_mail_env"))),s("an",((s,a)=>i.post(`/plugin?action=a&name=mail_sys&s=${a}`,{},{requestOptions:{loading:e.global.t("Mail.Api.index_32",[s]),successMessage:!0}}))),s("ak",(s=>i.post("/plugin?action=a&name=mail_sys&s=change_hostname",s,{requestOptions:{loading:e.global.t("Mail.Api.index_33"),successMessage:!0}}))),s("am",(()=>i.post("/plugin?action=a&name=mail_sys&s=setup_mail_sys"))),s("al",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_init_log"))),s("x",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_roundcube_status"))),s("K",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_domain"))),s("L",(s=>i.post("/plugin?action=a&name=mail_sys&s=uninstall_roundcube",s,{requestOptions:{loading:e.global.t("Mail.Api.index_34"),successMessage:!0}}))),s("I",(s=>i.post("/plugin?action=a&name=mail_sys&s=add_roundcube",s,{requestOptions:{loading:e.global.t("Mail.Api.index_35"),successMessage:!0}}))),s("J",(s=>i.post("/plugin?action=a&name=mail_sys&s=add_roundcube_info",s,{requestOptions:{loading:e.global.t("Mail.Api.index_35"),successMessage:!0}}))),s("q",(s=>i.post("/plugin?action=a&name=mail_sys&s=login_roundcube",s,{requestOptions:{loading:e.global.t("Mail.Api.index_36")}}))),s("ab",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_unsubscribe_info"))),s("ac",(s=>i.post("/plugin?action=a&name=mail_sys&s=set_unsubscribe_info",s,{requestOptions:{loading:e.global.t("Mail.Api.index_40"),successMessage:!0}}))),s("aa",((s={})=>i.post("/plugin?action=a&name=mail_sys&s=del_unsubscribe_info",s,{requestOptions:{loading:e.global.t("Mail.Api.index_41"),successMessage:!0}}))),s("g",(s=>i.post("/auth?action=get_expand_pack_prices",s,{requestOptions:{loading:e.global.t("Component.Pay.index_12")}}))),s("i",(s=>i.post("/plugin?action=a&name=mail_sys&s=import_contacts",s,{requestOptions:{loading:e.global.t("WP.api.tamper_2"),successMessage:!0}}))),s("m",(s=>i.post("/plugin?action=a&name=mail_sys&s=check_blacklists",s,{requestOptions:{loading:e.global.t("Component.Pay.index_12"),successMessage:!0}}))),s("j",(()=>i.post("/plugin?action=a&name=mail_sys&s=get_blacklist_tips"))),s("k",(s=>i.post("/plugin?action=a&name=mail_sys&s=Blacklist_tips",s,{requestOptions:{loading:e.global.t("Component.Pay.index_12"),successMessage:!0}}))),s("V",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_alarm_send ",s))),s("ai",(s=>i.post("/plugin?action=a&name=mail_sys&s=read_blacklist_scan_log",s))),s("y",(s=>i.post("/plugin?action=a&name=mail_sys&s=import_users",s,{requestOptions:{loading:e.global.t("Mail.Api.index_21"),successMessage:!0}}))),s("w",(s=>i.post("/plugin?action=a&name=mail_sys&s=export_users",s,{requestOptions:{loading:e.global.t("Mail.Api.index_38")}}))),s("aj",(s=>i.post("/plugin?action=a&name=mail_sys&s=create_email_batch_random",s,{requestOptions:{loading:e.global.t("Mail.Api.index_44")}}))),s("a7",(s=>i.post("/plugin?action=a&name=mail_sys&s=create_auto_reply_email",s,{requestOptions:{loading:e.global.t("WP.api.tamper_2"),successMessage:!0}}))),s("a6",(s=>i.post("/plugin?action=a&name=mail_sys&s=update_auto_reply_email",s,{requestOptions:{loading:e.global.t("Crontab.Api.index_5"),successMessage:!0}}))),s("a9",(s=>i.post("/plugin?action=a&name=mail_sys&s=get_auto_reply_email",s))),s("a8",(s=>i.post("/plugin?action=a&name=mail_sys&s=delete_auto_reply_email",s,{requestOptions:{loading:e.global.t("Mail.Api.index_37"),successMessage:!0}})))}}}));
