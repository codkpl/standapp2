(this.webpackJsonpstandapp2=this.webpackJsonpstandapp2||[]).push([[0],{206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);a(124),a(150),a(152),a(153),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(173),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192);var n=a(0),r=a.n(n),c=a(65),l=a.n(c),m=a(49),i=a.n(m),o=a(91),u=a.n(o),s=a(118),E=a(72),d=a(40),p=a(121),f=(a(201),a(52)),h=a(54),b=a(59),g=a(60),x=a(53),y=a(26),j=a(44),v=a(71),k=a(90),O=a(89),U=a(210),C=a(211),P=a(208),W=a(209),_=function(e){return r.a.createElement(f.a,{id:"PageUser"},r.a.createElement(h.a,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(g.a,{header:r.a.createElement(b.a,{mode:"secondary"},"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c:")}),e&&r.a.createElement(g.a,{header:r.a.createElement(b.a,null,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c")},r.a.createElement(k.a,{before:e.photo_200?r.a.createElement(O.a,{src:e.photo_200}):null,description:e.city&&e.city.title?e.city.title:""},"".concat(e.first_name," ").concat(e.last_name))),r.a.createElement(x.a,null,r.a.createElement(y.a,{onClick:"./PageUser.js",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(P.a,null)),r.a.createElement(y.a,{indicator:r.a.createElement(j.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},r.a.createElement(W.a,null)),r.a.createElement(y.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(U.a,null)),r.a.createElement(y.a,{text:"\u0415\u0449\u0451"},r.a.createElement(C.a,null))))},w=function(e){e.id,e.go,e.pageuser,e.fetchedUser;return r.a.createElement(f.a,{id:"homepage"},r.a.createElement(h.a,{left:r.a.createElement(v.a,{onClick:PageUser})},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(g.a,{header:r.a.createElement(b.a,{mode:"secondary"},"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043a\u0435\u0439\u0441\u044b...")}),r.a.createElement(x.a,null,r.a.createElement(y.a,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(P.a,null)),r.a.createElement(y.a,{indicator:r.a.createElement(j.a,{size:"s",mode:"prominent"},"1"),text:"\u0418\u0433\u0440\u044b"},r.a.createElement(W.a,null)),r.a.createElement(y.a,{onClick:PageUser,text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(U.a,null)),r.a.createElement(y.a,{text:"\u0415\u0449\u0451"},r.a.createElement(C.a,null))))},z=(a.p,a(206),function(e){return r.a.createElement(f.a,{id:e.id},r.a.createElement(h.a,{left:r.a.createElement(v.a,{onClick:e.go,"data-to":"home"})},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(x.a,null,r.a.createElement(y.a,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(P.a,null)),r.a.createElement(y.a,{indicator:r.a.createElement(j.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},r.a.createElement(W.a,null)),r.a.createElement(y.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(U.a,null)),r.a.createElement(y.a,{text:"\u0415\u0449\u0451"},r.a.createElement(C.a,null))))}),A=function(){var e=Object(n.useState)("home"),t=Object(E.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),m=Object(E.a)(l,2),o=m[0],f=m[1],h=Object(n.useState)(r.a.createElement(p.a,{size:"large"})),b=Object(E.a)(h,2),g=b[0],x=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),x(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){c(e.currentTarget.dataset.to)};return r.a.createElement(d.a,{activePanel:a,popout:g},r.a.createElement(w,{id:"home",fetchedUser:o,go:y}),r.a.createElement(z,{id:"persik",go:y}),r.a.createElement(_,{id:"pageuser",go:y}))};i.a.send("VKWebAppInit"),l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.99711fa6.chunk.js.map