import{_ as a}from"./index.vue_vue_type_script_setup_true_lang.js?v=1742891699271";import{bi as e,dz as s,j as l,m as t}from"./page_layout.js?v=1742891699271";import{_ as r}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1742891699271";import{d,O as o,_ as i,r as n,j as u,e as p,R as c,a0 as m,a1 as b,P as _,U as v,V as f,ap as x,c as g,a2 as h,M as w}from"./vue.js?v=1742891699271";import{g as D}from"./index122.js?v=1742891699271";import{_ as j,cn as $,ch as y,b$ as U}from"./naive.js?v=1742891699271";import"./common.js?v=1742891699271";import"./__commonjsHelpers__.js?v=1742891699271";import"./public.js?v=1742891699271";import"./index96.js?v=1742891699271";import"./index123.js?v=1742891699271";import"./soft.js?v=1742891699271";const R={class:"w-240px"},k={class:"w-100px ml-8px"},A={class:"w-240px"},E={class:"w-240px"},q={class:"w-240px"},L={class:"w-240px"},S={class:"w-240px"},z={class:"ml-8px"},C=d({__name:"index",setup(d,{expose:C}){const{t:M}=o(),Q=e(),{remoteList:H}=i(Q),I=n(null),O=u({sid:H.value.length>0?H.value[0].id:null,name:"",codeing:"utf8",db_user:"",password:"",dataAccess:"127.0.0.1",address:"127.0.0.1",active:!1,ssl:""}),P=n([{label:"utf-8",value:"utf8"},{label:"utf8mb4",value:"utf8mb4"},{label:"gbk",value:"gbk"},{label:"big5",value:"big5"}]),V=n([{label:M("Database.form.index_12"),value:"127.0.0.1"},{label:M("Database.form.index_13"),value:"%"},{label:M("Database.form.index_14"),value:"ip"}]),B=p((()=>H.value.map((a=>({label:"".concat(a.ps," (").concat(a.db_host,")"),value:a.id}))))),F={name:{required:!0,message:M("Database.form.index_15"),trigger:["blur","change"]},db_user:{required:!0,message:M("Database.form.index_16"),trigger:["blur","change"]},password:{required:!0,message:M("Database.form.index_17"),trigger:["blur","change"]},sid:{trigger:"change",validator:(a,e)=>null!==e||new Error(M("Database.form.index_18"))}},G=a=>{O.db_user=a},J=a=>{O.address="ip"===a?"":a},K=a=>{O.ssl=a?"REQUIRE SSL":""},N=()=>{D()};return C({onConfirm:async()=>{var a;await(null==(a=I.value)?void 0:a.validate());try{const a=(()=>{const a=w(O),{sid:e}=a;if(null===e)throw t.error(M("Database.form.index_18")),new Error(M("Database.form.index_18"));return{...a,sid:e,ps:a.name,dtype:"MySQL",address:"ip"===O.dataAccess?O.address.trim().split("\n").join(","):O.address}})();await s(a),Q.setRefresh(!0)}catch(e){console.warn(e)}}}),(e,s)=>{const t=j,d=$,o=y,i=r,n=l,u=U,p=a;return c(),m(p,{ref_key:"formRef",ref:I,model:f(O),rules:F,class:"p-20px"},{default:b((()=>[_(o,{label:e.$t("Database.form.index_1"),path:"name"},{default:b((()=>[v("div",R,[_(t,{value:f(O).name,"onUpdate:value":[s[0]||(s[0]=a=>f(O).name=a),G],placeholder:e.$t("Database.form.index_2"),"input-props":{name:"name"}},null,8,["value","placeholder"])]),v("div",k,[_(d,{value:f(O).codeing,"onUpdate:value":s[1]||(s[1]=a=>f(O).codeing=a),class:"code-select",options:f(P)},null,8,["value","options"])])])),_:1},8,["label"]),_(o,{label:e.$t("Database.form.index_3"),path:"db_user"},{default:b((()=>[v("div",A,[_(t,{value:f(O).db_user,"onUpdate:value":s[2]||(s[2]=a=>f(O).db_user=a),placeholder:e.$t("Database.form.index_4"),"input-props":{name:"username"}},null,8,["value","placeholder"])])])),_:1},8,["label"]),_(o,{label:e.$t("Database.form.index_5"),path:"password"},{default:b((()=>[v("div",E,[_(i,{value:f(O).password,"onUpdate:value":s[3]||(s[3]=a=>f(O).password=a),placeholder:"","input-props":{name:"password"}},null,8,["value"])])])),_:1},8,["label"]),_(o,{label:e.$t("Database.form.index_6"),path:"dataAccess"},{default:b((()=>[v("div",q,[_(d,{value:f(O).dataAccess,"onUpdate:value":[s[4]||(s[4]=a=>f(O).dataAccess=a),J],class:"access-select",options:f(V)},null,8,["value","options"])])])),_:1},8,["label"]),"ip"===f(O).dataAccess?(c(),m(o,{key:0,label:e.$t("Database.form.index_7"),path:"address"},{default:b((()=>[v("div",L,[_(t,{value:f(O).address,"onUpdate:value":s[5]||(s[5]=a=>f(O).address=a),type:"textarea",autosize:{minRows:3,maxRows:3},"input-props":{name:"address"},placeholder:e.$t("Database.form.index_8")},null,8,["value","placeholder"])])])),_:1},8,["label"])):x("",!0),_(o,{label:e.$t("Database.form.index_9"),path:"sid"},{default:b((()=>[v("div",S,[_(d,{value:f(O).sid,"onUpdate:value":s[6]||(s[6]=a=>f(O).sid=a),class:"sid-select",options:f(B)},null,8,["value","options"])]),v("div",z,[_(n,{onClick:N},{default:b((()=>[g(h(e.$t("Database.form.index_10")),1)])),_:1})])])),_:1},8,["label"]),_(o,{label:e.$t("Database.form.index_11"),"show-feedback":!1},{default:b((()=>[_(u,{value:f(O).active,"onUpdate:value":[s[7]||(s[7]=a=>f(O).active=a),K],class:"ssl-switch"},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["model"])}}});export{C as default};
