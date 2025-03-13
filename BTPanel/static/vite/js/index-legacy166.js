System.register(["./__commonjsHelpers__-legacy.js?v=1741416570306","./page_layout-legacy.js?v=1741416570306","./naive-legacy.js?v=1741416570306","./vue-legacy.js?v=1741416570306"],(function(e,t){"use strict";var n,a,r,o,i,l,s,c,u,d,p,g,m;return{setters:[e=>{n=e.c,a=e.g},e=>{r=e.p,o=e.I},e=>{i=e.bJ},e=>{l=e.d,s=e.M,c=e.r,u=e.e,d=e.w,p=e.n,g=e.f,m=e.N}],execute:function(){var t=document.createElement("style");t.textContent="pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}div.code-toolbar{position:relative}div.code-toolbar>.toolbar{position:absolute;z-index:10;top:.3em;right:.2em;transition:opacity .3s ease-in-out;opacity:0}div.code-toolbar:hover>.toolbar{opacity:1}div.code-toolbar:focus-within>.toolbar{opacity:1}div.code-toolbar>.toolbar>.toolbar-item{display:inline-block}div.code-toolbar>.toolbar>.toolbar-item>a{cursor:pointer}div.code-toolbar>.toolbar>.toolbar-item>button{background:none;border:0;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}div.code-toolbar>.toolbar>.toolbar-item>a,div.code-toolbar>.toolbar>.toolbar-item>button,div.code-toolbar>.toolbar>.toolbar-item>span{color:#bbb;font-size:.8em;padding:0 .5em;background:#f5f2f0;background:rgba(224,224,224,.2);box-shadow:0 2px rgba(0,0,0,.2);border-radius:.5em}div.code-toolbar>.toolbar>.toolbar-item>a:hover,div.code-toolbar>.toolbar>.toolbar-item>a:focus,div.code-toolbar>.toolbar>.toolbar-item>button:hover,div.code-toolbar>.toolbar>.toolbar-item>button:focus,div.code-toolbar>.toolbar>.toolbar-item>span:hover,div.code-toolbar>.toolbar>.toolbar-item>span:focus{color:inherit;text-decoration:none}code[class*=language-],pre[class*=language-]{color:#ccc;background:none;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:#999}.token.punctuation{color:#ccc}.token.tag,.token.attr-name,.token.namespace,.token.deleted{color:#e2777a}.token.function-name{color:#6196cc}.token.boolean,.token.number,.token.function{color:#f08d49}.token.property,.token.class-name,.token.constant,.token.symbol{color:#f8c555}.token.selector,.token.important,.token.atrule,.token.keyword,.token.builtin{color:#cc99cd}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable{color:#7ec699}.token.operator,.token.entity,.token.url{color:#67cdcc}.token.important,.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.inserted{color:green}\n",document.head.appendChild(t);var f={exports:{}};!function(e){var t=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof o?new o(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,o;switch(n=n||{},r.util.type(t)){case"Object":if(o=r.util.objId(t),n[o])return n[o];for(var i in a={},n[o]=a,t)t.hasOwnProperty(i)&&(a[i]=e(t[i],n));return a;case"Array":return o=r.util.objId(t),n[o]?n[o]:(a=[],n[o]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var o=(a=a||r.languages)[e],i={};for(var l in o)if(o.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);n.hasOwnProperty(l)||(i[l]=o[l])}var c=a[e];return a[e]=i,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,a,o){o=o||{};var i=r.util.objId;for(var l in t)if(t.hasOwnProperty(l)){n.call(t,l,t[l],a||l);var s=t[l],c=r.util.type(s);"Object"!==c||o[i(s)]?"Array"!==c||o[i(s)]||(o[i(s)]=!0,e(s,n,l,o)):(o[i(s)]=!0,e(s,n,null,o))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var o,i=0;o=a.elements[i++];)r.highlightElement(o,!0===t,a.callback)},highlightElement:function(t,n,a){var o=r.util.getLanguage(t),i=r.languages[o];r.util.setLanguage(t,o);var l=t.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&r.util.setLanguage(l,o);var s={element:t,language:o,grammar:i,code:t.textContent};function c(e){s.highlightedCode=e,r.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,r.hooks.run("after-highlight",s),r.hooks.run("complete",s),a&&a.call(s.element)}if(r.hooks.run("before-sanity-check",s),(l=s.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!s.code)return r.hooks.run("complete",s),void(a&&a.call(s.element));if(r.hooks.run("before-highlight",s),s.grammar)if(n&&e.Worker){var u=new Worker(r.filename);u.onmessage=function(e){c(e.data)},u.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else c(r.highlight(s.code,s.grammar,s.language));else c(r.util.encode(s.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(r.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=r.tokenize(a.code,a.grammar),r.hooks.run("after-tokenize",a),o.stringify(r.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new s;return c(r,r.head,e),l(e,r,t,r.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,o=0;a=n[o++];)a(t)}},Token:o};function o(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var o=r[1].length;r.index+=o,r[0]=r[0].slice(o)}return r}function l(e,t,n,a,s,d){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var g=n[p];g=Array.isArray(g)?g:[g];for(var m=0;m<g.length;++m){if(d&&d.cause==p+","+m)return;var f=g[m],h=f.inside,b=!!f.lookbehind,v=!!f.greedy,y=f.alias;if(v&&!f.pattern.global){var k=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,k+"g")}for(var w=f.pattern||f,x=a.next,E=s;x!==t.tail&&!(d&&E>=d.reach);E+=x.value.length,x=x.next){var A=x.value;if(t.length>e.length)return;if(!(A instanceof o)){var C,S=1;if(v){if(!(C=i(w,E,e,b))||C.index>=e.length)break;var T=C.index,P=C.index+C[0].length,N=E;for(N+=x.value.length;T>=N;)N+=(x=x.next).value.length;if(E=N-=x.value.length,x.value instanceof o)continue;for(var z=x;z!==t.tail&&(N<P||"string"==typeof z.value);z=z.next)S++,N+=z.value.length;S--,A=e.slice(E,N),C.index-=E}else if(!(C=i(w,0,A,b)))continue;T=C.index;var L=C[0],R=A.slice(0,T),j=A.slice(T+L.length),O=E+A.length;d&&O>d.reach&&(d.reach=O);var M=x.prev;if(R&&(M=c(t,M,R),E+=R.length),u(t,M,S),x=c(t,M,new o(p,h?r.tokenize(L,h):L,y,L)),j&&c(t,x,j),S>1){var H={cause:p+","+m,reach:O};l(e,t,n,x.prev,E,H),d&&H.reach>d.reach&&(d.reach=H.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function u(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=r,o.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var o={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(o.classes,i):o.classes.push(i)),r.hooks.run("wrap",o);var l="";for(var s in o.attributes)l+=" "+s+'="'+(o.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+l+">"+o.content+"</"+o.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,o=n.code,i=n.immediateClose;e.postMessage(r.highlight(o,r.languages[a],a)),i&&e.close()}),!1),r):r;var d=r.util.currentScript();function p(){r.manual||r.highlightAll()}if(d&&(r.filename=d.src,d.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var g=document.readyState;"loading"===g||"interactive"===g&&d&&d.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
				 * Prism: Lightweight, robust, elegant syntax highlighting
				 *
				 * @license MIT <https://opensource.org/licenses/MIT>
				 * @author Lea Verou <https://lea.verou.me>
				 * @namespace
				 * @public
				 */e.exports&&(e.exports=t),void 0!==n&&(n.Prism=t)}(f);const h=a(f.exports);!function(e){function t(e){return RegExp("(^(?:"+e+"):[ \t]*(?![ \t]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:t(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:t(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:t(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:t(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var n,a=e.languages,r={"application/javascript":a.javascript,"application/json":a.json||a.javascript,"application/xml":a.xml,"text/xml":a.xml,"text/html":a.html,"text/css":a.css,"text/plain":a.plain},o={"application/json":!0,"application/xml":!0};function i(e){var t=e.replace(/^[a-z]+\//,"");return"(?:"+e+"|\\w+/(?:[\\w.-]+\\+)+"+t+"(?![+\\w.-]))"}for(var l in r)if(r[l]){n=n||{};var s=o[l]?i(l):l;n[l.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+s+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:r[l]}}n&&e.languages.insertBefore("http","header",n)}(Prism),Prism.languages.log={string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?![st] | \w)(?:[^'\\\r\n]|\\.)*'/,greedy:!0},exception:{pattern:/(^|[^\w.])[a-z][\w.]*(?:Error|Exception):.*(?:(?:\r\n?|\n)[ \t]*(?:at[ \t].+|\.{3}.*|Caused by:.*))+(?:(?:\r\n?|\n)[ \t]*\.\.\. .*)?/,lookbehind:!0,greedy:!0,alias:["javastacktrace","language-javastacktrace"],inside:Prism.languages.javastacktrace||{keyword:/\bat\b/,function:/[a-z_][\w$]*(?=\()/,punctuation:/[.:()]/}},level:[{pattern:/\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,alias:["error","important"]},{pattern:/\b(?:WARN|WARNING|WRN)\b/,alias:["warning","important"]},{pattern:/\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,alias:["info","keyword"]},{pattern:/\b(?:DBG|DEBUG|FINE)\b/,alias:["debug","keyword"]},{pattern:/\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,alias:["trace","comment"]}],property:{pattern:/((?:^|[\]|])[ \t]*)[a-z_](?:[\w-]|\b\/\b)*(?:[. ]\(?\w(?:[\w-]|\b\/\b)*\)?)*:(?=\s)/im,lookbehind:!0},separator:{pattern:/(^|[^-+])-{3,}|={3,}|\*{3,}|- - /m,lookbehind:!0,alias:"comment"},url:/\b(?:file|ftp|https?):\/\/[^\s|,;'"]*[^\s|,;'">.]/,email:{pattern:/(^|\s)[-\w+.]+@[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+(?=\s)/,lookbehind:!0,alias:"url"},"ip-address":{pattern:/\b(?:\d{1,3}(?:\.\d{1,3}){3})\b/,alias:"constant"},"mac-address":{pattern:/\b[a-f0-9]{2}(?::[a-f0-9]{2}){5}\b/i,alias:"constant"},domain:{pattern:/(^|\s)[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)*\.[a-z][a-z0-9-]+(?=\s)/,lookbehind:!0,alias:"constant"},uuid:{pattern:/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i,alias:"constant"},hash:{pattern:/\b(?:[a-f0-9]{32}){1,2}\b/i,alias:"constant"},"file-path":{pattern:/\b[a-z]:[\\/][^\s|,;:(){}\[\]"']+|(^|[\s:\[\](>|])\.{0,2}\/\w[^\s|,;:(){}\[\]"']*/i,lookbehind:!0,greedy:!0,alias:"string"},date:{pattern:RegExp(/\b\d{4}[-/]\d{2}[-/]\d{2}(?:T(?=\d{1,2}:)|(?=\s\d{1,2}:))/.source+"|"+/\b\d{1,4}[-/ ](?:\d{1,2}|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)[-/ ]\d{2,4}T?\b/.source+"|"+/\b(?:(?:Fri|Mon|Sat|Sun|Thu|Tue|Wed)(?:\s{1,2}(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep))?|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)\s{1,2}\d{1,2}\b/.source,"i"),alias:"number"},time:{pattern:/\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,alias:"number"},boolean:/\b(?:false|null|true)\b/i,number:{pattern:/(^|[^.\w])(?:0x[a-f0-9]+|0o[0-7]+|0b[01]+|v?\d[\da-f]*(?:\.\d+)*(?:e[+-]?\d+)?[a-z]{0,3}\b)\b(?!\.\w)/i,lookbehind:!0},operator:/[;:?<=>~/@!$%&+\-|^(){}*#]/,punctuation:/[\[\].,]/},function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e="line-numbers",t=/\n(?!$)/g,n=Prism.plugins.lineNumbers={getLine:function(t,n){if("PRE"===t.tagName&&t.classList.contains(e)){var a=t.querySelector(".line-numbers-rows");if(a){var r=parseInt(t.getAttribute("data-start"),10)||1,o=r+(a.children.length-1);n<r&&(n=r),n>o&&(n=o);var i=n-r;return a.children[i]}}},resize:function(e){r([e])},assumeViewportIndependence:!0},a=void 0;window.addEventListener("resize",(function(){n.assumeViewportIndependence&&a===window.innerWidth||(a=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))})),Prism.hooks.add("complete",(function(n){if(n.code){var a=n.element,o=a.parentNode;if(o&&/pre/i.test(o.nodeName)&&!a.querySelector(".line-numbers-rows")&&Prism.util.isActive(a,e)){a.classList.remove(e),o.classList.add(e);var i,l=n.code.match(t),s=l?l.length+1:1,c=new Array(s+1).join("<span></span>");(i=document.createElement("span")).setAttribute("aria-hidden","true"),i.className="line-numbers-rows",i.innerHTML=c,o.hasAttribute("data-start")&&(o.style.counterReset="linenumber "+(parseInt(o.getAttribute("data-start"),10)-1)),n.element.appendChild(i),r([o]),Prism.hooks.run("line-numbers",n)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function r(e){if(0!=(e=e.filter((function(e){var t,n=(t=e,t?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null)["white-space"];return"pre-wrap"===n||"pre-line"===n}))).length){var n=e.map((function(e){var n=e.querySelector("code"),a=e.querySelector(".line-numbers-rows");if(n&&a){var r=e.querySelector(".line-numbers-sizer"),o=n.textContent.split(t);r||((r=document.createElement("span")).className="line-numbers-sizer",n.appendChild(r)),r.innerHTML="0",r.style.display="block";var i=r.getBoundingClientRect().height;return r.innerHTML="",{element:e,lines:o,lineHeights:[],oneLinerHeight:i,sizer:r}}})).filter(Boolean);n.forEach((function(e){var t=e.sizer,n=e.lines,a=e.lineHeights,r=e.oneLinerHeight;a[n.length-1]=void 0,n.forEach((function(e,n){if(e&&e.length>1){var o=t.appendChild(document.createElement("span"));o.style.display="block",o.textContent=e}else a[n]=r}))})),n.forEach((function(e){for(var t=e.sizer,n=e.lineHeights,a=0,r=0;r<n.length;r++)void 0===n[r]&&(n[r]=t.children[a++].getBoundingClientRect().height)})),n.forEach((function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){n.children[t].style.height=e+"px"}))}))}}}(),function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=[],t={},n=function(){};Prism.plugins.toolbar={};var a=Prism.plugins.toolbar.registerButton=function(n,a){var r;r="function"==typeof a?a:function(e){var t;return"function"==typeof a.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",(function(){a.onClick.call(this,e)}))):"string"==typeof a.url?(t=document.createElement("a")).href=a.url:t=document.createElement("span"),a.className&&t.classList.add(a.className),t.textContent=a.text,t},n in t?console.warn('There is a button with the key "'+n+'" registered already.'):e.push(t[n]=r)},r=Prism.plugins.toolbar.hook=function(a){var r=a.element.parentNode;if(r&&/pre/i.test(r.nodeName)&&!r.parentNode.classList.contains("code-toolbar")){var o=document.createElement("div");o.classList.add("code-toolbar"),r.parentNode.insertBefore(o,r),o.appendChild(r);var i=document.createElement("div");i.classList.add("toolbar");var l=e,s=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(a.element);s&&(l=s.map((function(e){return t[e]||n}))),l.forEach((function(e){var t=e(a);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),i.appendChild(n)}})),o.appendChild(i)}};a("label",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(o){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}})),Prism.hooks.add("complete",r)}}(),function(){function e(e,n){e.addEventListener("click",(function(){!function(e){navigator.clipboard?navigator.clipboard.writeText(e.getText()).then(e.success,(function(){t(e)})):t(e)}(n)}))}function t(e){var t=document.createElement("textarea");t.value=e.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy");setTimeout((function(){n?e.success():e.error()}),1)}catch(a){setTimeout((function(){e.error(a)}),1)}document.body.removeChild(t)}"undefined"!=typeof Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",(function(t){var n=t.element,a=function(e){var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var n in t){for(var a="data-prismjs-"+n,r=e;r&&!r.hasAttribute(a);)r=r.parentElement;r&&(t[n]=r.getAttribute(a))}return t}(n),r=document.createElement("button");r.className="copy-to-clipboard-button",r.setAttribute("type","button");var o=document.createElement("span");return r.appendChild(o),l("copy"),e(r,{getText:function(){return n.textContent},success:function(){l("copy-success"),i()},error:function(){l("copy-error"),setTimeout((function(){!function(e){window.getSelection().selectAllChildren(e)}(n)}),1),i()}}),r;function i(){setTimeout((function(){l("copy")}),a["copy-timeout"])}function l(e){o.textContent=a[e],r.setAttribute("data-copy-state",e)}})):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}();const b=r({height:"100%","&[class*='language-']":{border:"none",margin:0},".line-numbers":{whiteSpace:"pre-wrap"}});e("_",l({name:"BtPrism",props:{lang:{type:String,default:"logs"},content:{type:String,default:""},loading:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},fontSize:{type:[String,Number],default:"14px"},rows:{type:Number,default:100},preStyle:{type:Object,default:()=>{}}},setup(e){const{t:t}=s(),n=c(null),a=c(null),r=c(""),l=u((()=>{const t=e.wrap?{wordWrap:"break-word"}:{};return{fontSize:i(e.fontSize),...t,...e.preStyle}})),f=u((()=>""===e.content?[t("Component.Logs.index_1")]:e.content.split("\n").slice(-1*(e.rows+1))));d((()=>f.value),(()=>{v()}));const v=async()=>{r.value=h.highlight(f.value.join("\n"),h.languages[e.lang],e.lang),await p(),a.value&&h.highlightElement(a.value),y()},y=()=>{n.value&&(n.value.scrollTop=n.value.scrollHeight)};return g((()=>{v()})),()=>m(o,{show:e.loading},{default:()=>[m("pre",{ref:n,class:[b,`language-${e.lang}`,"line-numbers"],style:l.value},[m("code",{ref:a,innerHTML:r.value},null)])]})}}))}}}));
