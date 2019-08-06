(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(50)},23:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(15),c=t.n(r),l=(t(23),t(16)),u=t(5),i=t(2),m=function(e){return o.a.createElement("div",null,"Search For Contact: ",o.a.createElement("input",{value:e.searchName,onChange:e.handleNameSearch}))},d=function(e){var n=e.addPersonToPhonebook,t=e.newName,a=e.handleNameChange,r=e.newNumber,c=e.handleNumberChange;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:t,onChange:a})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:r,onChange:c})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},s=t(24),h=function(e){var n=e.name,t=e.number,a=e.deletePersonInPhonebook,r=e.id;return o.a.createElement("div",null," ",n," ",t," ",o.a.createElement(f,{deletePersonInPhonebook:a,id:r,name:n}))},f=function(e){var n=e.deletePersonInPhonebook,t=e.id,a=e.name;return o.a.createElement("button",{onClick:function(){n(t,a)}}," delete ")},b=function(e){var n=e.showAll,t=e.copy,a=e.searchName,r=e.deletePersonInPhonebook,c="";c=n?t.map(function(e){return o.a.createElement(h,{key:s.generate(),name:e.name,number:e.number,deletePersonInPhonebook:r,id:e.id})}):t.filter(function(e){return e.name.indexOf(a)>-1}).map(function(e){return o.a.createElement(h,{key:s.generate(),name:e.name,number:e.number,deletePersonInPhonebook:r,id:e.id})});return o.a.createElement("div",null,c)},v=t(3),g=t.n(v),E="/api/persons",w=function(){return g.a.get(E).then(function(e){return e.data})},p=function(e){return g.a.post(E,e).then(function(e){return e.data})},k=function(e,n){return g.a.put("".concat(E,"/").concat(e),n).then(function(e){return e.data})},O=function(e){return g.a.delete("".concat(E,"/").concat(e)).then(function(e){return e.data})},P=function(e){var n=e.success,t=e.fail,a=null,r={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};if(null===n&&null==t){var c={};a=function(){return o.a.createElement("div",{style:c}," ")}}else if(null!==n)a=function(){return o.a.createElement("div",{style:r}," ",n)};else if(null!==t)r.color="red",a=function(){return o.a.createElement("div",{style:r}," ",t)};else{var l={};a=function(){return o.a.createElement("div",{style:l}," ")}}return o.a.createElement("div",null,a())},j=function(){var e=Object(a.useState)(""),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),h=s[0],f=s[1],v=Object(a.useState)(""),g=Object(i.a)(v,2),E=g[0],j=g[1],y=Object(a.useState)(""),N=Object(i.a)(y,2),S=N[0],C=N[1],I=Object(a.useState)(!0),T=Object(i.a)(I,2),A=T[0],B=T[1],x=Object(a.useState)(null),D=Object(i.a)(x,2),J=D[0],W=D[1],z=Object(a.useState)(null),F=Object(i.a)(z,2),R=F[0],$=F[1],q=Object(u.a)(t),G=function(){console.log("effect"),w().then(function(e){console.log("get all ",e),r(e),q=Object(u.a)(e)})};Object(a.useEffect)(G,[]);var H=function(){return t.filter(function(e){return e.name===h})};return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(P,{success:J,fail:R}),o.a.createElement(m,{searchName:S,handleNameSearch:function(e){C(e.target.value),""!==e.target.value&&B(!1)}}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(d,{addPersonToPhonebook:function(e){if(G(),e.preventDefault(),H().length>0){if(window.confirm("".concat(h," is already added to the phonebook,\n       replace the old numer with the new one?"))){var n=H()[0],a=Object(l.a)({},n,{number:E});k(a.id,a).then(function(e){console.log("responce ",e),W("Changed the number for ".concat(h)),setTimeout(function(){W(null)},5e3)}).catch(function(e){return console.log("err =",e)})}G()}else{var o={name:h,number:E,id:t.length+1};p(o).then(function(e){r(t.concat(e)),B(!0),G(),W("Added ".concat(h)),setTimeout(function(){W(null)},5e3)}).catch(function(e){$("Something went wrong adding ".concat(h," to the phonebook")),setTimeout(function(){W(null)},5e3),console.log("This is the err ".concat(e))})}},newName:h,handleNameChange:function(e){f(e.target.value)},newNumber:E,handleNumberChange:function(e){j(e.target.value)}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(b,{showAll:A,copy:q,searchName:S,deletePersonInPhonebook:function(e,n){window.confirm("Do you really want delete ".concat(n))&&O(e).then(function(e){$("".concat(n," has been removed from the phonebook")),setTimeout(function(){return $(null)},5e3),G()}).catch(function(e){console.log(e),$("".concat(n," has already been removed from the server")),setTimeout(function(){W(null)},5e3)})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.e307b447.chunk.js.map