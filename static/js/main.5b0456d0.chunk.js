(this["webpackJsonpguappjolotas-app"]=this["webpackJsonpguappjolotas-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Arroz","fullname":"Bebida de Arroz","type":"Bebidas","price":"12","quantity":1,"qualification":5,"description":"Bebida de Arroz, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/qO9M6uO.png","flavor":"https://i.imgur.com/oPzQzlM.png"},{"id":2,"name":"Caf\xe9","fullname":"Bebida de Caf\xe9","type":"Bebidas","price":"12","quantity":1,"qualification":5,"description":"Bebida de Caf\xe9, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/RnXw1nO.png","flavor":"https://i.imgur.com/HcOrdrb.png"},{"id":3,"name":"Champurrado","fullname":"Bebida de Champurrado","type":"Bebidas","price":"12","quantity":1,"qualification":5,"description":"Bebida de Champurrado, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/vhkoVxW.png","flavor":"https://i.imgur.com/TMTCSQz.png"},{"id":4,"name":"Chocolate","fullname":"Bebida de Chocolate","type":"Bebidas","price":"12","quantity":1,"qualification":5,"description":"Bebida de Chocolate, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","flavor":"https://i.imgur.com/KItQDnO.png","img":"https://i.imgur.com/xmwurpW.png"},{"id":5,"name":"Guajolota de Pasas","fullname":"Guajolota de Pasas","type":"Guajolota","price":"25","quantity":1,"qualification":5,"description":"Guajolota de Pasas, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/bBcnq7F.png","flavor":"https://i.imgur.com/7QpUnkg.png"},{"id":6,"name":"Guajolota de Pi\xf1a","fullname":"Guajolota de Pi\xf1a","type":"Guajolota","price":"25","quantity":1,"qualification":5,"description":"Guajolota de Pi\xf1a, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/flC801F.png","flavor":"https://i.imgur.com/ztZVnL4.png"},{"id":7,"name":"Guajolota Verde","fullname":"Guajolota Verde","type":"Guajolota","price":"25","quantity":1,"qualification":5,"description":"Guajolota Verde, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/0DGBXtN.png","flavor":"https://i.imgur.com/rEIkKn3.png"},{"id":8,"name":"Guajolota de Mole","fullname":"Guajolota de Mole","type":"Guajolota","price":"25","quantity":1,"qualification":5,"description":"Guajolota de Mole, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/DE27qyy.png","flavor":"https://i.imgur.com/ZMjh5sx.png"},{"id":9,"name":"Tamal de Mole","fullname":"Tamal de Mole","type":"Tamal","price":"14","quantity":1,"qualification":5,"description":"Tamal de Mole, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/L03NBIJ.png","flavor":"https://i.imgur.com/ZMjh5sx.png"},{"id":10,"name":"Tamal de Gua","fullname":"Tamal de Gua","type":"Tamal","price":"14","quantity":1,"qualification":5,"description":"Tamal de Gua, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/5K12hwX.png","flavor":"https://i.imgur.com/LU0QsJz.png"},{"id":11,"name":"Tamal de Pasas","fullname":"Tamal de Pasas","type":"Tamal","price":"14","quantity":1,"qualification":5,"description":"Tamal de Pasas, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/45s9tUU.png","flavor":"https://i.imgur.com/7QpUnkg.png"},{"id":12,"name":"Tamal de Pi\xf1a","fullname":"Tamal de Pi\xf1a","type":"Tamal","price":"14","quantity":1,"qualification":5,"description":"Tamal de Pi\xf1a, Preparada por unos de nuestros grandes Cocineros a Nivel Mundial de M\xe9xico.","img":"https://i.imgur.com/BIyKplw.png","flavor":"https://i.imgur.com/ztZVnL4.png"}]')},,,,function(e){e.exports=JSON.parse('[{"key":1,"id":"item1","label":"Todos","value":"All"},{"key":2,"id":"item2","label":"Bebidas","value":"Bebidas"},{"key":3,"id":"item3","label":"Guajolotas","value":"Guajolota"},{"key":4,"id":"item4","label":"Tamales","value":"Tamal"}]')},,,,,,,,,function(e,a,t){},,function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),c=t.n(i),n=t(20),s=t.n(n),r=(t(28),t(11)),o=t(4),l=t(15),d=t(1),j=Object(i.createContext)(),u=function(e){var a=Object(i.useState)([]),t=Object(o.a)(a,2),c=t[0],n=t[1],s=Object(i.useState)([]),u=Object(o.a)(s,2),m=u[0],b=u[1],p=Object(i.useState)(0),O=Object(o.a)(p,2),h=O[0],x=O[1],f=Object(i.useState)(!1),v=Object(o.a)(f,2),g=v[0],C=v[1],N=l;Object(i.useEffect)((function(){n(N?N.slice(0,50):[])}),[N]);Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("dataCart"));e&&b(e)}),[]),Object(i.useEffect)((function(){localStorage.setItem("dataCart",JSON.stringify(m))}),[m]),Object(i.useEffect)((function(){!function(){var e=m.reduce((function(e,a){return e+a.price*a.quantity}),0);x(e)}()}),[m]);var y=Object(i.useState)(0),P=Object(o.a)(y,2),T=P[0],q=P[1],M=8*T,k=Math.ceil(c.length/8),S=c.slice(M,M+8),D={productos:[c],menu:[g,C],handleTabs:function(e){var a=e.target.value;if("All"===a)n(N);else if("Bebidas"===a){var t=N.filter((function(e){return"Bebidas"===e.type}));n(t)}else if("Guajolota"===a){var i=N.filter((function(e){return"Guajolota"===e.type}));n(i)}else if("Tamal"===a){var c=N.filter((function(e){return"Tamal"===e.type}));n(c)}},handleSearch:function(e){var a=e.target.value;if(""===a)n(l);else if(a){var t=l.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));n(t)}},changePage:function(e){var a=e.selected;q(a)},pageCount:k,displayProducts:S,cart:[m,b],addCarrito:function(e){if(m.every((function(a){return a.id!==e}))){var a=c.filter((function(a){return a.id===e}));b([].concat(Object(r.a)(m),Object(r.a)(a)))}else alert("El producto se ha a\xf1adido al cart")},total:[h,x],removeProduct:function(e){window.confirm("\xbfQuieres Eliminar el Producto del Carrito?")&&(m.forEach((function(a,t){a.id===e&&(a.quantity=1,m.splice(t,1))})),b(Object(r.a)(m)))},reduce:function(e){m.forEach((function(a){a.id===e&&(1===a.quantity?a.quantity=1:a.quantity-=1),b(Object(r.a)(m))}))},increase:function(e){m.forEach((function(a){a.id===e&&(a.quantity+=1),b(Object(r.a)(m))}))}};return Object(d.jsx)(j.Provider,{value:D,children:e.children})},m=(t(30),t(9));function b(){var e=Object(i.useContext)(j),a=Object(o.a)(e.cart,1)[0],t=Object(o.a)(e.menu,2),c=t[0],n=t[1];return Object(d.jsx)("header",{className:"Header",children:Object(d.jsxs)("div",{className:"Header-Container",children:[Object(d.jsx)(m.b,{to:"/",children:Object(d.jsx)("img",{src:"https://i.imgur.com/vQ5rlbk.png",className:"Logo",alt:"Logo"})}),Object(d.jsxs)("div",{className:"Cart",onClick:function(){n(!c)},children:[Object(d.jsx)("img",{src:"https://i.imgur.com/tDyYFSx.png",alt:"Cart"}),Object(d.jsx)("span",{className:"Cart-Total",children:a.length})]})]})})}var p=t(2);var O=function(e){var a=e.item,t=Object(i.useContext)(j).addCarrito;return Object(d.jsxs)("div",{className:"Product",children:[Object(d.jsx)("div",{className:"Product-Add",onClick:function(){t(a.id)},children:Object(d.jsx)("p",{children:"+ Add"})}),Object(d.jsx)(m.b,{to:"/product/".concat(a.id),children:Object(d.jsx)("div",{className:"Image",children:Object(d.jsx)("img",{src:a.img,width:"100",alt:""})})}),Object(d.jsxs)("div",{className:"Product-Description",children:[Object(d.jsx)("h3",{children:a.name}),Object(d.jsxs)("p",{children:["S/. ",a.price]})]})]})};t(39);var h=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x,{})})};function x(){var e=Object(i.useContext)(j).displayProducts;return Object(d.jsx)("div",{className:"Container-Product",children:e.map((function(e){return Object(d.jsx)(O,{item:e},e.id)}))})}t(40);var f=t(23),v=t.n(f);var g=function(){var e=Object(i.useContext)(j),a=e.pageCount,t=e.changePage;return Object(d.jsx)(v.a,{previousLabel:"Anterior",nextLabel:"Siguiente",pageCount:a,onPageChange:t,containerClassName:"paginationBttns",previousLinkClassName:"previousBttn",nextLinkClassName:"nextBttn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})},C=(t(41),t(19));function N(){var e=Object(i.useContext)(j).handleTabs;return Object(d.jsx)("div",{className:"TabBar",children:Object(d.jsxs)("div",{className:"TabBar-Container",children:[C.map((function(a){return Object(d.jsx)("input",{type:"radio",name:"slider",id:a.id,value:a.value,onClick:e},a.key)})),Object(d.jsx)("nav",{children:C.map((function(e,a){return Object(d.jsxs)(i.Fragment,{children:[Object(d.jsx)("label",{htmlFor:e.id,className:e.id,children:e.label},e.id),Object(d.jsx)("div",{className:"slider"})]},e+a)}))})]})})}function y(){return Object(d.jsxs)("div",{className:"Tabs",children:[Object(d.jsx)("h3",{className:"Title",children:"Selecci\xf3n de Productos:"}),Object(d.jsx)(N,{})]})}t(42);var P=t(7);function T(){var e=Object(i.useContext)(j).handleSearch;return Object(d.jsxs)("div",{className:"Search",children:[Object(d.jsx)("div",{className:"Header-Search",children:Object(d.jsx)("i",{className:"Icon",children:Object(d.jsx)(P.e,{})})}),Object(d.jsx)("input",{className:"Header-Input",type:"text",placeholder:"Sabor de guajolota, bebida...",onChange:e}),Object(d.jsx)("span",{}),Object(d.jsx)("button",{className:"Header-Voice",children:Object(d.jsx)("i",{className:"Icon",children:Object(d.jsx)(P.g,{})})})]})}t(43);function q(){return Object(d.jsx)("div",{className:"Hero",children:Object(d.jsx)("div",{className:"Hero-Container",children:Object(d.jsx)("h1",{children:"Nada como una Guajolota para empezar el d\xeda"})})})}t(44);function M(){var e=Object(i.useContext)(j),a=Object(o.a)(e.menu,2),t=a[0],c=a[1],n=Object(o.a)(e.total,1)[0],s=Object(o.a)(e.cart,1)[0],r=e.removeProduct,l=e.increase,u=e.reduce,m=t?"Background Show":"Background None",b=t?"Shopping-Cart Show":"Shopping-Cart None";return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:m,children:Object(d.jsxs)("div",{className:b,children:[Object(d.jsxs)("div",{className:"Cart-Header",children:[Object(d.jsx)("div",{className:"Cart-Header-Close",onClick:function(){c(!t)},children:Object(d.jsx)("div",{className:"Icon",children:Object(d.jsx)(P.c,{set:"bold",primaryColor:"black"})})}),Object(d.jsx)("div",{className:"Cart-Header-Title",children:Object(d.jsx)("h2",{className:"Cart-Title",children:"Carrito de Compras"})})]}),0===s.length?Object(d.jsx)("h2",{className:"Cart-Title-Msg",children:"Carro Vac\xedo"}):Object(d.jsx)("div",{className:"Cart-Container",children:s.map((function(e){return Object(d.jsxs)("div",{className:"Cart-Item",children:[Object(d.jsxs)("div",{className:"Cart-Content",children:[Object(d.jsx)("div",{className:"Cart-Img",children:Object(d.jsx)("img",{src:e.img,alt:e.title})}),Object(d.jsxs)("div",{className:"Cart-Info",children:[Object(d.jsx)("h3",{className:"Cart-Info-Title",children:e.name}),Object(d.jsxs)("p",{className:"Cart-Info-Price",children:["Costo: ",Object(d.jsxs)("span",{children:["S/. ",e.price," "]})]})]})]}),Object(d.jsxs)("div",{className:"Cart-Options",children:[Object(d.jsxs)("div",{className:"Cart-Count",children:[Object(d.jsx)("div",{className:"Icon",onClick:function(){return u(e.id)},children:Object(d.jsx)(P.a,{set:"bold",primaryColor:"black"})}),Object(d.jsx)("p",{className:"Cart-quantity",children:e.quantity}),Object(d.jsx)("div",{className:"Icon",onClick:function(){return l(e.id)},children:Object(d.jsx)(P.b,{set:"bold",primaryColor:"black"})})]}),Object(d.jsx)("div",{className:"Cart-Remove-Item",onClick:function(){return r(e.id)},children:Object(d.jsx)("div",{className:"Icon",children:Object(d.jsx)(P.d,{set:"bold",primaryColor:"white"})})})]})]},e.id)}))}),Object(d.jsxs)("div",{className:"Cart-Footer",children:[Object(d.jsxs)("h3",{className:"Cart-Total",children:["Total a Pagar: S/. ",n]}),Object(d.jsx)("div",{className:"Cart-Options-Total",children:Object(d.jsx)("button",{className:"button",onClick:function(){return alert("Su Producto se ha Enviado Correctamente")},children:"Pagar"})})]})]})})})}var k=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(q,{}),Object(d.jsx)(T,{}),Object(d.jsx)(y,{}),Object(d.jsx)(h,{}),Object(d.jsx)(g,{}),Object(d.jsx)(M,{})]})};t(45),t(46);var S=function(e){var a=e.item;return Object(d.jsx)("div",{className:"Product-Flavor-Related",children:Object(d.jsx)(m.b,{to:"/product/".concat(a.id),children:Object(d.jsx)("img",{src:a.flavor,width:"50",alt:""})})})};var D=function(e){var a=e.products,t=Object(i.useContext)(j).displayProducts.filter((function(e){return e.type===a.type}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{className:"Detail-Products-Relevant",children:"Sabor"}),Object(d.jsxs)("p",{className:"Detail-Description-Relevant",children:["Escoge el sabor de ",a.type," que m\xe1s te guste..."]}),Object(d.jsx)("div",{className:"Product-Related",children:t.map((function(e){return Object(d.jsx)(S,{item:e},e.id)}))})]})};var I=function(){var e=Object(i.useContext)(j),a=Object(o.a)(e.productos,1)[0],t=Object(p.f)(),c=e.removeProduct,n=Object(i.useState)([]),s=Object(o.a)(n,2),r=s[0],l=s[1],u=e.addCarrito,m=e.increase,b=e.reduce,O=0;return Object(i.useEffect)((function(){a.forEach((function(e){e.id===parseInt(t.id)&&l(e)}))}),[t.id,a]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"Details-Product",children:Object(d.jsxs)("div",{className:"Detail-Container",children:[Object(d.jsxs)("div",{className:"Detail-Price",children:[Object(d.jsx)("div",{className:"Detail-Img",children:Object(d.jsx)("img",{src:r.img,width:"100",alt:""})}),Object(d.jsxs)("div",{className:"Detail-Description",children:[Object(d.jsx)("h3",{className:"Detail-Price-Title",children:Object(d.jsx)("p",{children:r.fullname})}),Object(d.jsxs)("p",{className:"Detail-Price-Description",children:["Costo: ",Object(d.jsxs)("span",{children:["S/. ",r.price]})]})]}),Object(d.jsx)("div",{className:"Detail-Price-Quiantity",children:Object(d.jsxs)("div",{className:"Detail-Price-Count",children:[Object(d.jsx)("div",{className:"Icon",onClick:function(){b(r.id)},children:Object(d.jsx)(P.a,{set:"bold",primaryColor:"black"})}),Object(d.jsx)("p",{className:"Detail-Quantity",children:r.quantity}),Object(d.jsx)("div",{className:"Icon",onClick:function(){m(r.id)},children:Object(d.jsx)(P.b,{set:"bold",primaryColor:"black"})})]})})]}),Object(d.jsxs)("div",{className:"Detail-Content",children:[Object(d.jsxs)("div",{className:"Detail-Info",children:[0===r.qualification?"":Object(d.jsxs)("div",{className:"Tags-Flover",children:[Object(d.jsx)("p",{className:"Qualification-Title",children:"Puntuaci\xf3n:"}),Object(d.jsx)("div",{className:"Tags-Qualification",children:a.map((function(e){var a=e.id;return O<5&&r.qualification?(O+=1,Object(d.jsx)(P.f,{set:"bold",primaryColor:"#fcb235"},a)):null}))})]}),0===r.type?"":Object(d.jsxs)("div",{className:"Tags-Flover",children:[Object(d.jsx)("p",{className:"Tags-Flover-Title",children:"Tags:"}),Object(d.jsx)("div",{className:"Detail-Flavor",children:Object(d.jsx)("span",{children:r.type})})]}),Object(d.jsx)("h3",{className:"Detail-Info-Title",children:"Descripci\xf3n:"}),Object(d.jsx)("p",{className:"Detail-Info-Description",children:r.description})]}),Object(d.jsxs)("div",{className:"Detail-Options",children:[Object(d.jsx)("button",{onClick:function(){u(r.id)},children:"A\xf1adir al Carrito"}),Object(d.jsx)("div",{className:"Detail-Remove-Item",onClick:function(){c(r.id)},children:Object(d.jsx)("div",{className:"Icon",children:Object(d.jsx)(P.d,{set:"bold",primaryColor:"white"})})})]})]})]})}),Object(d.jsx)(M,{}),Object(d.jsx)(D,{products:r})]})};t(47);function B(e){var a=e.children;return Object(d.jsx)("div",{className:"Wrapper",children:a})}var G=function(){return Object(d.jsx)(B,{children:Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/",exact:!0,component:k}),Object(d.jsx)(p.a,{path:"/product/:id",exact:!0,component:I})]})})};function w(){return Object(d.jsx)(u,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(G,{})]})})})}s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}],[[48,1,2]]]);
//# sourceMappingURL=main.5b0456d0.chunk.js.map