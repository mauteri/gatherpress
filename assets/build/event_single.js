!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([function(t,e){!function(){t.exports=this.wp.element}()},,function(t,e){!function(){t.exports=this.wp.i18n}()},,function(t,e){!function(){t.exports=this.React}()},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},,function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(24);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(25),a=n(11);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?a(t):e}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){!function(){t.exports=this.ReactDOM}()},,,,,,,,,,,,function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},,,,function(t,e,n){"use strict";n.r(e);var r=n(4),a=n(12),o=n.n(a),c=n(7),i=n.n(c),s=n(8),u=n.n(s),l=n(9),f=n.n(l),p=n(10),d=n.n(p),b=n(5),v=n.n(b),h=n(0),m=n(2),g=n(11),y=n.n(g);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}function _(t){this.setState({attendanceList:t})}var j=function(t){f()(n,t);var e=O(n);function n(t){var r;return i()(this,n),r=e.call(this,t),_=_.bind(y()(r)),r.state={attendanceList:GatherPress.attendees},r.pages=[{name:Object(m.__)("Attending","gatherpress"),slug:"attending",active:""},{name:Object(m.__)("Waitlist","gatherpress"),slug:"waitlist",active:""},{name:Object(m.__)("Not Attending","gatherpress"),slug:"not_attending",active:""}],r}return u()(n,[{key:"displayNavigation",value:function(){var t=this,e=[],n=GatherPress.current_user_status;n=""!==n?n:"attending";for(var r=0;r<this.pages.length;r++){var a=this.pages[r];a.active=n===a.slug?"active":"",e.push(Object(h.createElement)("a",{ref:function(e){return t.navItem=e},key:a.slug,className:"nav-item nav-link "+a.active,id:"nav-"+a.slug+"-tab","data-id":a.slug,"data-toggle":"tab",href:"#nav-"+a.slug,role:"tab","aria-controls":"nav-"+a.slug,"aria-selected":""===a.active?"false":"true"},a.name))}return e}},{key:"displayContent",value:function(){var t=[],e=GatherPress.current_user_status;e=""!==e?e:"attending";for(var n=0;n<this.pages.length;n++){var r=this.pages[n];r.active=e===r.slug?"active":"",t.push(Object(h.createElement)("div",{key:r.slug,className:"tab-pane fade show "+r.active,id:"nav-"+r.slug,role:"tabpanel","aria-labelledby":"nav-"+r.slug+"-tab"},Object(h.createElement)("div",{key:r.slug,className:"d-flex flex-row flex-wrap"},this.getAttendees(r.slug))))}return t}},{key:"getAttendees",value:function(t){for(var e=this.state.attendanceList[t].attendees,n=[],r=0;r<e.length;r++){var a=e[r];n.push(Object(h.createElement)("div",{key:a.id,className:"p-2"},Object(h.createElement)("a",{href:a.profile},Object(h.createElement)("img",{className:"img-thumbnail",alt:a.name,title:a.name,src:a.photo})),Object(h.createElement)("h5",{className:"mt-2 mb-0"},Object(h.createElement)("a",{href:a.profile},a.name)),Object(h.createElement)("h6",{className:"text-muted"},a.role)))}return n}},{key:"render",value:function(){return Object(h.createElement)("div",{className:"mt-4"},Object(h.createElement)("nav",null,Object(h.createElement)("div",{className:"nav nav-tabs mb-4",id:"attendance-nav",role:"tablist"},this.displayNavigation())),Object(h.createElement)("div",{className:"tab-content p-3",id:"attendance-content"},this.displayContent()))}}]),n}(r.Component);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var S=function(t){f()(n,t);var e=x(n);function n(t){var r;return i()(this,n),(r=e.call(this,t)).state={inputValue:r.attendanceStatus(GatherPress.current_user_status)},r}return u()(n,[{key:"attendanceStatus",value:function(t){switch(t){case"attending":return Object(m.__)("Attending","gatherpress");case"not_attending":return Object(m.__)("Not Attending","gatherpress");case"waitlist":return Object(m.__)("On Waitlist","gatherpress")}return Object(m.__)("Attend","gatherpress")}},{key:"changeSelection",value:function(t){t.preventDefault();var e=t.target.getAttribute("data-value");this.updateStatus(e)}},{key:"updateStatus",value:function(t){var e=this,n={method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":GatherPress.nonce},body:JSON.stringify({status:t,post_id:GatherPress.post_id,_wpnonce:GatherPress.nonce})};fetch(GatherPress.event_rest_api+"attendance",n).then((function(t){return t.json()})).then((function(t){var n;t.success&&(e.setState({inputValue:e.attendanceStatus(t.status)}),_(t.attendees),n=t.status,document.getElementById("nav-"+n+"-tab").click())}))}},{key:"render",value:function(){var t=this;return Object(h.createElement)("div",{className:"btn-group"},Object(h.createElement)("div",{className:"btn-group",role:"group"},Object(h.createElement)("div",{className:"btn-group",role:"group"},Object(h.createElement)("button",{type:"button",className:"btn btn-primary btn-lg dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.inputValue),Object(h.createElement)("div",{className:"dropdown-menu"},Object(h.createElement)("a",{className:"dropdown-item",href:"#","data-value":"attending",onClick:function(e){return t.changeSelection(e)}},Object(m.__)("Yes, I would like to attend this event.","gatherpress")),Object(h.createElement)("a",{className:"dropdown-item",href:"#","data-value":"not_attending",onClick:function(e){return t.changeSelection(e)}},Object(m.__)("No, I cannot attend this event.","gatherpress"))))))}}]),n}(r.Component),E=document.querySelector("#attendance_button_container"),w=document.querySelector("#attendance_container");o.a.render(Object(r.createElement)(S),E),o.a.render(Object(r.createElement)(j),w)}]);