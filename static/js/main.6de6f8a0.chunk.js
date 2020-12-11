(this.webpackJsonpinfovis2=this.webpackJsonpinfovis2||[]).push([[0],{133:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(1),i=c.n(a),r=c(27),s=c.n(r),j=c(29),d=(c(96),c(39)),o=c(17),l=(c(97),c(7)),h=c.p+"static/media/logo.6ce24c58.svg",b=c(37),u=c.n(b),O=function(e){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(n.jsxs)("p",{children:["Nuclear ",Object(n.jsx)("code",{children:"diving"})," decision support system."]}),e.loading?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("small",{children:"Please wait while the CSV-File is parsed..."}),Object(n.jsx)("br",{}),Object(n.jsx)(u.a,{css:"margin: 0 auto;"})]}):Object(n.jsx)(j.b,{to:"/welcome",className:"btn btn-danger",children:"Enter Page and see visualizations"})]})})},x=c(66),p=0,f=function(e){var t=Object(a.useState)(function(){return p++,"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id").concat(p)}()),c=Object(o.a)(t,1)[0];return Object(a.useEffect)((function(){x.a("#".concat(c)).append("svg").attr("width",e.width).attr("height",e.height).selectAll("rect").data([12,5,6,6,9,10]).enter().append("rect").attr("x",(function(e,t){return 70*t})).attr("y",0).attr("width",25).attr("height",(function(e,t){return 10*e})).attr("fill","green")}),[]),Object(n.jsx)("div",{id:c})};f.defaultProps={width:700,height:300};var g=c(62),m=c.n(g),v=c(135),S=c(136),F=c(137),w=c(138),y=c(139),D=c(140),B=c(141),N=c(144),T=c(143),C=c(145),E=c(142),P=function(e){var t=Object(a.useState)(!1),c=Object(o.a)(t,2),i=c[0],r=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)(v.a,{color:"light",light:!0,expand:"md",children:[Object(n.jsx)(S.a,{href:"/",children:"Scuba Diving Support"}),Object(n.jsx)(F.a,{onClick:function(){return r(!i)}}),Object(n.jsxs)(w.a,{isOpen:i,navbar:!0,children:[Object(n.jsxs)(y.a,{className:"mr-auto",navbar:!0,children:[Object(n.jsx)(D.a,{children:Object(n.jsx)(B.a,{href:"/#/welcome",children:"Home"})}),Object(n.jsx)(D.a,{children:Object(n.jsx)(B.a,{href:"/#/vis",children:"Vis"})})]}),Object(n.jsxs)(N.a,{navbar:!0,children:[Object(n.jsx)(T.a,{nav:!0,children:"Group 14"}),Object(n.jsxs)(C.a,{right:!0,children:[Object(n.jsx)(E.a,{children:Object(n.jsx)("strong",{children:"Members"})}),Object(n.jsx)(E.a,{divider:!0}),Object(n.jsx)(E.a,{children:"Simone Andreetto"}),Object(n.jsx)(E.a,{children:"Christoph G\xf6tz"}),Object(n.jsx)(E.a,{children:"Felix Winterleitner"})]})]})]})]}),Object(n.jsx)("div",{className:"container",children:e.children})]})},A=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Welcome to the Diving Support System Visualization Page"}),Object(n.jsx)("p",{children:"Here, our sample visualizations for the use case of scuba diving in the San Francisco Bay area are presented."}),Object(n.jsxs)("p",{children:["The dataset in use can be obtained from: ",Object(n.jsx)("a",{href:"infovis2/SFBay.csv",children:"SFBay.csv"})]}),Object(n.jsxs)("p",{children:["It consists of ",e.data.length," data entries recorded from ",e.data[0].TimeStamp.toLocaleDateString("de-DE")," to ",e.data[e.data.length-1].TimeStamp.toLocaleDateString("de-DE")," in the San Francisco Bay area."]})]})},z=c(65),L=c.n(z),k=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(!0),s=Object(o.a)(r,2),j=s[0],h=s[1];return Object(a.useEffect)((function(){m.a.parse("infovis2/SFBay.csv",{download:!0,header:!0,complete:function(e,t){var c=e.data.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{TimeStamp:L()(e.TimeStamp).toDate()})}));c.pop(),i(c),h(!1)}})}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(O,{data:c,loading:j})}}),Object(n.jsxs)(P,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/welcome",render:function(){return Object(n.jsx)(A,{data:c})}}),Object(n.jsx)(l.a,{exact:!0,path:"/vis",render:function(){return Object(n.jsx)(f,{data:c})}})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,146)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};c(131);s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j.a,{children:Object(n.jsx)(k,{})})}),document.getElementById("root")),I()},96:function(e,t,c){},97:function(e,t,c){}},[[133,1,2]]]);
//# sourceMappingURL=main.6de6f8a0.chunk.js.map