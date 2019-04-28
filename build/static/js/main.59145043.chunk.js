(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1),o=a.n(l),s=(a(23),a(6)),c=a(7),i=a(8),m=a(14),u=a(9),h=a(15),p=a(10),d=a(11);var g=function(e){return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("p",null,e.quantity," ",r.a.createElement("strong",null,e.name)," (",e.section,")"),r.a.createElement("p",null,e.notes))};var E=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"item name"),r.a.createElement("input",{value:e.name,name:"name",onChange:e.handleInputChange,type:"text",className:"form-control",placeholder:"apples"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"quantity"},"quantity"),r.a.createElement("input",{value:e.quantity,name:"quantity",onChange:e.handleInputChange,type:"number",min:"1",className:"form-control",id:"quantity",placeholder:"0"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"section"},"section"),r.a.createElement("select",{value:e.section,name:"section",onChange:e.handleInputChange,className:"form-control",id:"section"},r.a.createElement("option",{value:""},"choose a section of the store"),r.a.createElement("option",{value:"misc"},"misc"),["produce","dairy","meat/protein","condiments","canned goods","bread/grains","frozen","snacks","baking/spices","drinks","paper/plastic","toiletries","pet care"].sort().map(function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"notes"},"notes"),r.a.createElement("textarea",{value:e.notes,name:"notes",onChange:e.handleInputChange,className:"form-control",id:"notes",rows:"2"})),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:e.handleFormSubmit},"add to list"))};var y=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid",style:{textAlign:"center",marginBottom:0}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},e.title),r.a.createElement("p",{className:"lead"},e.subtitle)))};var v=function(e){return r.a.createElement("div",{className:"alert alert-".concat(e.type),role:"alert",style:{textAlign:"center"}},e.children)};function f(){var e=Object(p.a)(["\n  margin: 20px auto;\n  max-width: 800px;\n"]);return f=function(){return e},e}var b=d.a.div(f()),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",quantity:"",section:"",notes:"",items:[],error:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(s.a)({},n,r))},a.handleFormSubmit=function(e){if(e.preventDefault(),a.state.name&&a.state.quantity&&!(a.state.quantity<1)&&a.state.section){var t=a.state.items;t.push({name:a.state.name,quantity:a.state.quantity,section:a.state.section,notes:a.state.notes}),a.setState({name:"",quantity:"",section:"",notes:"",items:t,error:!1})}else a.setState({error:!0})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{title:"get ya grocery on",subtitle:r.a.createElement("img",{src:"apple.png",alt:"apple",style:{height:70}})}),r.a.createElement(b,null,r.a.createElement("span",null,this.state.error?r.a.createElement(v,{type:"danger"},"something's wrong with your form... be sure to include name, quantity and section!"):""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("h3",{style:{textAlign:"center"}},"add to your list"),r.a.createElement(E,{name:this.state.name,quantity:this.state.quantity,section:this.state.section,notes:this.state.notes,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})),r.a.createElement("div",{className:"col-7"},this.state.items.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{textAlign:"center"}},"get shoppin!"),r.a.createElement("ul",{className:"list-group list-group-flush"},this.state.items.map(function(e){return r.a.createElement(g,{key:e.name,name:e.name,section:e.section,quantity:e.quantity,notes:e.notes})}))):r.a.createElement("h3",{style:{textAlign:"center"}},"looks like you're all stocked up!")))))}}]),t}(r.a.Component);var w=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.59145043.chunk.js.map