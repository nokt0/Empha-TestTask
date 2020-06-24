(this.webpackJsonpemphasoft=this.webpackJsonpemphasoft||[]).push([[0],{63:function(e,t,n){e.exports=n(79)},68:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),l=n.n(c),i=n(14),u=n.n(i),s=(n(68),n(69),n(91)),E=n(92),m=n(90),f=n(32),d=n(7),h="https://emphasoft-test-assignment.herokuapp.com";function p(){var e=Object(d.c)((function(e){return e.login.loginStatus}));return l.a.createElement(s.a,{bg:"light",expand:"md"},l.a.createElement(f.LinkContainer,{to:"/",exact:!0},l.a.createElement(s.a.Brand,{href:"/"},"Emphasoft")),l.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(E.a,{className:"mr-auto"},l.a.createElement(f.LinkContainer,{to:"/users"},l.a.createElement(E.a.Link,{href:"#link"},"Users List")),l.a.createElement(m.a,{title:"Dropdown",id:"basic-nav-dropdown"},l.a.createElement(m.a.Item,{href:"#action/3.1"},"Action"),l.a.createElement(m.a.Item,{href:"#action/3.2"},"Another action"),l.a.createElement(m.a.Item,{href:"#action/3.3"},"Something"),l.a.createElement(m.a.Divider,null),l.a.createElement(m.a.Item,{href:"#action/3.4"},"Separated link"))),l.a.createElement(E.a,{className:"justify-content-end"},e===r.LOGIN_SUCCESSFUL?l.a.createElement(f.LinkContainer,{to:"/logout"},l.a.createElement(E.a.Link,{href:"#login"},"Logout")):l.a.createElement(f.LinkContainer,{to:"/login"},l.a.createElement(E.a.Link,{href:"#login"},"Login")))))}!function(e){e.ASCENDING="ASCENDING",e.DESCENDING="DESCENDING"}(a||(a={})),function(e){e.NOT_LOGGED_IN="NOT_LOGGED_IN",e.LOGIN_IN_PROGRESS="LOGIN_IN_PROGRESS",e.LOGIN_HAS_ERRORED="LOGIN_HAS_ERRORED",e.LOGIN_SUCCESSFUL="LOGIN_SUCCESSFUL"}(r||(r={})),function(e){e.NOT_FETCHED="NOT_FETCHED",e.FETCHING_IN_PROGRESS="FETCHING_IN_PROGRESS",e.FETCHING_HAS_ERRORED="FETCHING_HAS_ERRORED",e.FETCHED_SUCCESSFUL="FETCHED_SUCCESSFUL"}(o||(o={}));var S=n(26),g=n(6),v=n(84),O=n(85);function N(){return l.a.createElement(v.a,{className:"min-vh-100 m-auto align-items-center"},l.a.createElement(O.a,{className:"text-center"},l.a.createElement("h1",{className:"display-3"},"Welcome To My Page"),l.a.createElement("h2",{className:"lead"},"You can log in and see the list of users from the emphasoft server")))}var C=n(89),b=n(57),_=n(86);function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{type:"LOGIN_ACTION",loginStatus:e,loginErrorMsg:t}}function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return{type:"SET_USERS_ACTION",users:e,fetchStatus:t,fetchErrorMsg:n}}function R(e){return{type:"USER_TABLE_FILTER_ACTION",usernameFilterWord:e}}function L(e){return{type:"USER_TABLE_SORT_TYPE_ACTION",sortType:e}}var w=n(22),G=n.n(w),k=n(41),D=n(12);function j(e,t,n){(n=Object(D.a)({path:"/"},n)).expires instanceof Date&&(n.expires=n.expires.toUTCString());var a=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var r in n){a+="; "+r;var o=n[r];!0!==o&&(a+="="+o)}document.cookie=a}function y(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}var A=function(){return function(){var e=Object(k.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(T(r.NOT_LOGGED_IN)),j("token","",{"max-age":-1});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function x(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.users.fetchStatus}));return e(L(a.ASCENDING)),e(R("")),l.a.createElement("div",null,l.a.createElement(C.a.Group,null,l.a.createElement(C.a,{inline:!0},l.a.createElement(C.a.Label,null,"Filter:"),l.a.createElement(C.a.Control,{type:"text",placeholder:"username",onChange:function(t){return e(R(t.target.value))}}),l.a.createElement(C.a.Label,null,"Sort:"),l.a.createElement(C.a.Control,{as:"select",className:"mr-sm-2",custom:!0,onChange:function(t){return function(t){switch(t){case"ASC":return e(L(a.ASCENDING));case"DESC":return e(L(a.DESCENDING));default:return e(L(a.ASCENDING))}}(t.target.value)}},l.a.createElement("option",{selected:!0,value:"ASC"},"Ascending"),l.a.createElement("option",{value:"DESC"},"Descending")),t===o.FETCHING_IN_PROGRESS?l.a.createElement(b.a,{variant:"primary",disabled:!0},l.a.createElement(_.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."):l.a.createElement(b.a,{onClick:function(){return e(function(){var e=Object(k.a)(G.a.mark((function e(t){var n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(I([],o.NOT_FETCHED)),y("token")){e.next=3;break}return e.abrupt("return",t(A()));case 3:return n=y("token"),t(I([],o.FETCHING_IN_PROGRESS)),a="".concat(h,"/api/v1/users/"),e.next=8,fetch(a,{headers:{Authorization:"Token ".concat(n)}}).then((function(e){if(!e.ok)throw t(I([],o.FETCHING_HAS_ERRORED,e.statusText)),new Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){return t(I(e,o.FETCHED_SUCCESSFUL))})).catch((function(e){t(I([],o.FETCHING_HAS_ERRORED,e.message))}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Refresh"))))}var F=n(87);function U(){Object(d.b)();var e=Object(d.c)((function(e){return e.users.users})),t=Object(d.c)((function(e){return e.userTable.sortType})),n=Object(d.c)((function(e){return e.userTable.usernameFilterWord}));return l.a.createElement(F.a,{variant:"dark",responsive:!0,className:"text-break",striped:!0,bordered:!0,hover:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"Username"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Password"),l.a.createElement("th",null,"Is Active"),l.a.createElement("th",null,"Last Login"),l.a.createElement("th",null,"Is Superuser"))),l.a.createElement("tbody",null,e.sort((function(e,n){var r=function(e,t){return e.id>t.id?1:e.id<t.id?-1:0};switch(t){case a.ASCENDING:return r(e,n);case a.DESCENDING:return-1*r(e,n)}})).filter((function(e){var t,a=new RegExp(".*".concat(n,".*"));return t=e,a.test(t.username)})).map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.username),l.a.createElement("td",null,e.first_name),l.a.createElement("td",null,e.last_name),l.a.createElement("td",null,e.password),l.a.createElement("td",null,e.is_active?"true":"false"),l.a.createElement("td",null,e.last_login),l.a.createElement("td",null,e.is_superuser?"true":"false"))}))))}function H(){var e=Object(d.c)((function(e){return e.login.loginStatus}));return l.a.createElement("div",null,l.a.createElement(v.a,{className:" min-vh-100 align-items-center"},e===r.LOGIN_SUCCESSFUL?l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(U,null)):l.a.createElement(g.c,{to:"/login"})))}var P=n(42),W=n(88),B=n(58);function M(){var e=Object(c.useState)(""),t=Object(P.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),i=Object(P.a)(o,2),u=i[0],s=i[1],E=Object(c.useState)(!1),m=Object(P.a)(E,2),f=m[0],p=m[1],S=Object(d.c)((function(e){return e.login.loginStatus})),N=Object(d.b)();return l.a.createElement(v.a,{className:"min-vh-100 m-auto align-items-center"},l.a.createElement(O.a,null,l.a.createElement(W.a,null,l.a.createElement(B.a,{className:"col-md-3 col-xl-4"}),l.a.createElement(B.a,{md:!0},S===r.LOGIN_SUCCESSFUL?l.a.createElement(g.c,{to:"/users"}):l.a.createElement(C.a,{onSubmit:function(e){e.preventDefault(),N(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var a=Object(k.a)(G.a.mark((function a(o){var c;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,A();case 2:return o(T(r.LOGIN_IN_PROGRESS)),c={username:e,password:t},h+"/api-token-auth/",a.abrupt("return",fetch("https://emphasoft-test-assignment.herokuapp.com/api-token-auth/",{method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"},body:JSON.stringify(c)}).then((function(e){if(!e.ok)throw o(T(r.LOGIN_HAS_ERRORED,e.statusText)),new Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){return j("token",e.token,n?{"max-age":Date.now()+2592e3}:{}),o(T(r.LOGIN_SUCCESSFUL)),e})).catch((function(e){return o(T(r.LOGIN_HAS_ERRORED,e.statusText))})));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(n,u,f))}},l.a.createElement(C.a.Group,{controlId:"formBasicEmail"},l.a.createElement(C.a.Label,null,"Login"),l.a.createElement(C.a.Control,{type:"text",placeholder:"Enter login",onChange:function(e){return a(e.target.value)}})),l.a.createElement(C.a.Group,{controlId:"formBasicPassword"},l.a.createElement(C.a.Label,null,"Password"),l.a.createElement(C.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return s(e.target.value)}})),l.a.createElement(C.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(C.a.Check,{onChange:function(e){return p(e.target.checked)},type:"checkbox",label:"Check me out"})),l.a.createElement(b.a,{variant:"primary",type:"submit"},"Submit"))),l.a.createElement(B.a,{className:"col-md-3 col-xl-4"}))))}function J(){var e=Object(d.b)();return Object(c.useEffect)((function(){e(A())})),l.a.createElement(g.c,{exact:!0,to:"/"})}var z=n(59),Y=n(20),$={loginStatus:r.NOT_LOGGED_IN,loginErrorMsg:"",remember:!1},q={users:[],fetchStatus:o.NOT_FETCHED,fetchErrorMsg:""},K={sortType:a.ASCENDING,usernameFilterWord:""};var Q=n(60),V=Object(Y.combineReducers)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ACTION":return Object(D.a)(Object(D.a)({},e),{},{loginStatus:t.loginStatus,loginErrorMsg:t.loginErrorMsg});case"REMEMBER_ME_ACTION":return Object(D.a)(Object(D.a)({},e),{},{remember:t.remember});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS_ACTION":return Object(D.a)(Object(D.a)({},e),{},{users:t.users,fetchStatus:t.fetchStatus});default:return e}},userTable:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_TABLE_FILTER_ACTION":return Object(D.a)(Object(D.a)({},e),{},{usernameFilterWord:t.usernameFilterWord});case"USER_TABLE_SORT_TYPE_ACTION":return Object(D.a)(Object(D.a)({},e),{},{sortType:t.sortType});default:return e}}}),X=[function(e){return function(t){return function(n){var a=t(n);return localStorage["redux-store"]=JSON.stringify(e.getState()),a}}},function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var a=t(n);return console.log("next state",e.getState()),console.groupEnd(),a}}},Q.a];var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(Y.createStore)(V,localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):e,Object(z.composeWithDevTools)(Y.applyMiddleware.apply(void 0,X)))}();var ee=function(){return l.a.createElement(d.a,{store:Z},l.a.createElement(S.BrowserRouter,null,l.a.createElement(p,null),l.a.createElement(g.g,null,l.a.createElement(g.d,{exact:!0,path:"/"},l.a.createElement(N,null)),l.a.createElement(g.d,{exact:!0,path:"/login"},l.a.createElement(M,null)),l.a.createElement(g.d,{exact:!0,path:"/users"},l.a.createElement(H,null)),l.a.createElement(g.d,{exact:!0,path:"/logout"},l.a.createElement(J,null)))))},te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ee,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/nokt0/Empha-TestTask",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/nokt0/Empha-TestTask","/service-worker.js");te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(t,e)}))}}()}},[[63,1,2]]]);
//# sourceMappingURL=main.d81e91f7.chunk.js.map