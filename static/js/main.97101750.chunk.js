(this["webpackJsonppending-tasks"]=this["webpackJsonppending-tasks"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(8),r=n.n(c),i=(n(14),n(5)),o=n(2),d=(n(15),n(16),n.p+"static/media/add.a0162b51.png"),j=n(0),u=function(){var e=Object(s.useState)("form-hide"),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsxs)("section",{id:"newtask-section",children:[Object(j.jsx)("p",{onClick:function(){c("form-hide"===n?function(e){return"form-show"}:function(e){return"form-hide"})},children:"Add New Task"}),Object(j.jsxs)("form",{action:"",id:"task-form",className:n,children:[Object(j.jsx)("label",{htmlFor:"taskname",children:"Task Name:"}),Object(j.jsx)("input",{type:"text",name:"taskname",id:"taskname-id",tabIndex:"1",required:"required",minLength:"1",maxLength:"50",placeholder:"Take out the dog"}),Object(j.jsx)("label",{htmlFor:"taskdate",children:"Starts:"}),Object(j.jsx)("input",{type:"datetime-local",name:"taskdate",id:"tasktime-id",tabIndex:"2",required:"required"}),Object(j.jsx)("label",{htmlFor:"tasktime",children:"ETC:"}),Object(j.jsx)("input",{type:"time",name:"tasktime",id:"tasktime-id",tabIndex:"3",required:"required"}),Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:d,alt:"Add New Task",tabIndex:"5"})})," ",Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"taskdesc",id:"textarea-label",children:"Short Description:"}),Object(j.jsx)("textarea",{name:"taskdesc",id:"taskdesc-id",cols:"70",rows:"4",tabIndex:"4",maxLength:"250",placeholder:"Get my water bottle. Make sure to have the food in the bag. Don't forget..."})]})]})})},b=(n(18),function(e){var t=Object(s.useState)(e),n=Object(o.a)(t,2);n[0],n[1];return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsxs)("section",{id:"nexttasksection-id",children:[Object(j.jsx)("h2",{children:e.categorytitle}),e.task]})})}),l=(n(19),function(e){return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsxs)("article",{id:"taskarticle-id",children:[Object(j.jsx)("p",{children:e.taskname}),Object(j.jsx)("br",{})," ",Object(j.jsx)("p",{children:e.tasktime}),"  ",Object(j.jsxs)("p",{children:["ETC: ",e.tasketc]}),"  ",Object(j.jsx)("p",{children:"Remaining Time: 0"}),"  ",Object(j.jsx)("p",{children:e.taskdesc}),"  "]})})}),m=n(9),h=n(7),O=n.n(h),x=(n(21),function(e,t){t.sendUsername;var n=Object(s.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],d=Object(s.useState)({}),u=Object(o.a)(d,2),b=u[0],l=u[1];Object(s.useEffect)((function(){var e=function(){var e=Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.npoint.io/06ad77bde85ea10608b5");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsxs)("section",{id:"usermodalsection-id",children:[Object(j.jsxs)("form",{action:"",method:"post",id:"currentuser-id",onSubmit:function(){!function(){for(var t=0,n=0,s=Object.values(b);n<s.length;n++)s[n].username===r&&(e.HandleShowModal(),e.sendUsername(r,b),t++);0===t&&alert("Usuario no encontrado!")}()},children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(j.jsx)("input",{type:"text",name:"username",id:"username-id",required:"required",minLength:"8",maxLength:"20",onChange:function(e){return i(e.target.value)}})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{id:"accessbutton-id",children:"Access"})]}),Object(j.jsxs)("form",{action:"",id:"newuser-id",children:[Object(j.jsx)("label",{htmlFor:"newusername",children:"New Username:"}),Object(j.jsx)("input",{type:"text",name:"newusername",id:"newusername-id",required:"required",minLength:"8",maxLength:"20"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{id:"registerbutton-id",children:"Register"})]})]})})}),f=function(e){var t=Object(s.useState)(!0),n=Object(o.a)(t,2),c=n[0],r=n[1],d=Object(s.useState)(""),m=Object(o.a)(d,2),h=m[0],O=m[1],f=Object(s.useState)([]),g=Object(o.a)(f,2),k=g[0],p=g[1],_=Object(s.useState)([]),v=Object(o.a)(_,2),w=v[0],S=v[1],T=Object(s.useState)([]),F=Object(o.a)(T,2),y=F[0],q=F[1],I=function(e){var t=new Date,n=t.getHours(),s=t.getMinutes(),a=parseInt(n.toString()+s.toString()),c=0;e.forEach((function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var s=Object(o.a)(n[t],2),r=s[0],i=s[1];if("etc"===r&&(c=i),"starting_time"===r){var d=i.split(", ")[1].split(":"),j=parseInt(d[0]+d[1]);j>a+c?L(e):j+c>=a&&j<=a+c?C(e):j<a&&E(e)}}}))},L=function(e){S((function(t){return[].concat(Object(i.a)(t),[Object(j.jsx)(l,{taskname:e.short_desc,tasktime:e.starting_time,tasketc:e.etc,taskdesc:e.notes})])})),console.log("The task is next")},C=function(e){p((function(t){return[].concat(Object(i.a)(t),[Object(j.jsx)(l,{taskname:e.short_desc,tasktime:e.starting_time,tasketc:e.etc,taskdesc:e.notes})])})),console.log("The task is Actual")},E=function(e){q((function(t){return[].concat(Object(i.a)(t),[Object(j.jsx)(l,{taskname:e.short_desc,tasktime:e.starting_time,tasketc:e.etc,taskdesc:e.notes})])})),console.log("The task expired")};return!0===c?Object(j.jsx)(x,{HandleShowModal:function(){r(!1)},sendUsername:function(e,t){O(e);for(var n=[],s=0,a=Object.values(t.cards);s<a.length;s++){var c=a[s];if(c.username_card===e){var r={username_card:"",card_id:0,short_desc:"",starting_time:"",etc:0,notes:"",actual_status:""};console.log(c.username_card,c.card_id,c.short_desc,c.starting_time,c.etc),r.username_card=c.username_card,r.card_id=c.card_id,r.short_desc=c.short_desc,r.starting_time=c.starting_time,r.etc=c.etc,r.notes=c.notes,r.actual_status=c.actual_status,n.push(r)}}I(n)}}):Object(j.jsxs)(a.a.Fragment,{children:["s",Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Task Manager"}),Object(j.jsx)("p",{children:"Welcome: "+h})]}),Object(j.jsxs)("main",{children:[Object(j.jsx)(u,{}),Object(j.jsx)(b,{categorytitle:"Next Tasks",task:w}),Object(j.jsx)(b,{categorytitle:"Actual Tasks",task:k}),Object(j.jsx)(b,{categorytitle:"Expired Tasks",task:y})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),g()}],[[22,1,2]]]);
//# sourceMappingURL=main.97101750.chunk.js.map