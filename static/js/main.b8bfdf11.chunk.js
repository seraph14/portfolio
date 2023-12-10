(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{25:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(7),n=s(1),a=s(0);const i=Object(n.createContext)(),l=e=>{let{children:t}=e;const[s,c]=Object(n.useState)("light");Object(n.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");c(e.matches?"dark":"light"),e.addEventListener("change",(e=>{c(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(i.Provider,{value:[{themeName:s,toggleTheme:()=>{const e="dark"===s?"light":"dark";localStorage.setItem("themeName",e),c(e)}}],children:t})},r={homepage:"https://seraph15.github.io/portfolio",title:"SK."},o={name:"Surafel K",role:"Software Engineer",description:"A software engineer with a strong foundation in cross-platform mobile development and E-Commerce solutions. Armed with a Bachelor's degree in Software Engineering and a proven track record in leading successful projects, I bring technical expertise and innovation to every endeavor, fostering positive impact.",resume:"https://flowcv.com/resume/vosr0lswn1",social:{linkedin:"https://www.linkedin.com/in/surafel-kassahun/",github:"https://github.com/seraph14"}},j=[{name:"Gojo",description:"A Flutter-powered mobile app connecting landlords and tenants. Streamlining property management with user-friendly design and real-time communication features for instant interaction.",stack:["Django","Flutter","Dart","Bloc"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Safe Send",description:"Built a Native Android application with Kotlin that blocks spammy SMS messages. Implemented a broadcast receiver and push notification for new SMS messages.",stack:["Native Android","Kotlin"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Zembil",description:"A full-stack E-Commerce website, employing Flask for the RESTful API backend, Vue.js for the frontend, and PostgreSQL for the database.",stack:["Flask","Vue.js","PostgreSQL"],sourceCode:"https://github.com",livePreview:"https://github.com"}],h=[{name:"Software Engineer, A2SV",description:"Participated in the development of a mobile app called Hakimhub a medical information and an appointment system for Hospitals in Ethiopia.",stack:["Django","Flutter","Dart","Bloc"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Head of Education",description:"Managing project development for Atrons: a platform developed by the group to share educational resources for free.",stack:["Flutter","Dart","Vue.js","Leadership","DSA"],sourceCode:"https://github.com/",livePreview:"https://github.com/"}],d=["Flutter","Android","React","HTML","CSS","Python","JavaScript","TypeScript","Dart","Kotlin"],m="se.surafel.kassahun@gmail.com";var b=s(13),u=s.n(b),p=s(11),O=s.n(p),x=s(15),f=s.n(x),g=s(14),v=s.n(g);s(25);var k=()=>{const[{themeName:e,toggleTheme:t}]=Object(n.useContext)(i),[s,c]=Object(n.useState)(!1),l=()=>c(!s);return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:s?"flex":null},className:"nav__list",children:[j.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,d.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,m?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(a.jsx)(O.a,{}):Object(a.jsx)(u.a,{})}),Object(a.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:s?Object(a.jsx)(v.a,{}):Object(a.jsx)(f.a,{})})]})};s(29);var N=()=>{const{homepage:e,title:t}=r;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(k,{})]})},_=s(8),w=s.n(_),S=s(16),C=s.n(S);s(30);var y=()=>{const{name:e,role:t,description:s,resume:c,social:n}=o;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:s&&s}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),n&&Object(a.jsxs)(a.Fragment,{children:[n.github&&Object(a.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(w.a,{})}),n.linkedin&&Object(a.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(C.a,{})})]})]})]})},E=s(3),P=s.n(E),A=s(17),F=s.n(A);s(32);var D=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},P()())))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(w.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(F.a,{})})]})};s(33);var L=()=>j.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(a.jsx)(D,{project:e},P()())))})]}):null;s(34);var I=()=>d.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:d.map((e=>Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},P()())))})]}):null,K=s(18),B=s.n(K);s(35);var H=()=>{const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(B.a,{fontSize:"large"})})}):null};s(36);var M=()=>m?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(m),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;s(37);var T=()=>Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/seraph14/portfolio",className:"link footer__link",children:"Surafel Kassahun \xa92023. All rights reserved."})});s(38),s(39),s(40);var V=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},P()())))})]})};var J=()=>h.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Experiences"}),Object(a.jsx)("div",{className:"projects__grid",children:h.map((e=>Object(a.jsx)(V,{project:e},P()())))})]}):null;var R=()=>{const[{themeName:e}]=Object(n.useContext)(i);return Object(a.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(a.jsx)(N,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(y,{}),Object(a.jsx)(L,{}),Object(a.jsx)(J,{}),Object(a.jsx)(I,{}),Object(a.jsx)(M,{})]}),Object(a.jsx)(H,{}),Object(a.jsx)(T,{})]})};s(41);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(R,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b8bfdf11.chunk.js.map