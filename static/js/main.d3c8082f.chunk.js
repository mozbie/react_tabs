(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),s=a(3),i=a(4),o=a(6),u=a(5),b=a(7),m=(a(13),a(14),function(e){var t=e.tab,a=e.handleClick,n=e.index,r=e.changeClassName;return c.a.createElement("li",{className:r,onClick:function(){return a(n)}},t.title)}),h=(a(15),function(e){var t=e.tabs,a=e.currentTab,n=e.handleClick,r=e.changeClassName;return c.a.createElement("div",{className:"tabs__wrapper"},c.a.createElement("ul",{className:"tabs"},t.map(function(e,t){return c.a.createElement(m,{tab:e,handleClick:n,index:t,changeClassName:r})})),c.a.createElement("div",{className:"tabs__content"},t[a].content))}),d=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],currentTab:0},a.handleClick=function(e){a.setState({currentTab:e})},a.changeClassName=function(e,t){return t===e?"tab active":"tab"},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tabs,a=e.currentTab;return c.a.createElement("div",{className:"App"},c.a.createElement(h,{tabs:t,currentTab:a,handleClick:this.handleClick,changeClassName:this.changeClassName}))}}]),t}(c.a.Component);l.a.render(c.a.createElement(d,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.d3c8082f.chunk.js.map