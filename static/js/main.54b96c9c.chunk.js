(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(9),o=n.n(s),i=(n(23),n(24),n(10)),r=n(2),u=(n(25),n(1)),d=function(e){var t=e.routes,n=Object(r.f)();return Object(u.jsx)("nav",{className:"navbar",children:Object(u.jsx)("ul",{className:"navbar__inner",children:t.map((function(e){var t=e.path,a=e.name;return Object(u.jsx)("li",{className:"navbar__item ".concat(t===n.pathname?"on":""),children:Object(u.jsx)(i.b,{to:t,children:a})},t)}))})})},m=(n(32),n.p+"static/media/hayato-headshot.9bee6cc6.JPG"),l=function(){return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{className:"header-text",children:"Welcome"}),Object(u.jsx)("p",{className:"welcome-text",children:"Welcome to Hayato's homepage. Get to know Hayato as he takes you through a wonderful journey of Front-End imagination."}),Object(u.jsx)("img",{src:m,alt:"hayato",className:"headshot"})]})},j=(n(33),n.p+"static/media/chili.cb41038f.JPG"),h=n.p+"static/media/hayato-moustache.ffaa7406.JPG",b=function(){return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{className:"header-text",children:"About"}),Object(u.jsxs)("p",{className:"text",children:["Hayato loves to swim at the beach.",Object(u.jsx)("br",{}),"He enjoys reading, and coding, and playing video games.",Object(u.jsx)("br",{}),"He can usually be found at the kitchen sink, washing dishes."]}),Object(u.jsx)("h2",{className:"subheader",children:"Hayato's favorite cuisine: Tex-Mex"}),Object(u.jsx)("img",{src:j,className:"image",alt:"bowl of chili, hayato's favorite"}),Object(u.jsx)("h2",{className:"subheader",children:"Hayato with a moustache"}),Object(u.jsx)("img",{src:h,className:"image",alt:"Hayato had a moustache for about 5 minutes"})]})},p=n(11),f=(n(34),n(35),n.p+"static/media/boom.d89f41a5.wav"),O=n.p+"static/media/clap.eb738e52.wav",v=n.p+"static/media/hihat.0273528c.wav",x=n.p+"static/media/kick.1d842c55.wav",y=n.p+"static/media/openhat.482e5231.wav",k=n.p+"static/media/ride.44e63854.wav",w=n.p+"static/media/snare.3aa3f943.wav",g=n.p+"static/media/tink.b78647d2.wav",N=n.p+"static/media/tom.52db9c23.wav",L=n.p+"static/media/view-from-stage.33e63b14.jpeg",C=function(){var e=Object(a.useMemo)((function(){return[{name:"boom",sound:new Audio(f),key:"a"},{name:"clap",sound:new Audio(O),key:"s"},{name:"hihat",sound:new Audio(v),key:"d"},{name:"kick",sound:new Audio(x),key:"f"},{name:"open-hat",sound:new Audio(y),key:"g"},{name:"ride",sound:new Audio(k),key:"h"},{name:"snare",sound:new Audio(w),key:"j"},{name:"tink",sound:new Audio(g),key:"k"},{name:"tom",sound:new Audio(N),key:"l"}]}),[]),t=Object(a.useCallback)((function(e){e&&(e.pause(),e.currentTime=0,e.play())}),[]);Object(a.useEffect)((function(){var n=e.map((function(e){return e.key})),a=function(a){!a.repeat&&n.includes(a.key.toLowerCase())&&(!function(n){var a=e.find((function(e){return e.key===n.key.toLowerCase()})).sound;t(a)}(a),document.getElementById("".concat(a.key.toLowerCase(),"-key")).classList.add("pressed"))},c=function(e){!e.repeat&&n.includes(e.key.toLowerCase())&&document.getElementById("".concat(e.key.toLowerCase(),"-key")).classList.remove("pressed")};return document.addEventListener("keydown",a),document.addEventListener("keyup",c),function(){document.removeEventListener("keydown",a),document.removeEventListener("keyup",c)}}),[e,t]);var n=Object(a.useRef)(null),c=Object(a.useState)(.9*window.innerWidth),s=Object(p.a)(c,2),o=s[0],i=s[1];Object(a.useEffect)((function(){window.addEventListener("resize",(function(){console.log("resizing!",n.current.offsetWidth),i(.9*n.current.offsetWidth)}))}),[]);var r=Object(a.useMemo)((function(){var n=Math.PI/e.length,a=o/2,c=n+5.8;return e.map((function(e){var s=e.name,o=e.sound,i=e.key;return c+=n,Object(u.jsxs)("button",{id:"".concat(i,"-key"),className:"drum-button",style:{position:"absolute",right:260*Math.cos(c)+a+"px",bottom:260*Math.sin(c)+120+"px"},onMouseDown:function(e){t(o),e.currentTarget.classList.add("pressed")},onMouseUp:function(e){return e.currentTarget.classList.remove("pressed")},onMouseOut:function(e){return e.currentTarget.classList.remove("pressed")},children:[Object(u.jsx)("span",{className:"drum-key",children:i}),Object(u.jsx)("span",{className:"drum-name",children:s})]},s)}))}),[o,e,t]);return Object(u.jsx)("div",{className:"DrumMachine-outer",ref:n,style:{backgroundImage:"url(".concat(L,")")},children:Object(u.jsx)("div",{style:{position:"relative",width:o,height:"100%",border:"1px solid red"},children:r})})},M=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],c=t[1],s=Object(a.useMemo)((function(){return[{title:"Drum Machine",Component:C}]}),[]),o=Object(a.useCallback)((function(){if(n){var e=s.find((function(e){return e.title===n})).Component;return Object(u.jsx)(e,{})}}),[n,s]),i=Object(a.useMemo)((function(){return s.map((function(e){var t=e.title;return Object(u.jsx)("button",{className:"project-selector-button",onClick:function(){return c(t)},children:t},t)}))}),[s]);return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h1",{className:"header-text",children:"Projects"}),i,Object(u.jsx)("div",{className:"current-project",children:o()})]})},E=n(38),A=[{path:"/portfolio/",name:"Home",Component:l},{path:"/portfolio/about",name:"About",Component:b},{path:"/portfolio/projects",name:"Projects",Component:M}],H=function(){return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(d,{routes:A}),Object(u.jsx)(r.c,{children:Object(u.jsx)("div",{className:"container",children:A.map((function(e){var t=e.path,n=e.name,a=e.Component;return Object(u.jsx)(r.a,{exact:!0,path:t,children:function(e){var t=e.match;return Object(u.jsx)(E.a,{in:null!=t,timeout:250,classNames:"page",unmountOnExit:!0,children:Object(u.jsx)("div",{className:"".concat(n," page"),children:Object(u.jsx)(a,{})})})}},t)}))})})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.54b96c9c.chunk.js.map