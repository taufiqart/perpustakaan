import{j as e,a as i,g as O,r as p,m as w,d as M,F as z,b as I}from"./app-ec749146.js";function Z({article:t}){return console.log(t),e("div",{className:"flex-1 w-64 sm:w-72 mx-2 ",children:e("div",{className:"bg-white shadow-md border border-gray-200 rounded-lg max-w-2xl",children:i("div",{className:"p-5",children:[e("a",{href:t.category.slug,children:e("h5",{className:"text-gray-900 font-bold text-2xl tracking-tight mb-2",children:t.title})}),e("div",{className:"font-normal text-gray-700 mb-3 h-72 overflow-hidden",dangerouslySetInnerHTML:{__html:t.content}}),i("a",{href:t.category.slug,className:"text-white bg-gradient-to-r from-green-400 to-blue-400 hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center",children:["Selengkapnya",e("svg",{className:"-mr-1 ml-2 h-4 w-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]})})})}var S={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(p),r=["size","className","fill"];function n(s){return s&&s.__esModule?s:{default:s}}function a(){return a=Object.assign||function(s){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(s[o]=d[o])}return s},a.apply(this,arguments)}function m(s,c){if(s==null)return{};var d=v(s,c),o,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);for(u=0;u<f.length;u++)o=f[u],!(c.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(d[o]=s[o])}return d}function v(s,c){if(s==null)return{};var d={},o=Object.keys(s),u,f;for(f=0;f<o.length;f++)u=o[f],!(c.indexOf(u)>=0)&&(d[u]=s[u]);return d}var h=function(c){var d=c.size,o=d===void 0?24:d,u=c.className,f=u===void 0?"":u,b=c.fill,N=b===void 0?"none":b,_=m(c,r);return l.default.createElement("svg",a({width:o,height:o,viewBox:"0 0 24 24",fill:N,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-left ".concat(f)},_),l.default.createElement("g",null,l.default.createElement("polyline",{points:"15 18 9 12 15 6"})))},g=h;t.default=g})(S);const A=O(S);var P={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(p),r=["size","className","fill"];function n(s){return s&&s.__esModule?s:{default:s}}function a(){return a=Object.assign||function(s){for(var c=1;c<arguments.length;c++){var d=arguments[c];for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(s[o]=d[o])}return s},a.apply(this,arguments)}function m(s,c){if(s==null)return{};var d=v(s,c),o,u;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(s);for(u=0;u<f.length;u++)o=f[u],!(c.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(s,o)&&(d[o]=s[o])}return d}function v(s,c){if(s==null)return{};var d={},o=Object.keys(s),u,f;for(f=0;f<o.length;f++)u=o[f],!(c.indexOf(u)>=0)&&(d[u]=s[u]);return d}var h=function(c){var d=c.size,o=d===void 0?24:d,u=c.className,f=u===void 0?"":u,b=c.fill,N=b===void 0?"none":b,_=m(c,r);return l.default.createElement("svg",a({width:o,height:o,viewBox:"0 0 24 24",fill:N,stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-chevron-right ".concat(f)},_),l.default.createElement("g",null,l.default.createElement("polyline",{points:"9 18 15 12 9 6"})))},g=h;t.default=g})(P);const E=O(P);function D({data:t}){const l=p.useRef();return i("div",{className:"relative justify-center group",children:[i("div",{className:"absolute right-0 top-5 md:group-hover:block md:hidden",children:[e("button",{onClick:()=>{l.current.scrollLeft-=l.current.firstChild.getBoundingClientRect().width},className:"p-2 m-2 rounded-full bg-white shadow-md",children:e(A,{})}),e("button",{onClick:()=>{l.current.scrollLeft+=l.current.firstChild.getBoundingClientRect().width},className:"p-2 m-2 rounded-full bg-white shadow-md",children:e(E,{})})]}),e("div",{id:"content",ref:l,className:"flex overflow-auto scroll-smooth scrollbar-hide snap-mandatory snap-x py-2",children:t.map(a=>e("div",{children:e(Z,{article:a})}))})]})}function T({data:t}){return i("div",{className:"w-full  overflow-auto  my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5",children:[e("div",{className:"mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg",children:e("h1",{className:"text-white text-center text-lg font-bold",children:"Aktifitas Terbaru"})}),e("div",{className:"flex flex-col justify-between my-2",children:e("div",{className:"items-center ",children:e(D,{data:t})})})]})}function F(){return i("div",{className:"w-full  my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5",children:[e("div",{className:"mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg",children:e("h1",{className:"text-white text-center text-lg font-bold",children:"Alamat"})}),i("div",{className:"flex flex-row justify-items-center mb-auto",children:[e("div",{className:"items-center ",children:e("div",{children:i("svg",{className:"w-16 md:w-24 h-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",baseProfile:"basic",children:[e("ellipse",{cx:"32",cy:"61",opacity:".3",rx:"19",ry:"3"}),e("ellipse",{cx:"32",cy:"47",fill:"#98c900",rx:"21",ry:"7"}),e("path",{fill:"#fd3c4f",d:"M32,5c-8.837,0-16,7.262-16,16.221c0,8.501,7.812,18.19,12.519,23.256c1.886,2.03,5.076,2.03,6.962,0 C40.188,39.411,48,29.722,48,21.221C48,12.262,40.837,5,32,5z M32,27.025c-3.314,0-6-2.694-6-6.017s2.686-6.017,6-6.017 s6,2.694,6,6.017S35.314,27.025,32,27.025z"}),e("path",{d:"M48,21.221c0-1.717-0.268-3.37-0.755-4.924C44.844,16.664,43,18.719,43,21.221 c0,4.968-4.076,12.204-11.182,19.853c-1.219,1.312-1.585,3.101-1.149,4.711c1.664,0.488,3.534,0.068,4.812-1.308 C40.188,39.411,48,29.722,48,21.221z",opacity:".15"}),e("path",{fill:"#fff",d:"M21,21.221C21,15.034,25.935,10,32,10c2.491,0,4.54-1.827,4.92-4.21 C35.369,5.281,33.718,5,32,5c-8.837,0-16,7.262-16,16.221c0,1.611,0.283,3.265,0.77,4.922C19.163,25.771,21,23.719,21,21.221z",opacity:".3"}),e("path",{fill:"#fff",d:"M20.483,17.774c-0.192,0-0.388-0.037-0.576-0.115c-0.765-0.318-1.127-1.196-0.809-1.961 c0.704-1.691,1.712-3.212,2.996-4.519c1.282-1.307,2.779-2.334,4.45-3.056c0.761-0.33,1.644,0.022,1.972,0.782 c0.329,0.761-0.022,1.644-0.782,1.972c-1.312,0.566-2.49,1.375-3.498,2.403c-1.015,1.033-1.811,2.233-2.367,3.569 C21.629,17.427,21.071,17.774,20.483,17.774z"})]})})}),e("div",{className:"items-center",children:i("p",{className:"text-black font-bold text-center mt-5 text-sm",children:[" ","Jalan Veteran Panggungrejo, Bugul Lor, Panggungrejo, Kota Pasuruan, Jawa Timur 67122"]})})]})]})}function W(){const[t,l]=p.useState(new Date);p.useEffect(()=>{const m=setInterval(()=>{l(new Date)},1e3);return()=>{clearInterval(m)}},[]);const r=m=>m<10?"0"+m:m,n=["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"],a=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];return e("div",{className:"w-full my-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg shadow-md p-5",children:e("h1",{className:"text-xl font-bold text-white text-center",children:n[t.getDay()]+", "+r(t.getDate())+" "+a[t.getMonth()]+" "+t.getFullYear()+"   "+r(t.getHours())+":"+r(t.getMinutes())+":"+r(t.getSeconds())})})}function U(){return e("section",{className:"flex flex-col bg-gradient-to-r from-green-400 to-blue-400  ",children:e("div",{className:"flex items-center justify-center pt-5 pb-5",children:i("h1",{className:"text-white text-xs md:text-sm lg:text-base font-bold text-center",children:["Copyright 2023 | Created with"," ",e("span",{className:"text-rose-600",children:"❤"})," by tuttifruitti.org & RPLPOJOK SKENSA"]})})})}function H({article:t,className:l=""}){return e("div",{className:`w-full ${l}`,children:e("div",{className:"backdrop-blur-sm bg-white bg-opacity-60 h-auto w-full rounded-lg shadow-md",children:e("div",{className:"min-h-[24rem] p-4",dangerouslySetInnerHTML:{__html:t?t.content:"<p class='text-center'>content belum tersedia</p>"}})})})}function K(){return i("div",{className:"w-full  my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5",children:[e("div",{className:"mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg",children:e("h1",{className:"text-white text-center text-lg font-bold",children:"Kontak"})}),i("div",{className:"flex flex-row justify-items-center mx-5 mt-5 mb-5",children:[e("div",{className:"items-center ",children:e("div",{children:i("svg",{className:"w-10 h-auto",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.77082 1.02039C4.12076 0.670949 4.54096 0.399875 5.00358 0.225131C5.4662 0.0503863 5.96066 -0.0240391 6.45422 0.00678674C6.94777 0.0376126 7.42914 0.172986 7.86642 0.403935C8.3037 0.634885 8.68692 0.956137 8.99066 1.3464L12.5805 5.95861C13.2385 6.80465 13.4705 7.9067 13.2105 8.94675L12.1166 13.327C12.06 13.5538 12.0631 13.7915 12.1254 14.0168C12.1878 14.2421 12.3074 14.4475 12.4726 14.613L17.3864 19.5272C17.5521 19.6927 17.7578 19.8125 17.9835 19.8749C18.2092 19.9373 18.4472 19.9402 18.6744 19.8833L23.0522 18.7892C23.5654 18.6609 24.1011 18.6509 24.6187 18.7601C25.1364 18.8692 25.6224 19.0946 26.0401 19.4192L30.652 23.0074C32.3099 24.2975 32.4619 26.7476 30.978 28.2296L28.91 30.2977C27.4301 31.7778 25.2182 32.4278 23.1562 31.7018C17.8787 29.8448 13.0871 26.8232 9.13666 22.8614C5.17536 18.9112 2.15409 14.1199 0.296933 8.84275C-0.427045 6.78265 0.222935 4.56855 1.70289 3.08848L3.77082 1.02039Z",fill:"url(#paint0_linear_71_193)"}),e("defs",{children:i("linearGradient",{id:"paint0_linear_71_193",x1:"16",y1:"0",x2:"16",y2:"32",gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"#0891B2"}),e("stop",{offset:"1",stopColor:"#059669"})]})})]})})}),e("div",{className:"items-center mx-5",children:e("p",{className:"text-black text-center font-bold text-base md:text-lg",children:"(0343) 421380"})})]}),i("div",{className:"flex flex-row justify-items-center mx-5 my-5 break-words",children:[e("div",{className:"items-center ",children:e("div",{children:i("svg",{className:"w-10 h-auto",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M0.1 3.11C0.301636 2.22649 0.797311 1.43763 1.50584 0.872617C2.21438 0.307607 3.09377 -6.09889e-05 4 9.06828e-09H28C28.9062 -6.09889e-05 29.7856 0.307607 30.4942 0.872617C31.2027 1.43763 31.6984 2.22649 31.9 3.11L16 12.828L0.1 3.11ZM0 5.394V19.602L11.606 12.486L0 5.394ZM13.522 13.66L0.382 21.714C0.706653 22.3986 1.21905 22.9769 1.85956 23.3816C2.50007 23.7863 3.24235 24.0007 4 24H28C28.7575 24.0002 29.4995 23.7852 30.1397 23.3802C30.7798 22.9751 31.2918 22.3966 31.616 21.712L18.476 13.658L16 15.172L13.522 13.66ZM20.394 12.488L32 19.602V5.394L20.394 12.486V12.488Z",fill:"url(#paint0_linear_71_200)"}),e("defs",{children:i("linearGradient",{id:"paint0_linear_71_200",x1:"16",y1:"0",x2:"16",y2:"24",gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"#059669"}),e("stop",{offset:"1",stopColor:"#0891B2"})]})})]})})}),e("div",{className:"items-center mx-5 break-words overflow-clip",children:e("p",{className:"text-black text-center font-bold text-md sm:text-base md:text-lg break-words",children:"smk1pasuruan@yahoo.com"})})]})]})}async function y(t,...l){for(const r of l)switch(typeof r){case"string":await J(t,r);break;case"number":await B(r);break;case"function":await r(t,...l);break;default:await r}}async function J(t,l){const r=Y(t.textContent,l);await V(t,[...X(t.textContent,r),...q(l,r)])}async function B(t){await new Promise(l=>setTimeout(l,t))}async function V(t,l,r=60){for(const n of G(l))n(t),await B(r+r*(Math.random()-.5))}function*G(t){for(const l of t)yield r=>requestAnimationFrame(()=>r.textContent=l)}function*q([...t],l=0,r=t.length){for(;l<r;)yield t.slice(0,++l).join("")}function*X([...t],l=0,r=t.length){for(;r>l;)yield t.slice(0,--r).join("")}function Y(t,[...l]){return[...t,NaN].findIndex((r,n)=>l[n]!==r)}function Q(t,l){l===void 0&&(l={});var r=l.insertAt;if(!(!t||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",r==="top"&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}var ee=`.styles_typicalWrapper__1_Uvh::after {
  content: "|";
  animation: styles_blink__2CKyC 1s infinite step-start;
}

@keyframes styles_blink__2CKyC {
  50% { opacity: 0; }
}`,te={typicalWrapper:"styles_typicalWrapper__1_Uvh",blink:"styles_blink__2CKyC"};Q(ee);var L=function(t){if(Array.isArray(t)){for(var l=0,r=Array(t.length);l<t.length;l++)r[l]=t[l];return r}else return Array.from(t)},le=function(l){var r=l.steps,n=l.loop,a=l.className,m=l.wrapper,v=m===void 0?"p":m,h=p.useRef(null),g=v,s=[te.typicalWrapper];return a&&s.unshift(a),p.useEffect(function(){n===1/0?y.apply(void 0,[h.current].concat(L(r),[y])):typeof n=="number"?y.apply(void 0,[h.current].concat(L(Array(n).fill(r).flat()))):y.apply(void 0,[h.current].concat(L(r)))}),w.createElement(g,{ref:h,className:s.join(" ")})},re=p.memo(le);const k=re;function ne(){return i("div",{className:"w-full  my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5",children:[e("div",{className:"mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg",children:e("h1",{className:"text-white text-center text-lg font-bold",children:"Waktu Operasional"})}),i("div",{className:"flex flex-row justify-center mx-auto mt-5 mb-5",children:[e("div",{className:"items-center ",children:e("div",{className:"h-2",children:i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"65",height:"73",viewBox:"0 0 65 73",fill:"none",children:[e("path",{d:"M4.98237 52.3794L0.713802 57.0712C0.0455948 57.7403 0.0455948 58.9475 0.713802 59.7516C1.01826 60.0686 1.41623 60.2788 1.84884 60.351C2.28145 60.4233 2.72572 60.3537 3.11594 60.1528L8.18522 57.0712L4.98237 52.3794Z",fill:"#22272E"}),e("path",{d:"M43.9466 63.7704L45.1467 70.0686C45.2811 71.0077 44.7473 72.0799 43.8217 72.3498C43.3782 72.4926 42.8974 72.4614 42.4759 72.2625C42.0544 72.0635 41.7237 71.7117 41.5501 71.2777L38.8811 65.9167L43.9466 63.7704Z",fill:"#22272E"}),e("path",{d:"M29.6682 69.2645C45.7335 69.2645 58.7569 56.1852 58.7569 40.0511C58.7569 23.9171 45.7335 10.8378 29.6682 10.8378C13.6029 10.8378 0.579407 23.9171 0.579407 40.0511C0.579407 56.1852 13.6029 69.2645 29.6682 69.2645Z",fill:"#6DAFA7"}),e("path",{d:"M42.8573 53.3455C50.1521 46.0195 50.1521 34.1416 42.8573 26.8156C35.5625 19.4895 23.7353 19.4895 16.4405 26.8156C9.14566 34.1416 9.14566 46.0195 16.4405 53.3455C23.7353 60.6715 35.5625 60.6715 42.8573 53.3455Z",fill:"#FFE779"}),e("path",{d:"M34.8737 46.7523L29.6682 40.0511L32.4716 30.6714",stroke:"#63737A",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),e("path",{d:"M11.1212 11.7865C10.9199 11.8552 10.7067 11.8817 10.4949 11.8643C10.283 11.847 10.077 11.7862 9.88943 11.6857C9.70189 11.5852 9.53688 11.4472 9.40459 11.2801C9.2723 11.113 9.17555 10.9204 9.12032 10.7143C8.82251 8.78917 9.19255 6.81976 10.1685 5.13604C11.1444 3.45232 12.6668 2.15659 14.4807 1.46597C16.2946 0.775349 18.2898 0.731797 20.1319 1.34261C21.974 1.95343 23.551 3.18149 24.5989 4.82104C25.1327 5.62518 24.7314 6.56239 23.7982 6.96541L11.1212 11.7865Z",fill:"#6DAFA7"}),e("path",{d:"M60.3584 26.2496C60.493 26.417 60.6609 26.5543 60.8515 26.6527C61.042 26.7511 61.2509 26.8084 61.4648 26.8209C61.6787 26.8335 61.8929 26.8009 62.0935 26.7255C62.2941 26.65 62.4769 26.5332 62.6299 26.3827C65.299 23.4341 65.5659 19.0123 63.0293 15.6627C60.4928 12.313 56.228 11.3739 52.7526 13.1172C51.9519 13.5183 51.685 14.5905 52.2188 15.2597L60.3584 26.2496Z",fill:"#6DAFA7"}),e("path",{d:"M42.879 8.69346L35.2732 6.54909C34.0806 6.14797 33.2723 4.94271 33.6718 3.61198C34.0731 2.40482 35.2732 1.60067 36.6077 2.0037L44.2135 4.14807C45.4136 4.54919 46.2144 5.75635 45.8149 7.09469C45.4136 8.29234 44.0791 9.09648 42.879 8.69346Z",fill:"#6DAFA7"}),e("path",{d:"M36.6667 5.3901L34.5817 12.5974L40.0914 14.205L42.1764 6.99766L36.6667 5.3901Z",fill:"#6DAFA7"})]})})}),e("div",{className:"w-[10%]"}),e("div",{className:"items-center",children:i("h1",{className:"text-black font-bold text-center text-lg",children:[e(k,{steps:["Senin - Kamis",6e3,"Jum'at",7e3],loop:1/0,wrapper:"p"}),e("br",{}),e(k,{steps:["07:30 - 15:30",7e3,"07:30 - 14:00",7e3],loop:1/0,wrapper:"p"})]})})]})]})}var R={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},j=w.createContext&&w.createContext(R),x=globalThis&&globalThis.__assign||function(){return x=Object.assign||function(t){for(var l,r=1,n=arguments.length;r<n;r++){l=arguments[r];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}return t},x.apply(this,arguments)},ae=globalThis&&globalThis.__rest||function(t,l){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&l.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(t);a<n.length;a++)l.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]]);return r};function $(t){return t&&t.map(function(l,r){return w.createElement(l.tag,x({key:r},l.attr),$(l.child))})}function C(t){return function(l){return w.createElement(ie,x({attr:x({},t.attr)},l),$(t.child))}}function ie(t){var l=function(r){var n=t.attr,a=t.size,m=t.title,v=ae(t,["attr","size","title"]),h=a||r.size||"1em",g;return r.className&&(g=r.className),t.className&&(g=(g?g+" ":"")+t.className),w.createElement("svg",x({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,v,{className:g,style:x(x({color:t.color||r.color},r.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),m&&w.createElement("title",null,m),t.children)};return j!==void 0?w.createElement(j.Consumer,null,function(r){return l(r)}):l(R)}function se(t){return C({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(t)}function oe(t){return C({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}function ce({data:t}){return t.slug.startsWith("http")?i("a",{href:t.slug,target:"_blank",class:"relative w-full md:w-auto  inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium transition duration-300 ease-out md:rounded-full hover:shadow-xl group hover:ring-1 hover:ring-green-500",children:[e("span",{class:"absolute inset-0 w-full h-full group-hover:bg-gradient-to-br from-blue-400 to-green-400"}),e("span",{class:"absolute bottom-0 right-0 hidden md:block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:bg-green-500 rounded-full opacity-80 group-hover:rotate-45 ease"}),e("span",{class:"relative text-black group-hover:text-white ",children:t.title})]}):i(M,{href:`/${t.slug}`,class:"relative  w-full md:w-auto inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium transition duration-300 ease-out md:rounded-full hover:shadow-xl group hover:ring-1 hover:ring-green-500",children:[e("span",{class:"absolute inset-0 w-full h-full group-hover:bg-gradient-to-br from-blue-400 to-green-400"}),e("span",{class:"absolute bottom-0 right-0 hidden md:block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:bg-green-500 rounded-full opacity-80 group-hover:rotate-45 ease"}),e("span",{class:"relative text-black group-hover:text-white ",children:t.title})]})}function de(t){return C({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(t)}function ue(t){return C({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"}}]})(t)}function he({data:t}){const[l,r]=p.useState(!1);return i(z,{children:[l&&e("div",{className:"fixed w-screen h-screen",onClick:()=>r(!l)}),i("div",{className:"block w-full md:w-auto",children:[i("a",{onClick:()=>r(n=>!n),className:"relative w-full cursor-pointer  inline-flex items-center justify-center px-4 py-1 overflow-hidden font-medium transition duration-300 ease-out md:rounded-full hover:shadow-xl group hover:ring-1 hover:ring-green-500",children:[e("span",{className:"absolute inset-0 w-full h-full group-hover:bg-gradient-to-br from-blue-400 to-green-400"}),e("span",{className:"absolute bottom-0 right-0 hidden md:block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-90 translate-x-24 group-hover:bg-green-500 rounded-full opacity-80 group-hover:rotate-45 ease"}),e("span",{className:"relative text-black group-hover:text-white",children:t.title}),l?e(ue,{className:"relative group-hover:text-white h-4"}):e(de,{className:" relative group-hover:text-white h-4"})]}),l&&e("div",{className:"block md:absolute md:flex md:flex-col z-10 shadow-md rounded-b-xl ",children:t&&t.child.map((n,a)=>n.slug.startsWith("http")?i("a",{href:n.slug,target:"_blank",className:`relative ${a==0?"rounded-tr-lg":""} ${a==t.child.length-1?"rounded-b-lg":""} bg-slate-50 md:bg-white w-full inline-flex items-center justify-start px-4 py-1 font-medium duration-200 hover:shadow-xl group hover:ring-1 hover:bg-green-400`,children:[a==0&&e("svg",{className:"absolute -left-3 top-0 fill-white group-hover:fill-green-400 -z-10",xmlns:"http://www.w3.org/2000/svg",width:"23",height:"16",viewBox:"0 0 23 16",fill:"none",children:e("path",{d:"M0.750831 0.0224888L22.738 -0.000979136L16.2414 15.6263L0.750831 0.0224888Z"})}),n.title]}):i(M,{href:t.slug=="/"?`${n.slug}`:`/${t.slug}/${n.slug}`,className:`relative ${a==0?"rounded-tr-lg":""} ${a==t.child.length-1?"rounded-b-lg":""} bg-slate-50 md:bg-white w-full inline-flex items-center justify-start px-4 py-1 font-medium duration-200 hover:shadow-xl group hover:ring-1 hover:bg-green-400`,children:[a==0&&e("svg",{className:"absolute -left-3 top-0 fill-white group-hover:fill-green-400 -z-10",xmlns:"http://www.w3.org/2000/svg",width:"23",height:"16",viewBox:"0 0 23 16",fill:"none",children:e("path",{d:"M0.750831 0.0224888L22.738 -0.000979136L16.2414 15.6263L0.750831 0.0224888Z"})}),n.title]}))})]})]})}function fe({data:t,className:l}){const r=p.useRef(),n=()=>{r.current.classList.toggle("translate-y-[200vh]")};return window.addEventListener("resize",a=>{window.innerWidth>=768&&r.current.classList.remove("translate-y-[200vh]")}),i("header",{className:`flex items-center h-14 md:h-full w-full  justify-between md:justify-center z-20 backdrop-blur-lg shadow-lg top-0 px-5 sticky bg-white bg-opacity-60 ${l}`,children:[e("h3",{className:"font-bold text-xl md:hidden",children:"Skensa"}),i("nav",{className:"fixed md:relative flex md:max-w-[90%] mx-auto flex-col justify-center md:flex py-4 flex-wrap items-center gap-1 w-full h-screen md:h-full backdrop-blur-lg md:backdrop-blur-none bg-white md:bg-transparent  bg-opacity-60 left-0 -top-[200vh] md:top-0  md:flex-row  duration-1000",ref:r,children:[t&&t.map(a=>a.child.length>0?e(he,{data:a}):e(ce,{data:a})),e("button",{className:"absolute top-2 right-2 md:hidden",onClick:n,children:e(oe,{className:"h-8 w-8"})})]}),e("button",{className:"md:hidden",onClick:n,children:e(se,{className:"h-5 w-5"})})]})}function me({children:t,autoSlide:l=!1,autoSlideInterval:r=5e3}){const[n,a]=p.useState(0),m=()=>a(h=>h===0?t.length-1:h-1),v=()=>a(h=>h===t.length-1?0:h+1);return p.useEffect(()=>{if(!l)return;const h=setInterval(v,r);return()=>clearInterval(h)},[]),i("div",{className:"overflow-hidden relative w-full",children:[e("div",{className:"flex transition-transform ease-out duration-1000 w-full",style:{transform:`translateX(-${n*100}%)`},children:t}),i("div",{className:"absolute inset-0 flex items-center justify-between p-4",children:[e("button",{onClick:m,className:"p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",children:e(A,{size:40})}),e("button",{onClick:v,className:"p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white",children:e(E,{size:40})})]}),e("div",{className:"absolute bottom-4 right-0 left-0",children:e("div",{className:"flex items-center justify-center gap-2",children:t.map((h,g)=>e("div",{className:`
                            transition-all w-3 h-3 bg-white rounded-full
                            ${n===g?"p-2":"bg-opacity-50"}
                            `}))})})]})}const ge=["/assets/images/1.jpeg","/assets/images/2.jpeg","/assets/images/3.jpeg","/assets/images/4.jpeg"];function ve(t){return i(z,{children:[e(I,{title:"Selamat datang"}),i("div",{className:"flex max-h-[50%] overflow-hidden ",children:[i("svg",{className:"object-cover",width:"100%",height:"100%",viewBox:"0 0 1440 767",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M709.044 767C420.129 767 185.016 741.903 0 700.13V0H1440V700.13C1248.03 743.707 1004.84 767 709.044 767Z",fill:"url(#paint0_linear_271_422)"}),e("defs",{children:i("linearGradient",{id:"paint0_linear_271_422",x1:"1440",y1:"330.784",x2:"-0.405161",y2:"313.726",gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"#0891B2"}),e("stop",{offset:"1",stopColor:"#4ade80"}),e("stop",{offset:"1",stopColor:"#60a5fa"})]})})]}),i("div",{className:"absolute overflow-hidden flex flex-col w-full ",children:[e("div",{className:"w-full lg:w-[67%]",children:e(me,{autoSlide:!0,autoSlideInterval:5e3,children:ge.map(l=>e("img",{src:l,className:"object-cover h-[50vh] md:h-auto"}))})}),i("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute right-0 -z-50 lg:z-10 lg:h-full",viewBox:"0 0 829 605",fill:"none",children:[e("path",{d:"M298.5 604.5L865.5 604.5C865.5 604.5 865.5 252.528 865.5 27.0004C865.5 16.4562 865.5 10.5445 865.5 0.000244141C744.242 0.000324644 274.5 0.000792468 274.5 0.000792468L0 142.286L298.5 604.5Z",fill:"#059669"}),e("path",{d:"M352 604.5L865.5 604.5C865.5 604.5 865.5 252.528 865.5 27.0004C865.5 16.4562 865.5 10.5445 865.5 0.000244141C777.632 0.00031794 360 0.000773395 360 0.000773395L61.207 157.783L352 604.5Z",fill:"#065F46"}),e("path",{d:"M409.5 604.5L865.5 604.5C865.5 604.5 865.5 553 865.5 520C865.5 520 865.5 203.073 865.5 0.000244141C810.046 0.000310677 443 0.000754321 443 0.000754321L119.259 172.954L409.5 604.5Z",fill:"url(#paint0_linear_392_441)",fillOpacity:"0.541176"}),e("defs",{children:e("linearGradient",{id:"paint0_linear_392_441",x1:"843.465",y1:"615.294",x2:"489.616",y2:"-30.1011",gradientUnits:"userSpaceOnUse",children:e("stop",{stopColor:"#002118"})})})]}),e("div",{className:"absolute right-10 xl:right-4 -z-10 lg:z-10 lg:top-10 xl:top-20 text-white items-center justify-center",children:i("div",{className:"flex flex-col items-center justify-center",children:[e("div",{className:"",children:e("img",{src:"/assets/images/Vector.svg",alt:"",className:"w-48 xl:w-56 2xl:w-72"})}),e("div",{className:"",children:e("h1",{className:"text-3xl xl:text-4xl text-center",children:"Perpustakaan"})}),e("div",{className:"",children:e("h1",{className:"text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center",children:"SMKN 1 PASURUAN"})})]})})]})]}),e(fe,{data:t.category,className:"-mt-[calc(50%+3.5rem)] md:mt-7 md:mb-0 lg:-mt-[15.6%]"}),i("section",{className:"mt-[50vh] md:mt-0 pt-20 md:pt-36",children:[e("div",{className:"w-[90%] xl:w-[85%] mx-auto ",children:i("div",{className:"grid grid-flow-row  gap-10 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4",children:[e(H,{article:t.article,className:"lg:col-span-2 xl:col-span-3"}),i("div",{className:"flex flex-col col-span-1 backdrop-blur-sm mb-20",children:[e(W,{}),e(ne,{}),e(T,{data:t.other}),e(F,{}),e(K,{}),i("div",{className:"w-full  my-1 bg-opacity-50 bg-white rounded-lg shadow-md p-5",children:[e("div",{className:"mx-auto bg-gradient-to-r from-green-400 to-blue-400 py-3 rounded-lg",children:e("h1",{className:"text-white text-center text-lg font-bold",children:"Developer"})}),e("div",{className:"flex flex-col justify-between mx-5 mt-5 mb-5",children:e("div",{className:"items-center ",children:e("h1",{className:"text-black font-bold text-center text-lg",children:"RPLPOJOK"})})})]})]})]})}),e("div",{className:"flex max-h-[50%] bg-bottom",children:i("svg",{className:"w-full h-full fill-gradient-to-r",viewBox:"0 0 1440 191",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M418 126.513C343.734 98.4664 106 56.1799 0 191H1440C1440 191 1387.88 46.4432 1316.94 56.1799C1279.57 61.3094 1271.73 95.7941 1236.55 109.321C1126.84 151.509 1072.28 -14.7933 955.7 1.07092C868.73 12.9055 835.54 152.298 759.201 109.321C720.448 87.5042 700.5 56.1799 652 56.1799C557.223 56.1799 492.266 154.559 418 126.513Z",fill:"url(#paint0_linear_318_424)"}),e("defs",{children:i("linearGradient",{id:"paint0_linear_318_424",x1:"0%",y1:"100%",x2:"100%",y2:"0%",gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"#4ade80"}),e("stop",{offset:"1",stopColor:"#60a5fa"})]})})]})})]}),e(U,{})]})}export{ve as default};
