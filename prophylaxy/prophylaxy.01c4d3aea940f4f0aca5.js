!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=115)}([function(t,e,n){var r=n(1),o=n(30),i=n(3),c=n(31),u=n(35),a=n(56),l=o("wks"),s=r.Symbol,f=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(l,t)||(u&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(74))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(8),o=n(7),i=n(15);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8),o=n(42),i=n(5),c=n(20),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(1),o=n(28).f,i=n(6),c=n(11),u=n(29),a=n(46),l=n(78);t.exports=function(t,e){var n,s,f,d,p,v=t.target,y=t.global,g=t.stat;if(n=y?r:g?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in e){if(d=e[s],f=t.noTargetGet?(p=o(n,s))&&p.value:n[s],!l(y?s:v+(g?".":"#")+s,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;a(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),c(n,s,d,t)}}},function(t,e,n){var r=n(41),o=n(19);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(1),o=n(6),i=n(3),c=n(29),u=n(44),a=n(21),l=a.get,s=a.enforce,f=String(String).split("String");(t.exports=function(t,e,n,u){var a=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=f.join("string"==typeof e?e:"")),t!==r?(a?!d&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||u(this)}))},function(t,e,n){var r=n(33),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(9),o=n(51);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(1),o=n(58),i=n(51),c=n(6);for(var u in o){var a=r[u],l=a&&a.prototype;if(l&&l.forEach!==i)try{c(l,"forEach",i)}catch(t){l.forEach=i}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(19);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r,o,i,c=n(75),u=n(1),a=n(4),l=n(6),s=n(3),f=n(22),d=n(24),p=u.WeakMap;if(c){var v=new p,y=v.get,g=v.has,m=v.set;r=function(t,e){return m.call(v,t,e),e},o=function(t){return y.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var h=f("state");d[h]=!0,r=function(t,e){return l(t,h,e),e},o=function(t){return s(t,h)?t[h]:{}},i=function(t){return s(t,h)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(30),o=n(31),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e){t.exports={}},function(t,e,n){var r=n(47),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r,o,i=n(70),c=n(102),u=RegExp.prototype.exec,a=String.prototype.replace,l=u,s=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(s||d||f)&&(l=function(t){var e,n,r,o,c=this,l=f&&c.sticky,p=i.call(c),v=c.source,y=0,g=t;return l&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,y++),n=new RegExp("^(?:"+v+")",p)),d&&(n=new RegExp("^"+v+"$(?!\\s)",p)),s&&(e=c.lastIndex),r=u.call(l?n:c,g),l?r?(r.input=r.input.slice(y),r[0]=r[0].slice(y),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),d&&r&&r.length>1&&a.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},function(t,e,n){var r=n(8),o=n(40),i=n(15),c=n(10),u=n(20),a=n(3),l=n(42),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=u(e,!0),l)try{return s(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(1),o=n(6);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(23),o=n(45);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(48),o=n(34).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o=n(5),i=n(81),c=n(34),u=n(24),a=n(82),l=n(43),s=n(22),f=s("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=l("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete v.prototype[c[n]];return v()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=o(t),n=new d,d.prototype=null,n[f]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(7).f,o=n(3),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(20),o=n(7),i=n(15);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r={};r[n(0)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(2),o=n(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(8),o=n(2),i=n(43);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(45),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(1),o=n(29),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(3),o=n(76),i=n(28),c=n(7);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,l=0;l<n.length;l++){var s=n[l];r(t,s)||u(t,s,a(e,s))}}},function(t,e,n){var r=n(1);t.exports=r},function(t,e,n){var r=n(3),o=n(10),i=n(77).indexOf,c=n(24);t.exports=function(t,e){var n,u=o(t),a=0,l=[];for(n in u)!r(c,n)&&r(u,n)&&l.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var r=n(33),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){"use strict";var r=n(52).forEach,o=n(79),i=n(57),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(53),o=n(41),i=n(17),c=n(12),u=n(55),a=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,s=4==t,f=6==t,d=5==t||f;return function(p,v,y,g){for(var m,h,b=i(p),x=o(b),S=r(v,y,3),_=c(x.length),w=0,E=g||u,O=e?E(p,_):n?E(p,0):void 0;_>w;w++)if((d||w in x)&&(h=S(m=x[w],w,b),t))if(e)O[w]=h;else if(h)switch(t){case 3:return!0;case 5:return m;case 6:return w;case 2:a.call(O,m)}else if(s)return!1;return f?-1:l||s?s:O}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},function(t,e,n){var r=n(54);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(4),o=n(26),i=n(0)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(35);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(8),o=n(2),i=n(3),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],l=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:a,f=i(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(l&&!r)return!0;var t={length:-1};l?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,s,f)}))}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(48),o=n(34);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(0);e.f=r},function(t,e,n){var r=n(47),o=n(3),i=n(60),c=n(7).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},function(t,e,n){var r=n(39),o=n(16),i=n(0)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){"use strict";var r=n(10),o=n(92),i=n(18),c=n(21),u=n(64),a=c.set,l=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){"use strict";var r=n(9),o=n(93),i=n(66),c=n(95),u=n(37),a=n(6),l=n(11),s=n(0),f=n(23),d=n(18),p=n(65),v=p.IteratorPrototype,y=p.BUGGY_SAFARI_ITERATORS,g=s("iterator"),m=function(){return this};t.exports=function(t,e,n,s,p,h,b){o(n,e,s);var x,S,_,w=function(t){if(t===p&&j)return j;if(!y&&t in L)return L[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},E=e+" Iterator",O=!1,L=t.prototype,A=L[g]||L["@@iterator"]||p&&L[p],j=!y&&A||w(p),k="Array"==e&&L.entries||A;if(k&&(x=i(k.call(new t)),v!==Object.prototype&&x.next&&(f||i(x)===v||(c?c(x,v):"function"!=typeof x[g]&&a(x,g,m)),u(x,E,!0,!0),f&&(d[E]=m))),"values"==p&&A&&"values"!==A.name&&(O=!0,j=function(){return A.call(this)}),f&&!b||L[g]===j||a(L,g,j),d[e]=j,p)if(S={values:w("values"),keys:h?j:w("keys"),entries:w("entries")},b)for(_ in S)(y||O||!(_ in L))&&l(L,_,S[_]);else r({target:e,proto:!0,forced:y||O},S);return S}},function(t,e,n){"use strict";var r,o,i,c=n(66),u=n(6),a=n(3),l=n(0),s=n(23),f=l("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):d=!0),null==r&&(r={}),s||a(r,f)||u(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},function(t,e,n){var r=n(3),o=n(17),i=n(22),c=n(94),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(2),o=n(0),i=n(68),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r,o,i=n(1),c=n(98),u=i.process,a=u&&u.versions,l=a&&a.v8;l?o=(r=l.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(9),o=n(27);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";var r=n(5);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var r=n(33),o=n(19),i=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),l=u.length;return a<0||a>=l?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===l||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(13),n(14);function r(){if(/github/.test(document.location.host)){document.querySelectorAll('a[href^="/"]').forEach((function(t){var e=t.getAttribute("href");t.setAttribute("href","/hospital-khvoyninskaya"+e)}))}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));n(13),n(14);function r(t){return function(e){e.addEventListener("click",(function(){var n=e.nextElementSibling;n&&(e.classList.toggle(t),n.classList.toggle("element-enabled"))}))}}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.buttonContrastMode=document.querySelector(".header__button-contrast-mode"),this.mainMenuHandler=this.mainMenuHandler.bind(this)}var e,n,i;return e=t,(n=[{key:"render",value:function(){var t=this;document.querySelector(".header__button-main-menu").addEventListener("click",this.mainMenuHandler),document.querySelector(".overlay").addEventListener("click",this.mainMenuHandler),document.addEventListener("keydown",(function(e){"Escape"===e.key&&t.mainMenuHandler()})),document.querySelectorAll(".header__main-menu-list-title").forEach(r("header__main-menu-list-title_opened")),window.onload=function(){document.querySelector(".header__main-menu").classList.toggle("element-disabled")}}},{key:"mainMenuHandler",value:function(){document.querySelector(".header__main-menu").classList.toggle("header__main-menu_hidden"),document.querySelector(".header__main-menu").classList.toggle("element-on-top"),document.querySelector(".header__button-main-menu").classList.toggle("element-orange"),document.querySelector(".header__left-container").classList.toggle("element-orange"),document.querySelector(".header__left-container").classList.toggle("element-on-top"),document.querySelector(".overlay").classList.toggle("element-disabled"),window.screen.width<=424&&(document.querySelector(".header__right-container").classList.toggle("element-on-top"),document.querySelector(".header__button-search").classList.toggle("element-disabled"),document.querySelector(".header__contrast-mode").classList.toggle("element-enabled"))}}])&&o(e.prototype,n),i&&o(e,i),t}();function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"render",value:function(){document.querySelectorAll(".footer__list-title").forEach(r("footer__list-title_opened"))}}])&&c(e.prototype,n),o&&c(e,o),t}();n(80),n(84),n(85),n(86),n(63),n(97),n(99),n(100),n(69),n(103),n(104),n(105),n(111);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n(112);function s(t,e){document.cookie="".concat(t,"=").concat(e,"; path=/")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"render",value:function(t,e){document.querySelector(".contrast-mode__item-content-font_small").addEventListener("click",(function(){document.body.parentNode.classList.add("small"),document.body.parentNode.classList.remove("large"),s("font","small")})),document.querySelector(".contrast-mode__item-content-font_large").addEventListener("click",(function(){document.body.parentNode.classList.remove("small"),document.body.parentNode.classList.add("large"),s("font","large")})),document.querySelector(".contrast-mode__item-content-font_medium").addEventListener("click",(function(){document.body.parentNode.classList.remove("small"),document.body.parentNode.classList.remove("large"),s("font","medium")})),document.querySelector(".contrast-mode__item-switch-off").addEventListener("click",(function(){document.querySelectorAll(".element-with-backgroud").forEach((function(t){t.classList.add("element-background-disabled")})),document.querySelector(".contrast-mode__item-content-switch-off").classList.add("element-disabled"),document.querySelector(".contrast-mode__item-content-switch-on").classList.remove("element-disabled"),s("img","disabled")})),document.querySelector(".contrast-mode__item-switch-on").addEventListener("click",(function(){document.querySelectorAll(".element-with-backgroud").forEach((function(t){t.classList.remove("element-background-disabled")})),document.querySelector(".contrast-mode__item-content-switch-on").classList.add("element-disabled"),document.querySelector(".contrast-mode__item-content-switch-off").classList.remove("element-disabled"),s("img","enabled")})),document.querySelector(".contrast-mode__item-content-big-button-hide").addEventListener("click",(function(){document.querySelector(".contrast-mode").classList.toggle("element-disabled")})),document.querySelector(".contrast-mode__item-cube-button-white").addEventListener("click",(function(){document.body.parentNode.classList.remove("contrast"),s("mode","normal")})),document.querySelector(".contrast-mode__item-cube-button-black").addEventListener("click",(function(){document.body.parentNode.classList.add("contrast"),s("mode","contrast")})),t.addEventListener("click",(function(){document.querySelector(".contrast-mode").classList.toggle("element-disabled"),window.screen.width<=424&&e&&e()}))}},{key:"apply",value:function(){var t,e,n=(t=document.cookie.split("; "),e={},t.forEach((function(t){var n=a(t.split("="),2),r=n[0],o=n[1];e[r]=o})),e);n.mode&&document.body.parentNode.classList.add(n.mode),n.font&&document.body.parentNode.classList.add(n.font),"enabled"!==n.img&&n.img?(document.querySelector(".contrast-mode__item-content-switch-off").classList.add("element-disabled"),document.querySelector(".contrast-mode__item-content-switch-on").classList.remove("element-disabled")):document.querySelectorAll(".element-with-backgroud").forEach((function(t){t.classList.remove("element-background-disabled")}))}}])&&f(e.prototype,n),r&&f(e,r),t}();function p(){var t=new i;t.render();var e=new d;e.render(t.buttonContrastMode,t.mainMenuHandler),e.apply(),(new u).render()}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(1),o=n(44),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(25),o=n(32),i=n(50),c=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(10),o=n(12),i=n(49),c=function(t){return function(e,n,c){var u,a=r(e),l=o(a.length),s=i(c,l);if(t&&n!=n){for(;l>s;)if((u=a[s++])!=u)return!0}else for(;l>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==l||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r=n(9),o=n(1),i=n(25),c=n(23),u=n(8),a=n(35),l=n(56),s=n(2),f=n(3),d=n(26),p=n(4),v=n(5),y=n(17),g=n(10),m=n(20),h=n(15),b=n(36),x=n(59),S=n(32),_=n(83),w=n(50),E=n(28),O=n(7),L=n(40),A=n(6),j=n(11),k=n(30),P=n(22),T=n(24),I=n(31),R=n(0),q=n(60),M=n(61),C=n(37),N=n(21),F=n(52).forEach,D=P("hidden"),G=R("toPrimitive"),U=N.set,H=N.getterFor("Symbol"),$=Object.prototype,V=o.Symbol,B=i("JSON","stringify"),z=E.f,W=O.f,Y=_.f,K=L.f,J=k("symbols"),X=k("op-symbols"),Q=k("string-to-symbol-registry"),Z=k("symbol-to-string-registry"),tt=k("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=u&&s((function(){return 7!=b(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=z($,e);r&&delete $[e],W(t,e,n),r&&t!==$&&W($,e,r)}:W,ot=function(t,e){var n=J[t]=b(V.prototype);return U(n,{type:"Symbol",tag:t,description:e}),u||(n.description=e),n},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,e,n){t===$&&ct(X,e,n),v(t);var r=m(e,!0);return v(n),f(J,r)?(n.enumerable?(f(t,D)&&t[D][r]&&(t[D][r]=!1),n=b(n,{enumerable:h(0,!1)})):(f(t,D)||W(t,D,h(1,{})),t[D][r]=!0),rt(t,r,n)):W(t,r,n)},ut=function(t,e){v(t);var n=g(e),r=x(n).concat(ft(n));return F(r,(function(e){u&&!at.call(n,e)||ct(t,e,n[e])})),t},at=function(t){var e=m(t,!0),n=K.call(this,e);return!(this===$&&f(J,e)&&!f(X,e))&&(!(n||!f(this,e)||!f(J,e)||f(this,D)&&this[D][e])||n)},lt=function(t,e){var n=g(t),r=m(e,!0);if(n!==$||!f(J,r)||f(X,r)){var o=z(n,r);return!o||!f(J,r)||f(n,D)&&n[D][r]||(o.enumerable=!0),o}},st=function(t){var e=Y(g(t)),n=[];return F(e,(function(t){f(J,t)||f(T,t)||n.push(t)})),n},ft=function(t){var e=t===$,n=Y(e?X:g(t)),r=[];return F(n,(function(t){!f(J,t)||e&&!f($,t)||r.push(J[t])})),r};(a||(j((V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),n=function(t){this===$&&n.call(X,t),f(this,D)&&f(this[D],e)&&(this[D][e]=!1),rt(this,e,h(1,t))};return u&&nt&&rt($,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return H(this).tag})),j(V,"withoutSetter",(function(t){return ot(I(t),t)})),L.f=at,O.f=ct,E.f=lt,S.f=_.f=st,w.f=ft,q.f=function(t){return ot(R(t),t)},u&&(W(V.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),c||j($,"propertyIsEnumerable",at,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:V}),F(x(tt),(function(t){M(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e=String(t);if(f(Q,e))return Q[e];var n=V(e);return Q[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,e){return void 0===e?b(t):ut(b(t),e)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(y(t))}}),B)&&r({target:"JSON",stat:!0,forced:!a||s((function(){var t=V();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(p(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,B.apply(null,o)}});V.prototype[G]||A(V.prototype,G,V.prototype.valueOf),C(V,"Symbol"),T[D]=!0},function(t,e,n){var r=n(8),o=n(7),i=n(5),c=n(59);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(25);t.exports=r("document","documentElement")},function(t,e,n){var r=n(10),o=n(32).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,e,n){"use strict";var r=n(9),o=n(8),i=n(1),c=n(3),u=n(4),a=n(7).f,l=n(46),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(f[e]=!0),e};l(d,s);var p=d.prototype=s.prototype;p.constructor=d;var v=p.toString,y="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;a(p,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=v.call(t);if(c(f,t))return"";var n=y?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},function(t,e,n){n(61)("iterator")},function(t,e,n){var r=n(9),o=n(87);r({target:"Array",stat:!0,forced:!n(91)((function(t){Array.from(t)}))},{from:o})},function(t,e,n){"use strict";var r=n(53),o=n(17),i=n(88),c=n(89),u=n(12),a=n(38),l=n(90);t.exports=function(t){var e,n,s,f,d,p,v=o(t),y="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,h=void 0!==m,b=l(v),x=0;if(h&&(m=r(m,g>2?arguments[2]:void 0,2)),null==b||y==Array&&c(b))for(n=new y(e=u(v.length));e>x;x++)p=h?m(v[x],x):v[x],a(n,x,p);else for(d=(f=b.call(v)).next,n=new y;!(s=d.call(f)).done;x++)p=h?i(f,m,[s.value,x],!0):s.value,a(n,x,p);return n.length=x,n}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(0),o=n(18),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(62),o=n(18),i=n(0)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(0),o=n(36),i=n(7),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,e,n){"use strict";var r=n(65).IteratorPrototype,o=n(36),i=n(15),c=n(37),u=n(18),a=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,l,!1,!0),u[l]=a,t}},function(t,e,n){var r=n(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(5),o=n(96);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(9),o=n(4),i=n(26),c=n(49),u=n(12),a=n(10),l=n(38),s=n(0),f=n(67),d=n(57),p=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),y=s("species"),g=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var n,r,s,f=a(this),d=u(f.length),p=c(t,d),v=c(void 0===e?d:e,d);if(i(f)&&("function"!=typeof(n=f.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[y])&&(n=void 0):n=void 0,n===Array||void 0===n))return g.call(f,p,v);for(r=new(void 0===n?Array:n)(m(v-p,0)),s=0;p<v;p++,s++)p in f&&l(r,s,f[p]);return r.length=s,r}})},function(t,e,n){var r=n(25);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(8),o=n(7).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,e,n){var r=n(39),o=n(11),i=n(101);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(39),o=n(62);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){"use strict";var r=n(2);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){"use strict";var r=n(11),o=n(5),i=n(2),c=n(70),u=RegExp.prototype,a=u.toString,l=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(l||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?c.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(71).charAt,o=n(21),i=n(64),c=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var r=n(106),o=n(107),i=n(5),c=n(19),u=n(108),a=n(109),l=n(12),s=n(110),f=n(27),d=n(2),p=[].push,v=Math.min,y=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);for(var u,a,l,s=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,y=new RegExp(t.source,d+"g");(u=f.call(y,r))&&!((a=y.lastIndex)>v&&(s.push(r.slice(v,u.index)),u.length>1&&u.index<r.length&&p.apply(s,u.slice(1)),l=u[0].length,v=a,s.length>=i));)y.lastIndex===u.index&&y.lastIndex++;return v===r.length?!l&&y.test("")||s.push(""):s.push(r.slice(v)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=c(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var c=n(r,t,this,o,r!==e);if(c.done)return c.value;var f=i(t),d=String(this),p=u(f,RegExp),g=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(y?"y":"g"),h=new p(y?f:"^(?:"+f.source+")",m),b=void 0===o?4294967295:o>>>0;if(0===b)return[];if(0===d.length)return null===s(h,d)?[d]:[];for(var x=0,S=0,_=[];S<d.length;){h.lastIndex=y?S:0;var w,E=s(h,y?d:d.slice(S));if(null===E||(w=v(l(h.lastIndex+(y?0:S)),d.length))===x)S=a(d,S,g);else{if(_.push(d.slice(x,S)),_.length===b)return _;for(var O=1;O<=E.length-1;O++)if(_.push(E[O]),_.length===b)return _;S=x=w}}return _.push(d.slice(x)),_}]}),!y)},function(t,e,n){"use strict";n(69);var r=n(11),o=n(2),i=n(0),c=n(27),u=n(6),a=i("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=i("replace"),d=!!/./[f]&&""===/./[f]("a","$0"),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=i(t),y=!o((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=y&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!y||!g||"replace"===t&&(!l||!s||d)||"split"===t&&!p){var m=/./[v],h=n(v,""[t],(function(t,e,n,r,o){return e.exec===c?y&&!o?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=h[0],x=h[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&u(RegExp.prototype[v],"sham",!0)}},function(t,e,n){var r=n(4),o=n(16),i=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){var r=n(5),o=n(54),i=n(0)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){"use strict";var r=n(71).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(16),o=n(27);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(1),o=n(58),i=n(63),c=n(6),u=n(0),a=u("iterator"),l=u("toStringTag"),s=i.values;for(var f in o){var d=r[f],p=d&&d.prototype;if(p){if(p[a]!==s)try{c(p,a,s)}catch(t){p[a]=s}if(p[l]||c(p,l,f),o[f])for(var v in i)if(p[v]!==i[v])try{c(p,v,i[v])}catch(t){p[v]=i[v]}}}},function(t,e,n){"use strict";var r=n(9),o=n(2),i=n(26),c=n(4),u=n(17),a=n(12),l=n(38),s=n(55),f=n(67),d=n(0),p=n(68),v=d("isConcatSpreadable"),y=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=f("concat"),m=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!y||!g},{concat:function(t){var e,n,r,o,i,c=u(this),f=s(c,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?c:arguments[e],m(i)){if(d+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,d++)n in i&&l(f,d,i[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,d++,i)}return f.length=d,f}})},,,function(t,e,n){"use strict";n.r(e);n(13),n(14),n(116);var r=n(72),o=n(73);Object(o.a)(),Object(r.a)(),document.querySelectorAll(".grid_clickable .grid__title").forEach((function(t){var e=t.parentElement.previousElementSibling.cloneNode(!0);e.classList.add("grid_low-res"),t.after(e),t.setAttribute("title","Скрыть/показать"),t.addEventListener("click",(function(){t.classList.toggle("grid__title_opened"),t.nextElementSibling.classList.toggle("element-enabled"),t.nextElementSibling.nextElementSibling.classList.toggle("element-grid-enabled")}))})),document.querySelectorAll(".grid__help-title").forEach((function(t){t.setAttribute("title","Скрыть/показать"),t.addEventListener("click",(function(){t.classList.toggle("grid__title_opened"),t.nextElementSibling.classList.toggle("element-grid-enabled")}))}))},function(t,e,n){}]);