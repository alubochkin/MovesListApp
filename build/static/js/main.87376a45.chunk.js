(this["webpackJsonpmove-list-app"]=this["webpackJsonpmove-list-app"]||[]).push([[0],{37:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var i,c,a,r,o,s,j,d,l,u,b,p=n(0),x=n.n(p),h=n(23),O=n.n(h),f=(n(37),n(11)),m=n(9),g=n(4),v=n(5),w=n(7),y=n(2),P="movie_details",k="list_movies",C=n(19),_=n.n(C),S=n(24),F=function(){var e=Object(S.a)(_.a.mark((function e(t,n,i){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/".concat(t,".json?").concat(n,"=").concat(i));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}(),L=n(25),M=n(26),N=n(32),B=n(31),E=n(1),T=function(e){Object(N.a)(n,e);var t=Object(B.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(E.jsx)(q,{children:e})}}]),n}(p.PureComponent),q=y.a.section.attrs((function(){return{className:"conteiner"}}))(i||(i=Object(v.a)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 50px 15px;\n"]))),z=function(e){var t,n=e.movie;return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(D,{children:[Object(E.jsx)(I,{children:Object(E.jsx)("img",{alt:"",src:n.medium_cover_image})}),Object(E.jsxs)(J,{children:[Object(E.jsxs)("h1",{children:["Name movies: ",n.title]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:"Description: "}),n.description_full]}),Object(E.jsxs)("p",{children:["Genres:"," ",null===n||void 0===n||null===(t=n.genres)||void 0===t?void 0:t.map((function(e){return Object(E.jsx)("span",{children:"".concat(e," ")},e)}))]})]})]})})},D=y.a.div(c||(c=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  padding: 15px;\n  background: #fff;\n"]))),I=y.a.div(a||(a=Object(v.a)(["\n  min-width: 250px;\n  max-width: 25%;\n  width: 100%;\n"]))),J=y.a.div(r||(r=Object(v.a)(["\n  gap: 30px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  max-width: 70%;\n"]))),A=n(30),G=function(){return Object(E.jsx)(H,{children:Object(E.jsx)(A.a,{size:"200",color:"#0f3846"})})},H=y.a.div(o||(o=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),K=x.a.createContext(),Q=function(){var e=Object(g.f)().id,t=Object(p.useContext)(K),n=t.state,i=t.setState,c=Object(p.useState)(!1),a=Object(f.a)(c,2),r=a[0],o=a[1];return Object(p.useEffect)((function(){F(P,"movie_id",e).then((function(e){return o(e.data.movie)})),i((function(e){var t;return Object(w.a)(Object(w.a)({},e),{},{titlePage:null!==(t=r.title)&&void 0!==t?t:"Loading..."})}))}),[e,r.title,i]),Object(E.jsx)(T,{children:r?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(R,{children:[Object(E.jsx)(m.b,{to:"/".concat(n.numPage),children:"Back list movies"})," /"," ",Object(E.jsx)("span",{children:r.title})]}),Object(E.jsx)(z,{page:e,movie:r})]}):Object(E.jsx)(G,{})})},R=y.a.div(s||(s=Object(v.a)(["\n  display: flex;\n  gap: 15px;\n  padding: 30px 0;\n"]))),U="detailsMovie";function V(e){var t=e.movies;return Object(E.jsx)(Y,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(E.jsx)(Z,{children:Object(E.jsxs)(m.b,{className:"movieCard",to:"/".concat(U,"/").concat(e.id),children:[Object(E.jsx)($,{children:e.rating}),Object(E.jsx)(te,{alt:"",src:e.medium_cover_image?e.medium_cover_image:"https://www.organiqueturkiye.com/assets/images/default.png"}),Object(E.jsx)(ee,{children:e.title})]})},e.id)}))})}var W,X,Y=y.a.div(j||(j=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  justify-content: center;\n  gap: 30px;\n"]))),Z=y.a.div(d||(d=Object(v.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 350px;\n  background: #fff;\n  cursor: pointer;\n  transition: 0.2s ease-in;\n  &:hover {\n    box-shadow: 0 0 30px #00000030;\n    transform: scale(1.02);\n  }\n"]))),$=y.a.div(l||(l=Object(v.a)(["\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background: #ffda35;\n  border-radius: 30px;\n  color: #000;\n  font-weight: bold;\n  font-size: 13px;\n  top: -17px;\n  right: -17px;\n"]))),ee=y.a.div(u||(u=Object(v.a)(["\n  width: 100%;\n  padding: 10px 5px;\n  text-align: center;\n"]))),te=y.a.img(b||(b=Object(v.a)(["\n  width: 100%;\n  object-fit: cover;\n  max-height: 350px;\n  height: 100%;\n"])));function ne(){var e=Object(p.useContext)(K),t=e.state,n=e.setState,i=Object(p.useState)(new Array(30).fill("").map((function(e,t){return t+1}))),c=Object(f.a)(i,1)[0];Object(p.useEffect)((function(){n((function(e){return Object(w.a)(Object(w.a)({},e),{},{loading:!0})})),n((function(e){return Object(w.a)(Object(w.a)({},e),{},{titlePage:"Movies List search & download torrent"})})),F(k,"page",t.numPage).then((function(e){n((function(t){return Object(w.a)(Object(w.a)({},t),{},{loadedListMovies:e.data.movies})}))})).then((function(){return n((function(e){return Object(w.a)(Object(w.a)({},e),{},{loading:!1})}))}))}),[t.numPage]);var a=function(){};return Object(E.jsx)(E.Fragment,{children:t.loading?Object(E.jsx)(G,{}):Object(E.jsxs)(T,{children:[Object(E.jsx)(V,{movies:t.loadedListMovies}),Object(E.jsx)(ie,{children:c.map((function(e){return Object(E.jsx)(m.b,{onClick:a,to:"/".concat(e),children:Object(E.jsx)(ce,{className:t.numPage===e?"active":null,onClick:function(){return function(e){n((function(t){return Object(w.a)(Object(w.a)({},t),{},{numPage:e})})),window.scrollTo(0,0)}(e)},children:e})},e)}))})]})})}var ie=y.a.div(W||(W=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  margin-top: 30px;\n"]))),ce=y.a.div(X||(X=Object(v.a)(["\n  height: 30px;\n  width: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ccc;\n  cursor: pointer;\n  &.active {\n    background: red;\n    color: #fff;\n  }\n"])));var ae=function(){var e=Object(p.useState)({numPage:1,query:1,loading:!1,loadedListMovies:[],titlePage:""}),t=Object(f.a)(e,2),n=t[0],i=t[1];return document.title=n.titlePage,Object(E.jsx)(K.Provider,{value:{state:n,setState:i},children:Object(E.jsx)(m.a,{children:Object(E.jsxs)(g.c,{children:[Object(E.jsx)(g.a,{exact:!0,path:"/".concat(U,"/:id"),children:Object(E.jsx)(Q,{})}),Object(E.jsx)(g.a,{path:"/:id",children:Object(E.jsx)(ne,{})}),Object(E.jsx)(g.a,{path:"/",children:Object(E.jsx)(ne,{})})]})})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};O.a.render(Object(E.jsx)(x.a.StrictMode,{children:Object(E.jsx)(ae,{})}),document.getElementById("root")),re()}},[[46,1,2]]]);
//# sourceMappingURL=main.87376a45.chunk.js.map