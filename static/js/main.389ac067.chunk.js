(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var a=c(21),s=c.n(a),n=c(7),i=(c(30),c(31),c(2)),b=c(22),j=c.n(b),l=(c(0),c(3)),r=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},d=function(e){var t=e.tabs,c=Object(i.q)().tabId,a=t.find((function(e){return e.id===c}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{"data-cy":"Tab",className:e.id===c?"is-active":"",children:Object(l.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})},o=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},h=(c(33),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),x=function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},O=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("ul",{className:"container",children:Object(l.jsxs)("li",{className:"navbar-brand",children:[Object(l.jsx)(n.c,{to:"/",className:x,children:"Home"}),Object(l.jsx)(n.c,{to:"/tabs",className:x,children:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("ul",{className:"container",children:Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(r,{})}),Object(l.jsxs)(i.b,{path:"/tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(d,{tabs:h})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(d,{tabs:h})})]}),Object(l.jsx)(i.b,{path:"/home",element:Object(l.jsx)(i.a,{to:"/"})}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(o,{})})]})})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.389ac067.chunk.js.map