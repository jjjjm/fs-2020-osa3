(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=(t(20),t(14)),l=t(2),i=t(3),m=t.n(i),d="/api/persons",s=function(){return m.a.get(d)},f=function(e){return m.a.post(d,e)},b=function(e){return m.a.delete(d+"/".concat(e))},p=function(e,n){return m.a.put(d+"/".concat(e),n)},h=function(e){var n=e.message;return r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}},n)},E=function(e){var n=e.message;return r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}},n)},g=function(e){var n=e.person,t=e.deleteFunction;return r.a.createElement("div",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n)}}," delete "))},v=function(e){var n=e.label,t=e.searchValue,a=e.onChangeFunction;return r.a.createElement("div",null,n," ",r.a.createElement("input",{value:t,onChange:function(e){return a(e.target.value)}}))},w=function(e){var n=e.newPersonHandler,t=e.name,a=e.number,c=e.newNameFunction,o=e.newNumberFunction;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){return n(e)}},r.a.createElement(v,{label:"name: ",searchValue:t,onChangeFunction:c}),r.a.createElement(v,{label:"number: ",searchValue:a,onChangeFunction:o}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},F=function(e){var n=e.persons,t=e.deleteFunction;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(g,{key:e.name,person:e,deleteFunction:t})})))},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],d=i[1],g=Object(a.useState)(""),j=Object(l.a)(g,2),y=j[0],O=j[1],S=Object(a.useState)(""),x=Object(l.a)(S,2),k=x[0],C=x[1],N=Object(a.useState)(""),V=Object(l.a)(N,2),B=V[0],I=V[1];Object(a.useEffect)((function(){s().then((function(e){return c(e.data)}))}),[]);var P=function(e){window.confirm("Delete ".concat(e.name,"?"))&&b(e.id).then((function(n){return c(t.filter((function(n){return n.id!==e.id})))})).then((function(n){return z(r.a.createElement(h,{message:"".concat(e.name," removed")}))})).catch((function(n){z(r.a.createElement(E,{message:"Information for ".concat(e.name," has already been deleted from the server")})),console.log(n)}))},z=function(e){I(e),setTimeout((function(){I(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),B,r.a.createElement(v,{label:"search: ",searchValue:k,onChangeFunction:C}),r.a.createElement("h2",null,"Add new"),r.a.createElement(w,{name:m,number:y,newNameFunction:d,newNumberFunction:O,newPersonHandler:function(e){e.preventDefault();var n={name:m,number:y},a=t.find((function(e){return e.name===n.name}));a&&window.confirm("".concat(m," is already added to phonebook, replace old number with new one?"))?p(a.id,Object(u.a)({},a,{number:y})).then((function(e){return c(t.map((function(n){return n.id!==a.id?n:e.data})))})).then((function(e){return z(r.a.createElement(h,{message:"Information for ".concat(m," updated")}))})).catch((function(e){return z(r.a.createElement(E,{message:"".concat(m," already deleted")}))})):f(n).then((function(e){return c(t.concat(e.data))})).then((function(e){return z(r.a.createElement(h,{message:"".concat(m," added")}))})),d(""),O("")}}),r.a.createElement("h2",null,"Numbers"),0===k.length?r.a.createElement(F,{persons:t,deleteFunction:P}):r.a.createElement(F,{persons:t.filter((function(e){return e.name.toUpperCase().includes(k.toUpperCase())})),deleteFunction:P}))};o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.54468db6.chunk.js.map