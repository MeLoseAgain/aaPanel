System.register(["./xterm-addon-canvas-legacy.js?v=1741416570306","./xterm-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./common-legacy.js?v=1741416570306","./__commonjsHelpers__-legacy.js?v=1741416570306","./public-legacy.js?v=1741416570306"],(function(e,n){"use strict";var t,o,l,a,s,r,d,c,u,i,m,g,p;return{setters:[e=>{t=e.x},e=>{o=e.x,l=e.a,a=e.b},e=>{s=e.b,r=e.m},e=>{d=e.d,c=e.r,u=e.f,i=e.o,m=e.P,g=e.Q,p=e.R},null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".drawer{display:none}.xterm{height:100%;padding:12px}.xterm .xterm-viewport{overflow:auto!important}\n",document.head.appendChild(n);const f={class:"h-full"};e("default",d({__name:"index",props:{status:{},setProjectStatus:{}},setup(e){const n=e,d=c(null);let y,v;const x=()=>{y.loadAddon(v),y.loadAddon(new t.CanvasAddon),y.loadAddon(new a.WebLinksAddon),d.value&&y.open(d.value)},j=()=>{v.fit()};return u((()=>{y=new o.Terminal({cursorBlink:!0,fontSize:12,lineHeight:1.26,fontFamily:"Monaco, Menlo, Consolas, 'Courier New', monospace",theme:{background:"#333",foreground:"#ececec"}}),v=new l.FitAddon,x(),j(),n.setProjectStatus(n.status,(e=>{s(e)&&(-1===e.data&&r.success(e.msg),y.write(e.msg))}))})),i((()=>{y.dispose()})),(e,n)=>(m(),g("div",f,[p("div",{ref_key:"terminalRef",ref:d,class:"w-full h-full overflow-hidden rounded-b-4px"},null,512)]))}}))}}}));
