(()=>{var n={757:(n,e,t)=>{n.exports=t(666)},493:(n,e,t)=>{"use strict";t.d(e,{Z:()=>A});var r=t(645),i=t.n(r),o=t(667),a=t.n(o),s=t(409),c=t(456),l=t(249),p=t(965),d=t(254),f=t(768),m=t(709),u=t(194),g=t(530),x=t(834),h=t(219),b=i()((function(n){return n[1]})),y=a()(s),w=a()(c),v=a()(l),k=a()(p),T=a()(d),E=a()(f),L=a()(m),N=a()(u),_=a()(g),F=a()(x),j=a()(h);b.push([n.id,'* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "MONTSERRAT", "monospace", "RALEWAY", "OPEN SANS";\n}\n\n/* \n// animaciones // launch/* \n.start {\n    height: 100vh;\n    width: 100%;\n    position: relative;\n}\n\n.start-page {\n    position: absolute;\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n}\n\n.loader_container {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    position: relative;\n    z-index: 3;\n    animation: loader 5s linear forwards;\n}\n\n@keyframes loader {\n    0% {\n        opacity: 1;\n        visibility: visible;\n        overflow: hidden;\n    }\n\n    95% {\n        opacity: 1;\n        visibility: visible;\n        overflow: hidden;\n    }\n\n    100% {\n        opacity: 0;\n        visibility: hidden;\n        overflow: visible;\n    }\n}\n */\n/* The loader container */\n/* .loader {\n    position: absolute;\n    top: 40%;\n    left: 50%;\n\n    width: 200px;\n    height: 200px;\n\n    margin-top: -100px;\n    margin-left: -100px;\n}\n\n\n/* The dot */\n/* .loader>.dot {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 10;\n\n    width: 160px;\n    height: 100px;\n\n    margin-top: -50px;\n    margin-left: -80px;\n\n    border-radius: 5px;\n\n    background-color: white;\n\n    transform-style: preserve-3d;\n\n    animation: dot1 3s cubic-bezier(.55, .3, .24, .99) infinite;\n} */\n/* \n.loader>.dot:nth-child(2) {\n    z-index: 11;\n    width: 150px;\n    height: 90px;\n    margin-top: -45px;\n    margin-left: -75px;\n    border-radius: 3px;\n    background-color: #666;\n    animation-name: dot2;\n}\n\n.loader>.dot:nth-child(3) {\n    z-index: 12;\n    width: 40px;\n    height: 20px;\n    margin-top: 50px;\n    margin-left: -20px;\n    border-radius: 0 0 5px 5px;\n    background-color: gray;\n    animation-name: dot3;\n}\n */\n/* \n@keyframes dot1 {\n\n    3%,\n    97% {\n        width: 160px;\n        height: 100px;\n\n        margin-top: -50px;\n        margin-left: -80px;\n    }\n\n    30%,\n    36% {\n        width: 80px;\n        height: 120px;\n\n        margin-top: -60px;\n        margin-left: -40px;\n    }\n\n    63%,\n    69% {\n        width: 40px;\n        height: 80px;\n\n        margin-top: -40px;\n        margin-left: -20px;\n    }\n}\n\n@keyframes dot2 {\n\n    3%,\n    97% {\n        width: 150px;\n        height: 90px;\n\n        margin-top: -45px;\n        margin-left: -75px;\n    }\n\n    30%,\n    36% {\n        width: 70px;\n        height: 96px;\n\n        margin-top: -48px;\n        margin-left: -35px;\n    }\n\n    63%,\n    69% {\n        width: 32px;\n        height: 60px;\n\n        margin-top: -30px;\n        margin-left: -16px;\n    }\n}\n\n@keyframes dot3 {\n\n    3%,\n    97% {\n        width: 40px;\n        height: 20px;\n\n        margin-top: 50px;\n        margin-left: -20px;\n    }\n\n    30%,\n    36% {\n        width: 8px;\n        height: 8px;\n\n        margin-top: 49px;\n        margin-left: -5px;\n\n        border-radius: 8px;\n    }\n\n    63%,\n    69% {\n        width: 16px;\n        height: 4px;\n\n        margin-top: -37px;\n        margin-left: -8px;\n\n        border-radius: 10px;\n    }\n}\n */\n/* \n atomStyle  */\n/* \n@keyframes atom {\n    from {\n        transform: none;\n    }\n\n    to {\n        transform: translateY(-10px);\n    }\n}\n\n@keyframes electron-circle1 {\n    from {\n        transform: rotateY(70deg) rotateZ(20deg);\n    }\n\n    to {\n        transform: rotateY(70deg) rotateZ(380deg);\n    }\n}\n\n@keyframes electron1 {\n    from {\n        transform: rotateZ(-20deg) rotateY(-70deg);\n    }\n\n    to {\n        transform: rotateZ(-380deg) rotateY(-70deg);\n    }\n}\n\n@keyframes electron-circle2 {\n    from {\n        transform: rotateY(60deg) rotateX(60deg) rotateZ(-30deg);\n    }\n\n    to {\n        transform: rotateY(60deg) rotateX(60deg) rotateZ(330deg);\n    }\n} */\n/* \n@keyframes electron2 {\n    from {\n        transform: rotateZ(30deg) rotateX(-60deg) rotateY(-60deg);\n    }\n\n    to {\n        transform: rotateZ(-330deg) rotateX(-60deg) rotateY(-60deg);\n    }\n}\n\n@keyframes electron-circle3 {\n    from {\n        transform: rotateY(-60deg) rotateX(60deg) rotateZ(100deg);\n    }\n\n    to {\n        transform: rotateY(-60deg) rotateX(60deg) rotateZ(460deg);\n    }\n}\n\n@keyframes electron3 {\n    from {\n        transform: rotateZ(-100deg) rotateX(-60deg) rotateY(60deg);\n    }\n\n    to {\n        transform: rotateZ(-460deg) rotateX(-60deg) rotateY(60deg);\n    }\n}\n\n\n.atom {\n    top: 140px;\n    margin: 50px auto;\n    width: 120px;\n    height: 120px;\n    position: relative;\n    animation: atom 1s ease-in-out infinite alternate;\n    perspective: 300px;\n    transform-style: preserve-3d;\n}\n\n.atom:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    width: 20px;\n    height: 20px;\n    border-radius: 10px;\n    background: white;\n}\n\n.atom .electron {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    width: 100px;\n    height: 100px;\n    border-radius: 50px;\n    border: 2px solid white;\n    transform-style: preserve-3d;\n}\n\n.atom .electron:before {\n    content: \'\';\n    position: absolute;\n    top: -4px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    background: #666;\n    transform-origin: 50% 50% 0;\n} */\n/* \n.atom .electron:nth-child(1) {\n    transform: rotateY(70deg) rotateZ(20deg);\n    animation: electron-circle1 3s linear infinite;\n}\n\n.atom .electron:nth-child(2) {\n    transform: rotateY(60deg) rotateX(60deg) rotateZ(-30deg);\n    animation: electron-circle2 3s linear infinite;\n}\n\n.atom .electron:nth-child(3) {\n    transform: rotateY(-60deg) rotateX(60deg) rotateZ(100deg);\n    animation: electron-circle3 3s linear infinite;\n}\n\n.atom .electron:nth-child(1):before {\n    transform: rotateZ(-20deg) rotateY(-70deg);\n    animation: electron1 3s linear infinite;\n}\n\n.atom .electron:nth-child(2):before {\n    transform: rotateZ(30deg) rotateX(-60deg) rotateY(-60deg);\n    animation: electron2 3s linear infinite;\n}\n\n.atom .electron:nth-child(3):before {\n    transform: rotateZ(-100deg) rotateX(-60deg) rotateY(60deg);\n    animation: electron3 3s linear infinite;\n} */\nheader {\n  width: 100%;\n  height: 64px;\n}\n\n.menu {\n  background-color: #000000;\n  -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n  -webkit-box-shadow: 5px 0 10px rgba(0, 0, 0, 0.25);\n          box-shadow: 5px 0 10px rgba(0, 0, 0, 0.25);\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.menu span > img {\n  margin-right: 15px;\n}\n\n.menu > .logo > img {\n  margin-top: 55px;\n}\n\n.btn_menu {\n  cursor: pointer;\n  display: none;\n}\n\n.menu_items {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  list-style: none;\n  margin-right: 30px;\n}\n\n.menu_items li {\n  border-radius: 3px;\n  margin: 0 5px;\n}\n\n.menu_items li a {\n  padding: 7px 13px;\n  text-decoration: none;\n  font-size: 18px;\n  display: block;\n  text-transform: uppercase;\n  color: #ffffff;\n}\n\n.menu_items li:hover,\nli:active {\n  background: linear-gradient(339deg, #0b0e0d, #dadada);\n  -webkit-animation: AnimationName 10s ease infinite;\n  animation: AnimationName 20s ease infinite;\n  background-size: 645px 40px;\n  border-radius: 40px;\n}\n@-webkit-keyframes AnimationName {\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 51% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n}\n@keyframes AnimationName {\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 51% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n}\n\nul.show {\n  top: 64px;\n}\n\ndiv.show2 {\n  top: 64px;\n}\n\n@media screen and (max-width: 952px) {\n  .menu_items li a {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 834px) {\n  .btn_menu {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n\n  .resume {\n    position: fixed;\n    width: 100vw;\n    height: calc(100vh - 64px);\n    background-color: #000000;\n    background-image: url('+y+');\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    top: -100vh;\n    text-align: center;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    color: #ffffff;\n  }\n  .resume p {\n    font-family: "open Sans", sans-serif;\n    font-size: 15px;\n    font-weight: normal;\n    font-style: normal;\n    line-height: 20px;\n    text-align: justify;\n    padding: 40px;\n    margin-top: 50px;\n  }\n  .resume .button {\n    margin-top: 20px;\n    background: transparent;\n    font-family: "MONTSERRAT", "monospace";\n    font-style: normal;\n    font-weight: 600;\n    font-size: 15px;\n    line-height: 18px;\n    text-align: center;\n    color: #ffffff;\n    padding: 10px 45px;\n    border-left: #FFFFFF solid;\n    border-right: #FFFFFF solid;\n    border-top: none;\n    border-bottom: none;\n  }\n\n  .menu_items {\n    position: fixed;\n    width: 100vw;\n    height: calc(100vh - 64px);\n    background-color: #000000;\n    top: -100vh;\n    text-align: center;\n    -webkit-transition: all 0.4s;\n    transition: all 0.4s;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .menu_items li {\n    margin: 30px 0 0 0;\n    padding: 10px 0;\n    line-height: 30px;\n  }\n\n  .menu_items li:hover {\n    background: none;\n  }\n\n  .menu_items li a {\n    font-size: 20px;\n    font-weight: bold;\n  }\n\n  .menu_items li a:hover {\n    background: linear-gradient(339deg, #0b0e0d, #dadada);\n    -webkit-animation: AnimationName 10s ease infinite;\n    animation: AnimationName 20s ease infinite;\n  }\n  @-webkit-keyframes AnimationName {\n    0% {\n      background-position: 50% 0%;\n    }\n    50% {\n      background-position: 51% 100%;\n    }\n    100% {\n      background-position: 50% 0%;\n    }\n  }\n  @keyframes AnimationName {\n    0% {\n      background-position: 50% 0%;\n    }\n    50% {\n      background-position: 51% 100%;\n    }\n    100% {\n      background-position: 50% 0%;\n    }\n  }\n}\n@media screen and (max-width: 768px) and (orientation: landscape) {\n  .menu_items li {\n    margin: 5px 0 0 0;\n  }\n}\n.section-main--one {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(339deg, #0b0e0d, #dadada);\n  -webkit-animation: AnimationName 10s ease infinite;\n  animation: AnimationName 20s ease infinite;\n  background-size: 400% 400%;\n}\n@-webkit-keyframes AnimationName {\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 51% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n}\n@keyframes AnimationName {\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 51% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n}\n\n.banner-text--containerTwo {\n  display: none;\n}\n\n.main-banner--container {\n  width: 100%;\n  height: 100vh;\n  background-image: url('+w+');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: -64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.main-banner--container h1 {\n  font-family: "MONTSERRAT", "monospace";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 32px;\n  line-height: 39px;\n  text-align: center;\n  color: #ffffff;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.main-banner--container h2 {\n  font-family: "Advent Pro";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  line-height: 30px;\n  text-align: center;\n  color: #ffffff;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.separador {\n  margin: 20px 0;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n.git {\n  margin: 0 20px;\n}\n\n@media screen and (min-width: 374px) {\n  .main-banner--container {\n    background-image: url('+v+");\n  }\n}\n@media screen and (min-width: 390px) {\n  .main-banner--container {\n    background-image: url("+k+");\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding-bottom: 95px;\n  }\n}\n@media screen and (min-width: 414px) and (max-height: 736px) {\n  .main-banner--container {\n    background-image: url("+T+");\n    height: 672px;\n    padding-bottom: 10px;\n  }\n}\n@media screen and (min-width: 424px) {\n  .main-banner--container {\n    background-image: url("+E+');\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: end;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n\n  .separador {\n    display: none;\n  }\n\n  .banner-text--containerOne {\n    display: none;\n  }\n\n  .banner-text--containerTwo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    padding: 20px;\n  }\n  .banner-text--containerTwo h1 {\n    font-family: "MONTSERRAT", "monospace";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 32px;\n    line-height: 39px;\n    text-align: center;\n    color: #ffffff;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n  .banner-text--containerTwo h2 {\n    font-family: "Advent Pro";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 25px;\n    line-height: 30px;\n    text-align: center;\n    color: #ffffff;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n  .banner-text--containerTwo p {\n    font-family: Raleway;\n    font-style: normal;\n    font-weight: 800;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: center;\n    color: #FFFFFF;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n\n  .banner-img--container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    padding: 10px;\n  }\n  .banner-img--container .git {\n    margin: 20px 0;\n  }\n}\n@media screen and (min-width: 449px) {\n  .main-banner--container {\n    background-image: url('+E+");\n    padding-bottom: 95px;\n  }\n}\n@media screen and (min-width: 511px) {\n  .main-banner--container {\n    background-image: url("+L+");\n    padding-bottom: 95px;\n  }\n  .main-banner--container .banner-text--containerTwo {\n    padding: 0 0 30px 35px;\n  }\n  .main-banner--container .banner-img--container {\n    padding-right: 25px;\n    margin-bottom: 15px;\n  }\n}\n@media screen and (min-width: 600px) {\n  .main-banner--container {\n    background-image: url("+N+");\n  }\n}\n@media screen and (min-width: 664px) {\n  .main-banner--container {\n    background-image: url("+_+');\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .main-banner--container .banner-text--containerTwo {\n    padding: 0;\n  }\n  .main-banner--container .banner-img--container {\n    margin: 0;\n    padding: 5px 15px 0 20px;\n  }\n\n  .separador {\n    display: none;\n  }\n\n  .banner-text--containerOne {\n    display: none;\n  }\n\n  .banner-text--containerTwo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n  .banner-text--containerTwo h1 {\n    font-family: "MONTSERRAT", "monospace";\n    font-style: normal;\n    font-weight: 400;\n    font-size: 32px;\n    line-height: 39px;\n    text-align: center;\n    color: #ffffff;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n  .banner-text--containerTwo h2 {\n    font-family: "Advent Pro";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 25px;\n    line-height: 30px;\n    text-align: center;\n    color: #ffffff;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n  .banner-text--containerTwo p {\n    font-family: Raleway;\n    font-style: normal;\n    font-weight: 800;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: center;\n    color: #FFFFFF;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  }\n\n  .banner-img--container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n  }\n  .banner-img--container .git {\n    margin: 20px 0;\n  }\n}\n@media screen and (min-width: 832px) {\n  .main-banner--container {\n    background-image: url('+F+");\n  }\n}\n@media screen and (min-width: 1023px) {\n  .main-banner--container {\n    background-image: url("+j+");\n  }\n}",""]);const A=b},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},666:n=>{var e=function(n){"use strict";var e,t=Object.prototype,r=t.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{c({},"")}catch(n){c=function(n,e,t){return n[e]=t}}function l(n,e,t,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new F(r||[]);return o._invoke=function(n,e,t){var r=d;return function(i,o){if(r===m)throw new Error("Generator is already running");if(r===u){if("throw"===i)throw o;return A()}for(t.method=i,t.arg=o;;){var a=t.delegate;if(a){var s=L(a,t);if(s){if(s===g)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(r===d)throw r=u,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r=m;var c=p(n,e,t);if("normal"===c.type){if(r=t.done?u:f,c.arg===g)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(r=u,t.method="throw",t.arg=c.arg)}}}(n,t,a),o}function p(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var d="suspendedStart",f="suspendedYield",m="executing",u="completed",g={};function x(){}function h(){}function b(){}var y={};c(y,o,(function(){return this}));var w=Object.getPrototypeOf,v=w&&w(w(j([])));v&&v!==t&&r.call(v,o)&&(y=v);var k=b.prototype=x.prototype=Object.create(y);function T(n){["next","throw","return"].forEach((function(e){c(n,e,(function(n){return this._invoke(e,n)}))}))}function E(n,e){function t(i,o,a,s){var c=p(n[i],n,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(n){t("next",n,a,s)}),(function(n){t("throw",n,a,s)})):e.resolve(d).then((function(n){l.value=n,a(l)}),(function(n){return t("throw",n,a,s)}))}s(c.arg)}var i;this._invoke=function(n,r){function o(){return new e((function(e,i){t(n,r,e,i)}))}return i=i?i.then(o,o):o()}}function L(n,t){var r=n.iterator[t.method];if(r===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=e,L(n,t),"throw"===t.method))return g;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=p(r,n.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var o=i.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,g):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function N(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function _(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function F(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(N,this),this.reset(!0)}function j(n){if(n){var t=n[o];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,a=function t(){for(;++i<n.length;)if(r.call(n,i))return t.value=n[i],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return h.prototype=b,c(k,"constructor",b),c(b,"constructor",h),h.displayName=c(b,s,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,b):(n.__proto__=b,c(n,s,"GeneratorFunction")),n.prototype=Object.create(k),n},n.awrap=function(n){return{__await:n}},T(E.prototype),c(E.prototype,a,(function(){return this})),n.AsyncIterator=E,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var a=new E(l(e,t,r,i),o);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},T(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),n.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=j,F.prototype={constructor:F,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!n)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function i(r,i){return s.type="throw",s.arg=n,t.next=r,i&&(t.method="next",t.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=n,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),g},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),_(t),g}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var r=t.completion;if("throw"===r.type){var i=r.arg;_(t)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:j(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}(n.exports);try{regeneratorRuntime=e}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var f=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var u=i(m,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function i(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),l=0;l<o.length;l++){var p=t(o[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=c}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},219:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/256b6fb1636b86a0c0a0.png"},254:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/3036da6d4b950b93e908.png"},965:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/868ac4c6c32df796c9e5.png"},768:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/0a470383ea034e6e4b1b.png"},709:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/a8806d2f155c237f462b.png"},194:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/01508353e3afa03e367c.png"},530:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/2ec69dbd13eb62fa56b1.png"},834:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/19269f3b3b183dc37189.png"},409:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/3f9ef72562bc8a028c6a.png"},456:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/88f56009afe248264a28.png"},249:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/be7e7d61d914867933e2.png"},274:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/a6a9a299164bc6abec59.png"},236:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/cfe620fdff8c95108907.png"},267:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/1e95076873296772c3b8.png"},490:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/91a310a2c90344e77187.png"},963:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/3a8aa3578f1d377cde02.png"},619:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/c309452474c1f411665a.png"},912:(n,e,t)=>{"use strict";n.exports=t.p+"assets/image/3ed061ee9addb7a2e508.png"}},e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{"use strict";function n(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}var e=t(757),r=t.n(e),i=t(267),o=t(274),a=t(490);const s=function(){return'\n    <nav class="menu">\n        <span class="logo"  onclick="showResume()"><img src="'.concat(i,'" alt="brand"></span>\n        <div id="resume" class="resume">\n          <img src="').concat(a,'" alt="brandIntro" />\n          <p>\n            I am a professional in business administration, the last 8 years of\n            my life I have worked in all operational areas of a corporation,\n            leading a company of civil projects, there I learned about\n            programming, and I fell in love with the whole beautiful world\n            computer science, so I am looking for an opportunity to demonstrate\n            my capabilities and take my talents to another level, I believe in\n            continuous learning as the most important added value of my profile,\n            thanks for reading.\n          </p>\n          <button class="button" type="text">MORE</button>\n        </div>\n        <ul class="menu_items" id="otroModo">\n            <li><a class="active" href="#">Servicios</a></li>\n            <li><a href="#">Nosotros</a></li>\n            <li><a href="#">Portafolio</a></li>\n            <li><a href="#">Blog</a></li>\n            <li><a href="#">Contáctenos</a></li>\n        </ul>\n        <span class="btn_menu" onclick="showMenu()">\n            <img src="').concat(o,'" alt="Nav">\n        </span>\n    </nav>\n    ')};var c=t(912),l=t(963),p=t(236),d=t(619);const f=function(){return'\n    <section class="section-main--one">\n    <div class="main-banner--container">                \n        <div class="banner-text--containerOne">\n            <h2>my Name is Camilo</h2>\n            <h1>I’M A DEVELOPER</h1>\n        </div>\n        <div class="banner-text--containerTwo">\n            <h2>Hi, I am</h2>\n            <h1>Camilo Hernandez</h1>\n            <p>Front-end Developer / Business Manager</p>\n        </div>\n        <img src="'.concat(c,'" alt="separador" class="separador">                \n        <div class="banner-img--container">\n            <a href="mailto:chernandezcediel@gmail.com"><img src="').concat(l,'" alt="Mail"></a>\n            <a href="https://github.com/Cherced"><img src="').concat(p,'" alt="GITHUB" class="git"></a>\n            <a href="www.linkedin.com/in/cherced"><img src="').concat(d,'" alt="LINKEDIN"></a>        \n        </div>                    \n    </div>\n</section>')};const m=function(){var e,t=(e=r().mark((function n(){var e,t;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.getElementById("header"),t=document.getElementById("banner"),n.next=4,s();case 4:return e.innerHTML=n.sent,n.next=7,f();case 7:t.innerHTML=n.sent;case 8:case"end":return n.stop()}}),n)})),function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,c,"next",e)}function c(e){n(a,i,o,s,c,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();var u=t(379),g=t.n(u),x=t(795),h=t.n(x),b=t(569),y=t.n(b),w=t(565),v=t.n(w),k=t(216),T=t.n(k),E=t(589),L=t.n(E),N=t(493),_={};_.styleTagTransform=L(),_.setAttributes=v(),_.insert=y().bind(null,"head"),_.domAPI=h(),_.insertStyleElement=T();g()(N.Z,_);N.Z&&N.Z.locals&&N.Z.locals;window.addEventListener("load",m)})()})();