if(!self.define){let e,i={};const n=(n,f)=>(n=new URL(n+".js",f).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const o=e=>n(e,c),s={module:{uri:c},exports:a,require:o};i[c]=Promise.all(f.map((e=>s[e]||o(e)))).then((e=>(r(...e),a)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"965ca510ec58c247fc2f.png",revision:null},{url:"ef5d896174fa9f6fca93.png",revision:null},{url:"img/favicon@144x144.png",revision:"c44e03977fd12435b1930bf41b8018a8"},{url:"img/favicon@168x168.png",revision:"735e6b0948f62c9eeb76b996f975f1ba"},{url:"img/favicon@192x192.png",revision:"e72a285e0cae4d908f4f4466a1fb8bd1"},{url:"img/favicon@256x256.png",revision:"e0481fc206df0c49cd721b006b541b67"},{url:"img/favicon@384x384.png",revision:"ac8ba4b7c5d51d6366b57c5bc37721c0"},{url:"img/favicon@48x48.png",revision:"0a5ba1824b1e5eb5ef00733e8edcfa6f"},{url:"img/favicon@512x512.png",revision:"8ee71c66387691e1627bf29af5a8a31f"},{url:"img/favicon@72x72.png",revision:"d3e7fa8859ebf1d2255e9d34ae4f8f24"},{url:"img/favicon@96x96.png",revision:"bc9945a3528a365ef4c8b0e3861e22a8"},{url:"index.html",revision:"5f042efb5d9d4b410c46257583b35295"},{url:"main.css",revision:"90b8b303b23ce4906fbdd1163dcc1ee2"},{url:"main.js",revision:"551baa1f6b91a67351351a583a55da8a"},{url:"manifest.webmanifest",revision:"257dd4baef17de67f544656a51ab7da9"}],{})}));
