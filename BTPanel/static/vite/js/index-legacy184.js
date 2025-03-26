System.register(["./page_layout-legacy.js?v=1742891699271","./vue-legacy.js?v=1742891699271","./public-legacy.js?v=1742891699271","./file-legacy.js?v=1742891699271","./naive-legacy.js?v=1742891699271","./common-legacy.js?v=1742891699271","./__commonjsHelpers__-legacy.js?v=1742891699271"],(function(e,t){"use strict";var a,l,n,o,i,s,p,d,r,c,u,f,m,g,x,h,_,v,y,C,U,b,w,F,z,j,k;return{setters:[e=>{a=e.ap,l=e.h,n=e.m,o=e.cH,i=e._,s=e.fq,p=e.k},e=>{d=e.d,r=e.O,c=e.r,u=e.e,f=e.P,m=e.R,g=e.S,x=e.U,h=e.a1,_=e.c,v=e.a2,y=e.V,C=e.af,U=e.a0,b=e.ao},e=>{w=e.f},e=>{F=e.u},e=>{z=e.bz,j=e.T,k=e.ct},null,null],execute:function(){var t=document.createElement("style");t.textContent=".n-upload-dragger[data-v-d0ef0c12]{--n-dragger-border-hover: 1px dashed #ccc;height:360px;padding:10px}.drag-text[data-v-d0ef0c12]{margin-top:20px;font-size:16px}.drag-suffix[data-v-d0ef0c12]{margin-top:12px;color:#777;font-size:14px}.n-data-table[data-v-d0ef0c12]{--n-th-color-modal: transparent;--n-td-color-modal: transparent;--n-th-color-hover-modal: transparent;--n-td-color-hover-modal: transparent;--n-border-color-modal: transparent}\n",document.head.appendChild(t);const S={class:"p-16px"},B={class:"flex items-center mb-12px"},D={key:1,class:"flex-center flex-col h-300px"},$={class:"drag-text"},E={class:"drag-suffix"},H=d({__name:"index",props:{path:{default:""},size:{default:100},uploadData:{default:()=>({multiple:!1})},uploadSuccess:{},showSuccessMsg:{type:Boolean,default:!0}},emits:["setConfirm"],setup(e,{expose:t,emit:p}){const d=e,H=p,{path:L,uploadData:M}=d,{t:P}=r(),q=a(),I=c([]),O=u((()=>(M.accept||"").split(",").map((e=>`'${e}'`)).join(", "))),R=e=>{const{file:t}=e,{size:a}=d;return(t.file?.size??0)>1048576*a?(n.error(P("Component.UploadFile.index_7",[t.name,a])),!1):(M.multiple||(I.value=[]),!0)},T=c([{key:"name",title:P("Component.UploadFile.index_3"),ellipsis:!0},{key:"size",title:P("Component.UploadFile.index_4"),width:100,render:e=>l(e.file?.size)},{key:"status",title:P("Component.UploadFile.index_5"),width:140,render:e=>"pending"===e.status?P("Component.UploadFile.index_8"):"finished"===e.status?f("span",{class:"text-primary"},[P("Component.UploadFile.index_9")]):f(z,{type:"line",color:q.value.primaryColor,"indicator-placement":"outside",processing:!0,percentage:e.percentage||0},null)},w({width:70,options:(e,t)=>[{label:P("Public.Btn.Del"),type:"error",show:"uploading"!==e.status,onClick:()=>{I.value.splice(t,1)}}]})]);return t({onConfirm:async()=>{const e=I.value.filter((e=>"pending"===e.status));if(0===e.length)return n.error(P("Component.UploadFile.index_10")),!1;H("setConfirm",{disabled:!0}),e.forEach((e=>{e.status="uploading"}));for(let t of e){const e=new FormData;e.append("f_path",L),e.append("f_name",t.name),e.append("f_start","0"),t.file&&(e.append("f_size",t.file.size.toString()),e.append("blob",t.file)),await F(e,(e=>{t.percentage=100*(e.progress||0)})),t.status="finished"}d.showSuccessMsg&&n.success(P("Component.UploadFile.index_9")),H("setConfirm",{disabled:!1}),await(d.uploadSuccess?.(e))}}),(e,t)=>{const a=j,l=o,n=k,p=i,d=s;return m(),g("div",S,[x("div",B,[f(l,{ref:"upload",class:"w-auto","file-list":y(I),"onUpdate:fileList":t[0]||(t[0]=e=>C(I)?I.value=e:null),accept:y(M).accept,multiple:y(M).multiple,"default-upload":!1,"show-file-list":!1,onBeforeUpload:R},{default:h((()=>[f(a,{type:"primary"},{default:h((()=>[_(v(e.$t("Component.UploadFile.index_6")),1)])),_:1})])),_:1},8,["file-list","accept","multiple"])]),f(l,{ref:"upload",class:"w-auto","file-list":y(I),"onUpdate:fileList":t[2]||(t[2]=e=>C(I)?I.value=e:null),accept:y(M).accept,multiple:y(M).multiple,"default-upload":!1,"show-file-list":!1,onBeforeUpload:R},{default:h((()=>[f(d,null,{default:h((()=>[y(I).length>0?(m(),U(n,{key:0,"max-height":300,bordered:!1,data:y(I),columns:y(T),onClick:t[1]||(t[1]=b((()=>{}),["stop"]))},null,8,["data","columns"])):(m(),g("div",D,[f(p,{name:"base-upload",size:"48",class:"text-#999"}),x("div",$,v(e.$t("Component.UploadFile.index_1")),1),x("div",E,v(e.$t("Component.UploadFile.index_2",[y(O)])),1)]))])),_:1})])),_:1},8,["file-list","accept","multiple"])])}}});e("default",p(H,[["__scopeId","data-v-d0ef0c12"]]))}}}));
