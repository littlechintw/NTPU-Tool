if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const u=s=>l(s,i),c={module:{uri:i},exports:o,require:u};e[i]=Promise.all(r.map((s=>c[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-2d118ab0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"ntpu-tool"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/_redirects",revision:"53ed9c267f6aa9ca8b55fd1ce2f3c6c2"},{url:"/b",revision:"5f52dbefcf63c9f677ace09fcf8bc7d8"},{url:"/css/186.7cee91ec.css",revision:null},{url:"/css/503.991d8ee9.css",revision:null},{url:"/css/845.f42d4ea0.css",revision:null},{url:"/css/860.de26270f.css",revision:null},{url:"/css/905.52b513e5.css",revision:null},{url:"/css/app.426947e3.css",revision:null},{url:"/css/chunk-vendors.173d18ab.css",revision:null},{url:"/fonts/MaterialIcons-Regular.14b0bb77.woff",revision:null},{url:"/fonts/MaterialIcons-Regular.a973ee76.eot",revision:null},{url:"/fonts/MaterialIcons-Regular.d1b99623.woff2",revision:null},{url:"/fonts/MaterialIcons-Regular.fa58bcb9.ttf",revision:null},{url:"/index.html",revision:"365580f2aab4a442933b0ea7886fb6c6"},{url:"/js/186.95d86399.js",revision:null},{url:"/js/503.9547c552.js",revision:null},{url:"/js/845.7c2ea613.js",revision:null},{url:"/js/860.df9b9444.js",revision:null},{url:"/js/905.1119a074.js",revision:null},{url:"/js/app.008e7904.js",revision:null},{url:"/js/chunk-vendors.f4eac8d7.js",revision:null},{url:"/manifest.json",revision:"021b132e3545bdedbedc52fa9b9f5ac1"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
