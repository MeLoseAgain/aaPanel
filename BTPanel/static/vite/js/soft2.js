import{m as a,f as s,b as t,bU as o,bo as n}from"./page_layout.js?v=1741416570306";import{a as e}from"./public.js?v=1741416570306";const i=async i=>{const{close:c}=a.loading("Processing, please wait...");try{const{message:a}=await s({sName:i});if(t(a)){const s=a.versions[0].full_version;e({title:"Install plugin",content:"Are you sure to install [".concat(a.title," v").concat(s,"] plugin?"),onConfirm:async()=>{a.status?await o({sName:a.name,version:s,upgrade:s}):await o({sName:a.name,version:s}),n()}})}}finally{c()}},c=a=>{const s=a.replace(/-+[{0-9},.,]+$/,"");return"/static/img/soft_ico/ico-".concat(s,".png")};export{c as g,i};
