(this["webpackJsonpbook-finder"]=this["webpackJsonpbook-finder"]||[]).push([[4],{174:function(e,t,c){},181:function(e,t,c){"use strict";c.r(t);var n=c(5),s=(c(1),c(175)),i=c(177),r=function(e){var t=e.content,c=e.type;return Object(n.jsx)(i.a,{htmlType:c,children:t})},a=c(16),j=c(180),o=function(e){return Object(n.jsx)(j.a,Object(a.a)({},e))},b=c(182),l=c(183),u=c(184),h=function(e){var t=e.onSubmit;return Object(n.jsx)("div",{children:Object(n.jsx)(s.b,{onSubmit:t,initialValues:{search:""},children:function(e){var t=e.setFieldValue,c=e.values.search;return Object(n.jsx)(b.a,{justify:"center",children:Object(n.jsx)(l.a,{span:12,children:Object(n.jsxs)(s.a,{className:"d-flex",children:[Object(n.jsx)(o,{type:"text",placeholder:"Search By Name",name:"search",value:c,onChange:function(e){return t("search",e.target.value)}}),Object(n.jsx)(r,{type:"submit",content:Object(n.jsx)(u.a,{})})]})})})}})})},d=c(27),x=c(32),O=(c(174),function(e){var t=e.book,c=t.imageLinks,s=t.description,i=t.title,r=t.publisher;return Object(n.jsxs)("div",{className:"d-flex book-search-item",children:[c&&Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:c.thumbnail,alt:"small-thumbnail-book"})}),Object(n.jsxs)("section",{children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Title:"})," ",i]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Publisher: "})," ",r]}),s&&Object(n.jsxs)("p",{className:"book-search-description",children:[Object(n.jsx)("strong",{children:"Description: "})," ",s]})]})]})});t.default=function(){var e,t=Object(d.b)(),c=Object(d.c)((function(e){return e.books})),s=c.data,i=c.error;return Object(n.jsxs)("div",{className:"book-list-container",children:[Object(n.jsx)("h1",{className:"text-center",children:"Book Finder"}),Object(n.jsx)(h,{onSubmit:function(e){t(Object(x.a)(e.search))}}),!i&&s&&Object(n.jsx)("div",{className:"mt-2",children:null===(e=s.items)||void 0===e?void 0:e.map((function(e,t){return Object(n.jsx)(O,{book:e.volumeInfo},t)}))})]})}}}]);
//# sourceMappingURL=4.dcccd3b8.chunk.js.map