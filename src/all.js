/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(E){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.7/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function oa(a){if(null==a||Wa(a))return!1;if(J(a)||F(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return S(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function r(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(J(a)||oa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Zd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&H(n)?ia(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(H(a[m])||(a[m]=J(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Pb(a,ta.call(arguments,1),!1)}function $d(a){return Pb(a,ta.call(arguments,1),!0)}function aa(a){return parseInt(a,10)}function Rb(a,b){return R(Object.create(a),b)}function A(){}function Ya(a){return a}function da(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ka}function w(a){return"undefined"===typeof a}function x(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function F(a){return"string"===typeof a}function S(a){return"number"===typeof a}function ia(a){return"[object Date]"===ka.call(a)}function z(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ka.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function ae(a){return a&&S(a.length)&&
be.test(ka.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ce(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return M(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Z(a,b){function d(a,b){var d=b.$$hashKey,e;if(J(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=J(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ka.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if(ae(b)||"[object ArrayBuffer]"===ka.call(b))throw za("cpta");if(a===b)throw za("cpi");J(b)?b.length=0:r(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(J(a)){if(!J(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ia(a))return ia(b)?na(a.getTime(),b.getTime()):
!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||J(b)||ia(b)||Xa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!z(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ta.call(b,d))}function bb(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,
0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function de(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&E.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return S(b)||(b=b?2:null),JSON.stringify(a,de,b)}function xc(a){return F(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(ee,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,b,d){d=d?
-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function va(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?M(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(c){return M(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};r((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),
-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),x(e)&&(f=x(f)?zc(f):!0,sa.call(b,e)?J(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];r(a,function(a,c){J(a)?r(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function fe(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,F(d=a.getAttribute(d)))return d;return null}function ge(a,b){var d,c,e={};r(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==fe(d,"strict-di"),b(d,c?[c]:[],e))}function Bc(a,
b,d){H(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===E.document?"document":va(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);
return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;E&&e.test(E.name)&&(d.debugInfoEnabled=!0,E.name=E.name.replace(e,""));if(E&&!f.test(E.name))return c();E.name=E.name.replace(f,"");ea.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};z(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function he(){E.name="NG_ENABLE_DEBUG_INFO!"+E.name;E.location.reload()}function ie(a){a=ea.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Cc(a,
b){b=b||"_";return a.replace(je,function(a,c){return(c?b:"")+a.toLowerCase()})}function ke(){var a;if(!Dc){var b=rb();(pa=w(b)?E.jQuery:b?E[b]:void 0)&&pa.fn.on?(B=pa,R(pa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=pa.cleanData,pa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=pa._data(f,"events"))&&c.$destroy&&pa(f).triggerHandler("$destroy");a(b)}):B=U;ea.element=B;Dc=!0}}function sb(a,b,d){if(!a)throw za("areq",
b||"?",d||"required");return a}function Qa(a,b,d){d&&J(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ta.call(a,0,e))),
c.push(b);return c||a}function T(){return Object.create(null)}function le(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return V}}function b(a,d){return function(b,e){e&&
z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return V}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],s=a("$injector","invoke","push",e),V={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:s,run:function(a){p.push(a);return this}};h&&s(h);return V})}})}function ga(a,b){if(J(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function me(a){R(a,{bootstrap:Bc,copy:Z,extend:R,merge:$d,equals:na,element:B,forEach:r,injector:db,noop:A,bind:bb,toJson:cb,fromJson:xc,identity:Ya,isUndefined:w,
isDefined:x,isString:F,isFunction:z,isObject:H,isNumber:S,isElement:Qb,isArray:J,version:ne,isDate:ia,lowercase:M,uppercase:ub,callbacks:{counter:0},getTestability:ie,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:he});Ub=le(E);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:oe});a.provider("$compile",Fc).directive({a:pe,input:Gc,textarea:Gc,form:qe,script:re,select:se,style:te,option:ue,ngBind:ve,ngBindHtml:we,ngBindTemplate:xe,ngClass:ye,ngClassEven:ze,ngClassOdd:Ae,ngCloak:Be,ngController:Ce,
ngForm:De,ngHide:Ee,ngIf:Fe,ngInclude:Ge,ngInit:He,ngNonBindable:Ie,ngPluralize:Je,ngRepeat:Ke,ngShow:Le,ngStyle:Me,ngSwitch:Ne,ngSwitchWhen:Oe,ngSwitchDefault:Pe,ngOptions:Qe,ngTransclude:Re,ngModel:Se,ngList:Te,ngChange:Ue,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ve,ngModelOptions:We}).directive({ngInclude:Xe}).directive(vb).directive(Lc);a.provider({$anchorScroll:Ye,$animate:Ze,$animateCss:$e,$$animateJs:af,$$animateQueue:bf,
$$AnimateRunner:cf,$$animateAsyncRun:df,$browser:ef,$cacheFactory:ff,$controller:gf,$document:hf,$exceptionHandler:jf,$filter:Mc,$$forceReflow:kf,$interpolate:lf,$interval:mf,$http:nf,$httpParamSerializer:of,$httpParamSerializerJQLike:pf,$httpBackend:qf,$xhrFactory:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function eb(a){return a.replace(Kf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function U(a){if(a instanceof U)return a;var b;F(a)&&(a=W(a),b=!0);if(!(this instanceof U)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new U(a)}if(b){b=E.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Rc(a,
b,d,c){if(x(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];x(d)&&$a(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};r(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Pf,d=gb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=x(d),e=!c&&b&&!H(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];R(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&r(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=J(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(x(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||E;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[ua(a)]&&d}function Rf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Sf;1<g&&(f=ga(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return R(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Zd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}r(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(H(b))r(b,uc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||J(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=I.invoke(b,this);if(w(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(w(a)||J(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):J(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw J(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);J(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=J(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,da(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;s[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=I.invoke(d,c);return I.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),s={},V=h(s,function(a,b){var c=p.get(a+"Provider",b);return I.invoke(c.$get,c,void 0,a)}),I=V;n.$injectorProvider={$get:da(V)};var q=g(a),I=V.get("$injector");I.strictDi=b;r(q,function(a){a&&I.invoke(a)});return I}function Ye(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):S(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;J(a)&&(a=a.join(" "));J(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){F(a)&&(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return H(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(V--,0===V)for(;I.length;)try{I.pop()()}catch(b){d.error(b)}}}function f(){y=null;g();h()}function g(){q=P();
q=w(q)?null:q;na(q,D)&&(q=D);D=q}function h(){if(v!==k.url()||K!==q)v=k.url(),K=q,r(L,function(a){a(k.url(),q)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,s={};k.isMock=!1;var V=0,I=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){V++};k.notifyWhenNoOutstandingRequests=function(a){0===V?a():I.push(a)};var q,K,v=l.href,u=b.find("base"),y=null,P=c.history?function(){try{return m.state}catch(a){}}:A;g();K=q;k.url=function(b,d,e){w(e)&&(e=null);l!==
a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=K===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;K=e;!c.history||h&&f?(h||(y=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),K=q);y&&(y=b);return k}return y||l.href.replace(/%27/g,"'")};k.state=function(){return q};var L=[],C=!1,D=null;k.onUrlChange=function(b){if(!C){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",
f);C=!0}L.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=u.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;V++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};k.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(A),!0):!1}}function ef(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,d)}]}function ff(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;m=T();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Fc(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();r(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==M(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!J(b)&&H(b)&&r(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=ce("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=T();this.directive=function I(b,d){Ra(b,"directive");F(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);z(h)?h={compile:da(h)}:
!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):r(b,uc(I));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||J(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return x(a)?(p=a,this):p};var s=10;this.onChangesTtl=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,y,P,L,C,D){function G(){try{if(!--oa)throw Z=void 0,fa("infchng",s);P.$apply(function(){for(var a=
[],b=0,c=Z.length;b<c;++b)try{Z[b]()}catch(d){a.push(d)}Z=void 0;if(a.length)throw a;})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof B||(a=B(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&Pc(k,a[g]=E.document.createElement("span"))}var l=t(a,b,a,c,d,e);ba.$$addScopeClass(a);var n=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);n||(n=(d=d&&d[0])?"foreignobject"!==ua(d)&&ka.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==n?B(ca(n,B("<div>").append(a).html())):
c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function t(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,n,m,v,q;if(p)for(q=Array(c.length),n=0;n<h.length;n+=3)f=h[n],q[f]=c[f];else q=c;n=0;for(m=h.length;n<m;)k=q[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(B(k),l)):l=a,v=c.transcludeOnThisElement?wa(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?wa(a,b):null,c(f,l,k,d,v)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,n,m,p,v=0;v<a.length;v++){k=new Aa;l=$b(a[v],[],k,0===v?d:void 0,e);(f=l.length?Ta(l,a[v],k,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(k.$$element);k=f&&f.terminal||!(n=a[v].childNodes)||!n.length?null:t(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(v,f,k),m=!0,p=p||f;f=null}return m?g:null}function wa(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?wa(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,xa(ua(a)),"E",d,e);for(var l,n,m,p=a.attributes,v=0,q=p&&p.length;v<q;v++){var s=!1,L=!1;l=p[v];k=l.name;n=W(l.value);l=xa(k);if(m=ya.test(l))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&S(l[1])&&(s=k,L=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));l=xa(k.toLowerCase());f[l]=k;if(m||!c.hasOwnProperty(l))c[l]=n,Uc(a,l)&&(c[l]=!0);ia(a,b,n,l,m);Da(b,l,"A",d,e,s,L)}a=a.className;H(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;k=h.exec(a);)l=xa(k[2]),Da(b,l,"C",d,e)&&(c[l]=W(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);aa(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=
xa(k[1]),Da(b,l,"M",d,e)&&(c[l]=W(k[2]))}catch(C){}}b.sort(Y);return b}function Zc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function O(a,b,c){return function(d,e,f,g,h){e=Zc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,
arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function n(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=u.require;a.directiveName=G;if(s===u||u.$$isolateScope)a=ga(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=u.require;b.directiveName=G;if(s===u||u.$$isolateScope)b=ga(b,{isolateScope:!0});k.push(b)}}function m(a,e,f,g,l){function n(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);y&&(e=N);c||(c=y?G.parent():G);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,t);if(w(f))throw fa("noslot",d,va(G));
}else return l(a,b,e,c,t)}var p,C,u,D,I,N,Q,G;b===f?(g=d,G=d.$$element):(G=B(f),g=new Aa(G,d));I=e;s?D=e.$new(!0):v&&(I=e.$parent);l&&(Q=n,Q.$$boundTransclude=l,Q.isSlotFilled=function(a){return!!l.$$slots[a]});q&&(N=ag(G,g,Q,q,D,e,s));s&&(ba.$$addScopeInfo(G,D,!0,!(L&&(L===s||L===s.$$originalDirective))),ba.$$addScopeClass(G,!0),D.$$isolateBindings=s.$$isolateBindings,C=ha(e,g,D,D.$$isolateBindings,s),C.removeWatches&&D.$on("$destroy",C.removeWatches));for(p in N){C=q[p];u=N[p];var Zb=C.$$bindings.bindToController;
u.bindingInfo=u.identifier&&Zb?ha(I,g,u.instance,Zb,C):{};var P=u();P!==u.instance&&(u.instance=P,G.data("$"+C.name+"Controller",P),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=ha(I,g,u.instance,Zb,C))}r(q,function(a,b){var c=a.require;a.bindToController&&!J(c)&&H(c)&&R(N[b].instance,ib(b,c,G,N))});r(N,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$onDestroy)&&
I.$on("$destroy",function(){b.$onDestroy()})});p=0;for(C=h.length;p<C;p++)u=h[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);var t=e;s&&(s.template||null===s.templateUrl)&&(t=D);a&&a(t,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);r(N,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,v=l.newScopeDirective,q=l.controllerDirectives,s=l.newIsolateScopeDirective,
L=l.templateDirective,C=l.nonTlbTranscludeDirective,D=!1,I=!1,y=l.hasElementTranscludeDirective,N=d.$$element=B(b),u,G,Q,P=e,t,Ca=!1,wa=!1,x,A=0,E=a.length;A<E;A++){u=a[A];var F=u.$$start,Ta=u.$$end;F&&(N=Zc(b,F,Ta));Q=void 0;if(p>u.priority)break;if(x=u.scope)u.templateUrl||(H(x)?(X("new/isolated scope",s||v,u,N),s=u):X("new/isolated scope",s,u,N)),v=v||u;G=u.name;if(!Ca&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(x=A+1;Ca=a[x++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&
(Ca.templateUrl||Ca.template)){wa=!0;break}Ca=!0}!u.templateUrl&&u.controller&&(x=u.controller,q=q||T(),X("'"+G+"' controller",q[G],u,N),q[G]=u);if(x=u.transclude)if(D=!0,u.$$tlb||(X("transclusion",C,u,N),C=u),"element"==x)y=!0,p=u.priority,Q=N,N=d.$$element=B(ba.$$createComment(G,d[G])),b=N[0],da(f,ta.call(Q,0),b),Q[0].$$parentNode=Q[0].parentNode,P=ac(wa,Q,e,p,g&&g.name,{nonTlbTranscludeDirective:C});else{var M=T();Q=B(Xb(b)).contents();if(H(x)){Q=[];var S=T(),Da=T();r(x,function(a,b){var c="?"===
a.charAt(0);a=c?a.substring(1):a;S[a]=b;M[b]=null;Da[b]=c});r(N.contents(),function(a){var b=S[xa(ua(a))];b?(Da[b]=!0,M[b]=M[b]||[],M[b].push(a)):Q.push(a)});r(Da,function(a,b){if(!a)throw fa("reqslot",b);});for(var Y in M)M[Y]&&(M[Y]=ac(wa,M[Y],e))}N.empty();P=ac(wa,Q,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});P.$$slots=M}if(u.template)if(I=!0,X("template",L,u,N),L=u,x=z(u.template)?u.template(N,d):u.template,x=ra(x),u.replace){g=u;Q=Vb.test(x)?$c(ca(u.templateNamespace,W(x))):
[];b=Q[0];if(1!=Q.length||1!==b.nodeType)throw fa("tplrt",G,"");da(f,N,b);E={$attr:{}};x=$b(b,[],E);var aa=a.splice(A+1,a.length-(A+1));(s||v)&&ad(x,s,v);a=a.concat(x).concat(aa);U(d,E);E=a.length}else N.html(x);if(u.templateUrl)I=!0,X("template",L,u,N),L=u,u.replace&&(g=u),m=$(a.splice(A,a.length-A),N,d,f,D&&P,h,k,{controllerDirectives:q,newScopeDirective:v!==u&&v,newIsolateScopeDirective:s,templateDirective:L,nonTlbTranscludeDirective:C}),E=a.length;else if(u.compile)try{t=u.compile(N,d,P);var Z=
u.$$originalDirective||u;z(t)?n(null,bb(Z,t),F,Ta):t&&n(bb(Z,t.pre),bb(Z,t.post),F,Ta)}catch(ea){c(ea,va(N))}u.terminal&&(m.terminal=!0,p=Math.max(p,u.priority))}m.scope=v&&!0===v.scope;m.transcludeOnThisElement=D;m.templateOnThisElement=I;m.transclude=P;l.hasElementTranscludeDirective=y;return m}function ib(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):
c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(J(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else H(b)&&(e={},r(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],n={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=l.controller;"@"==m&&(m=b[l.name]);n=y(m,n,!0,l.controllerAs);h[l.name]=n;a.data("$"+l.name+"Controller",n.instance)}return h}function ad(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],
{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,n){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var m;e=a.get(e+"Directive");for(var p=0,v=e.length;p<v;p++)try{if(m=e[p],(w(h)||h>m.priority)&&-1!=m.restrict.indexOf(g)){l&&(m=Rb(m,{$$start:l,$$end:n}));if(!m.$$bindings){var q=m,s=m,L=m.name,u={isolateScope:null,bindToController:null};H(s.scope)&&(!0===s.bindToController?(u.bindToController=d(s.scope,L,!0),u.isolateScope={}):u.isolateScope=d(s.scope,L,!1));H(s.bindToController)&&(u.bindToController=
d(s.bindToController,L,!0));if(H(u.bindToController)){var C=s.controller,D=s.controllerAs;if(!C)throw fa("noctrl",L);if(!Xc(C,D))throw fa("noident",L);}var N=q.$$bindings=u;H(N.isolateScope)&&(m.$$isolateBindings=N.isolateScope)}b.push(m);k=m}}catch(G){c(G)}}return k}function S(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function U(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===
e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function $(a,b,c,d,f,g,h,k){var l=[],n,m,p=b[0],s=a.shift(),q=Rb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),L=z(s.templateUrl)?s.templateUrl(b,c):s.templateUrl,u=s.templateNamespace;b.empty();e(L).then(function(e){var v,C;e=ra(e);if(s.replace){e=Vb.test(e)?$c(ca(u,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw fa("tplrt",
s.name,L);e={$attr:{}};da(d,b,v);var D=$b(v,[],e);H(s.scope)&&ad(D,!0);a=D.concat(a);U(c,e)}else v=p,b.html(e);a.unshift(q);n=Ta(a,v,c,f,b,s,g,h,k);r(d,function(a,c){a==v&&(d[c]=b[0])});for(m=t(b[0].childNodes,f);l.length;){e=l.shift();C=l.shift();var I=l.shift(),G=l.shift(),D=b[0];if(!e.$$destroyed){if(C!==p){var y=C.className;k.hasElementTranscludeDirective&&s.replace||(D=Xb(v));da(I,B(C),D);N(B(D),y)}C=n.transcludeOnThisElement?wa(e,n.transclude,G):G;n(m,e,D,d,C)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(n.transcludeOnThisElement&&(a=wa(b,n.transclude,e)),n(m,b,c,d,a)))}}function Y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,va(d));}function aa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ca(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=E.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ea(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function ia(a,
c,d,e,f){var g=ea(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ua(a))throw fa("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=T());if(m.test(e))throw fa("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function da(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=E.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ga(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ja(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}function ha(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Z||(a.$$postDigest(G),Z=[]),m||(m={},Z.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,p=e.optional,v,s,L,C;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(F(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;v=c[m];F(v)?d[h]=
b(v)(a):Ea(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;s=n(c[m]);C=s.literal?na:function(a,b){return a===b||a!==a&&b!==b};L=s.assign||function(){v=d[h]=s(a);throw fa("nonassign",c[m],m,f.name);};v=d[h]=s(a);p=function(b){C(b,d[h])||(C(b,v)?L(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,s.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
s=n(c[m]);var D=d[h]=s(a);l[h]=new Fb(bc,d[h]);p=a.$watch(s,function(a,b){if(b===a){if(b===D)return;b=D}g(h,a,b);d[h]=a},s.literal);k.push(p);break;case "&":s=c.hasOwnProperty(m)?n(c[m]):A;if(s===A&&p)break;d[h]=function(b){return s(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=E.document.createElement("div"),oa=s,Z;Aa.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=cd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=ua(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===
f&&"srcset"===a&&x(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var n=2*l,f=f+D(W(g[n]),!0),f=f+(" "+W(g[n+1]));g=W(g[2*l]).split(/\s/);f+=D(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);P.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},ya=/^ngAttr[A-Z]/,za=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];J(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;ba.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
A;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;ba.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:A;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return E.document.createComment(c)};return ba}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function xa(a){return eb(a.replace(Yc,""))}function bd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&F(b))return b;if(F(a)){var d=dd.exec(a);if(d)return d[3]}}function gf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");H(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!H(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(dd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(J(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),R(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function hf(){this.$get=["$window",function(a){return B(a.document)}]}function jf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return H(a)?ia(a)?a.toISOString():cb(a):a}function of(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||w(a)||(J(a)?r(a,function(a){b.push(ja(c)+"="+ja(cc(a)))}):b.push(ja(c)+"="+ja(cc(a))))});return b.join("&")}}}function pf(){this.$get=
function(){return function(a){function b(a,e,f){null===a||w(a)||(J(a)?r(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!ia(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(F(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ed))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function fd(a){var b=T(),d;F(a)?r(a.split("\n"),function(a){d=
a.indexOf(":");var e=M(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&r(a,function(a,d){var f=M(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function gd(a){var b;return function(d){b||(b=fd(a));return d?(d=b[M(d)],void 0===d&&(d=null),d):b}}function hd(a,b,d,c){if(z(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function nf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return H(a)&&"[object File]"!==ka.call(a)&&"[object Blob]"!==
ka.call(a)&&"[object FormData]"!==ka.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ga(ec),put:ga(ec),patch:ga(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=R({},a);b.data=hd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};r(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!H(b))throw O("$http")("badreq",b);if(!F(b.url))throw O("$http")("badreq",b.url);var f=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[M(b.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,ga(b))}(b);f.method=ub(f.method);f.paramSerializer=F(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=hd(b.data,gd(d),void 0,b.transformRequest);w(e)&&r(d,function(a,b){"content-type"===M(b)&&delete d[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(r(V,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=id("success"),h.error=id("error"));return h}function n(c,d){function g(a){if(a){var c=
{};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}D&&(200<=a&&300>a?D.put(Q,[a,c,fd(d),e]):D.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:gd(d),config:c,statusText:e})}function y(a){n(a.data,a.status,ga(a.headers()),a.statusText)}function V(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var L=k.defer(),C=L.promise,D,G,Aa=c.headers,Q=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);C.then(V,V);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(D=H(c.cache)?c.cache:H(a.cache)?a.cache:s);D&&(G=D.get(Q),x(G)?G&&z(G.then)?G.then(y,y):J(G)?n(G[1],G[0],ga(G[2]),G[3]):n(G,200,{},"OK"):D.put(Q,C));w(G)&&((G=jd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=G),e(c.method,Q,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return C}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var V=[];r(c,function(a){V.unshift(F(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){r(arguments,function(a){m[a]=function(b,c){return m(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){m[a]=function(b,
c,d){return m(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function rf(){this.$get=function(){return function(){return new E.XMLHttpRequest}}}function qf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b.angular.callbacks,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,s,V,I){function q(){u&&u();y&&y.abort()}function K(b,c,e,f,g){x(L)&&d.cancel(L);u=y=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==M(e)){var v="_"+(c.counter++).toString(36);
c[v]=function(a){c[v].data=a;c[v].called=!0};var u=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){K(l,a,c[v].data,"",b);c[v]=A})}else{var y=b(e,h);y.open(e,h,!0);r(m,function(a,b){x(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"==qa(h).protocol?404:0);K(l,c,b,y.getAllResponseHeaders(),a)};e=function(){K(l,-1,null,null,"")};y.onerror=e;y.onabort=e;r(V,function(a,
b){y.addEventListener(b,a)});r(I,function(a,b){y.upload.addEventListener(b,a)});p&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(P){if("json"!==s)throw P;}y.send(w(k)?null:k)}if(0<n)var L=d(q,n);else n&&z(n.then)&&n.then(q)}}function lf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function r(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),v=da(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}p=!!p;var u,y,P=0,L=[],C=[];v=f.length;for(var D=[],G=[];P<
v;)if(-1!=(u=f.indexOf(a,P))&&-1!=(y=f.indexOf(b,u+l)))P!==u&&D.push(g(f.substring(P,u))),P=f.substring(u+l,y),L.push(P),C.push(d(P,r)),P=y+m,G.push(D.length),D.push("");else{P!==v&&D.push(g(f.substring(P)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!k||L.length){var Aa=function(a){for(var b=0,c=L.length;b<c;b++){if(p&&w(a[b]))return;D[G[b]]=a[b]}return D.join("")};return R(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=C[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:L,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(C,function(d,e){var f=Aa(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function mf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,s):f(q)}var p=4<arguments.length,s=p?ta.call(arguments,4):
[],r=b.setInterval,I=b.clearInterval,q=0,K=x(m)&&!m,v=(K?c:d).defer(),u=v.promise;l=x(l)?l:0;u.$$intervalId=r(function(){K?e.defer(n):a.$evalAsync(n);v.notify(q++);0<l&&q>=l&&(v.resolve(q),I(u.$$intervalId),delete g[u.$$intervalId]);K||a.$apply()},k);g[u.$$intervalId]=v;return u}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function kd(a,b){var d=qa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=aa(d.port)||hg[d.protocol]||null}function ld(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=qa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";kd(a,this);this.$$parse=function(a){var d=la(b,a);if(!F(d))throw Gb("ipthprfx",a,b);ld(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;x(f=la(a,c))?(g=f,g=x(f=la(d,f))?b+(la("/",f)||f):a+g):x(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){kd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=la(d,e),w(f)&&(f=e));ld(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function md(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function nd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):H(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:md}else p=Ja(n),m=hc;var s=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,s,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var r=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
qa(h.animVal).href);r.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var I=!0;c.onUrlChange(function(a,b){w(la(s,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(I=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,n=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(I||n)I=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(n&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return x(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ca("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a.window===a)throw ca("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ca("isecdom",b);if(a===Object)throw ca("isecobj",b);}return a}function od(a,
b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a===jg||a===kg||a===lg)throw ca("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ca("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function pd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function $(a,b){var d,c;switch(a.type){case t.Program:d=!0;r(a.body,function(a){$(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case t.Literal:a.constant=!0;a.toWatch=[];break;case t.UnaryExpression:$(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case t.BinaryExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case t.LogicalExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case t.ConditionalExpression:$(a.test,
b);$(a.alternate,b);$(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case t.Identifier:a.constant=!1;a.toWatch=[a];break;case t.MemberExpression:$(a.object,b);a.computed&&$(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case t.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];r(a.arguments,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case t.AssignmentExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case t.ArrayExpression:d=!0;c=[];r(a.elements,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case t.ObjectExpression:d=!0;c=[];r(a.properties,function(a){$(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case t.ThisExpression:a.constant=!1;a.toWatch=[];break;case t.LocalsExpression:a.constant=!1,a.toWatch=[]}}function qd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function rd(a){return a.type===t.Identifier||a.type===t.MemberExpression}function sd(a){if(1===a.body.length&&rd(a.body[0].expression))return{type:t.AssignmentExpression,left:a.body[0].expression,right:{type:t.NGValueParameter},operator:"="}}function td(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===t.Literal||a.body[0].expression.type===t.ArrayExpression||a.body[0].expression.type===t.ObjectExpression)}function ud(a,b){this.astBuilder=a;this.$filter=b}function vd(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=T(),b=T(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,C;e=e||K;switch(typeof c){case "string":C=c=c.trim();var D=e?b:a;g=D[C];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?q:I;var G=new jc(g);g=(new kc(G,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));D[C]=g}return s(g,d);case "function":return s(c,d);default:return s(A,d)}}function h(a){function b(c,d,e,f){var g=
K;K=!0;try{return a(c,d,e,f)}finally{K=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],n=[],m=0,p=f.length;m<p;m++)l[m]=k,n[m]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))n[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,n));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;r(a,function(a){x(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function s(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var V=Fa().noUnsafeEval,I={csp:V,expensiveChecks:!1,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},q={csp:V,expensiveChecks:!0,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},K=!1;g.$$runningExpensiveChecks=function(){return K};return g}]}function wf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return wd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return wd(function(b){a.defer(b)},b)}]}function wd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);R(d.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});R(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(H(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return h(e,!1)}return d&&z(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=J(a)?[]:{};r(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(K.$$phase)throw d("inprog",K.$$phase);K.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function I(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=h.defer(function(){K.$apply(I)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:t,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(H(e))if(oa(e))for(f!==n&&(f=n,q=f.length=0,l++),a=e.length,q!==a&&(l++,f.length=q=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},q=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(q++,f[b]=g,l++));if(q>a)for(b in l++,f)sa.call(e,b)||(q--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,q=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(H(e))if(oa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,s,q,r=b,y,x=[],w,A;n("$digest");h.$$checkUrlChange();this===K&&null!==e&&(h.defer.cancel(e),I());c=null;do{q=!1;y=this;for(p=0;p<v.length;p++){try{A=v[p],A.scope.$eval(A.expression,A.locals)}catch(E){f(E)}c=null}v.length=0;a:do{if(p=y.$$watchers)for(s=p.length;s--;)try{if(a=p[s])if(m=a.get,(g=m(y))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?Z(g,null):g,l=a.fn,l(g,k===t?g:k,y),5>r&&(w=4-r,x[w]||(x[w]=[]),x[w].push({msg:z(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(B){f(B)}if(!(p=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(p=y.$$nextSibling);)y=y.$parent}while(y=p);if((q||v.length)&&!r--)throw K.$$phase=null,d("infdig",b,x);}while(q||v.length);for(K.$$phase=null;P<u.length;)try{u[P++]()}catch(F){f(F)}u.length=P=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
K&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=
function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){K.$$phase||v.length||h.defer(function(){v.length&&K.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{K.$$phase=null}}catch(b){f(b)}finally{try{K.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);
a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var K=new m,v=K.$$asyncQueue=[],u=K.$$postDigestQueue=[],y=K.$$applyAsyncQueue=[],P=0;return K}]}function oe(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=qa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=xd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ya("imatcher");}function yd(a){var b=[];x(a)&&r(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=yd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=yd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?jd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||w(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
qa(e.toString()),n,p,s=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){s=!0;break}if(s)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){s=!1;break}if(s)return e;throw ya("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ya("iequirks");var c=ga(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(ma,function(a,b){var d=M(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=aa((/android (\d+)/.exec(M((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=F(l.webkitTransition),n=F(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!F(g)||w(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;J(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,R({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];r(a,function(a){var c=ea.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+xd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=ta.call(arguments,3),n=x(l)&&!l,p=(n?c:d).defer(),s=p.promise,r;r=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[s.$$timeoutId]}n||a.$apply()},k);s.$$timeoutId=r;g[r]=p;return s}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function qa(a){Ba&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function jd(a){a=F(a)?qa(a):a;return a.protocol===zd.protocol&&a.host===zd.host}function Ff(){this.$get=da(E)}function Ad(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Jf(){this.$get=Ad}function Mc(a){function b(d,c){if(H(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Bd);b("date",Cd);
b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Dd);b("orderBy",Ed);b("uppercase",ug)}function qg(){return function(a,b,d){if(!oa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=vg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=na:z(b)||(b=function(a,b){if(w(a))return!1;if(null===
a||null===b)return a===b;if(H(b)||H(a)&&!vc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(J(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!w(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Fd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Dd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Fd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Gd))&&(a=a.replace(Gd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Hd&&(d=d.splice(0,Hd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Fd(a,b,d,c,e){if(!F(a)&&!S(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function X(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Id(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Jd(a){return function(b){var d=Id(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Cd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=yg.test(c)?aa(c):b(c));S(c)&&(c=new Date(c));if(!ia(c)||!isFinite(c.getTime()))return c;for(;d;)(l=zg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));r(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function sg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):aa(b);if(isNaN(b))return a;S(a)&&(a=a.toString());if(!oa(a))return a;d=!d||isNaN(d)?0:aa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return F(a)?a.slice(b,d):ta.call(a,b,d)}function Ed(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(z(b))d=b;else if(F(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(H(k)&&(k=a.index),H(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!oa(a))throw O("orderBy")("notarray",a);J(f)||(f=[f]);0===f.length&&
(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*
l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ma(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return da(a)}function Kd(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};
f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Lb};Ld({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?
-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);c.addClass(a,Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");
f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=M(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",
l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Md[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ia(d))return d;if(F(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,
f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return x(a)&&!ia(a)?d(a)||void 0:a}Nd(e,f,g,h);lb(e,f,g,h,k,l);var s=h&&h.$options&&h.$options.timezone,r;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),s&&(a=Sb(a,s)),a});h.$formatters.push(function(a){if(a&&!ia(a))throw nb("datefmt",a);if(n(a))return(r=a)&&
s&&(r=Sb(r,s,!0)),m("date")(a,c,s);r=null;return""});if(x(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!n(a)||w(t)||d(a)>=t};g.$observe("min",function(a){t=p(a);h.$validate()})}if(x(g.max)||g.ngMax){var q;h.$validators.max=function(a){return!n(a)||w(q)||d(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function Nd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Od(a,
b,d,c,e){if(x(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return J(a)?(r(a,function(a){b=b.concat(e(a))}),b):F(a)?a.split(" "):H(a)?(r(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}
function l(a,b){var c=g.data("$classCounts")||T(),d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=J(a)?a.map(function(a){return ga(a)}):ga(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});
"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Ld(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Pd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Pd]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){w(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Qd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Rd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Rd,!1),c.$valid=Qd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Qd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=
/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,M=function(a){return F(a)?a.toLowerCase():a},ub=function(a){return F(a)?a.toUpperCase():a},Ba,B,pa,ta=[].slice,bg=[].splice,Dg=[].push,ka=Object.prototype.toString,wc=Object.getPrototypeOf,za=O("ng"),ea=E.angular||(E.angular={}),Ub,pb=0;Ba=E.document.documentMode;A.$inject=[];Ya.$inject=[];var J=Array.isArray,be=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return F(a)?a.trim():a},xd=
function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var a=E.document.querySelector("[ng-csp]")||E.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},
rb=function(){if(x(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=E.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},ee=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],je=/[A-Z]/g,Dc=!1,Na=3,ne={full:"1.5.7",major:1,minor:5,dot:7,codeName:"hexagonal-circumvolution"};U.expando="ng339";var gb=U.cache={},Pf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",
mouseenter:"mouseover"},Wb=O("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;
ha.th=ha.td;var Uf=E.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=U.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===E.document.readyState?E.setTimeout(b):(this.on("DOMContentLoaded",b),U(E).on("load",b))},toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Eb[M(a)]=a});var Vc={};r("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var cd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Yb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){U[b]=a});r({data:Yb,inheritedData:Cb,scope:function(a){return B.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope",
"$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=M(b),Eb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?
c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;
wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&w(2==a.length&&a!==zb&&a!==Sc?b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:fb,on:function(a,b,d,c){if(x(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=
Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);r(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];
r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new U(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,B(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var e=
0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;w(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=
!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=R(c,b)),b=ga(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),x(f)&&(f=B(f))):
Qc(f,a(this[g],b,c,e));return x(f)?f:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Sa.prototype={put:function(a,b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Sa}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=
function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);b=Wc(a);r(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else J(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Sd=O("$animate"),af=function(){this.$get=A},bf=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):J(b)?
b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,
k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ze=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Sd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Sd("nongcls",
"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);
f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?
R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],df=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},cf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=
[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,
c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=
this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},$e=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}
var g=e||{};g.$$prepared||(g=Z(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=O("$compile"),bc=new function(){};Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=O("$controller"),dd=/^(\S+)(\s+as\s+([\w$]+))?$/,kf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;
return b.offsetWidth+1}}]},ed="application/json",ec={"Content-Type":ed+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=O("$http"),id=function(a){return function(){throw Gg("legacy",a);}},Ka=ea.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=O("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,
absUrl:Hb("$$absUrl"),url:function(a){if(w(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:nd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||S(a))a=a.toString(),this.$$search=Ac(a);else if(H(a))a=
Z(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:nd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([md,hc,gc],function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=w(b)?null:
b;return this}});var ca=O("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=
a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=
a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ca("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=
d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var t=function(a,b){this.lexer=a;this.options=b};t.Program="Program";t.ExpressionStatement="ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression="ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal=
"Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.LocalsExpression="LocalsExpression";t.NGValueParameter="NGValueParameter";t.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:t.Program,body:a}},expressionStatement:function(){return{type:t.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:t.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&
(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:t.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:t.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=",
"===","!==");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*",
"/","%");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:t.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Z(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?
a={type:t.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:t.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:t.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:t.MemberExpression,object:a,
property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:t.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:t.Identifier,name:a.text}},
constant:function(){return{type:t.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:t.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:t.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):
this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:t.ObjectExpression,properties:a}},throwError:function(a,b){throw ca("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));
},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=
this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:t.ThisExpression},$locals:{type:t.LocalsExpression}}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};$(c,d.$filter);var e="",f;this.stage="assign";if(f=sd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign",
"s,v,l");f=qd(c.body);d.stage="inputs";r(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
"ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,ra,od,ig,Ib,mg,pd,a);this.state=this.stage=void 0;e.literal=td(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case t.Program:r(a.body,
function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case t.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case t.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case t.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?
this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case t.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case t.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case t.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),
this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case t.MemberExpression:g=
d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,
a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case t.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=
k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);r(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case t.AssignmentExpression:h=this.nextId();g=
{};if(!rd(a.left))throw ca("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case t.ArrayExpression:l=[];r(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case t.ObjectExpression:l=
[];n=!1;r(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===t.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(r(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===t.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,
m));c(b||m);break;case t.ThisExpression:this.assign(b,"s");c("s");break;case t.LocalsExpression:this.assign(b,"l");c("l");break;case t.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));
return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?
a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),
";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,
b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(S(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
vd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;$(c,d.$filter);var e,f;if(e=sd(c))f=this.recurse(e);e=qd(c.body);var g;e&&(g=[],r(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];r(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;r(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=
td(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case t.Literal:return this.value(a.value,b);case t.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case t.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),
this.recurse(a.alternate),this.recurse(a.consequent),b);case t.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case t.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case t.CallExpression:return g=[],r(a.arguments,
function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);od(n.value,f.expression);p=[];for(var s=0;s<g.length;++s)p.push(ra(g[s](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?
{value:p}:p};case t.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case t.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case t.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),
computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===t.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case t.ThisExpression:return function(a){return b?{value:a}:a};case t.LocalsExpression:return function(a,c){return b?{value:c}:c};case t.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},
"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=pd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(x(h)?h:0)-(x(c)?c:0);return d?
{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:
c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,
b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||
Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new t(a,d);this.astCompiler=d.csp?new vd(this.ast,b):new ud(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,ya=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},
pg=O("$compile"),Y=E.document.createElement("a"),zd=qa(E.location.href);Ad.$inject=["$document"];Mc.$inject=["$provide"];var Hd=22,Gd=".",mc="0";Bd.$inject=["$locale"];Dd.$inject=["$locale"];var Ag={yyyy:X("FullYear",4,0,!1,!0),yy:X("FullYear",2,0,!0,!0),y:X("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),LLLL:kb("Month",!1,!0),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",
1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Jd(2),w:Jd(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Cd.$inject=["$locale"];
var tg=da(M),ug=da(ub);Ed.$inject=["$parse"];var pe=da({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ka.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=xa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,
e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(cd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=xa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ka.call(c.prop("href"))&&
(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};Kd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Td=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?
"EAC":"E",require:["form","^^?form"],controller:Kd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):A;g&&(s(a,n),e.$observe(g,
function(b){n.$name!==b&&(s(a,void 0),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);s(a,void 0);R(n,Lb)})}}}}}]},qe=Td(),De=Td(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Ud=/^(\d{4,})-(\d{2})-(\d{2})$/,Vd=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Wd=/^(\d{4,})-(\d\d)$/,Xd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Md=T();r(["date","datetime-local","month","time","week"],function(a){Md[a]=!0});var Yd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Ud,Nb(Ud,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Vd,Nb(Vd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Xd,Nb(Xd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(ia(a))return a;if(F(a)){rc.lastIndex=0;var d=rc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Id(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Wd,Nb(Wd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Nd(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName=
"number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!S(a))throw nb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g};d.$observe("min",function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));g=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(x(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h};d.$observe("max",
function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));h=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){w(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,
a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Od(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Od(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,
file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Yd[M(g.type)]||Yd.text)(e,f,g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ve=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ve=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);
return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=w(a)?"":a})}}}}],xe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],we=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=
b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Ue=da({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ye=qc("",!0),Ae=qc("Odd",0),ze=qc("Even",1),Be=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ce=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Lc={},Og={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=xa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Fe=["$animate","$compile",function(a,
b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Ge=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,
transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var s=0,r,t,q,w=function(){t&&(t.remove(),t=null);r&&(r.$destroy(),r=null);q&&(d.leave(q).then(function(){t=null}),t=q,q=null)};c.$watch(f,function(f){var m=function(){!x(h)||h&&!c.$eval(h)||b()},t=++s;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===s){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).then(m)});r=b;q=a;r.$emit("$includeContentLoaded",
f);c.$eval(g)}},function(){c.$$destroyed||t!==s||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],Xe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ka.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,E.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],He=Ma({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),Te=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!w(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(J(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Pd="ng-invalid",Va="ng-pristine",Mb="ng-dirty",Rd="ng-pending",nb=O("ngModel"),Pg=["$scope",
"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);
this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,s=n,t=null,I,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,va(c));};this.$render=A;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){q.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),
f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var K=0;Ld({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Va)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Mb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};
this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!S(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,b=q.$valid,c=q.$modelValue,d=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(e){d||b===e||(q.$modelValue=e?a:void 0,q.$modelValue!==c&&q.$$writeModelToScope())})}};
this.$$runValidators=function(a,b,c){function d(){var c=!0;r(q.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(r(q.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(q.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===K&&q.$setValidity(a,b)}function g(a){h===K&&c(a)}K++;var h=
K;(function(){var a=q.$$parserName||"parse";if(w(I))f(a,null);else return I||(r(q.$validators,function(a,b){f(b,null)}),r(q.$asyncValidators,function(a,b){f(b,null)})),f(a,I),I;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(t);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$updateEmptyClasses(a),q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=q.$$lastCommittedViewValue;
if(I=w(b)?void 0:!0)for(var c=0;c<q.$parsers.length;c++)if(b=q.$parsers[c](b),w(b)){I=!1;break}S(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=p(a));var d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=b;e&&(q.$modelValue=b,q.$modelValue!==d&&q.$$writeModelToScope());q.$$runValidators(b,q.$$lastCommittedViewValue,function(a){e||(q.$modelValue=a?b:void 0,q.$modelValue!==d&&q.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,q.$modelValue);r(q.$viewChangeListeners,
function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=q.$options;d&&x(d.debounce)&&(d=d.debounce,S(d)?c=d:S(d[b])?c=d[b]:S(d["default"])&&(c=d["default"]));g.cancel(t);c?t=g(function(){q.$commitViewValue()},c):h.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==q.$modelValue&&(q.$modelValue===
q.$modelValue||b===b)){q.$modelValue=q.$$rawModelValue=b;I=void 0;for(var c=q.$formatters,d=c.length,e=b;d--;)e=c[d](e);q.$viewValue!==e&&(q.$$updateEmptyClasses(e),q.$viewValue=q.$$lastCommittedViewValue=e,q.$render(),q.$$runValidators(b,e,A))}return b})}],Se=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||
g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,We=function(){return{restrict:"A",
controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Z(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ie=Ma({terminal:!0,priority:1E3}),Rg=O("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Qe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&oa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,va(b));var p=n[5]||n[7],r=n[6];a=/ as /.test(n[0])&&n[1];var t=n[9];b=d(n[2]?n[1]:p);var x=a&&d(a)||b,q=t&&d(t),w=t?function(a,b){return q(c,b)}:function(a){return Ga(a)},
v=function(a,b){return w(a,D(a,b))},u=d(n[2]||n[1]),y=d(n[3]||""),A=d(n[4]||""),z=d(n[8]),C={},D=r?function(a,b){C[r]=b;C[p]=a;return C}:function(a){C[p]=a;return C};return{trackBy:t,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=D(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=u(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=D(d[p],p),r=x(c,q),p=w(r,q),s=u(c,q),C=y(c,q),q=A(c,q),r=new e(p,r,s,C,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return t?ea.copy(a.viewValue):a.viewValue}}}}}var e=E.document.createElement("option"),f=E.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=
b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=y&&p.readValue();if(y)for(var b=y.items.length-1;0<=b;b--){var c=y.items[b];c.group?Db(c.element.parentNode):Db(c.element)}y=z.getOptions();var d={};v&&h.prepend(w);y.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),E.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=E,c=e.cloneNode(!1);b.appendChild(c);
m(a,c)});h[0].appendChild(E);s.$render();s.$isEmpty(a)||(b=p.readValue(),(z.trackBy||t?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=l[0],s=l[1],t=k.multiple,w;l=0;for(var q=h.children(),A=q.length;l<A;l++)if(""===q[l].value){w=q.eq(l);break}var v=!!w,u=B(e.cloneNode(!1));u.val("?");var y,z=c(k.ngOptions,h,d),E=b[0].createDocumentFragment();t?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){y.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
y.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];r(a,function(a){(a=y.selectValueMap[a])&&!a.disabled&&b.push(y.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(J(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=y.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(u.remove(),v||w.remove(),h[0].value=b.selectValue,b.element.selected=
!0),b.element.setAttribute("selected","selected")):null===a||v?(u.remove(),v||h.prepend(w),h.val(""),w.prop("selected",!0),w.attr("selected",!0)):(v||w.remove(),h.prepend(u),h.val("?"),u.prop("selected",!0),u.attr("selected",!0))},p.readValue=function(){var a=y.selectValueMap[h.val()];return a&&!a.disabled?(v||w.remove(),u.remove(),y.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(w.remove(),a(w)(d),w.removeClass("ng-scope")):
w=B(e.cloneNode(!1));h.empty();n();d.$watchCollection(z.getWatchables,n)}}}}],Je=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},t=b.startSymbol(),x=b.endSymbol(),q=t+l+"-"+n+x,z=ea.noop,v;r(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+M(c[2]),p[c]=g.attr(h.$attr[b]))});r(p,function(a,d){s[d]=b(a.replace(c,q))});f.$watch(l,
function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&S(v)&&isNaN(v)||(z(),e=s[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Ke=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,
terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],w=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",
p);var q,x,v,u,y={$id:Ga};s?q=a(s):(v=function(a,b){return Ga(b)},u=function(a){return a});return function(a,d,f,g,l){q&&(x=function(b,c,d){w&&(y[w]=b);y[t]=c;y.$index=d;return q(a,y)});var m=T();a.$watchCollection(n,function(f){var g,n,q=d[0],s,y=T(),z,A,E,C,D,B,F;p&&(a[p]=f);if(oa(f))D=f,n=x||v;else for(F in n=x||u,D=[],f)sa.call(f,F)&&"$"!==F.charAt(0)&&D.push(F);z=D.length;F=Array(z);for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],C=n(A,E,g),m[C])B=m[C],delete m[C],y[C]=B,F[g]=B;else{if(y[C])throw r(F,
function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,E);F[g]={id:C,scope:void 0,clone:void 0};y[C]=!0}for(s in m){B=m[s];C=tb(B.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;B.scope.$destroy()}for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],B=F[g],B.scope){s=q;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);B.clone[0]!=s&&b.move(tb(B.clone),null,q);q=B.clone[B.clone.length-1];e(B.scope,g,t,E,w,A,z)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
null,q);q=d;B.clone=a;y[B.id]=B;e(B.scope,g,t,E,w,A,z)});m=y})}}}}],Le=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Me=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,
d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ne=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var t=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(t)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Pe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Tg=O("ngTransclude"),Re=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Tg("orphan",va(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),re=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},
Vg=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Ug;d.unknownOption=B(E.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),
a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=
function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],se=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});
if(d.multiple){f.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);r(b.find("option"),function(a){a.selected=x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ga(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},ue=["$interpolate",
function(a){return{restrict:"E",priority:100,compile:function(b,d){if(x(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],te=da({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",
function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,va(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=
aa(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=aa(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};E.angular.bootstrap?E.console&&console.log("WARNING: Tried to load angular more than once."):(ke(),me(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+=
"";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(E.document).ready(function(){ge(E.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,C){'use strict';function Aa(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ba(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ca(a)&&(a=a.join(" "));ca(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=ca(a)?a:a&&O(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof G)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return G(da(a))}if(1===a.nodeType)return G(a)}function da(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
Q;a.domOperation=function(){a.$$domOperationFired=!0;b();b=Q};a.$$prepared=!0}return a}function ha(a,b){Ca(a,b);Da(a,b)}function Ca(a,b){b.from&&(a.css(b.from),b.from=null)}function Da(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==Q?d.domOperation:null;Ea(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){O(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function z(a){return a instanceof C.element?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=Z(d,Y(c.addClass,"-add")));c.removeClass&&(d=Z(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function ta(a,b){var c=b?"paused":"",d=$+"PlayState";la(a,[d,c]);return[d,c]}function la(a,b){a.style[b[0]]=
b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Fa(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var g=c.charAt(0);if("-"===g||"+"===g||0<=g)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ua(a){return 0===a||null!=a}function Ga(a,b){var c=S,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ha(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ia(a,b,c){s(c,function(c){a[c]=ea(a[c])?a[c]:b.style.getPropertyValue(c)})}var Q=C.noop,Ja=C.copy,Ea=C.extend,G=C.element,s=C.forEach,ca=C.isArray,O=C.isString,va=C.isObject,I=C.isUndefined,ea=C.isDefined,Ka=C.isFunction,wa=C.isElement,S,xa,$,ya;I(R.ontransitionend)&&
ea(R.onwebkittransitionend)?(S="WebkitTransition",xa="webkitTransitionEnd transitionend"):(S="transition",xa="transitionend");I(R.onanimationend)&&ea(R.onwebkitanimationend)?($="WebkitAnimation",ya="webkitAnimationEnd animationend"):($="animation",ya="animationend");var qa=$+"Delay",za=$+"Duration",ma=S+"Delay",La=S+"Duration",Ma=C.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:S+"Property",animationDuration:za,animationDelay:qa,animationIterationCount:$+"IterationCount"},
Va={transitionDuration:La,transitionDelay:ma,animationDuration:za,animationDelay:qa};C.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,n){var H,g;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){H&&a.leave(H);g&&(g.$destroy(),g=null);if(e||0===e)g=b.$new(),n(g,function(b){H=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;C.isString(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,
b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return I(a)&&I(b)||I(e)&&I(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope",
"$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,l,v,Wa,P,t,F,T){function J(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function y(a,b,c){var f=z(b),d=z(a),N=[];(a=h[c])&&s(a,function(a){x.call(a.node,f)?N.push(a.callback):"leave"===c&&x.call(a.node,d)&&N.push(a.callback)});return N}function r(a,b,c){var f=da(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function p(a,
h,w){function r(c,f,d,h){sa(function(){var c=y(T,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||ra.off(a)}):"close"!==d||a[0].parentNode||ra.off(a)});c.progress(f,d,h)}function k(b){var c=a,f=m;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);E(a,m);ha(a,m);m.domOperation();B.complete(!b)}var m=Ja(w),p,T;if(a=Oa(a))p=z(a),T=a.parent();var m=oa(m),B=new P,
sa=J();ca(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!O(m.addClass)&&(m.addClass=null);ca(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!O(m.removeClass)&&(m.removeClass=null);m.from&&!va(m.from)&&(m.from=null);m.to&&!va(m.to)&&(m.to=null);if(!p)return k(),B;w=[p.className,m.addClass,m.removeClass].join(" ");if(!Xa(w))return k(),B;var g=0<=["enter","move","leave"].indexOf(h),x=l[0].hidden,t=!f||x||N.get(p);w=!t&&A.get(p)||{};var F=!!w.state;t||F&&1==w.state||
(t=!M(a,T,h));if(t)return x&&r(B,h,"start"),k(),x&&r(B,h,"close"),B;g&&K(a);x={structural:g,element:a,event:h,addClass:m.addClass,removeClass:m.removeClass,close:k,options:m,runner:B};if(F){if(d("skip",a,x,w)){if(2===w.state)return k(),B;W(a,w,x);return w.runner}if(d("cancel",a,x,w))if(2===w.state)w.runner.end();else if(w.structural)w.close();else return W(a,w,x),w.runner;else if(d("join",a,x,w))if(2===w.state)W(a,x,{});else return Sa(a,g?h:null,m),h=x.event=w.event,m=W(a,w,x),w.runner}else W(a,x,
{});(F=x.structural)||(F="animate"===x.event&&0<Object.keys(x.options.to||{}).length||e(x));if(!F)return k(),ka(a),B;var v=(w.counter||0)+1;x.counter=v;L(a,1,x);c.$$postDigest(function(){var b=A.get(p),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==v||!f){c&&(E(a,m),ha(a,m));if(c||g&&b.event!==h)m.domOperation(),B.end();f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,L(a,2),b=Wa(a,h,b.options),B.setHost(b),r(B,h,"start",{}),b.done(function(b){k(!b);
(b=A.get(p))&&b.counter===v&&ka(z(a));r(B,h,"close",{})})});return B}function K(a){a=z(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=A.get(a);if(c)switch(b){case 2:c.runner.end();case 1:A.remove(a)}})}function ka(a){a=z(a);a.removeAttribute("data-ng-animate");A.remove(a)}function k(a,b){return z(a)===z(b)}function M(a,b,c){c=G(l[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,r,e=N.get(z(a));(a=G.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=z(b);b;){d||(d=k(b,g));if(1!==b.nodeType)break;a=A.get(b)||{};if(!h){var p=N.get(b);if(!0===p&&!1!==e){e=!0;break}else!1===p&&(e=!1);h=a.structural}if(I(r)||!0===r)a=G.data(b,"$$ngAnimateChildren"),ea(a)&&(r=a);if(h&&!1===r)break;f||(f=k(b,c));if(f&&d)break;if(!d&&(a=G.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&d&&f}function L(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=A.get(a))?Ea(b,c):c;A.put(a,c)}var A=new v,N=new v,
f=null,B=c.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(B(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h={},sa=a.classNameFilter(),Xa=sa?function(a){return sa.test(a)}:function(){return!0},E=V(F),x=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ra={on:function(a,b,c){var f=da(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});G(b).on("$destroy",function(){A.get(f)||ra.off(a,b,c)})},off:function(a,
b,c){if(1!==arguments.length||C.isString(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Aa(wa(a),"element","not an element");Aa(wa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return p(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!f;else if(wa(a)){var d=z(a),h=N.get(d);1===c?b=!h:N.put(d,!b)}else b=f=!!a;return b}};return ra}]}]).provider("$$animation",
["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,n,H){function g(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,p=d.parentNode;e.put(d,a);for(var K;p;){if(K=e.get(p)){K.processed||(K=b(K));break}p=p.parentNode}(K||c).children.push(a);return a}var c={children:[]},d,e=new n;for(d=0;d<a.length;d++){var g=a[d];e.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=
0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,k=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=e,e=0,b.push(k),k=[]);k.push(g.fn);g.children.forEach(function(a){e++;c.push(a)});a--}k.length&&b.push(k);return b}(c)}var u=[],v=V(a);return function(n,P,t){function F(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&
b.push(a)});return b}function T(a){var b=[],c={};s(a,function(a,d){var h=z(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?F(h):[];if(h.length){var k=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][k]={animationID:d,element:G(a)}})}else b.push(a)});var d={},e={};s(c,function(c,k){var r=c.from,p=c.to;if(r&&p){var A=a[r.animationID],g=a[p.animationID],B=r.animationID.toString();if(!e[B]){var n=e[B]={structural:!0,beforeStart:function(){A.beforeStart();
g.beforeStart()},close:function(){A.close();g.close()},classes:J(A.classes,g.classes),from:A,to:g,anchors:[]};n.classes.length?b.push(n):(b.push(A),b.push(g))}e[B].anchors.push({out:r.element,"in":p.element})}else r=r?r.animationID:p.animationID,p=r.toString(),d[p]||(d[p]=!0,b.push(a[r]))});return b}function J(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function y(a){for(var c=
b.length-1;0<=c;c--){var d=e.get(b[c])(a);if(d)return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function p(){var a=n.data("$$animationRunner");!a||"leave"===P&&t.$$domOperationFired||a.end()}function K(b){n.off("$destroy",p);n.removeData("$$animationRunner");v(n,t);ha(n,t);t.domOperation();L&&a.removeClass(n,L);n.removeClass("ng-animate");k.complete(!b)}t=oa(t);var ka=0<=["enter","move","leave"].indexOf(P),
k=new l({end:function(){K()},cancel:function(){K(!0)}});if(!b.length)return K(),k;n.data("$$animationRunner",k);var M=Ba(n.attr("class"),Ba(t.addClass,t.removeClass)),L=t.tempClasses;L&&(M+=" "+L,t.tempClasses=null);var A;ka&&(A="ng-"+P+"-prepare",a.addClass(n,A));u.push({element:n,classes:M,event:P,structural:ka,options:t,beforeStart:function(){n.addClass("ng-animate");L&&a.addClass(n,L);A&&(a.removeClass(n,A),A=null)},close:K});n.on("$destroy",p);if(1<u.length)return k;d.$$postDigest(function(){var a=
[];s(u,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});u.length=0;var b=T(a),c=[];s(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=y(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):c()}})});H(g(c))});return k}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ha(),c=Ha();this.$get=["$window","$$jqLite",
"$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,n,H,g,u,v){function C(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++J))+"-"+a.getAttribute("class")+"-"+b}function P(r,p,g,n){var k;0<b.count(g)&&(k=c.get(g),k||(p=Y(p,"-stagger"),e.addClass(r,p),k=Fa(a,r,n),k.animationDuration=Math.max(k.animationDuration,0),k.transitionDuration=Math.max(k.transitionDuration,0),e.removeClass(r,p),c.put(g,k)));return k||{}}function t(a){y.push(a);
u.waitUntilQuiet(function(){b.flush();c.flush();for(var a=H(),d=0;d<y.length;d++)y[d](a);y.length=0})}function F(c,e,g){e=b.get(g);e||(e=Fa(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(g,e);c=e;g=c.animationDelay;e=c.transitionDelay;c.maxDelay=g&&e?Math.max(g,e):g||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var T=V(e),J=0,y=[];return function(a,c){function d(){k()}function u(){k(!0)}function k(b){if(!(x||
G&&J)){x=!0;J=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);ta(h,!1);pa(h,!1);s(y,function(a){h.style[a[0]]=""});T(a,f);ha(a,f);Object.keys(B).length&&s(B,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),A);var c=a.data("$$animateCss");c&&(n.cancel(c[0].timer),a.removeData("$$animateCss"));I&&I.complete(!b)}}function M(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&ta(h,!!a)}function L(){I=
new l({end:d,cancel:u});t(Q);k();return{$$willAnimate:!1,start:function(){return I},end:d}}function A(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=R&&b>=m&&(G=!0,k())}function N(){function b(){if(!x){M(!1);s(y,function(a){h.style[a[0]]=a[1]});T(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=h.className+" "+ga;ia=C(h,na);D=F(h,na,ia);aa=D.maxDelay;O=Math.max(aa,0);m=D.maxDuration;if(0===m){k();return}q.hasTransitions=
0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(aa="boolean"!==typeof f.delay&&ua(f.delay)?parseFloat(f.delay):aa,O=Math.max(aa,0),D.animationDelay=aa,ba=[qa,aa+"s"],y.push(ba),h.style[ba[0]]=ba[1]);R=1E3*O;V=1E3*m;if(f.easing){var d,g=f.easing;q.hasTransitions&&(d=S+"TimingFunction",y.push([d,g]),h.style[d]=g);q.hasAnimations&&(d=$+"TimingFunction",y.push([d,g]),h.style[d]=g)}D.transitionDuration&&fa.push(xa);D.animationDuration&&fa.push(ya);W=Date.now();var p=
R+1.5*V;d=W+p;var g=a.data("$$animateCss")||[],N=!0;if(g.length){var l=g[0];(N=d>l.expectedEndTime)?n.cancel(l.timer):g.push(k)}N&&(p=n(c,p,!1),g[0]={timer:p,expectedEndTime:d},g.push(k),a.data("$$animateCss",g));if(fa.length)a.on(fa.join(" "),A);f.to&&(f.cleanupStyles&&Ia(B,h,Object.keys(f.to)),Da(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!x)if(h.parentNode){var d=function(a){if(G)J&&a&&(J=!1,k());else if(J=!a,D.animationDuration)if(a=
ta(h,J),J)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},g=0<da&&(D.transitionDuration&&0===X.transitionDuration||D.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);g?n(b,Math.floor(g*da*1E3),!1):b();w.resume=function(){d(!0)};w.pause=function(){d(!1)}}else k()}var f=c||{};f.$$prepared||(f=oa(Ja(f)));var B={},h=z(a);if(!h||!h.parentNode||!v.enabled())return L();var y=[],H=a.attr("class"),E=Na(f),x,J,G,I,w,O,R,m,V,W,fa=[];if(0===f.duration||!g.animations&&
!g.transitions)return L();var ja=f.event&&ca(f.event)?f.event.join(" "):f.event,Z="",U="";ja&&f.structural?Z=Y(ja,"ng-",!0):ja&&(Z=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&T(a,f);var ga=[Z,U].join(" ").trim(),na=H+" "+ga,ea=Y(ga,"-active"),H=E.to&&0<Object.keys(E.to).length;if(!(0<(f.keyframeStyle||"").length||H||ga))return L();var ia,X;0<f.stagger?(E=parseFloat(f.stagger),X={transitionDelay:E,animationDelay:E,
transitionDuration:0,animationDuration:0}):(ia=C(h,na),X=P(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(E=[S,f.transitionStyle],la(h,E),y.push(E));0<=f.duration&&(E=0<h.style[S].length,E=Ga(f.duration,E),la(h,E),y.push(E));f.keyframeStyle&&(E=[$,f.keyframeStyle],la(h,E),y.push(E));var da=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):0;(ja=0===da)&&!f.skipBlocking&&pa(h,9999);var D=F(h,na,ia),aa=D.maxDelay;O=Math.max(aa,0);m=D.maxDuration;var q={};q.hasTransitions=
0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==D.transitionProperty;q.applyTransitionDuration=H&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=ua(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ua(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)m=
f.duration?parseFloat(f.duration):m,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=m,E=0<h.style[S+"Property"].length,y.push(Ga(m,E))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=m,y.push([za,m+"s"]));if(0===m&&!q.recalculateTimingStyles)return L();if(null!=f.delay){var ba;"boolean"!==typeof f.delay&&(ba=parseFloat(f.delay),O=Math.max(ba,0));q.applyTransitionDelay&&y.push([ma,ba+"s"]);q.applyAnimationDelay&&y.push([qa,ba+"s"])}null==f.duration&&0<D.transitionDuration&&
(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);R=1E3*O;V=1E3*m;f.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ia(B,h,Object.keys(f.from)),Ca(a,f));q.blockTransition||q.blockKeyframeAnimation?M(m):f.skipBlocking||pa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!x)return w={end:d,cancel:u,resume:null,pause:null},I=new l(w),t(N),I}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,n,H){function g(a){return a.replace(/\bng-\S+\b/g,"")}function u(a,b){O(a)&&(a=a.split(" "));O(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function v(c,e,n){function l(a){var b={},c=z(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];
switch(a){case "top":d+=t.scrollTop;break;case "left":d+=t.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function p(){var c=g(n.attr("class")||""),d=u(c,k),c=u(k,c),d=a(v,{to:l(n),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function H(){v.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim")}var v=G(z(e).cloneNode(!0)),k=g(v.attr("class")||"");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");v.addClass("ng-anchor");
F.append(v);var M;c=function(){var c=a(v,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(M=p(),!M))return H();var L=c||M;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!M&&(M=p()))return c=M.start(),c.done(function(){c=null;H();b.complete()}),c;H();b.complete()});return b=new d({end:a,cancel:a})}}}function C(a,b,c,e){var g=P(a,Q),n=P(b,Q),l=[];s(e,function(a){(a=v(c,a.out,a["in"]))&&l.push(a)});if(g||n||0!==l.length)return{start:function(){function a(){s(b,
function(a){a.end()})}var b=[];g&&b.push(g.start());n&&b.push(n.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function P(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return Q;var t=H[0].body;
c=z(e);var F=G(c.parentNode&&11===c.parentNode.nodeType||t.contains(c)?c:t);V(n);return function(a){return a.from&&a.to?C(a.from,a.to,a.classes,a.anchors):P(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ca(c)?c:c.split(" ");for(var d=[],e={},l=0;l<c.length;l++){var v=c[l],s=a.$$registeredAnimations[v];s&&!e[v]&&(d.push(b.get(s)),e[v]=!0)}return d}var l=V(d);return function(a,b,d,u){function v(){u.domOperation();
l(a,u)}function C(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,G,J,f];break;case "addClass":b=[b,G,f];break;case "removeClass":b=[b,J,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ka(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ka(a))return a;return Q}function z(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||Q)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});
f=C(k,a,b,d,function(a){h(!1===a)});return e})});return g}function t(a,b,d,e,f){var g=z(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),k=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),k=z(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?
b.cancel():b.end()})}}}var F=!1;3===arguments.length&&va(d)&&(u=d,d=null);u=oa(u);d||(d=a.attr("class")||"",u.addClass&&(d+=" "+u.addClass),u.removeClass&&(d+=" "+u.removeClass));var G=u.addClass,J=u.removeClass,y=e(d),r,p;if(y.length){var K,I;"leave"==b?(I="leave",K="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+b.substr(1),K=b);"enter"!==b&&"move"!==b&&(r=t(a,b,u,y,I));p=t(a,b,u,y,K)}if(r||p){var k;return{$$willAnimate:!0,end:function(){k?k.end():(F=!0,v(),ha(a,u),k=new c,k.complete(!0));return k},
start:function(){function b(c){F=!0;v();ha(a,u);k.complete(c)}if(k)return k;k=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){v();a(!0)}):v();p&&e.push(function(a){d=p(a)});k.setHost({end:function(){F||((d||Q)(void 0),b(void 0))},cancel:function(){F||((d||Q)(!0),b(!0))}});c.chain(e,b);return k}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,
c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,p){'use strict';var b="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),l=function(a,c){if(-1!==c.indexOf(a[0].nodeName))return!0};p.module("ngAria",["ng"]).provider("$aria",function(){function a(a,b,m,h){return function(d,f,e){var q=e.$normalize(b);!c[q]||l(f,m)||e[q]||d.$watch(e[a],function(a){a=h?!a:!!a;f.attr(b,a)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};
this.config=function(a){c=p.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",b,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked","aria-checked",b,!1)}]).directive("ngReadonly",
["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",b,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",b,!1)}]).directive("ngModel",["$aria",function(a){function c(c,h,d,f){return a.config(h)&&!d.attr(c)&&(f||!l(d,b))}function g(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function k(a,c){var d=a.type,f=a.role;return"checkbox"===(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===
f?"radio":"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(b,h){var d=k(h,b);return{pre:function(a,e,c,b){"checkbox"===d&&(b.$isEmpty=function(a){return!1===a})},post:function(f,e,b,n){function h(){return n.$modelValue}function k(a){e.attr("aria-checked",b.value==n.$viewValue)}function l(){e.attr("aria-checked",!n.$isEmpty(n.$viewValue))}var m=c("tabindex","tabindex",e,!1);switch(d){case "radio":case "checkbox":g(d,e)&&e.attr("role",
d);c("aria-checked","ariaChecked",e,!1)&&f.$watch(h,"radio"===d?k:l);m&&e.attr("tabindex",0);break;case "range":g(d,e)&&e.attr("role","slider");if(a.config("ariaValue")){var p=!e.attr("aria-valuemin")&&(b.hasOwnProperty("min")||b.hasOwnProperty("ngMin")),r=!e.attr("aria-valuemax")&&(b.hasOwnProperty("max")||b.hasOwnProperty("ngMax")),s=!e.attr("aria-valuenow");p&&b.$observe("min",function(a){e.attr("aria-valuemin",a)});r&&b.$observe("max",function(a){e.attr("aria-valuemax",a)});s&&f.$watch(h,function(a){e.attr("aria-valuenow",
a)})}m&&e.attr("tabindex",0)}!b.hasOwnProperty("ngRequired")&&n.$validators.required&&c("aria-required","ariaRequired",e,!1)&&b.$observe("required",function(){e.attr("aria-required",!!b.required)});c("aria-invalid","ariaInvalid",e,!0)&&f.$watch(function(){return n.$invalid},function(a){e.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",b,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",
link:function(a,b,g,k){b.attr("aria-live")||b.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,c){return{restrict:"A",compile:function(g,k){var m=c(k.ngClick,null,!0);return function(c,d,f){if(!l(d,b)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeypress")&&!f.ngKeypress))d.on("keypress",function(a){function b(){m(c,{$event:a})}var d=a.which||a.keyCode;32!==d&&
13!==d||c.$apply(b)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,g,k){!a.config("tabindex")||g.attr("tabindex")||l(g,b)||g.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,c){function d(a){return 1===V&&W>=4?!!j.enabled(a):1===V&&W>=2?!!j.enabled():!!i}var e={enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}};if(a.noanimation)return e;if(j)return{enter:function(a,c,f){d(a)?b.version.minor>2?j.enter(a,null,c).then(f):j.enter(a,null,c,f):e.enter(a,c,f)},leave:function(a,c){d(a)?b.version.minor>2?j.leave(a).then(c):j.leave(a,c):e.leave(a,c)}};if(i){var f=i&&i(c,a);return{enter:function(a,b,c){f.enter(a,null,b),c()},leave:function(a,b){f.leave(a),b()}}}return e}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){function a(){b&&b.remove(),c&&c.$destroy()}var b=l,c=n;c&&(c._willBeDestroyed=!0),m?(r.leave(m,function(){a(),l=null}),l=m):(a(),l=null),m=null,n=null}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if((g||s!==o)&&!c._willBeDestroyed){k=c.$new(),o=a.$current.locals[l],k.$emit("$viewContentLoading",l);var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded",l),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h=B(f.uiSref,a.current.name),i={state:h.state,href:null,params:null},j=D(e),k=g[1]||g[0];i.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var l=function(c){c&&(i.params=b.copy(c)),i.href=a.href(h.state,i.params,i.options),k&&k.$$addStateInfo(h.state,i.params),null!==i.href&&f.$set(j.attr,i.href)};h.paramExpr&&(d.$watch(h.paramExpr,function(a){a!==i.params&&l(a)},!0),i.params=b.copy(d.$eval(h.paramExpr))),l(),j.clickable&&e.bind("click",E(e,a,c,j,function(){return i}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){l.state=b[0],l.params=b[1],l.options=b[2],l.href=a.href(l.state,l.params,l.options),i&&i.$$addStateInfo(l.state,l.params),l.href&&e.$set(h.attr,l.href)}var h=D(d),i=f[1]||f[0],j=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],k="["+j.map(function(a){return a||"null"}).join(", ")+"]",l={state:null,params:null,options:null,href:null};c.$watch(k,g,!0),g(c.$eval(k)),h.clickable&&d.bind("click",E(d,a,b,h,function(){return l}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c);p.push({state:f||{name:b},params:c,hash:g}),q[g]=e}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){O(o)&&p.length>0||(g(a,b,o),i())},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x);var V=b.version.major,W=b.version.minor;y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),
J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);

/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc.5-master-42833aa
 */
!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.layout","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.colors","material.components.content","material.components.dialog","material.components.datepicker","material.components.divider","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.navBar","material.components.panel","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.showHide","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.virtualRepeat","material.components.whiteframe"])}(),function(){function e(e,t){if(t.has("$swipe")){var n="You are using the ngTouch module. \nAngular Material already has mobile click, tap, and swipe support... \nngTouch is not supported with Angular Material!";e.warn(n)}}function n(e,t){e.decorator("$$rAF",["$delegate",o]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey")}function o(e){return e.throttle=function(t){var n,o,i,r;return function(){n=arguments,r=this,i=t,o||(o=!0,e(function(){i.apply(r,Array.prototype.slice.call(n)),o=!1}))}},e}t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.gestures","material.core.theming"]).config(n).run(e),e.$inject=["$log","$injector"],n.$inject=["$provide","$mdThemingProvider"],o.$inject=["$delegate"]}(),function(){function e(){return{restrict:"A",link:n}}function n(e,t,n){var o=n.mdAutoFocus||n.mdAutofocus||n.mdSidenavFocus;e.$watch(o,function(e){t.toggleClass("_md-autofocus",e)})}t.module("material.core").directive("mdAutofocus",e).directive("mdAutoFocus",e).directive("mdSidenavFocus",e)}(),function(){function e(){function e(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),"rgba("+parseInt(o,16)+","+parseInt(i,16)+","+parseInt(r,16)+",0.1)"}function t(e){e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);var t=e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):"";return t.toUpperCase()}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)"}return{rgbaToHex:t,hexToRgba:e,rgbToRgba:n,rgbaToRgb:o}}t.module("material.core").factory("$mdColorUtil",e)}(),function(){function e(e,n,o){function i(e){var t=d+"-"+e,n=a(t),o=n.charAt(0).toLowerCase()+n.substring(1);return r(e)?e:r(n)?n:r(o)?o:e}function r(e){return t.isDefined(l.style[e])}function a(e){return e.replace(c,function(e,t,n,o){return o?n.toUpperCase():n})}var d=e.vendorPrefix,s=/webkit/i.test(d),c=/([:\-_]+(.))/g,l=document.createElement("div");return{KEY_CODE:{COMMA:188,SEMICOLON:186,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(s?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(s?" webkitAnimationEnd":""),TRANSFORM:i("transform"),TRANSFORM_ORIGIN:i("transformOrigin"),TRANSITION:i("transition"),TRANSITION_DURATION:i("transitionDuration"),ANIMATION_PLAY_STATE:i("animationPlayState"),ANIMATION_DURATION:i("animationDuration"),ANIMATION_NAME:i("animationName"),ANIMATION_TIMING:i("animationTimingFunction"),ANIMATION_DIRECTION:i("animationDirection")},MEDIA:{xs:"(max-width: 599px)","gt-xs":"(min-width: 600px)",sm:"(min-width: 600px) and (max-width: 959px)","gt-sm":"(min-width: 960px)",md:"(min-width: 960px) and (max-width: 1279px)","gt-md":"(min-width: 1280px)",lg:"(min-width: 1280px) and (max-width: 1919px)","gt-lg":"(min-width: 1920px)",xl:"(min-width: 1920px)",landscape:"(orientation: landscape)",portrait:"(orientation: portrait)",print:"print"},MEDIA_PRIORITY:["xl","gt-lg","lg","gt-md","md","gt-sm","sm","gt-xs","xs","landscape","portrait","print"]}}t.module("material.core").factory("$mdConstant",e),e.$inject=["$sniffer","$window","$document"]}(),function(){function e(e,n){function o(){return[].concat(v)}function i(){return v.length}function r(e){return v.length&&e>-1&&e<v.length}function a(e){return e?r(u(e)+1):!1}function d(e){return e?r(u(e)-1):!1}function s(e){return r(e)?v[e]:null}function c(e,t){return v.filter(function(n){return n[e]===t})}function l(e,n){return e?(t.isNumber(n)||(n=v.length),v.splice(n,0,e),u(e)):-1}function m(e){h(e)&&v.splice(u(e),1)}function u(e){return v.indexOf(e)}function h(e){return e&&u(e)>-1}function p(){return v.length?v[0]:null}function f(){return v.length?v[v.length-1]:null}function g(e,o,i,a){i=i||b;for(var d=u(o);;){if(!r(d))return null;var s=d+(e?-1:1),c=null;if(r(s)?c=v[s]:n&&(c=e?f():p(),s=u(c)),null===c||s===a)return null;if(i(c))return c;t.isUndefined(a)&&(a=s),d=s}}var b=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var v=e||[];return{items:o,count:i,inRange:r,contains:h,indexOf:u,itemAt:s,findBy:c,add:l,remove:m,first:p,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function i(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=r(e));var o=p[n];return t.isUndefined(o)&&(o=a(n)),o}function r(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=h[e];return t||(t=h[e]=o.matchMedia(e)),t.addListener(d),p[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){p[e.media]=!!e.matches})}function s(e){return h[e]}function c(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var i=e.MEDIA_PRIORITY[o];if(h[u[i]].matches){var r=m(t,n+"-"+i);if(t[r])return t[r]}}return t[m(t,n)]}function l(n,o,i){var r=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,null)));for(var d in e.MEDIA)a=m(o,n+"-"+d),t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,d)))}),function(){r.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var u={},h={},p={},f={};return i.getResponsiveAttribute=c,i.getQuery=s,i.watchResponsiveAttributes=l,i}t.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"]}(),function(){function e(e,n){function o(e){return e=t.isArray(e)?e:[e],e.forEach(function(t){a.forEach(function(n){e.push(n+"-"+t)})}),e}function i(e){return e=t.isArray(e)?e:[e],o(e).map(function(e){return"["+e+"]"}).join(",")}function r(e,t){e=e[0]||e;for(var n=o(t),i=0;i<n.length;i++)if(e.hasAttribute(n[i]))return!0;return!1}var a=["data","x"];return e?n?i(e):o(e):{buildList:o,buildSelector:i,hasAttribute:r}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.prefixer=e,t}])}])}(),function(){function o(o,r,a,d,s,c,l,m,u){function h(e){return e?p(e)||f(e)?e:e+"px":"0"}function p(e){return String(e).indexOf("px")>-1}function f(e){return String(e).indexOf("%")>-1}function g(e){return e[0]||e}var b=c.startSymbol(),v=c.endSymbol(),E="{{"===b&&"}}"===v,$=function(e,n,o){var i=!1;if(e&&e.length){var r=u.getComputedStyle(e[0]);i=t.isDefined(r[n])&&(o?r[n]==o:!0)}return i},C={dom:{},now:e.performance?t.bind(e.performance,e.performance.now):Date.now||function(){return(new Date).getTime()},bidi:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir);if(0==arguments.length)return a?"ltr":"rtl";var d=t.element(e);a&&t.isDefined(i)?d.css(n,h(i)):!a&&t.isDefined(r)&&d.css(n,h(r))},bidiProperty:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir),d=t.element(e);a&&t.isDefined(n)?(d.css(n,h(r)),d.css(i,"")):!a&&t.isDefined(i)&&(d.css(i,h(r)),d.css(n,""))},clientRect:function(e,t,n){var o=g(e);t=g(t||o.offsetParent||document.body);var i=o.getBoundingClientRect(),r=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:i.left-r.left,top:i.top-r.top,width:i.width,height:i.height}},offsetRect:function(e,t){return C.clientRect(e,t,!0)},nodesToArray:function(e){e=e||[];for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},scrollTop:function(e){e=t.element(e||o[0].body);var i=e[0]==o[0].body?o[0].body:n,r=i?i.scrollTop+i.parentElement.scrollTop:0;return r||Math.abs(e[0].getBoundingClientRect().top)},findFocusTarget:function(e,n){function o(e,n){var o,i=e[0].querySelectorAll(n);return i&&i.length&&i.length&&t.forEach(i,function(e){e=t.element(e);var n=e.hasClass("_md-autofocus");n&&(o=e)}),o}var i,r=this.prefixer("md-autofocus",!0);return i=o(e,n||r),i||n==r||(i=o(e,this.prefixer("md-auto-focus",!0)),i||(i=o(e,r))),i},disableScrollAround:function(e,n){function i(e){function n(e){e.preventDefault()}e=t.element(e||d)[0];var o=t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>');return e.appendChild(o[0]),o.on("wheel",n),o.on("touchmove",n),function(){o.off("wheel"),o.off("touchmove"),o[0].parentNode.removeChild(o[0]),delete C.disableScrollAround._enableScrolling}}function r(){var e=d.parentNode,t=e.style.cssText||"",n=d.style.cssText||"",o=C.scrollTop(d),i=d.clientWidth;return d.scrollHeight>d.clientHeight+1&&(a(d,{position:"fixed",width:"100%",top:-o+"px"}),e.style.overflowY="scroll"),d.clientWidth<i&&a(d,{overflow:"hidden"}),function(){d.style.cssText=n,e.style.cssText=t,d.scrollTop=o,e.scrollTop=o}}function a(e,t){for(var n in t)e.style[n]=t[n]}if(C.disableScrollAround._count=C.disableScrollAround._count||0,++C.disableScrollAround._count,C.disableScrollAround._enableScrolling)return C.disableScrollAround._enableScrolling;var d=o[0].body,s=r(),c=i(n);return C.disableScrollAround._enableScrolling=function(){--C.disableScrollAround._count||(s(),c(),delete C.disableScrollAround._enableScrolling)}},enableScrolling:function(){var e=this.disableScrollAround._enableScrolling;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element("<div><div></div></div>").css({width:"100%","z-index":-1,position:"absolute",height:"35px","overflow-y":"scroll"});e.children().css("height","60px"),o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function i(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",i))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},createBackdrop:function(e,t){return a(C.supplant('<md-backdrop class="{0}">',[t]))(e)},supplant:function(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),i=t;try{for(var r in o)o.hasOwnProperty(r)&&(i=i[o[r]])}catch(a){i=e}return"string"==typeof i||"number"==typeof i?i:e})},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,i){var a;return function(){var d=o,s=Array.prototype.slice.call(arguments);r.cancel(a),a=r(function(){a=n,e.apply(d,s)},t||10,i)}},throttle:function(e,t){var n;return function(){var o=this,i=arguments,r=C.now();(!n||r-n>t)&&(e.apply(o,i),n=r)}},time:function(e){var t=C.now();return e(),C.now()-t},valueOnUse:function(e,t,n){var o=null,i=Array.prototype.slice.call(arguments),r=i.length>3?i.slice(3):[];Object.defineProperty(e,t,{get:function(){return null===o&&(o=n.apply(e,r)),o}})},nextUid:function(){return""+i++},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(t.isString(n)){var i=n.toUpperCase();n=function(e){return e.nodeName===i}}if(e instanceof t.element&&(e=e[0]),o&&(e=e.parentNode),!e)return null;do if(n(e))return e;while(e=e.parentNode);return null},elementContains:function(n,o){var i=e.Node&&e.Node.prototype&&Node.prototype.contains,r=i?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e))});return r(o)},extractElementByName:function(e,n,o,i){function r(e){return a(e)||(o?d(e):null)}function a(e){if(e)for(var t=0,o=e.length;o>t;t++)if(e[t].nodeName.toLowerCase()===n)return e[t];return null}function d(e){var t;if(e)for(var n=0,o=e.length;o>n;n++){var i=e[n];if(!t)for(var a=0,d=i.childNodes.length;d>a;a++)t=t||r([i.childNodes[a]])}return t}var s=r(e);return!s&&i&&l.warn(C.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(s||e)},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(i,r){if(i.optional&&t.isUndefined(e[r])){var a=t.isDefined(n[i.attrName]);e[r]=t.isDefined(o[r])?o[r]:a}})},nextTick:function(e,t,n){function o(){var e=i.queue,t=i.digest;i.queue=[],i.timeout=null,i.digest=!1,e.forEach(function(e){var t=e.scope&&e.scope.$$destroyed;t||e.callback()}),t&&d.$digest()}var i=C.nextTick,a=i.timeout,s=i.queue||[];return s.push({scope:n,callback:e}),null==t&&(t=!0),i.digest=i.digest||t,i.queue=s,a||(i.timeout=r(o,0,!1))},processTemplate:function(e){return E?e:e&&t.isString(e)?e.replace(/\{\{/g,b).replace(/}}/g,v):e},getParentWithPointerEvents:function(e){for(var t=e.parent();$(t,"pointer-events","none");)t=t.parent();return t},getNearestContentElement:function(e){for(var t=e.parent()[0];t&&t!==m[0]&&t!==document.body&&"MD-CONTENT"!==t.nodeName.toUpperCase();)t=t.parentNode;return t},checkStickySupport:function(){var e,n=t.element("<div>");o[0].body.appendChild(n[0]);for(var i=["sticky","-webkit-sticky"],r=0;r<i.length;++r)if(n.css({position:i[r],top:0,"z-index":2}),n.css("position")==i[r]){e=i[r];break}return n.remove(),e},parseAttributeBoolean:function(e,t){return""===e||!!e&&(t===!1||"false"!==e&&"0"!==e)},hasComputedStyle:$,isParentFormSubmitted:function(e){var n=C.getClosest(e,"form"),o=n?t.element(n).controller("form"):null;return o?o.$submitted:!1}};return C.dom.animator=s(C),C}var i=0;t.module("material.core").factory("$mdUtil",o),o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log","$rootElement","$window"],t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(){function e(){t.showWarnings=!1}var t=this;return t.showWarnings=!0,{disableWarnings:e,$get:["$$rAF","$log","$window","$interpolate",function(e,o,i,r){return n.apply(t,arguments)}]}}function n(e,n,o,i){function r(e,o,i){var r=t.element(e)[0]||e;!r||r.hasAttribute(o)&&0!==r.getAttribute(o).length||c(r,o)||(i=t.isString(i)?i.trim():"",i.length?e.attr(o,i):l&&n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',r))}function a(t,n,o){e(function(){r(t,n,o())})}function d(e,t){var n=s(e)||"",o=n.indexOf(i.startSymbol())>-1;o?a(e,t,function(){return s(e)}):r(e,t,n)}function s(e){function t(t){for(;t.parentNode&&(t=t.parentNode)!==e;)if(t.getAttribute&&"true"===t.getAttribute("aria-hidden"))return!0}e=e[0]||e;for(var n,o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),i="";n=o.nextNode();)t(n)||(i+=n.textContent);return i.trim()||""}function c(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var i=e.hasChildNodes(),r=!1;if(i)for(var a=e.childNodes,d=0;d<a.length;d++){var s=a[d];1===s.nodeType&&s.hasAttribute(t)&&(n(s)||(r=!0))}return r}var l=this.showWarnings;return{expect:r,expectAsync:a,expectWithText:d}}t.module("material.core").provider("$mdAria",e),n.$inject=["$$rAF","$log","$window","$interpolate"]}(),function(){function e(e,n,o,i,r){this.compile=function(a){var d=a.templateUrl,s=a.template||"",c=a.controller,l=a.controllerAs,m=t.extend({},a.resolve||{}),u=t.extend({},a.locals||{}),h=a.transformTemplate||t.identity,p=a.bindToController;return t.forEach(m,function(e,n){t.isString(e)?m[n]=o.get(e):m[n]=o.invoke(e)}),t.extend(m,u),d?m.$template=n(d).then(function(e){return e}):m.$template=e.when(s),e.all(m).then(function(e){var n,o=h(e.$template,a),d=a.element||t.element("<div>").html(o.trim()).contents(),s=i(d);return n={locals:e,element:d,link:function(o){if(e.$scope=o,c){var i=r(c,e,!0);p&&t.extend(i.instance,e);var a=i();d.data("$ngControllerController",a),d.children().data("$ngControllerController",a),l&&(o[l]=a),n.controller=a}return s(o)}}})}}t.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$templateRequest","$injector","$compile","$controller"]}(),function(){function n(){}function o(n,o,i){function r(e){return function(t,n){n.distance<this.state.options.maxDistance&&this.dispatchEvent(t,e,n)}}function a(e,t,n){var o=p[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(p).join(", "));return o.registerElement(e,n)}function s(e,o){var i=new n(e);return t.extend(i,o),p[e]=i,v}function c(){for(var e=document.createElement("div"),n=["","webkit","Moz","MS","ms","o"],o=0;o<n.length;o++){var i=n[o],r=i?i+"TouchAction":"touchAction";if(t.isDefined(e.style[r]))return r}}var m=navigator.userAgent||navigator.vendor||e.opera,u=m.match(/ipad|iphone|ipod/i),h=m.match(/android/i),g=c(),b="undefined"!=typeof e.jQuery&&t.element===e.jQuery,v={handler:s,register:a,isHijackingClicks:(u||h)&&!b&&!f};if(v.isHijackingClicks){var E=6;v.handler("click",{options:{maxDistance:E},onEnd:r("click")}),v.handler("focus",{options:{maxDistance:E},onEnd:function(e,t){function n(e){var t=["INPUT","SELECT","BUTTON","TEXTAREA","VIDEO","AUDIO"];return"-1"!=e.getAttribute("tabindex")&&!e.hasAttribute("DISABLED")&&(e.hasAttribute("tabindex")||e.hasAttribute("href")||e.isContentEditable||-1!=t.indexOf(e.nodeName))}t.distance<this.state.options.maxDistance&&n(e.target)&&(this.dispatchEvent(e,"focus",t),e.target.focus())}}),v.handler("mouseup",{options:{maxDistance:E},onEnd:r("mouseup")}),v.handler("mousedown",{onStart:function(e){this.dispatchEvent(e,"mousedown")}})}return v.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){i.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=i(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){g||"touchmove"!==e.type||e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onSetup:function(e,t){g&&(this.oldTouchAction=e[0].style[g],e[0].style[g]=t.horizontal===!1?"pan-y":"pan-x")},onCleanup:function(e){this.oldTouchAction&&(e[0].style[g]=this.oldTouchAction)},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;g||"touchmove"!==e.type||e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){var n;Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance?(n="left"==t.directionX?"$md.swipeleft":"$md.swiperight",this.dispatchEvent(e,n)):Math.abs(t.velocityY)>this.state.options.minVelocity&&Math.abs(t.distanceY)>this.state.options.minDistance&&(n="up"==t.directionY?"$md.swipeup":"$md.swipedown",this.dispatchEvent(e,n))}})}function i(e){this.name=e,this.state={}}function r(){function n(e,n,o){o=o||u;var i=new t.element.Event(n);i.$material=!0,i.pointer=o,i.srcEvent=e,t.extend(i,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(i)}function o(t,n,o){o=o||u;var i;"click"===n||"mouseup"==n||"mousedown"==n?(i=document.createEvent("MouseEvents"),i.initMouseEvent(n,!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,{})),i.$material=!0,i.pointer=o,i.srcEvent=t,o.target.dispatchEvent(i)}var r="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return i.prototype={options:{},dispatchEvent:r?n:o,onSetup:t.noop,onCleanup:t.noop,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),i=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,i),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n),o.onCleanup(e,t||{})}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),o.onSetup(e,t||{}),n}},i}function a(e,n){function o(e){var t=!e.clientX&&!e.clientY;t||e.$material||e.isIonicTap||c(e)||(e.preventDefault(),e.stopPropagation())}function i(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||e.isIonicTap||c(e)?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null)}function r(e,t){var o;for(var i in p)o=p[i],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u))}function a(e){if(!u){var t=+Date.now();h&&!s(e,h)&&t-h.endTime<1500||(u=d(e),r("start",e))}}function m(e){u&&s(e,u)&&(l(e,u),r("move",e))}function f(e){u&&s(e,u)&&(l(e,u),u.endTime=+Date.now(),r("end",e),h=u,u=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!b&&e.isHijackingClicks&&(document.addEventListener("click",i,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("focus",o,!0),b=!0);var v="mousedown touchstart pointerdown",E="mousemove touchmove pointermove",$="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(v,a).on(E,m).on($,f).on("$$mdGestureReset",function(){h=u=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function s(e,t){return e&&t&&e.type.charAt(0)===t.type}function c(e){return g&&g.x==e.x&&g.y==e.y}function l(e,t){var n=m(e),o=t.x=n.pageX,i=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=i-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"down":t.distanceY<0?"up":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}var u,h,p={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",r).run(a),n.prototype={skipClickHijack:function(){return f=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]},o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"]}(),function(){function e(){function e(e){function n(e){return s.optionsFactory=e.options,s.methods=(e.methods||[]).concat(a),c}function o(e,t){return d[e]=t,c}function i(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return s.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},c}function r(n,o){function i(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},l,e))}function r(e){return m.destroy(e)}function a(t,n){var i={};return i[e]=u,o.invoke(t||function(){return n},{},i)}var c,l,m=n(),u={hide:m.hide,cancel:m.cancel,show:i,destroy:r};return c=s.methods||[],l=a(s.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(s.presets,function(e,n){function o(e){this._options=t.extend({},i,e)}var i=a(e.optionsFactory,{}),r=(e.methods||[]).concat(c);if(t.extend(i,{$type:n}),t.forEach(r,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}var a=["onHide","onShow","onRemove"],d={},s={presets:{}},c={setDefaults:n,addPreset:i,addMethod:o,$get:r};return c.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),r.$inject=["$$interimElement","$injector"],c}function o(e,o,i,r,a,d,s,c,l,m,u){return function(){function h(e){e=e||{};var t=new b(e||{}),n=!e.skipHide&&$.length?v.cancel():o.when(!0);return n["finally"](function(){$.push(t),t.show()["catch"](function(e){return e})}),t.deferred.promise}function p(e,t){function i(n){return n.remove(e,!1,t||{})["catch"](function(e){return e}),n.deferred.promise}if(!$.length)return o.when(e);if(t=t||{},t.closeAll){var r=o.all($.reverse().map(i));return $=[],r}if(t.closeTo!==n)return o.all($.splice(t.closeTo).map(i));var a=$.pop();return i(a)}function f(e,n){var i=$.pop();return i?(i.remove(e,!0,n||{})["catch"](function(e){return e}),i.deferred.promise["catch"](t.noop)):o.when(e)}function g(e){var n=e?null:$.shift(),i=t.element(e).length?t.element(e)[0].parentNode:null;if(i){var r=$.filter(function(e){var t=e.options.element[0];return t===i});r.length>0&&(n=r[0],$.splice($.indexOf(n),1))}return n?n.remove(E,!1,{$destroy:!0}):o.when(E)}function b(u){function h(){return o(function(e,t){function n(e){M.deferred.reject(e),t(e)}u.onCompiling&&u.onCompiling(u),g(u).then(function(t){_=b(t,u),A=C(_,u,t.controller).then(e,n)},n)})}function p(e,n,i){function r(e){M.deferred.resolve(e)}function a(e){M.deferred.reject(e)}return _?(u=t.extend(u||{},i||{}),u.cancelAutoHide&&u.cancelAutoHide(),u.element.triggerHandler("$mdInterimElementRemove"),u.$destroy===!0?y(u.element,u).then(function(){n&&a(e)||r(e)}):(o.when(A)["finally"](function(){y(u.element,u).then(function(){n&&a(e)||r(e)},a)}),M.deferred.promise)):o.when(!1)}function f(e){return e=e||{},e.template&&(e.template=c.processTemplate(e.template)),t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||r.$new(e.isolateScope),onShow:function(e,t,n){return s.enter(t,n.parent)},onRemove:function(e,t){return t&&s.leave(t)||o.when()}},e)}function g(e){var t=e.skipCompile?null:l.compile(e);return t||o(function(t){t({locals:{},link:function(){return e.element}})})}function b(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=E(o,n),n.themable&&m(o),o}function E(n,o){var i=o.parent;if(i=t.isFunction(i)?i(o.scope,n,o):t.isString(i)?t.element(e[0].querySelector(i)):t.element(i),!(i||{}).length){var r;return d[0]&&d[0].querySelector&&(r=d[0].querySelector(":not(svg) > body")),r||(r=d[0]),"#comment"==r.nodeName&&(r=e[0].body),t.element(r)}return i}function $(){var e,o=t.noop;u.hideDelay&&(e=a(v.hide,u.hideDelay),o=function(){a.cancel(e)}),u.cancelAutoHide=function(){o(),u.cancelAutoHide=n}}function C(e,n,i){var r=n.onShowing||t.noop,a=n.onComplete||t.noop;return r(n.scope,e,n,i),o(function(t,r){try{o.when(n.onShow(n.scope,e,n,i)).then(function(){a(n.scope,e,n),$(),t(e)},r)}catch(d){r(d.message)}})}function y(e,n){var o=n.onRemoving||t.noop;return i(function(t,r){try{var a=i.when(n.onRemove(n.scope,e,n)||!0);o(e,a),1==n.$destroy?t(e):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e)},r)}catch(d){r(d)}})}var M,_,A=o.when(!0);return u=f(u),M={options:u,deferred:o.defer(),show:h,remove:p}}var v,E=!1,$=[];return v={show:h,hide:p,cancel:f,destroy:g,$injector_:u}}}return e.$get=o,o.$inject=["$document","$q","$$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$injector"],e}t.module("material.core").provider("$$interimElement",e)}(),function(){!function(){function e(e){function a(e){return e.replace(s,"").replace(c,function(e,t,n,o){return o?n.toUpperCase():n})}var s=/^((?:x|data)[\:\-_])/i,c=/([\:\-\_]+(.))/g,l=["","xs","gt-xs","sm","gt-sm","md","gt-md","lg","gt-lg","xl","print"],m=["layout","flex","flex-order","flex-offset","layout-align"],u=["show","hide","layout-padding","layout-margin"];t.forEach(l,function(n){t.forEach(m,function(t){var o=n?t+"-"+n:t;e.directive(a(o),i(o))}),t.forEach(u,function(t){var o=n?t+"-"+n:t;e.directive(a(o),r(o))})}),e.directive("mdLayoutCss",n).directive("ngCloak",o("ng-cloak")).directive("layoutWrap",r("layout-wrap")).directive("layoutNowrap",r("layout-nowrap")).directive("layoutNoWrap",r("layout-no-wrap")).directive("layoutFill",r("layout-fill")).directive("layoutLtMd",d("layout-lt-md",!0)).directive("layoutLtLg",d("layout-lt-lg",!0)).directive("flexLtMd",d("flex-lt-md",!0)).directive("flexLtLg",d("flex-lt-lg",!0)).directive("layoutAlignLtMd",d("layout-align-lt-md")).directive("layoutAlignLtLg",d("layout-align-lt-lg")).directive("flexOrderLtMd",d("flex-order-lt-md")).directive("flexOrderLtLg",d("flex-order-lt-lg")).directive("offsetLtMd",d("flex-offset-lt-md")).directive("offsetLtLg",d("flex-offset-lt-lg")).directive("hideLtMd",d("hide-lt-md")).directive("hideLtLg",d("hide-lt-lg")).directive("showLtMd",d("show-lt-md")).directive("showLtLg",d("show-lt-lg"));
}function n(){return{restrict:"A",priority:"900",compile:function(e,n){return _.enabled=!1,t.noop}}}function o(e){return["$timeout",function(n){return{restrict:"A",priority:-10,compile:function(o){return _.enabled?(o.addClass(e),function(t,o){n(function(){o.removeClass(e)},10,!1)}):t.noop}}}]}function i(e){function n(t,n,o){var i=a(n,e,o),r=o.$observe(o.$normalize(e),i);i(u(e,o,"")),t.$on("$destroy",function(){r()})}return["$mdUtil","$interpolate","$log",function(o,i,r){return f=o,g=i,b=r,{restrict:"A",compile:function(o,i){var r;return _.enabled&&(s(e,i,o,b),c(e,u(e,i,""),l(o,e,i)),r=n),r||t.noop}}}]}function r(e){function n(t,n){n.addClass(e)}return["$mdUtil","$interpolate","$log",function(o,i,r){return f=o,g=i,b=r,{restrict:"A",compile:function(o,i){var r;return _.enabled&&(c(e,u(e,i,""),l(o,e,i)),n(null,o),r=n),r||t.noop}}}]}function a(e,n){var o;return function(i){var r=c(n,i||"");t.isDefined(r)&&(o&&e.removeClass(o),o=r?n+"-"+r.replace(E,"-"):n,e.addClass(o))}}function d(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop}]}function s(e,t,n,o){var i,r,a,d=n[0].nodeName.toLowerCase();switch(e.replace(v,"")){case"flex":"md-button"!=d&&"fieldset"!=d||(r="<"+d+" "+e+"></"+d+">",a="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",i="Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.",o.warn(f.supplant(i,[r,a])))}}function c(e,n,o){var i=n;if(!m(n)){switch(e.replace(v,"")){case"layout":h(n,C)||(n=C[0]);break;case"flex":h(n,$)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":n&&!isNaN(+n)||(n="0");break;case"layout-align":var r=p(n);n=f.supplant("{main}-{cross}",r);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-nowrap":case"layout-nowrap":n=""}n!=i&&(o||t.noop)(n)}return n}function l(e,t,n){return function(e){m(e)||(n[n.$normalize(t)]=e)}}function m(e){return(e||"").indexOf(g.startSymbol())>-1}function u(e,t,n){var o=t.$normalize(e);return t[o]?t[o].replace(E,"-"):n||null}function h(e,t,n){e=n&&e?e.replace(E,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace(E,n):t,o=o||t===e}),o}function p(e){var t,n={main:"start",cross:"stretch"};return e=e||"",0!=e.indexOf("-")&&0!=e.indexOf(" ")||(e="none"+e),t=e.toLowerCase().trim().replace(E,"-").split("-"),t.length&&"space"===t[0]&&(t=[t[0]+"-"+t[1],t[2]]),t.length>0&&(n.main=t[0]||n.main),t.length>1&&(n.cross=t[1]||n.cross),y.indexOf(n.main)<0&&(n.main="start"),M.indexOf(n.cross)<0&&(n.cross="stretch"),n}var f,g,b,v=/(-gt)?-(sm|md|lg|print)/g,E=/\s+/g,$=["grow","initial","auto","none","noshrink","nogrow"],C=["row","column"],y=["","start","center","end","stretch","space-around","space-between"],M=["","start","center","end","stretch"],_={enabled:!0,breakpoints:[]};e(t.module("material.core.layout",["ng"]))}()}(),function(){function e(e,o){function i(e){return e&&""!==e}var r,a=[],d={};return r={notFoundError:function(t,n){e.error((n||"")+"No instance found for handle",t)},getInstances:function(){return a},get:function(e){if(!i(e))return null;var t,n,o;for(t=0,n=a.length;n>t;t++)if(o=a[t],o.$$mdHandle===e)return o;return null},register:function(e,n){function o(){var t=a.indexOf(e);-1!==t&&a.splice(t,1)}function i(){var t=d[n];t&&(t.forEach(function(t){t.resolve(e)}),delete d[n])}return n?(e.$$mdHandle=n,a.push(e),i(),o):t.noop},when:function(e){if(i(e)){var t=o.defer(),a=r.get(e);return a?t.resolve(a):(d[e]===n&&(d[e]=[]),d[e].push(t)),t.promise}return o.reject("Invalid `md-component-id` value.")}}}t.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:function(o,i,r){return r=t.extend(n(i),r),e.attach(o,i,r)}}}t.module("material.core").factory("$mdButtonInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},i))}return{attach:n}}t.module("material.core").factory("$mdCheckboxInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}t.module("material.core").factory("$mdListInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,i){i.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(){function e(){n=!0}var n=!1;return{disableInkRipple:e,$get:["$injector",function(e){function i(i,r,a){return n||r.controller("mdNoInk")?t.noop:e.instantiate(o,{$scope:i,$element:r,rippleOptions:a})}return{attach:i}}]}}function o(e,n,o,i,r,a,d){this.$window=i,this.$timeout=r,this.$mdUtil=a,this.$mdColorUtil=d,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.color),this.bindEvents()}function i(e,n){(e.mousedown||e.lastRipple)&&(e.mousedown=!1,e.$mdUtil.nextTick(t.bind(e,n),!1))}function r(){return{controller:t.noop}}t.module("material.core").provider("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",r).directive("mdNoBar",r).directive("mdNoStretch",r);var a=450;e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],o.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil","$mdColorUtil"],o.prototype.color=function(e){function n(){var e=o.options&&o.options.colorElement?o.options.colorElement:[],t=e.length?e[0]:o.$element[0];return t?o.$window.getComputedStyle(t).color:"rgb(0,0,0)"}var o=this;return t.isDefined(e)&&(o._color=o._parseColor(e)),o._color||o._parseColor(o.inkRipple())||o._parseColor(n())},o.prototype.calculateColor=function(){return this.color()},o.prototype._parseColor=function(e,t){t=t||1;var n=this.$mdColorUtil;if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?n.rgbToRgba(e):0===e.indexOf("#")?n.hexToRgba(e):void 0},o.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup touchend",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup)),this.$element.on("touchmove",t.bind(this,this.handleTouchmove))},o.prototype.handleMousedown=function(e){if(!this.mousedown)if(e.hasOwnProperty("originalEvent")&&(e=e.originalEvent),this.mousedown=!0,this.options.center)this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2);else if(e.srcElement!==this.$element[0]){var t=this.$element[0].getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;this.createRipple(n,o)}else this.createRipple(e.offsetX,e.offsetY)},o.prototype.handleMouseup=function(){i(this,this.clearRipples)},o.prototype.handleTouchmove=function(){i(this,this.deleteRipples)},o.prototype.deleteRipples=function(){for(var e=0;e<this.ripples.length;e++)this.ripples[e].remove()},o.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++)this.fadeInComplete(this.ripples[e])},o.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e},o.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null)},o.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&t.isFunction(e.hasAttribute)){if(e.hasAttribute("disabled"))return!1;if("false"===this.inkRipple()||"0"===this.inkRipple())return!1}}while(e=e.parentNode);return!0},o.prototype.inkRipple=function(){return this.$element.attr("md-ink-ripple")},o.prototype.createRipple=function(e,n){function o(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}if(this.isRippleAllowed()){var i=this,r=i.$mdColorUtil,d=t.element('<div class="md-ripple"></div>'),s=this.$element.prop("clientWidth"),c=this.$element.prop("clientHeight"),l=2*Math.max(Math.abs(s-e),e),m=2*Math.max(Math.abs(c-n),n),u=o(this.options.fitRipple,l,m),h=this.calculateColor();d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:r.rgbaToRgb(h),borderColor:r.rgbaToRgb(h)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){i.clearTimeout(),i.mousedown||i.fadeInComplete(d)},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:h}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),i.$timeout(function(){i.clearRipples()},a,!1)},!1)}},o.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e)},o.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);0>n||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e)},a,!1))},o.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null}}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}t.module("material.core").factory("$mdTabInkRipple",e),e.$inject=["$mdInkRipple"]}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100 A200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#ffffff",A200:"#000000",A400:"#303030",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A200 A400 A700"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100 A200",contrastStrongLightColors:"400 500 700"}})}(),function(){function e(e){function o(e,t){return t=t||{},m[e]=a(e,t),b}function i(e,n){return a(e,t.extend({},m[e]||{},n))}function a(e,t){var n=_.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function s(e,n){if(v[e])return v[e];n=n||"default";var o="string"==typeof n?v[n]:n,i=new c(e);return o&&t.forEach(o.colors,function(e,n){i.colors[n]={name:e.name,hues:t.extend({},e.hues)}}),v[e]=i,i}function c(e){function n(e){if(e=0===arguments.length?!0:!!e,e!==o.isDark){o.isDark=e,o.foregroundPalette=o.isDark?p:h,o.foregroundShadow=o.isDark?f:g;var n=o.isDark?M:y,i=o.isDark?y:M;return t.forEach(n,function(e,t){var n=o.colors[t],r=i[t];if(n)for(var a in n.hues)n.hues[a]===r[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=e,o.colors={},o.dark=n,n(!1),$.forEach(function(e){var n=(o.isDark?M:y)[e];o[e+"Palette"]=function(i,r){var a=o.colors[e]={name:i,hues:t.extend({},n,r)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",i).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==_.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",o.name).replace("%3",e).replace("%4",i).replace("%5",_.join(", ")))}),o},o[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been deprecated. Use $mdThemingProviderTheme."+e+"Palette() instead."),o[e+"Palette"].apply(o,t)}})}function u(e,o){function i(e){return e===n||""===e?!0:a.THEMES[e]!==n}function r(n,r){function a(){return s=r.controller("mdTheme")||n.data("$mdThemeController"),s&&s.$mdTheme||("default"==E?"":E)}function d(e){if(e){i(e)||o.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var t=n.data("$mdThemeName");t&&n.removeClass("md-"+t+"-theme"),n.addClass("md-"+e+"-theme"),n.data("$mdThemeName",e),s&&n.data("$mdThemeController",s)}}var s=r.controller("mdTheme"),c=n.attr("md-theme-watch"),l=(C||t.isDefined(c))&&"false"!=c;d(a()),n.on("$destroy",l?e.$watch(a,d):t.noop)}var a=function(t,o){o===n&&(o=t,t=n),t===n&&(t=e),a.inherit(o,o)};return a.THEMES=t.extend({},v),a.PALETTES=t.extend({},m),a.inherit=r,a.registered=i,a.defaultTheme=function(){return E},a.generateTheme=function(e){d(v[e],e,T)},a}m={};var b,v={},E="default",C=!1;return t.extend(m,e),u.$inject=["$rootScope","$log"],b={definePalette:o,extendPalette:i,theme:s,disableTheming:function(){w=!0},registerStyles:function(e){k.push(e)},setNonce:function(e){T=e},setDefaultTheme:function(e){E=e},alwaysWatchTheme:function(e){C=e},generateThemesOnDemand:function(e){A=e},$get:u,_LIGHT_DEFAULT_HUES:y,_DARK_DEFAULT_HUES:M,_PALETTES:m,_THEMES:v,_parseRules:r,_rgba:l}}function o(e,n,o){return{priority:100,link:{pre:function(i,r,a){var d=[],s={registerChanges:function(e,n){return n&&(e=t.bind(n,e)),d.push(e),function(){var t=d.indexOf(e);t>-1&&d.splice(t,1)}},$setTheme:function(t){e.registered(t)||o.warn("attempted to use unregistered theme '"+t+"'"),s.$mdTheme=t,d.forEach(function(e){e()})}};r.data("$mdThemeController",s),s.$setTheme(n(a.mdTheme)(i)),a.$observe("mdTheme",s.$setTheme)}}}}function i(e){return e}function r(e,n,o){s(e,n),o=o.replace(/THEME_NAME/g,e.name);var i=[],r=e.colors[n],a=new RegExp(".md-"+e.name+"-theme","g"),d=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),c=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow|default)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,u=m[r.name];return o=o.replace(c,function(t,n,o,i,r){return"foreground"===n?"shadow"==o?e.foregroundShadow:e.foregroundPalette[o]||e.foregroundPalette[1]:(0!==o.indexOf("hue")&&"default"!==o||(o=e.colors[n].hues[o]),l((m[e.colors[n].name][o]||"")[r?"contrast":"value"],i))}),t.forEach(r.hues,function(t,n){var r=o.replace(d,function(e,n,o,i,r){return l(u[t]["color"===i?"value":"contrast"],r)});if("default"!==n&&(r=r.replace(a,".md-"+e.name+"-theme.md-"+n)),"default"==e.name){var s=/((?:(?:(?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)+) )?)((?:(?:\w|\.|-)+)?)\.md-default-theme((?: |>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;r=r.replace(s,function(e,t,n,o){return e+", "+t+n+o})}i.push(r)}),i}function a(e,n){function o(e,n){var o=e.contrastDefaultColor,i=e.contrastLightColors||[],r=e.contrastStrongLightColors||[],a=e.contrastDarkColors||[];"string"==typeof i&&(i=i.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof a&&(a=a.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,t.forEach(e,function(n,d){function s(){return"light"===o?a.indexOf(d)>-1?b:r.indexOf(d)>-1?E:v:i.indexOf(d)>-1?r.indexOf(d)>-1?E:v:b}if(!t.isObject(n)){var l=c(n);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",n).replace("%2",e.name).replace("%3",d));e[d]={value:l,contrast:s()}}})}var i=document.head,r=i?i.firstElementChild:null,a=!w&&e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";if(a+=k.join(""),r&&0!==a.length){t.forEach(m,o);var s=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),l=new RegExp("md-("+$.join("|")+")","g");$.forEach(function(e){x[e]=""}),s.forEach(function(e){for(var t,n=(e.match(l),0);t=$[n];n++)if(e.indexOf(".md-"+t)>-1)return x[t]+=e;for(n=0;t=$[n];n++)if(e.indexOf(t)>-1)return x[t]+=e;return x[C]+=e}),A||t.forEach(n.THEMES,function(e){u[e.name]||"default"!==n.defaultTheme()&&"default"===e.name||d(e,e.name,T)})}}function d(e,t,n){var o=document.head,i=o?o.firstElementChild:null;u[t]||($.forEach(function(t){for(var a=r(e,t,x[t]);a.length;){var d=a.shift();if(d){var s=document.createElement("style");s.setAttribute("md-theme-style",""),n&&s.setAttribute("nonce",n),s.appendChild(document.createTextNode(d)),o.insertBefore(s,i)}}}),u[e.name]=!0)}function s(e,t){if(!m[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(m).join(", ")))}function c(e){if(t.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var n=e.length/3,o=e.substr(0,n),i=e.substr(n,n),r=e.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),[parseInt(o,16),parseInt(i,16),parseInt(r,16)]}}function l(e,n){return e?(4==e.length&&(e=t.copy(e),n?e.pop():n=e.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+e.join(",")+","+n+")":"rgb("+e.join(",")+")"):"rgb('0,0,0')"}t.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",o).directive("mdThemable",i).provider("$mdTheming",e).run(a);var m,u={},h={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.38)",4:"rgba(0,0,0,0.12)"},p={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.5)",4:"rgba(255,255,255,0.12)"},f="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",g="",b=c("rgba(0,0,0,0.87)"),v=c("rgba(255,255,255,0.87)"),E=c("rgb(255,255,255)"),$=["primary","accent","warn","background"],C="primary",y={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"50","hue-1":"A100","hue-2":"100","hue-3":"300"}},M={background:{"default":"A400","hue-1":"800","hue-2":"900","hue-3":"A200"}};$.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};y[e]||(y[e]=t),M[e]||(M[e]=t)});var _=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],A=!1,T=null,w=!1,k=[];e.$inject=["$mdColorPalette"],o.$inject=["$mdTheming","$interpolate","$log"],i.$inject=["$mdTheming"];var x={};a.$inject=["$injector","$mdTheming"]}(),function(){function n(n,o,i,r,a){var d;return d={translate3d:function(e,t,n,o){function i(n){return a(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass}).start()}return a(e,{from:t,to:n,addClass:o.transitionInClass,removeClass:o.transitionOutClass}).start().then(function(){return i})},waitTransitionEnd:function(t,n){var a=3e3;return o(function(o,d){function s(e){e&&e.target!==t[0]||(e&&i.cancel(l),t.off(r.CSS.TRANSITIONEND,s),o())}function c(n){return n=n||e.getComputedStyle(t[0]),"0s"==n.transitionDuration||!n.transition&&!n.transitionProperty}n=n||{},c(n.cachedTransitionStyles)&&(a=0);var l=i(s,n.timeout||a);t.on(r.CSS.TRANSITIONEND,s)})},calculateTransformValues:function(e,t){function n(){var t=e?e.parent():null,n=t?t.parent():null;return n?d.clientRect(n):null}var o=t.element,i=t.bounds;if(o||i){var r=o?d.clientRect(o)||n():d.copyRect(i),a=d.copyRect(e[0].getBoundingClientRect()),s=d.centerPointFor(a),c=d.centerPointFor(r);return{centerX:c.x-s.x,centerY:c.y-s.y,scaleX:Math.round(100*Math.min(.5,r.width/a.width))/100,scaleY:Math.round(100*Math.min(.5,r.height/a.height))/100}}return{centerX:0,centerY:0,scaleX:.5,scaleY:.5}},calculateZoomToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},calculateSlideToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},toCss:function(e){function n(e,n,i){t.forEach(n.split(" "),function(e){o[e]=i})}var o={},i="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(i.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,r.CSS.TRANSITION,e);break;case"transform":n(a,r.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,r.CSS.TRANSFORM_ORIGIN,e);break;case"font-size":o["font-size"]=e}}),o},toTransformCss:function(e,n,o){var i={};return t.forEach(r.CSS.TRANSFORM.split(" "),function(t){i[t]=e}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",i.transition=o),i},copyRect:function(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t])}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null},clientRect:function(e){var n=t.element(e)[0].getBoundingClientRect(),o=function(e){return e&&e.width>0&&e.height>0};return o(n)?d.copyRect(n):null},centerPointFor:function(e){return e?{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}:{x:0,y:0}}}}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(e,t,o,i){return function(r){return n(r,e,t,o,i)}}])}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()})}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),i=o?"-webkit-":"",r=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1}}],s=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}],c=["$q","$$rAFMutex",function(e,o){function i(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0}var r=0,a=1,d=2;return i.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===d?e():this._doneCallbacks.push(e)},progress:t.noop,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===r&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e)}))},_resolve:function(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=d)}},i}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",c).factory("$$rAFMutex",s).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout","$animate",function(t,d,s,c,l,m,u){function h(o,d){var c=[],l=C(o),h=l&&u.enabled(),g=!1,M=!1;h&&(d.transitionStyle&&c.push([i+"transition",d.transitionStyle]),d.keyframeStyle&&c.push([i+"animation",d.keyframeStyle]),d.delay&&c.push([i+"transition-delay",d.delay+"s"]),d.duration&&c.push([i+"transition-duration",d.duration+"s"]),g=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),M=!!d.addClass||!!d.removeClass,y(o,!0));var _=h&&(g||M);E(o,d);var A,T,w=!1;return{close:t.close,start:function(){function t(){return w?void 0:(w=!0,A&&T&&o.off(A,T),p(o,d),v(o,d),n(c,function(t){l.style[e(t[0])]=""}),u.complete(!0),u)}var u=new s;return b(function(){if(y(o,!1),!_)return t();n(c,function(t){var n=t[0],o=t[1];l.style[e(n)]=o}),p(o,d);var s=f(o);if(0===s.duration)return t();var u=[];d.easing&&(s.transitionDuration&&u.push([i+"transition-timing-function",d.easing]),s.animationDuration&&u.push([i+"animation-timing-function",d.easing])),d.delay&&s.animationDelay&&u.push([i+"animation-delay",d.delay+"s"]),d.duration&&s.animationDuration&&u.push([i+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];l.style[e(n)]=o,c.push(t)});var h=s.delay,g=1e3*h,b=s.duration,v=1e3*b,E=Date.now();A=[],s.transitionDuration&&A.push(r),s.animationDuration&&A.push(a),A=A.join(" "),T=function(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),i=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-E,0)>=g&&i>=b&&t()},o.on(A,T),$(o,d),m(t,g+1.5*v,!1)}),u}}}function p(e,t){t.addClass&&(l.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(l.removeClass(e,t.removeClass),t.removeClass=null)}function f(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e}var i=C(e),r=t.getComputedStyle(i),a=g(r[n("transitionDuration")]),d=g(r[n("animationDuration")]),s=g(r[n("transitionDelay")]),c=g(r[n("animationDelay")]);d*=parseInt(r[n("animationIterationCount")],10)||1;var l=Math.max(d,a),m=Math.max(c,s);return{duration:l,delay:m,animationDuration:d,transitionDuration:a,animationDelay:c,transitionDelay:s}}function g(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function b(e){M&&M(),_.push(e),M=d(function(){M=null;for(var e=c(),t=0;t<_.length;t++)_[t](e);_.length=0})}function v(e,t){E(e,t),$(e,t)}function E(e,t){t.from&&(e.css(t.from),t.from=null)}function $(e,t){t.to&&(e.css(t.to),t.to=null)}function C(e){for(var t=0;t<e.length;t++)if(1===e[t].nodeType)return e[t]}function y(t,n){var o=C(t),r=e(i+"transition-delay");o.style[r]=n?"-9999s":""}var M,_=[];return h}])}()}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$mdUtil","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,t,n,o,i,r,a,d){function s(t,s,l){n.pin&&n.pin(s,o),a(function(){var t=i.getComputedStyle(d[0].body);if("fixed"==t.position){var n=parseInt(t.height,10)+Math.abs(parseInt(t.top,10));s.css({height:n+"px"})}var o=s.parent()[0];if(o){"BODY"==o.nodeName&&s.css({position:"fixed"});var a=i.getComputedStyle(o);"static"==a.position&&r.warn(c)}s.parent().length&&e.inherit(s,s.parent())})}var c="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";
return{restrict:"E",link:s}}])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e,n,r,a,d,s,c){function l(o,i,c,l){i=r.extractElementByName(i,"md-bottom-sheet"),i.attr("tabindex","-1"),c.disableBackdrop||(h=r.createBackdrop(o,"_md-bottom-sheet-backdrop md-opaque"),h[0].tabIndex=-1,c.clickOutsideToClose&&h.on("click",function(){r.nextTick(d.cancel,!0)}),a.inherit(h,c.parent),e.enter(h,c.parent,null));var m=new u(i,c.parent);return c.bottomSheet=m,a.inherit(m.element,c.parent),c.disableParentScroll&&(c.restoreScroll=r.disableScrollAround(m.element,c.parent)),e.enter(m.element,c.parent,h).then(function(){var e=r.findFocusTarget(i)||t.element(i[0].querySelector("button")||i[0].querySelector("a")||i[0].querySelector(r.prefixer("ng-click",!0)))||h;c.escapeToClose&&(c.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&r.nextTick(d.cancel,!0)},s.on("keyup",c.rootElementKeyupCallback),e&&e.focus())})}function m(t,n,o){var i=o.bottomSheet;return o.disableBackdrop||e.leave(h),e.leave(i.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),i.cleanup()})}function u(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function s(t){var o=t.pointer.distanceY;5>o&&(o=Math.max(-i,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(i+o)+"px,0)")}function l(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var i=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(i/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),r.nextTick(d.cancel,!0)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=c.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",s).on("$md.dragend",l),{element:e,cleanup:function(){m(),t.off("$md.dragstart",a),t.off("$md.drag",s),t.off("$md.dragend",l)}}}var h;return{themable:!0,onShow:l,onRemove:m,disableBackdrop:!1,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}var o=.5,i=80;return n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n})}t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n),e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e){return{restrict:"E",link:function(t,n){e(n)}}}function n(e,n,o,i){function r(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){if(r(t))return'<a class="md-button" ng-transclude></a>';var n="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+n+'" ng-transclude></button>'}function d(a,d,s){n(d),e.attach(a,d),o.expectWithText(d,"aria-label"),r(s)&&t.isDefined(s.ngDisabled)&&a.$watch(s.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){s.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),d.hasClass("md-no-focus")||(a.mouseActive=!1,d.on("mousedown",function(){a.mouseActive=!0,i(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(e){d.removeClass("md-focused")}))}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}t.module("material.components.button",["material.core"]).directive("mdButton",n).directive("a",e),e.$inject=["$mdTheming"],n.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$timeout"]}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){n.addClass("_md"),e(n)}}}t.module("material.components.card",["material.core"]).directive("mdCard",e),e.$inject=["$mdTheming"]}(),function(){function e(e,n,o,i,r,a){function d(d,c){var l=d.children(),m=r.parseAttributeBoolean(c.mdIndeterminate);return c.$set("tabindex",c.tabindex||"0"),c.$set("type","checkbox"),c.$set("role",c.type),d.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation()}),l.on("focus",function(){d.focus()}),function(d,c,l,u){function h(e,t,n){l[e]&&d.$watch(l[e],function(e){n[e]&&c.attr(t,n[e])})}function p(e){var t=e.which||e.keyCode;t!==o.KEY_CODE.SPACE&&t!==o.KEY_CODE.ENTER||(e.preventDefault(),c.hasClass("md-focused")||c.addClass("md-focused"),f(e))}function f(e){c[0].hasAttribute("disabled")||d.skipToggle||d.$apply(function(){var t=l.ngChecked?l.checked:!u.$viewValue;u.$setViewValue(t,e&&e.type),u.$render()})}function g(){u.$viewValue&&!v?c.addClass(s):c.removeClass(s)}function b(e){v=e!==!1,v&&c.attr("aria-checked","mixed"),c.toggleClass("md-indeterminate",v)}var v;u=u||r.fakeNgModel(),i(c),m&&(b(),d.$watch(l.mdIndeterminate,b)),l.ngChecked&&d.$watch(d.$eval.bind(d,l.ngChecked),u.$setViewValue.bind(u)),h("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),n.expectWithText(c,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},l,[u]),d.mouseActive=!1,c.on("click",f).on("keypress",p).on("mousedown",function(){d.mouseActive=!0,a(function(){d.mouseActive=!1},100)}).on("focus",function(){d.mouseActive===!1&&c.addClass("md-focused")}).on("blur",function(){c.removeClass("md-focused")}),u.$render=g}}e=e[0];var s="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="_md-container" md-ink-ripple md-ink-ripple-checkbox><div class="_md-icon"></div></div><div ng-transclude class="_md-label"></div>',compile:d}}t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e),e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"]}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){!function(){function e(e,n,o){function i(e,t){try{t&&e.css(s(t))}catch(n){o.error(n.message)}}function a(e){var t=l(e);return d(t)}function d(t,o){o=o||!1;var i=e.PALETTES[t.palette][t.hue];return i=o?i.contrast:i.value,n.supplant("rgba( {0}, {1}, {2}, {3} )",[i[0],i[1],i[2],i[3]||t.opacity])}function s(e){var n={},o=e.hasOwnProperty("color");return t.forEach(e,function(e,t){var i=l(e),r=t.indexOf("background")>-1;n[t]=d(i),r&&!o&&(n.color=d(i,!0))}),n}function c(n){return t.isDefined(e.THEMES[n.split("-")[0]])}function l(n){var o=n.split("-"),i=t.isDefined(e.THEMES[o[0]]),r=i?o.splice(0,1)[0]:e.defaultTheme();return{theme:r,palette:m(o,r),hue:u(o,r),opacity:o[2]||1}}function m(t,o){var i=t.length>1&&-1!==r.indexOf(t[1]),a=t[0].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(i&&(a=t[0]+"-"+t.splice(1,1)),-1===r.indexOf(a)){var d=e.THEMES[o].colors[a];if(!d)throw new Error(n.supplant("mdColors: couldn't find '{palette}' in the palettes.",{palette:a}));a=d.name}return a}function u(t,o){var i=e.THEMES[o].colors;if("hue"===t[1]){var r=parseInt(t.splice(2,1)[0],10);if(1>r||r>3)throw new Error(n.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'",{hueNumber:r}));if(t[1]="hue-"+r,!(t[0]in i))throw new Error(n.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'",{availableThemes:Object.keys(i).join(", "),usedTheme:t[0]}));return i[t[0]].hues[t[1]]}return t[1]||i[t[0]in i?t[0]:"primary"].hues["default"]}return r=r||Object.keys(e.PALETTES),{applyThemeColors:i,getThemeColor:a,hasTheme:c}}function o(e,n,o,r){return{restrict:"A",require:["^?mdTheme"],compile:function(a,d){function s(){var e=d.mdColors,o=e.indexOf("::")>-1,r=o?!0:i.test(d.mdColors);d.mdColors=e.replace("::","");var a=t.isDefined(d.mdColorsWatch);return o||r?!1:a?n.parseAttributeBoolean(d.mdColorsWatch):!0}var c=s();return function(n,i,a,d){var s=d[0],l={},m=function(t){"string"!=typeof t&&(t=""),a.mdColors||(a.mdColors="{}");var o=r(a.mdColors)(n);return s&&Object.keys(o).forEach(function(n){var i=o[n];e.hasTheme(i)||(o[n]=(t||s.$mdTheme)+"-"+i)}),u(o),o},u=function(e){if(!t.equals(e,l)){var n=Object.keys(l);l.background&&!n.color&&n.push("color"),n.forEach(function(e){i.css(e,"")})}l=e},h=t.noop;s&&(h=s.registerChanges(function(t){e.applyThemeColors(i,m(t))})),n.$on("$destroy",function(){h()});try{c?n.$watch(m,t.bind(this,e.applyThemeColors,i),!0):e.applyThemeColors(i,m())}catch(p){o.error(p.message)}}}}}var i=/^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,r=n;t.module("material.components.colors",["material.core"]).directive("mdColors",o).service("$mdColors",e),e.$inject=["$mdTheming","$mdUtil","$log"],o.$inject=["$mdColors","$mdUtil","$log","$parse"]}()}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o){o.addClass("_md"),o.addClass("md-no-flicker"),e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}t.module("material.components.content",["material.core"]).directive("mdContent",e),e.$inject=["$mdTheming"]}(),function(){function e(e,n,o){return{restrict:"E",link:function(i,r){r.addClass("_md"),n(r),e(function(){function e(){r.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight)}var n,a=r[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),i.$on("$destroy",function(){o.destroy(r)})})}}}function o(e){function o(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="_md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="_md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>",'    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">','      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">',"    </md-input-container>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type===\'alert\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function(){var n="prompt"==this.$type;n&&this.initialValue&&(this.result=this.initialValue),this.hide=function(){e.hide(n?this.result:!0)},this.abort=function(){e.cancel()},this.keypress=function(n){n.keyCode===t.KEY_CODE.ENTER&&e.hide(this.result)}},controllerAs:"dialog",bindToController:!0}}function i(e,o,i,d,s,c,l,m,u,h,p){function f(e){E(e)}function g(e,t,n,o){if(o){if(o.mdHtmlContent=o.htmlContent||n.htmlContent||"",o.mdTextContent=o.textContent||n.textContent||o.content||n.content||"",o.mdHtmlContent&&!h.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(o.mdHtmlContent&&o.mdTextContent)throw Error("md-dialog cannot have both `htmlContent` and `textContent`")}}function b(e,n,o,r){function a(){n[0].querySelector(".md-actions")&&u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.")}function d(){function e(){var e=n[0].querySelector(".dialog-close");if(!e){var o=n[0].querySelectorAll(".md-actions button, md-dialog-actions button");e=o[o.length-1]}return t.element(e)}if(o.focusOnOpen){var r=i.findFocusTarget(n)||e();r.focus()}}if(t.element(c[0].body).addClass("md-dialog-is-showing"),o.contentElement){var s=o.contentElement;t.isString(s)?(s=document.querySelector(s),o.elementInsertionSibling=s.nextElementSibling,o.elementInsertionParent=s.parentNode):(s=s[0]||s,document.contains(s)&&(o.elementInsertionSibling=s.nextElementSibling,o.elementInsertionParent=s.parentNode)),o.elementInsertionEntry=s,n=t.element(s)}return $(o),M(n.find("md-dialog"),o),y(e,n,o),T(n,o).then(function(){C(n,o),_(n,o),a(),d()})}function v(e,n,o){function i(){return w(n,o)}function d(){o.contentElement&&(o.reverseContainerStretch(),o.elementInsertionParent?o.elementInsertionSibling?o.elementInsertionParent.insertBefore(o.elementInsertionEntry,o.elementInsertionSibling):o.elementInsertionParent.appendChild(o.elementInsertionEntry):o.elementInsertionEntry.parentNode.removeChild(o.elementInsertionEntry))}function s(){t.element(c[0].body).removeClass("md-dialog-is-showing"),o.contentElement?d():n.remove(),o.$destroy||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),r&&r.parentNode&&r.parentNode.removeChild(r),a&&a.parentNode&&a.parentNode.removeChild(a),o.$destroy?s():i().then(s)}function E(e){if(!e.theme&&(e.theme=p.defaultTheme(),e.targetEvent&&e.targetEvent.target)){var n=t.element(e.targetEvent.target);e.theme=(n.controller("mdTheme")||{}).$mdTheme||e.theme}}function $(e){function o(e,o){var i=t.element(e||{});if(i&&i.length){var r={top:0,left:0,height:0,width:0},a=t.isFunction(i[0].getBoundingClientRect);return t.extend(o||{},{element:a?i:n,bounds:a?i[0].getBoundingClientRect():t.extend({},r,i[0]),focus:t.bind(i,i.focus)})}}function i(e,n){return t.isString(e)&&(e=c[0].querySelector(e)),t.element(e||n)}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=i(e.parent,m),e.closeTo=o(i(e.closeTo)),e.openFrom=o(i(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin))}function C(n,o){var r=t.element(l),a=i.debounce(function(){A(n,o)},60),s=[],c=function(){var t="alert"==o.$type?e.hide:e.cancel;i.nextTick(t,!0)};if(o.escapeToClose){var m=o.parent,u=function(e){e.keyCode===d.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),c())};n.on("keydown",u),m.on("keydown",u),s.push(function(){n.off("keydown",u),m.off("keydown",u)})}if(r.on("resize",a),s.push(function(){r.off("resize",a)}),o.clickOutsideToClose){var h,p=n,f=function(e){h=e.target},g=function(e){h===p[0]&&e.target===p[0]&&(e.stopPropagation(),e.preventDefault(),c())};p.on("mousedown",f),p.on("mouseup",g),s.push(function(){p.off("mousedown",f),p.off("mouseup",g)})}o.deactivateListeners=function(){s.forEach(function(e){e()}),o.deactivateListeners=null}}function y(e,t,n){n.disableParentScroll&&(n.restoreScroll=i.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=i.createBackdrop(e,"_md-dialog-backdrop md-opaque"),s.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():s.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function M(e,t){var n="alert"===t.$type?"alertdialog":"dialog",d=e.find("md-dialog-content"),s=e.attr("id"),c="dialogContent_"+(s||i.nextUid());e.attr({role:n,tabIndex:"-1"}),0===d.length&&(d=e,s&&(c=s)),d.attr("id",c),e.attr("aria-describedby",c),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=d.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")}),r=document.createElement("div"),r.classList.add("_md-dialog-focus-trap"),r.tabIndex=0,a=r.cloneNode(!1);var l=function(){e.focus()};r.addEventListener("focus",l),a.addEventListener("focus",l),e[0].parentNode.insertBefore(r,e[0]),e.after(a)}function _(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,i=0;i<t.length;i++)e===t[i]||k(t[i],["SCRIPT","STYLE"])||t[i].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function A(e,t){var n="fixed"==l.getComputedStyle(c[0].body).position,o=t.backdrop?l.getComputedStyle(t.backdrop[0]):null,r=o?Math.min(c[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0,a={top:e.css("top"),height:e.css("height")};return e.css({top:(n?i.scrollTop(t.parent):0)+"px",height:r?r+"px":"100%"}),function(){e.css(a)}}function T(e,t){t.parent.append(e),t.reverseContainerStretch=A(e,t);var n=e.find("md-dialog"),o=i.dom.animator,r=o.calculateZoomToOrigin,a={transitionInClass:"_md-transition-in",transitionOutClass:"_md-transition-out"},d=o.toTransformCss(r(n,t.openFrom||t.origin)),s=o.toTransformCss("");return t.fullscreen&&n.addClass("md-dialog-fullscreen"),o.translate3d(n,d,s,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(a={transitionInClass:"_md-transition-out",transitionOutClass:"_md-transition-in"},d=s,s=o.toTransformCss(r(n,t.closeTo)),o.translate3d(n,d,s,a)):e(s=o.toTransformCss(r(n,t.origin)))},t.clearAnimate=function(){return delete t.clearAnimate,o.translate3d(n,s,o.toTransformCss(""),{})},!0})}function w(e,t){return t.reverseAnimate().then(function(){t.contentElement&&t.clearAnimate()})}function k(e,t){return-1!==t.indexOf(e.nodeName)?!0:void 0}return{hasBackdrop:!0,isolateScope:!0,onCompiling:f,onShow:b,onShowing:g,onRemove:v,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,contentElement:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||""}return'<div class="md-dialog-container" tabindex="-1">'+n(e)+"</div>"}}}var r,a;return o.$inject=["$mdDialog","$mdConstant"],i.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector","$mdTheming"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen","contentElement"],options:i}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o}).addPreset("prompt",{methods:["title","htmlContent","textContent","initialValue","content","placeholder","ariaLabel","ok","cancel","theme","css"],options:o})}t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",o),e.$inject=["$$rAF","$mdTheming","$mdDialog"],o.$inject=["$$interimElementProvider"]}(),function(){t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){function e(e){return{restrict:"E",link:e}}t.module("material.components.divider",["material.core"]).directive("mdDivider",e),e.$inject=["$mdTheming"]}(),function(){!function(){function e(e){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function(t,n){var o=t.children(),i=e.prefixer().hasAttribute(o,"ng-repeat");i?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">')}}}t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e),e.$inject=["$mdUtil"]}()}(),function(){!function(){function e(e,n,o,i,r,a){function d(){S.direction=S.direction||"down",S.isOpen=S.isOpen||!1,l(),n.addClass("_md-animations-waiting")}function s(){var o=["click","focusin","focusout"];t.forEach(o,function(e){n.on(e,c)}),e.$on("$destroy",function(){t.forEach(o,function(e){n.off(e,c)}),p()})}function c(e){"click"==e.type&&w(e),"focusout"!=e.type||D||(D=a(function(){S.close()},100,!1)),"focusin"==e.type&&D&&(a.cancel(D),D=null)}function l(){S.currentActionIndex=-1}function m(){e.$watch("vm.direction",function(e,t){o.removeClass(n,"md-"+t),o.addClass(n,"md-"+e),l()});var t,i;e.$watch("vm.isOpen",function(e){l(),t&&i||(t=k(),i=x()),e?h():p();var r=e?"md-is-open":"",a=e?"":"md-is-open";t.attr("aria-haspopup",!0),t.attr("aria-expanded",e),i.attr("aria-hidden",!e),o.setClass(n,r,a)})}function u(){n[0].scrollHeight>0?o.addClass(n,"_md-animations-ready").then(function(){n.removeClass("_md-animations-waiting")}):10>N&&(a(u,100),N+=1)}function h(){n.on("keydown",g),i.nextTick(function(){t.element(document).on("click touchend",f)})}function p(){n.off("keydown",g),t.element(document).off("click touchend",f)}function f(e){if(e.target){var t=i.getClosest(e.target,"md-fab-trigger"),n=i.getClosest(e.target,"md-fab-actions");t||n||S.close()}}function g(e){switch(e.which){case r.KEY_CODE.ESCAPE:return S.close(),e.preventDefault(),!1;case r.KEY_CODE.LEFT_ARROW:return C(e),!1;case r.KEY_CODE.UP_ARROW:return y(e),!1;case r.KEY_CODE.RIGHT_ARROW:return M(e),!1;case r.KEY_CODE.DOWN_ARROW:return _(e),!1}}function b(e){E(e,-1)}function v(e){E(e,1)}function E(e,n){var o=$();S.currentActionIndex=S.currentActionIndex+n,S.currentActionIndex=Math.min(o.length-1,S.currentActionIndex),S.currentActionIndex=Math.max(0,S.currentActionIndex);var i=t.element(o[S.currentActionIndex]).children()[0];t.element(i).attr("tabindex",0),i.focus(),e.preventDefault(),e.stopImmediatePropagation()}function $(){var e=x()[0].querySelectorAll(".md-fab-action-item");return t.forEach(e,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1)}),e}function C(e){"left"===S.direction?v(e):b(e)}function y(e){"down"===S.direction?b(e):v(e)}function M(e){"left"===S.direction?b(e):v(e)}function _(e){"up"===S.direction?b(e):v(e)}function A(e){return i.getClosest(e,"md-fab-trigger")}function T(e){return i.getClosest(e,"md-fab-actions")}function w(e){A(e.target)&&S.toggle(),T(e.target)&&S.close()}function k(){return n.find("md-fab-trigger")}function x(){return n.find("md-fab-actions")}var S=this;S.open=function(){e.$evalAsync("vm.isOpen = true")},S.close=function(){e.$evalAsync("vm.isOpen = false"),n.find("md-fab-trigger")[0].focus()},S.toggle=function(){e.$evalAsync("vm.isOpen = !vm.isOpen")},d(),s(),m();var N=0;u();var D}t.module("material.components.fabShared",["material.core"]).controller("MdFabController",e),e.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant","$timeout"]}()}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="_md-css-variables"></div>')}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(n){function o(e){n(e,r,!1)}function i(n){if(!n.hasClass("_md-animations-waiting")||n.hasClass("_md-animations-ready")){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=r.length-t+s}),a.style.zIndex=s+r.length+1,i.isOpen||t.forEach(r,function(e,t){var n,o,r=e.style,d=(a.clientHeight-e.clientHeight)/2,s=(a.clientWidth-e.clientWidth)/2;switch(i.direction){case"up":n=e.scrollHeight*(t+1)+d,o="Y";break;case"down":n=-(e.scrollHeight*(t+1)+d),o="Y";break;case"left":n=e.scrollWidth*(t+1)+s,o="X";break;case"right":n=-(e.scrollWidth*(t+1)+s),o="X"}var c="translate"+o+"("+n+"px)";r.transform=r.webkitTransform=c})}}return{addClass:function(e,t,n){e.hasClass("md-fling")?(i(e),o(n)):n()},removeClass:function(e,t,n){i(e),o(n)}}}function i(n){function o(e){n(e,r,!1)}function i(n){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style,o=t*a;n.opacity=i.isOpen?1:0,n.transform=n.webkitTransform=i.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(i.isOpen?o:r.length-o)+"ms",n.zIndex=r.length-t+s})}var a=65;return{addClass:function(e,t,n){i(e),o(n)},removeClass:function(e,t,n){i(e),o(n)}}}var r=300;t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",i).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",i),o.$inject=["$timeout"],i.$inject=["$timeout"]}()}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="_md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="_md-fab-toolbar-wrapper">  <div class="_md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(){function n(n,o,i){if(o){var r=n[0],a=n.controller("mdFabToolbar"),d=r.querySelector("._md-fab-toolbar-background"),s=r.querySelector("md-fab-trigger button"),c=r.querySelector("md-toolbar"),l=r.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(s&&d){var u=e.getComputedStyle(s).getPropertyValue("background-color"),h=r.offsetWidth,p=(r.offsetHeight,2*(h/s.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=h+"px",a.isOpen?(c.style.pointerEvents="inherit",d.style.width=s.offsetWidth+"px",d.style.height=s.offsetHeight+"px",d.style.transform="scale("+p+")",d.style.transitionDelay="0ms",l&&(l.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(c.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",l&&(l.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms"}))}}}return{addClass:function(e,t,o){n(e,t,o),o()},removeClass:function(e,t,o){n(e,t,o),o()}}}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o)}()}(),function(){function e(e,o,i,r){function a(n,a,d,s){function c(){for(var e in o.MEDIA)r(e),r.getQuery(o.MEDIA[e]).addListener(M);return r.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m)}function l(){s.layoutDelegate=t.noop,_();for(var e in o.MEDIA)r.getQuery(o.MEDIA[e]).removeListener(M)}function m(e){null==e?s.invalidateLayout():r(e)&&s.invalidateLayout()}function u(e){var o=g(),r={tileSpans:b(o),colCount:v(),rowMode:C(),rowHeight:$(),gutter:E()};if(e||!t.equals(r,A)){var d=i(r.colCount,r.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(r.colCount,n,r.gutter,r.rowMode,r.rowHeight)},tiles:e.map(function(e,i){return{element:t.element(o[i]),style:p(e.position,e.spans,r.colCount,n,r.gutter,r.rowMode,r.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),A=r}}function h(e){return T+e+w}function p(e,t,n,o,i,r,a){var d=1/n*100,s=(n-1)/n,c=k({share:d,gutterShare:s,gutter:i}),l={left:x({unit:c,offset:e.col,gutter:i}),width:S({unit:c,span:t.col,gutter:i}),paddingTop:"",marginTop:"",top:"",height:""};switch(r){case"fixed":l.top=x({unit:a,offset:e.row,gutter:i}),l.height=S({unit:a,span:t.row,gutter:i});break;case"ratio":var m=d/a,u=k({share:m,gutterShare:s,gutter:i});l.paddingTop=S({unit:u,span:t.row,gutter:i}),l.marginTop=x({unit:u,offset:e.row,gutter:i});break;case"fit":var h=(o-1)/o,m=1/o*100,u=k({share:m,gutterShare:h,gutter:i});l.top=x({unit:u,offset:e.row,gutter:i}),l.height=S({unit:u,span:t.row,gutter:i})}return l}function f(e,t,n,o,i){var r={};switch(o){case"fixed":r.height=S({unit:i,span:t,gutter:n}),r.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,s=d*(1/i),c=k({share:s,gutterShare:a,gutter:n});r.height="",r.paddingBottom=S({unit:c,span:t,gutter:n});break;case"fit":}return r}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed})}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(r.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(r.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function v(){var e=parseInt(r.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function E(){return y(r.getResponsiveAttribute(d,"md-gutter")||1)}function $(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";switch(C()){case"fixed":return y(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function C(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";return"fit"==e?"fit":-1!==e.indexOf(":")?"ratio":"fixed"}function y(e){return/\D$/.test(e)?e:e+"px"}a.addClass("_md"),a.attr("role","list"),s.layoutDelegate=u;var M=t.bind(s,s.invalidateLayout),_=c();n.$on("$destroy",l);var A,T=e.startSymbol(),w=e.endSymbol(),k=e(h("share")+"% - ("+h("gutter")+" * "+h("gutterShare")+")"),x=e("calc(("+h("unit")+" + "+h("gutter")+") * "+h("offset")+")"),S=e("calc(("+h("unit")+") * "+h("span")+" + ("+h("span")+" - 1) * "+h("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,s,c,l;return s=e.time(function(){a=i(t,n)}),o={layoutInfo:function(){return a},map:function(t){return c=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return l=e.time(function(){var e=t||r;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:s,mapTime:c,reflowTime:l,totalTime:s+c+l}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function i(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,l=0;l-a<t.col;)d>=e?o():(a=c.indexOf(0,d),-1!==a&&-1!==(l=r(a+1))?d=l+1:(a=l=0,o()));return i(a,t.col,t.row),d=a+t.col,{col:a,row:s}}function o(){d=0,s++,i(0,e,-1)}function i(e,t,n){for(var o=e;e+t>o;o++)c[o]=Math.max(c[o]+n,0)}function r(e){var t;for(t=e;t<c.length;t++)if(0!==c[t])return t;return t===c.length?t:void 0}function a(){for(var t=[],n=0;e>n;n++)t.push(0);return t}var d=0,s=0,c=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:s+Math.max.apply(Math,c)}}var r=o;return n.animateWith=function(e){r=t.isFunction(e)?e:o},n}function i(e){function n(n,o,i,r){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],i,t.bind(r,r.invalidateLayout));r.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),r.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&r.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function r(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",i).directive("mdGridTileFooter",r).directive("mdGridTileHeader",r).factory("$mdGridLayout",o),e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],n.$inject=["$mdUtil"],n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){
this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}},o.$inject=["$mdUtil"],i.$inject=["$mdMedia"]}(),function(){t.module("material.components.icon",["material.core"])}(),function(){function n(e,t){function n(t,n){e(n);var o=n[0].querySelector(r),i=n[0].querySelector(a);o&&n.addClass("md-icon-left"),i&&n.addClass("md-icon-right")}function o(e,n,o,i){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},r.setInvalid=function(e){e?i.addClass(n,"md-input-invalid"):i.removeClass(n,"md-input-invalid")},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}var i=["INPUT","TEXTAREA","SELECT","MD-SELECT"],r=i.reduce(function(e,t){return e.concat(["md-icon ~ "+t,".md-icon ~ "+t])},[]).join(","),a=i.reduce(function(e,t){return e.concat([t+" ~ md-icon",t+" ~ .md-icon"])},[]).join(",");return o.$inject=["$scope","$element","$attrs","$animate"],{restrict:"E",link:n,controller:o}}function o(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){!o||n.mdNoFloat||t.hasClass("_md-container-ignore")||(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function i(e,n,o,i,r){function a(a,d,s,c){function l(e){return p.setHasValue(!g.$isEmpty(e)),e}function m(){p.label&&s.$observe("required",function(e){p.label.toggleClass("md-required",e&&!v)})}function u(){p.setHasValue(d.val().length>0||(d[0].validity||{}).badInput)}function h(){function o(){d.attr("rows",1).css("height","auto").addClass("md-no-flex");var e=c();if($||($=d.css("padding",0).prop("offsetHeight"),d.css("padding",null)),b&&$&&(e=Math.max(e,$*b)),v&&$){var t=$*v;e>t?(d.attr("md-no-autogrow",""),e=t):d.removeAttr("md-no-autogrow")}$&&d.attr("rows",Math.round(e/$)),d.css("height",e+"px").removeClass("md-no-flex")}function c(){var e=C.offsetHeight,t=C.scrollHeight-e;return e+Math.max(t,0)}function l(t){return e.nextTick(o),t}function m(){if(h&&(h=!1,t.element(n).off("resize",o),E&&E(),d.attr("md-no-autogrow","").off("input",o),f)){var e=g.$formatters.indexOf(l);e>-1&&g.$formatters.splice(e,1)}}function u(){function n(e){e.preventDefault(),u=!0,h=e.clientY,f=parseFloat(d.css("height"))||d.prop("offsetHeight")}function o(e){u&&(e.preventDefault(),m(),g.addClass("md-input-resized"))}function i(t){u&&d.css("height",f+(t.pointer.y-h)-e.scrollTop()+"px")}function c(e){u&&(u=!1,g.removeClass("md-input-resized"))}if(!s.hasOwnProperty("mdNoResize")){var l=t.element('<div class="md-resize-handle"></div>'),u=!1,h=null,f=0,g=p.element,b=r.register(l,"drag",{horizontal:!1});d.after(l),l.on("mousedown",n),g.on("$md.dragstart",o).on("$md.drag",i).on("$md.dragend",c),a.$on("$destroy",function(){l.off("mousedown",n).remove(),g.off("$md.dragstart",o).off("$md.drag",i).off("$md.dragend",c),b(),l=null,g=null,b=null})}}var h=!s.hasOwnProperty("mdNoAutogrow");if(u(),h){var b=s.hasOwnProperty("rows")?parseInt(s.rows):NaN,v=s.hasOwnProperty("maxRows")?parseInt(s.maxRows):NaN,E=a.$on("md-resize-textarea",o),$=null,C=d[0];if(i(function(){e.nextTick(o)},10,!1),d.on("input",o),f&&g.$formatters.push(l),b||d.attr("rows",1),t.element(n).on("resize",o),a.$on("$destroy",m),s.hasOwnProperty("mdDetectHidden")){var y=function(){var e=!1;return function(){var t=0===C.offsetHeight;t===!1&&e===!0&&o(),e=t}}();a.$watch(function(){return e.nextTick(y,!1),!0})}}}var p=c[0],f=!!c[1],g=c[1]||e.fakeNgModel(),b=t.isDefined(s.readonly),v=e.parseAttributeBoolean(s.mdNoAsterisk),E=d[0].tagName.toLowerCase();if(p){if("hidden"===s.type)return void d.attr("aria-hidden","true");if(p.input)throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");p.input=d,m();var $=t.element('<div class="md-errors-spacer">');d.after($),p.label||o.expect(d,"aria-label",s.placeholder),d.addClass("md-input"),d.attr("id")||d.attr("id","input_"+e.nextUid()),"input"===E&&"number"===s.type&&s.min&&s.max&&!s.step?d.attr("step","any"):"textarea"===E&&h(),f||u();var C=p.isErrorGetter||function(){return g.$invalid&&(g.$touched||e.isParentFormSubmitted(d))};a.$watch(C,p.setInvalid),s.ngValue&&s.$observe("value",u),g.$parsers.push(l),g.$formatters.push(l),d.on("input",u),b||d.on("focus",function(t){e.nextTick(function(){p.setFocused(!0)})}).on("blur",function(t){e.nextTick(function(){p.setFocused(!1),u()})}),a.$on("$destroy",function(){p.setFocused(!1),p.setHasValue(!1),p.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:a}}function r(e,n){function o(o,i,r,a){function d(e){return c.parent?(c.text(String(i.val()||e||"").length+" / "+s),e):e}var s,c,l,m=a[0],u=a[1];n.nextTick(function(){l=t.element(u.element[0].querySelector(".md-errors-spacer")),c=t.element('<div class="md-char-counter">'),l.append(c),r.$set("ngTrim","false"),m.$formatters.push(d),m.$viewChangeListeners.push(d),i.on("input keydown keyup",function(){d()}),o.$watch(r.mdMaxlength,function(n){s=n,t.isNumber(n)&&n>0?(c.parent().length||e.enter(c,l),d()):e.leave(c)}),m.$validators["md-maxlength"]=function(e,n){return!t.isNumber(s)||0>s?!0:(e||i.val()||n||"").length<=s}})}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:o}}function a(e){function n(n,o,i,r){if(r){var a=r.element.find("label"),d=r.element.attr("md-no-float");if(a&&a.length||""===d||n.$eval(d))return void r.setHasPlaceholder(!0);if("MD-SELECT"!=o[0].nodeName){var s=t.element('<label ng-click="delegateClick()" tabindex="-1">'+i.placeholder+"</label>");i.$set("placeholder",null),r.element.addClass("md-icon-float").prepend(s),e(s)(n)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:{pre:n}}}function d(e){function t(t,n,o){function i(){a=!0,e(function(){n[0].select(),a=!1},1,!1)}function r(e){a&&e.preventDefault()}if("INPUT"===n[0].nodeName||"TEXTAREA"===n[0].nodeName){var a=!1;n.on("focus",i).on("mouseup",r),t.$on("$destroy",function(){n.off("focus",i).off("mouseup",r)})}}return{restrict:"A",link:t}}function s(){function e(e,n,o,i){i&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==o.mdAutoHide||t(o))&&n.toggleClass("md-auto-hide",!1))}function t(e){return E.some(function(t){return e[t]})}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}function c(e){function t(t){function n(){for(var e=t[0];e=e.parentNode;)if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)return!0;return!1}function o(t){return!!e.getClosest(t,"md-input-container")}function i(e){e.toggleClass("md-input-message-animation",!0)}if(o(t))i(t);else if(n())return function(e,n){o(n)&&i(t)}}return{restrict:"EA",compile:t,priority:100}}function l(e,t){return{addClass:function(n,o,i){var r=v(n);"md-input-invalid"==o&&r.hasClass("md-auto-hide")?h(n,t,e)["finally"](i):i()}}}function m(e,t){return{enter:function(n,o){h(n,t,e)["finally"](o)},leave:function(n,o){p(n,t,e)["finally"](o)},addClass:function(n,o,i){"ng-hide"==o?p(n,t,e)["finally"](i):i()},removeClass:function(n,o,i){"ng-hide"==o?h(n,t,e)["finally"](i):i()}}}function u(e){return{enter:function(t,n){var o=v(t);return o.hasClass("md-auto-hide")?void n():f(t,e)},leave:function(t,n){return g(t,e)}}}function h(e,n,o){var i,r=[],a=v(e);return t.forEach(a.children(),function(e){i=f(t.element(e),n),r.push(i.start())}),o.all(r)}function p(e,n,o){var i,r=[],a=v(e);return t.forEach(a.children(),function(e){i=g(t.element(e),n),r.push(i.start())}),o.all(r)}function f(e,t){var n=e[0].offsetHeight;return t(e,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3})}function g(t,n){var o=t[0].offsetHeight,i=e.getComputedStyle(t[0]);return 0==i.opacity?n(t,{}):n(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-o+"px"},duration:.3})}function b(e){var t=e.controller("mdInputContainer");return t.element}function v(e){var n=b(e);return t.element(n[0].querySelector(".md-input-messages-animation"))}t.module("material.components.input",["material.core"]).directive("mdInputContainer",n).directive("label",o).directive("input",i).directive("textarea",i).directive("mdMaxlength",r).directive("placeholder",a).directive("ngMessages",s).directive("ngMessage",c).directive("ngMessageExp",c).directive("mdSelectOnFocus",d).animation(".md-input-invalid",l).animation(".md-input-messages-animation",m).animation(".md-input-message-animation",u),n.$inject=["$mdTheming","$parse"],i.$inject=["$mdUtil","$window","$mdAria","$timeout","$mdGesture"],r.$inject=["$animate","$mdUtil"],a.$inject=["$compile"],d.$inject=["$timeout"];var E=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"];c.$inject=["$mdUtil"],l.$inject=["$q","$animateCss"],m.$inject=["$q","$animateCss"],u.$inject=["$animateCss"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o,i){var r=["md-checkbox","md-switch","md-menu"];return{restrict:"E",controller:"MdListController",compile:function(a,d){function s(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var i=a.find("p")[0];if(!i)return;e.setAttribute("aria-label","Toggle "+i.textContent)}}function c(){var e=t.element(E),n=e.parent().hasClass("_md-secondary-container")||E.parentNode.firstElementChild!==E,o="left";n&&(o="right"),e.attr("md-position-mode")||e.attr("md-position-mode",o+" target");var i=e.children().eq(0);g(i[0])||i.attr("ng-click","$mdOpenMenu($event)"),i.attr("aria-label")||i.attr("aria-label","Open List Menu")}function l(e){if("div"==e)C=t.element('<div class="_md-no-style _md-list-item-inner">'),C.append(a.contents()),a.addClass("_md-proxy-focus");else{C=t.element('<div class="md-button _md-no-style">   <div class="_md-list-item-inner"></div></div>');var n=t.element('<md-button class="_md-no-style"></md-button>');n[0].setAttribute("aria-label",a[0].textContent),h(a[0],n[0]),a.hasClass("md-no-focus")&&n.addClass("md-no-focus"),C.prepend(n),C.children().eq(1).append(a.contents()),a.addClass("_md-button-wrap")}a[0].setAttribute("tabindex","-1"),a.append(C)}function m(){var e=t.element('<div class="_md-secondary-container">');t.forEach($,function(t){u(t,e)}),C.append(e)}function u(n,o){if(n&&!f(n)&&n.hasAttribute("ng-click")){e.expect(n,"aria-label");var i=t.element('<md-button class="md-secondary md-icon-button">');h(n,i[0]),n.setAttribute("tabindex","-1"),i.append(n),n=i[0]}n&&(!g(n)||!d.ngClick&&p(n))&&t.element(n).removeClass("md-secondary"),a.addClass("md-with-secondary"),o.append(n)}function h(e,n){var i=o.prefixer(["ng-if","ng-click","ng-dblclick","aria-label","ng-disabled","ui-sref","href","ng-href","target","ng-attr-ui-sref","ui-sref-opts"]);t.forEach(i,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t))})}function p(e){return-1!=r.indexOf(e.nodeName.toLowerCase())}function f(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t}function g(e){for(var t=e.attributes,n=0;n<t.length;n++)if("ngClick"===d.$normalize(t[n].name))return!0;return!1}function b(e,a,d,s){function c(){u&&u.children&&!f&&t.forEach(r,function(e){t.forEach(u.querySelectorAll(e+":not(.md-secondary)"),function(e){m.push(e)})})}function l(){(1==m.length||f)&&(a.addClass("md-clickable"),f||s.attachRipple(e,t.element(a[0].querySelector("._md-no-style"))))}a.addClass("_md");var m=[],u=a[0].firstElementChild,h=a.hasClass("_md-button-wrap"),p=h?u.firstElementChild:u,f=p&&g(p);c(),l(),a.hasClass("_md-proxy-focus")&&m.length&&t.forEach(m,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,i(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})});var b=function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName&&!e.target.isContentEditable){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&p&&(p.click(),e.preventDefault(),e.stopPropagation())}};f||m.length||p&&p.addEventListener("keypress",b),a.off("click"),a.off("keypress"),1==m.length&&p&&a.children().eq(0).on("click",function(e){var n=o.getClosest(e.target,"BUTTON");!n&&p.contains(e.target)&&t.forEach(m,function(n){e.target===n||n.contains(e.target)||("MD-MENU"===n.nodeName&&(n=n.children[0]),t.element(n).triggerHandler("click"))})}),e.$on("$destroy",function(){p&&p.removeEventListener("keypress",b)})}var v,E,$=a[0].querySelectorAll(".md-secondary"),C=a;if(a[0].setAttribute("role","listitem"),d.ngClick||d.ngDblclick||d.ngHref||d.href||d.uiSref||d.ngAttrUiSref)l("button");else{for(var y,M=0;y=r[M];++M)if(E=a[0].querySelector(y)){v=!0;break}v?l("div"):a[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)")||a.addClass("_md-no-proxy")}return m(),s(),v&&"MD-MENU"===E.nodeName&&c(),b}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var i=this;i.attachRipple=o}t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n),e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],o.$inject=["$scope","$element","$mdListInkRipple"]}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"])}(),function(){t.module("material.components.menuBar",["material.core","material.components.menu"])}(),function(){function e(e){return{restrict:"E",transclude:!0,controller:o,controllerAs:"ctrl",bindToController:!0,scope:{mdSelectedNavItem:"=?",navBarAriaLabel:"@?"},template:'<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" layout="row" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-blur="ctrl.onBlur()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar></md-nav-ink-bar></div>',link:function(n,o,i,r){r.navBarAriaLabel||e.expectAsync(o,"aria-label",t.noop)}}}function o(e,t,n,o){this._$timeout=n,this._$scope=t,this._$mdConstant=o,this.mdSelectedNavItem,this.navBarAriaLabel,this._navBarEl=e[0],this._inkbar;var i=this,r=this._$scope.$watch(function(){return i._navBarEl.querySelectorAll("._md-nav-button").length},function(e){e>0&&(i._initTabs(),r())})}function i(e){return{restrict:"E",require:["mdNavItem","^mdNavBar"],controller:r,bindToController:!0,controllerAs:"ctrl",replace:!0,transclude:!0,template:'<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}"><md-button ng-if="ctrl.mdNavSref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ui-sref="{{ctrl.mdNavSref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavHref" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-href="{{ctrl.mdNavHref}}"><span ng-transclude class="_md-nav-button-text"></span></md-button><md-button ng-if="ctrl.mdNavClick" class="_md-nav-button md-accent"ng-class="ctrl.getNgClassMap()"tabindex="-1"ng-click="ctrl.mdNavClick()"><span ng-transclude class="_md-nav-button-text"></span></md-button></li>',scope:{mdNavClick:"&?",mdNavHref:"@?",mdNavSref:"@?",name:"@"},link:function(n,o,i,r){var a=r[0],d=r[1];e(function(){a.name||(a.name=t.element(o[0].querySelector("._md-nav-button-text")).text().trim());var e=t.element(o[0].querySelector("._md-nav-button"));e.on("click",function(){d.mdSelectedNavItem=a.name,n.$apply()})})}}}function r(e){this._$element=e,this.mdNavClick,this.mdNavHref,this.name,this._selected=!1,this._focused=!1;var t=!!e.attr("md-nav-click"),n=!!e.attr("md-nav-href"),o=!!e.attr("md-nav-sref");if((t?1:0)+(n?1:0)+(o?1:0)>1)throw Error("Must specify exactly one of md-nav-click, md-nav-href, md-nav-sref for nav-item directive")}t.module("material.components.navBar",["material.core"]).controller("MdNavBarController",o).directive("mdNavBar",e).controller("MdNavItemController",r).directive("mdNavItem",i),e.$inject=["$mdAria"],o.$inject=["$element","$scope","$timeout","$mdConstant"],o.prototype._initTabs=function(){this._inkbar=t.element(this._navBarEl.getElementsByTagName("md-nav-ink-bar")[0]);var e=this;this._$timeout(function(){e._updateTabs(e.mdSelectedNavItem,n)}),this._$scope.$watch("ctrl.mdSelectedNavItem",function(t,n){e._$timeout(function(){e._updateTabs(t,n)})})},o.prototype._updateTabs=function(e,t){var n=this,o=this._getTabs(),i=-1,r=-1,a=this._getTabByName(e),d=this._getTabByName(t);d&&(d.setSelected(!1),i=o.indexOf(d)),a&&(a.setSelected(!0),r=o.indexOf(a)),this._$timeout(function(){n._updateInkBarStyles(a,r,i)})},o.prototype._updateInkBarStyles=function(e,t,n){if(this._inkbar.toggleClass("_md-left",n>t).toggleClass("_md-right",t>n),this._inkbar.css({display:0>t?"none":""}),e){var o=e.getButtonEl(),i=o.offsetLeft;this._inkbar.css({left:i+"px",width:o.offsetWidth+"px"})}},o.prototype._getTabs=function(){var e=Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item"));return e.map(function(e){return t.element(e).controller("mdNavItem")})},o.prototype._getTabByName=function(e){return this._findTab(function(t){return t.getName()==e})},o.prototype._getSelectedTab=function(){return this._findTab(function(e){return e.isSelected()})},o.prototype.getFocusedTab=function(){return this._findTab(function(e){return e.hasFocus()})},o.prototype._findTab=function(e){for(var t=this._getTabs(),n=0;n<t.length;n++)if(e(t[n]))return t[n];return null},o.prototype.onFocus=function(){var e=this._getSelectedTab();e&&e.setFocused(!0)},o.prototype.onBlur=function(){var e=this.getFocusedTab();e&&e.setFocused(!1)},o.prototype._moveFocus=function(e,t){e.setFocused(!1),t.setFocused(!0)},o.prototype.onKeydown=function(e){var t=this._$mdConstant.KEY_CODE,n=this._getTabs(),o=this.getFocusedTab();if(o){var i=n.indexOf(o);switch(e.keyCode){case t.UP_ARROW:case t.LEFT_ARROW:i>0&&this._moveFocus(o,n[i-1]);break;case t.DOWN_ARROW:case t.RIGHT_ARROW:i<n.length-1&&this._moveFocus(o,n[i+1]);break;case t.SPACE:case t.ENTER:this._$timeout(function(){o.getButtonEl().click()})}}},i.$inject=["$$rAF"],r.$inject=["$element"],r.prototype.getNgClassMap=function(){return{"md-active":this._selected,"md-primary":this._selected,"md-unselected":!this._selected,"md-focused":this._focused}},r.prototype.getName=function(){return this.name},r.prototype.getButtonEl=function(){return this._$element[0].querySelector("._md-nav-button")},r.prototype.setSelected=function(e){this._selected=e},r.prototype.isSelected=function(){return this._selected},r.prototype.setFocused=function(e){this._focused=e},r.prototype.hasFocus=function(){return this._focused}}(),function(){function e(e,n,o,a){this._defaultConfigOptions={bindToController:!0,clickOutsideToClose:!1,disableParentScroll:!1,escapeToClose:!1,focusOnOpen:!0,fullscreen:!1,hasBackdrop:!1,transformTemplate:t.bind(this,this._wrapTemplate),trapFocus:!1,zIndex:d},this._config={},this._$rootElement=e,this._$rootScope=n,this._$injector=o,this._$window=a,this.animation=r.animation,this.xPosition=i.xPosition,this.yPosition=i.yPosition}function o(e,t){this._$q=t.get("$q"),this._$mdCompiler=t.get("$mdCompiler"),this._$mdConstant=t.get("$mdConstant"),this._$mdUtil=t.get("$mdUtil"),this._$rootScope=t.get("$rootScope"),this._$animate=t.get("$animate"),this._$mdPanel=t.get("$mdPanel"),this._$log=t.get("$log"),this._$window=t.get("$window"),this._$$rAF=t.get("$$rAF"),this.id=e.id,this.isAttached=!1,this._config=e,this._panelContainer,this._panelEl,this._removeListeners=[],this._topFocusTrap,this._bottomFocusTrap,this._backdropRef,this._restoreScroll=null}function i(e){this._$window=e,this._absolute=!1,this._relativeToEl,this._top="",this._bottom="",this._left="",this._right="",this._translateX=[],this._translateY=[],this._positions=[],this._actualPosition}function r(e){this._$mdUtil=e.get("$mdUtil"),this._openFrom,this._closeTo,this._animationClass=""}function a(e){var n=t.isString(e)?document.querySelector(e):e;return t.element(n)}t.module("material.components.panel",["material.core","material.components.backdrop"]).service("$mdPanel",e);var d=80,s="_md-panel-hidden",c=t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>');e.$inject=["$rootElement","$rootScope","$injector","$window"],e.prototype.create=function(e){var n=e||{};this._config={scope:this._$rootScope.$new(!0),attachTo:this._$rootElement},t.extend(this._config,this._defaultConfigOptions,n);var i="panel_"+this._$injector.get("$mdUtil").nextUid(),r=t.extend({id:i},this._config);return new o(r,this._$injector)},e.prototype.open=function(e){var t=this.create(e);return t.open().then(function(){return t})},e.prototype.newPanelPosition=function(){return new i(this._$window)},e.prototype.newPanelAnimation=function(){return new r(this._$injector)},e.prototype._wrapTemplate=function(e){var t=e||"";return'<div class="md-panel-outer-wrapper">  <div class="md-panel" style="left: -9999px;">'+t+"</div></div>"},o.prototype.open=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.show,e);e.attach().then(i).then(o)["catch"](n)})},o.prototype.close=function(){var e=this;return this._$q(function(t,n){var o=e._done(t,e),i=e._simpleBind(e.detach,e);e.hide().then(i).then(o)["catch"](n)})},o.prototype.attach=function(){if(this.isAttached&&this._panelEl)return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e._config.onDomAdded||t.noop,a=function(t){return e.isAttached=!0,e._addEventListeners(),t};e._$q.all([e._createBackdrop(),e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o)})},o.prototype.detach=function(){if(!this.isAttached)return this._$q.when(this);var e=this,n=e._config.onDomRemoved||t.noop,o=function(){return e._removeEventListeners(),e._topFocusTrap&&e._topFocusTrap.parentNode&&e._topFocusTrap.parentNode.removeChild(e._topFocusTrap),e._bottomFocusTrap&&e._bottomFocusTrap.parentNode&&e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap),e._panelContainer.remove(),e.isAttached=!1,e._$q.when(e)};return this._restoreScroll&&(this._restoreScroll(),this._restoreScroll=null),this._$q(function(t,i){var r=e._done(t,e);e._$q.all([o(),e._backdropRef?e._backdropRef.detach():!0]).then(n).then(r)["catch"](i)})},o.prototype.destroy=function(){this._config.locals=null},o.prototype.show=function(){if(!this._panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().")});if(!this._panelContainer.hasClass(s))return this._$q.when(this);var e=this,n=function(){return e.removeClass(s),e._animateOpen()};return this._$q(function(o,i){var r=e._done(o,e),a=e._config.onOpenComplete||t.noop;e._$q.all([e._backdropRef?e._backdropRef.show():e,n().then(function(){e._focusOnOpen()},i)]).then(a).then(r)["catch"](i)})},o.prototype.hide=function(){if(!this._panelContainer)return this._$q(function(e,t){t("Panel does not exist yet. Call open() or attach().")});if(this._panelContainer.hasClass(s))return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e._config.onRemoving||t.noop,d=function(){var t=e._config.origin;t&&a(t).focus()},c=function(){e.addClass(s)};e._$q.all([e._backdropRef?e._backdropRef.hide():e,e._animateClose().then(r).then(c).then(d)["catch"](o)]).then(i,o)})},o.prototype.addClass=function(e){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this._panelContainer.hasClass(e)||this._panelContainer.addClass(e)},o.prototype.removeClass=function(e){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this._panelContainer.hasClass(e)&&this._panelContainer.removeClass(e)},o.prototype.toggleClass=function(e){if(!this._panelContainer)throw new Error("Panel does not exist yet. Call open() or attach().");this._panelContainer.toggleClass(e)},o.prototype._createPanel=function(){var e=this;return this._$q(function(n,o){e._config.locals||(e._config.locals={}),e._config.locals.mdPanelRef=e,e._$mdCompiler.compile(e._config).then(function(i){e._panelContainer=i.link(e._config.scope),a(e._config.attachTo).append(e._panelContainer),e._config.disableParentScroll&&(e._restoreScroll=e._$mdUtil.disableScrollAround(null,e._panelContainer)),e._panelEl=t.element(e._panelContainer[0].querySelector(".md-panel")),e._config.panelClass&&e._panelEl.addClass(e._config.panelClass),e._$animate.pin&&e._$animate.pin(e._panelContainer,a(e._config.attachTo)),e._configureTrapFocus(),e._addStyles().then(function(){n(e)},o)},o)})},o.prototype._addStyles=function(){var e=this;return this._$q(function(t){e._panelContainer.css("z-index",e._config.zIndex),e._panelEl.css("z-index",e._config.zIndex+1);var n=function(){e._panelEl.css("left",""),e._panelContainer.addClass(s),t(e)};if(e._config.fullscreen)return e._panelEl.addClass("_md-panel-fullscreen"),void n();var o=e._config.position;return o?void e._$rootScope.$$postDigest(function(){e._updatePosition(!0),t(e)}):void n()})},o.prototype._updatePosition=function(e){var t=this._config.position;if(t){t._setPanelPosition(this._panelEl),e&&this._panelContainer.addClass(s),this._panelEl.css("top",t.getTop()),this._panelEl.css("bottom",t.getBottom()),this._panelEl.css("left",t.getLeft()),this._panelEl.css("right",t.getRight());var n=this._$mdConstant.CSS.TRANSFORM;this._panelEl.css(n,t.getTransform())}},o.prototype._focusOnOpen=function(){if(this._config.focusOnOpen){var e=this;this._$rootScope.$$postDigest(function(){var t=e._$mdUtil.findFocusTarget(e._panelEl)||e._panelEl;t.focus()})}},o.prototype._createBackdrop=function(){if(this._config.hasBackdrop){if(!this._backdropRef){var e=this._$mdPanel.newPanelAnimation().openFrom(this._config.attachTo).withAnimation({open:"_md-opaque-enter",close:"_md-opaque-leave"}),t={animation:e,attachTo:this._config.attachTo,focusOnOpen:!1,panelClass:"_md-panel-backdrop",zIndex:this._config.zIndex-1};this._backdropRef=this._$mdPanel.create(t)}if(!this._backdropRef.isAttached)return this._backdropRef.attach()}},o.prototype._addEventListeners=function(){this._configureEscapeToClose(),this._configureClickOutsideToClose(),this._configureScrollListener()},o.prototype._removeEventListeners=function(){this._removeListeners&&this._removeListeners.forEach(function(e){e()}),this._removeListeners=null},o.prototype._configureEscapeToClose=function(){if(this._config.escapeToClose){var e=a(this._config.attachTo),t=this,n=function(e){e.keyCode===t._$mdConstant.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),t.close())};this._panelContainer.on("keydown",n),e.on("keydown",n),this._removeListeners.push(function(){t._panelContainer.off("keydown",n),e.off("keydown",n)})}},o.prototype._configureClickOutsideToClose=function(){if(this._config.clickOutsideToClose){var e,t=this._panelContainer,n=function(t){e=t.target},o=this,i=function(n){e===t[0]&&n.target===t[0]&&(n.stopPropagation(),n.preventDefault(),o.close())};t.on("mousedown",n),t.on("mouseup",i),this._removeListeners.push(function(){t.off("mousedown",n),t.off("mouseup",i)})}},o.prototype._configureScrollListener=function(){var e=t.bind(this,this._updatePosition),n=this._$$rAF.throttle(e),o=this,i=function(){o._config.disableParentScroll||n()};this._$window.addEventListener("scroll",i,!0),this._removeListeners.push(function(){o._$window.removeEventListener("scroll",i,!0)})},o.prototype._configureTrapFocus=function(){if(this._panelEl.attr("tabIndex","-1"),this._config.trapFocus){var e=this._panelEl;this._topFocusTrap=c.clone()[0],this._bottomFocusTrap=c.clone()[0];var t=function(){e.focus()};this._topFocusTrap.addEventListener("focus",t),this._bottomFocusTrap.addEventListener("focus",t),this._removeListeners.push(this._simpleBind(function(){this._topFocusTrap.removeEventListener("focus",t),this._bottomFocusTrap.removeEventListener("focus",t)},this)),e[0].parentNode.insertBefore(this._topFocusTrap,e[0]),e.after(this._bottomFocusTrap)}},o.prototype._animateOpen=function(){this.addClass("md-panel-is-showing");var e=this._config.animation;if(!e)return this.addClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=t._done(n,t),i=function(){t._$log.warn("MdPanel Animations failed. Showing panel without animating."),o()};e.animateOpen(t._panelEl).then(o,i)})},o.prototype._animateClose=function(){var e=this._config.animation;if(!e)return this.removeClass("md-panel-is-showing"),this.removeClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=function(){t.removeClass("md-panel-is-showing"),n(t)},i=function(){t._$log.warn("MdPanel Animations failed. Hiding panel without animating."),o()};e.animateClose(t._panelEl).then(o,i)})},o.prototype._simpleBind=function(e,t){return function(n){return e.apply(t,n)}},o.prototype._done=function(e,t){return function(){e(t)}},i.xPosition={CENTER:"center",ALIGN_START:"align-start",ALIGN_END:"align-end",OFFSET_START:"offset-start",OFFSET_END:"offset-end"},i.yPosition={CENTER:"center",ALIGN_TOPS:"align-tops",ALIGN_BOTTOMS:"align-bottoms",ABOVE:"above",BELOW:"below"},i.prototype.absolute=function(){return this._absolute=!0,this},i.prototype.top=function(e){return this._bottom="",this._top=e||"0",this},i.prototype.bottom=function(e){return this._top="",this._bottom=e||"0",this},i.prototype.left=function(e){return this._right="",this._left=e||"0",this},i.prototype.right=function(e){return this._left="",this._right=e||"0",this},i.prototype.centerHorizontally=function(){return this._left="50%",this._right="",this._translateX=["-50%"],this},i.prototype.centerVertically=function(){return this._top="50%",this._bottom="",this._translateY=["-50%"],this},i.prototype.center=function(){return this.centerHorizontally().centerVertically()},i.prototype.relativeTo=function(e){return this._absolute=!1,this._relativeToEl=a(e),this},i.prototype.addPanelPosition=function(e,t){if(!this._relativeToEl)throw new Error("addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(e),this._validateYPosition(t),this._positions.push({x:e,y:t}),this},i.prototype._validateYPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.yPosition),o=[],r=0;t=n[r];r++){var a=i.yPosition[t];if(o.push(a),a===e)return}throw new Error("Panel y position only accepts the following values:\n"+o.join(" | "))}},i.prototype._validateXPosition=function(e){if(null!=e){for(var t,n=Object.keys(i.xPosition),o=[],r=0;t=n[r];r++){var a=i.xPosition[t];if(o.push(a),a===e)return}throw new Error("Panel x Position only accepts the following values:\n"+o.join(" | "))}},i.prototype.withOffsetX=function(e){return this._translateX.push(e),this},i.prototype.withOffsetY=function(e){return this._translateY.push(e),this},i.prototype.getTop=function(){return this._top},i.prototype.getBottom=function(){return this._bottom},i.prototype.getLeft=function(){return this._left},i.prototype.getRight=function(){return this._right},i.prototype.getTransform=function(){var e=this._reduceTranslateValues("translateX",this._translateX),t=this._reduceTranslateValues("translateY",this._translateY);return(e+" "+t).trim()},i.prototype._isOnscreen=function(e){var t=parseInt(this.getLeft()),n=parseInt(this.getTop()),o=t+e[0].offsetWidth,i=n+e[0].offsetHeight;return t>=0&&n>=0&&i<=this._$window.innerHeight&&o<=this._$window.innerWidth},i.prototype.getActualPosition=function(){return this._actualPosition},i.prototype._reduceTranslateValues=function(e,t){return t.map(function(t){return e+"("+t+")"}).join(" ")},i.prototype._setPanelPosition=function(e){if(!this._absolute){if(this._actualPosition)return void this._calculatePanelPosition(e,this._actualPosition);for(var t=0;t<this._positions.length&&(this._actualPosition=this._positions[t],
this._calculatePanelPosition(e,this._actualPosition),!this._isOnscreen(e));t++);}},i.prototype._calculatePanelPosition=function(e,t){var n=e[0].getBoundingClientRect(),o=n.width,r=n.height,a=this._relativeToEl[0].getBoundingClientRect(),d=a.left,s=a.right,c=a.width;switch(t.x){case i.xPosition.OFFSET_START:this._left=d-o+"px";break;case i.xPosition.ALIGN_END:this._left=s-o+"px";break;case i.xPosition.CENTER:var l=d+.5*c-.5*o;this._left=l+"px";break;case i.xPosition.ALIGN_START:this._left=d+"px";break;case i.xPosition.OFFSET_END:this._left=s+"px"}var m=a.top,u=a.bottom,h=a.height;switch(t.y){case i.yPosition.ABOVE:this._top=m-r+"px";break;case i.yPosition.ALIGN_BOTTOMS:this._top=u-r+"px";break;case i.yPosition.CENTER:var p=m+.5*h-.5*r;this._top=p+"px";break;case i.yPosition.ALIGN_TOPS:this._top=m+"px";break;case i.yPosition.BELOW:this._top=u+"px"}},r.animation={SLIDE:"md-panel-animate-slide",SCALE:"md-panel-animate-scale",FADE:"md-panel-animate-fade"},r.prototype.openFrom=function(e){return e=e.target?e.target:e,this._openFrom=this._getPanelAnimationTarget(e),this._closeTo||(this._closeTo=this._openFrom),this},r.prototype.closeTo=function(e){return this._closeTo=this._getPanelAnimationTarget(e),this},r.prototype._getPanelAnimationTarget=function(e){return t.isDefined(e.top)||t.isDefined(e.left)?{element:n,bounds:{top:e.top||0,left:e.left||0}}:this._getBoundingClientRect(a(e))},r.prototype.withAnimation=function(e){return this._animationClass=e,this},r.prototype.animateOpen=function(e){var n=this._$mdUtil.dom.animator;this._fixBounds(e);var o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-enter"};var s=n.calculateSlideToOrigin(e,this._openFrom)||"";a=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-enter"};var c=n.calculateZoomToOrigin(e,this._openFrom)||"";a=n.toTransformCss(c+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-enter"};break;default:o=t.isString(this._animationClass)?{transitionInClass:this._animationClass}:{transitionInClass:this._animationClass.open,transitionOutClass:this._animationClass.close}}return n.translate3d(e,a,d,o)},r.prototype.animateClose=function(e){var n=this._$mdUtil.dom.animator,o={},i=e[0].style.transform||"",a=n.toTransformCss(i),d=n.toTransformCss(i);switch(this._animationClass){case r.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-leave"};var s=n.calculateSlideToOrigin(e,this._closeTo)||"";d=n.toTransformCss(s+" "+i);break;case r.animation.SCALE:o={transitionInClass:"_md-panel-animate-scale-out _md-panel-animate-leave"};var c=n.calculateZoomToOrigin(e,this._closeTo)||"";d=n.toTransformCss(c+" "+i);break;case r.animation.FADE:o={transitionInClass:"_md-panel-animate-fade-out _md-panel-animate-leave"};break;default:o=t.isString(this._animationClass)?{transitionOutClass:this._animationClass}:{transitionInClass:this._animationClass.close,transitionOutClass:this._animationClass.open}}return n.translate3d(e,a,d,o)},r.prototype._fixBounds=function(e){var t=e[0].offsetWidth,n=e[0].offsetHeight;this._openFrom&&null==this._openFrom.bounds.height&&(this._openFrom.bounds.height=n),this._openFrom&&null==this._openFrom.bounds.width&&(this._openFrom.bounds.width=t),this._closeTo&&null==this._closeTo.bounds.height&&(this._closeTo.bounds.height=n),this._closeTo&&null==this._closeTo.bounds.width&&(this._closeTo.bounds.width=t)},r.prototype._getBoundingClientRect=function(e){return e instanceof t.element?{element:e,bounds:e[0].getBoundingClientRect()}:void 0}}(),function(){t.module("material.components.progressCircular",["material.core"])}(),function(){function e(e,n,o){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),r}function r(o,i,r){function u(){r.$observe("value",function(e){var t=a(e);i.attr("aria-valuenow",t),p()!=l&&f($,t)}),r.$observe("mdBufferValue",function(e){f(E,a(e))}),r.$observe("disabled",function(e){b=e===!0||e===!1?e:t.isDefined(e),i.toggleClass(m,!!b)}),r.$observe("mdMode",function(e){switch(g&&C.removeClass(g),e){case l:case c:case d:case s:C.addClass(g="_md-mode-"+e);break;default:C.addClass(g="_md-mode-"+s)}})}function h(){if(t.isUndefined(r.mdMode)){var e=t.isDefined(r.value),n=e?d:s;i.attr("md-mode",n),r.mdMode=n}}function p(){var e=(r.mdMode||"").trim();if(e)switch(e){case d:case s:case c:case l:break;default:e=s}return e}function f(e,o){if(!b&&p()){var i=n.supplant("translateX({0}%) scale({1},1)",[(o-100)/2,o/100]),r=v({transform:i});t.element(e).css(r)}}e(i);var g,b=r.hasOwnProperty("disabled"),v=n.dom.animator.toCss,E=t.element(i[0].querySelector("._md-bar1")),$=t.element(i[0].querySelector("._md-bar2")),C=t.element(i[0].querySelector("._md-container"));i.attr("md-mode",p()).toggleClass(m,b),h(),u()}function a(e){return Math.max(0,Math.min(e||0,100))}var d="determinate",s="indeterminate",c="buffer",l="query",m="_md-progress-linear-disabled";return{restrict:"E",template:'<div class="_md-container"><div class="_md-dashed"></div><div class="_md-bar _md-bar1"></div><div class="_md-bar _md-bar2"></div></div>',compile:i}}t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e),e.$inject=["$mdTheming","$mdUtil","$log"]}(),function(){function e(e,n,o,i){function r(r,a,d,s){function c(){a.hasClass("md-focused")||a.addClass("md-focused")}function l(o){var i=o.which||o.keyCode;if(i==n.KEY_CODE.ENTER||o.currentTarget==o.target)switch(i){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),c();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),c();break;case n.KEY_CODE.ENTER:var r=t.element(e.getClosest(a[0],"form"));r.length>0&&r.triggerHandler("submit")}}a.addClass("_md"),o(a);var m=s[0],u=s[1]||e.fakeNgModel();m.init(u),r.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",l).on("mousedown",function(e){r.mouseActive=!0,i(function(){r.mouseActive=!1},100)}).on("focus",function(){r.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return s(this.$element,1)},selectPrevious:function(){return s(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function s(n,o){var i=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(i.count()){var r=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=i[0>o?"previous":"next"](a,r)||i.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function n(e,t,n){function o(o,r,a,d){function s(e){if(!d)throw"RadioGroupController not found.";d.add(l),a.$observe("value",l),r.on("click",c).on("$destroy",function(){d.remove(l)})}function c(e){r[0].hasAttribute("disabled")||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function l(){function e(e){"MD-RADIO-GROUP"!=r.parent()[0].nodeName&&r.parent()[e?"addClass":"removeClass"](i)}var t=d.getViewValue()==a.value;t!==u&&(u=t,r.attr("aria-checked",t),t?(e(!0),r.addClass(i),d.setActiveDescendant(r.attr("id"))):(e(!1),r.removeClass(i)))}function m(n,o){function i(){return a.id||"radio_"+t.nextUid()}o.ariaId=i(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(r),m(r,o),s()}var i="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="_md-container" md-ink-ripple md-ink-ripple-checkbox><div class="_md-off"></div><div class="_md-on"></div></div><div ng-transclude class="_md-label"></div>',link:o}}t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n),e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"]}(),function(){function o(e,o,i,r,a,d){function s(a,s){var c=t.element("<md-select-value><span></span></md-select-value>");if(c.append('<span class="_md-select-icon" aria-hidden="true"></span>'),c.addClass("_md-select-value"),c[0].hasAttribute("id")||c.attr("id","select_value_label_"+o.nextUid()),a.find("md-content").length||a.append(t.element("<md-content>").append(a.contents())),s.mdOnOpen&&(a.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')),a.find("md-option").attr("ng-show","$$loadingAsyncDone")),s.name){var l=t.element('<select class="_md-visually-hidden">');l.attr({name:s.name,"aria-hidden":"true",tabindex:"-1"});var m=a.find("md-option");t.forEach(m,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),l.append(n)}),l.append('<option ng-value="'+s.ngModel+'" selected></option>'),a.parent().append(l)}var u=o.parseAttributeBoolean(s.multiple),h=u?"multiple":"",p='<div class="_md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return p=o.supplant(p,[h,a.html()]),a.empty().append(c),a.append(p),s.tabindex||s.$set("tabindex",0),function(a,s,c,l){function m(){var e=s.attr("aria-label")||s.attr("placeholder");!e&&y&&y.label&&(e=y.label.text()),$=e,r.expect(s,"aria-label",e)}function h(){S&&(D=D||S.find("md-select-menu").controller("mdSelectMenu"),M.setLabelText(D.selectedLabels()))}function p(){if($){var e=D.selectedLabels({mode:"aria"});s.attr("aria-label",e.length?$+": "+e:$)}}function f(){y&&y.setHasValue(D.selectedLabels().length>0||(s[0].validity||{}).badInput)}function g(){if(S=t.element(s[0].querySelector("._md-select-menu-container")),N=a,c.mdContainerClass){var e=S[0].getAttribute("class")+" "+c.mdContainerClass;S[0].setAttribute("class",e)}D=S.find("md-select-menu").controller("mdSelectMenu"),D.init(_,c.ngModel),s.on("$destroy",function(){S.remove()})}function b(e){var n=[32,13,38,40];if(-1!=n.indexOf(e.keyCode))e.preventDefault(),v(e);else if(e.keyCode<=90&&e.keyCode>=31){e.preventDefault();var o=D.optNodeForKeyboardSearch(e);if(!o||o.hasAttribute("disabled"))return;var i=t.element(o).controller("mdOption");D.isMultiple||D.deselect(Object.keys(D.selected)[0]),D.select(i.hashKey,i.value),D.refreshViewValue()}}function v(){N._mdSelectIsOpen=!0,s.attr("aria-expanded","true"),e.show({scope:N,preserveScope:!0,skipCompile:!0,element:S,target:s[0],selectCtrl:M,preserveElement:!0,hasBackdrop:!0,loadingAsync:c.mdOnOpen?a.$eval(c.mdOnOpen)||!0:!1})["finally"](function(){N._mdSelectIsOpen=!1,s.focus(),s.attr("aria-expanded","false"),_.$setTouched()})}var E,$,C=!0,y=l[0],M=l[1],_=l[2],A=l[3],T=s.find("md-select-value"),w=t.isDefined(c.readonly),k=o.parseAttributeBoolean(c.mdNoAsterisk);if(y){var x=y.isErrorGetter||function(){return _.$invalid&&(_.$touched||o.isParentFormSubmitted(s))};if(y.input&&s.find("md-select-header").find("input")[0]!==y.input[0])throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");y.input=s,y.label||r.expect(s,"aria-label",s.attr("placeholder")),a.$watch(x,y.setInvalid)}var S,N,D;g(),i(s),A&&t.isDefined(c.multiple)&&o.nextTick(function(){var e=_.$modelValue||_.$viewValue;e&&A.$setPristine()});var H=_.$render;_.$render=function(){H(),h(),p(),f()},c.$observe("placeholder",_.$render),y&&y.label&&c.$observe("required",function(e){y.label.toggleClass("md-required",e&&!k)}),M.setLabelText=function(e){if(M.setIsPlaceholder(!e),c.mdSelectedText)e=d(c.mdSelectedText)(a);else{var t=c.placeholder||(y&&y.label?y.label.text():"");e=e||t||""}var n=T.children().eq(0);n.html(e)},M.setIsPlaceholder=function(e){e?(T.addClass("_md-select-placeholder"),y&&y.label&&y.label.addClass("_md-placeholder")):(T.removeClass("_md-select-placeholder"),y&&y.label&&y.label.removeClass("_md-placeholder"))},w||(s.on("focus",function(e){y&&y.setFocused(!0)}),s.on("blur",function(e){C&&(C=!1,N._mdSelectIsOpen&&e.stopImmediatePropagation()),N._mdSelectIsOpen||(y&&y.setFocused(!1),f())})),M.triggerClose=function(){d(c.mdOnClose)(a)},a.$$postDigest(function(){m(),h(),p()}),a.$watch(function(){return D.selectedLabels()},h);var I;c.$observe("ngMultiple",function(e){I&&I();var t=d(e);I=a.$watch(function(){return t(a)},function(e,t){e===n&&t===n||(e?s.attr("multiple","multiple"):s.removeAttr("multiple"),s.attr("aria-multiselectable",e?"true":"false"),S&&(D.setMultiple(e),H=_.$render,_.$render=function(){H(),h(),p(),f()},_.$render()))})}),c.$observe("disabled",function(e){t.isString(e)&&(e=!0),E!==n&&E===e||(E=e,e?s.attr({"aria-disabled":"true"}).removeAttr("tabindex").off("click",v).off("keydown",b):s.attr({tabindex:c.tabindex,"aria-disabled":"false"}).on("click",v).on("keydown",b))}),c.hasOwnProperty("disabled")||c.hasOwnProperty("ngDisabled")||(s.attr({"aria-disabled":"false"}),s.on("click",v),s.on("keydown",b));var O={role:"listbox","aria-expanded":"false","aria-multiselectable":u&&!c.ngMultiple?"true":"false"};s[0].hasAttribute("id")||(O.id="select_"+o.nextUid());var L="select_container_"+o.nextUid();S.attr("id",L),O["aria-owns"]=L,s.attr(O),a.$on("$destroy",function(){e.destroy()["finally"](function(){y&&(y.setFocused(!1),y.setHasValue(!1),y.input=null),_.$setTouched()})})}}return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:s,controller:function(){}}}function i(e,o,i){function r(e,n,r,a){function d(e){13!=e.keyCode&&32!=e.keyCode||s(e)}function s(n){var i=o.getClosest(n.target,"md-option"),r=i&&t.element(i).data("$mdOptionController");if(i&&r){if(i.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=c.hashGetter(r.value),d=t.isDefined(c.selected[a]);e.$apply(function(){c.isMultiple?d?c.deselect(a):c.select(a,r.value):d||(c.deselect(Object.keys(c.selected)[0]),c.select(a,r.value)),c.refreshViewValue()})}}var c=a[0];n.addClass("_md"),i(n),n.on("click",s),n.on("keypress",d)}function a(i,r,a){function d(){var e=c.ngModel.$modelValue||c.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(c.selected),o=e.map(c.hashGetter),i=n.filter(function(e){return-1===o.indexOf(e)});i.forEach(c.deselect),o.forEach(function(t,n){c.select(t,e[n])})}}function s(){var e=c.ngModel.$viewValue||c.ngModel.$modelValue;Object.keys(c.selected).forEach(c.deselect),c.select(c.hashGetter(e),e)}var c=this;c.isMultiple=t.isDefined(r.multiple),c.selected={},c.options={},i.$watchCollection(function(){return c.options},function(){c.ngModel.$render()});var m,u;c.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=c.ngModel;u=u||o.$isEmpty,c.isMultiple=e,m&&m(),c.isMultiple?(o.$validators["md-multiple"]=n,o.$render=d,i.$watchCollection(c.modelBinding,function(e){n(e)&&d(e),c.ngModel.$setPristine()}),o.$isEmpty=function(e){return!e||0===e.length}):(delete o.$validators["md-multiple"],o.$render=s)};var h,p,f,g="",b=300;c.optNodeForKeyboardSearch=function(e){h&&clearTimeout(h),h=setTimeout(function(){h=n,g="",f=n,p=n},b),g+=String.fromCharCode(e.keyCode);var o=new RegExp("^"+g,"i");p||(p=a.find("md-option"),f=new Array(p.length),t.forEach(p,function(e,t){f[t]=e.textContent.trim()}));for(var i=0;i<f.length;++i)if(o.test(f[i]))return p[i]},c.init=function(n,o){if(c.ngModel=n,c.modelBinding=o,c.ngModel.$isEmpty=function(e){return!c.options[e]},n.$options&&n.$options.trackBy){var r={},a=e(n.$options.trackBy);c.hashGetter=function(e,t){return r.$value=e,a(t||i,r)}}else c.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++l)):e};c.setMultiple(c.isMultiple)},c.selectedLabels=function(e){e=e||{};var t=e.mode||"html",n=o.nodesToArray(a[0].querySelectorAll("md-option[selected]"));if(n.length){var i;return"html"==t?i=function(e){var t=e.innerHTML,n=e.querySelector(".md-ripple-container");n&&(t=t.replace(n.outerHTML,""));var o=e.querySelector("._md-container");return o&&(t=t.replace(o.outerHTML,"")),t}:"aria"==t&&(i=function(e){return e.hasAttribute("aria-label")?e.getAttribute("aria-label"):e.textContent}),n.map(i).join(", ")}return""},c.select=function(e,t){var n=c.options[e];n&&n.setSelected(!0),c.selected[e]=t},c.deselect=function(e){var t=c.options[e];t&&t.setSelected(!1),delete c.selected[e]},c.addOption=function(e,n){if(t.isDefined(c.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');c.options[e]=n,t.isDefined(c.selected[e])&&(c.select(e,n.value),c.refreshViewValue())},c.removeOption=function(e){delete c.options[e]},c.refreshViewValue=function(){var e,n=[];for(var o in c.selected)(e=c.options[o])?n.push(e.value):n.push(c.selected[o]);var i=c.ngModel.$options&&c.ngModel.$options.trackBy,r=c.isMultiple?n:n[0],a=c.ngModel.$modelValue;(i?t.equals(a,r):a==r)||(c.ngModel.$setViewValue(r),c.ngModel.$render())}}return a.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu"],scope:!1,controller:a,link:{pre:r}}}function r(e,n){function o(e,n){return e.append(t.element('<div class="_md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),i}function i(o,i,r,a){function d(e,t,n){if(!l.hashGetter)return void(n||o.$$postDigest(function(){d(e,t,!0)}));var i=l.hashGetter(t,o),r=l.hashGetter(e,o);c.hashKey=r,c.value=e,l.removeOption(i,c),l.addOption(r,c)}function s(){var e={role:"option","aria-selected":"false"};i[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),i.attr(e)}var c=a[0],l=a[1];l.isMultiple&&(i.addClass("_md-checkbox-enabled"),i.prepend(m.clone())),t.isDefined(r.ngValue)?o.$watch(r.ngValue,d):t.isDefined(r.value)?d(r.value):o.$watch(function(){return i.text().trim()},d),r.$observe("disabled",function(e){e?i.attr("tabindex","-1"):i.attr("tabindex","0")}),o.$$postDigest(function(){r.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(l.isMultiple||l.deselect(Object.keys(l.selected)[0]),l.select(c.hashKey,c.value)):l.deselect(c.hashKey),l.refreshViewValue())})}),e.attach(o,i),s(),o.$on("$destroy",function(){l.removeOption(c.hashKey,c)})}function r(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return r.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:r,compile:o}}function a(){function e(e,n){function o(){return e.parent().find("md-select-header").length}function i(){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),o.addClass("_md-container-ignore"),n.label&&o.text(n.label)}o()||i()}return{restrict:"E",compile:e}}function d(){return{restrict:"E"}}function s(o){function i(o,i,l,m,u,h,p,f,g){function b(e,t,n){function o(){return p(t,{addClass:"_md-leave"}).start()}function i(){t.removeClass("_md-active"),t.attr("aria-hidden","true"),t[0].style.display="none",E(n),!n.$destroy&&n.restoreFocus&&n.target.focus()}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function v(e,r,a){function d(e,t,n){return n.parent.append(t),u(function(e,n){try{p(t,{removeClass:"_md-leave",duration:0}).start().then(s).then(e)}catch(o){n(o)}})}function s(){return u(function(t){if(a.isRemoved)return u.reject(!1);var n=$(e,r,a);n.container.element.css(y.toCss(n.container.styles)),n.dropDown.element.css(y.toCss(n.dropDown.styles)),h(function(){r.addClass("_md-active"),n.dropDown.element.css(y.toCss({transform:""})),b(a.focusedNode),t()})})}function c(e,t,n){return n.disableParentScroll&&!l.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=l.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=l.createBackdrop(e,"_md-select-backdrop _md-click-catcher"),f.enter(n.backdrop,g[0].body,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll}}function b(e){e&&!e.hasAttribute("disabled")&&e.focus()}function v(e,n){var o=r.find("md-select-menu");if(!n.target)throw new Error(l.supplant(C,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:r.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")})}function E(){var n=function(e,t,n){return function(){if(!n.isRemoved){var o=$(e,t,n),i=o.container,r=o.dropDown;i.element.css(y.toCss(i.styles)),r.element.css(y.toCss(r.styles))}}}(e,r,a),o=t.element(m);return o.on("resize",n),o.on("orientationchange",n),function(){o.off("resize",n),o.off("orientationchange",n)}}function M(){a.loadingAsync&&!a.isRemoved&&(e.$$loadingAsyncDone=!1,u.when(a.loadingAsync).then(function(){e.$$loadingAsyncDone=!0,delete a.loadingAsync}).then(function(){h(s)}))}function _(){function e(e){e.preventDefault(),e.stopPropagation(),a.restoreFocus=!1,l.nextTick(o.hide,!0)}function t(e){var t=i.KEY_CODE;switch(e.preventDefault(),e.stopPropagation(),e.keyCode){case t.UP_ARROW:return c();case t.DOWN_ARROW:return s();case t.SPACE:case t.ENTER:var n=l.getClosest(e.target,"md-option");n&&(u.triggerHandler({type:"click",target:n}),e.preventDefault()),m(e);break;case t.TAB:case t.ESCAPE:e.stopPropagation(),e.preventDefault(),a.restoreFocus=!0,l.nextTick(o.hide,!0);break;default:if(e.keyCode>=31&&e.keyCode<=90){var r=u.controller("mdSelectMenu").optNodeForKeyboardSearch(e);a.focusedNode=r||a.focusedNode,r&&r.focus()}}}function d(e){var t,o=l.nodesToArray(a.optionNodes),i=o.indexOf(a.focusedNode);do-1===i?i=0:"next"===e&&i<o.length-1?i++:"prev"===e&&i>0&&i--,t=o[i],t.hasAttribute("disabled")&&(t=n);while(!t&&i<o.length-1&&i>0);t&&t.focus(),a.focusedNode=t}function s(){d("next")}function c(){d("prev")}function m(e){function t(){var t=!1;if(e&&e.currentTarget.children.length>0){var n=e.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var i=e.pageX-e.currentTarget.getBoundingClientRect().left;i>n.querySelector("md-option").offsetWidth&&(t=!0)}}return t}if(!(e&&"click"==e.type&&e.currentTarget!=u[0]||t())){var n=l.getClosest(e.target,"md-option");n&&n.hasAttribute&&!n.hasAttribute("disabled")&&(e.preventDefault(),e.stopPropagation(),h.isMultiple||(a.restoreFocus=!0,l.nextTick(function(){o.hide(h.ngModel.$viewValue)},!0)))}}if(!a.isRemoved){var u=a.selectEl,h=u.controller("mdSelectMenu")||{};return r.addClass("_md-clickable"),a.backdrop&&a.backdrop.on("click",e),u.on("keydown",t),u.on("click",m),function(){a.backdrop&&a.backdrop.off("click",e),u.off("keydown",t),u.off("click",m),r.removeClass("_md-clickable"),a.isRemoved=!0}}}return M(),v(e,a),a.hideBackdrop=c(e,r,a),d(e,r,a).then(function(e){return r.attr("aria-hidden","false"),a.alreadyOpen=!0,a.cleanupInteraction=_(),a.cleanupResizing=E(),e},a.hideBackdrop)}function E(e){var t=e.selectCtrl;if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n?n.selectedLabels():""),t.triggerClose()}}function $(n,o,i){var u,h=o[0],p=i.target[0].children[0],f=g[0].body,b=i.selectEl[0],v=i.contentEl[0],E=f.getBoundingClientRect(),$=p.getBoundingClientRect(),C=!1,y={left:E.left+c,top:c,bottom:E.height-c,right:E.width-c-(l.floatingScrollbars()?16:0)},M={top:$.top-y.top,left:$.left-y.left,right:y.right-($.left+$.width),bottom:y.bottom-($.top+$.height)},_=E.width-2*c,A=b.querySelector("md-option[selected]"),T=b.getElementsByTagName("md-option"),w=b.getElementsByTagName("md-optgroup"),k=s(o,v),x=r(i.loadingAsync);u=x?v.firstElementChild||v:A?A:w.length?w[0]:T.length?T[0]:v.firstElementChild||v,v.offsetWidth>_?v.style["max-width"]=_+"px":v.style.maxWidth=null,C&&(v.style["min-width"]=$.width+"px"),k&&b.classList.add("_md-overflow");var S=u;"MD-OPTGROUP"===(S.tagName||"").toUpperCase()&&(S=T[0]||v.firstElementChild||v,u=S),i.focusedNode=S,h.style.display="block";var N=b.getBoundingClientRect(),D=d(u);if(u){var H=m.getComputedStyle(u);D.paddingLeft=parseInt(H.paddingLeft,10)||0,D.paddingRight=parseInt(H.paddingRight,10)||0}if(k){var I=v.offsetHeight/2;v.scrollTop=D.top+D.height/2-I,M.top<I?v.scrollTop=Math.min(D.top,v.scrollTop+I-M.top):M.bottom<I&&(v.scrollTop=Math.max(D.top+D.height-N.height,v.scrollTop-I+M.bottom))}var O,L,R,P,F;C?(O=$.left,L=$.top+$.height,R="50% 0",L+N.height>y.bottom&&(L=$.top-N.height,R="50% 100%")):(O=$.left+D.left-D.paddingLeft+2,L=Math.floor($.top+$.height/2-D.height/2-D.top+v.scrollTop)+2,R=D.left+$.width/2+"px "+(D.top+D.height/2-v.scrollTop)+"px 0px",P=Math.min($.width+D.paddingLeft+D.paddingRight,_),F=e.getComputedStyle(p)["font-size"]);var B=h.getBoundingClientRect(),U=Math.round(100*Math.min($.width/N.width,1))/100,j=Math.round(100*Math.min($.height/N.height,1))/100;return{container:{element:t.element(h),styles:{left:Math.floor(a(y.left,O,y.right-B.width)),top:Math.floor(a(y.top,L,y.bottom-B.height)),"min-width":P,"font-size":F}},dropDown:{element:t.element(b),styles:{transformOrigin:R,transform:i.alreadyOpen?"":l.supplant("scale({0},{1})",[U,j])}}}}var C="$mdSelect.show() expected a target element in options.target but got '{0}'!",y=l.dom.animator;return{parent:"body",themable:!0,onShow:v,onRemove:b,hasBackdrop:!0,disableParentScroll:!0}}function r(e){return e&&t.isFunction(e.then)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function d(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}function s(e,t){var n=!1;try{var o=e[0].style.display;e[0].style.display="block",n=t.scrollHeight>t.offsetHeight,e[0].style.display=o}finally{}return n}return i.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate","$document"],o("$mdSelect").setDefaults({methods:["target"],options:i})}var c=8,l=0,m=t.element('<div class="_md-container"><div class="_md-icon"></div></div>');t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",o).directive("mdSelectMenu",i).directive("mdOption",r).directive("mdOptgroup",a).directive("mdSelectHeader",d).provider("$mdSelect",s),o.$inject=["$mdSelect","$mdUtil","$mdTheming","$mdAria","$compile","$parse"],i.$inject=["$parse","$mdUtil","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil"],s.$inject=["$$interimElementProvider"]}(),function(){function n(t,n){return["$mdUtil",function(o){return{restrict:"A",multiElement:!0,link:function(i,r,a){var d=i.$on("$md-resize-enable",function(){d();var s=e.getComputedStyle(r[0]);i.$watch(a[t],function(e){if(!!e===n){o.nextTick(function(){i.$broadcast("$md-resize")});var t={cachedTransitionStyles:s};o.dom.animator.waitTransitionEnd(r,t).then(function(){i.$broadcast("$md-resize")})}})})}}}]}t.module("material.components.showHide",["material.core"]).directive("ngShow",n("ngShow",!0)).directive("ngHide",n("ngHide",!1))}(),function(){function e(e,o,i,r){function a(e,n){var r=function(){return!1},a=function(){return i.when(o.supplant(c,[n||""]))};return t.extend({isLockedOpen:r,isOpen:r,toggle:a,open:a,close:a,then:function(e){return s(n).then(e||t.noop)}},e)}function d(t,i){var a=e.get(t);return a||i?a:(r.error(o.supplant(c,[t||""])),n)}function s(t){return e.when(t)["catch"](r.error)}var c="SideNav '{0}' is not available! Did you use md-component-id='{0}'?",l={find:d,waitFor:s};return function(e,n){if(t.isUndefined(e))return l;var o=n===!0,i=l.find(e,o);return!i&&o?l.waitFor(e):!i&&t.isUndefined(n)?a(l,e):i}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){}}}function i(e,o,i,r,a,d,s,c,l,m){function u(d,u,h,p){function f(e,t){d.isLockedOpen=e,e===t?u.toggleClass("_md-locked-open",!!e):a[e?"addClass":"removeClass"](u,"_md-locked-open"),M&&M.toggleClass("_md-locked-open",!!e)}function g(e){var t=o.findFocusTarget(u)||o.findFocusTarget(u,"[md-sidenav-focus]")||u,n=u.parent();n[e?"on":"off"]("keydown",$),M&&M[e?"on":"off"]("click",C);var i=b(n,e);return e&&(A=m[0].activeElement),v(e),T=l.all([e&&M?a.enter(M,n):M?a.leave(M):l.when(!0),a[e?"removeClass":"addClass"](u,"_md-closed")]).then(function(){d.isOpen&&t&&t.focus(),i&&i()})}function b(e,t){var n=u[0],o=e[0].scrollTop;if(t&&o){_={top:n.style.top,bottom:n.style.bottom,height:n.style.height};var i={top:o+"px",bottom:"initial",height:e[0].clientHeight+"px"};u.css(i),M.css(i)}return!t&&_?function(){n.style.top=_.top,n.style.bottom=_.bottom,n.style.height=_.height,M[0].style.top=null,M[0].style.bottom=null,M[0].style.height=null,_=null}:void 0}function v(e){var o=u.parent();e&&!y?(y=o.css("overflow"),o.css("overflow","hidden")):t.isDefined(y)&&(o.css("overflow",y),y=n)}function E(e){return d.isOpen==e?l.when(!0):l(function(t){d.isOpen=e,o.nextTick(function(){T.then(function(e){d.isOpen||(A&&A.focus(),A=null),t(e)})})})}function $(e){var t=e.keyCode===i.KEY_CODE.ESCAPE;return t?C(e):l.when(!0)}function C(e){return e.preventDefault(),p.close()}var y,M,_,A=null,T=l.when(!0),w=s(h.mdIsLockedOpen),k=function(){return w(d.$parent,{$media:function(t){return c.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t)},$mdMedia:e})};t.isDefined(h.mdDisableBackdrop)||(M=o.createBackdrop(d,"_md-sidenav-backdrop md-opaque ng-enter")),u.addClass("_md"),r(u),M&&r.inherit(M,u),u.on("$destroy",function(){M&&M.remove(),p.destroy()}),d.$on("$destroy",function(){M&&M.remove()}),d.$watch(k,f),d.$watch("isOpen",g),p.$toggleOpen=E}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("_md-closed"),e.attr("tabIndex","-1"),u}}}function r(e,t,n,o,i){var r=this;r.isOpen=function(){return!!e.isOpen},r.isLockedOpen=function(){return!!e.isLockedOpen},r.open=function(){return r.$toggleOpen(!0)},r.close=function(){return r.$toggleOpen(!1)},r.toggle=function(){return r.$toggleOpen(!e.isOpen)},r.$toggleOpen=function(t){return i.when(e.isOpen=t)},r.destroy=o.register(r,n.mdComponentId)}t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",i).directive("mdSidenavFocus",o).controller("$mdSidenavController",r),e.$inject=["$mdComponentRegistry","$mdUtil","$q","$log"],i.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$animate","$compile","$parse","$log","$q","$document"],r.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"]}(),function(){function e(){return{controller:function(){},compile:function(e){var o=e.find("md-slider");if(o){var i=o.attr("md-vertical");return i!==n&&e.attr("md-vertical",""),o.attr("flex")||o.attr("flex",""),function(e,n,o,i){function r(e){n.children().attr("disabled",e),n.find("input").attr("disabled",e)}n.addClass("_md");var a=t.noop;o.disabled?r(!0):o.ngDisabled&&(a=e.$watch(o.ngDisabled,function(e){r(e)})),e.$on("$destroy",function(){a()});var d;i.fitInputWidthToTextLength=function(e){var t=n[0].querySelector("md-input-container");if(t){var o=getComputedStyle(t),i=parseInt(o.minWidth),r=2*parseInt(o.padding);d=d||parseInt(o.maxWidth);var a=Math.max(d,i+r+i/2*e);t.style.maxWidth=a+"px"}}}}}}}function o(e,n,o,i,r,a,d,s,c,l){function m(e,n){var i=t.element(e[0].getElementsByClassName("_md-slider-wrapper")),r=n.tabindex||0;return i.attr("tabindex",r),(n.disabled||n.ngDisabled)&&i.attr("tabindex",-1),i.attr("role","slider"),o.expect(e,"aria-label"),u}function u(o,m,u,h){function p(){
y(),x()}function f(e){se=parseFloat(e),m.attr("aria-valuemin",e),p()}function g(e){ce=parseFloat(e),m.attr("aria-valuemax",e),p()}function b(e){le=parseFloat(e)}function v(e){me=S(parseInt(e),0,6)}function E(){m.attr("aria-disabled",!!Y())}function $(){if(ie&&!Y()&&!t.isUndefined(le)){if(0>=le){var e="Slider step value must be greater than zero when in discrete mode";throw c.error(e),new Error(e)}var o=Math.floor((ce-se)/le);ue||(ue=t.element("<canvas>").css("position","absolute"),J.append(ue),he=ue[0].getContext("2d"));var i=M();!i||i.height||i.width||(y(),i=pe),ue[0].width=i.width,ue[0].height=i.height;for(var r,a=0;o>=a;a++){var d=n.getComputedStyle(J[0]);he.fillStyle=d.color||"black",r=Math.floor((oe?i.height:i.width)*(a/o)),he.fillRect(oe?0:r-1,oe?r-1:0,oe?i.width:2,oe?2:i.height)}}}function C(){if(ue&&he){var e=M();he.clearRect(0,0,e.width,e.height)}}function y(){pe=Q[0].getBoundingClientRect()}function M(){return te(),pe}function _(e){if(!Y()){var t;(oe?e.keyCode===r.KEY_CODE.DOWN_ARROW:e.keyCode===r.KEY_CODE.LEFT_ARROW)?t=-le:(oe?e.keyCode===r.KEY_CODE.UP_ARROW:e.keyCode===r.KEY_CODE.RIGHT_ARROW)&&(t=le),t=re?-t:t,t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){k(W.$viewValue+t)}))}}function A(){$(),o.mouseActive=!0,ee.removeClass("md-focused"),l(function(){o.mouseActive=!1},100)}function T(){o.mouseActive===!1&&ee.addClass("md-focused")}function w(){ee.removeClass("md-focused"),m.removeClass("_md-active"),C()}function k(e){W.$setViewValue(S(N(e)))}function x(){isNaN(W.$viewValue)&&(W.$viewValue=W.$modelValue),W.$viewValue=S(W.$viewValue);var e=q(W.$viewValue);o.modelValue=W.$viewValue,m.attr("aria-valuenow",W.$viewValue),D(e),G.text(W.$viewValue)}function S(e,n,o){return t.isNumber(e)?(n=t.isNumber(n)?n:se,o=t.isNumber(o)?o:ce,Math.max(n,Math.min(o,e))):void 0}function N(e){if(t.isNumber(e)){var n=Math.round((e-se)/le)*le+se;return n=Math.round(n*Math.pow(10,me))/Math.pow(10,me),V&&V.fitInputWidthToTextLength&&i.debounce(function(){V.fitInputWidthToTextLength(n.toString().length)},100)(),n}}function D(e){e=U(e);var t=100*e+"%",n=re?100*(1-e)+"%":t;oe?X.css("bottom",t):i.bidiProperty(X,"left","right",t),Z.css(oe?"height":"width",n),m.toggleClass(re?"_md-max":"_md-min",0===e),m.toggleClass(re?"_md-min":"_md-max",1===e)}function H(e){if(!Y()){m.addClass("_md-active"),m[0].focus(),y();var t=z(j(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){k(n),D(q(n))})}}function I(e){if(!Y()){m.removeClass("_md-dragging");var t=z(j(oe?e.pointer.y:e.pointer.x)),n=S(N(t));o.$apply(function(){k(n),x()})}}function O(e){Y()||(fe=!0,e.stopPropagation(),m.addClass("_md-dragging"),P(e))}function L(e){fe&&(e.stopPropagation(),P(e))}function R(e){fe&&(e.stopPropagation(),fe=!1)}function P(e){ie?B(oe?e.pointer.y:e.pointer.x):F(oe?e.pointer.y:e.pointer.x)}function F(e){o.$evalAsync(function(){k(z(j(e)))})}function B(e){var t=z(j(e)),n=S(N(t));D(j(e)),G.text(n)}function U(e){return Math.max(0,Math.min(e||0,1))}function j(e){var t=oe?pe.top:pe.left,n=oe?pe.height:pe.width,o=(e-t)/n;return oe||"rtl"!==i.bidi()||(o=1-o),Math.max(0,Math.min(1,oe?1-o:o))}function z(e){var t=re?1-e:e;return se+t*(ce-se)}function q(e){var t=(e-se)/(ce-se);return re?1-t:t}a(m);var W=h[0]||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]},V=h[1],Y=(t.element(i.getClosest(m,"_md-slider-container",!0)),u.ngDisabled?t.bind(null,s(u.ngDisabled),o.$parent):function(){return m[0].hasAttribute("disabled")}),K=t.element(m[0].querySelector("._md-thumb")),G=t.element(m[0].querySelector("._md-thumb-text")),X=K.parent(),Q=t.element(m[0].querySelector("._md-track-container")),Z=t.element(m[0].querySelector("._md-track-fill")),J=t.element(m[0].querySelector("._md-track-ticks")),ee=t.element(m[0].getElementsByClassName("_md-slider-wrapper")),te=(t.element(m[0].getElementsByClassName("_md-slider-content")),i.throttle(y,5e3)),ne=3,oe=t.isDefined(u.mdVertical),ie=t.isDefined(u.mdDiscrete),re=t.isDefined(u.mdInvert);t.isDefined(u.min)?u.$observe("min",f):f(0),t.isDefined(u.max)?u.$observe("max",g):g(100),t.isDefined(u.step)?u.$observe("step",b):b(1),t.isDefined(u.round)?u.$observe("round",v):v(ne);var ae=t.noop;u.ngDisabled&&(ae=o.$parent.$watch(u.ngDisabled,E)),d.register(ee,"drag",{horizontal:!oe}),o.mouseActive=!1,ee.on("keydown",_).on("mousedown",A).on("focus",T).on("blur",w).on("$md.pressdown",H).on("$md.pressup",I).on("$md.dragstart",O).on("$md.drag",L).on("$md.dragend",R),setTimeout(p,0);var de=e.throttle(p);t.element(n).on("resize",de),o.$on("$destroy",function(){t.element(n).off("resize",de)}),W.$render=x,W.$viewChangeListeners.push(x),W.$formatters.push(S),W.$formatters.push(N);var se,ce,le,me,ue,he,pe={};y();var fe=!1}return{scope:{},require:["?ngModel","?^mdSliderContainer"],template:'<div class="_md-slider-wrapper"><div class="_md-slider-content"><div class="_md-track-container"><div class="_md-track"></div><div class="_md-track _md-track-fill"></div><div class="_md-track-ticks"></div></div><div class="_md-thumb-container"><div class="_md-thumb"></div><div class="_md-focus-thumb"></div><div class="_md-focus-ring"></div><div class="_md-sign"><span class="_md-thumb-text"></span></div><div class="_md-disabled-thumb"></div></div></div></div>',compile:m}}t.module("material.components.slider",["material.core"]).directive("mdSlider",o).directive("mdSliderContainer",e),o.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log","$timeout"]}(),function(){function e(e,t,o,i){function r(i){function r(e,t){t.addClass("_md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),o.nextTick(function(){h.prepend(n.clone)}),p(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),p()}}function d(){f.items.forEach(s),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=h.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}l(e)}function s(e){var t=e.element[0];for(e.top=0,e.left=0,e.right=0;t&&t!==h[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t.offsetParent&&(e.right+=t.offsetParent.offsetWidth-t.offsetWidth-t.offsetLeft),t=t.offsetParent;e.height=e.element.prop("offsetHeight");var i=o.floatingScrollbars()?"0":n;o.bidi(e.clone,"margin-left",e.left,i),o.bidi(e.clone,"margin-right",i,e.right)}function c(){var e=h.prop("scrollTop"),t=e>(c.prevScrollTop||0);if(c.prevScrollTop=e,0===e)return void l(null);if(t){if(f.next&&f.next.top<=e)return void l(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e))}if(!t){if(f.current&&f.prev&&e<f.current.top)return void l(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height))}f.current&&u(f.current,e)}function l(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev")}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(t,i){t&&(null===i||i===n?t.translateY&&(t.translateY=null,t.clone.css(e.CSS.TRANSFORM,"")):(t.translateY=i,o.bidi(t.clone,e.CSS.TRANSFORM,"translate3d("+t.left+"px,"+i+"px,0)","translateY("+i+"px)")))}var h=i.$element,p=t.throttle(d);a(h),h.on("$scrollstart",p),h.on("$scroll",c);var f;return f={prev:null,current:null,next:null,items:[],add:r,refreshElements:d}}function a(e){function n(){+o.now()-r>a?(i=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),t.throttle(n))}var i,r,a=200;e.on("scroll touchmove",function(){i||(i=!0,t.throttle(n),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),r=+o.now()})}var d=o.checkStickySupport();return function(e,t,n){var o=t.controller("mdContent");if(o)if(d)t.css({position:d,top:0,"z-index":2});else{var a=o.$element.data("$$sticky");a||(a=r(o),o.$element.data("$$sticky",a));var s=n||i(t.clone())(e),c=a.add(t,s);e.$on("$destroy",c)}}}t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e),e.$inject=["$mdConstant","$$rAF","$mdUtil","$compile"]}(),function(){function e(e,n,o,i){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader _md">  <div class="_md-subheader-inner">    <div class="_md-subheader-content"></div>  </div></div>',link:function(r,a,d,s,c){function l(e){return t.element(e[0].querySelector("._md-subheader-content"))}o(a),a.addClass("_md");var m=a[0].outerHTML;c(r,function(e){l(a).append(e)}),a.hasClass("md-no-sticky")||c(r,function(t){var o=n('<div class="_md-subheader-wrapper">'+m+"</div>")(r);i.nextTick(function(){l(o).append(t)}),e(r,a,o)})}}}t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e),e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil"]}(),function(){function e(e){function t(e){function t(t,i,r){var a=e(r[n]);i.on(o,function(e){t.$applyAsync(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}var n="md"+e,o="$md."+e.toLowerCase();return t.$inject=["$parse"],t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight")).directive("mdSwipeUp",e("SwipeUp")).directive("mdSwipeDown",e("SwipeDown"))}(),function(){function e(e,n,o,i,r,a,d){function s(e,s){var l=c.compile(e,s);return e.addClass("_md-dragging"),function(e,s,c,m){function u(t){g&&g(e)||(t.stopPropagation(),s.addClass("_md-dragging"),E={width:b.prop("offsetWidth")})}function h(e){if(E){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/E.width,n=m.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),b.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),E.translate=n}}function p(t){if(E){t.stopPropagation(),s.removeClass("_md-dragging"),b.css(o.CSS.TRANSFORM,"");var n=m.$viewValue?E.translate<.5:E.translate>.5;n&&f(!m.$viewValue),E=null,e.skipToggle=!0,d(function(){e.skipToggle=!1},1)}}function f(t){e.$apply(function(){m.$setViewValue(t),m.$render()})}m=m||n.fakeNgModel();var g=null;null!=c.disabled?g=function(){return!0}:c.ngDisabled&&(g=i(c.ngDisabled));var b=t.element(s[0].querySelector("._md-thumb-container")),v=t.element(s[0].querySelector("._md-container"));r(function(){s.removeClass("_md-dragging")}),l(e,s,c,m),g&&e.$watch(g,function(e){s.attr("tabindex",e?-1:0)}),a.register(v,"drag"),v.on("$md.dragstart",u).on("$md.drag",h).on("$md.dragend",p);var E}}var c=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="_md-container"><div class="_md-bar"></div><div class="_md-thumb-container"><div class="_md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="_md-label"></div>',require:"?ngModel",compile:s}}t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e),e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture","$timeout"]}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e){i=e}function o(e,n,o,r){function a(t,a,d){i=d.textContent||d.content;var l=!r("gt-sm");return a=o.extractElementByName(a,"md-toast",!0),d.element=a,d.onSwipe=function(e,t){var i=e.type.replace("$md.",""),r=i.replace("swipe","");"down"===r&&-1!=d.position.indexOf("top")&&!l||"up"===r&&(-1!=d.position.indexOf("bottom")||l)||("left"!==r&&"right"!==r||!l)&&(a.addClass("_md-"+i),o.nextTick(n.cancel))},d.openClass=s(d.position),d.parent.addClass(d.openClass),o.hasComputedStyle(d.parent,"position","static")&&d.parent.css("position","relative"),a.on(c,d.onSwipe),a.addClass(l?"_md-bottom":d.position.split(" ").map(function(e){return"_md-"+e}).join(" ")),d.parent&&d.parent.addClass("_md-toast-animating"),e.enter(a,d.parent).then(function(){d.parent&&d.parent.removeClass("_md-toast-animating")})}function d(t,n,i){return n.off(c,i.onSwipe),i.parent&&i.parent.addClass("_md-toast-animating"),i.openClass&&i.parent.removeClass(i.openClass),(1==i.$destroy?n.remove():e.leave(n)).then(function(){i.parent&&i.parent.removeClass("_md-toast-animating"),o.hasComputedStyle(i.parent,"position","static")&&i.parent.css("position","")})}function s(e){return r("gt-xs")?"_md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom"):"_md-toast-open-bottom"}var c="$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return{onShow:a,onRemove:d,position:"bottom left",themable:!0,hideDelay:3e3,autoWrap:!0,transformTemplate:function(e,n){var o=n.autoWrap&&e&&!/md-toast-content/g.test(e);if(o){var i=document.createElement("md-template");i.innerHTML=e;for(var r=0;r<i.children.length;r++)if("MD-TOAST"===i.children[r].nodeName){var a=t.element('<div class="md-toast-content">');a.append(t.element(i.children[r].childNodes)),i.children[r].appendChild(a[0])}return i.outerHTML}return e||""}}}var i,r="ok",a=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent","position"],options:o}).addPreset("simple",{argOption:"textContent",methods:["textContent","content","action","highlightAction","highlightClass","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){return{template:'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span flex class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>',controller:["$scope",function(t){var n=this;n.highlightAction&&(t.highlightClasses=["md-highlight",n.highlightClass]),t.$watch(function(){return i},function(){n.content=i}),this.resolve=function(){e.hide(r)}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0}}]}).addMethod("updateTextContent",n).addMethod("updateContent",n);return o.$inject=["$animate","$mdToast","$mdUtil","$mdMedia"],a}t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n),e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,o,i,r){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{template:"",restrict:"E",link:function(d,s,c){function l(){function i(e){var t=s.parent().find("md-content");!f&&t.length&&l(null,t),e=d.$eval(e),e===!1?g():g=u()}function l(e,t){t&&s.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",$),f=t,g=u())}function m(e){var t=e?e.target.scrollTop:v;C(),b=Math.min(p/E,Math.max(0,b+t-v)),s.css(n.CSS.TRANSFORM,a([-b*E])),f.css(n.CSS.TRANSFORM,a([(p-b)*E])),v=t,o.nextTick(function(){var e=s.hasClass("md-whiteframe-z1");e&&!b?r.removeClass(s,"md-whiteframe-z1"):!e&&b&&r.addClass(s,"md-whiteframe-z1")})}function u(){return f?(f.on("scroll",$),f.attr("scroll-shrink","true"),o.nextTick(h,!1),function(){f.off("scroll",$),f.attr("scroll-shrink","false"),h()}):t.noop}function h(){p=s.prop("offsetHeight");var e=-p*E+"px";f.css({"margin-top":e,"margin-bottom":e}),m()}var p,f,g=t.noop,b=0,v=0,E=c.mdShrinkSpeedFactor||.5,$=e.throttle(m),C=o.debounce(h,5e3);d.$on("$mdContentLoaded",l),c.$observe("mdScrollShrink",i),c.ngShow&&d.$watch(c.ngShow,h),c.ngHide&&d.$watch(c.ngHide,h),d.$on("$destroy",g)}s.addClass("_md"),i(s),o.nextTick(function(){s.addClass("_md-toolbar-transitions")},!1),t.isDefined(c.mdScrollShrink)&&l()}}}t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e),e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"]}(),function(){function e(e,n,o,i,r,a,d,s,c,l){function m(d,m,g){function b(){d.delay=d.delay||p}function v(){var e="center top";switch(d.direction){case"left":e="right center";break;case"right":e="left center";break;case"top":e="center bottom";break;case"bottom":e="center top"}S.css("transform-origin",e)}function E(e){e?A():T()}function $(){if(m[0]&&"MutationObserver"in n){var e=new MutationObserver(function(e){e.forEach(function(e){"md-visible"===e.attributeName&&(d.visibleWatcher||(d.visibleWatcher=d.$watch("visible",E))),"md-direction"===e.attributeName&&w(d.direction)})});e.observe(m[0],{attributes:!0}),g.hasOwnProperty("mdVisible")&&(d.visibleWatcher=d.$watch("visible",E))}else d.visibleWatcher=d.$watch("visible",E),d.$watch("direction",w);var t=function(){d.$destroy()};m.one("$destroy",t),x.one("$destroy",t),d.$on("$destroy",function(){_(!1),m.remove(),e&&e.disconnect()}),m.text().indexOf(l.startSymbol())>-1&&d.$watch(function(){return m.text().trim()},C)}function C(e){if((e||!x.attr("aria-label"))&&!x.text().trim()){var t=e||m.text().trim(),n=l(t)(x.scope());x.attr("aria-label",n)}}function y(){m.detach(),m.attr("role","tooltip")}function M(){function o(){_(!1)}var a=!1;if(x[0]&&"MutationObserver"in n){var s=new MutationObserver(function(e){e.some(function(e){return"disabled"===e.attributeName&&x[0].disabled})&&r.nextTick(function(){_(!1)})});s.observe(x[0],{attributes:!0})}var c=function(){l=document.activeElement===x[0]},l=!1;t.element(n).on("blur",c).on("resize",H),document.addEventListener("scroll",o,!0),d.$on("$destroy",function(){t.element(n).off("blur",c).off("resize",H),x.off(u,m).off(h,p).off("mousedown",f),p(),document.removeEventListener("scroll",o,!0),s&&s.disconnect()});var m=function(e){"focus"===e.type&&l?l=!1:d.visible||(x.on(h,p),_(!0),"touchstart"===e.type&&x.one("touchend",function(){r.nextTick(function(){i.one("touchend",p)},!1)}))},p=function(){var t=d.hasOwnProperty("autohide")?d.autohide:g.hasOwnProperty("mdAutohide");(t||a||i[0].activeElement!==x[0])&&(D&&(e.cancel(D),_.queued=!1,D=null),x.off(h,p),x.triggerHandler("blur"),_(!1)),a=!1},f=function(){a=!0};x.on("mousedown",f),x.on(u,m)}function _(t){_.queued&&_.value===!!t||!_.queued&&d.visible===!!t||(_.value=!!t,_.queued||(t?(_.queued=!0,D=e(function(){d.visible=_.value,_.queued=!1,D=null,d.visibleWatcher||E(d.visible)},d.delay)):r.nextTick(function(){d.visible=!1,d.visibleWatcher||E(!1)})))}function A(){if(m[0].textContent.trim()){if(m.css({top:0,left:0}),N.append(m),r.hasComputedStyle(m,"display","none"))return d.visible=!1,void m.detach();w(),t.forEach([m,S],function(e){s.addClass(e,"_md-show")})}}function T(){var e=[];t.forEach([m,S],function(t){t.parent()&&t.hasClass("_md-show")&&e.push(s.removeClass(t,"_md-show"))}),c.all(e).then(function(){d.visible||m.detach()})}function w(){d.visible&&(v(),k())}function k(){function e(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,N.prop("scrollWidth")-n.width-f),t.left=Math.max(t.left,f),t.top=Math.min(t.top,N.prop("scrollHeight")-n.height-f),t.top=Math.max(t.top,f),t}function t(e){return"left"===e?{left:o.left-n.width-f,top:o.top+o.height/2-n.height/2}:"right"===e?{left:o.left+o.width+f,top:o.top+o.height/2-n.height/2}:"top"===e?{left:o.left+o.width/2-n.width/2,top:o.top-n.height-f}:{left:o.left+o.width/2-n.width/2,top:o.top+o.height+f}}var n=r.offsetRect(m,N),o=r.offsetRect(x,N),i=t(d.direction),a=m.prop("offsetParent");d.direction?i=e(i):a&&i.top>a.scrollHeight-n.height-f&&(i=e(t("top"))),m.css({left:i.left+"px",top:i.top+"px"})}a(m);var x=r.getParentWithPointerEvents(m),S=t.element(m[0].getElementsByClassName("_md-content")[0]),N=t.element(document.body),D=null,H=o.throttle(function(){w()});s.pin&&s.pin(m,x),b(),y(),M(),v(),$(),C()}var u="focus touchstart mouseenter",h="blur touchcancel mouseleave",p=0,f=8;return{restrict:"E",transclude:!0,priority:210,template:'<div class="_md-content _md" ng-transclude></div>',scope:{delay:"=?mdDelay",visible:"=?mdVisible",autohide:"=?mdAutohide",direction:"@?mdDirection"},compile:function(e,t){return t.mdDirection||t.$set("mdDirection","bottom"),m}}}t.module("material.components.tooltip",["material.core"]).directive("mdTooltip",e),e.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q","$interpolate"]}(),function(){function e(){return{controller:o,template:n,compile:function(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical")}}}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>"}function o(e,n,o,i,r,a,d,s){this.$rootScope=i,this.$scope=a,this.$element=d,this.$attrs=s,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.oldElementSize=null,this.$attrs.mdTopIndex?(this.bindTopIndex=o(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e)}))):this.topIndex=0,this.scroller=d[0].getElementsByClassName("md-virtual-repeat-scroller")[0],this.sizer=this.scroller.getElementsByClassName("md-virtual-repeat-sizer")[0],this.offsetter=this.scroller.getElementsByClassName("md-virtual-repeat-offsetter")[0];var c=t.bind(this,this.updateSize);e(t.bind(this,function(){c();var e=n.debounce(c,10,null,!1),o=t.element(r);this.size||e(),o.on("resize",e),a.$on("$destroy",function(){o.off("resize",e)}),a.$emit("$md-resize-enable"),a.$on("$md-resize",c)}))}function i(e){return{controller:r,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function(t,n){var o=n.mdVirtualRepeat,i=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),r=i[1],a=e(i[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,i){o[0].link_(o[1],i,r,a,d)}}}}function r(e,n,o,i,r,a,d,s){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=i,this.$document=r,this.$rootScope=a,this.$$rAF=d,this.onDemand=s.parseAttributeBoolean(o.mdOnDemand),this.browserCheckUrlChange=i.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.isVirtualRepeatUpdating_=!1,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[],e.$on("$destroy",t.bind(this,this.cleanupBlocks_))}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e}t.module("material.components.virtualRepeat",["material.core","material.components.showHide"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",i);var d=1533917,s=3;o.$inject=["$$rAF","$mdUtil","$parse","$rootScope","$window","$scope","$element","$attrs"],o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_))},o.prototype.isHorizontal=function(){return this.horizontal},o.prototype.getSize=function(){return this.size},o.prototype.setSize_=function(e){var t=this.getDimensionName_();this.size=e,this.$element[0].style[t]=e+"px"},o.prototype.unsetSize_=function(){this.$element[0].style[this.getDimensionName_()]=this.oldElementSize,this.oldElementSize=null},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.handleScroll_(),this.repeater&&this.repeater.containerUpdated())},o.prototype.getScrollSize=function(){return this.scrollSize},o.prototype.getDimensionName_=function(){return this.isHorizontal()?"width":"height"},o.prototype.sizeScroller_=function(e){var t=this.getDimensionName_(),n=this.isHorizontal()?"height":"width";if(this.sizer.innerHTML="",d>e)this.sizer.style[t]=e+"px";else{this.sizer.style[t]="auto",this.sizer.style[n]="auto";var o=Math.floor(e/d),i=document.createElement("div");i.style[t]="1533917px",i.style[n]="1px";for(var r=0;o>r;r++)this.sizer.appendChild(i.cloneNode(!1));i.style[t]=e-o*d+"px",this.sizer.appendChild(i)}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());if(this.autoShrink&&t!==this.size){null===this.oldElementSize&&(this.oldElementSize=this.$element[0].style[this.getDimensionName_()]);var n=this.originalSize||this.size;if(!n||n>t)this.originalSize||(this.originalSize=this.size),this.setSize_(t);else if(null!==this.originalSize){this.unsetSize_();var o=this.originalSize;this.originalSize=null,o||this.updateSize(),this.setSize_(o||this.size)}this.repeater.containerUpdated()}},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t)},o.prototype.getScrollOffset=function(){return this.scrollOffset},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_()},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e)},o.prototype.resetScroll=function(){this.scrollTo(0)},o.prototype.handleScroll_=function(){var e=t.element(document)[0],n="rtl"!=e.dir&&"rtl"!=e.body.dir;n||this.maxSize||(this.scroller.scrollLeft=this.scrollSize,this.maxSize=this.scroller.scrollLeft);var o=this.isHorizontal()?n?this.scroller.scrollLeft:this.maxSize-this.scroller.scrollLeft:this.scroller.scrollTop;if(!(o===this.scrollOffset||o>this.scrollSize-this.size)){var i=this.repeater.getItemSize();if(i){var r=Math.max(0,Math.floor(o/i)-s),a=(this.isHorizontal()?"translateX(":"translateY(")+(!this.isHorizontal()||n?r*i:-(r*i))+"px)";if(this.scrollOffset=o,this.offsetter.style.webkitTransform=a,this.offsetter.style.transform=a,this.bindTopIndex){var d=Math.floor(o/i);d!==this.topIndex&&d<this.repeater.getItemCount()&&(this.topIndex=d,this.bindTopIndex.assign(this.$scope,d),this.$rootScope.$$phase||this.$scope.$digest())}this.repeater.containerUpdated()}}},i.$inject=["$parse"],r.$inject=["$scope","$element","$attrs","$browser","$document","$rootScope","$$rAF","$mdUtil"],r.Block,r.prototype.link_=function(e,n,o,i,r){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=i,this.extraName=r,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this)},r.prototype.cleanupBlocks_=function(){t.forEach(this.pooledBlocks,function(e){e.element.remove()})},r.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),this.itemSize&&this.containerUpdated()}},r.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n}return t},r.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e,t){this.isVirtualRepeatUpdating_||this.virtualRepeatUpdate_(e,t)}))),this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_&&this.unwatchItemSize_!==t.noop&&this.unwatchItemSize_(),this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.$$rAF(t.bind(this,this.readItemSize_))})),void(this.$rootScope.$$phase||this.$scope.$digest()))},r.prototype.getItemSize=function(){return this.itemSize},r.prototype.getItemCount=function(){return this.itemsLength},r.prototype.virtualRepeatUpdate_=function(e,n){this.isVirtualRepeatUpdating_=!0;var o=e&&e.length||0,i=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset()){this.items=e;var r=this.container.getScrollOffset();return this.container.resetScroll(),void this.container.scrollTo(r)}if(o!==this.itemsLength&&(i=!0,this.itemsLength=o),this.items=e,(e!==n||i)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,i&&this.container.setScrollSize(o*this.itemSize),this.isFirstRender){this.isFirstRender=!1;var a=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex;this.container.scrollToIndex(a)}Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t)},this),this.$browser.$$checkUrlChange=t.noop;var d,s,c=[],l=[];for(d=this.newStartIndex;d<this.newEndIndex&&null==this.blocks[d];d++)s=this.getBlock_(d),this.updateBlock_(s,d),c.push(s);for(;null!=this.blocks[d];d++)this.updateBlock_(this.blocks[d],d);for(var m=d-1;d<this.newEndIndex;d++)s=this.getBlock_(d),this.updateBlock_(s,d),l.push(s);c.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(c),this.$element[0].nextSibling),l.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(l),this.blocks[m]&&this.blocks[m].element[0].nextSibling),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex,this.isVirtualRepeatUpdating_=!1},r.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0])})),n},r.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$rootScope.$$phase||e.scope.$digest())},r.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t])},r.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e]},r.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0])}),t},r.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+s,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-s)},a.prototype.$$includeIndexes=function(e,t){for(var n=e;t>n;n++)this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));this.length=this.model.getLength()}}(),function(){function e(e){function t(t,a,d){var s="";d.$observe("mdWhiteframe",function(t){t=parseInt(t,10)||r,t!=n&&(t>i||o>t)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+o+" and "+i,a[0]),
t=r);var c=t==n?"":"md-whiteframe-"+t+"dp";d.$updateClass(c,s),s=c})}var n=-1,o=1,i=24,r=4;return{link:t}}t.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",e),e.$inject=["$log"]}(),function(){function e(e,o,d,s,c,l,m,u,h,p){function f(){d.initOptionalProperties(e,h,{searchText:null,selectedItem:null}),c(o),E(),d.nextTick(function(){C(),b(),v(),o.on("focus",v)})}function g(){function t(){var e=0,t=o.find("md-input-container");if(t.length){var n=t.find("input");e=t.prop("offsetHeight"),e-=n.prop("offsetTop"),e-=n.prop("offsetHeight"),e+=t.prop("offsetTop")}return e}function n(){var e=he.scrollContainer.getBoundingClientRect(),t={};e.right>m.right-r&&(t.left=c.right-e.width+"px"),he.$.scrollContainer.css(t)}if(!he)return d.nextTick(g,!1,e);var s,c=he.wrap.getBoundingClientRect(),l=he.snap.getBoundingClientRect(),m=he.root.getBoundingClientRect(),u=l.bottom-m.top,p=m.bottom-l.top,f=c.left-m.left,b=c.width,v=t();h.mdFloatingLabel&&(f+=a,b-=2*a),s={left:f+"px",minWidth:b+"px",maxWidth:Math.max(c.right-m.left,m.right-c.left)-r+"px"},u>p&&m.height-c.bottom-r<i?(s.top="auto",s.bottom=p+"px",s.maxHeight=Math.min(i,c.top-m.top-r)+"px"):(s.top=u-v+"px",s.bottom="auto",s.maxHeight=Math.min(i,m.bottom+d.scrollTop()-c.bottom-r)+"px"),he.$.scrollContainer.css(s),d.nextTick(n,!1)}function b(){he.$.root.length&&(c(he.$.scrollContainer),he.$.scrollContainer.detach(),he.$.root.append(he.$.scrollContainer),m.pin&&m.pin(he.$.scrollContainer,u))}function v(){e.autofocus&&he.input.focus()}function E(){var n=parseInt(e.delay,10)||0;h.$observe("disabled",function(e){le.isDisabled=d.parseAttributeBoolean(e,!1)}),h.$observe("required",function(e){le.isRequired=d.parseAttributeBoolean(e,!1)}),h.$observe("readonly",function(e){le.isReadonly=d.parseAttributeBoolean(e,!1)}),e.$watch("searchText",n?d.debounce(O,n):O),e.$watch("selectedItem",x),t.element(l).on("resize",g),e.$on("$destroy",$)}function $(){if(le.hidden||d.enableScrolling(),t.element(l).off("resize",g),he){var e="ul scroller scrollContainer input".split(" ");t.forEach(e,function(e){he.$[e].remove()})}}function C(){he={main:o[0],scrollContainer:o[0].getElementsByClassName("md-virtual-repeat-container")[0],scroller:o[0].getElementsByClassName("md-virtual-repeat-scroller")[0],ul:o.find("ul")[0],input:o.find("input")[0],wrap:o.find("md-autocomplete-wrap")[0],root:document.body},he.li=he.ul.getElementsByTagName("li"),he.snap=y(),he.$=M(he)}function y(){for(var e=o;e.length;e=e.parent())if(t.isDefined(e.attr("md-autocomplete-snap")))return e[0];return he.wrap}function M(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));return n}function _(n,o){!n&&o?(g(),he&&d.nextTick(function(){d.disableScrollAround(he.ul),$e=A(t.element(he.wrap))},!1,e)):n&&!o&&d.nextTick(function(){d.enableScrolling(),$e&&($e(),$e=null)},!1,e)}function A(e){function t(e){e.preventDefault()}return e.on("wheel",t),e.on("touchmove",t),function(){e.off("wheel",t),e.off("touchmove",t)}}function T(){fe=!0}function w(){be||he.input.focus(),fe=!1,le.hidden=W()}function k(){he.input.focus()}function x(t,n){t&&U(t).then(function(o){e.searchText=o,D(t,n)}),t!==n&&S()}function S(){t.isFunction(e.itemChange)&&e.itemChange(j(e.selectedItem))}function N(){t.isFunction(e.textChange)&&e.textChange()}function D(e,t){ge.forEach(function(n){n(e,t)})}function H(e){-1==ge.indexOf(e)&&ge.push(e)}function I(e){var t=ge.indexOf(e);-1!=t&&ge.splice(t,1)}function O(t,n){le.index=z(),t!==n&&U(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&N(),Q()?se():(le.matches=[],q(!1),ne()))})}function L(){be=!1,fe||(le.hidden=W())}function R(e){e&&(fe=!1,be=!1),he.input.blur()}function P(n){be=!0,t.isString(e.searchText)||(e.searchText=""),le.hidden=W(),le.hidden||se()}function F(t){switch(t.keyCode){case s.KEY_CODE.DOWN_ARROW:if(le.loading)return;t.stopPropagation(),t.preventDefault(),le.index=Math.min(le.index+1,le.matches.length-1),ie(),ne();break;case s.KEY_CODE.UP_ARROW:if(le.loading)return;t.stopPropagation(),t.preventDefault(),le.index=le.index<0?le.matches.length-1:Math.max(0,le.index-1),ie(),ne();break;case s.KEY_CODE.TAB:if(w(),le.hidden||le.loading||le.index<0||le.matches.length<1)return;J(le.index);break;case s.KEY_CODE.ENTER:if(le.hidden||le.loading||le.index<0||le.matches.length<1)return;if(K())return;t.stopPropagation(),t.preventDefault(),J(le.index);break;case s.KEY_CODE.ESCAPE:t.stopPropagation(),t.preventDefault(),e.searchText&&ee(),R(!0)}}function B(){return t.isNumber(e.minLength)?e.minLength:1}function U(t){function n(t){return t&&e.itemText?e.itemText(j(t)):null}return p.when(n(t)||t)}function j(e){if(!e)return n;var t={};return le.itemName&&(t[le.itemName]=e),t}function z(){return e.autoselect?0:-1}function q(e){le.loading!=e&&(le.loading=e),le.hidden=W()}function W(){return le.loading&&!Y()?!0:K()?!0:be?!V():!0}function V(){return Q()&&Y()||de()}function Y(){return!!le.matches.length}function K(){return!!le.scope.selectedItem}function G(){return le.loading&&!K()}function X(){return U(le.matches[le.index])}function Q(){return(e.searchText||"").length>=B()}function Z(e,t,n){Object.defineProperty(le,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function J(t){d.nextTick(function(){U(le.matches[t]).then(function(e){var t=he.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=le.matches[t],q(!1)})},!1)}function ee(t){q(!0),le.index=0,le.matches=[],e.searchText="";var n=document.createEvent("CustomEvent");n.initCustomEvent("input",!0,!0,{value:""}),he.input.dispatchEvent(n),he.input.blur(),e.searchText="",he.input.focus()}function te(n){function o(t){t&&(t=p.when(t),Ee++,q(!0),d.nextTick(function(){t.then(i)["finally"](function(){0===--Ee&&q(!1)})},!0,e))}function i(t){pe[a]=t,(n||"")===(e.searchText||"")&&(le.matches=t,le.hidden=W(),le.loading&&q(!1),e.selectOnMatch&&ce(),ne(),g())}var r=e.$parent.$eval(ue),a=n.toLowerCase(),s=t.isArray(r),c=!!r.then;s?i(r):c&&o(r)}function ne(){X().then(function(e){le.messages=[oe(),e]})}function oe(){if(ve===le.matches.length)return"";switch(ve=le.matches.length,le.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+le.matches.length+" matches available."}}function ie(){if(he.li[0]){var e=he.li[0].offsetHeight,t=e*le.index,n=t+e,o=he.scroller.clientHeight,i=he.scroller.scrollTop;i>t?ae(t):n>i+o&&ae(n-o)}}function re(){return 0!==Ee}function ae(e){he.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function de(){var e=(le.scope.searchText||"").length;return le.hasNotFound&&!Y()&&(!le.loading||re())&&e>=B()&&(be||fe)&&!K()}function se(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&pe[n]?(le.matches=pe[n],ne(),q(!1)):te(t),le.hidden=W()}function ce(){var t=e.searchText,n=le.matches,o=n[0];1===n.length&&U(o).then(function(n){var o=t==n;e.matchInsensitive&&!o&&(o=t.toLowerCase()==n.toLowerCase()),o&&J(0)})}var le=this,me=e.itemsExpr.split(/ in /i),ue=me[1],he=null,pe={},fe=!1,ge=[],be=!1,ve=0,Ee=0,$e=null;return Z("hidden",_,!0),le.scope=e,le.parent=e.$parent,le.itemName=me[0],le.matches=[],le.loading=!1,le.hidden=!0,le.index=null,le.messages=[],le.id=d.nextUid(),le.isDisabled=null,le.isRequired=null,le.isReadonly=null,le.hasNotFound=!1,le.keydown=F,le.blur=L,le.focus=P,le.clear=ee,le.select=J,le.listEnter=T,le.listLeave=w,le.mouseUp=k,le.getCurrentDisplayValue=X,le.registerSelectedItemWatcher=H,le.unregisterSelectedItemWatcher=I,le.notFoundVisible=de,le.loadingIsVisible=G,f()}t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=41,i=5.5*o,r=8,a=2;e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q"]}(),function(){function e(e){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",selectOnMatch:"=?mdSelectOnMatch",matchInsensitive:"=?mdMatchCaseInsensitive",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId"},link:function(e,t,n,o){o.hasNotFound=!!t.attr("md-has-not-found")},template:function(t,n){function o(){var e=t.find("md-item-template").detach(),n=e.length?e.html():t.html();return e.length||t.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function i(){var e=t.find("md-not-found").detach(),n=e.length?e.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function r(){return n.mdFloatingLabel?'            <md-input-container flex ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=c?'tabindex="'+c+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur()"                  '+(null!=n.mdNoAsterisk?'md-no-asterisk="'+n.mdNoAsterisk+'"':"")+'                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  '+(null!=n.mdSelectOnFocus?'md-select-on-focus=""':"")+'                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+s+"</div>            </md-input-container>":'            <input flex type="search"                '+(null!=c?'tabindex="'+c+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                '+(null!=n.mdSelectOnFocus?'md-select-on-focus=""':"")+'                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>            <button                type="button"                tabindex="-1"                ng-if="$mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled"                ng-click="$mdAutocompleteCtrl.clear($event)">              <md-icon md-svg-src="'+e.mdClose+'"></md-icon>              <span class="_md-visually-hidden">Clear</span>            </button>                '}var a=i(),d=o(),s=t.html(),c=n.tabindex;return a&&t.attr("md-has-not-found",!0),t.attr("tabindex","-1"),"        <md-autocomplete-wrap            layout=\"row\"            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel, 'md-menu-showing': !$mdAutocompleteCtrl.hidden }\">          "+r()+'          <md-progress-linear              class="'+(n.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+d+"                  </li>"+a+'            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>        <aria-status            class="_md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages track by $index" ng-if="message">{{message}}</p>        </aria-status>'}}}t.module("material.components.autocomplete").directive("mdAutocomplete",e),e.$inject=["$$mdSvgRegistry"]}(),function(){function e(e,t){function n(e,n,o){return function(e,n,i){function r(n,o){s[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){s[o]=e})})}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||s.$digest(),t=n=!1}))}),s.$watch(function(){n=!0})}var d=e.$mdAutocompleteCtrl,s=d.parent.$new(),c=d.itemName;r("$index","$index"),r("item",c),a(),o(s,function(e){n.after(e)})}}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"}}t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e),e.$inject=["$compile","$mdUtil"]}(),function(){function e(e,n,o){function i(i,r){var d=null,s=null,c=o.mdHighlightFlags||"",l=e.$watch(function(e){return{term:i(e),unsafeText:r(e)}},function(e,o){null!==d&&e.unsafeText===o.unsafeText||(d=t.element("<div>").text(e.unsafeText).html()),null!==s&&e.term===o.term||(s=a(e.term,c)),n.html(d.replace(s,'<span class="highlight">$&</span>'))},!0);n.on("$destroy",l)}function r(e){return e&&e.replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}function a(e,t){var n="",o="";return t.indexOf("^")>=0&&(n="^"),t.indexOf("$")>=0&&(o="$"),new RegExp(n+r(e)+o,t.replace(/[\$\^]/g,""))}this.init=i}t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.$inject=["$scope","$element","$attrs"]}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var i=t(o.mdHighlightText),r=e(n.html());return function(e,t,n,o){o.init(i,r)}}}}t.module("material.components.autocomplete").directive("mdHighlightText",e),e.$inject=["$interpolate","$parse"]}(),function(){function o(e,t,o,i,r){this.$scope=e,this.$element=t,this.$mdConstant=o,this.$timeout=i,this.$mdUtil=r,this.isEditting=!1,this.parentController=n,this.enableChipEdit=!1}t.module("material.components.chips").controller("MdChipCtrl",o),o.$inject=["$scope","$element","$mdConstant","$timeout","$mdUtil"],o.prototype.init=function(e){this.parentController=e,this.enableChipEdit=this.parentController.enableChipEdit,this.enableChipEdit&&(this.$element.on("keydown",this.chipKeyDown.bind(this)),this.$element.on("mousedown",this.chipMouseDown.bind(this)),this.getChipContent().addClass("_md-chip-content-edit-is-enabled"))},o.prototype.getChipContent=function(){var e=this.$element[0].getElementsByClassName("_md-chip-content");return t.element(e[0])},o.prototype.getContentElement=function(){return t.element(this.getChipContent().children()[0])},o.prototype.getChipIndex=function(){return parseInt(this.$element.attr("index"))},o.prototype.goOutOfEditMode=function(){if(this.isEditting){this.isEditting=!1,this.$element.removeClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="false";var e=this.getChipIndex(),t=this.getContentElement().text();t?(this.parentController.updateChipContents(e,this.getContentElement().text()),this.$mdUtil.nextTick(function(){this.parentController.selectedChip===e&&this.parentController.focusChip(e)}.bind(this))):this.parentController.removeChipAndFocusInput(e)}},o.prototype.selectNodeContents=function(t){var n,o;document.body.createTextRange?(n=document.body.createTextRange(),n.moveToElementText(t),n.select()):e.getSelection&&(o=e.getSelection(),n=document.createRange(),n.selectNodeContents(t),o.removeAllRanges(),o.addRange(n))},o.prototype.goInEditMode=function(){this.isEditting=!0,this.$element.addClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="true",this.getChipContent().on("blur",function(){this.goOutOfEditMode()}.bind(this)),this.selectNodeContents(this.getChipContent()[0])},o.prototype.chipKeyDown=function(e){this.isEditting||e.keyCode!==this.$mdConstant.KEY_CODE.ENTER&&e.keyCode!==this.$mdConstant.KEY_CODE.SPACE?this.isEditting&&e.keyCode===this.$mdConstant.KEY_CODE.ENTER&&(e.preventDefault(),this.goOutOfEditMode()):(e.preventDefault(),this.goInEditMode())},o.prototype.chipMouseDown=function(){this.getChipIndex()==this.parentController.selectedChip&&this.enableChipEdit&&!this.isEditting&&this.goInEditMode()}}(),function(){function e(e,o){function i(n,i){return n.append(o.processTemplate(r)),function(n,o,i,r){var a=r.shift(),d=r.shift();e(o),a&&(d.init(a),t.element(o[0].querySelector("._md-chip-content")).on("blur",function(){a.resetSelectedChip(),a.$scope.$applyAsync()}))}}var r=o.processTemplate(n);return{restrict:"E",require:["^?mdChips","mdChip"],compile:i,controller:"MdChipCtrl"}}t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="_md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';e.$inject=["$mdTheming","$mdUtil"]}(),function(){function e(e){function t(t,n,o,i){n.on("click",function(e){t.$apply(function(){i.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,"aria-hidden":!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}t.module("material.components.chips").directive("mdChipRemove",e),e.$inject=["$timeout"]}(),function(){function e(e){function t(t,n,o){var i=t.$parent.$mdChipsCtrl,r=i.parent.$new(!1,i.parent);r.$$replacedScope=t,r.$chip=t.$chip,r.$index=t.$index,r.$mdChipsCtrl=i;var a=i.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(r)}return{restrict:"EA",terminal:!0,link:t,scope:!1}}t.module("material.components.chips").directive("mdChipTransclude",e),e.$inject=["$compile"]}(),function(){function e(e,t,n,o,i,r){this.$timeout=i,this.$mdConstant=t,this.$scope=e,this.parent=e.$parent,this.$log=n,this.$element=o,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.hasAutocomplete=!1,this.enableChipEdit=r.parseAttributeBoolean(this.mdEnableChipEdit),this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useTransformChip=!1,this.useOnAdd=!1,this.useOnRemove=!1,this.useOnSelect=!1}t.module("material.components.chips").controller("MdChipsCtrl",e),e.$inject=["$scope","$mdConstant","$log","$element","$timeout","$mdUtil"],e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();if(!(this.hasAutocomplete&&e.isDefaultPrevented&&e.isDefaultPrevented())){if(e.keyCode===this.$mdConstant.KEY_CODE.BACKSPACE){if(t)return;return e.preventDefault(),e.stopPropagation(),void(this.items.length&&this.selectAndFocusChipSafe(this.items.length-1))}if((!this.separatorKeys||this.separatorKeys.length<1)&&(this.separatorKeys=[this.$mdConstant.KEY_CODE.ENTER]),-1!==this.separatorKeys.indexOf(e.keyCode)){if(this.hasAutocomplete&&this.requireMatch||!t)return;if(e.preventDefault(),this.hasMaxChipsReached())return;this.appendChip(t.trim()),this.resetChipBuffer()}}},e.prototype.updateChipContents=function(e,t){e>=0&&e<this.items.length&&(this.items[e]=t,this.ngModelCtrl.$setDirty())},e.prototype.isEditingChip=function(){return!!this.$element[0].getElementsByClassName("_md-chip-editing").length},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer()&&!this.isEditingChip())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;e.preventDefault(),this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items&&this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.secondaryPlaceholder:this.placeholder},e.prototype.removeAndSelectAdjacentChip=function(e){var n=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(t.bind(this,function(){this.selectAndFocusChipSafe(n)}))},e.prototype.resetSelectedChip=function(){this.selectedChip=-1},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){if(this.useTransformChip&&this.transformChip){var n=this.transformChip({$chip:e});t.isDefined(n)&&(e=n)}if(t.isObject(e)){var o=this.items.some(function(n){return t.equals(e,n)});if(o)return}if(!(null==e||this.items.indexOf(e)+1)){var i=this.items.push(e);this.ngModelCtrl.$setDirty(),this.validateModel(),this.useOnAdd&&this.onAdd&&this.onAdd({$chip:e,$index:i})}},e.prototype.useTransformChipExpression=function(){this.useTransformChip=!0},e.prototype.useOnAddExpression=function(){this.useOnAdd=!0},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0},e.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.hasMaxChipsReached=function(){return t.isString(this.maxChips)&&(this.maxChips=parseInt(this.maxChips,10)||0),this.maxChips>0&&this.items.length>=this.maxChips},e.prototype.validateModel=function(){this.ngModelCtrl.$setValidity("md-max-chips",!this.hasMaxChipsReached())},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);this.ngModelCtrl.$setDirty(),this.validateModel(),t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e})},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[this.selectedChip]})):this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),-1!=e&&this.focusChip(e)},e.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] ._md-chip-content').focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,i=this,r=function(e,n){o.$evalAsync(t.bind(i,n,e))};e.attr({tabindex:0}).on("keydown",function(e){r(e,i.inputKeydown)}).on("focus",function(e){r(e,i.onInputFocus)}).on("blur",function(e){r(e,i.onInputBlur)})},e.prototype.configureAutocomplete=function(e){e&&(this.hasAutocomplete=!0,e.registerSelectedItemWatcher(t.bind(this,function(e){if(e){if(this.hasMaxChipsReached())return;this.appendChip(e),this.resetChipBuffer()}})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)))},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0}}(),function(){function e(e,t,a,d,s,c){function l(n,o){function i(e){if(o.ngModel){var t=r[0].querySelector(e);return t&&t.outerHTML}}var r=o.$mdUserTemplate;o.$mdUserTemplate=null;var l=i("md-chips>md-chip-template"),m=t.prefixer().buildList("md-chip-remove").map(function(e){return"md-chips>*["+e+"]"}).join(","),h=i(m)||u.remove,p=l||u["default"],f=i("md-chips>md-autocomplete")||i("md-chips>input")||u.input,g=r.find("md-chip");return r[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,i,r,d){t.initOptionalProperties(n,o),e(i);var m=d[0];if(l&&(m.enableChipEdit=!1),m.chipContentsTemplate=p,m.chipRemoveTemplate=h,m.chipInputTemplate=f,m.mdCloseIcon=c.mdClose,i.attr({"aria-hidden":!0,tabindex:-1}).on("focus",function(){m.onFocus()}),o.ngModel&&(m.configureNgModel(i.controller("ngModel")),r.mdTransformChip&&m.useTransformChipExpression(),r.mdOnAppend&&m.useOnAppendExpression(),r.mdOnAdd&&m.useOnAddExpression(),r.mdOnRemove&&m.useOnRemoveExpression(),r.mdOnSelect&&m.useOnSelectExpression(),f!=u.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){0===f.indexOf("<md-autocomplete")&&m.configureAutocomplete(i.find("md-autocomplete").controller("mdAutocomplete")),m.configureUserInput(i.find("input"))})}),t.nextTick(function(){var e=i.find("input");e&&e.toggleClass("md-input",!0)})),g.length>0){var b=a(g.clone())(n.$parent);s(function(){i.find("md-chips-wrap").prepend(b)})}}}function m(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(i),remove:t.processTemplate(r)}}var u=m();return{template:function(e,t){return t.$mdUserTemplate=e.clone(),u.chips},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:l,scope:{readonly:"=readonly",placeholder:"@",mdEnableChipEdit:"@",secondaryPlaceholder:"@",maxChips:"@mdMaxChips",transformChip:"&mdTransformChip",onAppend:"&mdOnAppend",onAdd:"&mdOnAdd",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",deleteHint:"@",deleteButtonLabel:"@",separatorKeys:"=?mdSeparatorKeys",requireMatch:"=?mdRequireMatch"}}}t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(), \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}"          class="md-chips">        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="_md-chip-content"              tabindex="-1"              aria-hidden="true"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="!$mdChipsCtrl.readonly"               class="_md-chip-remove-container"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="_md-chip-input-container">          <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"               md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            class="md-input"            tabindex="0"            placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            aria-label="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-trim="false"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',i="      <span>{{$chip}}</span>",r='      <button          class="_md-chip-remove"          ng-if="!$mdChipsCtrl.readonly"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          aria-hidden="true"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="_md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>';e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout","$$mdSvgRegistry"]}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){var n=this.contactQuery({$query:e});return this.filterSelected?n.filter(t.bind(this,this.filterSelectedContacts)):n},e.prototype.itemName=function(e){return e[this.contactName]},e.prototype.filterSelectedContacts=function(e){return-1==this.contacts.indexOf(e)}}(),function(){function e(e,t){function o(n,o){return function(n,i,r,a){t.initOptionalProperties(n,o),e(i),i.attr("tabindex","-1")}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",highlightFlags:"@?mdHighlightFlags"}}}t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>';
e.$inject=["$mdTheming","$mdUtil"]}(),function(){!function(){function e(){return{template:function(e,t){var n=t.hasOwnProperty("ngIf")?"":'ng-if="calendarCtrl.isInitialized"',o='<div ng-switch="calendarCtrl.currentView" '+n+'><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';return o},scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"calendarCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.configureNgModel(i)}}}function n(e,n,o,r,a,d,s,c){d(e),this.$element=e,this.$scope=n,this.dateUtil=o,this.$mdUtil=r,this.keyCode=a.KEY_CODE,this.$$rAF=s,this.today=this.dateUtil.createDateAtMidnight(),this.ngModelCtrl=null,this.currentView="month",this.SELECTED_DATE_CLASS="md-calendar-selected-date",this.TODAY_CLASS="md-calendar-date-today",this.FOCUSED_DATE_CLASS="md-focus",this.id=i++,this.displayDate=null,this.selectedDate=null,this.isInitialized=!1,this.width=0,this.scrollbarWidth=0,c.tabindex||e.attr("tabindex","-1"),e.on("keydown",t.bind(this,this.handleKeyEvent))}t.module("material.components.datepicker").directive("mdCalendar",e);var o=340,i=0;n.$inject=["$element","$scope","$$mdDateUtil","$mdUtil","$mdConstant","$mdTheming","$$rAF","$attrs"],n.prototype.configureNgModel=function(e){var t=this;t.ngModelCtrl=e,t.$mdUtil.nextTick(function(){t.isInitialized=!0}),e.$render=function(){var e=this.$viewValue;t.$scope.$broadcast("md-calendar-parent-changed",e),t.selectedDate||(t.selectedDate=e),t.displayDate||(t.displayDate=t.selectedDate||t.today)}},n.prototype.setNgModelValue=function(e){var t=this.dateUtil.createDateAtMidnight(e);return this.focus(t),this.$scope.$emit("md-calendar-change",t),this.ngModelCtrl.$setViewValue(t),this.ngModelCtrl.$render(),t},n.prototype.setCurrentView=function(e,n){var o=this;o.$mdUtil.nextTick(function(){o.currentView=e,n&&(o.displayDate=t.isDate(n)?n:new Date(n))})},n.prototype.focus=function(e){if(this.dateUtil.isValidDate(e)){var t=this.$element[0].querySelector(".md-focus");t&&t.classList.remove(this.FOCUSED_DATE_CLASS);var n=this.getDateId(e,this.currentView),o=document.getElementById(n);o&&(o.classList.add(this.FOCUSED_DATE_CLASS),o.focus(),this.displayDate=e)}else{var i=this.$element[0].querySelector("[ng-switch]");i&&i.focus()}},n.prototype.getActionFromKeyEvent=function(e){var t=this.keyCode;switch(e.which){case t.ENTER:return"select";case t.RIGHT_ARROW:return"move-right";case t.LEFT_ARROW:return"move-left";case t.DOWN_ARROW:return e.metaKey?"move-page-down":"move-row-down";case t.UP_ARROW:return e.metaKey?"move-page-up":"move-row-up";case t.PAGE_DOWN:return"move-page-down";case t.PAGE_UP:return"move-page-up";case t.HOME:return"start";case t.END:return"end";default:return null}},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());var n=t.getActionFromKeyEvent(e);n&&(e.preventDefault(),e.stopPropagation(),t.$scope.$broadcast("md-calendar-parent-action",n))})},n.prototype.hideVerticalScrollbar=function(e){function t(){var t=n.width||o,i=n.scrollbarWidth,a=e.calendarScroller;r.style.width=t+"px",a.style.width=t+i+"px",a.style.paddingRight=i+"px"}var n=this,i=e.$element[0],r=i.querySelector(".md-calendar-scroll-mask");n.width>0?t():n.$$rAF(function(){var o=e.calendarScroller;n.scrollbarWidth=o.offsetWidth-o.clientWidth,n.width=i.querySelector("table").offsetWidth,t()})},n.prototype.getDateId=function(e,t){if(!t)throw new Error("A namespace for the date id has to be specified.");return["md",this.id,t,e.getFullYear(),e.getMonth(),e.getDate()].join("-")}}()}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(i-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarMonth"],controller:n,controllerAs:"monthCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i,r){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.dateLocale=r,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.firstRenderableDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var a=this;this.cellClickHandler=function(){var e=i.getTimestampFromNode(this);a.$scope.$apply(function(){a.calendarCtrl.setNgModelValue(e)})},this.headerClickHandler=function(){a.calendarCtrl.setCurrentView("year",i.getTimestampFromNode(this))}}t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o=265,i=45;n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil","$mdDateLocale"],n.prototype.initialize=function(e){var t=e.minDate,n=e.maxDate;if(this.calendarCtrl=e,this.items={length:2e3},n&&t){var o=this.dateUtil.getMonthDistance(t,n)+1;o=Math.max(o,1),o+=1,this.items.length=o}if(this.firstRenderableDate=this.dateUtil.incrementMonths(e.today,-this.items.length/2),t&&t>this.firstRenderableDate)this.firstRenderableDate=t;else if(n){this.items.length-2;this.firstRenderableDate=this.dateUtil.incrementMonths(n,-(this.items.length-2))}this.attachScopeListeners(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getSelectedMonthIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getMonthDistance(this.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeSelectedDate=function(e){var t=this,n=t.calendarCtrl,o=n.selectedDate;n.selectedDate=e,this.changeDisplayDate(e).then(function(){var t=n.SELECTED_DATE_CLASS,i="month";if(o){var r=document.getElementById(n.getDateId(o,i));r&&(r.classList.remove(t),r.setAttribute("aria-selected","false"))}if(e){var a=document.getElementById(n.getDateId(e,i));a&&(a.classList.add(t),a.setAttribute("aria-selected","true"))}})},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildWeekHeader(),this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.calendarCtrl.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1}),t},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;7>o;o++){var i=document.createElement("th");i.textContent=t[(o+e)%7],n.appendChild(i)}this.$element.find("thead").append(n)},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeSelectedDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(this,this.handleKeyEvent))},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)n.setNgModelValue(o);else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementDays(o,1);break;case"move-left":i=r.incrementDays(o,-1);break;case"move-page-down":i=r.incrementMonths(o,1);break;case"move-page-up":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementDays(o,7);break;case"move-row-up":i=r.incrementDays(o,-7);break;case"start":i=r.getFirstDateOfMonth(o);break;case"end":i=r.getLastDateOfMonth(o)}i&&(i=this.dateUtil.clampDate(i,n.minDate,n.maxDate),this.changeDisplayDate(i).then(function(){n.focus(i)}))}}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","^^mdCalendarMonth","mdCalendarMonthBody"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthBodyCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1],a=o[2];a.calendarCtrl=i,a.monthCtrl=r,a.generateContent(),e.$watch(function(){return a.offset},function(e,t){e!=t&&a.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.monthCtrl=null,this.calendarCtrl=null,this.offset=null,this.focusAfterAppend=null}t.module("material.components.datepicker").directive("mdCalendarMonthBody",e),n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],n.prototype.generateContent=function(){var e=this.dateUtil.incrementMonths(this.monthCtrl.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForMonth(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildDateCell=function(e){var t=this.monthCtrl,n=this.calendarCtrl,o=document.createElement("td");if(o.tabIndex=-1,o.classList.add("md-calendar-date"),o.setAttribute("role","gridcell"),e){o.setAttribute("tabindex","-1"),o.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),o.id=n.getDateId(e,"month"),o.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,n.today)&&o.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameDay(e,n.selectedDate)&&(o.classList.add(n.SELECTED_DATE_CLASS),o.setAttribute("aria-selected","true"));var i=this.dateLocale.dates[e.getDate()];if(this.isDateEnabled(e)){var r=document.createElement("span");r.classList.add("md-calendar-date-selection-indicator"),r.textContent=i,o.appendChild(r),o.addEventListener("click",t.cellClickHandler),n.displayDate&&this.dateUtil.isSameDay(e,n.displayDate)&&(this.focusAfterAppend=o)}else o.classList.add("md-calendar-date-disabled"),o.textContent=i}return o},n.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!t.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(e))},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date,n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),i=this.dateUtil.getNumberOfDaysInMonth(t),r=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);r.appendChild(d);var s=this.offset===this.monthCtrl.items.length-1,c=0,l=document.createElement("td");if(l.textContent=this.dateLocale.monthHeaderFormatter(t),l.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate?l.classList.add("md-calendar-month-label-disabled"):(l.addEventListener("click",this.monthCtrl.headerClickHandler),l.setAttribute("data-timestamp",n.getTime()),l.setAttribute("aria-label",this.dateLocale.monthFormatter(t))),2>=o){l.setAttribute("colspan","7");var m=this.buildDateRow();if(m.appendChild(l),r.insertBefore(m,d),s)return r}else c=2,l.setAttribute("colspan","2"),d.appendChild(l);for(var u=c;o>u;u++)d.appendChild(this.buildDateCell());for(var h=o,p=n,f=1;i>=f;f++){if(7===h){if(s)return r;h=0,a++,d=this.buildDateRow(a),r.appendChild(d)}p.setDate(f);var g=this.buildDateCell(p);d.appendChild(g),h++}for(;d.childNodes.length<7;)d.appendChild(this.buildDateCell());for(;r.childNodes.length<6;){for(var b=this.buildDateRow(),v=0;7>v;v++)b.appendChild(this.buildDateCell());r.appendChild(b)}return r},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}()}(),function(){!function(){function e(){return{template:'<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="'+o+'"></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarYear"],controller:n,controllerAs:"yearCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i,r){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.$timeout=r,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.firstRenderableDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var a=this;this.cellClickHandler=function(){a.calendarCtrl.setCurrentView("month",i.getTimestampFromNode(this))}}t.module("material.components.datepicker").directive("mdCalendarYear",e);var o=88;n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil","$timeout"],n.prototype.initialize=function(e){var t=e.minDate,n=e.maxDate;if(this.calendarCtrl=e,this.items={length:400},n&&t){var o=this.dateUtil.getYearDistance(t,n)+1;this.items.length=Math.max(o,1)}this.firstRenderableDate=this.dateUtil.incrementYears(e.today,-(this.items.length/2)),t&&t>this.firstRenderableDate?this.firstRenderableDate=t:n&&(this.firstRenderableDate=this.dateUtil.incrementMonths(n,-(this.items.length-1))),(t||n)&&this.$timeout(),this.attachScopeListeners(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getFocusedYearIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getYearDistance(this.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeDate=function(e){if(!this.isInitialized)return this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(this.dateUtil.isValidDate(e)&&!this.isMonthTransitionInProgress){var t=this,n=this.animateDateChange(e);return t.isMonthTransitionInProgress=!0,t.calendarCtrl.displayDate=e,n.then(function(){t.isMonthTransitionInProgress=!1})}},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getYearDistance(this.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)this.changeDate(o).then(function(){n.setCurrentView("month",o),n.focus(o)});else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementMonths(o,1);break;case"move-left":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementMonths(o,6);break;case"move-row-up":i=r.incrementMonths(o,-6)}if(i){var a=n.minDate?r.incrementMonths(r.getFirstDateOfMonth(n.minDate),1):null,d=n.maxDate?r.getFirstDateOfMonth(n.maxDate):null;i=r.getFirstDateOfMonth(this.dateUtil.clampDate(i,a,d)),this.changeDate(i).then(function(){n.focus(i)})}}},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(e,e.handleKeyEvent))}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","^^mdCalendarYear","mdCalendarYearBody"],scope:{offset:"=mdYearOffset"},controller:n,controllerAs:"mdYearBodyCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1],a=o[2];a.calendarCtrl=i,a.yearCtrl=r,a.generateContent(),e.$watch(function(){return a.offset},function(e,t){e!=t&&a.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.calendarCtrl=null,this.yearCtrl=null,this.offset=null,this.focusAfterAppend=null}t.module("material.components.datepicker").directive("mdCalendarYearBody",e),n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],n.prototype.generateContent=function(){var e=this.dateUtil.incrementYears(this.yearCtrl.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForYear(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildMonthCell=function(e,t){var n=this.calendarCtrl,o=this.yearCtrl,i=this.buildBlankCell(),r=new Date(e,t,1);i.setAttribute("aria-label",this.dateLocale.monthFormatter(r)),i.id=n.getDateId(r,"year"),i.setAttribute("data-timestamp",r.getTime()),this.dateUtil.isSameMonthAndYear(r,n.today)&&i.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameMonthAndYear(r,n.selectedDate)&&(i.classList.add(n.SELECTED_DATE_CLASS),i.setAttribute("aria-selected","true"));var a=this.dateLocale.shortMonths[t];if(this.dateUtil.isDateWithinRange(r,n.minDate,n.maxDate)){var d=document.createElement("span");d.classList.add("md-calendar-date-selection-indicator"),d.textContent=a,i.appendChild(d),i.addEventListener("click",o.cellClickHandler),n.displayDate&&this.dateUtil.isSameMonthAndYear(r,n.displayDate)&&(this.focusAfterAppend=i)}else i.classList.add("md-calendar-date-disabled"),i.textContent=a;return i},n.prototype.buildBlankCell=function(){var e=document.createElement("td");return e.tabIndex=-1,e.classList.add("md-calendar-date"),e.setAttribute("role","gridcell"),e.setAttribute("tabindex","-1"),e},n.prototype.buildCalendarForYear=function(e){var t,n=e.getFullYear(),o=document.createDocumentFragment(),i=document.createElement("tr"),r=document.createElement("td");for(r.className="md-calendar-month-label",r.textContent=n,i.appendChild(r),t=0;6>t;t++)i.appendChild(this.buildMonthCell(n,t));o.appendChild(i);var a=document.createElement("tr");for(a.appendChild(this.buildBlankCell()),t=6;12>t;t++)a.appendChild(this.buildMonthCell(n,t));return o.appendChild(a),o}}()}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}t.prototype.$get=function(e,t){function n(e){if(!e)return"";var n=e.toLocaleTimeString(),o=e;return 0!=e.getHours()||-1===n.indexOf("11:")&&-1===n.indexOf("23:")||(o=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),t("date")(o,"M/d/yyyy")}function o(e){return new Date(e)}function i(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e)}function r(e){return p.shortMonths[e.getMonth()]+" "+e.getFullYear()}function a(e){return p.months[e.getMonth()]+" "+e.getFullYear()}function d(e){return"Week "+e}function s(e){return[p.days[e.getDay()],p.months[e.getMonth()],p.dates[e.getDate()],e.getFullYear()].join(" ")}for(var c=e.DATETIME_FORMATS.DAY.map(function(e){return e[0]}),l=Array(32),m=1;31>=m;m++)l[m]=m;var u="Calendar",h="Open calendar",p={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||c,dates:this.dates||l,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||n,parseDate:this.parseDate||o,isDateComplete:this.isDateComplete||i,monthHeaderFormatter:this.monthHeaderFormatter||r,monthFormatter:this.monthFormatter||a,weekNumberFormatter:this.weekNumberFormatter||d,longDateFormatter:this.longDateFormatter||s,msgCalendar:this.msgCalendar||u,msgOpenCalendar:this.msgOpenCalendar||h};return p},t.prototype.$get.$inject=["$locale","$filter"],e.provider("$mdDateLocale",new t)}])}()}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1)}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function i(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function r(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function a(e,t){return e.getDate()==t.getDate()&&r(e,t)}function d(e,t){var n=o(e);return r(n,t)}function s(e,t){var n=i(e);return r(t,n)}function c(e,t){return b((e.getTime()+t.getTime())/2)}function l(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7)}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),i=n(o);return i<e.getDate()?o.setDate(i):o.setDate(e.getDate()),o}function h(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}function p(e){return new Date(e.getFullYear(),e.getMonth(),n(e))}function f(e){return null!=e&&e.getTime&&!isNaN(e.getTime())}function g(e){f(e)&&e.setHours(0,0,0,0)}function b(e){var n;return n=t.isUndefined(e)?new Date:new Date(e),g(n),n}function v(e,t,n){var o=b(e),i=f(t)?b(t):null,r=f(n)?b(n):null;return(!i||o>=i)&&(!r||r>=o)}function E(e,t){return u(e,12*t)}function $(e,t){return t.getFullYear()-e.getFullYear()}function C(e,t,n){var o=e;return t&&t>e&&(o=new Date(t.getTime())),n&&e>n&&(o=new Date(n.getTime())),o}function y(e){return e&&e.hasAttribute("data-timestamp")?Number(e.getAttribute("data-timestamp")):void 0}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:i,isInNextMonth:d,isInPreviousMonth:s,getDateMidpoint:c,isSameMonthAndYear:r,getWeekOfMonth:l,incrementDays:m,incrementMonths:u,getLastDateOfMonth:p,isSameDay:a,getMonthDistance:h,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:v,incrementYears:E,getYearDistance:$,clampDate:C,getTimestampFromNode:y}})}()}(),function(){!function(){function n(e){return{template:function(t,n){var o=n.mdHideIcons,i="all"===o||"calendar"===o?"":'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="'+e.mdCalendar+'"></md-icon></md-button>',r="all"===o||"triangle"===o?"":'<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>';return""+i+'<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)">'+r+'</div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>'},require:["ngModel","mdDatepicker","?^mdInputContainer"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",dateFilter:"=mdDateFilter",isOpen:"=?mdIsOpen"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function(e,n,o,i){var r=i[0],a=i[1],s=i[2];if(a.configureNgModel(r,s),s){var c=n[0].querySelector(".md-errors-spacer");c&&n.after(t.element("<div>").append(c)),s.setHasPlaceholder(o.mdPlaceholder),s.element.addClass(d),s.input=n,s.label||$mdAria.expect(n,"aria-label",o.mdPlaceholder),e.$watch(s.isErrorGetter||function(){return r.$invalid&&r.$touched},s.setInvalid)}}}}function o(e,n,o,i,r,a,d,s,c,l,m,u){this.$compile=i,this.$timeout=r,this.$window=a,this.dateLocale=l,this.dateUtil=m,this.$mdConstant=d,this.$mdUtil=c,this.$$rAF=u,this.documentElement=t.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=n[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=n[0].querySelector(".md-datepicker-input-container"),this.calendarPane=n[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=n[0].querySelector(".md-datepicker-button"),this.inputMask=n[0].querySelector(".md-datepicker-input-mask-opaque"),this.$element=n,this.$attrs=o,this.$scope=e,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(n[0].disabled||t.isString(o.disabled)),this.isCalendarOpen=!1,this.openOnFocus=o.hasOwnProperty("mdOpenOnFocus"),this.mdInputContainer=null,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+c.nextUid(),s(n),s(t.element(this.calendarPane)),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowResizeHandler=c.debounce(t.bind(this,this.closeCalendarPane),100),o.tabindex||n.attr("tabindex","-1"),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var h=this;e.$on("$destroy",function(){h.detachCalendarPane()}),o.mdIsOpen&&e.$watch("ctrl.isOpen",function(e){e?h.openCalendarPane({target:h.inputElement}):h.closeCalendarPane()})}t.module("material.components.datepicker").directive("mdDatepicker",n),n.$inject=["$$mdSvgRegistry"];var i=3,r="md-datepicker-invalid",a="md-datepicker-open",d="_md-datepicker-floating-label",s=500,c=368,l=360;o.$inject=["$scope","$element","$attrs","$compile","$timeout","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF"],o.prototype.configureNgModel=function(e,t){this.ngModelCtrl=e,this.mdInputContainer=t;var n=this;e.$render=function(){var e=n.ngModelCtrl.$viewValue;if(e&&!(e instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+typeof e);n.date=e,n.inputElement.value=n.dateLocale.formatDate(e),n.mdInputContainer&&n.mdInputContainer.setHasValue(!!e),n.resizeInputElement(),n.updateErrorState()}},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.ngModelCtrl.$setViewValue(n),e.date=n,e.inputElement.value=e.dateLocale.formatDate(n),e.mdInputContainer&&e.mdInputContainer.setHasValue(!!n),e.closeCalendarPane(),e.resizeInputElement(),e.updateErrorState()}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement)),e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,s,e))},o.prototype.attachInteractionListeners=function(){var e=this,n=this.$scope,o=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(t){t.altKey&&t.keyCode==o.DOWN_ARROW&&(e.openCalendarPane(t),n.$digest())}),e.openOnFocus&&e.ngInputElement.on("focus",t.bind(e,e.openCalendarPane)),n.$on("md-calendar-close",function(){e.closeCalendarPane()})},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$scope.$parent;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t)})}Object.defineProperty(this,"placeholder",{get:function(){return e.inputElement.placeholder},set:function(t){e.inputElement.placeholder=t||""}})},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton&&(this.calendarButton.disabled=e)},o.prototype.updateErrorState=function(e){var n=e||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(n)){if(n=this.dateUtil.createDateAtMidnight(n),this.dateUtil.isValidDate(this.minDate)){var o=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",n>=o)}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",i>=n)}t.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(n))}else this.ngModelCtrl.$setValidity("valid",null==n);this.ngModelCtrl.$valid||this.inputContainer.classList.add(r)},o.prototype.clearErrorState=function(){this.inputContainer.classList.remove(r),["mindate","maxdate","filtered","valid"].forEach(function(e){this.ngModelCtrl.$setValidity(e,!0)},this)},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+i},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=e?this.dateLocale.parseDate(e):null;this.dateUtil.setDateTimeToMidnight(t);var n=""==e||this.dateUtil.isValidDate(t)&&this.dateLocale.isDateComplete(e)&&this.isDateEnabled(t);n&&(this.ngModelCtrl.$setViewValue(t),this.date=t),this.updateErrorState(t)},o.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.minDate,this.maxDate)&&(!t.isFunction(this.dateFilter)||this.dateFilter(e))},o.prototype.attachCalendarPane=function(){var e=this.calendarPane,n=document.body;e.style.transform="",this.$element.addClass(a),this.mdInputContainer&&this.mdInputContainer.element.addClass(a),t.element(n).addClass("md-datepicker-is-showing");var o=this.inputContainer.getBoundingClientRect(),i=n.getBoundingClientRect(),r=o.top-i.top,d=o.left-i.left,s=i.top<0&&0==document.body.scrollTop?-i.top:document.body.scrollTop,m=i.left<0&&0==document.body.scrollLeft?-i.left:document.body.scrollLeft,u=s+this.$window.innerHeight,h=m+this.$window.innerWidth;if(d+l>h){if(h-l>0)d=h-l;else{d=m;var p=this.$window.innerWidth/l;e.style.transform="scale("+p+")"}e.classList.add("md-datepicker-pos-adjusted")}r+c>u&&u-c>s&&(r=u-c,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=d+"px",e.style.top=r+"px",document.body.appendChild(e),this.inputMask.style.left=o.width+"px",this.$$rAF(function(){e.classList.add("md-pane-open")})},o.prototype.detachCalendarPane=function(){this.$element.removeClass(a),this.mdInputContainer&&this.mdInputContainer.element.removeClass(a),t.element(document.body).removeClass("md-datepicker-is-showing"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled){this.isCalendarOpen=this.isOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar();var n=this;this.$mdUtil.nextTick(function(){n.documentElement.on("click touchstart",n.bodyClickHandler)},!1),e.addEventListener("resize",this.windowResizeHandler)}},o.prototype.closeCalendarPane=function(){function t(){n.detachCalendarPane(),n.isCalendarOpen=n.isOpen=!1,n.ngModelCtrl.$setTouched(),n.documentElement.off("click touchstart",n.bodyClickHandler),e.removeEventListener("resize",n.windowResizeHandler)}if(this.isCalendarOpen){var n=this;n.calendarPaneOpenedFrom.focus(),n.calendarPaneOpenedFrom=null,n.openOnFocus?this.$mdUtil.nextTick(t):t()}},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus()},!1)},o.prototype.setFocused=function(e){e||this.ngModelCtrl.$setTouched(),this.isFocused=e},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest,n=t(e.target,"md-calendar-year")||t(e.target,"md-calendar-month");n||this.closeCalendarPane(),this.$scope.$digest()}}}()}(),function(){function e(e,t,n,o){function i(i,a,d){function s(){var e=a.parent();return e.attr("aria-label")||e.text()?!0:!(!e.parent().attr("aria-label")&&!e.parent().text())}function c(){d.mdSvgIcon||d.mdSvgSrc||(d.mdFontIcon&&a.addClass("md-font "+d.mdFontIcon),a.addClass(u))}function l(){if(!d.mdSvgIcon&&!d.mdSvgSrc){d.mdFontIcon&&(a.removeClass(m),a.addClass(d.mdFontIcon),m=d.mdFontIcon);var t=e.fontSet(d.mdFontSet);u!==t&&(a.removeClass(u),a.addClass(t),u=t)}}t(a);var m=d.mdFontIcon,u=e.fontSet(d.mdFontSet);
c(),d.$observe("mdFontIcon",l),d.$observe("mdFontSet",l);var h=a[0].getAttribute(d.$attr.mdSvgSrc),p=d.alt||d.mdFontIcon||d.mdSvgIcon||a.text(),f=d.$normalize(d.$attr.mdSvgIcon||d.$attr.mdSvgSrc||"");d["aria-label"]||(""===p||s()?a.text()||n.expect(a,"aria-hidden","true"):(n.expect(a,"aria-label",p),n.expect(a,"role","img"))),f&&d.$observe(f,function(t){r(t)||t!==h||(t=o.trustAsUrl(t)),a.empty(),t&&e(t).then(function(e){a.empty(),a.append(e)})})}function r(e){var t=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return t.test(e)}return{restrict:"E",link:i}}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria","$sce",e])}(),function(){function n(){}function o(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function i(n,o,i,r,a,d){function s(e){if(e=e||"",t.isString(e)||(e=d.getTrustedUrl(e)),E[e])return i.when(l(E[e]));if($.test(e)||C.test(e))return p(e).then(m(e));-1==e.indexOf(":")&&(e="$default:"+e);var o=n[e]?u:h;return o(e).then(m(e))}function c(e){var o=t.isUndefined(e)||!(e&&e.length);if(o)return n.defaultFontSet;var i=e;return t.forEach(n.fontSets,function(t){t.alias==e&&(i=t.fontSet||i)}),i}function l(e){var n=e.clone(),o="_cache"+a.nextUid();return n.id&&(n.id+=o),t.forEach(n.querySelectorAll("[id]"),function(e){e.id+=o}),n}function m(e){return function(t){return E[e]=f(t)?t:new g(t,n[e]),E[e].clone()}}function u(e){var t=n[e];return p(t.url).then(function(e){return new g(e,t)})}function h(e){function t(t){var n=e.slice(e.lastIndexOf(":")+1),i=t.querySelector("#"+n);return i?new g(i,d):o(e)}function o(e){var t="icon "+e+" not found";return r.warn(t),i.reject(t||e)}var a=e.substring(0,e.lastIndexOf(":"))||"$default",d=n[a];return d?p(d.url).then(t):o(e)}function p(n){function a(n){var o=C.exec(n),r=/base64/i.test(n),a=r?e.atob(o[2]):o[2];return i.when(t.element(a)[0])}function d(e){return i(function(n,i){var a=function(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;r.warn(n),i(e)},d=function(e){var o=t.element("<div>").append(e).find("svg")[0];n(o)};o(e,!0).then(d,a)})}return C.test(n)?a(n):d(n)}function f(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function g(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function b(){var e=this.config?this.config.viewBoxSize:n.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+e+" "+e,focusable:!1},function(e,t){this.element.setAttribute(t,e)},this)}function v(){return this.element.cloneNode(!0)}var E={},$=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,C=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return g.prototype={clone:v,prepare:b},s.fontSet=c,s}t.module("material.components.icon").constant("$$mdSvgRegistry",{mdTabsArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=",mdClose:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=",mdCancel:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==",mdMenu:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+",mdToggleArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",mdCalendar:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg=="}).provider("$mdIcon",n);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};n.prototype={icon:function(e,t,n){return-1==e.indexOf(":")&&(e="$default:"+e),r[e]=new o(t,n),this},iconSet:function(e,t,n){return r[e]=new o(t,n),this},defaultIconSet:function(e,t){var n="$default";return r[n]||(r[n]=new o(e,t)),r[n].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},$get:["$templateRequest","$q","$log","$templateCache","$mdUtil","$sce",function(e,t,n,o,a,d){return i(r,e,t,n,a,d)}]},i.$inject=["config","$templateRequest","$q","$log","$mdUtil","$sce"]}(),function(){function e(e,o,i,r,a,d,s,c){var l,m,u=a.prefixer(),h=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(n,o){o=o||{},l=n,m=i[0].querySelector(u.buildSelector(["ng-click","ng-mouseenter"])),m.setAttribute("aria-expanded","false"),this.isInMenuBar=o.isInMenuBar,this.nestedMenus=a.nodesToArray(l[0].querySelectorAll(".md-nested-menu")),l.on("$mdInterimElementRemove",function(){h.isOpen=!1,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)})}),a.nextTick(function(){h.onIsOpenChanged(h.isOpen)});var d="menu_container_"+a.nextUid();l.attr("id",d),t.element(m).attr({"aria-owns":d,"aria-haspopup":"true"}),r.$on("$destroy",this.disableHoverListener),l.on("$destroy",function(){e.destroy()})};var p,f,g=[];this.enableHoverListener=function(){g.push(s.$on("$mdMenuOpen",function(e,t){l[0].contains(t[0])&&(h.currentlyOpenMenu=t.controller("mdMenu"),h.isAlreadyOpening=!1,h.currentlyOpenMenu.registerContainerProxy(h.triggerContainerProxy.bind(h)))})),g.push(s.$on("$mdMenuClose",function(e,t){l[0].contains(t[0])&&(h.currentlyOpenMenu=n)})),f=t.element(a.nodesToArray(l[0].children[0].children)),f.on("mouseenter",h.handleMenuItemHover),f.on("mouseleave",h.handleMenuItemMouseLeave)},this.disableHoverListener=function(){for(;g.length;)g.shift()();f&&f.off("mouseenter",h.handleMenuItemHover),f&&f.off("mouseleave",h.handleMenuItemMouseLeave)},this.handleMenuItemHover=function(e){if(!h.isAlreadyOpening){var n=e.target.querySelector("md-menu")||a.getClosest(e.target,"MD-MENU");p=d(function(){if(n&&(n=t.element(n).controller("mdMenu")),h.currentlyOpenMenu&&h.currentlyOpenMenu!=n){var e=h.nestLevel+1;h.currentlyOpenMenu.close(!0,{closeTo:e}),h.isAlreadyOpening=!!n,n&&n.open()}else n&&!n.isOpen&&n.open&&(h.isAlreadyOpening=!!n,n&&n.open())},n?100:250);var o=e.currentTarget.querySelector(".md-button:not([disabled])");o&&o.focus()}},this.handleMenuItemMouseLeave=function(){p&&(d.cancel(p),p=n)},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),h.isOpen||(h.enableHoverListener(),h.isOpen=!0,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)}),m=m||(t?t.target:i[0]),m.setAttribute("aria-expanded","true"),r.$emit("$mdMenuOpen",i),e.show({scope:r,mdMenuCtrl:h,nestLevel:h.nestLevel,element:l,target:m,preserveElement:!0,parent:"body"})["finally"](function(){m.setAttribute("aria-expanded","false"),h.disableHoverListener()}))},r.$mdOpenMenu=this.open,this.onIsOpenChanged=function(e){e?(l.attr("aria-hidden","false"),i[0].classList.add("_md-open"),t.forEach(h.nestedMenus,function(e){e.classList.remove("_md-open")})):(l.attr("aria-hidden","true"),i[0].classList.remove("_md-open")),r.$mdMenuIsOpen=h.isOpen},this.focusMenuContainer=function(){var e=l[0].querySelector(u.buildSelector(["md-menu-focus-target","md-autofocus"]));e||(e=l[0].querySelector(".md-button")),e.focus()},this.registerContainerProxy=function(e){this.containerProxy=e},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e)},this.destroy=function(){return h.isOpen?e.destroy():c.when(!1)},this.close=function(n,o){if(h.isOpen){h.isOpen=!1,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)});var d=t.extend({},o,{skipFocus:n});if(r.$emit("$mdMenuClose",i,d),e.hide(null,o),!n){var s=h.restoreFocusTo||i.find("button")[0];s instanceof t.element&&(s=s[0]),s&&s.focus()}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")}}t.module("material.components.menu").controller("mdMenuCtrl",e),e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout","$rootScope","$q"]}(),function(){function e(e){function o(n){n.addClass("md-menu");var o=n.children()[0],a=e.prefixer();if(a.hasAttribute(o,"ng-click")||(o=o.querySelector(a.buildSelector(["ng-click","ng-mouseenter"]))||o),!o||"MD-BUTTON"!=o.nodeName&&"BUTTON"!=o.nodeName||o.hasAttribute("type")||o.setAttribute("type","button"),2!=n.children().length)throw Error(r+"Expected two children elements.");o&&o.setAttribute("aria-haspopup","true");var d=n[0].querySelectorAll("md-menu"),s=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return d&&t.forEach(e.nodesToArray(d),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("_md-nested-menu"),e.setAttribute("md-nest-level",s+1)}),i}function i(e,o,i,r){var a=r[0],d=r[1]!=n,s=t.element('<div class="_md _md-open-menu-container md-whiteframe-z2"></div>'),c=o.children()[1];o.addClass("_md"),c.hasAttribute("role")||c.setAttribute("role","menu"),s.append(c),o.on("$destroy",function(){s.remove()}),o.append(s),s[0].style.display="none",a.init(s,{isInMenuBar:d})}var r="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:o}}t.module("material.components.menu").directive("mdMenu",e),e.$inject=["$mdUtil"]}(),function(){function e(e){function o(e,o,a,d,s,c,l,m,u){function h(n,o,i){return i.nestLevel?t.noop:(i.disableParentScroll&&!e.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=e.disableScrollAround(i.element,i.parent):i.disableParentScroll=!1,i.hasBackdrop&&(i.backdrop=e.createBackdrop(n,"_md-menu-backdrop _md-click-catcher"),u.enter(i.backdrop,d[0].body)),function(){i.backdrop&&i.backdrop.remove(),i.disableParentScroll&&i.restoreScroll()})}function p(e,t,n){function o(){return m(t,{addClass:"_md-leave"}).start()}function i(){t.removeClass("_md-active"),v(t,n),n.alreadyOpen=!1}return n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function f(n,i,r){function d(){return r.parent.append(i),i[0].style.display="",c(function(e){var t=E(i,r);i.removeClass("_md-leave"),m(i,{addClass:"_md-active",from:C.toCss(t),to:C.toCss({transform:""})}).start().then(e)})}function u(){if(!r.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(r,{alreadyOpen:!1,isRemoved:!1,target:t.element(r.target),parent:t.element(r.parent),menuContentEl:t.element(i[0].querySelector("md-menu-content"))})}function p(){var e=function(e,t){return l.throttle(function(){if(!r.isRemoved){var n=E(e,t);e.css(C.toCss(n))}})}(i,r);return s.addEventListener("resize",e),s.addEventListener("orientationchange",e),function(){s.removeEventListener("resize",e),s.removeEventListener("orientationchange",e)}}function f(){function t(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:r.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:g(t,r.menuContentEl,r,-1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:g(t,r.menuContentEl,r,1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:r.nestLevel?r.mdMenuCtrl.close():r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=r.parent[0]?t.target.click():r.mdMenuCtrl.triggerContainerProxy(t),n=!0}n&&(t.preventDefault(),t.stopImmediatePropagation())}function o(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function d(t){function o(){n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function i(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o)if($.hasAttribute(e,n))return!0;return!1}var a=t.target;do{if(a==r.menuContentEl[0])return;if((i(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName)&&!i(a,["md-prevent-menu-close"])){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=r.parent[0]||o();break}}while(a=a.parentNode)}i.addClass("_md-clickable"),r.backdrop&&r.backdrop.on("click",o),r.menuContentEl.on("keydown",t),r.menuContentEl[0].addEventListener("click",d,!0);var s=r.menuContentEl[0].querySelector($.buildSelector(["md-menu-focus-target","md-autofocus"]));if(!s){var c=r.menuContentEl[0].firstElementChild;s=c&&(c.querySelector(".md-button:not([disabled])")||c.firstElementChild)}return s&&s.focus(),function(){i.removeClass("_md-clickable"),r.backdrop&&r.backdrop.off("click",o),r.menuContentEl.off("keydown",t),r.menuContentEl[0].removeEventListener("click",d,!0)}}return u(r),o.inherit(r.menuContentEl,r.target),r.cleanupResizing=p(),r.hideBackdrop=h(n,i,r),d().then(function(e){return r.alreadyOpen=!0,r.cleanupInteraction=f(),e})}function g(t,n,o,i){for(var r,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),s=d.indexOf(a),c=s+i;c>=0&&c<d.length;c+=i){var l=d[c].querySelector(".md-button");if(r=b(l))break}return r}function b(e){return e&&-1!=e.getAttribute("tabindex")?(e.focus(),d[0].activeElement==e):void 0}function v(e,t){t.preserveElement?i(e).style.display="none":i(e).parentNode===i(t.parent)&&i(t.parent).removeChild(i(e))}function E(t,o){function i(e){e.top=Math.max(Math.min(e.top,v.bottom-l.offsetHeight),v.top),e.left=Math.max(Math.min(e.left,v.right-l.offsetWidth),v.left)}function a(){for(var e=0;e<m.children.length;++e)if("none"!=s.getComputedStyle(m.children[e]).display)return m.children[e]}var c,l=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),h=d[0].body,p=h.getBoundingClientRect(),f=s.getComputedStyle(m),g=o.target[0].querySelector($.buildSelector("md-menu-origin"))||o.target[0],b=g.getBoundingClientRect(),v={left:p.left+r,top:Math.max(p.top,0)+r,bottom:Math.max(p.bottom,Math.max(p.top,0)+p.height)-r,right:p.right-r},E={top:0,left:0,right:0,bottom:0},C={top:0,left:0,right:0,bottom:0},y=o.mdMenuCtrl.positionMode();"target"!=y.top&&"target"!=y.left&&"target-right"!=y.left||(c=a(),c&&(c=c.firstElementChild||c,c=c.querySelector($.buildSelector("md-menu-align-target"))||c,E=c.getBoundingClientRect(),C={top:parseFloat(l.style.top||0),left:parseFloat(l.style.left||0)}));var M={},_="top ";switch(y.top){case"target":M.top=C.top+b.top-E.top;break;case"cascade":M.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":M.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+y.top+'" specified for md-menu on Y axis.')}var A="rtl"==e.bidi();switch(y.left){case"target":M.left=C.left+b.left-E.left,_+=A?"right":"left";break;case"target-left":M.left=b.left,_+="left";break;case"target-right":M.left=b.right-u.width+(u.right-E.right),_+="right";break;case"cascade":var T=A?b.left-u.width<v.left:b.right+u.width<v.right;M.left=T?b.right-g.style.left:b.left-g.style.left-u.width,_+=T?"left":"right";break;case"right":A?(M.left=b.right-b.width,_+="left"):(M.left=b.right-u.width,_+="right");break;case"left":A?(M.left=b.right-u.width,_+="right"):(M.left=b.left,_+="left");break;default:throw new Error('Invalid target mode "'+y.left+'" specified for md-menu on X axis.')}var w=o.mdMenuCtrl.offsets();M.top+=w.top,M.left+=w.left,i(M);var k=Math.round(100*Math.min(b.width/l.offsetWidth,1))/100,x=Math.round(100*Math.min(b.height/l.offsetHeight,1))/100;return{top:Math.round(M.top),left:Math.round(M.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[k,x]),transformOrigin:_}}var $=e.prefixer(),C=e.dom.animator;return{parent:"body",onShow:f,onRemove:p,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,skipHide:!0,themable:!0}}function i(e){return e instanceof t.element&&(e=e[0]),e}var r=8;return o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate"],e("$mdMenu").setDefaults({methods:["target"],options:o})}t.module("material.components.menu").provider("$mdMenu",e),e.$inject=["$$interimElementProvider"]}(),function(){function e(e,n,i,r,a,d,s,c){this.$element=i,this.$attrs=r,this.$mdConstant=a,this.$mdUtil=s,this.$document=d,this.$scope=e,this.$rootScope=n,this.$timeout=c;var l=this;t.forEach(o,function(e){l[e]=t.bind(l,l[e])})}t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.$inject=["$scope","$rootScope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],e.prototype.init=function(){var e=this.$element,t=this.$mdUtil,o=this.$scope,i=this,r=[];e.on("keydown",this.handleKeyDown),this.parentToolbar=t.getClosest(e,"MD-TOOLBAR"),r.push(this.$rootScope.$on("$mdMenuOpen",function(t,n){-1!=i.getMenus().indexOf(n[0])&&(e[0].classList.add("_md-open"),n[0].classList.add("_md-open"),i.currentlyOpenMenu=n.controller("mdMenu"),i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown),i.enableOpenOnHover())})),r.push(this.$rootScope.$on("$mdMenuClose",function(o,r,a){var d=i.getMenus();if(-1!=d.indexOf(r[0])&&(e[0].classList.remove("_md-open"),r[0].classList.remove("_md-open")),e[0].contains(r[0])){for(var s=r[0];s&&-1==d.indexOf(s);)s=t.getClosest(s,"MD-MENU",!0);s&&(a.skipFocus||s.querySelector("button:not([disabled])").focus(),i.currentlyOpenMenu=n,i.disableOpenOnHover(),i.setKeyboardMode(!0))}})),o.$on("$destroy",function(){for(;r.length;)r.shift()()}),this.setKeyboardMode(!0)},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("_md-keyboard-mode"):this.$element[0].classList.remove("_md-keyboard-mode")},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){this.openOnHoverEnabled=!0;var e;(e=this.parentToolbar)&&(e.dataset.mdRestoreStyle=e.getAttribute("style"),e.style.position="relative",e.style.zIndex=100),t.element(this.getMenus()).on("mouseenter",this.handleMenuHover)}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e)},e.prototype.disableOpenOnHover=function(){if(this.openOnHoverEnabled){this.openOnHoverEnabled=!1;var e;(e=this.parentToolbar)&&(e.style.cssText=e.dataset.mdRestoreStyle||""),t.element(this.getMenus()).off("mouseenter",this.handleMenuHover)}},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");this.setKeyboardMode(!1),this.scheduleOpenMenu(o)},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open()},200,!1))},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,i=o&&o.isOpen;this.setKeyboardMode(!0);var r,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),r=!0;break;case n.UP_ARROW:o&&o.close(),r=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0}r&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation())},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();-1==n&&(n=this.getOpenMenuIndex());var o=!1;return-1==n?(n=0,o=!0):(0>e&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o?(t[n].querySelector("button").focus(),t[n]):void 0},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open()},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName})},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()]},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t)if(e[t].classList.contains("_md-open"))return t;return-1}}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function(o,i){return i.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||(n.setAttribute("md-position-mode","left bottom"),n.querySelector("button, a, md-button").setAttribute("role","menuitem"));var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("_md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5)})}}),function(e,t,o,i){t.addClass("_md"),n(e,t),i.init()}}}}t.module("material.components.menuBar").directive("mdMenuBar",e),e.$inject=["$mdUtil","$mdTheming"]}(),function(){function e(){return{restrict:"E",compile:function(e,t){t.role||e[0].setAttribute("role","separator")}}}t.module("material.components.menuBar").directive("mdMenuDivider",e)}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e}t.module("material.components.menuBar").controller("MenuItemController",e),e.$inject=["$scope","$element","$attrs"],e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,"checkbox"!=n.type&&"radio"!=n.type||(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners())},e.prototype.clearNgAria=function(){var e=this.$element[0],n=["role","tabindex","aria-invalid","aria-checked"];t.forEach(n,function(t){e.removeAttribute(t)})},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=a.ngValue?r.$eval(a.ngValue):a.value;return i.$modelValue==e}return i.$modelValue}function n(e){e?c.off("click",l):c.on("click",l)}var o=this,i=this.ngModel,r=this.$scope,a=this.$attrs,d=(this.$element,this.mode);this.handleClick=t.bind(this,this.handleClick);var s=this.iconEl,c=t.element(this.buttonEl),l=this.handleClick;a.$observe("disabled",n),n(a.disabled),i.$render=function(){o.clearNgAria(),e()?(s.style.display="",c.attr("aria-checked","true")):(s.style.display="none",c.attr("aria-checked","false"))},r.$$postDigest(i.$render)},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,i=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=i.ngValue?this.$scope.$eval(i.ngValue):i.value),o.$setViewValue(t),o.$render()}}(),function(){function e(e){return{require:["mdMenuItem","?ngModel"],priority:210,compile:function(n,o){function i(e,o,i){i=i||n,i instanceof t.element&&(i=i[0]),i.hasAttribute(e)||i.setAttribute(e,o)}function r(e){if(n[0].hasAttribute(e)){var t=n[0].getAttribute(e);s[0].setAttribute(e,t),n[0].removeAttribute(e)}}function a(){return!!e.getClosest(n,"md-menu-bar",!0)}if(!a()||"checkbox"!=o.type&&"radio"!=o.type)i("role","menuitem",n[0].querySelector("md-button, button, a"));else{var d=n[0].textContent,s=t.element('<md-button type="button"></md-button>');s.html(d),s.attr("tabindex","0"),n.html(""),n.append(t.element('<md-icon md-svg-icon="check"></md-icon>')),n.append(s),n[0].classList.add("md-indent"),i("role","checkbox"==o.type?"menuitemcheckbox":"menuitemradio",s),t.forEach(["ng-disabled"],r)}return function(e,t,n,o){var i=o[0],r=o[1];i.init(r)}},controller:"MenuItemController"}}t.module("material.components.menuBar").directive("mdMenuItem",e),e.$inject=["$mdUtil"]}(),function(){function e(e,n,o,i,r,a){function d(a,d,c){function f(t,o,r,d,c){var l=++N,p=i.now(),f=o-t,g=m(a.mdDiameter),b=g-u(g),v=r||n.easeFn,E=d||n.duration;o===t?w.attr("d",s(o,g,b,c)):M=h(function $(n){var o=e.Math.max(0,e.Math.min((n||i.now())-p,E));w.attr("d",s(v(o,t,f,E),g,b,c)),l===N&&E>o&&(M=h($))})}function $(){f(k,x,n.easeFnIndeterminate,n.durationIndeterminate,S),S=(S+x)%100;var e=k;k=-x,x=-e}function C(){_||(_=r($,n.durationIndeterminate+50,0,!1),$(),d.addClass(E).removeAttr("aria-valuenow"))}function y(){_&&(r.cancel(_),_=null,d.removeClass(E))}var M,_,A=d[0],T=t.element(A.querySelector("svg")),w=t.element(A.querySelector("path")),k=n.startIndeterminate,x=n.endIndeterminate,S=0,N=0;o(d),d.toggleClass(v,c.hasOwnProperty("disabled")),a.mdMode===b&&C(),a.$on("$destroy",function(){y(),M&&p(M)}),a.$watchGroup(["value","mdMode",function(){var e=A.disabled;return e===!0||e===!1?e:t.isDefined(d.attr("disabled"))}],function(e,t){var n=e[1],o=e[2],i=t[2];if(o!==i&&d.toggleClass(v,!!o),o)y();else if(n!==g&&n!==b&&(n=b,c.$set("mdMode",n)),n===b)C();else{var r=l(e[0]);y(),d.attr("aria-valuenow",r),f(l(t[0]),r)}}),a.$watch("mdDiameter",function(e){var t=m(e),n=u(t),o=t/2+"px",i={width:t+"px",height:t+"px"};T[0].setAttribute("viewBox","0 0 "+t+" "+t),T.css(i).css("transform-origin",o+" "+o+" "+o),d.css(i),w.css("stroke-width",n+"px")})}function s(e,t,n,o){var i,r=3.5999,a=o||0,d=t/2,s=n/2,l=a*r,m=e*r,u=c(d,s,l),h=c(d,s,m+l),p=0>m?0:1;return i=0>m?m>=-180?0:1:180>=m?0:1,"M"+u+"A"+s+","+s+" 0 "+i+","+p+" "+h}function c(t,n,o){var i=(o-90)*f;return t+n*e.Math.cos(i)+","+(t+n*e.Math.sin(i))}function l(t){return e.Math.max(0,e.Math.min(t||0,100))}function m(e){var t=n.progressSize;if(e){var o=parseFloat(e);return e.lastIndexOf("%")===e.length-1&&(o=o/100*t),o}return t}function u(e){return n.strokeWidth/100*e}var h=e.requestAnimationFrame||t.noop,p=e.cancelAnimationFrame||t.noop,f=e.Math.PI/180,g="determinate",b="indeterminate",v="_md-progress-circular-disabled",E="_md-mode-indeterminate";return{restrict:"E",scope:{value:"@",mdDiameter:"@",mdMode:"@"},template:'<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>',compile:function(e,n){if(e.attr({"aria-valuemin":0,"aria-valuemax":100,role:"progressbar"}),t.isUndefined(n.mdMode)){var o=t.isDefined(n.value),i=o?g:b;n.$set("mdMode",i)}else n.$set("mdMode",n.mdMode.trim());return d}}}t.module("material.components.progressCircular").directive("mdProgressCircular",e),e.$inject=["$window","$mdProgressCircular","$mdTheming","$mdUtil","$interval","$log"]}(),function(){function e(){function e(e,t,n,o){return n*e/o+t}function n(e,t,n,o){var i=(e/=o)*e,r=i*e;return t+n*(6*r*i+-15*i*i+10*r)}var o={progressSize:50,strokeWidth:10,duration:100,easeFn:e,durationIndeterminate:500,startIndeterminate:3,endIndeterminate:80,easeFnIndeterminate:n,easingPresets:{linearEase:e,materialEase:n}};return{configure:function(e){return o=t.extend(o,e||{})},$get:function(){return o}}}t.module("material.components.progressCircular").provider("$mdProgressCircular",e)}(),function(){function e(){function e(e,o,i,r){if(r){var a=r.getTabElementIndex(o),d=n(o,"md-tab-body").remove(),s=n(o,"md-tab-label").remove(),c=r.insertTab({scope:e,parent:e.$parent,index:a,element:o,template:d.html(),label:s.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(c.getIndex(),!0)}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return r.getTabElementIndex(o)},function(e){c.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(c)})}}function n(e,n){for(var o=e[0].children,i=0,r=o.length;r>i;i++){var a=o[i];if(a.tagName===n.toUpperCase())return t.element(a)}return t.element()}return{require:"^?mdTabs",terminal:!0,compile:function(o,i){var r=n(o,"md-tab-label"),a=n(o,"md-tab-body");if(0==r.length&&(r=t.element("<md-tab-label></md-tab-label>"),i.label?r.text(i.label):r.append(o.contents()),0==a.length)){var d=o.contents().detach();a=t.element("<md-tab-body></md-tab-body>"),a.append(d)}return o.append(r),a.html()&&o.append(a),e},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}t.module("material.components.tabs").directive("mdTabScroll",e),e.$inject=["$parse"]}(),function(){function e(e,o,i,r,a,d,s,c,l,m){function u(){le.selectedIndex=le.selectedIndex||0,h(),f(),p(),m(o),d.nextTick(function(){ue=F(),re(),te(),ae(),le.tabs[le.selectedIndex]&&le.tabs[le.selectedIndex].scope.select(),fe=!0,Y()})}function h(){var e=c.$mdTabsTemplate,n=t.element(o[0].querySelector("md-tab-data"));n.html(e),l(n.contents())(le.parent),delete c.$mdTabsTemplate}function p(){t.element(i).on("resize",I),e.$on("$destroy",v)}function f(){e.$watch("$mdTabsCtrl.selectedIndex",T)}function g(e,t){var n=c.$normalize("md-"+e);t&&V(e,t),c.$observe(n,function(t){le[e]=t})}function b(e,t){function n(t){le[e]="false"!==t}var o=c.$normalize("md-"+e);t&&V(e,t),c.hasOwnProperty(o)&&n(c[o]),c.$observe(o,n)}function v(){pe=!0,t.element(i).off("resize",I)}function E(e){var n=F();t.element(n.wrapper).toggleClass("md-stretch-tabs",j()),ae()}function $(e){le.shouldCenterTabs=z()}function C(e,n){if(e!==n){var o=F();t.forEach(o.tabs,function(t){t.style.maxWidth=e+"px"}),d.nextTick(le.updateInkBarStyles)}}function y(e,t){e!==t&&(le.maxTabWidth=Q(),le.shouldCenterTabs=z(),d.nextTick(function(){le.maxTabWidth=Q(),te(le.selectedIndex)}))}function M(e){o[e?"removeClass":"addClass"]("md-no-tab-content")}function _(n){var o=F(),i=le.shouldCenterTabs?"":"-"+n+"px";t.element(o.paging).css(r.CSS.TRANSFORM,"translate3d("+i+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function A(e,t){e!==t&&F().tabs[e]&&(te(),ee())}function T(t,n){t!==n&&(le.selectedIndex=W(t),le.lastSelectedIndex=n,le.updateInkBarStyles(),re(),te(t),e.$broadcast("$mdTabsChanged"),le.tabs[n]&&le.tabs[n].scope.deselect(),le.tabs[t]&&le.tabs[t].scope.select())}function w(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0])}function k(){k.watcher||(k.watcher=e.$watch(function(){d.nextTick(function(){k.watcher&&o.prop("offsetParent")&&(k.watcher(),k.watcher=null,I())},!1)}))}function x(e){switch(e.keyCode){case r.KEY_CODE.LEFT_ARROW:e.preventDefault(),J(-1,!0);break;case r.KEY_CODE.RIGHT_ARROW:e.preventDefault(),J(1,!0);break;case r.KEY_CODE.SPACE:case r.KEY_CODE.ENTER:e.preventDefault(),me||S(le.focusIndex)}le.lastClick=!1}function S(e,t){me||(le.focusIndex=le.selectedIndex=e),le.lastClick=!0,t&&le.noSelectClick||d.nextTick(function(){le.tabs[e].element.triggerHandler("click")},!1)}function N(e){le.shouldPaginate&&(e.preventDefault(),le.offsetLeft=se(le.offsetLeft-e.wheelDelta))}function D(){var e,t,n=F(),o=n.canvas.clientWidth,i=o+le.offsetLeft;
for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>i));e++);le.offsetLeft=se(t.offsetLeft)}function H(){var e,t,n=F();for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>=le.offsetLeft));e++);le.offsetLeft=se(t.offsetLeft+t.offsetWidth-n.canvas.clientWidth)}function I(){le.lastSelectedIndex=le.selectedIndex,le.offsetLeft=se(le.offsetLeft),d.nextTick(function(){le.updateInkBarStyles(),Y()})}function O(e){t.element(F().inkBar).toggleClass("ng-hide",e)}function L(e){o.toggleClass("md-dynamic-height",e)}function R(e){if(!pe){var t=le.selectedIndex,n=le.tabs.splice(e.getIndex(),1)[0];ie(),le.selectedIndex===t&&(n.scope.deselect(),le.tabs[le.selectedIndex]&&le.tabs[le.selectedIndex].scope.select()),d.nextTick(function(){Y(),le.offsetLeft=se(le.offsetLeft)})}}function P(e,n){var o=fe,i={getIndex:function(){return le.tabs.indexOf(r)},isActive:function(){return this.getIndex()===le.selectedIndex},isLeft:function(){return this.getIndex()<le.selectedIndex},isRight:function(){return this.getIndex()>le.selectedIndex},shouldRender:function(){return!le.noDisconnect||this.isActive()},hasFocus:function(){return!le.lastClick&&le.hasFocus&&this.getIndex()===le.focusIndex},id:d.nextUid()},r=t.extend(i,e);return t.isDefined(n)?le.tabs.splice(n,0,r):le.tabs.push(r),ne(),oe(),d.nextTick(function(){Y(),o&&le.autoselect&&d.nextTick(function(){d.nextTick(function(){S(le.tabs.indexOf(r))})})}),r}function F(){var e={},t=o[0];return e.wrapper=t.querySelector("md-tabs-wrapper"),e.canvas=e.wrapper.querySelector("md-tabs-canvas"),e.paging=e.canvas.querySelector("md-pagination-wrapper"),e.inkBar=e.paging.querySelector("md-ink-bar"),e.contents=t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"),e.tabs=e.paging.querySelectorAll("md-tab-item"),e.dummies=e.canvas.querySelectorAll("md-dummy-tab"),e}function B(){return le.offsetLeft>0}function U(){var e=F(),t=e.tabs[e.tabs.length-1];return t&&t.offsetLeft+t.offsetWidth>e.canvas.clientWidth+le.offsetLeft}function j(){switch(le.stretchTabs){case"always":return!0;case"never":return!1;default:return!le.shouldPaginate&&i.matchMedia("(max-width: 600px)").matches}}function z(){return le.centerTabs&&!le.shouldPaginate}function q(){if(le.noPagination||!fe)return!1;var e=o.prop("clientWidth");return t.forEach(F().dummies,function(t){e-=t.offsetWidth}),0>e}function W(e){if(-1===e)return-1;var t,n,o=Math.max(le.tabs.length-e,e);for(t=0;o>=t;t++){if(n=le.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=le.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function V(e,t,n){Object.defineProperty(le,e,{get:function(){return n},set:function(e){var o=n;n=e,t&&t(e,o)}})}function Y(){K(),le.maxTabWidth=Q(),le.shouldPaginate=q()}function K(){var e=F();j()?t.element(e.paging).css("width",""):t.element(e.paging).css("width",G()+"px")}function G(){return X(F().dummies)}function X(e){var n=0;return t.forEach(e,function(e){n+=Math.max(e.offsetWidth,e.getBoundingClientRect().width)}),Math.ceil(n)}function Q(){return o.prop("clientWidth")}function Z(){var e=le.tabs[le.selectedIndex],t=le.tabs[le.focusIndex];le.tabs=le.tabs.sort(function(e,t){return e.index-t.index}),le.selectedIndex=le.tabs.indexOf(e),le.focusIndex=le.tabs.indexOf(t)}function J(e,t){var n,o=t?"focusIndex":"selectedIndex",i=le[o];for(n=i+e;le.tabs[n]&&le.tabs[n].scope.disabled;n+=e);le.tabs[n]&&(le[o]=n)}function ee(){F().dummies[le.focusIndex].focus()}function te(e){var t=F();if(null==e&&(e=le.focusIndex),t.tabs[e]&&!le.shouldCenterTabs){var n=t.tabs[e],o=n.offsetLeft,i=n.offsetWidth+o;le.offsetLeft=Math.max(le.offsetLeft,se(i-t.canvas.clientWidth+64)),le.offsetLeft=Math.min(le.offsetLeft,se(o))}}function ne(){he.forEach(function(e){d.nextTick(e)}),he=[]}function oe(){var e=!1;t.forEach(le.tabs,function(t){t.template&&(e=!0)}),le.hasContent=e}function ie(){le.selectedIndex=W(le.selectedIndex),le.focusIndex=W(le.focusIndex)}function re(){if(!le.dynamicHeight)return o.css("height","");if(!le.tabs.length)return he.push(re);var e=F(),t=e.contents[le.selectedIndex],i=t?t.offsetHeight:0,r=e.wrapper.offsetHeight,a=i+r,c=o.prop("clientHeight");if(c!==a){"bottom"===o.attr("md-align-tabs")&&(c-=r,a-=r,o.attr("md-border-bottom")!==n&&++c),me=!0;var l={height:c+"px"},m={height:a+"px"};o.css(l),s(o,{from:l,to:m,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","")}),me=!1})}}function ae(){var e=F();if(!e.tabs[le.selectedIndex])return void t.element(e.inkBar).css({left:"auto",right:"auto"});if(!le.tabs.length)return he.push(le.updateInkBarStyles);if(!o.prop("offsetParent"))return k();var n=le.selectedIndex,i=e.paging.offsetWidth,r=e.tabs[n],a=r.offsetLeft,s=i-a-r.offsetWidth;if(le.shouldCenterTabs){var c=X(e.tabs);i>c&&d.nextTick(ae,!1)}de(),t.element(e.inkBar).css({left:a+"px",right:s+"px"})}function de(){var e=F(),n=le.selectedIndex,o=le.lastSelectedIndex,i=t.element(e.inkBar);t.isNumber(o)&&i.toggleClass("md-left",o>n).toggleClass("md-right",n>o)}function se(e){var t=F();if(!t.tabs.length||!le.shouldPaginate)return 0;var n=t.tabs[t.tabs.length-1],o=n.offsetLeft+n.offsetWidth;return e=Math.max(0,e),e=Math.min(o-t.canvas.clientWidth,e)}function ce(e,n){var o=F(),i={colorElement:t.element(o.inkBar)};a.attach(e,n,i)}var le=this,me=!1,ue=F(),he=[],pe=!1,fe=!1;g("stretchTabs",E),V("focusIndex",A,le.selectedIndex||0),V("offsetLeft",_,0),V("hasContent",M,!1),V("maxTabWidth",C,Q()),V("shouldPaginate",y,!1),b("noInkBar",O),b("dynamicHeight",L),b("noPagination"),b("swipeContent"),b("noDisconnect"),b("autoselect"),b("noSelectClick"),b("centerTabs",$,!1),b("enableDisconnect"),le.scope=e,le.parent=e.$parent,le.tabs=[],le.lastSelectedIndex=null,le.hasFocus=!1,le.lastClick=!0,le.shouldCenterTabs=z(),le.updatePagination=d.debounce(Y,100),le.redirectFocus=ee,le.attachRipple=ce,le.insertTab=P,le.removeTab=R,le.select=S,le.scroll=N,le.nextPage=D,le.previousPage=H,le.keydown=x,le.canPageForward=U,le.canPageBack=B,le.refreshIndex=ie,le.incrementIndex=J,le.getTabElementIndex=w,le.updateInkBarStyles=d.debounce(ae,100),le.updateTabOrder=d.debounce(Z,100),u()}t.module("material.components.tabs").controller("MdTabsController",e),e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming"]}(),function(){function e(e){return{scope:{selectedIndex:"=?mdSelected"},template:function(t,n){return n.$mdTabsTemplate=t.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="_md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" role="tab" aria-controls="tab-content-{{::tab.id}}" aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="tab-content-{{::tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" ng-if="$mdTabsCtrl.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>'},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0}}t.module("material.components.tabs").directive("mdTabs",e),e.$inject=["$$mdSvgRegistry"]}(),function(){function e(e){return{require:"^?mdTabs",link:function(e,t,n,o){if(o){var i=new MutationObserver(function(e){o.updatePagination(),o.updateInkBarStyles()}),r={childList:!0,subtree:!0};i.observe(t[0],r),e.$on("$destroy",function(){i&&i.disconnect()})}}}}t.module("material.components.tabs").directive("mdTabsDummyWrapper",e),e.$inject=["$mdUtil"]}(),function(){function e(e,t){function n(n,o,i,r){function a(){n.$watch("connected",function(e){e===!1?d():s()}),n.$on("$destroy",s)}function d(){r.enableDisconnect&&t.disconnectScope(c)}function s(){r.enableDisconnect&&t.reconnectScope(c)}if(r){var c=r.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(c),t.nextTick(a)}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"}}t.module("material.components.tabs").directive("mdTabsTemplate",e),e.$inject=["$compile","$mdUtil"]}(),function(){t.module("material.core").constant("$MD_THEME_CSS","/*  Only used with Theme processes */html.md-THEME_NAME-theme, body.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-color}}'; }md-autocomplete.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  md-autocomplete.md-THEME_NAME-theme[disabled]:not([md-floating-label]) {    background: '{{background-100}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions-container.md-THEME_NAME-theme {  background: '{{background-A100}}'; }  .md-autocomplete-suggestions-container.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop {  background-color: '{{background-900-0.0}}'; }  md-backdrop.md-opaque.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }.md-button.md-THEME_NAME-theme:not([disabled]):hover {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-focused {  background-color: '{{background-500-0.2}}'; }.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {  background-color: transparent; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }  .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {    color: '{{primary-contrast}}';    background-color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {      color: '{{primary-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {      background-color: '{{primary-600}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {      background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {    color: '{{primary-color}}'; }.md-button.md-THEME_NAME-theme.md-fab {  background-color: '{{accent-color}}';  color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {    color: '{{accent-contrast}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {    background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {    background-color: '{{accent-A700}}'; }.md-button.md-THEME_NAME-theme.md-raised {  color: '{{background-900}}';  background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon {    color: '{{background-900}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {    background-color: '{{background-50}}'; }  .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {    background-color: '{{background-200}}'; }.md-button.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }  .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {    color: '{{warn-contrast}}';    background-color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {      color: '{{warn-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {      background-color: '{{warn-600}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {      background-color: '{{warn-600}}'; }  .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {    color: '{{warn-color}}'; }.md-button.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }  .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {    color: '{{accent-contrast}}';    background-color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {      color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {      background-color: '{{accent-A700}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {    color: '{{accent-color}}'; }.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {  color: '{{foreground-3}}';  cursor: default; }  .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {    color: '{{foreground-3}}'; }.md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {  background-color: '{{foreground-4}}'; }.md-button.md-THEME_NAME-theme[disabled] {  background-color: transparent; }._md a.md-THEME_NAME-theme:not(.md-button).md-primary {  color: '{{primary-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-primary:hover {    color: '{{primary-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-accent {  color: '{{accent-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover {    color: '{{accent-A700}}'; }._md a.md-THEME_NAME-theme:not(.md-button).md-warn {  color: '{{warn-color}}'; }  ._md a.md-THEME_NAME-theme:not(.md-button).md-warn:hover {    color: '{{warn-700}}'; }md-card.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-hue-1}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }  md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon {    color: '{{background-color}}';    background-color: '{{foreground-3}}'; }  md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead {    color: '{{foreground-2}}'; }  md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead {    color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-A700}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused ._md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme ._md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked ._md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked ._md-icon:after {  border-color: '{{accent-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary ._md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked ._md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused ._md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked ._md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] ._md-container {  color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple {  color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn ._md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked ._md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) ._md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked ._md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] ._md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked ._md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked ._md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] ._md-icon:after {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] ._md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{foreground-4}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }  md-chips.md-THEME_NAME-theme .md-chips ._md-chip-input-container input {    color: '{{foreground-1}}'; }    md-chips.md-THEME_NAME-theme .md-chips ._md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips ._md-chip-input-container input:-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips ._md-chip-input-container input::-moz-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips ._md-chip-input-container input:-ms-input-placeholder {      color: '{{foreground-3}}'; }    md-chips.md-THEME_NAME-theme .md-chips ._md-chip-input-container input::-webkit-input-placeholder {      color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme md-chip md-icon {    color: '{{background-700}}'; }  md-chips.md-THEME_NAME-theme md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }  md-chips.md-THEME_NAME-theme md-chip._md-chip-editing {    background: transparent;    color: '{{background-800}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  color: '{{foreground-1}}';  background-color: '{{background-default}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-1}}';  color: '{{foreground-1}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions, md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions {    border-top-color: '{{foreground-4}}'; }/** Theme styles for mdCalendar. */.md-calendar.md-THEME_NAME-theme {  background: '{{background-A100}}';  color: '{{background-A200-0.87}}'; }  .md-calendar.md-THEME_NAME-theme tr:last-child td {    border-bottom-color: '{{background-200}}'; }.md-THEME_NAME-theme .md-calendar-day-header {  background: '{{background-300}}';  color: '{{background-A200-0.87}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator {  border: 1px solid '{{primary-500}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled {  color: '{{primary-500-0.6}}'; }.md-calendar-date.md-focus .md-THEME_NAME-theme .md-calendar-date-selection-indicator, .md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover {  background: '{{background-300}}'; }.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator {  background: '{{primary-500}}';  color: '{{primary-500-contrast}}';  border-color: transparent; }.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled {  color: '{{background-A200-0.435}}'; }/** Theme styles for mdDatepicker. */.md-THEME_NAME-theme .md-datepicker-input {  color: '{{foreground-1}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  .md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-input-container {  border-bottom-color: '{{foreground-4}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused {    border-bottom-color: '{{primary-color}}'; }  .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid {    border-bottom-color: '{{warn-A700}}'; }.md-THEME_NAME-theme .md-datepicker-calendar-pane {  border-color: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle {  border-top-color: '{{foreground-3}}'; }.md-THEME_NAME-theme .md-datepicker-triangle-button:hover .md-datepicker-expand-triangle {  border-top-color: '{{foreground-2}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon {  fill: '{{primary-500}}'; }.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-input-container,.md-THEME_NAME-theme .md-datepicker-input-mask-opaque {  background: '{{background-hue-1}}'; }.md-THEME_NAME-theme .md-datepicker-calendar {  background: '{{background-A100}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }.layout-row > md-divider.md-THEME_NAME-theme,.layout-xs-row > md-divider.md-THEME_NAME-theme, .layout-gt-xs-row > md-divider.md-THEME_NAME-theme,.layout-sm-row > md-divider.md-THEME_NAME-theme, .layout-gt-sm-row > md-divider.md-THEME_NAME-theme,.layout-md-row > md-divider.md-THEME_NAME-theme, .layout-gt-md-row > md-divider.md-THEME_NAME-theme,.layout-lg-row > md-divider.md-THEME_NAME-theme, .layout-gt-lg-row > md-divider.md-THEME_NAME-theme,.layout-xl-row > md-divider.md-THEME_NAME-theme {  border-right-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label,md-input-container.md-THEME_NAME-theme ._md-placeholder {  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label.md-required:after {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required:after {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme .md-input-messages-animation, md-input-container.md-THEME_NAME-theme .md-input-message-animation {  color: '{{warn-A700}}'; }  md-input-container.md-THEME_NAME-theme .md-input-messages-animation .md-char-counter, md-input-container.md-THEME_NAME-theme .md-input-message-animation .md-char-counter {    color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input, md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-resized .md-input {  border-color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-color}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input-message-animation, md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-A700}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled],[disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme ._md-proxy-focus.md-focused div._md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item .md-avatar-icon {  background-color: '{{foreground-3}}';  color: '{{background-color}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-menu-content.md-THEME_NAME-theme {  background-color: '{{background-A100}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-item {    color: '{{background-A200-0.87}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item md-icon {      color: '{{background-A200-0.54}}'; }    md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] {      color: '{{background-A200-0.25}}'; }      md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] md-icon {        color: '{{background-A200-0.25}}'; }  md-menu-content.md-THEME_NAME-theme md-menu-divider {    background-color: '{{background-A200-0.11}}'; }md-menu-bar.md-THEME_NAME-theme > button.md-button {  color: '{{foreground-2}}';  border-radius: 2px; }md-menu-bar.md-THEME_NAME-theme md-menu._md-open > button, md-menu-bar.md-THEME_NAME-theme md-menu > button:focus {  outline: none;  background: '{{background-200}}'; }md-menu-bar.md-THEME_NAME-theme._md-open:not(._md-keyboard-mode) md-menu:hover > button {  background-color: '{{ background-500-0.2}}'; }md-menu-bar.md-THEME_NAME-theme:not(._md-keyboard-mode):not(._md-open) md-menu button:hover,md-menu-bar.md-THEME_NAME-theme:not(._md-keyboard-mode):not(._md-open) md-menu button:focus {  background: transparent; }md-menu-content.md-THEME_NAME-theme .md-menu > .md-button:after {  color: '{{background-A200-0.54}}'; }md-menu-content.md-THEME_NAME-theme .md-menu._md-open > .md-button {  background-color: '{{ background-500-0.2}}'; }md-toolbar.md-THEME_NAME-theme.md-menu-toolbar {  background-color: '{{background-A100}}';  color: '{{background-A200}}'; }  md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler {    background-color: '{{primary-color}}';    color: '{{background-A100-0.87}}'; }    md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon {      color: '{{background-A100-0.87}}'; }md-nav-bar.md-THEME_NAME-theme .md-nav-bar {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-nav-bar.md-THEME_NAME-theme .md-button._md-nav-button.md-unselected {  color: '{{foreground-2}}'; }md-nav-bar.md-THEME_NAME-theme md-nav-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }.md-panel {  background-color: '{{background-900-0.0}}'; }  .md-panel._md-panel-backdrop.md-THEME_NAME-theme {    background-color: '{{background-900-1.0}}'; }md-progress-circular.md-THEME_NAME-theme path {  stroke: '{{primary-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-warn path {  stroke: '{{warn-color}}'; }md-progress-circular.md-THEME_NAME-theme.md-accent path {  stroke: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme ._md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme ._md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn ._md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn ._md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent ._md-container {  background-color: '{{accent-A100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent ._md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn ._md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn ._md-dashed:before {  background: radial-gradient(\"{{warn-100}}\" 0%, \"{{warn-100}}\" 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent ._md-bar1 {  background-color: '{{accent-A100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent ._md-dashed:before {  background: radial-gradient(\"{{accent-A100}}\" 0%, \"{{accent-A100}}\" 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme ._md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme ._md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked ._md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme ._md-container .md-ripple {  color: '{{accent-A700}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary ._md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary ._md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary ._md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary ._md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked ._md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked ._md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked ._md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked ._md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked ._md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked ._md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked ._md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked ._md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary ._md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary ._md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary ._md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary ._md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn ._md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn ._md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn ._md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn ._md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked ._md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked ._md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked ._md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked ._md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked ._md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked ._md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked ._md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked ._md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn ._md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn ._md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn ._md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn ._md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled],md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] ._md-container ._md-off,  md-radio-button.md-THEME_NAME-theme[disabled] ._md-container ._md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] ._md-container ._md-on,  md-radio-button.md-THEME_NAME-theme[disabled] ._md-container ._md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple {  color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple, md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple {  color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple {  color: '{{warn-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked ._md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked ._md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary ._md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked ._md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn ._md-container:before {  background-color: '{{warn-color-0.26}}'; }md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme ._md-select-value {  color: '{{primary-color}}'; }  md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme ._md-select-value._md-select-placeholder {    color: '{{primary-color}}'; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme ._md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-input-container.md-input-invalid md-select.md-THEME_NAME-theme.md-no-underline ._md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme[disabled] ._md-select-value {  border-bottom-color: transparent;  background-image: linear-gradient(to right, \"{{foreground-3}}\" 0%, \"{{foreground-3}}\" 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, \"{{foreground-3}}\" 100%); }md-select.md-THEME_NAME-theme ._md-select-value {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme ._md-select-value._md-select-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme.md-no-underline ._md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched ._md-select-value {  color: '{{warn-A700}}' !important;  border-bottom-color: '{{warn-A700}}' !important; }md-select.md-THEME_NAME-theme.ng-invalid.ng-touched.md-no-underline ._md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus ._md-select-value {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus ._md-select-value._md-select-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-no-underline ._md-select-value {  border-bottom-color: transparent !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent ._md-select-value {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn ._md-select-value {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] ._md-select-value {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] ._md-select-value._md-select-placeholder {    color: '{{foreground-3}}'; }md-select-menu.md-THEME_NAME-theme md-content {  background: '{{background-A100}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-optgroup {    color: '{{background-600-0.87}}'; }  md-select-menu.md-THEME_NAME-theme md-content md-option {    color: '{{background-900-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[disabled] ._md-text {      color: '{{background-400-0.87}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):focus, md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):hover {      background: '{{background-200}}'; }    md-select-menu.md-THEME_NAME-theme md-content md-option[selected] {      color: '{{primary-500}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected]:focus {        color: '{{primary-600}}'; }      md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent {        color: '{{accent-color}}'; }        md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent:focus {          color: '{{accent-A700}}'; }._md-checkbox-enabled.md-THEME_NAME-theme .md-ripple {  color: '{{primary-600}}'; }._md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple {  color: '{{background-600}}'; }._md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple {  color: '{{foreground-2}}'; }._md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple {  color: '{{primary-color-0.87}}'; }._md-checkbox-enabled.md-THEME_NAME-theme ._md-icon {  border-color: '{{foreground-2}}'; }._md-checkbox-enabled.md-THEME_NAME-theme[selected] ._md-icon {  background-color: '{{primary-color-0.87}}'; }._md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused ._md-container:before {  background-color: '{{primary-color-0.26}}'; }._md-checkbox-enabled.md-THEME_NAME-theme[selected] ._md-icon:after {  border-color: '{{primary-contrast-0.87}}'; }._md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] ._md-container {  color: '{{foreground-3}}'; }._md-checkbox-enabled.md-THEME_NAME-theme md-option ._md-text {  color: '{{background-900-0.87}}'; }md-sidenav.md-THEME_NAME-theme, md-sidenav.md-THEME_NAME-theme md-content {  background-color: '{{background-hue-1}}'; }md-slider.md-THEME_NAME-theme ._md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme ._md-track-ticks {  color: '{{background-contrast}}'; }md-slider.md-THEME_NAME-theme ._md-focus-ring {  background-color: '{{accent-A200-0.2}}'; }md-slider.md-THEME_NAME-theme ._md-disabled-thumb {  border-color: '{{background-color}}';  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme._md-min ._md-thumb:after {  background-color: '{{background-color}}';  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme._md-min ._md-focus-ring {  background-color: '{{foreground-3-0.38}}'; }md-slider.md-THEME_NAME-theme._md-min[md-discrete] ._md-thumb:after {  background-color: '{{background-contrast}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme._md-min[md-discrete] ._md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme._md-min[md-discrete] ._md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme._md-min[md-discrete][md-vertical] ._md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme ._md-track._md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme ._md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme ._md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme ._md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme[md-vertical] ._md-sign:after {  border-top-color: transparent;  border-left-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme ._md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn ._md-focus-ring {  background-color: '{{warn-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-warn ._md-track._md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn ._md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn ._md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn ._md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn[md-vertical] ._md-sign:after {  border-top-color: transparent;  border-left-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn ._md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary ._md-focus-ring {  background-color: '{{primary-200-0.38}}'; }md-slider.md-THEME_NAME-theme.md-primary ._md-track._md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary ._md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary ._md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary ._md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary[md-vertical] ._md-sign:after {  border-top-color: transparent;  border-left-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary ._md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] ._md-thumb:after {  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled]:not(._md-min) ._md-thumb:after, md-slider.md-THEME_NAME-theme[disabled][md-discrete] ._md-thumb:after {  background-color: '{{foreground-3}}';  border-color: transparent; }md-slider.md-THEME_NAME-theme[disabled][readonly] ._md-sign {  background-color: '{{background-400}}'; }  md-slider.md-THEME_NAME-theme[disabled][readonly] ._md-sign:after {    border-top-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly][md-vertical] ._md-sign:after {  border-top-color: transparent;  border-left-color: '{{background-400}}'; }md-slider.md-THEME_NAME-theme[disabled][readonly] ._md-disabled-thumb {  border-color: transparent;  background-color: transparent; }md-slider-container[disabled] > *:first-child:not(md-slider),md-slider-container[disabled] > *:last-child:not(md-slider) {  color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-default}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-ink-ripple {  color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme ._md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme ._md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked ._md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked ._md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused ._md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple {  color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary ._md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary ._md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused ._md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple {  color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn ._md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn ._md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused ._md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] ._md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] ._md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled], md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon, md-tabs.md-THEME_NAME-theme .md-tab.md-focused, md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-A100}}'; }md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-accent > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-primary > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-tabs.md-THEME_NAME-theme.md-warn > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{primary-color}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{primary-100}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{primary-contrast}}'; }    md-toolbar > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{accent-color}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{accent-A100}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{accent-contrast}}'; }    md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{accent-contrast-0.1}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-ink-bar {    color: '{{primary-600-1}}';    background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper {  background-color: '{{warn-color}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]) {    color: '{{warn-100}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-active md-icon, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused md-icon {      color: '{{warn-contrast}}'; }    md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme > md-tabs-wrapper > md-tabs-canvas > md-pagination-wrapper > md-tab-item:not([disabled]).md-focused {      background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme .md-toast-content {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-toast-content .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight {      color: '{{accent-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-primary {        color: '{{primary-color}}'; }      md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn {        color: '{{warn-color}}'; }md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon {    color: '{{primary-contrast}}';    fill: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon {    color: '{{primary-contrast-0.26}}';    fill: '{{primary-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple {      color: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent md-icon {      color: '{{accent-contrast}}';      fill: '{{accent-contrast}}'; }    md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon {      color: '{{accent-contrast-0.26}}';      fill: '{{accent-contrast-0.26}}'; }  md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme ._md-content {    background-color: '{{foreground-2}}'; }");
}()}(window,window.angular),window.ngMaterial={version:{full:"1.1.0-rc.5-master-42833aa"}};

/*global console*/

/**
 *
 * Angular Material Sidenav
 * https://github.com/sovanna/angular-material-sidenav
 * Licence MIT
 * (c) 2015 Sovanna Hing <sovanna.hing@gmail.com>
 *
 */
(function(window, angular, undefined) {
    'use strict';

    angular.module('sasrio.angular-material-sidenav', [])

    .provider('ssSideNavSections', function SSSideNavSectionsProvider() {
        var _sections = [],
            _theme,
            _palettes;

        this.initWithSections = function(value) {
            _sections = value ? value : [];
        };

        this.initWithTheme = function (value) {
            _theme = value.theme();
            _palettes = value._PALETTES;
        };

        this.$get = [function ssSideNavSectionsFactory() {
            var SSSideNavSections = function() {
                this.sections = _sections;
                this.theme = _theme;
                this.palettes = _palettes;
            };

            return new SSSideNavSections();
        }];
    })

    .factory('ssSideNavSharedService', [
        '$rootScope',
        function($rootScope) {
            var _sharedService = {};

            _sharedService.broadcast = function(eventName, eventData) {
                $rootScope.$broadcast(eventName, eventData);
            };

            _sharedService.emit = function(eventName, eventData) {
                $rootScope.$emit(eventName, eventData);
            };

            return _sharedService;
        }
    ])

    .factory('ssSideNav', [
        '$rootScope',
        '$location',
        '$state',
        '$stateParams',
        'ssSideNavSections',
        'ssSideNavSharedService',
        function(
            $rootScope,
            $location,
            $state,
            $stateParams,
            ssSideNavSections,
            ssSideNavSharedService) {

            var self,
                sections = ssSideNavSections.sections;

            var matchPage = function(section, page, newState) {
                var toState = newState ? newState.toState : null;

                if (!toState) {
                    return console.warn('ss-sidenav: `toState` key not found');
                }

                if (toState.name !== page.state) {
                    return;
                }

                if (!self) {
                    console.warn('ss-sidenav: strange `self` is undef');
                    return;
                }

                self.selectSection(section);
                self.selectPage(section, page);
            };

            var onStateChangeStart = function(event, toState, toParams) {
                var newState = {
                    toState: toState,
                    toParams: toParams
                };

                sections.forEach(function(section) {
                    if (section.children) {
                        section.children.forEach(function(child) {
                            if (child.pages) {
                                child.pages.forEach(function(page) {
                                    matchPage(child, page, newState);
                                });
                            } else if (child.type === 'link') {
                                matchPage(child, child, newState);
                            }
                        });
                    } else if (section.pages) {
                        section.pages.forEach(function(page) {
                            matchPage(section, page, newState);
                        });
                    } else if (section.type === 'link') {
                        matchPage(section, section, newState);
                    }
                });
            };

            self = {
                sections: sections,
                forceSelectionWithId: function (id) {
                    ssSideNavSharedService.broadcast('SS_SIDENAV_FORCE_SELECTED_ITEM', id);
                },
                selectSection: function(section) {
                    self.openedSection = section;
                },
                toggleSelectSection: function(section) {
                    self.openedSection = (self.openedSection === section) ? null : section;
                },
                isSectionSelected: function(section) {
                    return self.openedSection === section;
                },
                selectPage: function(section, page) {
                    self.currentSection = section;
                    self.currentPage = page;
                },
                isPageSelected: function(page) {
                    return self.currentPage ? self.currentPage.state === page : false;
                },
                setVisible: function (id, value) {
                    if (!Array.prototype.every) {
                        // TODO prototyp for every,
                        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every;
                        return console.error('every funct not implemented');
                    }

                    self.sections.every(function (section) {
                        if (section.id === id) {
                            section.hidden = !value;
                            return false;
                        }

                        if (section.children) {
                            section.children.every(function (child) {
                                if (child.id === id) {
		                            child.hidden = !value;
		                            return false;
		                        };

                                if (child.pages) {
                                    child.pages.every(function (page) {
                                        if (page.id === id) {
                                            page.hidden = !value;
                                            return false;
                                        }

                                        return true;
                                    });
                                }

                                return true;
                            });
                        }

                        return true;
                    });
                },
                setVisibleFor: function (ids) {
                    if (!Array.prototype.every) {
                        // TODO prototyp for every,
                        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every;
                        return console.error('every funct not implemented');
                    }

                    ids.forEach(function (id) {
                        self.setVisible(id.id, id.value);
                    });
                }
            };

            $rootScope.$on('$stateChangeStart', onStateChangeStart);

            onStateChangeStart(null, $state.current, $stateParams);

            return self;
        }
    ])

    .controller('menuToggleCtrl', [
        '$scope',
        '$state',
        'ssSideNav',
        function(
            $scope,
            $state,
            ssSideNav) {

            $scope.isOpen = function(section) {
                return ssSideNav.isSectionSelected(section);
            };

            $scope.toggle = function(section) {
                ssSideNav.toggleSelectSection(section);
            };

            this.isOpen = $scope.isOpen;

            $scope.$on('SS_SIDENAV_FORCE_SELECTED_ITEM', function (event, args) {
                if ($scope.section && $scope.section.pages) {
                    for (var i = $scope.section.pages.length - 1; i >= 0; i--) {
                        var _e = $scope.section.pages[i];

                        if (args === _e.id) {
                            $scope.toggle($scope.section);
                            $state.go(_e.state);
                        }
                    };
                }
            });
        }
    ])

    .controller('menuLinkCtrl', [
        '$scope',
        '$state',
        '$mdSidenav',
        'ssSideNav',
        'ssSideNavSharedService',
        function(
            $scope,
            $state,
            $mdSidenav,
            ssSideNav,
            ssSideNavSharedService) {

            $scope.isSelected = function(page) {
                return ssSideNav.isPageSelected(page);
            };

            $scope.focusSection = function(item) {
                $mdSidenav('left').close();
                ssSideNavSharedService.broadcast('SS_SIDENAV_CLICK_ITEM', item);
            };

            $scope.$state = $state;
        }
    ])

    .directive('menuLink', [
        function() {
            return {
                scope: {
                    section: '='
                },
                templateUrl: 'views/ss/menu-link.tmpl.html',
                controller: 'menuLinkCtrl'
            };
        }
    ])

    .directive('menuToggle', [
        '$timeout',
        '$animateCss',
        '$mdSidenav',
        '$mdMedia',
        function(
            $timeout,
            $animateCss,
            $mdSidenav,
            $mdMedia) {

            var link = function($scope, $element, $attr, $ctrl) {
                var _el_ul = $element.find('ul');

                var getTargetHeight = function() {
                    var _targetHeight;

                    _el_ul.addClass('no-transition');
                    _el_ul.css('height', '');

                    _targetHeight = _el_ul.prop('clientHeight');

                    _el_ul.css('height', 0);
                    _el_ul.removeClass('no-transition');

                    return _targetHeight;
                };

                if (!_el_ul) {
                    return console.warn('ss-sidenav: `menuToggle` cannot find ul element');
                }

                $scope.$watch(function() {
                    return $ctrl.isOpen($scope.section);
                }, function(open) {
                    $timeout(function() {
                        if (!$mdMedia('gt-sm') && !$mdSidenav('left').isOpen() && open) {
                            return;
                        }

                        $animateCss(_el_ul, {
                            from: {
                                height: open ? 0 : (getTargetHeight() + 'px')
                            },
                            to: {
                                height: open ? (getTargetHeight() + 'px') : 0
                            },
                            duration: 0.3
                        }).start();
                    }, 0, false);
                });
            };

            return {
                scope: {
                    section: '='
                },
                templateUrl: 'views/ss/menu-toggle.tmpl.html',
                controller: 'menuToggleCtrl',
                link: link
            };
        }
    ])

    .directive('ssSidenav', [
        function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    menu: '='
                },
                templateUrl: 'views/ss/menu-sidenav.tmpl.html'
            };
        }
    ])

    .directive('ssStyleColor', [
        'ssSideNavSections',
        function (ssSideNavSections) {
            return {
                restrict: 'A',
                scope: {
                    ssStyleColor: '='
                },
                link: function ($scope, $el) {

                    var _apply_color = function () {
                        for (var p in $scope.ssStyleColor) {
                            if ($scope.ssStyleColor.hasOwnProperty(p)) {
                                var themeColors = ssSideNavSections.theme.colors,
                                    split = ($scope.ssStyleColor[p] || '').split('.'),
                                    hueR,
                                    colorR,
                                    colorA,
                                    hueA,
                                    colorValue;

                                if (split.length < 2) {
                                    split.unshift('primary');
                                }

                                hueR = split[1] || 'hue-1'; // 'hue-1'
                                colorR = split[0] || 'primary'; // 'warn'

                                // Absolute color: 'orange'
                                colorA = themeColors[colorR] ? themeColors[colorR].name : colorR;

                                // Absolute Hue: '500'
                                hueA = themeColors[colorR] ? (themeColors[colorR].hues[hueR] || hueR) : hueR;

                                colorValue = ssSideNavSections.palettes[colorA][hueA] ? ssSideNavSections.palettes[colorA][hueA].value : ssSideNavSections.palettes[colorA]['500'].value;

                                $el.css(p, 'rgb(' + colorValue.join(',') + ')');

                                // Add color to md-sidenav
                                if($el.parent().attr('md-component-id')) $el.parent().css(p, 'rgb(' + colorValue.join(',') + ')');
                            }
                        }
                    };

                    if (!ssSideNavSections.theme || !ssSideNavSections.palettes) {
                        return console.warn('ss-sidenav: you probably want to ssSideNavSectionsProvider.initWithTheme($mdThemingProvider)');
                    }

                    $scope.$watch('ssStyleColor', function (oldVal, newVal) {
                        if ((oldVal && newVal) && oldVal !== newVal) {
                            _apply_color();
                        }
                    });

                    _apply_color();
                }
            };
        }
    ])

    .run(['$templateCache', function($templateCache) {
        $templateCache.put('views/ss/menu-link.tmpl.html',
            '<md-button\n' +
            '   ss-style-color="{\'background-color\': (isSelected(section.state) || $state.includes(section.state)) ? \'primary.default\': \'primary.300\'}"' +
            '   class="md-raised md-primary"' +
            '   ui-sref="{{section.state}}"\n' +
            '   ng-click="focusSection(section)">\n' +
            '   <span ng-if="section.icon" class="{{section.icon}}">&nbsp;&nbsp;</span>{{section.name}}\n' +
            '   <span class="md-visually-hidden"\n' +
            '       ng-if="isSelected(section.state)">\n' +
            '       current page\n' +
            '   </span>\n' +
            '</md-button>\n'
        );

        $templateCache.put('views/ss/menu-toggle.tmpl.html',
            '<md-button class="md-raised md-primary md-button-toggle"\n' +
            '   ss-style-color="{\'background-color\': (isSelected(section.state) || $state.includes(section.state)) ? \'primary.default\': \'primary.300\'}"'+
            '   ng-click="toggle(section)"\n' +
            '   aria-controls="docs-menu-{{section.name}}"\n' +
            '   aria-expanded="{{isOpen(section)}}">\n' +
            '   <div flex layout="row">\n' +
            '       <span ng-if="section.icon" class="{{section.icon}}">&nbsp;&nbsp;</span>{{section.name}}\n' +
            '       <span flex></span>\n' +
            '       <span aria-hidden="true" class="md-toggle-icon"\n' +
            '           ng-class="{\'toggled\' : isOpen(section)}">\n' +
            '           <md-icon md-svg-src="md-toggle-arrow"></md-icon>\n' +
            '       </span>\n' +
            '   </div>\n' +
            '   <span class="md-visually-hidden">\n' +
            '       Toggle {{isOpen(section)? \'expanded\' : \'collapsed\'}}\n' +
            '   </span>\n' +
            '</md-button>\n' +
            '\n' +
            '<ul id="docs-menu-{{section.name}}" class="menu-toggle-list">\n' +
            '   <li ng-repeat="page in section.pages" ng-if="!page.hidden">\n' +
            '       <menu-link section="page"></menu-link>\n' +
            '   </li>\n' +
            '</ul>\n'
        );

        $templateCache.put('views/ss/menu-sidenav.tmpl.html',
            '<ul class="menu">' +
            '    <li ss-style-color="{\'border-bottom-color\': \'primary.600\'}" ng-repeat="section in menu.sections" ng-if="!section.hidden">' +
            '        <h2 ss-style-color="{\'color\': \'primary.A100\'}" class="menu-heading md-subhead" ng-if="section.type === \'heading\'">' +
            '            <span ng-if="section.icon" class="{{section.icon}}">&nbsp;&nbsp;</span>{{section.name}}\n' +
            '        </h2>' +
            '        <menu-link section="section" ng-if="section.type === \'link\'"></menu-link>' +
            '        <menu-toggle section="section" ng-if="section.type === \'toggle\'"></menu-toggle>' +
            '        <ul ng-if="section.children">' +
            '            <li ng-repeat="child in section.children" ng-if="!child.hidden">' +
            '                <menu-link section="child" ng-if="child.type === \'link\'"></menu-link>' +
            '                <menu-toggle section="child" ng-if="child.type === \'toggle\'"></menu-toggle>' +
            '            </li>' +
            '        </ul>' +
            '    </li>' +
            '</ul>'
        );
    }]);
})(window, window.angular);
/*!
 * Polyfill.js - v0.1.0
 *
 * Copyright (c) 2015 Philip Walton <http://philipwalton.com>
 * Released under the MIT license
 *
 * Date: 2015-06-21
 */
;(function(window, document, undefined){

'use strict';

var reNative = RegExp('^' +
  String({}.valueOf)
    .replace(/[.*+?\^${}()|\[\]\\]/g, '\\$&')
    .replace(/valueOf|for [^\]]+/g, '.+?') + '$'
)


/**
 * Trim any leading or trailing whitespace
 */
function trim(s) {
  return s.replace(/^\s+|\s+$/g,'')
}


/**
 * Detects the presence of an item in an array
 */
function inArray(target, items) {
  var item
    , i = 0
  if (!target || !items) return false
  while(item = items[i++]) {
    if (target === item) return true
  }
  return false
}


/**
 * Determine if a method is support natively by the browser
 */
function isNative(fn) {
  return reNative.test(fn)
}

/**
 * Determine if a URL is local to the document origin
 * Inspired form Respond.js
 * https://github.com/scottjehl/Respond/blob/master/respond.src.js#L90-L91
 */
var isLocalURL = (function() {
  var base = document.getElementsByTagName("base")[0]
    , reProtocol = /^([a-zA-Z:]*\/\/)/
  return function(url) {
    var isLocal = (!reProtocol.test(url) && !base)
      || url.replace(RegExp.$1, "").split("/")[0] === location.host
    return isLocal
  }
}())

var supports = {
  // true with either native support or a polyfil, we don't care which
  matchMedia: window.matchMedia && window.matchMedia( "only all" ).matches,
  // true only if the browser supports window.matchMeida natively
  nativeMatchMedia: isNative(window.matchMedia)
}

var DownloadManager = (function() {

  var cache = {}
    , queue = []
    , callbacks = []
    , requestCount = 0
    , xhr = (function() {
        var method
        try { method = new window.XMLHttpRequest() }
        catch (e) { method = new window.ActiveXObject( "Microsoft.XMLHTTP" ) }
        return method
      }())

  // return function(urls, callback) {

  function addURLsToQueue(urls) {
    var url
      , i = 0
    while (url = urls[i++]) {
      if (!cache[url] && !inArray(url, queue)) {
        queue.push(url)
      }
    }
  }

  function processQueue() {
    // don't process the next one if we're in the middle of a download
    if (!(xhr.readyState === 0 || xhr.readyState === 4)) return

    var url
    if (url = queue[0]) {
      downloadStylesheet(url)
    }
    if (!url) {
      invokeCallbacks()
    }
  }

  /**
   * Make the requests
   *
   * TODO: Get simultaneous downloads working, it can't be that hard
  */
  function downloadStylesheet(url) {
    requestCount++
    xhr.open("GET", url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        cache[url] = xhr.responseText
        queue.shift()
        processQueue()
      }
    }
    xhr.send(null)
  }

  /**
   * Check the cache to make sure all requests are complete
   */
  function downloadsFinished(urls) {
    var url
      , i = 0
      , len = 0
    while (url = urls[i++]) {
      if (cache[url]) len++
    }
    return (len === urls.length)
  }

  /**
   * Invoke each callback and remove it from the list
   */
  function invokeCallbacks() {
    var callback
    while (callback = callbacks.shift()) {
      invokeCallback(callback.urls, callback.fn)
    }
  }

  /**
   * Put the stylesheets in the proper order and invoke the callback
   */
  function invokeCallback(urls, callback) {
    var stylesheets = []
      , url
      , i = 0
    while (url = urls[i++]) {
      stylesheets.push(cache[url])
    }
    callback.call(null, stylesheets)
  }

  return {
    request: function(urls, callback) {
      // Add the callback to the list
      callbacks.push({urls: urls, fn: callback})

      if (downloadsFinished(urls)) {
        invokeCallbacks()
      } else {
        addURLsToQueue(urls)
        processQueue()
      }
    },
    clearCache: function() {
      cache = {}
    },
    _getRequestCount: function() {
      return requestCount
    }
  }

}())

var StyleManager = {

  _cache: {},

  clearCache: function() {
    StyleManager._cache = {}
  },

  /**
   * Parse a string of CSS
   * optionaly pass an identifier for caching
   *
   * Adopted from TJ Holowaychuk's
   * https://github.com/visionmedia/css-parse
   *
   * Minor changes include removing the "stylesheet" root and
   * using String.charAt(i) instead of String[i] for IE7 compatibility
   */
  parse: function(css, identifier) {

    /**
     * Opening brace.
     */
    function open() {
      return match(/^\{\s*/)
    }

    /**
     * Closing brace.
     */
    function close() {
      return match(/^\}\s*/)
    }

    /**
     * Parse ruleset.
     */
    function rules() {
      var node
      var rules = []
      whitespace()
      comments(rules)
      while (css.charAt(0) != '}' && (node = atrule() || rule())) {
        rules.push(node)
        comments(rules)
      }
      return rules
    }

    /**
     * Match `re` and return captures.
     */
    function match(re) {
      var m = re.exec(css)
      if (!m) return
      css = css.slice(m[0].length)
      return m
    }

    /**
     * Parse whitespace.
     */
    function whitespace() {
      match(/^\s*/)
    }

    /**
     * Parse comments
     */
    function comments(rules) {
      rules = rules || []
      var c
      while (c = comment()) rules.push(c)
      return rules
    }

    /**
     * Parse comment.
     */
    function comment() {
      if ('/' == css[0] && '*' == css[1]) {
        var i = 2
        while ('*' != css[i] || '/' != css[i + 1]) ++i
        i += 2
        var comment = css.slice(2, i - 2)
        css = css.slice(i)
        whitespace()
        return { comment: comment }
      }
    }

    /**
     * Parse selector.
     */
    function selector() {
      var m = match(/^([^{]+)/)
      if (!m) return
      return trim(m[0]).split(/\s*,\s*/)
    }

    /**
     * Parse declaration.
     */
    function declaration() {
      // prop
      var prop = match(/^(\*?[\-\w]+)\s*/)
      if (!prop) return
      prop = prop[0]

      // :
      if (!match(/^:\s*/)) return

      // val
      var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)\s*/)
      if (!val) return
      val = trim(val[0])

      //
      match(/^[;\s]*/)

      return { property: prop, value: val }
    }

    /**
     * Parse keyframe.
     */
    function keyframe() {
      var m
      var vals = []

      while (m = match(/^(from|to|\d+%|\.\d+%|\d+\.\d+%)\s*/)) {
        vals.push(m[1])
        match(/^,\s*/)
      }

      if (!vals.length) return

      return {
        values: vals,
        declarations: declarations()
      }
    }

    /**
     * Parse keyframes.
     */
    function keyframes() {
      var m = match(/^@([\-\w]+)?keyframes */)
      if (!m) return
      var vendor = m[1]

      // identifier
      var m = match(/^([\-\w]+)\s*/)
      if (!m) return
      var name = m[1]

      if (!open()) return
      comments()

      var frame
      var frames = []
      while (frame = keyframe()) {
        frames.push(frame)
        comments()
      }

      if (!close()) return

      var obj = {
        name: name,
        keyframes: frames
      }
      // don't include vendor unles there's a match
      if (vendor) obj.vendor = vendor

      return obj
    }

    /**
     * Parse supports.
     */
    function supports() {
      var m = match(/^@supports *([^{]+)/)
      if (!m) return
      var supports = trim(m[1])

      if (!open()) return
      comments()

      var style = rules()

      if (!close()) return

      return { supports: supports, rules: style }
    }

    /**
     * Parse media.
     */
    function media() {
      var m = match(/^@media *([^{]+)/)
      if (!m) return

      var media = trim(m[1])

      if (!open()) return
      comments()

      var style = rules()

      if (!close()) return

      return { media: media, rules: style }
    }


    /**
     * Parse paged media.
     */
    function atpage() {
      var m = match(/^@page */)
      if (!m) return

      var sel = selector() || []
      var decls = []

      if (!open()) return
      comments()

      // declarations
      var decl
      while (decl = declaration() || atmargin()) {
        decls.push(decl)
        comments()
      }

      if (!close()) return

      return {
        type: "page",
        selectors: sel,
        declarations: decls
      }
    }

    /**
     * Parse margin at-rules
     */
    function atmargin() {
      var m = match(/^@([a-z\-]+) */)
      if (!m) return
      var type = m[1]

      return {
        type: type,
        declarations: declarations()
      }
    }

    /**
     * Parse import
     */
    function atimport() {
      return _atrule('import')
    }

    /**
     * Parse charset
     */
    function atcharset() {
      return _atrule('charset')
    }

    /**
     * Parse namespace
     */
    function atnamespace() {
      return _atrule('namespace')
    }

    /**
     * Parse non-block at-rules
     */
    function _atrule(name) {
      var m = match(new RegExp('^@' + name + ' *([^;\\n]+);\\s*'))
      if (!m) return
      var ret = {}
      ret[name] = trim(m[1])
      return ret
    }

    /**
     * Parse declarations.
     */
    function declarations() {
      var decls = []

      if (!open()) return
      comments()

      // declarations
      var decl
      while (decl = declaration()) {
        decls.push(decl)
        comments()
      }

      if (!close()) return
      return decls
    }

    /**
     * Parse at rule.
     */
    function atrule() {
      return keyframes()
        || media()
        || supports()
        || atimport()
        || atcharset()
        || atnamespace()
        || atpage()
    }

    /**
     * Parse rule.
     */
    function rule() {
      var sel = selector()
      if (!sel) return
      comments()
      return { selectors: sel, declarations: declarations() }
    }

    /**
     * Check the cache first, otherwise parse the CSS
     */
    if (identifier && StyleManager._cache[identifier]) {
      return StyleManager._cache[identifier]
    } else {
      // strip comments before parsing
      css = css.replace(/\/\*[\s\S]*?\*\//g, "")
      return StyleManager._cache[identifier] = rules()
    }

  },

  /**
   * Filter a ruleset by the passed keywords
   * Keywords may be either selector or property/value patterns
   */
  filter: function(rules, keywords) {

    var filteredRules = []

    /**
     * Concat a2 onto a1 even if a1 is undefined
     */
    function safeConcat(a1, a2) {
      if (!a1 && !a2) return
      if (!a1) return [a2]
      return a1.concat(a2)
    }

    /**
     * Add a rule to the filtered ruleset,
     * but don't add empty media or supports values
     */
    function addRule(rule) {
      if (rule.media == null) delete rule.media
      if (rule.supports == null) delete rule.supports
      filteredRules.push(rule)
    }

    function containsKeyword(string, keywordList) {
      if (!keywordList) return
      var i = keywordList.length
      while (i--) {
        if (string.indexOf(keywordList[i]) >= 0) return true
      }
    }

    function matchesKeywordPattern(declaration, patternList) {
      var wildcard = /\*/
        , pattern
        , parts
        , reProp
        , reValue
        , i = 0
      while (pattern = patternList[i++]) {
        parts = pattern.split(":")
        reProp = new RegExp("^" + trim(parts[0]).replace(wildcard, ".*") + "$")
        reValue = new RegExp("^" + trim(parts[1]).replace(wildcard, ".*") + "$")
        if (reProp.test(declaration.property) && reValue.test(declaration.value)) {
          return true
        }
      }
    }

    function matchSelectors(rule, media, supports) {
      if (!keywords.selectors) return

      if (containsKeyword(rule.selectors.join(","), keywords.selectors)) {
        addRule({
          media: media,
          supports: supports,
          selectors: rule.selectors,
          declarations: rule.declarations
        })
        return true
      }
    }

    function matchesDeclaration(rule, media, supports) {
      if (!keywords.declarations) return
      var declaration
        , i = 0
      while (declaration = rule.declarations[i++]) {
        if (matchesKeywordPattern(declaration, keywords.declarations)) {
          addRule({
            media: media,
            supports: supports,
            selectors: rule.selectors,
            declarations: rule.declarations
          })
          return true
        }
      }
    }

    function filterRules(rules, media, supports) {
      var rule
        , i = 0
      while (rule = rules[i++]) {
        if (rule.declarations) {
          matchSelectors(rule, media, supports) || matchesDeclaration(rule, media, supports)
        }
        else if (rule.rules && rule.media) {
          filterRules(rule.rules, safeConcat(media, rule.media), supports)
        }
        else if (rule.rules && rule.supports) {
          filterRules(rule.rules, media, safeConcat(supports, rule.supports))
        }
      }

    }

    // start the filtering
    filterRules(rules)

    // return the results
    return filteredRules

  }
}
var MediaManager = (function() {

  var reMinWidth = /\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
    , reMaxWidth = /\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/

    // a cache of the active media query info
    , mediaQueryMap = {}

    // the value of an `em` as used in a media query,
    // not necessarily the base font-size
    , emValueInPixels
    , currentWidth

  /**
   * Get the pixel value of 1em for use in parsing media queries
   * ems in media queries are not affected by CSS, instead they
   * are the value of the browsers default font size, usually 16px
   */
  function getEmValueInPixels() {

    // cache this value because it probably won't change and
    // it's expensive to lookup
    if (emValueInPixels) return emValueInPixels

    var html = document.documentElement
      , body = document.body
      , originalHTMLFontSize = html.style.fontSize
      , originalBodyFontSize = body.style.fontSize
      , div = document.createElement("div")

    // 1em is the value of the default font size of the browser
    // reset html and body to ensure the correct value is returned
    html.style.fontSize = "1em"
    body.style.fontSize = "1em"

    // add a test element and measure it
    body.appendChild(div)
    div.style.width = "1em"
    div.style.position = "absolute"
    emValueInPixels = div.offsetWidth

    // remove the test element and restore the previous values
    body.removeChild(div)
    body.style.fontSize = originalBodyFontSize
    html.style.fontSize = originalHTMLFontSize

    return emValueInPixels
  }

  /**
   * Use the browsers matchMedia function or existing shim
   */
  function matchMediaNatively(query) {
    return window.matchMedia(query)
  }

  /**
   * Try to determine if a mediaQuery matches by
   * parsing the query and figuring it out manually
   * TODO: cache current width for repeated invocations
   */
  function matchMediaManually(query) {
    var minWidth
      , maxWidth
      , matches = false

    // recalculate the width if it's not set
    // if (!currentWidth) currentWidth = document.documentElement.clientWidth
    currentWidth = document.documentElement.clientWidth

    // parse min and max widths from query
    if (reMinWidth.test(query)) {
      minWidth = RegExp.$2 === "em"
        ? parseFloat(RegExp.$1) * getEmValueInPixels()
        : parseFloat(RegExp.$1)
    }
    if (reMaxWidth.test(query)) {
      maxWidth = RegExp.$2 === "em"
        ? parseFloat(RegExp.$1) * getEmValueInPixels()
        : parseFloat(RegExp.$1)
    }

    // if both minWith and maxWidth are set
    if (minWidth && maxWidth) {
      matches = (minWidth <= currentWidth && maxWidth >= currentWidth)
    } else {
      if (minWidth && minWidth <= currentWidth) matches = true
      if (maxWidth && maxWidth >= currentWidth) matches = true
    }

    // return fake MediaQueryList object
    return {
      matches: matches,
      media: query
    }
  }


  return {
    /**
     * Similar to the window.matchMedia method
     * results are cached to avoid expensive relookups
     * @returns MediaQueryList (or a faked one)
     */
    matchMedia: function(query) {
      return supports.matchMedia
          ? matchMediaNatively(query)
          : matchMediaManually(query)
      // return mediaQueryMap[query] || (
      //   mediaQueryMap[query] = supports.matchMedia
      //     ? matchMediaNatively(query)
      //     : matchMediaManually(query)
      // )
    },

    clearCache: function() {
      // we don't use cache when the browser supports matchMedia listeners
      if (!supports.nativeMatchMedia) {
        currentWidth = null
        mediaQueryMap = {}
      }
    }
  }

}())

var EventManager = (function() {

  var MediaListener = (function() {
    var listeners = []
    return {
      add: function(polyfill, mql, fn) {
        var listener
          , i = 0
        // if the listener is already in the array, return false
        while (listener = listeners[i++]) {
          if (
            listener.polyfill == polyfill
            && listener.mql === mql
            && listener.fn === fn
          ) {
            return false
          }
        }
        // otherwise add it
        mql.addListener(fn)
        listeners.push({
          polyfill: polyfill,
          mql: mql,
          fn: fn
        })
      },
      remove: function(polyfill) {
        var listener
          , i = 0
        while (listener = listeners[i++]) {
          if (listener.polyfill === polyfill) {
            listener.mql.removeListener(listener.fn)
            listeners.splice(--i, 1)
          }
        }
      }
    }
  }())

  var ResizeListener = (function(listeners) {
    function onresize() {
      var listener
        , i = 0
      while (listener = listeners[i++]) {
        listener.fn()
      }
    }
    return {
      add: function(polyfill, fn) {
        if (!listeners.length) {
          if (window.addEventListener) {
            window.addEventListener("resize", onresize, false)
          } else {
            window.attachEvent("onresize", onresize)
          }
        }
        listeners.push({
          polyfill: polyfill,
          fn: fn
        })

      },
      remove: function(polyfill) {
        var listener
          , i = 0
        while (listener = listeners[i++]) {
          if (listener.polyfill === polyfill) {
            listeners.splice(--i, 1)
          }
        }
        if (!listeners.length) {
          if (window.removeEventListener) {
            window.removeEventListener("resize", onresize, false)
          } else if (window.detachEvent) {
            window.detachEvent("onresize", onresize)
          }
        }
      }
    }
  }([]))


  /**
   * Simple debounce function
   */
  function debounce(fn, wait) {
    var timeout
    return function() {
      clearTimeout(timeout)
      timeout = setTimeout(fn, wait)
    }
  }

  return {

    removeListeners: function(polyfill) {
      supports.nativeMatchMedia
        ? MediaListener.remove(polyfill)
        : ResizeListener.remove(polyfill)
    },

    addListeners: function(polyfill, callback) {

      var queries = polyfill._mediaQueryMap
        , state = {}


      /**
       * Set up initial state
       */
      ;(function() {
        for (var query in queries) {
          if (!queries.hasOwnProperty(query)) continue
          state[query] = MediaManager.matchMedia(query).matches
        }
      }())

      /**
       * Register the listeners to detect media query changes
       * if the browser doesn't support this natively, use resize events instead
       */
      function addListeners() {

        if (supports.nativeMatchMedia) {
          for (var query in queries) {
            if (queries.hasOwnProperty(query)) {
              // a closure is needed here to keep the variable reference
              (function(mql, query) {
                MediaListener.add(polyfill, mql, function() {
                  callback.call(polyfill, query, mql.matches)
                })
              }(queries[query], query))
            }
          }
        } else {

          var fn = debounce((function(polyfill, queries) {
            return function() {
              updateMatchedMedia(polyfill, queries)
            }
          }(polyfill, queries)), polyfill._options.debounceTimeout || 100)

          ResizeListener.add(polyfill, fn)

        }
      }

      /**
       * Check each media query to see if it still matches
       * Note: this is only invoked when the browser doesn't
       * natively support window.matchMedia addListeners
       */
      function updateMatchedMedia(polyfill, queries) {
        var query
          , current = {}

        // clear the cache since a resize just happened
        MediaManager.clearCache()

        // look for media matches that have changed since the last inspection
        for (query in queries) {
          if (!queries.hasOwnProperty(query)) continue
          current[query] = MediaManager.matchMedia(query).matches
          if (current[query] != state[query]) {
            callback.call(polyfill, query, MediaManager.matchMedia(query).matches)
          }
        }
        state = current
      }

      addListeners()

    }

  }

}())

function Ruleset(rules) {
  var i = 0
    , rule
  this._rules = []
  while (rule = rules[i++]) {
    this._rules.push(new Rule(rule))
  }
}

Ruleset.prototype.each = function(iterator, context) {
  var rule
    , i = 0
  context || (context = this)
  while (rule = this._rules[i++]) {
    iterator.call(context, rule)
  }
}

Ruleset.prototype.size = function() {
  return this._rules.length
}

Ruleset.prototype.at = function(index) {
  return this._rules[index]
}

function Rule(rule) {
  this._rule = rule
}

Rule.prototype.getDeclaration = function() {
  var styles = {}
    , i = 0
    , declaration
    , declarations = this._rule.declarations
  while (declaration = declarations[i++]) {
    styles[declaration.property] = declaration.value
  }
  return styles
}

Rule.prototype.getSelectors = function() {
  return this._rule.selectors.join(", ")
}

Rule.prototype.getMedia = function() {
  return this._rule.media.join(" and ")
}

function Polyfill(options) {

  if (!(this instanceof Polyfill)) return new Polyfill(options)

  // set the options
  this._options = options

  // allow the keywords option to be the only object passed
  if (!options.keywords) this._options = { keywords: options }

  this._promise = []

  // then do the stuff
  this._getStylesheets()
  this._downloadStylesheets()
  this._parseStylesheets()
  this._filterCSSByKeywords()
  this._buildMediaQueryMap()
  this._reportInitialMatches()
  this._addMediaListeners()
}


/**
 * Fired when the media change and new rules match
 */
Polyfill.prototype.doMatched = function(fn) {
  this._doMatched = fn
  this._resolve()
  return this
}


/**
 * Fired when the media changes and previously matching rules no longer match
 */
Polyfill.prototype.undoUnmatched = function(fn) {
  this._undoUnmatched = fn
  this._resolve()
  return this
}


/**
 * Get all the rules the match the current media
 */
Polyfill.prototype.getCurrentMatches = function() {
  var i = 0
    , rule
    , media
    , matches = []
  while (rule = this._filteredRules[i++]) {
    // rules are considered matches if they they have
    // no media query or the media query curently matches
    media = rule.media && rule.media.join(" and ")
    if (!media || MediaManager.matchMedia(media).matches) {
      matches.push(rule)
    }
  }
  return new Ruleset(matches)
}


/**
 * Destroy the instance
 * Remove any bound events and send all current
 * matches to the callback as unmatches
 */
Polyfill.prototype.destroy = function() {
  if (this._undoUnmatched) {
    this._undoUnmatched(this.getCurrentMatches())
    EventManager.removeListeners(this)
  }
  return
}


/**
 * Defer a task until after a condition is met
 */
Polyfill.prototype._defer = function(condition, callback) {
  condition.call(this)
    ? callback.call(this)
    : this._promise.push({condition: condition, callback: callback})
}


/**
 * Invoke any functions that have been deferred
 */
Polyfill.prototype._resolve = function() {
  var promise
    , i = 0
  while (promise = this._promise[i]) {
    if (promise.condition.call(this)) {
      this._promise.splice(i, 1)
      promise.callback.call(this)
    } else {
      i++
    }
  }
}


/**
 * Get a list of <link> tags in the head
 * optionally filter by the include/exclude options
 */
Polyfill.prototype._getStylesheets = function() {
  var i = 0
    , id
    , ids
    , link
    , links
    , inline
    , inlines
    , stylesheet
    , stylesheets = []

  if (this._options.include) {
    // get only the included stylesheets link tags
    ids = this._options.include
    while (id = ids[i++]) {
      if (link = document.getElementById(id)) {
        // if this tag is an inline style
        if (link.nodeName === "STYLE") {
          stylesheet = { text: link.textContent }
          stylesheets.push(stylesheet)
          continue
        }
        // ignore print stylesheets
        if (link.media && link.media == "print") continue
        // ignore non-local stylesheets
        if (!isLocalURL(link.href)) continue
        stylesheet = { href: link.href }
        link.media && (stylesheet.media = link.media)
        stylesheets.push(stylesheet)
      }
    }
  }
  else {
    // otherwise get all the stylesheets stylesheets tags
    // except the explicitely exluded ones
    ids = this._options.exclude
    links = document.getElementsByTagName( "link" )
    while (link = links[i++]) {
      if (
        link.rel
        && (link.rel == "stylesheet")
        && (link.media != "print") // ignore print stylesheets
        && (isLocalURL(link.href)) // only request local stylesheets
        && (!inArray(link.id, ids))
      ) {
        stylesheet = { href: link.href }
        link.media && (stylesheet.media = link.media)
        stylesheets.push(stylesheet)
      }
    }
    inlines = document.getElementsByTagName('style');
    i = 0;
    while (inline = inlines[i++]){
      stylesheet = { text: inline.textContent }
      stylesheets.push(stylesheet);
    }
  }
  return this._stylesheets = stylesheets
}


/**
 * Download each stylesheet in the _stylesheetURLs array
 */
Polyfill.prototype._downloadStylesheets = function() {
  var self = this
    , stylesheet
    , urls = []
    , i = 0
  while (stylesheet = this._stylesheets[i++]) {
    urls.push(stylesheet.href)
  }
  DownloadManager.request(urls, function(stylesheets) {
    var stylesheet
      , i = 0
    while (stylesheet = stylesheets[i]) {
      self._stylesheets[i++].text = stylesheet
    }
    self._resolve()
  })
}

Polyfill.prototype._parseStylesheets = function() {
  this._defer(
    function() {
      return this._stylesheets
        && this._stylesheets.length
        && this._stylesheets[0].text },
    function() {
      var i = 0
        , stylesheet
      while (stylesheet = this._stylesheets[i++]) {
        stylesheet.rules = StyleManager.parse(stylesheet.text, stylesheet.url)
      }
    }
  )
}

Polyfill.prototype._filterCSSByKeywords = function() {
  this._defer(
    function() {
      return this._stylesheets
        && this._stylesheets.length
        && this._stylesheets[0].rules
    },
    function() {
      var stylesheet
        , media
        , rules = []
        , i = 0
      while (stylesheet = this._stylesheets[i++]) {
        media = stylesheet.media
        // Treat stylesheets with a media attribute as being contained inside
        // a single @media block, but ignore `all` and `screen` media values
        // since they're basically meaningless in this context
        if (media && media != "all" && media != "screen") {
          rules.push({rules: stylesheet.rules, media: stylesheet.media})
        } else {
          rules = rules.concat(stylesheet.rules)
        }
      }
      this._filteredRules = StyleManager.filter(rules, this._options.keywords)
    }
  )
}

Polyfill.prototype._buildMediaQueryMap = function() {
  this._defer(
    function() { return this._filteredRules },
    function() {
      var i = 0
        , media
        , rule
      this._mediaQueryMap = {}
      while (rule = this._filteredRules[i++]) {
        if (rule.media) {
          media = rule.media.join(" and ")
          this._mediaQueryMap[media] = MediaManager.matchMedia(media)
        }
      }
    }
  )
}

Polyfill.prototype._reportInitialMatches = function() {
  this._defer(
    function() {
      return this._filteredRules && this._doMatched
    },
    function() {
      this._doMatched(this.getCurrentMatches())
    }
  )
}

Polyfill.prototype._addMediaListeners = function() {
  this._defer(
    function() {
      return this._filteredRules
        && this._doMatched
        && this._undoUnmatched
    },
    function() {
      EventManager.addListeners(
        this,
        function(query, isMatch) {
          var i = 0
            , rule
            , matches = []
            , unmatches = []
          while (rule = this._filteredRules[i++]) {
            if (rule.media && rule.media.join(" and ") == query) {
              (isMatch ? matches : unmatches).push(rule)
            }
          }
          matches.length && this._doMatched(new Ruleset(matches))
          unmatches.length && this._undoUnmatched(new Ruleset(unmatches))
        }
      )
    }
  )
}

Polyfill.modules = {
  DownloadManager: DownloadManager,
  StyleManager: StyleManager,
  MediaManager: MediaManager,
  EventManager: EventManager
}
Polyfill.constructors = {
  Ruleset: Ruleset,
  Rule: Rule
}

window.Polyfill = Polyfill

}(window, document));

(function(w, doc, undefined) {
  // Enable strict mode
  'use strict';

  /*
   * alias
   * w: window global object
   * doc: document
   * undefined: undefined
   */

    /**
     * constraint to jumping to the next snap-point.
     * when scrolling further than SNAP_CONSTRAINT snap-points,
     * but the current distance is less than 1-0.18 (read: 18 percent),
     * the snap-will go back to the closer snap-point.
     */
  var CONSTRAINT = 1-0.18,
      /*
       * if scrolling for one snap-point only,
       * the scroll distance must be at least 5% of the scroll-width.
       */
      FIRST_CONSTRAINT = 1-0.05,

      /*
       * minimum scroll distance in pixel
       */
      MIN_PX_CONSTRAINT = 5,

      /**
       * when scrolling for more than SNAP_CONSTRAINT snap points,
       * a constraint is applied for scrolling to snap points in the distance.
       * @type {Number}
       */
      SNAP_CONSTRAINT = 2,

      /**
       * time in ms after which scrolling is considered finished.
       * the scroll timeouts are timed with this.
       * whenever a new scroll event is triggered, the previous timeout is deleted.
       * @type {Number}
       */
      SCROLL_TIMEOUT = 45,

      /**
       * time for the smooth scrolling
       * @type {Number}
       */
      SCROLL_TIME = 768;

  /**
   * Feature detect scroll-snap-type, if it exists then do nothing (return)
   */
  if ('scrollSnapType' in doc.documentElement.style ||
      'webkitScrollSnapType' in doc.documentElement.style ||
      'msScrollSnapType' in doc.documentElement.style) {
    // just return void to stop executing the polyfill.
    return;
  }

  /**
   * doMatched is a callback for Polyfill to fill in the desired behaviour.
   * @param  {array} rules rules found for the polyfill
   */
  function doMatched(rules) {
    // iterate over rules
    rules.each(function(rule) {

      var elements = doc.querySelectorAll(rule.getSelectors()),
          declaration = rule.getDeclaration();

      // iterate over elements
      [].forEach.call(elements, function(obj) {
        // set up the behaviour
        setUpElement(obj, declaration);
      });
    });
  }

  /**
   * unDomatched is a callback for polyfill to undo any polyfilled behaviour
   * @param  {Object} rules
   */
  function undoUnmatched(rules) {
    // iterate over rules
    rules.each(function(rule) {
      var elements = doc.querySelectorAll(rule.getSelectors());

      // iterate over elements
      [].forEach.call(elements, function(item) {
        // tear down the behaviour
        tearDownElement(item);
      });
    });
  }

  /**
   * set up an element for scroll-snap behaviour
   * @param {Object} obj         HTML element
   * @param {Object} declaration CSS declarations
   */
  function setUpElement(obj, declaration) {
    // if this is a scroll-snap element in a scroll snap container, attach to the container only.
    if (typeof declaration['scroll-snap-coordinate'] !== 'undefined') {
      // save declaration
      obj.snapLengthUnit = parseSnapCoordValue(declaration);

      return attachToScrollParent(obj);
    }

    // if the scroll snap attributes are applied on the body/html tag, use the doc for scroll events.
    var tag = obj.tagName;
    if (tag.toLowerCase() == "body" ||
        tag.toLowerCase() == "html") {
      obj = doc;
    }

    // add the event listener
    obj.addEventListener('scroll', handler, false);

    // save declaration
    if (typeof declaration['scroll-snap-destination'] !== 'undefined') {
      obj.snapLengthUnit = parseSnapCoordValue(declaration);
    } else {
      obj.snapLengthUnit = parseSnapPointValue(declaration);
    }

    // init possible elements
    obj.snapElements = [];
  }

  /**
   * tear down an element. remove all added behaviour.
   * @param  {Object} obj DomElement
   */
  function tearDownElement(obj) {
    // if the scroll snap attributes are applied on the body/html tag, use the doc for scroll events.
    var tag = obj.tagName;

    if (tag.toLowerCase() == "body" ||
        tag.toLowerCase() == "html") {
      obj = doc;
    }

    obj.removeEventListener('scroll', handler, false);

    obj.snapLengthUnit = null;
    obj.snapElements = [];
  }

  /**
   * attach a child-element onto a scroll-container
   * @param  {Object} obj
   */
  function attachToScrollParent(obj) {
    var attach = obj;
    // iterate over parent elements
    for ( ; obj && obj !== document; obj = obj.parentNode ) {
      if (typeof obj.snapElements !== 'undefined') {
        obj.snapElements.push(attach);
      }
    }
  }

  /**
   * the last created timeOutId for scroll event timeouts.
   * @type int
   */
  var timeOutId = null;

  /**
   * starting point for current scroll
   * @type length
   */
  var scrollStart = null;

  /**
   * the last object receiving a scroll event
   */
  var lastObj, lastScrollObj;

  /**
   * scroll handler
   * this is the callback for scroll events.
   */
  var handler = function(evt) {

    // use evt.target as target-element
    lastObj = evt.target;
    lastScrollObj = getScrollObj(lastObj);

    // if currently animating, stop it. this prevents flickering.
    if (animationFrame) {
      // cross browser
      if (!cancelAnimationFrame(animationFrame)) {
        clearTimeout(animationFrame);
      }
    }

    // if a previous timeout exists, clear it.
    if (timeOutId) {
      // we only want to call a timeout once after scrolling..
      clearTimeout(timeOutId);
    } else {
      // save new scroll start
      scrollStart = {y: lastScrollObj.scrollTop,
                     x: lastScrollObj.scrollLeft};
    }

    /* set a timeout for every scroll event.
     * if we have new scroll events in that time, the previous timeouts are cleared.
     * thus we can be sure that the timeout will be called 50ms after the last scroll event.
     * this means a huge improvement in speed, as we just assign a timeout in the scroll event, which will be called only once (after scrolling is finished)
     */
    timeOutId = setTimeout(handlerDelayed, SCROLL_TIMEOUT);
  };

  /**
   * a delayed handler for scrolling.
   * this will be called by setTimeout once, after scrolling is finished.
   */
  var handlerDelayed = function() {
    // if we don't move a thing, we can ignore the timeout: if we did, there'd be another timeout added for scrollStart+1.
    if(scrollStart.y == lastScrollObj.scrollTop && scrollStart.x == lastScrollObj.scrollLeft) {
      // ignore timeout
      return;
    }

    // detect direction of scroll. negative is up, positive is down.
    var direction = {y: (scrollStart.y - lastScrollObj.scrollTop > 0) ? -1 : 1,
                     x: (scrollStart.x - lastScrollObj.scrollLeft > 0) ? -1 : 1},
        snapPoint;

    if (typeof lastScrollObj.snapElements !== 'undefined' && lastScrollObj.snapElements.length > 0) {
      snapPoint = getNextElementSnapPoint(lastScrollObj, lastObj, direction);
    } else {
      // get the next snap-point to snap-to
      snapPoint = getNextSnapPoint(lastScrollObj, lastObj, direction);
    }

    // before doing the move, unbind the event handler (otherwise it calls itself kinda)
    lastObj.removeEventListener('scroll', handler, false);

    // smoothly move to the snap point
    smoothScroll(lastScrollObj, snapPoint, function() {
      // after moving to the snap point, rebind the scroll event handler
      lastObj.addEventListener('scroll', handler, false);
    });

    // we just jumped to the snapPoint, so this will be our next scrollStart
    if (!isNaN(snapPoint.x || !isNaN(snapPoint.y))) {
      scrollStart = snapPoint;
    }
  };

  /**
   * calculator for next snap-point
   * @param  {Object} obj       HTML element
   * @param  {integer} direction signed integer indicating the scroll direction
   * @return {Object}
   */
  function getNextSnapPoint(scrollObj, obj, direction) {
    // get snap length
    var snapLength = {y: getYSnapLength(obj, obj.snapLengthUnit.y),
                      x: getXSnapLength(obj, obj.snapLengthUnit.x)},
        top = scrollObj.scrollTop,
        left = scrollObj.scrollLeft;

    // calc current and initial snappoint
    var currentPoint = {y: top / snapLength.y,
                        x: left / snapLength.x},
        initialPoint = {y: scrollStart.y / snapLength.y,
                        x: scrollStart.x / snapLength.x},
        nextPoint = {y: 0, x: 0};

    // set target and bounds by direction
    nextPoint.y = roundByDirection(direction.y, currentPoint.y);
    nextPoint.x = roundByDirection(direction.x, currentPoint.x);

    // constrain by distance
    nextPoint.y = constrainByDistance(initialPoint.y, currentPoint.y, nextPoint.y, scrollStart.y, top);
    nextPoint.x = constrainByDistance(initialPoint.x, currentPoint.x, nextPoint.x, scrollStart.x, left);

    // calculate where to scroll
    var scrollTo = {y: nextPoint.y * snapLength.y,
                    x: nextPoint.x * snapLength.x};

    // stay in bounds (minimum: 0, maxmimum: absolute height)
    scrollTo.y = stayInBounds(0, getScrollHeight(scrollObj), scrollTo.y);
    scrollTo.x = stayInBounds(0, getScrollWidth(scrollObj), scrollTo.x);

    return scrollTo;
  }


  var currentIteratedObj = null,
      currentIteration = 0;

  function getNextElementSnapPoint(scrollObj, obj, direction) {
    var l = obj.snapElements.length,
        top = scrollObj.scrollTop,
        left = scrollObj.scrollLeft,
        // decide upon an iteration direction (favor -1, as 1 is default and will be applied when there is no direction on an axis)
        primaryDirection = Math.min(direction.y, direction.x),
        // get scrollable snap destination as offset
        snapDest = {y: getYSnapLength(obj, obj.snapLengthUnit.y),
                    x: getXSnapLength(obj, obj.snapLengthUnit.x)},
        snapCoords = {y: 0, x: 0};


    for(var i = currentIteration + primaryDirection; i<l && i >= 0; i = i+primaryDirection) {
      currentIteratedObj = obj.snapElements[i];

      // get objects snap coords by adding obj.top + obj.snaplength.y
      snapCoords = {y: (currentIteratedObj.offsetTop - scrollObj.offsetTop) + getYSnapLength(currentIteratedObj, currentIteratedObj.snapLengthUnit.y),
                    // & obj.left + obj.snaplength.x
                    x: (currentIteratedObj.offsetLeft - scrollObj.offsetLeft) + getXSnapLength(currentIteratedObj, currentIteratedObj.snapLengthUnit.x)};

      currentIteratedObj.snapCoords = snapCoords;
      // check if object snappoint is "close" enough to scrollable snappoint

      // not scrolled past element snap coords
      if ((left <= snapCoords.x && left + getWidth(scrollObj) >= snapCoords.x &&
           top <= snapCoords.y && top + getHeight(scrollObj) >= snapCoords.y)) {
        // ok, we found a snap point.
        currentIteration = i;
        // stay in bounds (minimum: 0, maxmimum: absolute height)
        return {y: stayInBounds(0, getScrollHeight(scrollObj), snapCoords.y - snapDest.y),
                x: stayInBounds(0, getScrollWidth(scrollObj), snapCoords.x - snapDest.x)};
      }
    }
    // no snap found, use first or last?
    if (primaryDirection == 1 && i === l-1) {
      currentIteration = l-1;
      // the for loop stopped at the last element
      return {y: stayInBounds(0, getScrollHeight(scrollObj), snapCoords.y - snapDest.y),
              x: stayInBounds(0, getScrollWidth(scrollObj), snapCoords.x - snapDest.x)};
    } else if (primaryDirection == -1 && i === 0) {
      currentIteration = 0;
      // the for loop stopped at the first element
      return {y: stayInBounds(0, getScrollHeight(scrollObj), snapCoords.y - snapDest.y),
              x: stayInBounds(0, getScrollWidth(scrollObj), snapCoords.x - snapDest.x)};
    }
    // stay in the same place
    return {y: stayInBounds(0, getScrollHeight(scrollObj), obj.snapElements[currentIteration].snapCoords.y - snapDest.y),
            x: stayInBounds(0, getScrollWidth(scrollObj), obj.snapElements[currentIteration].snapCoords.x - snapDest.x)};
  }

  /**
   * ceil or floor a number based on direction
   * @param  {Number} direction
   * @param  {Number} currentPoint
   * @return {Number}
   */
  function roundByDirection(direction, currentPoint) {
    if (direction === -1) {
      // when we go up, we floor the number to jump to the next snap-point in scroll direction
      return Math.floor(currentPoint);
    }
    // go down, we ceil the number to jump to the next in view.
    return Math.ceil(currentPoint);
  }

  /**
   * constrain jumping
   * @param  {Number} initialPoint
   * @param  {Number} currentPoint
   * @param  {Number} nextPoint
   * @return {Number}
   */
  function constrainByDistance(initialPoint, currentPoint, nextPoint, scrollStart, currentScrollValue) {
    if ((Math.abs(initialPoint - currentPoint) >= SNAP_CONSTRAINT) &&
         Math.abs(nextPoint - currentPoint) > CONSTRAINT) {

      // constrain jumping to a point too high/low when scrolling for more than SNAP_CONSTRAINT points.
      // (if the point is 85% further than we are, don't jump..)
      return Math.round(currentPoint);

    }
    if ((Math.abs(scrollStart-currentScrollValue) < MIN_PX_CONSTRAINT) &&
        (Math.abs(initialPoint - currentPoint) < SNAP_CONSTRAINT) &&
        (Math.abs(nextPoint - currentPoint) > FIRST_CONSTRAINT)) {
      // constrain jumping to a point too high/low when scrolling just for a few pixels (less than 10 pixels) and (5% of scrollable length)
      return Math.round(currentPoint);
    }
    return nextPoint;
  }

  /**
   * keep scrolling in bounds
   * @param  {Number} min
   * @param  {Number} max
   * @param  {Number} destined
   * @return {Number}
   */
  function stayInBounds(min, max, destined) {
    return Math.max(Math.min(destined, max), min);
  }

  /**
   * parse snap point value from declaration.
   * this uses regexp..
   * @param  {Object} declaration
   * @return {Object} returns an Object with the value and unit of the snap-point-y declaration
   */
  function parseSnapPointValue(declaration) {
    // regex to parse lengths
    var regex = /repeat\((\d+)(px|vh|vw|%)\)/g,
        // defaults
        parsed = {y: {value: 0, unit: 'px'},
                  x: {value: 0, unit: 'px'}},
        result;

    // parse y value and unit
    if (declaration['scroll-snap-points-y'] !== 'undefined') {
      result = regex.exec(declaration['scroll-snap-points-y']);
      // if regexp fails, value is null
      if (result !== null) {
        parsed.y = {value: result[1], unit: result[2]};
      }
    }

    // parse x value and unit
    if (declaration['scroll-snap-points-x'] !== 'undefined') {
      result = regex.exec(declaration['scroll-snap-points-x']);
      // if regexp fails, value is null
      if (result !== null) {
        parsed.x = {value: result[1], unit: result[2]};
      }
    }
    return parsed;
  }

  /**
   * parse snap destination/coordinate values.
   * @param  {Object} declaration
   * @return {Object}
   */
  function parseSnapCoordValue(declaration) {
    // regex to parse lengths
    var regex = /(\d+)(px|%) (\d+)(px|%)/g,
        // defaults
        parsed = {y: {value: 0, unit: 'px'},
                  x: {value: 0, unit: 'px'}},
        parsable,
        result;

    if(typeof declaration['scroll-snap-coordinate'] !== 'undefined') {
      parsable = 'scroll-snap-coordinate';
    } else if (typeof declaration['scroll-snap-destination'] !== 'undefined') {
      parsable = 'scroll-snap-destination';
    }

    // parse value and unit
    if (parsable !== null) {
      result = regex.exec(declaration[parsable]);
      // if regexp fails, value is null
      if (result !== null) {
        parsed.y = {value: result[1], unit: result[2]};
        parsed.x = {value: result[3], unit: result[4]};
      }
    }
    return parsed;
  }

  /**
   * calc length of one snap on y-axis
   * @param  {Object} declaration the parsed declaration
   * @return {Number}
   */
  function getYSnapLength(obj, declaration) {
    if (declaration.unit == 'vh') {
      // when using vh, one snap is the length of vh / 100 * value
      return Math.max(doc.documentElement.clientHeight, w.innerHeight || 1) / 100 * declaration.value;
    } else if (declaration.unit == '%') {
      // when using %, one snap is the length of element height / 100 * value
      return getHeight(obj) / 100 * declaration.value;
    } else {
      // when using px, one snap is the length of element height / value
      return getHeight(obj) / declaration.value;
    }

    return 0;
  }

  /**
   * calc length of one snap on x-axis
   * @param  {Object} declaration the parsed declaration
   * @return {Number}
   */
  function getXSnapLength(obj, declaration) {
    if (declaration.unit == 'vw') {
      // when using vw, one snap is the length of vw / 100 * value
      return Math.max(doc.documentElement.clientWidth, w.innerWidth || 1) / 100 * declaration.value;
    } else if (declaration.unit == '%') {
      // when using %, one snap is the length of element width / 100 * value
      return getWidth(obj) / 100 * declaration.value;
    } else {
      // when using px, one snap is the length of element width / value
      return getWidth(obj) / declaration.value;
    }

    return 0;
  }

  /**
   * get an elements scrollable height
   * @param  {Object} obj
   * @return {Number}
   */
  function getScrollHeight(obj) {
    return obj.scrollHeight;
  }

  /**
   * get an elements scrollable width
   * @param  {Object} obj
   * @return {Number}
   */
  function getScrollWidth(obj) {
    return obj.scrollWidth;
  }

  /**
   * get an elements height
   * @param  {Object} obj
   * @return {Number}
   */
  function getHeight(obj) {
    return obj.offsetHeight;
  }

  /**
   * get an elements width
   * @param  {Object} obj
   * @return {Number}
   */
  function getWidth(obj) {
    return obj.offsetWidth;
  }

  /**
   * return the element scrolling values are applied to.
   * when receiving window.onscroll events, the actual scrolling is on the body.
   * @param  {Object} obj
   * @return {Object}
   */
  function getScrollObj(obj) {
    // if the scroll container is body, the scrolling is invoked on window/doc.
    if (obj == doc || obj == w) {
      // firefox scrolls on doc.documentElement
      if (doc.documentElement.scrollTop > 0 || doc.documentElement.scrollLeft > 0) {
        return doc.documentElement;
      }
      // chrome scrolls on body
      return doc.querySelector('body');
    }

    return obj;
  }

  /**
   * calc the duration of the animation proportional to the distance travelled
   * @param  {Number} start
   * @param  {Number} end
   * @return {Number}       scroll time in ms
   */
  function getDuration(start, end) {
    var distance = Math.abs(start - end),
        procDist = 100 / Math.max(doc.documentElement.clientHeight, w.innerHeight || 1) * distance,
        duration = 100 / SCROLL_TIME * procDist;

    if (isNaN(duration)) {
      return 0;
    }

    return Math.max(SCROLL_TIME / 1.5, Math.min(duration, SCROLL_TIME));
  }

  /**
   * ease in out function thanks to:
   * http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
   * @param  {Number} t timing
   * @return {Number}   easing factor
   */
  var easeInCubic = function(t) {
    return t*t*t;
  };


  /**
   * calculate the scroll position we should be in
   * @param  {Number} start    the start point of the scroll
   * @param  {Number} end      the end point of the scroll
   * @param  {Number} elapsed  the time elapsed from the beginning of the scroll
   * @param  {Number} duration the total duration of the scroll (default 500ms)
   * @return {Number}          the next position
   */
  var position = function(start, end, elapsed, duration) {
      if (elapsed > duration) {
        return end;
      }
      return start + (end - start) * easeInCubic(elapsed / duration);
  };

  // a current animation frame
  var animationFrame = null;

  /**
   * smoothScroll function by Alice Lietieur.
   * @see https://github.com/alicelieutier/smoothScroll
   * we use requestAnimationFrame to be called by the browser before every repaint
   * @param  {Object}   obj      the scroll context
   * @param  {Number}  end      where to scroll to
   * @param  {Number}   duration scroll duration
   * @param  {Function} callback called when the scrolling is finished
   */
  var smoothScroll = function(obj, end, callback) {
    var start = {y: obj.scrollTop, x: obj.scrollLeft},

        clock = Date.now(),

        // get animation frame or a fallback
        requestAnimationFrame = w.requestAnimationFrame ||
                                w.mozRequestAnimationFrame ||
                                w.webkitRequestAnimationFrame ||
                                function(fn){w.setTimeout(fn, 15);},
        duration = Math.max(getDuration(start.y, end.y), getDuration(start.x, end.x));

      // setup the stepping function
      var step = function() {

        // calculate timings
        var elapsed = Date.now() - clock;

        // change position on y-axis if result is a number.
        if (!isNaN(end.y)) {
          obj.scrollTop = position(start.y, end.y, elapsed, duration);
        }

        // change position on x-axis if result is a number.
        if (!isNaN(end.x)) {
          obj.scrollLeft = position(start.x, end.x, elapsed, duration);
        }

        // check if we are over due
        if (elapsed > duration) {
          // is there a callback?
          if (typeof callback === 'function') {
            // stop execution and run the callback
            return callback(end);
          }

          // stop execution
          return;
        }

        // use a new animation frame
        animationFrame = requestAnimationFrame(step);
      };

      // start the first step
      step();
  };

  /**
   * Polyfill object
   * @type Polyfill
   * @see https://github.com/philipwalton/polyfill
   */
  var pf = new Polyfill({
    declarations:["scroll-snap-type:*", "scroll-snap-point-y:*", "scroll-snap-coordinate:*", "scroll-snap-destination:*"]
  })
  .doMatched(doMatched)
  .undoUnmatched(undoUnmatched);

}(window, document));
/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
	// dummy
};

Base.extend = function(_instance, _static) { // subclass
	
	"use strict";
	
	var extend = Base.prototype.extend;
	
	// build the prototype
	Base._prototyping = true;
	var proto = new this();
	extend.call(proto, _instance);
  proto.base = function() {
    // call this method from any other method to invoke that method's ancestor
  };
	delete Base._prototyping;
	
	// create the wrapper for the constructor function
	//var constructor = proto.constructor.valueOf(); //-dean
	var constructor = proto.constructor;
	var klass = proto.constructor = function() {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) { // instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] !== null) { // casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};
	
	// build the class interface
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function(type) {
		//return (type == "object") ? klass : constructor; //-dean
		return (type == "object") ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);

				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	}
};

// initialise
Base = Base.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "function") {
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},
	
	toString: function() {
		return String(this.valueOf());
	}
});
/*jshint smarttabs:true */

var FlipClock;
	
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	"use strict";
	
	/**
	 * FlipFlock Helper
	 *
	 * @param  object  A jQuery object or CSS select
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock = function(obj, digit, options) {
		return new FlipClock.Factory(obj, digit, options);
	};

	/**
	 * The global FlipClock.Lang object
	 */

	FlipClock.Lang = {};
	
	/**
	 * The Base FlipClock class is used to extend all other FlipFlock
	 * classes. It handles the callbacks and the basic setters/getters
	 *	
	 * @param 	object  An object of the default properties
	 * @param 	object  An object of properties to override the default	
	 */

	FlipClock.Base = Base.extend({
		
		/**
		 * Build Date
		 */
		 
		buildDate: '2013-11-07',
		
		/**
		 * Version
		 */
		 
		version: '0.3.1',
		
		/**
		 * Sets the default options
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */
		 
		constructor: function(_default, options) {
			if(typeof _default !== "object") {
				_default = {};
			}
			if(typeof options !== "object") {
				options = {};
			}
			this.setOptions($.extend(true, {}, _default, options));
		},
		
		/**
		 * Delegates the callback to the defined method
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */
		 
		callback: function(method) {
		 	if(typeof method === "function") {
				var args = [];
								
				for(var x = 1; x <= arguments.length; x++) {
					if(arguments[x]) {
						args.push(arguments[x]);
					}
				}
				
				method.apply(this, args);
			}
		},
		 
		/**
		 * Log a string into the console if it exists
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */		
		 
		log: function(str) {
			if(window.console && console.log) {
				console.log(str);
			}
		},
		 
		/**
		 * Get an single option value. Returns false if option does not exist
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */		
		 
		getOption: function(index) {
			if(this[index]) {
				return this[index];
			}
			return false;
		},
		
		/**
		 * Get all options
		 *
		 * @return	bool
		 */		
		 
		getOptions: function() {
			return this;
		},
		
		/**
		 * Set a single option value
		 *
		 * @param 	string 	The name of the option
		 * @param 	mixed 	The value of the option
		 */		
		 
		setOption: function(index, value) {
			this[index] = value;
		},
		
		/**
		 * Set a multiple options by passing a JSON object
		 *
		 * @param 	object 	The object with the options
		 * @param 	mixed 	The value of the option
		 */		
		
		setOptions: function(options) {
			for(var key in options) {
	  			if(typeof options[key] !== "undefined") {
		  			this.setOption(key, options[key]);
		  		}
		  	}
		}
		
	});
	
	/**
	 * The FlipClock Factory class is used to build the clock and manage
	 * all the public methods.
	 *
	 * @param 	object  A jQuery object or CSS selector used to fetch
	 				    the wrapping DOM nodes
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.Factory = FlipClock.Base.extend({
		
		/**
		 * Auto start the clock on page load (True|False)
		 */	
		 
		autoStart: true,
		
		/**
		 * The callback methods
		 */		
		 
		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			divider: 'flip-clock-divider',
			dot: 'flip-clock-dot',
			label: 'flip-clock-label',
			flip: 'flip',
			play: 'play',
			wrapper: 'flip-clock-wrapper'
		},
		
		/**
		 * The name of the clock face class in use
		 */	
		 
		clockFace: 'HourlyCounter',
		 
		/**
		 * The name of the default clock face class to use if the defined
		 * clockFace variable is not a valid FlipClock.Face object
		 */	
		 
		defaultClockFace: 'HourlyCounter',
		 
		/**
		 * The default language
		 */	
		 
		defaultLanguage: 'english',
		 
		/**
		 * The language being used to display labels (string)
		 */	
		 
		language: 'english',
		 
		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,
		 
		/**
		 * The FlipClock.Face object
		 */	
		 
		face: true,
		 
		/**
		 * Is the clock running? (True|False)
		 */		
		 
		running: false,
		
		/**
		 * The FlipClock.Time object
		 */		
		 
		time: false,
		
		/**
		 * The FlipClock.Timer object
		 */		
		 
		timer: false,
		
		/**
		 * An array of FlipClock.List objects
		 */		
		 
		lists: [],
		
		/**
		 * The wrapping jQuery object
		 */		
		 
		$wrapper: false,
		
		/**
		 * Constructor
		 *
		 * @param   object  The wrapping jQuery object
		 * @param	object  Number of seconds used to start the clock
		 * @param	object 	An object override options
		 */
		 
		constructor: function(obj, digit, options) {
			
			this.lists 	  = [];
			this.running  = false;
			this.base(options);		
			this.$wrapper = $(obj).addClass(this.classes.wrapper);
			this.time     = new FlipClock.Time(this, digit ? Math.round(digit) : 0);
			this.timer    = new FlipClock.Timer(this, options);

			this.lang     = this.loadLanguage(this.language);
			this.face     = this.loadClockFace(this.clockFace, options);

			if(this.autoStart) {
				this.start();
			}
		},
		
		/**
		 * Load the FlipClock.Face object
		 *
		 * @param	object  The name of the FlickClock.Face class
		 * @param	object 	An object override options
		 */
		 
		loadClockFace: function(name, options) {	
			var face, suffix = 'Face';
			
			name = name.ucfirst()+suffix;
			
			if(FlipClock[name]) {
				face = new FlipClock[name](this, options);
			}
			else {
				face = new FlipClock[this.defaultClockFace+suffix](this, options);
			}
			
			face.build();
				
			return face;
		},
			
		
		/**
		 * Load the FlipClock.Lang object
		 *
		 * @param	object  The name of the language to load
		 */
		 
		loadLanguage: function(name) {	
			var lang;
			
			if(FlipClock.Lang[name.ucfirst()]) {
				lang = FlipClock.Lang[name.ucfirst()];
			}
			else if(FlipClock.Lang[name]) {
				lang = FlipClock.Lang[name];
			}
			else {
				lang = FlipClock.Lang[this.defaultLanguage];
			}
			
			return lang;
		},
					
		/**
		 * Localize strings into various languages
		 *
		 * @param	string  The index of the localized string
		 * @param	object  Optionally pass a lang object
		 */

		localize: function(index, obj) {
			var lang = this.lang;

			if(!index) {
				return null;
			}

			var lindex = index.toLowerCase();

			if(typeof obj == "object") {
				lang = obj;
			}

			if(lang && lang[lindex]) {
				return lang[lindex];
			}

			return index;
		},
		 

		/**
		 * Starts the clock
		 */
		 
		start: function(callback) {
			var t = this;

			if(!t.running && (!t.countdown || t.countdown && t.time.time > 0)) {
				t.face.start(t.time);
				t.timer.start(function() {
					t.flip();
					
					if(typeof callback === "function") {
						callback();
					}	
				});
			}
			else {
				t.log('Trying to start timer when countdown already at 0');
			}
		},
		
		/**
		 * Stops the clock
		 */
		 
		stop: function(callback) {
			this.face.stop();
			this.timer.stop(callback);
			
			for(var x in this.lists) {
				this.lists[x].stop();
			}	
		},
		
		/**
		 * Reset the clock
		 */
		 
		reset: function(callback) {
			this.timer.reset(callback);
			this.face.reset();
		},
		
		/**
		 * Sets the clock time
		 */
		 
		setTime: function(time) {
			this.time.time = time;
			this.face.setTime(time);		
		},
		
		/**
		 * Get the clock time
		 *
		 * @return  object  Returns a FlipClock.Time object
		 */
		 
		getTime: function(time) {
			return this.time;		
		},
		
		/**
		 * Changes the increment of time to up or down (add/sub)
		 */
		 
		setCountdown: function(value) {
			var running = this.running;
			
			this.countdown = value ? true : false;
				
			if(running) {
				this.stop();
				this.start();
			}
		},
		
		/**
		 * Flip the digits on the clock
		 *
		 * @param  array  An array of digits	 
		 */
		flip: function() {
			this.face.flip();
		}
		
	});
	
	/**
	 * The FlipClock Face class is the base class in which to extend
	 * all other FlockClock.Face classes.
	 *
	 * @param 	object  The parent FlipClock.Factory object
	 * @param 	object  An object of properties to override the default	
	 */
	 
	FlipClock.Face = FlipClock.Base.extend({
		
		/**
		 * An array of jQuery objects used for the dividers (the colons)
		 */
		 
		dividers: [],

		/**
		 * An array of FlipClock.List objects
		 */		
		 
		factory: false,
		
		/**
		 * An array of FlipClock.List objects
		 */		
		 
		lists: [],
			
		/**
		 * Constructor
		 *
		 * @param 	object  The parent FlipClock.Factory object
		 * @param 	object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(options);
			this.factory  = factory;
			this.dividers = [];
		},
		
		/**
		 * Build the clock face
		 */
		 
		build: function() {},
		
		/**
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param	mixed 	The divider label text
		 * @param	mixed	Set true to exclude the dots in the divider. 
		 *					If not set, is false.
		 */
		 
		createDivider: function(label, css, excludeDots) {
		
			if(typeof css == "boolean" || !css) {
				excludeDots = css;
				css = label;
			}

			var dots = [
				'<span class="'+this.factory.classes.dot+' top"></span>',
				'<span class="'+this.factory.classes.dot+' bottom"></span>'
			].join('');

			if(excludeDots) {
				dots = '';	
			}

			label = this.factory.localize(label);

			var html = [
				'<span class="'+this.factory.classes.divider+' '+(css ? css : '').toLowerCase()+'">',
					'<span class="'+this.factory.classes.label+'">'+(label ? label : '')+'</span>',
					dots,
				'</span>'
			];	
			
			return $(html.join(''));
		},
		
		/**
		 * Creates a FlipClock.List object and appends it to the DOM
		 *
		 * @param	mixed 	The digit to select in the list
		 * @param	object  An object to override the default properties
		 */
		 
		createList: function(digit, options) {
			if(typeof digit === "object") {
				options = digit;
				digit = 0;
			}
			
			var obj = new FlipClock.List(this.factory, digit, options);

			//this.factory.$wrapper.append(obj.$obj);	
			
			return obj;
		},
		
		/**
		 * Triggers when the clock is reset
		 */
		 
		reset: function() {},
		
		/**
		 * Sets the clock time
		 */
		 
		setTime: function(time) {
			this.flip(time);		
		},
		
		/**
		 * Sets the clock time
		 */
		 
		addDigit: function(digit) {
			var obj = this.createList(digit, {
				classes: {
					active: this.factory.classes.active,
					before: this.factory.classes.before,
					flip: this.factory.classes.flip
				}
			});
			
			obj.$obj.insertBefore(this.factory.lists[0].$obj);
							
			this.factory.lists.unshift(obj);
		},
		
		/**
		 * Triggers when the clock is started
		 */
		 
		start: function() {},
		
		/**
		 * Triggers when the time on the clock stops
		 */
		 
		stop: function() {},
			
		/**
		 * Triggers when the numbers on the clock flip
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			var t = this;
			
			if(!doNotAddPlayClass) {
				if(!t.factory.countdown) {
					t.factory.time.time++;
				}
				else {
					if(t.factory.time.time <= 0) {
						t.factory.stop();
					}
					
					t.factory.time.time--;	
				}
			}
			
			var offset = t.factory.lists.length - time.length;
			
			if(offset < 0) {
				offset = 0;
			}			
			
			var totalNew = 0;
			var reFlip = false;

			$.each(time, function(i, digit) {
				i += offset;
				
				var list = t.factory.lists[i];
					
				if(list) {
					var currentDigit = list.digit;
			
					list.select(digit);
					
					if(digit != currentDigit && !doNotAddPlayClass) {
						list.play();	
					}
				}	
				else {
					t.addDigit(digit);
					reFlip = true;
				}
			});

			for(var x = 0; x < time.length; x++) {
				if(x >= offset && t.factory.lists[x].digit != time[x]) {
					t.factory.lists[x].select(time[x]);
				}
			}
		}
					
	});
		
	/**
	 * The FlipClock List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific digit.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
		
		/**
		 * The digit (0-9)
		 */		
		 
		digit: 0,
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			flip: 'flip'	
		},
				
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * The wrapping jQuery object
		 */		
		 
		$obj: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
				 
		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(factory, digit, options) {
			this.factory = factory;
			this.digit   = digit;
			this.$obj    = this.createList();
			
			if(digit > 0) {
				this.select(digit);
			}
			
			this.factory.$wrapper.append(this.$obj);
		},
		
		/**
		 * Select the digit in the list
		 *
		 * @param  int  A digit 0-9	 
		 */
		 
		select: function(digit) {
			if(typeof digit === "undefined") {
				digit = this.digit;
			}
			else {
				this.digit = digit;
			}

			var target = this.$obj.find('[data-digit="'+digit+'"]');
			var active = this.$obj.find('.'+this.classes.active).removeClass(this.classes.active);
			var before = this.$obj.find('.'+this.classes.before).removeClass(this.classes.before);
			
			if(!this.factory.countdown) {
				if(target.is(':first-child')) {
					this.$obj.find(':last-child').addClass(this.classes.before);
				}
				else {
					target.prev().addClass(this.classes.before);
				}
			}
			else {
				if(target.is(':last-child')) {
					this.$obj.find(':first-child').addClass(this.classes.before);
				}
				else {
					target.next().addClass(this.classes.before);
				}
			}
			
			target.addClass(this.classes.active);			
		},
		
		/**
		 * Adds the play class to the DOM object
		 */
		 		
		play: function() {
			this.$obj.addClass(this.factory.classes.play);
		},
		
		/**
		 * Removes the play class to the DOM object 
		 */
		 
		stop: function() {
			var t = this;
			
			setTimeout(function() {
				t.$obj.removeClass(t.factory.classes.play);
			}, this.factory.timer.interval);
		},
		
		/**
		 * Create the list of digits and appends it to the DOM object 
		 */
		 
		createList: function() {
		
			var html = $('<ul class="'+this.classes.flip+' '+(this.factory.running ? this.factory.classes.play : '')+'" />');
			
			for(var x = 0; x < 10; x++) {
				var item = $([
				'<li data-digit="'+x+'">',
					'<a href="#">',
						'<div class="up">',
							'<div class="shadow"></div>',
							'<div class="inn">'+x+'</div>',
						'</div>',
						'<div class="down">',
							'<div class="shadow"></div>',
							'<div class="inn">'+x+'</div>',
						'</div>',
					'</a>',
				'</li>'].join(''));
				
				this.items.push(item);
				
				html.append(item);
			}
						
			return html;
		}
	});
		
	/**
	 * The FlipClock Time class is used to manage all the time 
	 * calculations.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.Time = FlipClock.Base.extend({
		
		/**
		 * The time (in seconds)
		 */		
		 
		minimumDigits: 0,
		
		/**
		 * The time (in seconds)
		 */		
		 
		time: 0,
		
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(factory, time, options) {
			this.base(options);
			this.factory = factory;

			if(time) {
				this.time = time;
			}
		},
		
		/**
		 * Convert a string or integer to an array of digits
		 *
		 * @param   mixed  String or Integer of digits	 
		 * @return  array  An array of digits 
		 */
		 
		convertDigitsToArray: function(str) {
			var data = [];
			
			str = str.toString();
			
			for(var x = 0;x < str.length; x++) {
				if(str[x].match(/^\d*$/g)) {
					data.push(str[x]);	
				}
			}
			
			return data;
		},
		
		/**
		 * Get a specific digit from the time integer
		 *
		 * @param   int    The specific digit to select from the time	 
		 * @return  mixed  Returns FALSE if no digit is found, otherwise
		 *				   the method returns the defined digit	 
		 */
		 
		digit: function(i) {
			var timeStr = this.toString();
			var length  = timeStr.length;
			
			if(timeStr[length - i])	 {
				return timeStr[length - i];
			}
			
			return false;
		},

		/**
		 * Formats any array of digits into a valid array of digits
		 *
		 * @param   mixed  An array of digits	 
		 * @return  array  An array of digits 
		 */
		 
		digitize: function(obj) {
			var data = [];
			
			$.each(obj, function(i, value) {
				value = value.toString();
				
				if(value.length == 1) {
					value = '0'+value;
				}
				
				for(var x = 0; x < value.length; x++) {
					data.push(value[x]);
				}				
			});
			
			if(data.length > this.minimumDigits) {
				this.minimumDigits = data.length;
			}
			
			if(this.minimumDigits > data.length) {
				data.unshift('0');
			}
			
			return data;
		},
		
		/**
		 * Gets a daily breakdown
		 *
		 * @return  object  Returns a digitized object
		 */

		getDayCounter: function(includeSeconds) {
			var digits = [
				this.getDays(),
				this.getHours(true),
				this.getMinutes(true)
			];

			if(includeSeconds) {
				digits.push(this.getSeconds(true));
			}

			return this.digitize(digits);
		},

		/**
		 * Gets number of days
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getDays: function(mod) {
			var days = this.time / 60 / 60 / 24;
			
			if(mod) {
				days = days % 7;
			}
			
			return Math.floor(days);
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getHourCounter: function() {
			var obj = this.digitize([
				this.getHours(),
				this.getMinutes(true),
				this.getSeconds(true)
			]);
			
			return obj;
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getHourly: function() {
			return this.getHourCounter();
		},
		
		/**
		 * Gets number of hours
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getHours: function(mod) {
			var hours = this.time / 60 / 60;
			
			if(mod) {
				hours = hours % 24;	
			}
			
			return Math.floor(hours);
		},
		
		/**
		 * Gets the twenty-four hour time
		 *
		 * @return  object  returns a digitized object
		 */
		 
		getMilitaryTime: function() {
			var date = new Date(); 
			var obj  = this.digitize([
				date.getHours(),
				date.getMinutes(),
				date.getSeconds()				
			]);

			return obj;
		},
				
		/**
		 * Gets number of minutes
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getMinutes: function(mod) {
			var minutes = this.time / 60;
			
			if(mod) {
				minutes = minutes % 60;
			}
			
			return Math.floor(minutes);
		},
		
		/**
		 * Gets a minute breakdown
		 */
		 
		getMinuteCounter: function() {
			var obj = this.digitize([
				this.getMinutes(),
				this.getSeconds(true)
			]);

			return obj;
		},
		
		/**
		 * Gets number of seconds
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a ceiled integer
		 */
		 
		getSeconds: function(mod) {
			var seconds = this.time;
			
			if(mod) {
				if(seconds == 60) {
					seconds = 0;
				}
				else {
					seconds = seconds % 60;
				}
			}
			
			return Math.ceil(seconds);
		},
		
		/**
		 * Gets the current twelve hour time
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getTime: function() {
			var date  = new Date(); 
			var hours = date.getHours();
			var merid = hours > 12 ? 'PM' : 'AM';
			var obj   = this.digitize([
				hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours),
				date.getMinutes(),
				date.getSeconds()				
			]);

			return obj;
		},
		
		/**
		 * Gets number of weeks
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getWeeks: function() {
			var weeks = this.time / 60 / 60 / 24 / 7;
			
			if(mod) {
				weeks = weeks % 52;
			}
			
			return Math.floor(weeks);
		},
		
		/**
		 * Removes a specific number of leading zeros from the array.
		 * This method prevents you from removing too many digits, even
		 * if you try.
		 *
		 * @param   int    Total number of digits to remove 
		 * @return  array  An array of digits 
		 */
		 
		removeLeadingZeros: function(totalDigits, digits) {
			var total    = 0;
			var newArray = [];
			
			$.each(digits, function(i, digit) {
				if(i < totalDigits) {
					total += parseInt(digits[i], 10);
				}
				else {
					newArray.push(digits[i]);
				}
			});
			
			if(total === 0) {
				return newArray;
			}
			
			return digits;
		},
		
		/**
		 * Converts the object to a human readable string
		 */
		 
		toString: function() {
			return this.time.toString();
		}
		
		/*
		getYears: function() {
			return Math.floor(this.time / 60 / 60 / 24 / 7 / 52);
		},
		
		getDecades: function() {
			return Math.floor(this.getWeeks() / 10);
		}*/
	});
	
	/**
	 * The FlipClock.Timer object managers the JS timers
	 *
	 * @param	object  The parent FlipClock.Factory object
	 * @param	object  Override the default options
	 */
	
	FlipClock.Timer = FlipClock.Base.extend({
		
		/**
		 * Callbacks
		 */		
		 
		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},
		
		/**
		 * FlipClock timer count (how many intervals have passed)
		 */		
		 
		count: 0,
		
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * Timer interval (1 second by default)
		 */		
		 
		interval: 1000,
				
		/**
		 * Constructor
		 *
		 * @return	void
		 */		
		 
		constructor: function(factory, options) {
			this.base(options);
			this.factory = factory;
			this.callback(this.callbacks.init);	
			this.callback(this.callbacks.create);
		},
		
		/**
		 * This method gets the elapsed the time as an interger
		 *
		 * @return	void
		 */		
		 
		getElapsed: function() {
			return this.count * this.interval;
		},
		
		/**
		 * This method gets the elapsed the time as a Date object
		 *
		 * @return	void
		 */		
		 
		getElapsedTime: function() {
			return new Date(this.time + this.getElapsed());
		},
		
		/**
		 * This method is resets the timer
		 *
		 * @param 	callback  This method resets the timer back to 0
		 * @return	void
		 */		
		 
		reset: function(callback) {
			clearInterval(this.timer);
			this.count = 0;
			this._setInterval(callback);			
			this.callback(this.callbacks.reset);
		},
		
		/**
		 * This method is starts the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		start: function(callback) {		
			this.factory.running = true;
			this._createTimer(callback);
			this.callback(this.callbacks.start);
		},
		
		/**
		 * This method is stops the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		stop: function(callback) {
			this.factory.running = false;
			this._clearInterval(callback);
			this.callback(this.callbacks.stop);
			this.callback(callback);
		},
		
		/**
		 * Clear the timer interval
		 *
		 * @return	void
		 */		
		 
		_clearInterval: function() {
			clearInterval(this.timer);
		},
		
		/**
		 * Create the timer object
		 *
		 * @param 	callback  A function that is called once the timer is created
		 * @return	void
		 */		
		 
		_createTimer: function(callback) {
			this._setInterval(callback);		
		},
		
		/**
		 * Destroy the timer object
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 	
		_destroyTimer: function(callback) {
			this._clearInterval();			
			this.timer = false;
			this.callback(callback);
			this.callback(this.callbacks.destroy);
		},
		
		/**
		 * This method is called each time the timer interval is ran
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		_interval: function(callback) {
			this.callback(this.callbacks.interval);
			this.callback(callback);
			this.count++;
		},
		
		/**
		 * This sets the timer interval
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		_setInterval: function(callback) {
			var t = this;
			
			t.timer = setInterval(function() {			
				t._interval(callback);
			}, this.interval);
		}
			
	});
	
	/**
	 * Capitalize the first letter in a string
	 *
	 * @return string
	 */
	 
	String.prototype.ucfirst = function() {
		return this.substr(0, 1).toUpperCase() + this.substr(1);
	};
	
	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	$.fn.FlipClock = function(digit, options) {
		if(typeof digit == "object") {
			options = digit;
			digit = 0;
		}		
		return new FlipClock($(this), digit, options);
	};
	
	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	$.fn.flipClock = function(digit, options) {
		return $.fn.FlipClock(digit, options);
	};
	
}(jQuery));

(function($) {
	
	/**
	 * Twenty-Four Hour Clock Face
	 *
	 * This class will generate a twenty-four our clock for FlipClock.js
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			factory.countdown = false;
			this.base(factory, options);
		},

		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function(time) {
			var t        = this;
			var children = this.factory.$wrapper.find('ul');

			time = time ? time : (this.factory.time.time || this.factory.time.getMilitaryTime());
			
			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					t.factory.lists.push(t.createList(digit));
				});
			}
			
			this.dividers.push(this.createDivider());
			this.dividers.push(this.createDivider());
			
			$(this.dividers[0]).insertBefore(this.factory.lists[this.factory.lists.length - 2].$obj);
			$(this.dividers[1]).insertBefore(this.factory.lists[this.factory.lists.length - 4].$obj);
			
			this._clearExcessDigits();
			
			if(this.autoStart) {
				this.start();
			}
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time) {
			time = time ? time : this.factory.time.getMilitaryTime();
			this.base(time);	
		},
		
		/**
		 * Clear the excess digits from the tens columns for sec/min
		 */
		 
		_clearExcessDigits: function() {
			var tenSeconds = this.factory.lists[this.factory.lists.length - 2];
			var tenMinutes = this.factory.lists[this.factory.lists.length - 4];
			
			for(var x = 6; x < 10; x++) {
				tenSeconds.$obj.find('li:last-child').remove();
				tenMinutes.$obj.find('li:last-child').remove();
			}
		}
				
	});
	
}(jQuery));
(function($) {
		
	/**
	 * Counter Clock Face
	 *
	 * This class will generate a generice flip counter. The timer has been
	 * disabled. clock.increment() and clock.decrement() have been added.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.CounterFace = FlipClock.Face.extend({
		
		autoStart: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			factory.timer.interval = 0;
			factory.autoStart 	   = false;
			factory.running  	   = true;

			factory.increment = function() {
				factory.countdown = false;
				factory.setTime(factory.getTime().time + 1);
			};

			factory.decrement = function() {
				factory.countdown = true;
				factory.setTime(factory.getTime().time - 1);
			};

			factory.setValue = function(digits) {
				factory.setTime(digits);
			};

			factory.setCounter = function(digits) {
				factory.setTime(digits);
			};

			this.base(factory, options);
		},
		
		/**
		 * Build the clock face	
		 */
		 
		build: function() {
			var t        = this;
			var children = this.factory.$wrapper.find('ul');
			var lists    = [];
			var time 	 = this.factory.getTime().digitize([this.factory.getTime().time]);

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					var list = t.createList(digit);

					list.select(digit);
					lists.push(list);
				});
			
			}

			$.each(lists, function(i, list) {
				list.play();
			});

			this.factory.lists = lists;
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(doNotAddPlayClass) {
			var time = this.factory.getTime().digitize([this.factory.getTime().time]);

			this.base(time, doNotAddPlayClass);
		},

	});
	
}(jQuery));
(function($) {

	/**
	 * Daily Counter Clock Face
	 *
	 * This class will generate a daily counter for FlipClock.js. A
	 * daily counter will track days, hours, minutes, and seconds. If
	 * the number of available digits is exceeded in the count, a new
	 * digit will be created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

	FlipClock.DailyCounterFace = FlipClock.Face.extend({

		showSeconds: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 */

		constructor: function(factory, options) {
			this.base(factory, options);
		},

		/**
		 * Build the clock face
		 */

		build: function(excludeHours, time) {
			var t        = this;
			var children = this.factory.$wrapper.find('ul');
			var lists    = [];
			var offset   = 0;

			time     = time ? time : this.factory.time.getDayCounter(this.showSeconds);

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					lists.push(t.createList(digit));
				});
			}

			this.factory.lists = lists;

			if(this.showSeconds) {
				$(this.createDivider('Seconds')).insertBefore(this.factory.lists[this.factory.lists.length - 2].$obj);
			}
			else
			{
				offset = 2;
			}

			$(this.createDivider('Minutes')).insertBefore(this.factory.lists[this.factory.lists.length - 4 + offset].$obj);
			$(this.createDivider('Hours')).insertBefore(this.factory.lists[this.factory.lists.length - 6 + offset].$obj);
			$(this.createDivider('Days', true)).insertBefore(this.factory.lists[0].$obj);

			this._clearExcessDigits();

			if(this.autoStart) {
				this.start();
			}
		},

		/**
		 * Flip the clock face
		 */

		flip: function(doNotAddPlayClass, time) {
			if(!time) {
				time = this.factory.time.getDayCounter(this.showSeconds);
			}
			this.base(time, doNotAddPlayClass);
		},

		/**
		 * Clear the excess digits from the tens columns for sec/min
		 */

		_clearExcessDigits: function() {
			var tenSeconds = this.factory.lists[this.factory.lists.length - 2];
			var tenMinutes = this.factory.lists[this.factory.lists.length - 4];

			for(var x = 6; x < 10; x++) {
				tenSeconds.$obj.find('li:last-child').remove();
				tenMinutes.$obj.find('li:last-child').remove();
			}
		}

	});

}(jQuery));
(function($) {
			
	/**
	 * Hourly Counter Clock Face
	 *
	 * This class will generate an hourly counter for FlipClock.js. An
	 * hour counter will track hours, minutes, and seconds. If number of
	 * available digits is exceeded in the count, a new digit will be 
	 * created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.HourlyCounterFace = FlipClock.Face.extend({
			
		clearExcessDigits: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face
		 */
		
		build: function(excludeHours, time) {
			var t        = this;
			var children = this.factory.$wrapper.find('ul');
			var lists = [];
			
			time     = time ? time : this.factory.time.getHourCounter();
			
			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					lists.push(t.createList(digit));
				});
			}
			
			this.factory.lists = lists;	
			
			$(this.createDivider('Seconds')).insertBefore(this.factory.lists[this.factory.lists.length - 2].$obj);
			$(this.createDivider('Minutes')).insertBefore(this.factory.lists[this.factory.lists.length - 4].$obj);
			
			if(!excludeHours) {
				$(this.createDivider('Hours', true)).insertBefore(this.factory.lists[0].$obj);
			}
			
			if(this.clearExcessDigits) {
				this._clearExcessDigits();
			}
			
			if(this.autoStart) {
				this.start();
			}
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(doNotAddPlayClass, time) {
			if(!time) {
				time = this.factory.time.getHourCounter();
			}			
			this.base(time, doNotAddPlayClass);
		},
		
		/**
		 * Clear the excess digits from the tens columns for sec/min
		 */
		 
		_clearExcessDigits: function() {
			var tenSeconds = this.factory.lists[this.factory.lists.length - 2];
			var tenMinutes = this.factory.lists[this.factory.lists.length - 4];
			
			for(var x = 6; x < 10; x++) {
				tenSeconds.$obj.find('li:last-child').remove();
				tenMinutes.$obj.find('li:last-child').remove();
			}
		}
		
	});
	
}(jQuery));
(function($) {
		
	/**
	 * Minute Counter Clock Face
	 *
	 * This class will generate a minute counter for FlipClock.js. A
	 * minute counter will track minutes and seconds. If an hour is 
	 * reached, the counter will reset back to 0. (4 digits max)
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
		
		clearExcessDigits: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face	
		 */
		 
		build: function() {
			this.base(true, this.factory.time.getMinuteCounter());
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(doNotAddPlayClass) {
			this.base(doNotAddPlayClass, this.factory.time.getMinuteCounter());
		},

	});
	
}(jQuery));
(function($) {
		
	/**
	 * Twelve Hour Clock Face
	 *
	 * This class will generate a twelve hour clock for FlipClock.js
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
		
		/**
		 * The meridium jQuery DOM object
		 */
		 
		meridium: false,
		
		/**
		 * The meridium text as string for easy access
		 */
		 
		meridiumText: 'AM',
					
		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function(time) {
			var t        = this;
			
			time = time ? time : (this.factory.time.time ? this.factory.time.time : this.factory.time.getTime());
			
			this.base(time);			
			this.meridiumText = this._isPM() ? 'PM' : 'AM';			
			this.meridium = $([
				'<ul class="flip-clock-meridium">',
					'<li>',
						'<a href="#">'+this.meridiumText+'</a>',
					'</li>',
				'</ul>'
			].join(''));
			
			this.meridium.insertAfter(this.factory.lists[this.factory.lists.length-1].$obj);
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function() {			
			if(this.meridiumText != this._getMeridium()) {
				this.meridiumText = this._getMeridium();
				this.meridium.find('a').html(this.meridiumText);	
			}
			this.base(this.factory.time.getTime());	
		},
		
		/**
		 * Get the current meridium
		 *
		 * @return  string  Returns the meridium (AM|PM)
		 */
		 
		_getMeridium: function() {
			return new Date().getHours() >= 12 ? 'PM' : 'AM';
		},
		
		/**
		 * Is it currently in the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		_isPM: function() {
			return this._getMeridium() == 'PM' ? true : false;
		},
		
		/**
		 * Clear the excess digits from the tens columns for sec/min
		 */
		 
		_clearExcessDigits: function() {
			var tenSeconds = this.factory.lists[this.factory.lists.length - 2];
			var tenMinutes = this.factory.lists[this.factory.lists.length - 4];
			
			for(var x = 6; x < 10; x++) {
				tenSeconds.$obj.find('li:last-child').remove();
				tenMinutes.$obj.find('li:last-child').remove();
			}
		}
				
	});
	
}(jQuery));
(function($) {
		
	/**
	 * FlipClock German Language Pack
	 *
	 * This class will used to translate tokens into the German language.
	 *	
	 */
	 
	FlipClock.Lang.German = {
		
		'years'   : 'Jahre',
		'months'  : 'Monate',
		'days'    : 'Tage',
		'hours'   : 'Stunden',
		'minutes' : 'Minuten',
		'seconds' : 'Sekunden'	
 
	};
	
	/* Create various aliases for convenience */
 
	FlipClock.Lang['de']     = FlipClock.Lang.German;
	FlipClock.Lang['de-de']  = FlipClock.Lang.German;
	FlipClock.Lang['german'] = FlipClock.Lang.German;
 
}(jQuery));
(function($) {
		
	/**
	 * FlipClock English Language Pack
	 *
	 * This class will used to translate tokens into the English language.
	 *	
	 */
	 
	FlipClock.Lang.English = {
		
		'years'   : 'Years',
		'months'  : 'Months',
		'days'    : 'Days',
		'hours'   : 'Hours',
		'minutes' : 'Minutes',
		'seconds' : 'Seconds'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['en']      = FlipClock.Lang.English;
	FlipClock.Lang['en-us']   = FlipClock.Lang.English;
	FlipClock.Lang['english'] = FlipClock.Lang.English;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Spanish Language Pack
	 *
	 * This class will used to translate tokens into the Spanish language.
	 *	
	 */
	 
	FlipClock.Lang.Spanish = {
		
		'years'   : 'A&#241;os',
		'months'  : 'Meses',
		'days'    : 'D&#205;as',
		'hours'   : 'Horas',
		'minutes' : 'Minutos',
		'seconds' : 'Segundo'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['es']      = FlipClock.Lang.Spanish;
	FlipClock.Lang['es-es']   = FlipClock.Lang.Spanish;
	FlipClock.Lang['spanish'] = FlipClock.Lang.Spanish;

}(jQuery));
(function($) {

  /**
   * FlipClock Canadian French Language Pack
   *
   * This class will used to translate tokens into the Canadian French language.
   *
   */

  FlipClock.Lang.French = {

    'years'   : 'ans',
    'months'  : 'mois',
    'days'    : 'jours',
    'hours'   : 'heures',
    'minutes' : 'minutes',
    'seconds' : 'secondes'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['fr']      = FlipClock.Lang.French;
  FlipClock.Lang['fr-ca']   = FlipClock.Lang.French;
  FlipClock.Lang['french']  = FlipClock.Lang.French;

}(jQuery));
