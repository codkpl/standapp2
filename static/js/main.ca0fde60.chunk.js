(this.webpackJsonpstandapp2=this.webpackJsonpstandapp2||[]).push([[0],{206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);a(124),a(150),a(152),a(153),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(173),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192);var n=a(0),r=a.n(n),c=a(63),l=a.n(c),m=a(49),i=a.n(m),o=a(90),u=a.n(o),E=a(117),s=a(71),d=a(40),p=a(120),f=(a(201),a(52)),h=a(54),b=a(69),g=a(70),x=a(53),v=a(26),y=a(44),j=a(89),O=a(88),U=a(210),k=a(211),W=a(208),_=a(209),w=function(e,t,a){return r.a.createElement(f.a,{id:"PageUser"},r.a.createElement(h.a,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),e&&r.a.createElement(g.a,{header:r.a.createElement(b.a,null,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c")},r.a.createElement(j.a,{before:e.photo_200?r.a.createElement(O.a,{src:e.photo_200}):null,description:e.city&&e.city.title?e.city.title:""},"".concat(e.first_name," ").concat(e.last_name))),r.a.createElement(x.a,null,r.a.createElement(v.a,{onClick:t,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(W.a,null)),r.a.createElement(v.a,{indicator:r.a.createElement(y.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},r.a.createElement(_.a,null)),r.a.createElement(v.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(U.a,null)),r.a.createElement(v.a,{text:"\u0415\u0449\u0451"},r.a.createElement(k.a,null))))},z=function(e){e.id,e.go,e.homepage;var t=e.PageUser;e.fetchedUser;return r.a.createElement(f.a,{id:"homepage"},r.a.createElement(h.a,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(g.a,{header:r.a.createElement(b.a,{mode:"secondary"},"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043a\u0435\u0439\u0441\u044b...")}),r.a.createElement(x.a,null,r.a.createElement(v.a,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(W.a,null)),r.a.createElement(v.a,{indicator:r.a.createElement(y.a,{size:"s",mode:"prominent"},"1"),text:"\u0418\u0433\u0440\u044b"},r.a.createElement(_.a,null)),r.a.createElement(v.a,{onClick:t,text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(U.a,null)),r.a.createElement(v.a,{text:"\u0415\u0449\u0451"},r.a.createElement(k.a,null))))},A=a(121),C=(a.p,a(206),function(e){return r.a.createElement(f.a,{id:e.id},r.a.createElement(h.a,{left:r.a.createElement(A.a,{onClick:e.go,"data-to":"home"})},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(x.a,null,r.a.createElement(v.a,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(W.a,null)),r.a.createElement(v.a,{indicator:r.a.createElement(y.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},r.a.createElement(_.a,null)),r.a.createElement(v.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(U.a,null)),r.a.createElement(v.a,{text:"\u0415\u0449\u0451"},r.a.createElement(k.a,null))))}),I=function(){var e=Object(n.useState)("home"),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),m=Object(s.a)(l,2),o=m[0],f=m[1],h=Object(n.useState)(r.a.createElement(p.a,{size:"large"})),b=Object(s.a)(h,2),g=b[0],x=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(E.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),x(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){c(e.currentTarget.dataset.to)};return r.a.createElement(d.a,{activePanel:a,popout:g},r.a.createElement(z,{id:"home",fetchedUser:o,go:v}),r.a.createElement(C,{id:"persik",go:v}),r.a.createElement(w,{id:"PageUser",fetchedUser:o,go:w}))};i.a.send("VKWebAppInit"),l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.ca0fde60.chunk.js.map