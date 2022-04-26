(function(){var e={9865:function(e,t,n){"use strict";n(6992),n(8674),n(9601),n(7727);var o=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("h1",[e._v("NTPU Tool")])]),n("v-spacer"),n("v-btn",{attrs:{href:"/",icon:""}},[n("v-icon",[e._v("home")])],1),n("v-btn",{attrs:{href:"about",icon:""}},[n("v-icon",[e._v("help_outline")])],1)],1),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("router-view")],1)],1)],1)],1)],1),n("v-footer",{staticClass:"font-weight-medium",attrs:{padless:""}},[n("v-col",{staticClass:"text-center",staticStyle:{"font-size":"14px"},attrs:{cols:"12"}},[e._v(" © "+e._s((new Date).getFullYear())+" Copyright "),n("a",{attrs:{href:"https://littlechintw.github.io"}},[e._v("littlechintw.github.io")]),e._v(". All rights reserved. ")])],1)],1)},i=[],a={name:"App",components:{},data:function(){return{}}},u=a,c=n(1001),l=n(3453),s=n.n(l),f=n(303),d=n(4985),p=n(1174),v=n(7024),h=n(1819),m=n(8940),g=n(7718),b=n(4456),y=n(7894),w=n(2515),Z=(0,c.Z)(u,r,i,!1,null,null,null),k=Z.exports;s()(Z,{VApp:f.Z,VAppBar:d.Z,VBtn:p.Z,VCol:v.Z,VContainer:h.Z,VContent:m.Z,VFooter:g.Z,VIcon:b.Z,VRow:y.Z,VSpacer:w.Z});var C=n(5205);(0,C.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(1539),n(8783),n(3948);var A=n(8345);o.Z.use(A.Z);var T=[{path:"/",name:"Home",component:function(){return n.e(246).then(n.bind(n,9246))},meta:{title:"NTPU Tool - Code"}},{path:"/about",name:"About",component:function(){return n.e(186).then(n.bind(n,8186))},meta:{title:"NTPU Tool - About"}},{path:"/TaiwanSocialDistancing",name:"About",component:function(){return n.e(845).then(n.bind(n,6845))},meta:{title:"NTPU Tool - Taiwan Social Distancing"}}],_=new A.Z({mode:"history",base:"/",routes:T});_.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()}));var S=_,O=n(629);o.Z.use(O.ZP);var j=new O.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),E=n(6482);o.Z.use(E.Z);var N=new E.Z({}),P=n(6551),V=n(7174),x=n.n(V),F=n(4253),B=n.n(F),D=n(5527),U=n.n(D),L=n(4104);o.Z.config.productionTip=!1,o.Z.component("qr-code",P.Z),o.Z.component("VueBarcode",x()),o.Z.use(B()),o.Z.use(U(),{id:"UA-167881827-1",router:S,checkDuplicatedScript:!0}),o.Z.use(L.ZP),new o.Z({router:S,store:j,vuetify:N,render:function(e){return e(k)}}).$mount("#app"),o.Z.use(N);new N({icons:{iconfont:"md"}})},6608:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{186:"75c045e3",246:"9dce2327",845:"3bd80eaa"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{186:"7cee91ec",246:"6492accc",845:"f42d4ea0"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ntpu-tool:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={186:1,246:1,845:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkntpu_tool"]=self["webpackChunkntpu_tool"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9865)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.37f5fa37.js.map