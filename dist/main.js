!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(n,e,r){"use strict";r.r(e);var t=()=>'<header>\n    <div class="nav-container--icons">\n        <img src="./galery/Icons/brand.png" alt="brand">\n        <img src="./galery/Icons/Navbar.png" alt="Nav" id="nav">\n    </div>        \n    <nav class="nav-container--home">            \n        <ul>\n            <li></li>\n            <li></li>\n            <li></li>\n            <li></li>\n        </ul>\n    </nav>\n</header>';var o=async()=>{document.getElementById("header").innerHTML=await t()};window.addEventListener("load",o)}]);