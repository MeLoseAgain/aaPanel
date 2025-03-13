import{_ as a}from"./page_layout.js?v=1741416570306";import{u as s}from"./public.js?v=1741416570306";import{bL as e,bt as t,cn as l}from"./naive.js?v=1741416570306";import{d as n,r as i,e as r,P as c,Q as u,R as o,a0 as p,S as d,N as m,M as x,F as g}from"./vue.js?v=1741416570306";const h={class:"w-400px p-20px"},b={class:"mb-12px text-14px"},v=n({__name:"progress",props:{data:{}},emits:["close"],setup(a,{emit:s}){const l=a,{title:n,data:x,api:g,callback:v}=l.data,f=s,S=i(0),y=i(0),_=r((()=>x.length));return(async()=>{for(let s=0;s<x.length;s++)try{if(g){const a=await g(x[s]);x[s].batchStatus="success",x[s].reqMsg=e(a,"message.result","Success"),y.value+=1,y.value===_.value?S.value=100:S.value=Math.round(y.value/_.value*100)}}catch(a){x[s].batchStatus="error",x[s].reqMsg=e(a,"message.result","")}null==v||v(x),f("close")})(),(a,s)=>{const e=t;return c(),u("div",h,[o("div",b,[o("span",null,p(a.$t("Component.Batch.index_3",d(n))),1),o("span",null,p(d(y))+"/"+p(d(_)),1)]),m(e,{type:"line",status:"success",percentage:d(S),height:24,"border-radius":4,"fill-border-radius":0,processing:!0,"show-indicator":!1,"indicator-placement":"inside"},null,8,["percentage"])])}}}),f={class:"p-24px"},S={class:"flex items-center mb-24px"},y={class:"flex-1 ml-12px text-14px leading-22px"},_={class:"flex-1 ml-12px text-14px leading-22px"},w=n({__name:"index",props:{data:{}},emits:["setConfirm"],setup(e,{expose:t,emit:n}){const r=e,{title:h,desc:b,data:w,columns:C,api:M,done:k}=r.data,j=n,{t:q}=x(),P=i([]),z=i([...C,{key:"batchStatus",title:q("Public.Table.Result"),align:"right",width:200,render:a=>"success"===a.batchStatus?m("span",{class:"text-primary"},[a.reqMsg]):"error"===a.batchStatus?m("span",{class:"text-error"},[a.reqMsg]):m("span",{class:"text-warning"},[q("Public.Status.Wait")])}]),R=i(!1),B=i(""),D=a=>{const s=a.filter((a=>"success"===a.batchStatus)).length,e=a.length-s;B.value=q("Component.Confirm.index_3",[h,a.length,s,e]),R.value=!0,j("setConfirm",{text:"Done",disabled:!1}),null==k||k(a)};return(()=>{P.value=w.map((a=>({batchStatus:"wait",...a})));const{status:a}=r.data;"done"===a&&D(w)})(),t({onConfirm:({hide:a})=>(R.value?a():(j("setConfirm",{disabled:!0}),s({title:h,hideClose:!0,data:{title:h,api:M,data:P.value,callback:D},component:v})),!1)}),(s,e)=>{const t=a,n=l;return c(),u("div",f,[o("div",S,[d(R)?(c(),u(g,{key:1},[m(t,{name:"base-success",size:"40",class:"text-primary"}),o("div",_,p(d(B)),1)],64)):(c(),u(g,{key:0},[m(t,{name:"base-warning",size:"40",class:"text-warning"}),o("div",y,p(d(b)),1)],64))]),m(n,{"max-height":182,data:d(P),columns:d(z)},null,8,["data","columns"])])}}});export{w as _,v as a};
