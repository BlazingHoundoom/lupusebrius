(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={projects:[{name:"The Dungeon Master",image:"https://blazinghoundoom.github.io/lupusebrius/images/DungeonMaster.png",description:"A dungeon generator and editor for Game Masters to use to help in homebrew adventures."},{name:" Ball-Peen Hammer",image:"https://blazinghoundoom.github.io/lupusebrius/images/hammer-2-low-gloss.png",description:"My first successful 3D model built and rendered in Blender 2.8 beta using Blender's new rendering engine EEVEE. "}]}},12:function(e,t,n){},13:function(e,t,n){e.exports=n.p+"static/media/LupusEbriusLogo.4fcf63f8.svg"},25:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=(n(30),n(2)),s=n(3),u=n(5),l=n(4),m=n(6),p=n(11),d=n(13),h=n.n(d),b=(n(12),[{source:"/",name:"Home"},{source:"/projects",name:"Projects"},{source:"/findme",name:"Find Me"}]),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<b.length;t++)e.push(r.a.createElement(E,{props:this,source:b[t].source,name:b[t].name}));return r.a.createElement(p.a,null,r.a.createElement("nav",{className:"Nav"},r.a.createElement(p.b,{to:b[0].source},r.a.createElement("img",{id:"nav-icon",src:h.a})),r.a.createElement("ul",{className:"Nav-ul"},e)))}}]),t}(a.Component),E=function(e){e.props;var t=e.source,n=e.name;return r.a.createElement("li",{id:"Nav-li"},r.a.createElement(p.b,{to:t,id:"Nav-li-a"},n))},f=j,v=n(14),g=n(10),O=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e)),document.title="LupusEbrius - Home",n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<g.projects.length;t++)e.push(r.a.createElement(w,{props:this,name:g.projects[t].name,image:g.projects[t].image}));return r.a.createElement("div",{className:"Home"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null),r.a.createElement("hr",null),r.a.createElement("h2",null,"Featured Projects"),e)}}]),t}(a.Component),w=function(e){e.props;var t=e.image,n=e.name;return r.a.createElement("div",{id:"FeaturedProject"},r.a.createElement("img",{src:t,alt:n}))},y=O,k=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e)),document.title="LupusEbrius - Projects",n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<g.projects.length;t++)e.push(r.a.createElement(N,{props:this,name:g.projects[t].name,image:g.projects[t].image,description:g.projects[t].description}));return r.a.createElement("div",null,r.a.createElement("p",null,"Here are my Projects!"),r.a.createElement("div",{className:"Projects"},e))}}]),t}(a.Component),N=function(e){e.props;var t=e.name,n=e.image,a=e.description;return r.a.createElement("div",{id:"ProjectView"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("h3",null,t),r.a.createElement("p",null,a))},C=k,M=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e)),document.title="LupusEbrius - Find Me",n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"FindMe"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/matthewguernsey/"},"linkedin"))}}]),t}(a.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"Content"},r.a.createElement(v.a,{exact:!0,path:"/",component:y}),r.a.createElement(v.a,{path:"/projects",component:C}),r.a.createElement(v.a,{path:"/findme",component:M})))}}]),t}(a.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{className:"Footer-content"},"Matthew Guernsey - LupusEbrius Web Development \xa92019"))}}]),t}(a.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{name:"NavBar"}),r.a.createElement(F,{name:"Content"}),r.a.createElement(P,{name:"Footer"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.6a53498e.chunk.js.map