(this.webpackJsonpmovieproject=this.webpackJsonpmovieproject||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(8),r=a.n(s),i=(a(14),a(0));function o(){return Object(i.jsx)("nav",{className:"green darken-2",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"ReactMovies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Repo"})})})]})})}var l=a(2);function h(){var e;return Object(i.jsx)("footer",(e={className:"page-footer"},Object(l.a)(e,"className","green lighten-4"),Object(l.a)(e,"children",Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"More Links"})]})),e))}var d=a(3),j=a(4),p=a(6),u=a(5),b=a(9);function m(e){var t=e.Title,a=e.Year,c=e.Type,n=e.imdbID,s=e.Poster;return Object(i.jsxs)("div",{id:n,className:"card movie sticky-action",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x400?text=".concat(t)}):Object(i.jsx)("img",{className:"activator",src:s})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[a," ",Object(i.jsx)("span",{className:"right",children:c})]})]})]})}function O(e){var t=e.movies,a=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(i.jsx)(m,Object(b.a)({},e),e.imdbID)})):Object(i.jsx)("h5",{children:"No results found. Please check mistakes."})})}function v(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var x=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",type:"all"},e.handleUpdate=function(t){e.setState({search:t.target.value})},e.handleKey=function(t){"Enter"===t.key&&e.props.update(e.state.search,e.state.type)},e.handleSearch=function(){e.props.update(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.update(e.state.search,e.state.type)}))},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{search:this.state.search,className:"row",children:[Object(i.jsxs)("div",{className:"col s12",children:[Object(i.jsx)("div",{className:"input-field inline"}),Object(i.jsx)("input",{placeholder:"search",type:"search",className:"validate",value:this.state.search,onChange:this.handleUpdate,onKeyDown:this.handleKey}),Object(i.jsx)("button",{className:"waves-effect waves-light btn search-btn",onClick:this.handleSearch,children:"Search"})]}),Object(i.jsx)("form",{action:"#",children:Object(i.jsxs)("p",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"group1",type:"radio","data-type":"all",checked:"all"===this.state.type,onChange:this.handleFilter}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"group1",type:"radio","data-type":"movie",checked:"movie"===this.state.type,onChange:this.handleFilter}),Object(i.jsx)("span",{children:"Movies"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"group1",type:"radio","data-type":"series",checked:"series"===this.state.type,onChange:this.handleFilter}),Object(i.jsx)("span",{children:"Series"})]})]})})]})}}]),a}(n.a.Component),f=Object({NODE_ENV:"production",PUBLIC_URL:"/react-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,g=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.update=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=cfce6d1d&s=".concat(f,"&type=").concat("all"!==a?a:"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat(f,"&s=Iron")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(x,{update:this.update}),a?Object(i.jsx)(v,{}):Object(i.jsx)(O,{movies:t})]})}}]),a}(n.a.Component);var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(g,{}),Object(i.jsx)(h,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9f89965a.chunk.js.map