(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(32)},28:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),o=a.n(r),c=(a(28),a(9)),i=a(14),s=a(7),u=a(2),m=a(3),d=a(1),f=a(5),b=a(4),p=a(11),g=a(6),h=a(12);function v(){var e=Object(p.a)(["\ndisplay:flex;\nalign-items:flex-end;\njustify-content:space-between;\nh1{\n    font-size:26px;\n    :hover{\n        color:blue;\n    }\n}\nh2{\n    font-size:1.2rem;\n    color:grey;\n}\n"]);return v=function(){return e},e}var k=h.a.div(v()),E=function(e){var t,a=e.liked,r=e.allPosts,o=Object(n.useState)(localStorage.getItem("name")),c=Object(g.a)(o,2),i=c[0],s=c[1],u=i;return l.a.createElement(k,null,u?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,u),l.a.createElement("div",{className:"greeting"},function(){var e,t=(new Date).getHours();return t>=5&&t<11?e="\u0414\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e":t>=11&&t<16?e="\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c":t>=16&&t<22?e="\u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440":t>=22&&(e="\u0414\u043e\u0431\u0440\u043e\u0439 \u043d\u043e\u0447\u0438"),e}())):l.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:function(e){e.preventDefault(),s(t),localStorage.setItem("name",t)}},l.a.createElement("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",className:"form-control new-post-label",onChange:function(e){t=e.target.value},value:t}),l.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0418\u043c\u044f")),l.a.createElement("h2",null,r," \u0437\u0430\u043f\u0438\u0441\u0435\u0439, \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c ",a))},j=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={term:""},n.onUpdateSearch=n.onUpdateSearch.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"onUpdateSearch",value:function(e){var t=e.target.value;this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return l.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.onUpdateSearch})}}]),a}(l.a.Component),y=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"},{name:"date",label:"\u041f\u043e \u0434\u0430\u0442\u0435"}],n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var a=t.name,n=t.label,r=e.props,o=r.filter,c=r.onFilterSelect,i=o===a?"btn-info":"btn-outline-secondary";return l.a.createElement("button",{type:"button",className:"btn ".concat(i),key:a,onClick:function(){return c(a)}},n)}));return l.a.createElement("div",{className:"btn-group"},t)}}]),a}(l.a.Component),O=a(22),S=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.onDelete,n=e.onToggleImportant,r=e.onToggleLiked,o=e.important,c=e.like,i=e.date,s="app-list-item d-flex justify-content-between";return c&&(s+=" like"),o&&(s+=" important"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:" dat1 date"},"".concat(i.d,".").concat(i.m,".").concat(i.y)),l.a.createElement("div",{className:" dat2 date"},"".concat(i.h," : ").concat(i.mi)),l.a.createElement("div",{className:s},l.a.createElement("span",{className:"app-list-item-label",onClick:r},t),l.a.createElement("div",{className:"d-flex justify-content-center alighn-item-center"},l.a.createElement("button",{type:"button",className:"btn-star btn-sm",onClick:n},l.a.createElement("i",{className:"fa fa-star"})),l.a.createElement("button",{button:"button",className:"btn-trash btn-sm",onClick:a},l.a.createElement("i",{className:"fa fa-trash-o"})),l.a.createElement("i",{className:"fa fa-heart"}))))}}]),a}(l.a.Component),N=function(e){var t=e.post,a=e.onDelete,n=e.onToggleImportant,r=e.onToggleLiked,o=t.map((function(e){if(e instanceof Object){var t=e.id,o=Object(O.a)(e,["id"]);return l.a.createElement("li",{key:t,className:"list-group-item"},l.a.createElement(S,Object.assign({},o,{onDelete:function(){return a(t)},onToggleImportant:function(){return n(t)},onToggleLiked:function(){return r(t)}})))}}));return l.a.createElement("ul",{className:"app-list list-group"},o)},I=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={text:""},n.onValueChange=n.onValueChange.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"onValueChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return l.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},l.a.createElement("input",{type:"text",placeholder:"\u041e \u0447\u0435\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),l.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),a}(l.a.Component),x=function(){var e=Object(n.useState)("toggleDivBlack"),t=Object(g.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"toggleDivBlack",onClick:function(){document.body.classList.toggle("dark"),r("toggleDivBlack"===a?"toggleDivWhite":"toggleDivBlack")}},l.a.createElement("img",{src:"https://static.thenounproject.com/png/607586-200.png"})),l.a.createElement("span",{className:"toggle"},"toggleDivBlack"===a?"\u041d\u043e\u0447\u043d\u0430\u044f \u0442\u0435\u043c\u0430":"\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u0442\u0435\u043c\u0430"))},D=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){localStorage.clear(),window.location.reload()},className:"reset"},l.a.createElement("img",{src:"https://flortaboada.com/wp-content/uploads/2000px-View-refresh_Gion_simple.svg_-1200x1171.png"})),l.a.createElement("span",{className:"reset-name"},"Reset"))},C=function(){var e=Object(n.useState)(),t=Object(g.a)(e,2),a=t[0],r=t[1];window.addEventListener("scroll",(function(){document.documentElement.scrollTop>500?r(document.documentElement.scrollTop):r(0)}));return a>=500?l.a.createElement("div",{onClick:function(){document.documentElement.scrollTo(0,0)},className:"scroll"},l.a.createElement("img",{src:"https://icons.iconseeker.com/png/fullsize/fresh-addon/arrow-up-2.png"})):null};a(31);function T(){var e=Object(p.a)(["\nmargin: 0 auto;\nmax-width: 800px;\n"]);return T=function(){return e},e}var w=h.a.div(T()),F=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).memy=JSON.parse(localStorage.getItem("app")),n.state={data:n.memy?n.memy:[{label:"\u041f\u0440\u0438\u0432\u0435\u0441\u0442\u0432\u0443\u044e \u043d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u0435\u0446",important:!1,id:n.genId(),date:n.setDate()},{label:"\u0414\u0430\u0432\u0430\u0439 \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f, \u0432\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f \u0432 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0442\u0430\u043a \u044f \u0431\u0443\u0434\u0443 \u0437\u043d\u0430\u0442\u044c \u0442\u0432\u043e\u0451 \u0438\u043c\u044f",important:!1,id:n.genId(),date:n.setDate()}],term:"",filter:"all"},n.deleteItem=n.deleteItem.bind(Object(d.a)(n)),n.addItem=n.addItem.bind(Object(d.a)(n)),n.onToggleImportant=n.onToggleImportant.bind(Object(d.a)(n)),n.onToggleLiked=n.onToggleLiked.bind(Object(d.a)(n)),n.onUpdateSearch=n.onUpdateSearch.bind(Object(d.a)(n)),n.onFilterSelect=n.onFilterSelect.bind(Object(d.a)(n)),n.base=n.base.bind(Object(d.a)(n)),n.maxId=localStorage.getItem("id")?localStorage.getItem("id"):4,n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.state!==e&&this.memory()}},{key:"memory",value:function(){localStorage.setItem("app",JSON.stringify(this.state.data))}},{key:"genId",value:function(){for(var e,t="",a="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",n=a.length-1,l=0;l<5;++l)e=Math.floor(Math.random()*n),t+=a.substring(e,e+1);return t}},{key:"setDate",value:function(){var e=new Date;return{d:this.addZero(e.getDate()),m:this.addZero(e.getMonth()+1),y:e.getFullYear(),h:this.addZero(e.getHours()),mi:this.addZero(e.getMinutes())}}},{key:"addZero",value:function(e){return e<10?"0"+e:e}},{key:"deleteItem",value:function(e){this.setState((function(t){var a=t.data,n=a.findIndex((function(t){return t.id===e})),l=a.slice(0,n),r=a.slice(n+1);return{data:[].concat(Object(s.a)(l),Object(s.a)(r))}}))}},{key:"addItem",value:function(e){var t=!0;if(this.state.data.forEach((function(a){a.label!==e&&""!==e||(t=!1)})),t){var a={label:e,important:!1,id:this.genId(),date:this.setDate()};this.setState((function(e){var t=e.data;return{data:[].concat(Object(s.a)(t),[a])}}))}}},{key:"base",value:function(e,t){this.setState((function(a){var n=a.data,l=n.findIndex((function(e){return e.id===t})),r=n[l],o=Object(i.a)(Object(i.a)({},r),{},Object(c.a)({},e,!r[e]));return{data:[].concat(Object(s.a)(n.slice(0,l)),[o],Object(s.a)(n.slice(l+1)))}}))}},{key:"onToggleImportant",value:function(e){this.base("important",e)}},{key:"onToggleLiked",value:function(e){this.base("like",e)}},{key:"searchPost",value:function(e,t){if(0===t.length)return e;if(isFinite(t)){var a=t.split(".");return e.filter((function(e){if(e.date.d==a[0]&&e.date.m==a[1])return e}))}return e.filter((function(e){return console.log(e),e.label.indexOf(t)>-1}))}},{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"filterPost",value:function(e,t){return"like"==t?e.filter((function(e){return e.like})):"date"==t?e.filter((function(e){return e.date.d})):e}},{key:"onFilterSelect",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.term,n=e.filter,r=this.state.data.filter((function(e){return e.like})).length,o=this.state.data.length,c=this.filterPost(this.searchPost(t,a),n);return l.a.createElement(w,null,l.a.createElement(C,null),l.a.createElement("div",{className:"d-flex"},l.a.createElement(x,null),l.a.createElement(D,null)),l.a.createElement(E,{liked:r,allPosts:o}),l.a.createElement("div",{className:"search-panel d-flex"},l.a.createElement(j,{onUpdateSearch:this.onUpdateSearch}),l.a.createElement(y,{filter:n,onFilterSelect:this.onFilterSelect})),l.a.createElement(N,{post:c,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),l.a.createElement(I,{onAdd:this.addItem,label:this.state.data}))}}]),a}(l.a.Component);o.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9eccfc87.chunk.js.map