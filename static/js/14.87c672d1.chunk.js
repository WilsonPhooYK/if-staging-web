(this.webpackJsonpinfinite_frontier_studios=this.webpackJsonpinfinite_frontier_studios||[]).push([[14],{272:function(e,t,n){"use strict";var o,i=n(1),a=n(2),r=n(57),s=n(6),c=n(93),l=n(0),u=n.n(l),d=n(3),f=n.n(d),p=n(48),h=n.n(p),m=n(175),y=n(49),g=Object(c.a)({},m.Transition.propTypes,{isOpen:f.a.bool,children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node]),tag:y.n,className:f.a.node,navbar:f.a.bool,cssModule:f.a.object,innerRef:f.a.oneOfType([f.a.func,f.a.string,f.a.object])}),v=Object(c.a)({},m.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:y.c.Collapse}),b=((o={})[y.b.ENTERING]="collapsing",o[y.b.ENTERED]="collapse show",o[y.b.EXITING]="collapsing",o[y.b.EXITED]="collapse",o);function E(e){return e.scrollHeight}var w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind(Object(r.a)(n))})),n}Object(s.a)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:E(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:E(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,o=t.isOpen,r=t.className,s=t.navbar,l=t.cssModule,d=t.children,f=(t.innerRef,Object(a.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,g=Object(y.l)(f,y.a),v=Object(y.k)(f,y.a);return u.a.createElement(m.Transition,Object(i.a)({},g,{in:o,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var o=function(e){return b[e]||"collapse"}(t),a=Object(y.j)(h()(r,o,s&&"navbar-collapse"),l),f=null===p?null:{height:p};return u.a.createElement(n,Object(i.a)({},v,{style:Object(c.a)({},v.style,{},f),className:a,ref:e.props.innerRef}),d)}))},t}(l.Component);w.propTypes=g,w.defaultProps=v,t.a=w},48:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var r=i.apply(null,o);r&&e.push(r)}else if("object"===a)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(t,[]))||(e.exports=o)}()},49:function(e,t,n){"use strict";n.d(t,"m",(function(){return r})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"o",(function(){return p})),n.d(t,"n",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return v})),n.d(t,"i",(function(){return b})),n.d(t,"d",(function(){return E})),n.d(t,"h",(function(){return w})),n.d(t,"f",(function(){return O}));var o,i=n(3),a=n.n(i);function r(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&r(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=o),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(n[o]=e[o])})),n}function d(e,t){for(var n,o=Array.isArray(t)?t:[t],i=o.length,a={};i>0;)a[n=o[i-=1]]=e[n];return a}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var h="object"===typeof window&&window.Element||function(){};a.a.oneOfType([a.a.string,a.a.func,function(e,t,n){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]);var m=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],v={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},b={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},E=!("undefined"===typeof window||!window.document||!window.document.createElement);function w(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}var O=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},541:function(e,t,n){e.exports={collapseButton:"CollapseItem_collapseButton__1Yg15",header:"CollapseItem_header__3ljZH",collapseContent:"CollapseItem_collapseContent__1Do3l"}},542:function(e,t,n){e.exports={faq:"Faq_faq__30WBR"}},796:function(e,t,n){"use strict";n.r(t);var o=n(22),i=n(23),a=n(25),r=n(24),s=n(26),c=n(0),l=n.n(c),u=n(85),d=n(102),f=n(272),p=n(541),h=n.n(p),m=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(n=Object(a.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={isOpen:!1},n.toggle=function(){return n.setState({isOpen:!n.state.isOpen})},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.isOpen,t=this.props.data;return l.a.createElement("div",{className:h.a.collapseItem},l.a.createElement(d.a,{color:"link",onClick:this.toggle,className:h.a.collapseButton},l.a.createElement("div",{className:h.a.header},l.a.createElement("strong",null,t.title),l.a.createElement("i",{className:"fas fa-chevron-".concat(e?"up":"down"," ml-3")})),l.a.createElement(f.a,{isOpen:e},l.a.createElement("div",{className:h.a.collapseContent},t.desc))))}}]),t}(c.Component);m.defaultProps={};var y=m,g=n(542),v=n.n(g),b=[{title:"1. Production \u2014 how long from start to finish?",desc:"Every client has different needs, making it difficult to generalize a timeframe. However, we aim to deliver your video within 3-4 weeks. Please get in touch with us for a more specific delivery timeline."},{title:"2. Production \u2014 how do we get underway?",desc:"Contact us now to tell us about your idea, needs, and aspirations. We\u2019ll respond quickly with a quick yet detailed guideline on what to expect, what we\u2019ll need from you, and how to take the next steps!"},{title:"3. Costs \u2014 how much do your videos cost?",desc:"The cost of producing your video has everything to do with the needs and details of your specific requirements. Contact us with details regarding your project and we\u2019ll reply swiftly with a price estimate."},{title:"4. Costs \u2014 do you provide revisions, and is there a cost?",desc:"Feel free to ask for revisions at no additional charge \u2014 we aren\u2019t satisfied until you are. However, revisions increase the delivery time. To expedite the process, please consolidate your revisions into a single request."},{title:"5. Costs \u2014 how does payment work?",desc:"We accept bank transfer for payment and kindly ask that you provide a 50% deposit before we begin the project."},{title:"6. Rights \u2014 do I hold the rights to the video?",desc:"You are the sole and undisputed owner of your magnificent new video \ud83d\ude0a After finalizing the payment, we\u2019ll transfer the high-resolution video over to you."},{title:"7. Collaboration \u2014 how do we communicate?",desc:"Options abound for keeping in touch. We\u2019ll keep to emails or other forms of online communication that allow for file transfers \u2014 this way, it is easy to stay on top of files and updates."}],E=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"renderData",value:function(e,t){return l.a.createElement(y,{key:"faq-".concat(t),data:e})}},{key:"render",value:function(){return l.a.createElement("div",{id:"faq",className:v.a.faq},l.a.createElement(u.a,{title:"FAQ",subTitle:"FAQ"}),l.a.createElement("div",{className:[v.a.dataWrapper,"main-margin"].join(" ")},b.map(this.renderData)))}}]),t}(c.Component);E.defaultProps={};var w=E;n.d(t,"default",(function(){return w}))},81:function(e,t,n){e.exports={segmentHeader:"SegmentHeader_segmentHeader__1EXwO"}},85:function(e,t,n){"use strict";var o=n(22),i=n(23),a=n(25),r=n(24),s=n(26),c=n(0),l=n.n(c),u=n(81),d=n.n(u),f=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.title;return l.a.createElement("div",{className:d.a.segmentHeader},l.a.createElement("h2",null,e,l.a.createElement("hr",null)),l.a.createElement("div",{className:d.a.dash}))}}]),t}(c.Component);f.defaultProps={title:"",subTitle:""};var p=f;t.a=p}}]);
//# sourceMappingURL=14.87c672d1.chunk.js.map