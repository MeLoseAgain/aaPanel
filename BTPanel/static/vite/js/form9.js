import{_ as e}from"./index.vue_vue_type_script_setup_true_lang.js?v=1741416570306";import{fb as s,b as a,fc as t,fd as l}from"./page_layout.js?v=1741416570306";import{c as i}from"./public.js?v=1741416570306";import{d as o,r,j as d,e as n,P as c,Q as E,N as u,$ as b,S as p,_ as m,ao as y,R as T}from"./vue.js?v=1741416570306";import{ch as A,cb as R,bO as w}from"./naive.js?v=1741416570306";import"./common.js?v=1741416570306";import"./__commonjsHelpers__.js?v=1741416570306";const k=[{key:"Data Permissions",label:"Data Permissions",description:"Data Permissions",select:!0,id:1,children:[{id:2,key:"SELECT",description:"SELECT--Allows users to query (read) data from the database.",select:!0,label:"Read Data"},{id:3,key:"INSERT",description:"INSERT--Allows users to insert new data into database tables.",select:!0,label:"Insert/Replace Data"},{id:4,key:"UPDATE",description:"UPDATE--Allows users to modify data in database tables.",select:!0,label:"Modify Data"},{id:5,key:"DELETE",description:"DELETE--Allows users to delete data from database tables.",select:!0,label:"Delete Data"},{key:"FILE",id:22,description:"Allows users to read or write files.",label:"File Read/Write"}]},{key:"Structure Permissions",label:"Structure Permissions",description:"Structure Permissions",select:!0,id:6,children:[{id:7,key:"CREATE",description:"Allows users to create new databases, tables, or indexes.",select:!0,label:"Create Database/Table"},{id:8,key:"ALTER",description:"Allows users to modify the structure of database tables (e.g., add or delete columns).",select:!0,label:"Modify Table Structure"},{id:9,key:"INDEX",description:"Allows users to create and delete indexes to improve query performance.",select:!0,label:"Create/Delete Index"},{id:10,key:"DROP",description:"Allows users to delete databases, tables, or indexes.",select:!0,label:"Delete Database/Table"},{id:11,key:"CREATE TEMPORARY TABLES",description:"Allows users to create temporary tables that are automatically deleted after the session ends.",select:!0,label:"Create Temporary Tables"},{id:12,key:"SHOW VIEW",description:"Allows users to view views in the database.",select:!0,label:"View Views"},{id:13,key:"CREATE ROUTINE",description:"Allows users to create stored procedures and functions.",select:!0,label:"Create Stored Procedure/Function"},{id:14,key:"ALTER ROUTINE",description:"Allows users to modify stored procedures and functions.",select:!0,label:"Modify Stored Procedure/Function"},{id:15,key:"EXECUTE",description:"Allows users to execute stored procedures and functions.",select:!0,label:"Execute Stored Procedure/Function"},{id:16,key:"CREATE VIEW",description:"Allows users to create views in the database.",select:!0,label:"Create View"},{id:17,key:"EVENT",description:"Allows users to create, modify, and delete database events.",select:!0,label:"Create/Modify/Delete Event"},{id:18,key:"TRIGGER",description:"Allows users to create and manage database triggers.",select:!0,label:"Create/Manage Trigger"}]},{key:"Management Permissions",label:"Management Permissions",description:"Management Permissions",include:!0,id:19,children:[{id:23,key:"SUPER",description:"Allows users to perform special operations, such as starting or stopping the database server.",label:"Kill Other User Processes When Max Connections Reached"},{id:24,key:"PROCESS",description:"Allows users to view the database connection processes of other users.",label:"View Other User Connections"},{id:25,key:"RELOAD",description:"Allows users to reload the database server configuration.",label:"Reload Database Configuration"},{id:26,key:"SHUTDOWN",description:"Allows users to shut down the database server.",label:"Shutdown Database Server"},{id:27,key:"SHOW DATABASES",description:"Allows users to view the list of available databases.",label:"View Available Databases"},{id:21,key:"LOCK TABLES",description:"Allows users to lock tables to control concurrent access.",select:!0,label:"Lock Tables"},{id:32,key:"REFERENCES",description:"Allows users to create and use foreign keys to maintain data integrity.",label:"Create/Use Foreign Keys"},{id:29,key:"REPLICATION CLIENT",description:"Allows users to connect as a replication client to a master-slave replication system.",label:"Connect as Replication Client to Master-Slave System"},{id:30,key:"REPLICATION SLAVE",description:"Allows users to connect as a replication slave to a master-slave replication system.",label:"Connect as Replication Slave to Master-Slave System"},{id:31,key:"CREATE USER",description:"Allows users to create, modify, and delete database user accounts.",label:"Create/Modify/Delete Database User"}]}],f=[{key:"Data Permissions",label:"Data Permissions",description:"Data Permissions",select:!0,id:1,children:[{id:2,key:"SELECT",description:"SELECT--Allows users to query (read) data from the database.",select:!0,label:"Read Data"},{id:3,key:"INSERT",description:"INSERT--Allows users to insert new data into database tables.",select:!0,label:"Insert/Replace Data"},{id:4,key:"UPDATE",description:"UPDATE--Allows users to modify data in database tables.",select:!0,label:"Modify Data"},{id:5,key:"DELETE",description:"DELETE--Allows users to delete data from database tables.",select:!0,label:"Delete Data"}]},{key:"Structure Permissions",label:"Structure Permissions",description:"Structure Permissions",select:!0,id:6,children:[{id:7,key:"CREATE",description:"Allows users to create new databases, tables, or indexes.",select:!0,label:"Create Database/Table"},{id:8,key:"ALTER",description:"Allows users to modify the structure of database tables (e.g., add or delete columns).",select:!0,label:"Modify Table Structure"},{id:9,key:"INDEX",description:"Allows users to create and delete indexes to improve query performance.",select:!0,label:"Create/Delete Index"},{id:10,key:"DROP",description:"Allows users to delete databases, tables, or indexes.",select:!0,label:"Delete Database/Table"},{id:11,key:"CREATE TEMPORARY TABLES",description:"Allows users to create temporary tables that are automatically deleted after the session ends.",select:!0,label:"Create Temporary Tables"},{id:12,key:"SHOW VIEW",description:"Allows users to view views in the database.",select:!0,label:"View Views"},{id:13,key:"CREATE ROUTINE",description:"Allows users to create stored procedures and functions.",select:!0,label:"Create Stored Procedure/Function"},{id:14,key:"ALTER ROUTINE",description:"Allows users to modify stored procedures and functions.",select:!0,label:"Modify Stored Procedure/Function"},{id:15,key:"EXECUTE",description:"Allows users to execute stored procedures and functions.",select:!0,label:"Execute Stored Procedure/Function"},{id:16,key:"CREATE VIEW",description:"Allows users to create views in the database.",select:!0,label:"Create View"},{id:17,key:"EVENT",description:"Allows users to create, modify, and delete database events.",select:!0,label:"Create/Modify/Delete Event"},{id:18,key:"TRIGGER",description:"Allows users to create and manage database triggers.",select:!0,label:"Create/Manage Trigger"}]},{key:"Management Permissions",label:"Management Permissions",description:"Management Permissions",include:!0,id:19,children:[{id:21,key:"LOCK TABLES",description:"Allows users to lock tables to control concurrent access.",select:!0,label:"Lock Tables"},{id:22,key:"REFERENCES",description:"Allows users to create and use foreign keys to maintain data integrity.",label:"Create/Use Foreign Keys"}]}],C={class:"p-16px"},S={class:"w-415px max-h-200px overflow-auto border border-solid p-12x border-#ccc"},v=o({__name:"form",props:{data:{}},setup(o,{expose:v}){const D=o,{getList:_,params:h}=D.data,L=r(null),P=d({db_name:"",tb_name:"",access:["SELECT","INSERT","UPDATE","DELETE","CREATE","ALTER","INDEX","DROP","CREATE TEMPORARY TABLES","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EXECUTE","CREATE VIEW","EVENT","TRIGGER","LOCK TABLES","REFERENCES"]}),g=r([]),I=r([]),O=(e,s)=>{P.db_name=e,s.tb_list.length?(I.value=s.tb_list.map((e=>({label:e.name,value:e.value,access_list:e.access_list}))),N(I.value[0].value,I.value[0])):I.value=[]},N=(e,s)=>{P.tb_name=e,"*"!==e||"ALL PRIVILEGES"!==s.access_list[0]?"*"!==e||"USAGE"!==s.access_list[0]?P.access=s.access_list:P.access=[]:P.access=["SELECT","INSERT","UPDATE","DELETE","CREATE","ALTER","INDEX","DROP","CREATE TEMPORARY TABLES","SHOW VIEW","CREATE ROUTINE","ALTER ROUTINE","EXECUTE","CREATE VIEW","EVENT","TRIGGER","LOCK TABLES","REFERENCES"]},U=n((()=>{var e;return"*"===P.db_name?k:"*"!==P.db_name&&"*"!==P.tb_name?(null==(e=f.find((e=>1===e.id)))?void 0:e.children)||[]:f})),{loading:x,setLoading:M}=i();(async()=>{try{M(!0);const{message:e}=await s(h);a(e)&&(g.value=e.data.map((e=>({label:e.name,value:e.value,tb_list:e.tb_list}))),O(g.value[0].value,g.value[0]))}finally{M(!1)}})();return v({onConfirm:async()=>{var e;await(null==(e=L.value)?void 0:e.validate()),await t({...h,db_name:P.db_name,tb_name:"*"===P.db_name?"*":P.tb_name,access:P.access.join(","),with_grant:0}),null==_||_()}}),(s,a)=>{const t=A,i=R,o=w,r=l,d=e;return c(),E("div",C,[u(d,{ref_key:"formRef",ref:L,model:p(P)},{default:b((()=>[u(o,null,{default:b((()=>[u(i,{label:s.$t("Database.Mysql.index_18")},{default:b((()=>[u(t,{class:"w-200px",loading:p(x),value:p(P).db_name,"onUpdate:value":[a[0]||(a[0]=e=>p(P).db_name=e),O],options:p(g)},null,8,["loading","value","options"])])),_:1},8,["label"]),u(i,{"show-label":!1},{default:b((()=>[p(I).length?(c(),m(t,{key:0,class:"w-200px",value:p(P).tb_name,"onUpdate:value":[a[1]||(a[1]=e=>p(P).tb_name=e),N],options:p(I)},null,8,["value","options"])):y("",!0)])),_:1})])),_:1}),u(i,{label:s.$t("Database.Mysql.index_19"),path:"access"},{default:b((()=>[T("div",S,[u(r,{"default-expand-all":"","block-line":"",cascade:"",checkable:"",selectable:!1,"check-strategy":"child","checked-keys":p(P).access,"onUpdate:checkedKeys":a[2]||(a[2]=e=>p(P).access=e),data:p(U),placeholder:s.$t("Database.Mysql.index_20")},null,8,["checked-keys","data","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{v as default};
