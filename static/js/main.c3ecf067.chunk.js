(this.webpackJsonpstandapp2=this.webpackJsonpstandapp2||[]).push([[0],{203:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);a(121),a(147),a(149),a(150),a(152),a(153),a(154),a(155),a(156),a(157),a(158),a(159),a(161),a(162),a(163),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(172),a(173),a(174),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189);var n=a(0),c=a.n(n),r=a(62),l=a.n(r),m=a(47),i=a.n(m),o=a(88),u=a.n(o),s=a(115),E=a(71),d=a(49),p=a(118),f=(a(198),a(53)),h=a(57),b=a(56),x=a(58),y=a(70),v=a(69),g=a(55),O=a(25),_=a(48),j=a(207),k=a(208),U=a(205),W=a(206),w=function(e){var t=e.id;e.go,e.fetchedUser;return c.a.createElement(f.a,{id:t},c.a.createElement(h.a,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),c.a.createElement(x.a,{header:c.a.createElement(b.a,{mode:"secondary"},"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043a\u0435\u0439\u0441\u044b...")}),c.a.createElement(g.a,null,c.a.createElement(O.a,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},c.a.createElement(U.a,null)),c.a.createElement(O.a,{indicator:c.a.createElement(_.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},c.a.createElement(W.a,null)),c.a.createElement(O.a,{onClick:C,text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},c.a.createElement(j.a,null)),c.a.createElement(O.a,{text:"\u0415\u0449\u0451"},c.a.createElement(k.a,null))))},C=function(e){var t=e.id,a=(e.go,e.fetchedUser);return c.a.createElement(f.a,{id:t},c.a.createElement(h.a,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),a&&c.a.createElement(x.a,{header:c.a.createElement(b.a,{mode:"secondary"},"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c")},c.a.createElement(y.a,{before:a.photo_200?c.a.createElement(v.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),c.a.createElement(g.a,null,c.a.createElement(O.a,{onClick:w,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},c.a.createElement(U.a,null)),c.a.createElement(O.a,{indicator:c.a.createElement(_.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},c.a.createElement(W.a,null)),c.a.createElement(O.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},c.a.createElement(Icon20UserCircleOutline,null)),c.a.createElement(O.a,{text:"\u0415\u0449\u0451"},c.a.createElement(k.a,null))))},I=w,z=(a.p,a(203),function(e,t,a){return c.a.createElement(f.a,{id:e.id},c.a.createElement(h.a,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),t&&c.a.createElement(x.a,{header:c.a.createElement(b.a,{mode:"secondary"},"User Data Fetched with VK Bridge")},c.a.createElement(y.a,{before:t.photo_200?c.a.createElement(v.a,{src:t.photo_200}):null,description:t.city&&t.city.title?t.city.title:""},"".concat(t.first_name," ").concat(t.last_name))),c.a.createElement(g.a,null,c.a.createElement(O.a,{onClick:a,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},c.a.createElement(U.a,null)),c.a.createElement(O.a,{indicator:c.a.createElement(_.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},c.a.createElement(W.a,null)),c.a.createElement(O.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},c.a.createElement(j.a,null)),c.a.createElement(O.a,{text:"\u0415\u0449\u0451"},c.a.createElement(k.a,null))))}),A=function(){var e=Object(n.useState)("home"),t=Object(E.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),m=Object(E.a)(l,2),o=m[0],f=m[1],h=Object(n.useState)(c.a.createElement(p.a,{size:"large"})),b=Object(E.a)(h,2),x=b[0],y=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),y(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(d.a,{activePanel:a,popout:x},c.a.createElement(I,{id:"home",fetchedUser:o,go:v}),c.a.createElement(z,{id:"persik",go:v}))};i.a.send("VKWebAppInit"),l.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.c3ecf067.chunk.js.map