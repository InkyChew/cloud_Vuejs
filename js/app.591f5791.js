(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9f3a14c4"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[t]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"155f":function(t,e,r){t.exports=r.p+"img/logo.bc3a6621.svg"},"1eda":function(t,e,r){t.exports=r.p+"img/icon-file-upload.fc29b423.svg"},3654:function(t,e,r){"use strict";var n=r("4f44"),o=r.n(n);o.a},"4f44":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("AllModals"),r("router-view")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ModalAddFolder")},i=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade",attrs:{id:"ModalAddFolder",tabindex:"-1",role:"dialog","aria-labelledby":"ModalAddFolderTitle","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title",attrs:{id:"ModalAddFolderLongTitle"}},[t._v("建立新資料夾")]),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),r("div",{staticClass:"modal-body"},[t._v("...")]),r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("建立")])])])])])}],d={name:"ModalAddFolder",data:function(){return{}},methods:{}},f=d,p=r("2877"),m=Object(p["a"])(f,l,u,!1,null,null,null),b=m.exports,v=r("2f62");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var y={name:"AllModals",components:{ModalAddFolder:b},data:function(){return{}},computed:h({},Object(v["b"])({getModal:"getModal"})),methods:{modals:[{name:"ModalAddFolder"}]}},O=y,j=Object(p["a"])(O,s,i,!1,null,null,null),w=(j.exports,{name:"app",components:{AllModals:void 0},data:function(){return{}},methods:{}}),_=w,C=Object(p["a"])(_,o,a,!1,null,null,null),P=C.exports,x=r("8c4f"),M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fulid"},[n("div",{staticClass:"row mx-0"},[n("div",{staticClass:"col-3 menu d-flex flex-column"},[n("img",{staticClass:"logo",attrs:{src:r("155f")}}),n("nav",{staticClass:"flex-column mx-auto"},[n("button",{staticClass:"btn btn-warning"},[n("img",{attrs:{src:r("1eda")}}),t._v("上傳檔案")]),n("a",{staticClass:"nav-link",attrs:{href:""}},[n("img",{attrs:{src:r("b14a")}}),t._v("上傳資料夾")]),n("a",{staticClass:"nav-link",attrs:{href:"","data-toggle":"modal","data-target":"#ModalAddFolder"}},[n("img",{attrs:{src:r("ea51")}}),t._v("新資料夾")]),n("a",{staticClass:"nav-link",attrs:{href:""}},[n("img",{attrs:{src:r("d349")}}),t._v("共享資料夾")]),n("a",{staticClass:"nav-link",attrs:{href:""}},[n("img",{attrs:{src:r("fc26")}}),t._v("已標記星號")]),n("a",{staticClass:"nav-link",attrs:{href:""}},[n("img",{attrs:{src:r("fa18")}}),t._v("垃圾桶")])])]),n("div",{staticClass:"col-9 box"},[n("div",{staticClass:"row top"},[n("div",{staticClass:"col-8"},[n("nav",{attrs:{"aria-label":"breadcrumb"}},[n("ol",{staticClass:"breadcrumb"},[n("li",{staticClass:"breadcrumb-item root"},[t._v("我的雲端硬碟")]),n("li",{staticClass:"breadcrumb-item my-auto"},[t._v("fold")])])])]),n("div",{staticClass:"col-4"},[n("select",{staticClass:"form-control"},[n("option",[t._v("Default select")])])])])])])])}],E={name:"home",data:function(){return{}},methods:{}},k=E,S=(r("3654"),Object(p["a"])(k,M,A,!1,null,null,null)),D=S.exports;n["a"].use(x["a"]);var T=new x["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(r,!0).forEach(function(e){Object(c["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}n["a"].use(v["a"]);var $={SETMODAL:"SETMODAL"},N={state:{modal:""},getters:{getModal:function(t){return t.modal}},actions:{setModal:function(t,e){var r=t.commit;r($.SETMODAL,e)}},mutations:Object(c["a"])({},$.setModal,function(t,e){t.SETMODAL=e})},q=new v["a"].Store(L({},N,{strict:!1})),J=r("9483");Object(J["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({router:T,store:q,render:function(t){return t(P)}}).$mount("#app")},b14a:function(t,e,r){t.exports=r.p+"img/icon-folder-upload.394e17a5.svg"},d349:function(t,e,r){t.exports=r.p+"img/icon-folder-share.088260d4.svg"},ea51:function(t,e,r){t.exports=r.p+"img/icon-folder-add.59f8ff62.svg"},fa18:function(t,e,r){t.exports=r.p+"img/icon-trash.ba89638b.svg"},fc26:function(t,e,r){t.exports=r.p+"img/icon-star.ce880248.svg"}});
//# sourceMappingURL=app.591f5791.js.map