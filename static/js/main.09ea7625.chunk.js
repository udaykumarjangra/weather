(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(4),r=n.n(i),o=(n(10),n(2));n.p,n(11);var l=function(){var e=function(e){var t=new Date(1e3*e);return String(t).slice(16,24)},t=function(e){var t=parseInt(e,10),n=Math.floor(t/3600),c=Math.floor((t-3600*n)/60),a=t-3600*n-60*c;return n<10&&(n="0"+n),c<10&&(c="0"+c),a<10&&(a="0"+a),n+":"+c+":"+a},n=Object(a.useState)(""),s=Object(o.a)(n,2),i=s[0],r=s[1],l=Object(a.useState)({}),d=Object(o.a)(l,2),j=d[0],m=d[1],h=Object(a.useState)(""),u=Object(o.a)(h,2),b=u[0],p=u[1];return Object(c.jsxs)("div",{className:"undefined"!=typeof j.main?j.main.temp>18?"App-hot":"App-cold":"App",children:[Object(c.jsx)("div",{className:"search-container",children:Object(c.jsx)("input",{type:"text",placeholder:"Enter City Name",className:"search-bar",onChange:function(e){return r(e.target.value)},value:i,onKeyPress:function(e){"Enter"===e.key&&fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&APPID=").concat("b699813d0d7caf37039051c08549ecd1")).then((function(e){return e.json()})).then((function(e){r(""),m(e),p(e.cod),console.log(b),console.log(e)}))}})}),"404"==b?Object(c.jsx)("div",{className:"location-container",children:Object(c.jsx)("div",{className:"location",children:"City Not Found"})}):"","undefined"!=typeof j.main?Object(c.jsxs)("div",{className:"location-container",children:[Object(c.jsxs)("div",{className:"date",children:[String(new Date(1e3*j.dt)).slice(0,15),Object(c.jsx)("br",{}),String(new Date).slice(15,24)]}),Object(c.jsxs)("div",{className:"location",children:[j.name,",",j.sys.country," (",j.coord.lon,", ",j.coord.lat,")"]}),Object(c.jsxs)("div",{className:"weather-container",children:[Object(c.jsxs)("div",{className:"temperature",children:[Object(c.jsxs)("p",{className:"minmax",children:["Feels Like: ",Math.round(j.main.feels_like)]}),Math.round(j.main.temp)," C",Object(c.jsxs)("p",{className:"minmax mt-0",children:["Humidity: ",Math.round(j.main.humidity)]}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{className:"minmax mt-0",children:["Sunrise: ",e(j.sys.sunrise),Object(c.jsx)("br",{}),"Sunset:  ",e(j.sys.sunset),Object(c.jsx)("br",{}),"Wind: ",j.wind.speed," m/s ",j.wind.deg," degree",Object(c.jsx)("br",{}),console.log("Time ZONE"+j.timezone+" "+t(j.timezone)),"Time Zone: ",1==Math.sign(j.timezone)?"+":"-",t(String(Math.abs(j.timezone))).slice(0,5)," GMT"]})]}),Object(c.jsxs)("div",{className:"weather",children:[Object(c.jsx)("img",{className:"icon-small",src:"http://openweathermap.org/img/wn/"+j.weather[0].icon+"@4x.png",alt:""}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"weather-main",children:j.weather[0].main})]})]})]}):""]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.09ea7625.chunk.js.map