(this.webpackJsonpinfinite_frontier_studios=this.webpackJsonpinfinite_frontier_studios||[]).push([[3],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"h",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return s}));var a="SET_OTHER_DATA",r="SET_SUBJECT_DATA",o="REMOVE_SUBJECT_DATA",c="SET_STATE",i=function(e,t,n){return{type:a,data:{firstTime:e,cca:t,age:n}}},l=function(e,t){return{type:r,data:{index:e,moduleData:t}}},u=function(e){return{type:o,data:e}},s=function(e){return{type:c,data:e}}},35:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=n(30),l=n(32),u=n.n(l),s=n(7),f=n(33),p=(n(44),n(19)),d=n(13),b=n(10);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={firstTime:null,cca:null,age:null,moduleData:[],isCalculator:!0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.b:return O({},e,{firstTime:t.data.firstTime,cca:t.data.cca,age:t.data.age});case b.d:var n=Object(p.a)(e.moduleData);return n[t.data.index]=t.data.moduleData,O({},e,{moduleData:n});case b.a:var a=Object(p.a)(e.moduleData);return a.splice(t.data,1),O({},e,{moduleData:a});case b.c:return O({},e,{isCalculator:t.data});default:return e}},g=Object(s.c)({nCalculator:h}),v=[f.a],j=s.d.apply(void 0,[s.a.apply(void 0,v)].concat([])),E=Object(s.e)(g,{},j),w=n(34),k=n(17),P=n(8),D={key:"landing",link:"/",name:"Landing"},T={key:"nCalculator",link:"/nlevel-calculator",name:"NCalculator"},S={key:"blog",link:"/blog",name:"Blog"},_=n(22),A=n(23),C=n(25),x=n(24),z=n(26),B=n(14);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=!0;B.a.initialize("UA-156493103-1",{debug:!1});var U=r.a.lazy((function(){return Promise.all([n.e(1),n.e(10)]).then(n.bind(null,802))})),W=r.a.lazy((function(){return n.e(26).then(n.bind(null,807))})),L=r.a.lazy((function(){return Promise.all([n.e(1),n.e(5),n.e(20)]).then(n.bind(null,795))})),H=r.a.lazy((function(){return n.e(16).then(n.bind(null,799))})),I=Object(P.g)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(e){var t=e.pathname,n=e.search;return"".concat(t).concat(n)},o=function(e){R&&(B.a.set(M({},t,{page:e})),B.a.pageview(e))},c=function(t){function a(){return Object(_.a)(this,a),Object(C.a)(this,Object(x.a)(a).apply(this,arguments))}return Object(z.a)(a,t),Object(A.a)(a,[{key:"componentDidMount",value:function(){o(n(this.props.location))}},{key:"componentWillReceiveProps",value:function(e){var t=n(this.props.location),a=n(e.location);t!==a&&o(a)}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),a}(a.Component);return c}((function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(P.d,null,r.a.createElement(P.b,{exact:!0,path:D.link,component:U}),r.a.createElement(P.b,{exact:!0,path:T.link,component:L}),r.a.createElement(P.b,{exact:!0,path:"".concat(S.link,"/:blog_page"),component:H}),r.a.createElement(P.b,{exact:!0,path:"".concat(S.link),component:H}),r.a.createElement(P.b,{path:"*",component:W})))}))),N=r.a.lazy((function(){return Promise.all([n.e(6),n.e(25)]).then(n.bind(null,800))})),V=function(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),n=(t[0],t[1]);return Object(a.useEffect)((function(){setTimeout((function(){return n(!0)}),3e3)}),[]),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(k.a,null,r.a.createElement(I,null)),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(46);u.a.load({google:{families:["Montserrat:300,300i,400,400i,600,600i,700,700i,800,800i","sans-serif","Lato:400","sans-serif"]}}),c.a.render(r.a.createElement(i.a,{store:E},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,4,7]]]);
//# sourceMappingURL=main.5749a55e.chunk.js.map