(this["webpackJsonpshooping-cart"]=this["webpackJsonpshooping-cart"]||[]).push([[7],{244:function(t,e,c){"use strict";var r=c(32),n=c(4),a=c(82);e.a=function(t){var e=t.content,c=t.type;return Object(n.jsx)(a.a,Object(r.a)(Object(r.a)({},t),{},{htmlType:c,children:e}))}},280:function(t,e,c){},315:function(t,e,c){"use strict";c.r(e);var r=c(242),n=c(243),a=c(261),i=c(260),o=c(4),s=c(0),d=c.n(s),u=c(244),j=c(85),p=c(312),l=(c(280),c(54)),b=function(t){var e=t.product,c=t.addToCart,r=Object(l.d)((function(t){return t.cart})).items.filter((function(t){return t.id==e.id})).length>0,n=e.price,a=e.image,i=e.category,s=e.title,d=e.id;return Object(o.jsxs)(p.a,{cover:Object(o.jsx)(j.b,{to:"/products/".concat(d),className:"product-image",children:Object(o.jsx)("img",{src:a,alt:"product-image"})}),bordered:!0,style:{width:300},children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Name: "})," ",s]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Category: "})," ",i]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Price: "}),n]}),Object(o.jsx)(u.a,{content:"Add To Cart",type:"button",disabled:r,onClick:c})]})},h=c(93),O=c(72),f=function(t){Object(a.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={disable:!1},t.addToCart=function(e){t.props.addItem(e)},t}return Object(n.a)(c,[{key:"componentDidMount",value:function(){this.props.getProducts()}},{key:"render",value:function(){var t=this,e=this.props,c=(e.items,e.products);return Object(o.jsx)("div",{className:"product-list-container",children:c&&Object(o.jsx)("div",{className:"mt-2 d-flex flex-wrap",children:c.map((function(e,c){return Object(o.jsx)(b,{addToCart:function(){return t.addToCart(e)},product:e},"".concat(c,"-id"))}))})})}}]),c}(d.a.Component);e.default=Object(l.b)((function(t){return{products:t.products.data,items:t.cart.items}}),(function(t){return{getProducts:function(){return t(Object(h.c)())},addItem:function(e){return t(Object(O.c)(e))}}}))(f)}}]);
//# sourceMappingURL=7.79b41056.chunk.js.map