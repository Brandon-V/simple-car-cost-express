(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var i=r(867),n=r(26),s=r(372),a=r(327),o=r(97),l=r(109),c=r(985),u=r(61);e.exports=function(e){return new Promise((function(t,r){var h=e.data,d=e.headers;i.isFormData(h)&&delete d["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(p+":"+m)}var v=o(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var i="getAllResponseHeaders"in f?l(f.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:i,config:e,request:f};n(t,r,s),f=null}},f.onabort=function(){f&&(r(u("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){r(u("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(u(t,e,"ECONNABORTED",f)),f=null},i.isStandardBrowserEnv()){var y=(e.withCredentials||c(v))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in f&&i.forEach(d,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete d[t]:f.setRequestHeader(t,e)})),i.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),r(e),f=null)})),h||(h=null),f.send(h)}))}},609:(e,t,r)=>{"use strict";var i=r(867),n=r(849),s=r(321),a=r(185);function o(e){var t=new s(e),r=n(s.prototype.request,t);return i.extend(r,s.prototype,t),i.extend(r,t),r}var l=o(r(655));l.Axios=s,l.create=function(e){return o(a(l.defaults,e))},l.Cancel=r(263),l.CancelToken=r(972),l.isCancel=r(502),l.all=function(e){return Promise.all(e)},l.spread=r(713),l.isAxiosError=r(268),e.exports=l,e.exports.default=l},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var i=r(263);function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new i(e),t(r.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var i=r(867),n=r(327),s=r(782),a=r(572),o=r(185);function l(e){this.defaults=e,this.interceptors={request:new s,response:new s}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=o(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},l.prototype.getUri=function(e){return e=o(this.defaults,e),n(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},i.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,r){return this.request(o(r||{},{method:e,url:t,data:(r||{}).data}))}})),i.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,r,i){return this.request(o(i||{},{method:e,url:t,data:r}))}})),e.exports=l},782:(e,t,r)=>{"use strict";var i=r(867);function n(){this.handlers=[]}n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){i.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n},97:(e,t,r)=>{"use strict";var i=r(793),n=r(303);e.exports=function(e,t){return e&&!i(t)?n(e,t):t}},61:(e,t,r)=>{"use strict";var i=r(481);e.exports=function(e,t,r,n,s){var a=new Error(e);return i(a,t,r,n,s)}},572:(e,t,r)=>{"use strict";var i=r(867),n=r(527),s=r(502),a=r(655);function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return o(e),e.headers=e.headers||{},e.data=n(e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return o(e),t.data=n(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(o(e),t&&t.response&&(t.response.data=n(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,i,n){return e.config=t,r&&(e.code=r),e.request=i,e.response=n,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var i=r(867);e.exports=function(e,t){t=t||{};var r={},n=["url","method","data"],s=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],o=["validateStatus"];function l(e,t){return i.isPlainObject(e)&&i.isPlainObject(t)?i.merge(e,t):i.isPlainObject(t)?i.merge({},t):i.isArray(t)?t.slice():t}function c(n){i.isUndefined(t[n])?i.isUndefined(e[n])||(r[n]=l(void 0,e[n])):r[n]=l(e[n],t[n])}i.forEach(n,(function(e){i.isUndefined(t[e])||(r[e]=l(void 0,t[e]))})),i.forEach(s,c),i.forEach(a,(function(n){i.isUndefined(t[n])?i.isUndefined(e[n])||(r[n]=l(void 0,e[n])):r[n]=l(void 0,t[n])})),i.forEach(o,(function(i){i in t?r[i]=l(e[i],t[i]):i in e&&(r[i]=l(void 0,e[i]))}));var u=n.concat(s).concat(a).concat(o),h=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return i.forEach(h,c),r}},26:(e,t,r)=>{"use strict";var i=r(61);e.exports=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(i("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var i=r(867);e.exports=function(e,t,r){return i.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var i=r(867),n=r(16),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o,l={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(o=r(448)),o),transformRequest:[function(e,t){return n(t,"Accept"),n(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){l.headers[e]=i.merge(s)})),e.exports=l},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),i=0;i<r.length;i++)r[i]=arguments[i];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var i=r(867);function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(i.isURLSearchParams(t))s=t.toString();else{var a=[];i.forEach(t,(function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,(function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),a.push(n(t)+"="+n(e))})))})),s=a.join("&")}if(s){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var i=r(867);e.exports=i.isStandardBrowserEnv()?{write:function(e,t,r,n,s,a){var o=[];o.push(e+"="+encodeURIComponent(t)),i.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),i.isString(n)&&o.push("path="+n),i.isString(s)&&o.push("domain="+s),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var i=r(867);e.exports=i.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var i=e;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=i.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var i=r(867);e.exports=function(e,t){i.forEach(e,(function(r,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[i])}))}},109:(e,t,r)=>{"use strict";var i=r(867),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,a={};return e?(i.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=i.trim(e.substr(0,s)).toLowerCase(),r=i.trim(e.substr(s+1)),t){if(a[t]&&n.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var i=r(849),n=Object.prototype.toString;function s(e){return"[object Array]"===n.call(e)}function a(e){return void 0===e}function o(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==n.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===n.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isPlainObject:l,isUndefined:a,isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:c,isStream:function(e){return o(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function r(r,i){l(t[i])&&l(r)?t[i]=e(t[i],r):l(r)?t[i]=e({},r):s(r)?t[i]=r.slice():t[i]=r}for(var i=0,n=arguments.length;i<n;i++)u(arguments[i],r);return t},extend:function(e,t,r){return u(t,(function(t,n){e[n]=r&&"function"==typeof t?i(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(669),t=r.n(e);function i(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._csrf=document.querySelector('[name="_csrf"]').value,this.form=document.querySelector("#registration-form"),this.allFields=document.querySelectorAll("#registration-form .form-control"),this.insertValidationElements(),this.username=document.querySelector("#username-register"),this.username.previousValue="",this.email=document.querySelector("#email-register"),this.email.previousValue="",this.password=document.querySelector("#password-register"),this.password.previousValue="",this.username.isUnique=!1,this.email.isUnique=!1,this.events()}var r,n;return r=e,(n=[{key:"events",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),e.formSubmitHandler()})),this.username.addEventListener("keyup",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.email.addEventListener("keyup",(function(){e.isDifferent(e.email,e.emailHandler)})),this.password.addEventListener("keyup",(function(){e.isDifferent(e.password,e.passwordHandler)})),this.username.addEventListener("blur",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.email.addEventListener("blur",(function(){e.isDifferent(e.email,e.emailHandler)})),this.password.addEventListener("blur",(function(){e.isDifferent(e.password,e.passwordHandler)}))}},{key:"formSubmitHandler",value:function(){this.usernameImmediately(),this.usernameAfterDelay(),this.emailAfterDelay(),this.passwordImmediately(),this.passwordAfterDelay(),!this.username.isUnique||this.username.errors||!this.email.isUnique||this.email.errors||this.password.errors||this.form.submit()}},{key:"isDifferent",value:function(e,t){e.previousValue!=e.value&&t.call(this),e.previousValue=e.value}},{key:"usernameHandler",value:function(){var e=this;this.username.errors=!1,this.usernameImmediately(),clearTimeout(this.username.timer),this.username.timer=setTimeout((function(){return e.usernameAfterDelay()}),800)}},{key:"passwordHandler",value:function(){var e=this;this.password.errors=!1,this.passwordImmediately(),clearTimeout(this.password.timer),this.password.timer=setTimeout((function(){return e.passwordAfterDelay()}),800)}},{key:"passwordImmediately",value:function(){this.password.value.length>50&&this.showValidationError(this.password,"Password cannot exceed 50 character."),this.password.errors||this.hideValidationError(this.password)}},{key:"passwordAfterDelay",value:function(){this.password.value.length<12&&this.showValidationError(this.password,"Password must be at least 12 characters.")}},{key:"emailHandler",value:function(){var e=this;this.email.errors=!1,clearTimeout(this.email.timer),this.email.timer=setTimeout((function(){return e.emailAfterDelay()}),800)}},{key:"emailAfterDelay",value:function(){var e=this;/^\S+@\S+$/.test(this.email.value)||this.showValidationError(this.email,"You must provide a valid email address."),this.email.errors||t().post("/doesEmailExist",{_csrf:this._csrf,email:this.email.value}).then((function(t){t.data?(e.email.isUnique=!1,e.showValidationError(e.email,"That email is already being used.")):(e.email.isUnique=!0,e.hideValidationError(e.email))})).catch((function(){console.log("Please try again later")}))}},{key:"usernameImmediately",value:function(){""==this.username.value||/^([a-zA-Z0-9]+)$/.test(this.username.value)||this.showValidationError(this.username,"Username can only contain letters and numbers."),this.username.length>30&&this.showValidationError(this.username,"Username cannot exceed 30 characters."),this.username.errors||this.hideValidationError(this.username)}},{key:"hideValidationError",value:function(e){e.nextElementSibling.classList.remove("liveValidateMessage--visible")}},{key:"showValidationError",value:function(e,t){e.nextElementSibling.innerHTML=t,e.nextElementSibling.classList.add("liveValidateMessage--visible"),e.errors=!0}},{key:"usernameAfterDelay",value:function(){var e=this;this.username.value.length<3&&this.showValidationError(this.username,"Username must be at least 3 characters."),this.username.errors||t().post("/doesUsernameExist",{_csrf:this._csrf,username:this.username.value}).then((function(t){t.data?(e.showValidationError(e.username,"That username is already taken."),e.username.isUnique=!1):e.username.isUnique=!0})).catch((function(){console.log("Please try again later.")}))}},{key:"insertValidationElements",value:function(){this.allFields.forEach((function(e){e.insertAdjacentHTML("afterend",'<div class="alert alert-danger small liveValidateMessage"></div>')}))}}])&&i(r.prototype,n),e}();function s(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selectBox=document.querySelector("#sort-item"),this.listGroup=document.querySelector(".list-group"),this.items=document.querySelectorAll(".card"),this.itemsArr=[],this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;this.selectBox.addEventListener("change",(function(){"created_date_asc"==e.selectBox.value&&e.newest_first(),"cost_per_asc"==e.selectBox.value&&e.lowest_cost_per_first(),"cost_per_desc"==e.selectBox.value&&e.highest_cost_per_first(),"mos_remain_asc"==e.selectBox.value&&e.lowest_months_rem_first(),"mos_remain_desc"==e.selectBox.value&&e.highest_months_rem_first(),"cost_asc"==e.selectBox.value&&e.lowest_price_first(),"cost_desc"==e.selectBox.value&&e.highest_price_first(),"miles_asc"==e.selectBox.value&&e.lowest_miles_first(),"miles_desc"==e.selectBox.value&&e.highest_miles_first()}))}},{key:"newest_first",value:function(){console.log(this.items),console.log(this.selectBox.value),location.reload()}},{key:"lowest_cost_per_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[4].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[4].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[4].children[0].innerHTML.replace(/,/g,""))>parseFloat(t.children[4].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"highest_cost_per_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[4].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[4].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[4].children[0].innerHTML.replace(/,/g,""))<parseFloat(t.children[4].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"lowest_months_rem_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[3].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[3].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[3].children[0].innerHTML.replace(/,/g,""))>parseFloat(t.children[3].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"highest_months_rem_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[3].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[3].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[3].children[0].innerHTML.replace(/,/g,""))<parseFloat(t.children[3].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"lowest_price_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[1].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[1].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[1].children[0].innerHTML.replace(/,/g,""))>parseFloat(t.children[1].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"highest_price_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[1].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[1].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[1].children[0].innerHTML.replace(/,/g,""))<parseFloat(t.children[1].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"lowest_miles_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[2].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[2].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[2].children[0].innerHTML.replace(/,/g,""))>parseFloat(t.children[2].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"highest_miles_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[2].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[2].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[2].children[0].innerHTML.replace(/,/g,""))<parseFloat(t.children[2].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}}])&&s(t.prototype,r),e}();function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var c=function e(t,r,i){l(this,e),this.title=t.trim(),this.price=parseInt(r,10),this.miles=parseInt(i,10),this.useful_miles=15e4,this.monthly_miles=1250,this.nrm=Math.round(parseFloat((this.useful_miles-this.miles)/this.monthly_miles)),this.cprm=parseFloat((parseFloat(this.price,10)/parseFloat((this.useful_miles-this.miles)/this.monthly_miles)).toFixed(0)),this.createdDate=new Date,this.uniqueId=Math.round(1e4*Math.random())},u=function(){function e(){l(this,e),this.form=document.querySelector("#td-form"),this.allFields=document.querySelectorAll("#td-form .form-control"),this.insertValidationElements(),this.title=document.querySelector("#td-title"),this.price=document.querySelector("#td-price"),this.miles=document.querySelector("#td-miles"),this.title.previousValue="",this.miles.previousValue="",this.price.previousValue="",this.list=document.querySelector("#td-list"),this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),e.formSubmitHandler()})),document.addEventListener("DOMContentLoaded",this.displayCars()),this.title.addEventListener("keyup",(function(){e.isDifferent(e.title,e.titleCheck)})),this.price.addEventListener("keyup",(function(){e.isDifferent(e.price,e.priceCheck)})),this.miles.addEventListener("keyup",(function(){e.isDifferent(e.miles,e.milesCheck),console.log("keyup ran")})),this.title.addEventListener("blur",(function(){e.isDifferent(e.title,e.titleCheck)})),this.price.addEventListener("blur",(function(){e.isDifferent(e.price,e.priceCheck)})),this.list.addEventListener("click",(function(t){t.preventDefault(),e.removeCar(t.target.parentElement.parentElement.parentElement.parentElement.getAttribute("data-id")),e.deleteCar(t.target)}))}},{key:"isDifferent",value:function(e,t){e.previousValue!=e.value&&t.call(this),e.previousValue=e.value}},{key:"titleCheck",value:function(){var e=this;this.title.errors=!1,this.titleImmediately(),clearTimeout(this.title.timer),this.title.timer=setTimeout((function(){return e.titleAfterDelay()}),800)}},{key:"titleImmediately",value:function(){this.title.errors||this.hideValidationError(this.title),this.title.value.length>40&&this.showValidationError(this.title,"Description Cannot Exceed 40 characters.")}},{key:"titleAfterDelay",value:function(){""!=this.title.value.length&&this.title.value.length<1&&this.showValidationError(this.title,"Please provide a description.")}},{key:"priceCheck",value:function(){var e=this;this.price.errors=!1,this.priceImmediately(),clearTimeout(this.price.timer),this.price.timer=setTimeout((function(){e.priceAfterDelay()}),800)}},{key:"priceImmediately",value:function(){this.price.errors||this.hideValidationError(this.price),this.price.value>149999&&this.showValidationError(this.price,"The price cannot exceed 149,999")}},{key:"priceAfterDelay",value:function(){""!=this.price.value&&this.price.value<=0&&this.showValidationError(this.price,"Please provide a price greater than 0."),""!=this.price.value&&this.price.value.length<1&&this.showValidationError(this.price,"Please provide a price.")}},{key:"milesCheck",value:function(){var e=this;this.miles.errors=!1,this.milesImmediately(),clearTimeout(this.miles.timer),this.miles.timer=setTimeout((function(){return e.milesAfterDelay()}),800)}},{key:"milesImmediately",value:function(){this.miles.errors||this.hideValidationError(this.miles),this.miles.value>149999&&this.showValidationError(this.miles,"Miles Cannot Exceed 149,999.")}},{key:"milesAfterDelay",value:function(){""!=this.miles.value&&this.miles.value<=0&&this.showValidationError(this.miles,"Please provide a value greater than 0."),""!=this.miles.value.length&&this.miles.value.length<1&&this.showValidationError(this.miles,"Please provide a value.")}},{key:"showValidationError",value:function(e,t){e.nextElementSibling.innerHTML=t,e.nextElementSibling.classList.add("liveValidateMessage--visible"),e.errors=!0}},{key:"hideValidationError",value:function(e){e.nextElementSibling.classList.remove("liveValidateMessage--visible"),e.errors=!1}},{key:"insertValidationElements",value:function(){this.allFields.forEach((function(e){e.insertAdjacentHTML("afterend",'<div class="alert alert-danger small liveValidateMessage"></div>')}))}},{key:"deleteCar",value:function(e){e.classList.contains("delete")&&(e.parentElement.parentElement.parentElement.parentElement.remove(),this.showAlertMsg("Car Succesfully Deleted","success"))}},{key:"displayCars",value:function(){var e=this;this.getCars().forEach((function(t){e.addCarToList(t)}))}},{key:"formSubmitHandler",value:function(){if(this.titleImmediately(),this.titleAfterDelay(),this.priceImmediately(),this.priceAfterDelay(),this.milesImmediately(),this.milesAfterDelay(),!this.title.errors&&!this.price.errors&&!this.miles.errors){""==this.title.value&&(this.title.value="Example Title (Field Left Blank)"),""==this.price.value&&(this.price.value=Math.round(15e4*Math.random())),""==this.miles.value&&(this.miles.value=Math.round(15e4*Math.random()));var e=new c(this.title.value.trim(),this.price.value,this.miles.value);this.addCarToList(e),this.showAlertMsg("Car Added.","success"),this.addCar(e),this.title.previousValue="",this.miles.previousValue="",this.price.previousValue="",this.clearInputFields()}}},{key:"clearInputFields",value:function(){this.form.reset(),this.title.focus()}},{key:"showAlertMsg",value:function(e,t){var r=document.createElement("div");r.className="alertMsg alert alert-".concat(t),r.appendChild(document.createTextNode(e));var i=document.querySelector(".container--test-drive"),n=this.form;i.insertBefore(r,n),setTimeout((function(){return document.querySelector(".alertMsg").remove()}),3e3)}},{key:"addCarToList",value:function(e){var t=document.createElement("div");t.innerHTML='\n    <div class="card test-drive-card mt-5" data-id="'.concat(e.uniqueId,'">\n      <div class="list-group">\n        <div class="list-group-item list-group-item-primary">').concat(e.title,'<span>\n        <a href="#" class="btn btn-danger btn-sm delete">X</i></a>\n        </span>\n        </div>\n        <div class="list-group-item list-group-flush">Price: $').concat(e.price.toLocaleString("en-US"),'</div>\n        <div class="list-group-item list-group-flush">Miles: ').concat(e.miles.toLocaleString("en-US"),'</div>\n        <div class="list-group-item list-group-flush">Remaining Months: ').concat(e.nrm,' <span class="text-muted small">~').concat((e.nrm/12).toFixed(1),' Years</span></div>\n        <div class="list-group-item list-group-flush">Cost Per Remaining Months: $').concat(e.cprm.toLocaleString("en-US"),"</div>\n      </div>\n    </div>\n  "),this.list.insertAdjacentElement("afterbegin",t)}},{key:"getCars",value:function(){return null===localStorage.getItem("cars")?[]:JSON.parse(localStorage.getItem("cars"))}},{key:"addCar",value:function(e){var t=this.getCars();t.push(e),localStorage.setItem("cars",JSON.stringify(t))}},{key:"removeCar",value:function(e){var t=this.getCars();t.forEach((function(r,i){r.uniqueId.toString()===e.toString()&&t.splice(i,1)})),localStorage.setItem("cars",JSON.stringify(t))}}])&&o(t.prototype,r),e}();document.querySelector("#registration-form")&&new n,document.querySelector("#sort-item")&&new a,document.querySelector("#td-form")&&new u})()})();