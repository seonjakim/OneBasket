(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{37:function(e,t,r){e.exports=r(38)},38:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(G){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,o=Object.create(a.prototype),i=new C(n||[]);return o._invoke=function(e,t,r){var n=h;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var l=s(e,t,r);if("normal"===l.type){if(n=r.done?p:f,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(G){return{type:"throw",arg:G}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function b(){}function y(){}function g(){}var m={};l(m,o,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(_([])));j&&j!==r&&n.call(j,o)&&(m=j);var w=g.prototype=b.prototype=Object.create(m);function O(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=s(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function _(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:N}}function N(){return{value:t,done:!0}}return y.prototype=g,l(w,"constructor",g),l(g,"constructor",y),y.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},O(k.prototype),l(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new k(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(w),l(w,c,"Generator"),l(w,o,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},40:function(e,t,r){"use strict";r.r(t);var n=r(37),a=r.n(n);function o(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,a)}var i=r(2),c=r(3),l=r(5),u=r(1),s=r.n(u),h=r(7),f=r(20),d=r(6),p=function(e){var t=e.selected,r=e.onSelect,n=e.text,a=e.items,o=s.a.useState(!1),i=Object(l.a)(o,2),c=i[0],u=i[1],h=s.a.useRef(null);return Object(d.jsx)("div",{children:Object(d.jsxs)(f.e,{children:[Object(d.jsx)(f.b,{accessibilityControls:"action-variant-dropdown-example",accessibilityExpanded:c,accessibilityHaspopup:!0,iconEnd:"arrow-down",onClick:function(){return u((function(e){return!e}))},ref:h,selected:c,size:"md",text:t?t.label:n}),c&&Object(d.jsx)(f.d,{anchor:h.current,id:"action-variant-dropdown-example",onDismiss:function(){return u(!1)},children:a.map((function(e){return Object(d.jsx)(f.d.Item,{onSelect:r,option:e,selected:t},e.value)}))})]})})},v=[{value:"GodChild",label:"\uc7a5\ubc14\uad6c\ub2c8\uac00 \ud544\uc694\ud574\uc694"},{value:"GodParent",label:"\uc7a5\ubc14\uad6c\ub2c8\ub97c \uc9c0\uc6d0\ud558\uace0 \uc2f6\uc5b4\uc694"}],b=[{value:"3m",label:"3\uac1c\uc6d4"},{value:"6m",label:"6\uac1c\uc6d4"},{value:"9m",label:"9\uac1c\uc6d4"},{value:"12m",label:"12\uac1c\uc6d4"}],y=[{value:"female",label:"\uc5ec\uc131"},{value:"male",label:"\ub0a8\uc131"}],g={identity:"\ub4f1\ub85d \ud3ec\uc9c0\uc158",reason:"\uc9c0\uc6d0\uc774 \ud544\uc694\ud55c \uc774\uc720",plan:"\uc9c0\uc6d0\uae30\uac04\ub3d9\uc548\uc758 \uacc4\ud68d",duration:"\uc9c0\uc6d0\uae30\uac04",name:"\uc774\ub984",gender:"\uc131\ubcc4",birthday:"\uc0dd\ub144\uc6d4\uc77c",address:"\uc8fc\uc18c",email:"\uc774\uba54\uc77c",phoneNumber:"\uc804\ud654\ubc88\ud638"};t.default=function(){var e=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),t=Object(h.f)(),r=Object(u.useState)({identity:null,duration:null,gender:null}),n=Object(l.a)(r,2),s=n[0],m=n[1],x=Object(u.useState)({reason:"",plan:""}),j=Object(l.a)(x,2),w=j[0],O=j[1],k=Object(u.useState)({name:"",birthday:"",email:"",phoneNumber:"",address:""}),L=Object(l.a)(k,2),E=L[0],S=L[1],C=function(e){var t=e.event,r=e.value;O(Object(c.a)(Object(c.a)({},w),{},Object(i.a)({},t.target.id,r)))},_=function(e){var t=e.event,r=e.value;S(Object(c.a)(Object(c.a)({},E),{},Object(i.a)({},t.target.id,r)))},N=function(){var r,n=(r=a.a.mark((function r(){var n,o,i,l,u,h;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=a.a.keys(s);case 1:if((r.t1=r.t0()).done){r.next=8;break}if(n=r.t1.value,null!==s[n]){r.next=6;break}return alert("".concat(g[n],"\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.")),r.abrupt("return");case 6:r.next=1;break;case 8:r.t2=a.a.keys(E);case 9:if((r.t3=r.t2()).done){r.next=19;break}if(o=r.t3.value,E[o].length){r.next=14;break}return alert("".concat(g[o],"\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694.")),r.abrupt("return");case 14:if(e.test(E.email)){r.next=17;break}return alert("\uc62c\ubc14\ub978 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),r.abrupt("return");case 17:r.next=9;break;case 19:if(i="\uc7a5\ubc14\uad6c\ub2c8\uac00 \ud544\uc694\ud55c \ubd84","GodChild"!==s.identity.value){r.next=30;break}i="\uc7a5\ubc14\uad6c\ub2c8\ub97c \uc9c0\uc6d0\ud574\uc8fc\uc2e4 \ubd84",r.t4=a.a.keys(w);case 23:if((r.t5=r.t4()).done){r.next=30;break}if(l=r.t5.value,w[l].length){r.next=28;break}return alert("".concat(g[l],"\ub97c \uc791\uc131\ud574\uc8fc\uc138\uc694.")),r.abrupt("return");case 28:r.next=23;break;case 30:return u=Object(c.a)(Object(c.a)({type:s.identity.value,duration:s.duration.value,gender:s.gender.value},w),E),h={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(u)},r.next=34,fetch("/api/",h);case 34:if(r.sent.ok){r.next=37;break}return r.abrupt("return",new Error("personal data fail to send to server"));case 37:return r.next=39,alert("\uc131\uacf5\uc801\uc73c\ub85c \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc8fc\ubcc0\uc5d0 ".concat(i,"\uc774 \uacc4\uc2dc\uba74 \uc774\uba54\uc77c\ub85c \uc54c\ub824\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."));case 39:return r.next=41,t.push("/");case 41:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,a){var i=r.apply(e,t);function c(e){o(i,n,a,c,l,"next",e)}function l(e){o(i,n,a,c,l,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),G=[{type:"dropdown",text:"\uc9c0\uc6d0\uae30\uac04",items:b,selected:s.duration,onSelect:function(e){var t=e.item;return m(Object(c.a)(Object(c.a)({},s),{},{duration:t}))}},{type:"textfield",label:"\uc774\ub984",id:"name",value:E.name,onChange:_},{type:"dropdown",text:"\uc131\ubcc4",items:y,selected:s.gender,onSelect:function(e){var t=e.item;return m(Object(c.a)(Object(c.a)({},s),{},{gender:t}))}},{type:"textfield",label:"\uc0dd\ub144\uc6d4\uc77c",id:"birthday",placeholder:"YYYYMMDD\ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:E.birthday,onChange:_},{type:"textfield",label:"\uc774\uba54\uc77c",id:"email",errorMessage:E.email.length&&!1===e.test(E.email)?"\uc62c\ubc14\ub978 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.":null,value:E.email,onChange:_},{type:"textfield",label:"\uc804\ud654\ubc88\ud638",id:"phoneNumber",value:E.phoneNumber,onChange:_},{type:"textfield",label:"\uc8fc\uc18c",id:"address",value:E.address,onChange:_}].map((function(e,t){return Object(d.jsx)(f.a,{padding:2,children:"textfield"===e.type?Object(d.jsx)(f.g,{label:e.label,value:e.value,placeholder:e.placeholder,onChange:e.onChange,id:e.id,errorMessage:e.errorMessage}):Object(d.jsx)(p,{text:e.text,items:e.items,selected:e.selected,onSelect:e.onSelect})},t)}));return Object(d.jsxs)("div",{className:"register-container",children:[Object(d.jsx)("h1",{children:"\ub4f1\ub85d \ud398\uc774\uc9c0"}),Object(d.jsx)("h5",{children:"\ubaa8\ub4e0 \ud56d\ubaa9\uc740 \ud544\uc218 \uc791\uc131 \ud56d\ubaa9\uc785\ub2c8\ub2e4."}),Object(d.jsx)(p,{items:v,text:"\uc800\ub294",selected:s.identity,onSelect:function(e){var t=e.item;return m(Object(c.a)(Object(c.a)({},s),{},{identity:t}))}}),null!==s.identity&&"GodChild"===s.identity.value&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"\uacc4\ud68d"}),Object(d.jsx)("h5",{children:"\uc7a5\ubc14\uad6c\ub2c8\ub97c \ubc1b\ub294 \ub3d9\uc548 \uc55e\uc73c\ub85c \ub098\uc544\uac00\uae30 \uc704\ud55c \ub098\ub9cc\uc758 \uacc4\ud68d\uc744 \uacf5\uc720\ud574\uc8fc\uc138\uc694."}),Object(d.jsx)(f.a,{padding:2,children:Object(d.jsx)(f.f,{id:"reason",value:w.reason,onChange:C,label:"\uc9c0\uc6d0\uc774 \ud544\uc694\ud55c \uc774\uc720"})}),Object(d.jsx)(f.a,{padding:2,children:Object(d.jsx)(f.f,{id:"plan",value:w.plan,onChange:C,label:"\uc9c0\uc6d0 \uae30\uac04 \ub3d9\uc548\uc758 \uacc4\ud68d"})}),Object(d.jsx)(f.c,{})]}),Object(d.jsx)("h3",{children:"\uac1c\uc778\uc815\ubcf4"}),G,Object(d.jsx)(f.a,{padding:2,marginBottom:10,children:Object(d.jsx)(f.b,{onClick:function(){return N()},color:"blue",text:"\ub4f1\ub85d\ud558\uae30"})})]})}}}]);
//# sourceMappingURL=3.88135ae1.chunk.js.map