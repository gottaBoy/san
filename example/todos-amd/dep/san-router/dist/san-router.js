!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("san-router",[],t):"object"==typeof exports?exports["san-router"]=t():e["san-router"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist",t(t.s=6)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r=(0,a.default)(e),n=(0,a.default)(t),o=r.path;if(0===o.indexOf("/"))return e;var i=o.split("/"),u=n.path.split("/");u.pop();for(var c=0;c<i.length;c++){var s=i[c];switch(s){case"..":u.pop();break;case".":break;default:u.push(s)}}return""!==u[0]&&u.unshift(""),u.join("/")+(r.queryString?"?"+r.queryString:"")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=r(1),a=n(i)},function(e,t,r){"use strict";function n(e){var t={};t.hash="";var r=e.indexOf("#");r>=0&&(t.hash=e.slice(r+1),e=e.slice(0,r)),t.queryString="";var n={};t.query=n;var o=e.indexOf("?");return o>=0&&(t.queryString=e.slice(o+1),e=e.slice(0,o),t.queryString.split("&").forEach(function(e){var t=e.indexOf("="),r="";t>0&&(r=e.slice(t+1),e=e.slice(0,t));var o=decodeURIComponent(e);r=decodeURIComponent(r),n.hasOwnProperty(o)?n[o]=[].concat(n[o],r):n[o]=r})),t.path=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(7),c=n(u),s=r(8),f=n(s),l=Symbol("eventPool"),p=function(){function e(){o(this,e)}return a(e,[{key:"on",value:function(e,t,r,n){this[l]||(this[l]=Object.create(null)),this[l][e]||(this[l][e]=new f.default);var o=this[l][e];n=Object.assign({},n),r&&(n.thisObject=r),o.add(t,n)}},{key:"once",value:function(e,t,r,n){n=Object.assign({},n),n.once=!0,this.on(e,t,r,n)}},{key:"un",value:function(e,t,r){if(this[l]&&this[l][e]){var n=this[l][e];n.remove(t,r)}}},{key:"fire",value:function(e,t){if(1===arguments.length&&"object"===("undefined"==typeof e?"undefined":i(e))&&(t=e,e=t.type),!e)throw new Error("No event type specified");if("*"===e)throw new Error("Cannot fire global event");var r=t instanceof c.default?t:new c.default(e,t);if(r.target=this,this[l]&&this[l][e]){var n=this[l][e];n.execute(r,this)}if(this[l]&&this[l]["*"]){var o=this[l]["*"];o.execute(r,this)}return r}},{key:"destroyEvents",value:function(){if(this[l]){for(var e in this[l])this[l][e]&&this[l][e].dispose();this[l]=null}}}]),e}();t.default=p},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),i=r(0),a=n(i);t.default={template:'<a href="{{href}}" onclick="return false;" on-click="clicker($event)"><slot></slot></a>',clicker:function(e){var t=this.data.get("href");"string"==typeof t&&o.router.locator.redirect(t.replace(/^#/,"")),e.preventDefault()},attached:function(){var e=this;this.computeHref(),this._toChanger||(this._toChanger=function(){e.computeHref()},this.watch("to",this._toChanger))},disposed:function(){this._toChanger=null},computeHref:function(){var e=this.data.get("to");if("string"==typeof e){var t=(0,a.default)(e,o.router.locator.current);"hash"===o.router.mode&&(t="#"+t),this.data.set("href",t)}}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){var e=location.href.indexOf("#"),t=e<0?"/":location.href.slice(e+1);return t}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),f=n(s),l=r(0),p=n(l),h=Symbol("hashchange_handler_key"),d=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.current=u(),e.referrer="",e[h]=function(){e.redirect(u())},e}return a(t,e),c(t,[{key:"start",value:function(){window.addEventListener("hashchange",this[h],!1)}},{key:"stop",value:function(){window.removeEventListener("hashchange",this[h],!1)}},{key:"redirect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{force:!1};e=(0,p.default)(e,this.current);var r=this.current,n=e!==r;n?(this.referrer=r,this.current=e,location.hash=e):r=this.referrer,!n&&!t.force||t.silent||this.fire("redirect",{url:e,referrer:r})}},{key:"reload",value:function(){this.redirect(this.current,{force:!0})}}]),t}(f.default);t.default=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){return location.pathname+location.search}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(2),f=n(s),l=r(0),p=n(l),h=Symbol("popstate_handler_key"),d=function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.current=u(),e.referrer="",e[h]=function(){e.referrer=e.current,e.current=u(),e.fire("redirect",{url:e.current,referrer:e.referrer})},e}return a(t,e),c(t,[{key:"start",value:function(){window.addEventListener("popstate",this[h])}},{key:"stop",value:function(){window.removeEventListener("popstate",this[h])}},{key:"redirect",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{force:!1};e=(0,p.default)(e,this.current);var r=this.current,n=e!==r;n&&(this.referrer=r,this.current=e,history.pushState({},"",e)),!n&&!t.force||t.silent||this.fire("redirect",{url:e,referrer:r})}},{key:"reload",value:function(){this.fire("redirect",{url:this.current,referrer:this.referrer})}}]),t}(f.default);t.default=d,d.isSupport="pushState"in window.history},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.router=t.Router=t.version=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(4),u=n(a),c=r(5),s=n(c),f=r(1),l=n(f),p=r(3),h=n(p),d=365611,v=function(){return(++d).toString()},y=(t.version="1.0.0-rc.2",t.Router=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.mode,i=void 0===n?"hash":n;o(this,e),this.routes=[],this.routeAlives=[],this.locatorRedirectHandler=function(e){for(var r=(0,l.default)(e.url),n=0;n<t.routes.length;n++){var o=t.routes[n],i=o.rule.exec(r.path);if(i){for(var a=o.keys||[],u=1;u<i.length;u++)r.query[a[u]||u]=i[u];return r.referrer=e.referrer,void t.doRoute(o,r)}}for(var c=t.routeAlives.length;c--;)t.routeAlives[c].component.dispose(),t.routeAlives.splice(c,1)},this.setMode(i)}return i(e,[{key:"doRoute",value:function(e,t){for(var r=!1,n=this.routeAlives.length;n--;){var o=this.routeAlives[n];o.id===e.id?(o.component.data.set("route",t),o.component._callHook("route"),r=!0):(o.component.dispose(),this.routeAlives.splice(n,1))}if(!r)if(e.Component){var i=new e.Component;i.data.set("route",t),i._callHook("route");var a=document.querySelector(e.target);a&&i.attach(a),this.routeAlives.push({component:i,id:e.id})}else e.handler.call(this,t)}},{key:"add",value:function(e){var t=e.rule,r=e.handler,n=e.target,o=void 0===n?"#main":n,i=e.Component,a=[""];if("string"==typeof t){var u=t.replace(/\/:([a-z0-9_-]+)(?=\/|$)/g,function(e,t){return a.push(t),"/([a-z0-9_-]+)"});t=new RegExp("^"+u+"$","i")}if(!(t instanceof RegExp))throw new Error("Rule must be string or RegExp!");var c=v();return this.routes.push({id:c,rule:t,handler:r,keys:a,target:o,Component:i}),this}},{key:"start",value:function(){return this.isStarted||(this.isStarted=!0,this.locator.on("redirect",this.locatorRedirectHandler),this.locator.start(),this.locator.reload()),this}},{key:"stop",value:function(){return this.locator.un("redirect",this.locatorRedirectHandler),this.locator.stop(),this.isStarted=!1,this}},{key:"setMode",value:function(e){if(e=e.toLowerCase(),this.mode!==e){this.mode=e;var t=!1;switch(this.isStarted&&(this.stop(),t=!0),e){case"hash":this.locator=new u.default;break;case"html5":this.locator=new s.default}return t&&this.start(),this}}}]),e}());t.router=new y;t.Link=h.default},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(e){return"[object Object]"===Object.prototype.toString.call(e)},u=new Set(["type","target","preventDefault","isDefaultPrevented","stopPropagation","isPropagationStopped","stopImmediatePropagation","isImmediatePropagationStopped"]),c=function(){function e(t,r){n(this,e),"object"===("undefined"==typeof t?"undefined":o(t))&&(r=t,t=r.type),a(r)?Object.assign(this,r):r&&(this.data=r),t&&(this.type=t)}return i(e,[{key:"isDefaultPrevented",value:function(){return!1}},{key:"preventDefault",value:function(){this.isDefaultPrevented=function(){return!0}}},{key:"isPropagationStopped",value:function(){return!1}},{key:"stopPropagation",value:function(){this.isPropagationStopped=function(){return!0}}},{key:"isImmediatePropagationStopped",value:function(){return!1}},{key:"stopImmediatePropagation",value:function(){this.isImmediatePropagationStopped=function(){return!0},this.stopPropagation()}}],[{key:"fromEvent",value:function(t,r){var n={type:t.type,preserveData:!1,syncState:!1};r=Object.assign(n,r);var o=new e(r.type);if(r.preserveData)for(var i in t)t.hasOwnProperty(i)&&!u.has(i)&&(o[i]=t[i]);return r.extend&&Object.assign(o,r.extend),r.syncState&&!function(){var e=o.preventDefault;o.preventDefault=function(){t.preventDefault(),e.call(this)};var r=t.stopPropagation;o.stopPropagation=function(){t.stopPropagation(),r.call(this)};var n=t.stopImmediatePropagation;o.stopImmediatePropagation=function(){t.stopImmediatePropagation(),n.call(this)}}(),o}},{key:"delegate",value:function(t,r,n,o,i){var a="string"==typeof r,u={object:t,type:a?r:n},c={object:a?n:r,type:a?o:n},s=a?i:o;if(s=Object.assign({preserveData:!1},s),"function"==typeof u.object.on&&"function"==typeof c.object.on&&"function"==typeof c.object.fire){var f=function(t){var r=e.fromEvent(t,s);r.type=c.type,r.target=c.object,c.object.fire(c.type,r)};u.object.on(u.type,f)}}}]),e}();t.default=c},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=Symbol("queue"),a=function(e,t,r){return e&&e.handler===t&&e.thisObject==r},u=function(){function e(){n(this,e),this[i]=[]}return o(e,[{key:"add",value:function(e,t){if(e!==!1&&"function"!=typeof e)throw new Error("event handler must be a function or const false");for(var r=Object.assign({handler:e},t),n=0;n<this[i].length;n++){var o=this[i][n];if(a(o,e,r.thisObject))return}this[i].push(r)}},{key:"remove",value:function(e,t){if(!e)return void this.clear();for(var r=0;r<this[i].length;r++){var n=this[i][r];if(a(n,e,t))return void(this[i][r]=null)}}},{key:"clear",value:function(){this[i].length=0}},{key:"execute",value:function(e,t){for(var r=this[i],n=0;n<r.length;n++){if("function"==typeof e.isImmediatePropagationStopped&&e.isImmediatePropagationStopped())return;var o=r[n];if(o){var a=o.handler;a===!1?("function"==typeof e.preventDefault&&e.preventDefault(),"function"==typeof e.stopPropagation&&e.stopPropagation()):a.call(o.thisObject||t,e),o.once&&this.remove(o.handler,o.thisObject)}}}},{key:"length",value:function(){return this[i].filter(function(e){return!!e}).length}},{key:"dispose",value:function(){this.clear(),this[i]=null}}]),e}();t.default=u}])});