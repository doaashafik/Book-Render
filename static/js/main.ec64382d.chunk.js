(this["webpackJsonpbook-finder"]=this["webpackJsonpbook-finder"]||[]).push([[0],{143:function(e,t,n){},171:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var r=n(4),c=(n(0),n(37)),a=n.n(c),s=n(27),i=n(50),o=n(47),u=o.BOOK_SEARCH_RECIEVE,j=o.ERROR_REQUESTS,d={},b=n(52).IS_LOADING_RECIEVE,O=Object(s.combineReducers)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{data:t.payload});case j:return Object(i.a)(Object(i.a)({},e),{},{error:!0});default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}}}),l=n(97),p=n(117),h=n(15),f=n.n(h),x=n(34),v=n(47),E=n(98),S=n(99),m=n.n(S),R=n(52),_=function(e){return{type:R.IS_LOADING,payload:e}},y=m.a.create({baseURL:"https://www.googleapis.com/books/v1/volumes?",params:{key:"AIzaSyB9HREZ2R-gIbdDSh0arzkvbFmDqS6YLSc"}});y.interceptors.response.use((function(e){return function(e){return G.dispatch(_(!1)),e}(e)}),(function(e){return t=e,G.dispatch(_(!1)),t;var t})),y.interceptors.request.use((function(e){return function(e){return G.dispatch(_(!0)),e}(e)}));var I=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.get("/",{params:{q:"".concat(JSON.stringify(t))}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=f.a.mark(C),g=f.a.mark(w);function C(e){var t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(x.b)(I,e.payload);case 3:return t=n.sent,n.next=6,Object(x.c)((r=t.data,{type:v.BOOK_SEARCH_RECIEVE,payload:r}));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(x.c)({type:v.ERROR_REQUESTS});case 12:case"end":return n.stop()}var r}),k,null,[[0,8]])}function w(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)(v.BOOK_SEARCH,C);case 2:case"end":return e.stop()}}),g)}var N=f.a.mark(L),A=f.a.mark(B);function L(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.c)((n=e.payload,{type:R.IS_LOADING_RECIEVE,payload:n}));case 2:case"end":return t.stop()}var n}),N)}function B(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)(R.IS_LOADING,L);case 2:case"end":return e.stop()}}),A)}var D=f.a.mark(V);function V(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)([w(),B()]);case 2:case"end":return e.stop()}}),D)}var H=Object(p.a)(),T=Object(l.composeWithDevTools)(Object(s.applyMiddleware)(H)),U=Object(s.createStore)(O,T);H.run(V);var G=U,K=(n(143),n(114)),Q=n(10),q=n(80),F=n(116),J=function(e){var t=e.content,n=e.type;return Object(r.jsx)(F.a,{htmlType:n,children:t})},z=n(177),M=function(e){return Object(r.jsx)(z.a,Object(i.a)({},e))},P=n(178),W=n(181),Y=n(180),Z=function(e){var t=e.onSubmit;return Object(r.jsx)("div",{children:Object(r.jsx)(q.b,{onSubmit:t,initialValues:{search:""},children:function(e){var t=e.setFieldValue,n=e.values.search;return Object(r.jsx)(P.a,{justify:"center",children:Object(r.jsx)(W.a,{span:12,children:Object(r.jsxs)(q.a,{className:"d-flex",children:[Object(r.jsx)(M,{type:"text",placeholder:"Search By Name",name:"search",value:n,onChange:function(e){return t("search",e.target.value)}}),Object(r.jsx)(J,{type:"submit",content:Object(r.jsx)(Y.a,{})})]})})})}})})},X=n(59),$=(n(171),function(e){var t=e.book,n=t.imageLinks,c=t.description,a=t.title,s=t.publisher;return Object(r.jsxs)("div",{className:"d-flex book-search-item",children:[n&&Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:n.thumbnail,alt:"small-thumbnail-book"})}),Object(r.jsxs)("section",{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Title:"})," ",a]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Publisher: "})," ",s]}),c&&Object(r.jsxs)("p",{className:"book-search-description",children:[Object(r.jsx)("strong",{children:"Description: "})," ",c]})]})]})}),ee=function(){var e,t=Object(X.b)(),n=Object(X.c)((function(e){return e.books})),c=n.data,a=n.error;return Object(r.jsxs)("div",{className:"book-list-container",children:[Object(r.jsx)("h1",{className:"text-center",children:"Book Finders"}),Object(r.jsx)(Z,{onSubmit:function(e){var n;t((n=e.search,{type:v.BOOK_SEARCH,payload:n}))}}),!a&&c&&Object(r.jsx)("div",{className:"mt-2",children:null===(e=c.items)||void 0===e?void 0:e.map((function(e,t){return Object(r.jsx)($,{book:e.volumeInfo},t)}))})]})},te=n(16),ne=Object(te.a)();function re(){return Object(r.jsx)(K.a,{history:ne,children:Object(r.jsx)("div",{children:Object(r.jsx)(Q.c,{children:Object(r.jsx)(Q.a,{exact:!0,path:"/",component:ee})})})})}var ce=n(179),ae=(n(173),function(){return Object(r.jsx)("div",{className:"loading-content",children:Object(r.jsx)("div",{className:"loading-icon",children:Object(r.jsx)(ce.a,{})})})});var se=function(){return Object(r.jsxs)("div",{children:[G.getState().isLoading&&Object(r.jsx)(ae,{}),Object(r.jsx)(re,{})]})};a.a.render(Object(r.jsx)(X.a,{store:G,children:Object(r.jsx)(se,{})}),document.getElementById("root"))},47:function(e,t,n){"use strict";n.r(t),n.d(t,"BOOK_SEARCH",(function(){return r})),n.d(t,"BOOK_SEARCH_RECIEVE",(function(){return c})),n.d(t,"ERROR_REQUESTS",(function(){return a})),n.d(t,"SUCCESS_REQUESTS",(function(){return s}));var r="BOOK_SEARCH",c="BOOK_SEARCH_RECIEVE",a="ERROR_REQUESTS",s="SUCCESS_REQUESTS"},52:function(e,t,n){"use strict";n.r(t),n.d(t,"IS_LOADING",(function(){return r})),n.d(t,"IS_LOADING_RECIEVE",(function(){return c}));var r="IS_LOADING",c="IS_LOADING_RECIEVE"}},[[174,1,2]]]);
//# sourceMappingURL=main.ec64382d.chunk.js.map