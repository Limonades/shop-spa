(this["webpackJsonpshop-spa"]=this["webpackJsonpshop-spa"]||[]).push([[0],{31:function(e,t,r){e.exports=r.p+"static/media/logo.76518c38.svg"},32:function(e,t,r){e.exports=r.p+"static/media/caret.53e58f1a.svg"},39:function(e,t,r){e.exports=r(79)},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){},48:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){},51:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},77:function(e,t,r){},79:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(17),s=r.n(a),i=r(23),o=r(16),l=(r(44),r(45),r(2)),u=r(3),p=r(5),m=r(4),d=r(6),f=(r(46),r(31)),h=r.n(f),b=r(32),O=r.n(b),_=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.createElement("header",{className:"header"},n.createElement("div",{className:"header__container container"},n.createElement("a",{className:"header__logo",href:"/"},n.createElement("img",{src:h.a,alt:"site-logo"})),n.createElement("div",{className:"header__cart-wrap"},n.createElement("button",{className:"header__cart"},n.createElement("img",{src:O.a,alt:"caret-icon"})),n.createElement("div",{className:"header__cart-counter"},n.createElement("span",null,"3")))))}}]),t}(n.Component),g=(r(47),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.createElement("main",null,n.createElement(v,null))}}]),t}(n.Component)),v=(r(48),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.createElement("section",{className:"products"},n.createElement("div",{className:"products__container container"},n.createElement("div",{className:"products__nav-wrap"},n.createElement(x,null),n.createElement(A,null)),n.createElement("div",{className:"products__products-wrap"},n.createElement(R,null))))}}]),t}(n.Component)),j=(r(49),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement(_,null),n.createElement(g,null))}}]),t}(n.Component)),E=(r(50),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement("h2",null,"PRODUCT-PAGE"))}}]),t}(n.Component)),y=(r(51),r(25)),k=r.n(y),N=r(33),w="@@products/is-fetching",C=new(function(){function e(){Object(l.a)(this,e),this.defaultHeaders=new Headers({"Content-Type":"application/json",Accept:"application/json"})}return Object(u.a)(e,[{key:"get",value:function(e,t){var r={method:"GET",headers:this.defaultHeaders};return fetch("".concat("/shop-spa","/").concat(e,"/"),r)}}]),e}()),I=function(e){return{type:w,payload:e}},T=function(e){return{type:"@@products/fetch-success",payload:e}},P=function(e){return{type:"@@products/fetch-error",payload:e}},S=r(14),D=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={activeId:"reset"},r.handleClick=function(e){var t=r.props,n=t.filter,c=t.filterReset,a=e.target.dataset.id;if(r.setState({activeId:a}),"reset"===a)return c();n(a)},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.activeId;return n.createElement("nav",{className:"products-nav"},n.createElement("ul",{className:"products-nav__list"},n.createElement("li",{className:"products-nav__item"},n.createElement("button",{className:"reset"===e?"products-nav__link --active":"products-nav__link","data-id":"reset",type:"button",onClick:this.handleClick},"\u0412\u0441\u0435")),n.createElement("li",{className:"products-nav__item"},n.createElement("button",{className:"3"===e?"products-nav__link --active":"products-nav__link",type:"button","data-id":"3",onClick:this.handleClick},"\u0420\u0443\u0431\u0430\u0448\u043a\u0438")),n.createElement("li",{className:"products-nav__item"},n.createElement("button",{className:"2"===e?"products-nav__link --active":"products-nav__link",type:"button","data-id":"2",onClick:this.handleClick},"\u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"))))}}]),t}(n.Component),x=Object(S.b)(null,(function(e){return{filter:function(t){return e(function(e){return{type:"@@products/filter-products",payload:e}}(t))},filterReset:function(){return e({type:"@@products/filter-reset"})}}}))(D),F=(r(57),function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={isOpen:!1,activeSorting:null},r.handleToggle=function(){r.setState({isOpen:!r.state.isOpen})},r.handleClick=function(e){var t=e.target.name;(0,r.props.sortProducts)(t),r.setState({activeSorting:t})},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isOpen,r=e.activeSorting;return n.createElement("div",{className:"products-sorter"},n.createElement("div",{className:"products-sorter__toggle-wrap"},n.createElement("button",{className:t?"products-sorter__toggle --open":"products-sorter__toggle",onClick:this.handleToggle},n.createElement("span",{className:"products-sorter__toggle-txt"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),n.createElement("i",{className:"products-sorter__toggle-icon icon-caret-down"})),n.createElement("ul",{className:"products-sorter__list"},n.createElement("li",{className:"products-sorter__item"},n.createElement("button",{className:"priceDown"===r?"products-sorter__btn --active":"products-sorter__btn",name:"priceDown",onClick:this.handleClick},"\u041e\u0442 \u0434\u043e\u0440\u043e\u0433\u0438\u0445 \u043a \u0434\u0435\u0448\u0435\u0432\u044b\u043c")),n.createElement("li",{className:"products-sorter__item"},n.createElement("button",{className:"priceUp"===r?"products-sorter__btn --active":"products-sorter__btn",name:"priceUp",onClick:this.handleClick},"\u041e\u0442 \u0434\u0435\u0448\u0435\u0432\u044b\u0445 \u043a \u0434\u043e\u0440\u043e\u0433\u0438\u043c")),n.createElement("li",{className:"products-sorter__item"},n.createElement("button",{className:"popular"===r?"products-sorter__btn --active":"products-sorter__btn",name:"popular",onClick:this.handleClick},"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435")),n.createElement("li",{className:"products-sorter__item"},n.createElement("button",{className:"new"===r?"products-sorter__btn --active":"products-sorter__btn",name:"new",onClick:this.handleClick},"\u041d\u043e\u0432\u044b\u0435")))))}}]),t}(n.Component)),A=Object(S.b)(null,(function(e){return{sortProducts:function(t){return e(function(e){return{type:"@@products/sort-products",payload:e}}(t))}}}))(F),U=(r(58),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getProducts)()}},{key:"render",value:function(){var e=this.props.isFetching;return n.createElement("ul",{className:"products-grid"},e?n.createElement("p",null,"...Loading"):this.products.map((function(e){return n.createElement(J,Object.assign({key:e.id},e))})))}},{key:"products",get:function(){return this.props.filteredProducts?this.props.filteredProducts:this.props.products}}]),t}(n.Component)),R=Object(S.b)((function(e){return{products:e.products.items,filteredProducts:e.products.filteredItems,isFetching:e.products.isFetching}}),(function(e){return{getProducts:function(){return e(function(){var e=Object(N.a)(k.a.mark((function e(t){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0)),e.prev=1,e.next=4,C.get("/server/products.json").then((function(e){return e.json()}));case 4:r=e.sent,t(T(r)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(P({status:599,message:"Oops! Something wend wrong!"}));case 12:return e.prev=12,t(I(!1)),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}())}}}))(U),H=(r(59),r(60),r(61),r(35)),B=r.n(H),G=(r(77),function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(e){console.dir(e.target),(0,r.props.setTempImage)(e.target.currentSrc)},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.images;return n.createElement(B.a,{infinite:!0,speed:500,slidesToShow:5,slidesToScroll:1},t.map((function(t,r){return n.createElement("div",{key:r,style:{height:"100%"}},n.createElement("img",{style:{width:"100%"},src:t,alt:"",onClick:e.handleClick}))})))}}]),t}(n.Component)),J=function(e){function t(){var e,r;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={tempImage:null},r.setTempImage=function(e){r.setState({tempImage:e})},r.handleClick=function(e){e.preventDefault()},r}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.price,c=e.category,a=e.count,s=e.thumbnail;return n.createElement("li",{className:"products-grid__card"},n.createElement(i.b,{className:"products-grid__link",to:"/1"},n.createElement("div",null,n.createElement("picture",{className:"products-grid__card-img"},n.createElement("img",{src:this.image,alt:"".concat(t)})),n.createElement("div",{className:"products-grid__slider",onClick:this.handleClick},n.createElement(G,{images:s,setTempImage:this.setTempImage}))),n.createElement("div",{className:"products-grid__card-content"},n.createElement("h3",{className:"products-grid__category"},c.name),n.createElement("p",{className:"products-grid__name"},t),n.createElement("div",{className:"products-grid__info-wrap"},n.createElement("h2",{className:"products-grid__price"},"$",r),n.createElement("span",{className:"products-grid__qty"},"\u043d\u0430 \u0441\u043a\u043b\u0430\u0434\u0435: ",a)))))}},{key:"image",get:function(){var e=this.props.image,t=this.state.tempImage;return t||(e||"http://placekitten.com/200/30")}}]),t}(n.Component),L=r(15),M=r(37),W=r(9),X=r(38);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach((function(t){Object(X.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V={isFetching:!1,error:null,items:[],filteredItems:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return q({},e,{isFetching:t.payload});case"@@products/fetch-success":return q({},e,{items:t.payload});case"@@products/filter-products":return q({},e,{filteredItems:e.items.filter((function(e){return e.category.id===t.payload}))});case"@@products/filter-reset":return q({},e,{filteredItems:null});case"@@products/sort-products":return"priceDown"===t.payload?e.filteredItems?q({},e,{filteredItems:Object(W.a)(e.filteredItems).sort((function(e,t){return t.price-e.price})),items:Object(W.a)(e.items).sort((function(e,t){return t.price-e.price}))}):q({},e,{items:Object(W.a)(e.items).sort((function(e,t){return t.price-e.price}))}):"priceUp"===t.payload?e.filteredItems?q({},e,{filteredItems:Object(W.a)(e.filteredItems).sort((function(e,t){return e.price-t.price})),items:Object(W.a)(e.items).sort((function(e,t){return e.price-t.price}))}):q({},e,{items:Object(W.a)(e.items).sort((function(e,t){return e.price-t.price}))}):"popular"===t.payload?e.filteredItems?q({},e,{filteredItems:Object(W.a)(e.filteredItems).sort((function(e,t){return e.count-t.count})),items:Object(W.a)(e.items).sort((function(e,t){return e.count-t.count}))}):q({},e,{items:Object(W.a)(e.items).sort((function(e,t){return e.count-t.count}))}):"new"===t.payload?e.filteredItems?q({},e,{filteredItems:Object(W.a)(e.filteredItems).sort((function(e,t){return t.createdTimestamp-e.createdTimestamp})),items:Object(W.a)(e.items).sort((function(e,t){return t.createdTimestamp-e.createdTimestamp}))}):q({},e,{items:Object(W.a)(e.items).sort((function(e,t){return t.createdTimestamp-e.createdTimestamp}))}):q({},e);default:return e}},K=function(){return Object(L.c)({products:z})};var Q=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.d;return Object(L.e)(K(),e,t(Object(L.a)(M.a)))}();var Y=function(){return c.a.createElement(S.a,{store:Q},c.a.createElement(i.a,{basename:"/shop-spa"},c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/shop-spa/"},c.a.createElement(j,null)),c.a.createElement(o.a,{path:"/shop-spa/product/:id"},c.a.createElement(E,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a0c6ee45.chunk.js.map