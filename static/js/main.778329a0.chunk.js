(this.webpackJsonpstandapp2=this.webpackJsonpstandapp2||[]).push([[0],{206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);a(124),a(150),a(152),a(153),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(173),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192);var n=a(0),l=a.n(n),r=a(63),c=a.n(r),m=a(49),i=a.n(m),o=a(90),u=a.n(o),E=a(117),s=a(71),d=a(40),p=a(120),f=(a(201),a(52)),h=a(54),b=a(69),g=a(70),x=a(53),v=a(26),y=a(44),j=a(210),O=a(211),k=a(208),W=a(209),_=function(e){e.id;var t=e.go;e.fetchedUser;return l.a.createElement(f.a,{id:"homepage"},l.a.createElement(h.a,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement(g.a,{header:l.a.createElement(b.a,{mode:"secondary"},"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043a\u0435\u0439\u0441\u044b...")}),l.a.createElement(x.a,null,l.a.createElement(v.a,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(k.a,null)),l.a.createElement(v.a,{indicator:l.a.createElement(y.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},l.a.createElement(W.a,null)),l.a.createElement(v.a,{onClick:t,"data-to":"pageuser",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(j.a,null)),l.a.createElement(v.a,{text:"\u0415\u0449\u0451"},l.a.createElement(O.a,null))))},w=a(121),z=(a.p,a(206),function(e){return l.a.createElement(f.a,{id:e.id},l.a.createElement(h.a,{left:l.a.createElement(w.a,{onClick:e.go,"data-to":"home"})},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement(x.a,null,l.a.createElement(v.a,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(k.a,null)),l.a.createElement(v.a,{indicator:l.a.createElement(y.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},l.a.createElement(W.a,null)),l.a.createElement(v.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(j.a,null)),l.a.createElement(v.a,{text:"\u0415\u0449\u0451"},l.a.createElement(O.a,null))))}),A=a(89),C=a(88),I=function(e,t){return l.a.createElement(f.a,{id:"pageuser"},l.a.createElement(h.a,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),e&&l.a.createElement(g.a,{header:l.a.createElement(b.a,null,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c")},l.a.createElement(A.a,{before:e.photo_200?l.a.createElement(C.a,{src:e.photo_200}):null,description:e.city&&e.city.title?e.city.title:""},"".concat(e.first_name," ").concat(e.last_name))),l.a.createElement(x.a,null,l.a.createElement(v.a,{onClick:go,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},l.a.createElement(k.a,null)),l.a.createElement(v.a,{indicator:l.a.createElement(y.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},l.a.createElement(W.a,null)),l.a.createElement(v.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(j.a,null)),l.a.createElement(v.a,{text:"\u0415\u0449\u0451"},l.a.createElement(O.a,null))))},N=function(){var e=Object(n.useState)("home"),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),m=Object(s.a)(c,2),o=m[0],f=m[1],h=Object(n.useState)(l.a.createElement(p.a,{size:"large"})),b=Object(s.a)(h,2),g=b[0],x=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),x(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var l=document.createAttribute("scheme");l.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(l)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return l.a.createElement(d.a,{activePanel:a,popout:g},l.a.createElement(_,{id:"homepage",fetchedUser:o,go:v}),l.a.createElement(z,{id:"persik",go:v}),l.a.createElement(I,{id:"pageuser",go:v}))};i.a.send("VKWebAppInit"),c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.778329a0.chunk.js.map