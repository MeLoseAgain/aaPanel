System.register(["./page_layout-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306"],(function(e,t){"use strict";var i,r,n,a,o,p,d;return{setters:[e=>{i=e.a},e=>{r=e.d,n=e.r,a=e.P,o=e._,p=e.a3,d=e.W}],execute:function(){e("_",r({name:"BtEcharts",__name:"index",props:{type:{type:String,default:"line"},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"200px"},option:{type:Object,required:!0}},setup(e,{expose:r}){const g=n(),s={line:d((()=>i((()=>t.import("./index-legacy178.js?v=1741416570306")),void 0))),bar:d((()=>i((()=>t.import("./index-legacy179.js?v=1741416570306")),void 0))),pie:d((()=>i((()=>t.import("./index-legacy180.js?v=1741416570306")),void 0))),map:d((()=>i((()=>t.import("./index-legacy181.js?v=1741416570306")),void 0)))};return r({getChart:()=>g.value?.getChart()}),(t,i)=>(a(),o(p(s[e.type]),{ref_key:"chartRef",ref:g,width:e.width,height:e.height,option:e.option},null,8,["width","height","option"]))}}))}}}));
