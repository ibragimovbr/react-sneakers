(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{13:function(e,t,c){e.exports={overlay:"Drawer_overlay__1FIzz",drawer:"Drawer_drawer__1BWOh",items:"Drawer_items__BVUwn",overlayVisible:"Drawer_overlayVisible__eIv3y",lockBody:"Drawer_lockBody__24oaF"}},17:function(e,t,c){e.exports={card:"Card_card__239KR",plus:"Card_plus__SP_oN",favorite:"Card_favorite__3b28L"}},33:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(27),s=c.n(n),i=(c(33),c(8)),o=c(10),l=c(4),d=c.n(l),j=c(9),u=c(3),b=c(6),m=c.n(b),x=c(2),f=c(13),h=c.n(f),p=a.a.createContext({}),O=function(){var e=a.a.useContext(p),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},v=c(1),g=function(e){var t=e.image,c=e.title,r=e.description,n=a.a.useContext(p).setCartOpened;return Object(v.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(v.jsx)("img",{src:t,alt:"empty-cart",className:"mb-20",width:"120px"}),Object(v.jsx)("h2",{children:c}),Object(v.jsx)("p",{className:"opacity-6",children:r}),Object(v.jsxs)("button",{className:"greenButton",onClick:function(){return n(!1)},children:[Object(v.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},k=function(){return new Promise((function(e){return setTimeout(e,1e3)}))};var N=function(e){var t=e.onClose,c=e.items,r=void 0===c?[]:c,n=e.onRemove,s=e.opened,i=O(),o=i.cartItems,l=i.setCartItems,b=i.totalPrice,x=a.a.useState(null),f=Object(u.a)(x,2),p=f[0],N=f[1],w=a.a.useState(!1),y=Object(u.a)(w,2),C=y[0],I=y[1],_=a.a.useState(!1),S=Object(u.a)(_,2),A=S[0],B=S[1],D=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),e.next=4,m.a.post("https://61fce5c6f62e220017ce41fd.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,N(c.id),I(!0),l([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,m.a.delete("https://61fce5c6f62e220017ce41fd.mockapi.io/cart/".concat(a.id));case 14:return e.next=16,k;case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 :(");case 24:B(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"".concat(h.a.overlay," ").concat(s&&h.a.overlayVisible),children:[s&&document.querySelector("body").classList.add(h.a.lockBody),Object(v.jsxs)("div",{className:h.a.drawer,children:[Object(v.jsxs)("h2",{className:"d-flex mb-30 justify-between",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(v.jsx)("img",{src:"img/btn-remove.svg",alt:"Remove",className:"removeBtn cu-p",onClick:t})]}),r.length>0?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:h.a.items,children:r.map((function(e){return Object(v.jsxs)("div",{className:"cartItem d-flex aligh-items mb-20",children:[Object(v.jsx)("div",{className:"cartItemImg",style:{backgroundImage:"url(".concat(e.imageUrl,")")}}),Object(v.jsxs)("div",{className:"mr-20 flex",children:[Object(v.jsx)("p",{className:"mb-5",children:e.title}),Object(v.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(v.jsx)("img",{src:"img/btn-remove.svg",alt:"Remove",className:"removeBtn",onClick:function(){return n(e.id)}})]},e.id)}))}),Object(v.jsxs)("div",{className:"cartTotalBlock",children:[Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{className:"d-flex",children:[Object(v.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(v.jsx)("div",{}),Object(v.jsxs)("b",{children:[b," \u0440\u0443\u0431."]})]}),Object(v.jsxs)("li",{className:"d-flex",children:[Object(v.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%: "}),Object(v.jsx)("div",{}),Object(v.jsxs)("b",{children:[.05*b," \u0440\u0443\u0431."]})]})]}),Object(v.jsxs)("button",{disabled:A,className:"greenButton",onClick:D,children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(v.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(v.jsx)(g,{image:C?"img/complete-order.jpg":"img/empty-cart.jpg",title:C?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:C?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(p," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})},w=c(11);var y=function(e){var t=O().totalPrice;return Object(v.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(v.jsx)(w.b,{to:"/react-sneakers/",children:Object(v.jsxs)("div",{className:"d-flex aligh-center",children:[Object(v.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"logo"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(v.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(v.jsxs)("ul",{className:"headerRight d-flex",children:[Object(v.jsxs)("li",{className:"mr-30 cu-p",onClick:e.onClickCart,children:[Object(v.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"cart"}),Object(v.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(v.jsx)("li",{className:"mr-20 cu-p",children:Object(v.jsx)(w.b,{to:"/react-sneakers/favorites",children:Object(v.jsx)("img",{width:18,height:18,src:"img/like.svg",alt:"like"})})}),Object(v.jsx)("li",{children:Object(v.jsx)(w.b,{to:"/react-sneakers/orders",children:Object(v.jsx)("img",{width:18,height:18,src:"img/user.svg",alt:"user"})})})]})]})},C=c(17),I=c.n(C),_=c(28),S=function(e){return Object(v.jsxs)(_.a,Object(i.a)(Object(i.a)({speed:2,width:180,height:253.35,viewBox:"0 0 150 187",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),{},{children:[Object(v.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"90"}),Object(v.jsx)("rect",{x:"0",y:"107",rx:"3",ry:"3",width:"150",height:"15"}),Object(v.jsx)("rect",{x:"0",y:"126",rx:"3",ry:"3",width:"93",height:"15"}),Object(v.jsx)("rect",{x:"0",y:"163",rx:"8",ry:"8",width:"80",height:"24"}),Object(v.jsx)("rect",{x:"118",y:"155",rx:"8",ry:"8",width:"32",height:"32"})]}))};var A=function(e){var t=e.id,c=e.onFavorite,r=e.onPlus,n=e.title,s=e.imageUrl,i=e.price,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,b=a.a.useContext(p).isItemAdded,m=a.a.useState(l),x=Object(u.a)(m,2),f=x[0],h=x[1],O={id:t,parentID:t,title:n,imageUrl:s,price:i};return Object(v.jsx)("div",{className:I.a.card,children:j?Object(v.jsx)(S,{}):Object(v.jsxs)(v.Fragment,{children:[c&&Object(v.jsx)("div",{className:I.a.favorite,children:Object(v.jsx)("img",{src:f?"img/liked-heart.svg":"img/unliked-heart.svg",onClick:function(){c(O),h(!f)},alt:"Unliked"})}),Object(v.jsx)("img",{width:"100%",height:135,src:s,alt:"sneaker"}),Object(v.jsx)("h5",{children:n}),Object(v.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(v.jsxs)("div",{className:"d-flex flex-column",children:[Object(v.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(v.jsxs)("b",{children:[i," \u0440\u0443\u0431."]})]}),r&&Object(v.jsx)("img",{className:I.a.plus,src:b(t)?"img/btn-checked.svg":"img/plus-btn.svg",onClick:function(){r(O)},alt:"plus"})]})]})})};var B=function(){var e=a.a.useContext(p),t=e.favorites,c=e.onAddToFavorite;return Object(v.jsxs)("div",{className:"content p-40",children:[Object(v.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(v.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(v.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e){return Object(v.jsx)(A,Object(i.a)({favorited:!0,onFavorite:c},e),e.id)}))})]})};var D=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,l=e.isLoading;return Object(v.jsxs)("div",{className:"content p-40",children:[Object(v.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(v.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(v.jsxs)("div",{className:"search-block",children:[Object(v.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(v.jsx)("img",{src:"img/btn-remove.svg",alt:"Clear",className:"clear cu-p",onClick:function(){return r("")}}),Object(v.jsx)("input",{type:"text",value:c,onChange:a,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(v.jsx)("div",{className:"d-flex flex-wrap",children:(l?Object(o.a)(Array(12)):t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))).map((function(e,t){return Object(v.jsx)(A,Object(i.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:l},e),t)}))})]})};var F=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),c=t[0],r=t[1],n=a.a.useState(!0),s=Object(u.a)(n,2),l=s[0],b=s[1];return a.a.useEffect((function(){Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://61fce5c6f62e220017ce41fd.mockapi.io/orders");case 3:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),b(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437\u044b :(");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(v.jsxs)("div",{className:"content p-40",children:[Object(v.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(v.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(v.jsx)("div",{className:"d-flex flex-wrap",children:(l?Object(o.a)(Array(12)):c).map((function(e,t){return Object(v.jsx)(A,Object(i.a)({loading:l},e),t)}))})]})};var P=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(u.a)(n,2),l=s[0],b=s[1],f=a.a.useState([]),h=Object(u.a)(f,2),O=h[0],g=h[1],k=a.a.useState(!1),w=Object(u.a)(k,2),C=w[0],I=w[1],_=a.a.useState(""),S=Object(u.a)(_,2),A=S[0],P=S[1],T=a.a.useState(!0),V=Object(u.a)(T,2),R=V[0],L=V[1];a.a.useEffect((function(){try{var e=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,Promise.all([m.a.get("https://61fce5c6f62e220017ce41fd.mockapi.io/cart"),m.a.get("https://61fce5c6f62e220017ce41fd.mockapi.io/favorite"),m.a.get("https://61fce5c6f62e220017ce41fd.mockapi.io/items")]);case 3:t=e.sent,c=Object(u.a)(t,3),a=c[0],n=c[1],s=c[2],L(!1),b(a.data),g(n.data),r(s.data);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 :(")}}),[]);var U=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=l.find((function(e){return Number(e.parentID)===Number(t.id)})))){e.next=8;break}return b((function(e){return e.filter((function(e){return Number(e.parentID)!==Number(t.id)}))})),e.next=6,m.a.delete("https://61fce5c6f62e220017ce41fd.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return b((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,m.a.post("https://61fce5c6f62e220017ce41fd.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,b((function(e){return e.map((function(e){return e.parentID===a.parentID?Object(i.a)(Object(i.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 :(");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b((function(e){return e.filter((function(e){return Number(e.id)!==Number(t)}))})),e.next=4,m.a.delete("https://61fce5c6f62e220017ce41fd.mockapi.io/cart/".concat(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u0430 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b :(");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!O.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=7;break}return g((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=5,m.a.delete("https://61fce5c6f62e220017ce41fd.mockapi.io/favorite/".concat(t.id));case 5:e.next=12;break;case 7:return e.next=9,m.a.post("https://61fce5c6f62e220017ce41fd.mockapi.io/favorite",t);case 9:c=e.sent,r=c.data,g((function(e){return[].concat(Object(o.a)(e),[r])}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438 :(");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(p.Provider,{value:{items:c,cartItems:l,favorites:O,isItemAdded:function(e){return l.some((function(t){return Number(t.parentID)===Number(e)}))},onAddToFavorite:z,onAddToCart:U,setCartOpened:I,setCartItems:b},children:Object(v.jsxs)("div",{className:"wrapper clear",children:[Object(v.jsx)(N,{onClose:function(){return I(!1)},items:l,onRemove:E,opened:C}),Object(v.jsx)(y,{onClickCart:function(){return I(!0)}}),Object(v.jsxs)(x.c,{children:[Object(v.jsx)(x.a,{path:"/react-sneakers/",exact:!0,element:Object(v.jsx)(D,{items:c,cartItems:l,searchValue:A,setSearchValue:P,onChangeSearchInput:function(e){P(e.target.value)},onAddToFavorite:z,onAddToCart:U,isLoading:R})}),Object(v.jsx)(x.a,{path:"/react-sneakers/favorites",exact:!0,element:Object(v.jsx)(B,{})}),Object(v.jsx)(x.a,{path:"/react-sneakers/orders",exact:!0,element:Object(v.jsx)(F,{})})]})]})})};c(54);s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(P,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.5a0ee435.chunk.js.map