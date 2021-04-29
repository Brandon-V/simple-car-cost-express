(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),i=r(26),s=r(372),o=r(327),a=r(97),c=r(109),u=r(985),l=r(61);e.exports=function(e){return new Promise((function(t,r){var f=e.data,h=e.headers;n.isFormData(f)&&delete h["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(p+":"+m)}var v=a(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),o(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};i(t,r,s),d=null}},d.onabort=function(){d&&(r(l("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){r(l("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||u(v))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(h[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(h,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete h[t]:d.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),r(e),d=null)})),f||(f=null),d.send(f)}))}},609:(e,t,r)=>{"use strict";var n=r(867),i=r(849),s=r(321),o=r(185);function a(e){var t=new s(e),r=i(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var c=a(r(655));c.Axios=s,c.create=function(e){return a(o(c.defaults,e))},c.Cancel=r(263),c.CancelToken=r(972),c.isCancel=r(502),c.all=function(e){return Promise.all(e)},c.spread=r(713),c.isAxiosError=r(268),e.exports=c,e.exports.default=c},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),i=r(327),s=r(782),o=r(572),a=r(185);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[o,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=a(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=c},782:(e,t,r)=>{"use strict";var n=r(867);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},97:(e,t,r)=>{"use strict";var n=r(793),i=r(303);e.exports=function(e,t){return e&&!n(t)?i(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,i,s){var o=new Error(e);return n(o,t,r,i,s)}},572:(e,t,r)=>{"use strict";var n=r(867),i=r(527),s=r(502),o=r(655);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return a(e),t.data=i(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,i){return e.config=t,r&&(e.code=r),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={},i=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(i){n.isUndefined(t[i])?n.isUndefined(e[i])||(r[i]=c(void 0,e[i])):r[i]=c(e[i],t[i])}n.forEach(i,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(s,u),n.forEach(o,(function(i){n.isUndefined(t[i])?n.isUndefined(e[i])||(r[i]=c(void 0,e[i])):r[i]=c(void 0,t[i])})),n.forEach(a,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var l=i.concat(s).concat(o).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(f,u),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(867),i=r(16),s={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(a=r(448)),a),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(s)})),e.exports=c},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var o=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,o={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(o[t]&&i.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},867:(e,t,r)=>{"use strict";var n=r(849),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:o,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):s(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,i){e[i]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(669),t=r.n(e);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._csrf=document.querySelector('[name="_csrf"]').value,this.form=document.querySelector("#registration-form"),this.allFields=document.querySelectorAll("#registration-form .form-control"),this.insertValidationElements(),this.username=document.querySelector("#username-register"),this.username.previousValue="",this.email=document.querySelector("#email-register"),this.email.previousValue="",this.password=document.querySelector("#password-register"),this.password.previousValue="",this.username.isUnique=!1,this.email.isUnique=!1,this.events()}var r,i;return r=e,(i=[{key:"events",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault(),e.formSubmitHandler()})),this.username.addEventListener("keyup",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.email.addEventListener("keyup",(function(){e.isDifferent(e.email,e.emailHandler)})),this.password.addEventListener("keyup",(function(){e.isDifferent(e.password,e.passwordHandler)})),this.username.addEventListener("blur",(function(){e.isDifferent(e.username,e.usernameHandler)})),this.email.addEventListener("blur",(function(){e.isDifferent(e.email,e.emailHandler)})),this.password.addEventListener("blur",(function(){e.isDifferent(e.password,e.passwordHandler)}))}},{key:"formSubmitHandler",value:function(){this.usernameImmediately(),this.usernameAfterDelay(),this.emailAfterDelay(),this.passwordImmediately(),this.passwordAfterDelay(),!this.username.isUnique||this.username.errors||!this.email.isUnique||this.email.errors||this.password.errors||this.form.submit()}},{key:"isDifferent",value:function(e,t){e.previousValue!=e.value&&t.call(this),e.previousValue=e.value}},{key:"usernameHandler",value:function(){var e=this;this.username.errors=!1,this.usernameImmediately(),clearTimeout(this.username.timer),this.username.timer=setTimeout((function(){return e.usernameAfterDelay()}),800)}},{key:"passwordHandler",value:function(){var e=this;this.password.errors=!1,this.passwordImmediately(),clearTimeout(this.password.timer),this.password.timer=setTimeout((function(){return e.passwordAfterDelay()}),800)}},{key:"passwordImmediately",value:function(){this.password.value.length>50&&this.showValidationError(this.password,"Password cannot exceed 50 character."),this.password.errors||this.hideValidationError(this.password)}},{key:"passwordAfterDelay",value:function(){this.password.value.length<12&&this.showValidationError(this.password,"Password must be at least 12 characters.")}},{key:"emailHandler",value:function(){var e=this;this.email.errors=!1,clearTimeout(this.email.timer),this.email.timer=setTimeout((function(){return e.emailAfterDelay()}),800)}},{key:"emailAfterDelay",value:function(){var e=this;/^\S+@\S+$/.test(this.email.value)||this.showValidationError(this.email,"You must provide a valid email address."),this.email.errors||t().post("/doesEmailExist",{_csrf:this._csrf,email:this.email.value}).then((function(t){t.data?(e.email.isUnique=!1,e.showValidationError(e.email,"That email is already being used.")):(e.email.isUnique=!0,e.hideValidationError(e.email))})).catch((function(){console.log("Please try again later")}))}},{key:"usernameImmediately",value:function(){""==this.username.value||/^([a-zA-Z0-9]+)$/.test(this.username.value)||this.showValidationError(this.username,"Username can only contain letters and numbers."),this.username.length>30&&this.showValidationError(this.username,"Username cannot exceed 30 characters."),this.username.errors||this.hideValidationError(this.username)}},{key:"hideValidationError",value:function(e){e.nextElementSibling.classList.remove("liveValidateMessage--visible")}},{key:"showValidationError",value:function(e,t){e.nextElementSibling.innerHTML=t,e.nextElementSibling.classList.add("liveValidateMessage--visible"),e.errors=!0}},{key:"usernameAfterDelay",value:function(){var e=this;this.username.value.length<3&&this.showValidationError(this.username,"Username must be at least 3 characters."),this.username.errors||t().post("/doesUsernameExist",{_csrf:this._csrf,username:this.username.value}).then((function(t){t.data?(e.showValidationError(e.username,"That username is already taken."),e.username.isUnique=!1):e.username.isUnique=!0})).catch((function(){console.log("Please try again later.")}))}},{key:"insertValidationElements",value:function(){this.allFields.forEach((function(e){e.insertAdjacentHTML("afterend",'<div class="alert alert-danger small liveValidateMessage"></div>')}))}}])&&n(r.prototype,i),e}();function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selectBox=document.querySelector("#sort-item"),this.listGroup=document.querySelector(".list-group"),this.items=document.querySelectorAll(".card"),this.itemsArr=[],this.events()}var t,r;return t=e,(r=[{key:"events",value:function(){var e=this;this.selectBox.addEventListener("change",(function(){"created_date_asc"==e.selectBox.value&&e.newest_first(),"cost_per_asc"==e.selectBox.value&&e.lowest_cost_per_first(),"cost_per_desc"==e.selectBox.value&&e.highest_cost_per_first(),"mos_remain_asc"==e.selectBox.value&&e.lowest_months_rem_first(),"mos_remain_desc"==e.selectBox.value&&e.highest_months_rem_first(),"cost_asc"==e.selectBox.value&&e.lowest_price_first(),"cost_desc"==e.selectBox.value&&e.highest_price_first(),"miles_asc"==e.selectBox.value&&e.lowest_miles_first(),"miles_desc"==e.selectBox.value&&e.highest_miles_first()}))}},{key:"newest_first",value:function(){console.log(this.items),console.log(this.selectBox.value),location.reload()}},{key:"lowest_cost_per_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[4].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[4].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[4].children[0].innerHTML.replace(/,/g,""))>parseFloat(t.children[4].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"highest_cost_per_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[4].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[4].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[4].children[0].innerHTML.replace(/,/g,""))<parseFloat(t.children[4].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"lowest_months_rem_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[3].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[3].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[3].children[0].innerHTML.replace(/,/g,""))>parseFloat(t.children[3].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"highest_months_rem_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[3].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[3].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[3].children[0].innerHTML.replace(/,/g,""))<parseFloat(t.children[3].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"lowest_price_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[1].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[1].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[1].children[0].innerHTML.replace(/,/g,""))>parseFloat(t.children[1].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"highest_price_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[1].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[1].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[1].children[0].innerHTML.replace(/,/g,""))<parseFloat(t.children[1].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"lowest_miles_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[2].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[2].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[2].children[0].innerHTML.replace(/,/g,""))>parseFloat(t.children[2].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}},{key:"highest_miles_first",value:function(){var e=this;this.items.forEach((function(t){1==t.nodeType&&e.itemsArr.push(t)})),this.itemsArr.sort((function(e,t){return parseFloat(e.children[2].children[0].innerHTML.replace(/,/g,""))==parseFloat(t.children[2].children[0].innerHTML.replace(/,/g,""))?0:parseFloat(e.children[2].children[0].innerHTML.replace(/,/g,""))<parseFloat(t.children[2].children[0].innerHTML.replace(/,/g,""))?1:-1})),this.itemsArr.forEach((function(t){e.listGroup.appendChild(t)}))}}])&&s(t.prototype,r),e}();document.querySelector("#registration-form")&&new i,document.querySelector("#sort-item")&&new o})()})();