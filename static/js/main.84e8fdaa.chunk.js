(this["webpackJsonpapp-react-site"]=this["webpackJsonpapp-react-site"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),i=n.n(s),a=n(7),o=n(4),d=n(0),j=Object(c.createContext)({});var l=function(e){var t=e.children,n=Object(c.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(d.jsx)(j.Provider,{value:{todos:s,setTodos:i},children:t})};var u=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(c.useContext)(j).setTodos;return Object(d.jsxs)("form",{onSubmit:function(t){var n;t.preventDefault(),i((function(e){return[].concat(Object(a.a)(e),[{id:1,description:r,done:!1}])})),s(""),e&&(null===(n=e.current)||void 0===n||n.focus())},children:[Object(d.jsxs)("div",{className:"mb-3 mt-3",children:[Object(d.jsx)("label",{htmlFor:"desc1",className:"form-label",children:"Descri\xe7\xe3o:"}),Object(d.jsx)("input",{ref:e,type:"text",name:"description",className:"form-control",id:"desc1",placeholder:"descri\xe7\xe3o",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Adicionar"})})]})};var b=function(){var e=Object(c.useContext)(j).todos;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:["Quantidade: ",e&&e.length]}),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:e&&e.map((function(e,t){return Object(d.jsx)("li",{children:e.description},t)}))})})]})};var O=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u,{}),Object(d.jsx)(b,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(13);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l,{children:Object(d.jsx)(O,{})})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.84e8fdaa.chunk.js.map