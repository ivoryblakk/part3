(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(49)},22:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(15),c=t.n(r),l=(t(22),t(5)),u=t(2),i=function(e){return o.a.createElement("div",null,"Search For Contact: ",o.a.createElement("input",{value:e.searchName,onChange:e.handleNameSearch}))},m=function(e){var n=e.addPersonToPhonebook,t=e.newName,a=e.handleNameChange,r=e.newNumber,c=e.handleNumberChange;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:t,onChange:a})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:r,onChange:c})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},s=t(23),d=function(e){var n=e.name,t=e.number,a=e.deletePersonInPhonebook,r=e.id;return o.a.createElement("div",null," ",n," ",t," ",o.a.createElement(h,{deletePersonInPhonebook:a,id:r,name:n}))},h=function(e){var n=e.deletePersonInPhonebook,t=e.id,a=e.name;return o.a.createElement("button",{onClick:function(){n(t,a)}}," delete ")},f=function(e){var n=e.showAll,t=e.copy,a=e.searchName,r=e.deletePersonInPhonebook,c="";c=n?t.map(function(e){return o.a.createElement(d,{key:s.generate(),name:e.name,number:e.number,deletePersonInPhonebook:r,id:e.id})}):t.filter(function(e){return e.name.indexOf(a)>-1}).map(function(e){return o.a.createElement(d,{key:s.generate(),name:e.name,number:e.number,deletePersonInPhonebook:r,id:e.id})});return o.a.createElement("div",null,c)},b=t(3),v=t.n(b),g="/api/persons",E=function(){return v.a.get(g).then(function(e){return console.log(" getAll response.data ",e.data),e.data})},p=function(e){return v.a.post(g,e).then(function(e){return console.log(" create response.data ",e.data),e.data})},w=function(e){return v.a.delete("".concat(g,"/").concat(e)).then(function(e){return e.data})},k=function(e){var n=e.success,t=e.fail,a=null,r={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};if(null===n&&null==t){var c={};a=function(){return o.a.createElement("div",{style:c}," ")}}else if(null!==n)a=function(){return o.a.createElement("div",{style:r}," ",n)};else if(null!==t)r.color="red",a=function(){return o.a.createElement("div",{style:r}," ",t)};else{var l={};a=function(){return o.a.createElement("div",{style:l}," ")}}return o.a.createElement("div",null,a())},P=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),d=s[0],h=s[1],b=Object(a.useState)(""),v=Object(u.a)(b,2),g=v[0],P=v[1],O=Object(a.useState)(""),j=Object(u.a)(O,2),y=j[0],N=j[1],S=Object(a.useState)(!0),C=Object(u.a)(S,2),I=C[0],T=C[1],A=Object(a.useState)(null),B=Object(u.a)(A,2),x=B[0],D=B[1],J=Object(a.useState)(null),W=Object(u.a)(J,2),z=W[0],F=W[1],R=Object(l.a)(t),$=function(){console.log("effect"),E().then(function(e){console.log("get all ",e),r(e),R=Object(l.a)(e)}).catch(function(e){return console.log("".concat(e," , persons ").concat(t))})};Object(a.useEffect)($,[]);return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(k,{success:x,fail:z}),o.a.createElement(i,{searchName:y,handleNameSearch:function(e){N(e.target.value),""!==e.target.value&&T(!1)}}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(m,{addPersonToPhonebook:function(e){$(),e.preventDefault();var n={name:d,number:Number(g)};p(n).then(function(e){T(!0),$(),D("Added ".concat(d)),setTimeout(function(){D(null)},5e3)}).catch(function(e){F("Something went wrong adding ".concat(d," to the phonebook")),setTimeout(function(){D(null)},5e3),console.log("This is the err ".concat(e))})},newName:d,handleNameChange:function(e){h(e.target.value)},newNumber:g,handleNumberChange:function(e){P(e.target.value)}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(f,{showAll:I,copy:R,searchName:y,deletePersonInPhonebook:function(e,n){window.confirm("Do you really want delete ".concat(n))&&w(e).then(function(e){F("".concat(n," has been removed from the phonebook")),setTimeout(function(){return F(null)},5e3),$()}).catch(function(e){console.log(e),F("".concat(n," has already been removed from the server")),setTimeout(function(){D(null)},5e3)})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.3e8a967e.chunk.js.map