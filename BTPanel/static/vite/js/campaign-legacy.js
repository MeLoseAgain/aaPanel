System.register(["./page_layout-legacy.js?v=1742891699271"],(function(s,a){"use strict";var e,t;return{setters:[s=>{e=s.bh,t=s.d}],execute:function(){s("d",(s=>e.post("/campaign/overview",s))),s("I",(s=>e.post("/plugin?action=a&name=mail_sys&s=add_mail_type",s,{requestOptions:{loading:t.global.t("Mail.Api.index_22"),successMessage:!0}}))),s("H",(s=>e.post("/plugin?action=a&name=mail_sys&s=edit_mail_type",s,{requestOptions:{loading:t.global.t("Mail.Api.index_42"),successMessage:!0}}))),s("K",(s=>e.post("/plugin?action=a&name=mail_sys&s=get_mail_type_info_list",s))),s("A",((s,a=!0)=>e.post("/plugin?action=a&name=mail_sys&s=update_subscription_state",s,{requestOptions:{loading:"Modifying status, please wait...",successMessage:a}}))),s("J",((s,a=!0)=>e.post("/plugin?action=a&name=mail_sys&s=del_mail_type_list",s,{requestOptions:{loading:a?t.global.t("Mail.Api.index_37"):"",successMessage:a}}))),s("C",(s=>e.post("/plugin?action=a&name=mail_sys&s=get_unsubscribe_list",s))),s("B",((s,a=!0)=>e.post("/plugin?action=a&name=mail_sys&s=del_unsubscribe_list",s,{requestOptions:{loading:a?t.global.t("Mail.Api.index_37"):"",successMessage:a}}))),s("y",(s=>e.post("/plugin?action=a&name=mail_sys&s=edit_type_unsubscribe_list",s,{requestOptions:{loading:t.global.t("Mail.Api.index_43"),successMessage:!0}}))),s("v",(s=>e.post("/plugin?action=a&name=mail_sys&s=edit_type_unsubscribe_list",s,{requestOptions:{loading:t.global.t("Mail.Api.index_43"),successMessage:!0}}))),s("x",(s=>e.post("/plugin?action=a&name=mail_sys&s=import_contacts_etypes",s,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}))),s("w",(s=>e.post("/plugin?action=a&name=mail_sys&s=import_contacts_from_content",s,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}))),s("z",(s=>e.post("/plugin?action=a&name=mail_sys&s=get_contacts_list",s))),s("N",(s=>e.post("/plugin?action=a&name=mail_sys&s=get_abnormal_recipient",s))),s("M",((s,a=!0)=>e.post("/plugin?action=a&name=mail_sys&s=del_abnormal_recipient",s,{requestOptions:{loading:a?t.global.t("Mail.Api.index_37"):"",successMessage:a}}))),s("P",(()=>e.post("/plugin?action=a&name=mail_sys&s=get_abnormal_status"))),s("O",(s=>e.post("/plugin?action=a&name=mail_sys&s=clear_abnormal_recipient",s,{requestOptions:{loading:t.global.t("Mail.Api.index_37"),successMessage:!0}}))),s("h",(s=>e.post("/plugin?action=a&name=mail_sys&s=get_contact_number",s))),s("V",(s=>e.post("/plugin?action=a&name=mail_sys&s=get_task_unsubscribe_list",s))),s("b",((s={})=>e.post("/plugin?action=a&name=mail_sys&s=get_task_all",s))),s("p",(s=>e.post("/plugin?action=a&name=mail_sys&s=export_email_template",s))),s("u",(s=>e.post("/plugin?action=a&name=mail_sys&s=import_email_template",s,{requestOptions:{loading:t.global.t("Mail.Api.index_21"),successMessage:!0}}))),s("o",(s=>e.post("/plugin?action=a&name=mail_sys&s=copy_template",s,{requestOptions:{loading:"Copying template, please wait...",successMessage:!0}}))),s("D",((s={})=>e.post("/plugin?action=a&name=mail_sys&s=get_mail_type_list",s))),s("F",(s=>e.post("/plugin?action=a&name=mail_sys&s=export_contact_group",s,{requestOptions:{loading:"Exporting, please wait..."}}))),s("E",(s=>e.post("/plugin?action=a&name=mail_sys&s=import_contact_group",s,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}))),s("G",(s=>e.post("/plugin?action=a&name=mail_sys&s=merge_groups",s,{requestOptions:{loading:"Processing, please wait...",successMessage:!0}}))),s("n",(s=>e.post("/plugin?action=a&name=mail_sys&s=export_task_errlog_to_csv",s,{requestOptions:{loading:"Exporting, please wait..."}}))),s("f",((s={})=>e.post("/plugin?action=a&name=mail_sys&s=get_service_status",s))),s("L",(s=>e.post("/plugin?action=a&name=mail_sys&s=check_email_valid",s,{requestOptions:{loading:"Scanning, please wait...",successMessage:!0}}))),s("s",(s=>e.post("/plugin?action=a&name=mail_sys&s=set_abnormal_mail_check_switch",s,{requestOptions:{loading:"Setting, please wait...",successMessage:!0}}))),s("m",(s=>e.post("/plugin?action=a&name=mail_sys&s=add_task",s,{requestOptions:{loading:"Adding task, please wait...",successMessage:!0}}))),s("l",(s=>e.post("/plugin?action=a&name=mail_sys&s=update_task",s,{requestOptions:{loading:"Editing task, please wait...",successMessage:!0}}))),s("k",(s=>e.post("/plugin?action=a&name=mail_sys&s=send_mail_test",s,{requestOptions:{loading:"Sending test email, please wait...",successMessage:!0}}))),s("c",((s={})=>e.post("/plugin?action=a&name=mail_sys&s=get_mail_type_list",s))),s("a",(()=>e.post("/plugin?action=a&name=mail_sys&s=get_email_temp"))),s("r",(s=>e.post("/plugin?action=a&name=mail_sys&s=get_email_temp_list",s))),s("i",(s=>e.post("/plugin?action=a&name=mail_sys&s=get_task_email_content",s))),s("t",(s=>e.post("/plugin?action=a&name=mail_sys&s=add_email_temp",s,{requestOptions:{loading:"Adding template, please wait...",successMessage:!0}}))),s("j",((s,a=!0)=>e.post("/plugin?action=a&name=mail_sys&s=edit_email_temp",s,{requestOptions:{loading:a?"Editing template, please wait...":"",successMessage:a}}))),s("q",(s=>e.post("/plugin?action=a&name=mail_sys&s=del_email_temp",s,{requestOptions:{loading:"Deleting template, please wait...",successMessage:!0}}))),s("Q",((s,a=!0)=>e.post("/campaign/set_automation",s,{headers:{"Content-Type":"application/json"},requestOptions:{loading:a?"Adding, please wait...":""}}))),s("e",(s=>e.post("/campaign/set_automation",s,{headers:{"Content-Type":"application/json"},requestOptions:{loading:"Setting up, please wait..."}}))),s("U",(s=>e.post("/campaign/get_automations",s,{headers:{"Content-Type":"application/json"}}))),s("T",(s=>e.post("/campaign/remove_automation",s,{headers:{"Content-Type":"application/json"}}))),s("g",(s=>e.post("/campaign/get_automation_workflow",s,{headers:{"Content-Type":"application/json"}}))),s("S",(s=>e.post("/campaign/set_automation_status",s,{headers:{"Content-Type":"application/json"},requestOptions:{loading:"Setting up, please wait...",successMessage:!0}}))),s("R",(s=>e.post("/campaign/set_automation_name",s,{headers:{"Content-Type":"application/json"},requestOptions:{loading:"Renaming in progress, please wait...",successMessage:!0}})))}}}));
