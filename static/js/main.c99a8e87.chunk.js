(this.webpackJsonpstandapp2=this.webpackJsonpstandapp2||[]).push([[0],{205:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);a(123),a(149),a(151),a(152),a(154),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(163),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(174),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191);var n=a(0),c=a.n(n),r=a(62),l=a.n(r),i=a(47),m=a.n(i),o=a(90),u=a.n(o),s=a(117),E=a(72),d=a(49),p=a(120),f=(a(200),a(53)),b=a(57),h=a(56),v=a(58),x=a(70),g=a(69),y=a(55),j=a(25),O=a(48),k=a(209),w=a(210),U=a(207),W=a(208),_=void 0,A=function(e){e.id,e.fetchedUser;return c.a.createElement(f.a,{id:"homepage"},c.a.createElement(b.a,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),c.a.createElement(v.a,{header:c.a.createElement(h.a,{mode:"secondary"},"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043a\u0435\u0439\u0441\u044b...")}),c.a.createElement(y.a,null,c.a.createElement(j.a,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},c.a.createElement(U.a,null)),c.a.createElement(j.a,{indicator:c.a.createElement(O.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},c.a.createElement(W.a,null)),c.a.createElement(j.a,{onClick:function(){return _.setState({activePanel:"userpage"})},expandable:!0,before:c.a.createElement(k.a,null),text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},c.a.createElement(k.a,null)),c.a.createElement(j.a,{text:"\u0415\u0449\u0451"},c.a.createElement(w.a,null))))},I=(a.p,a(205),function(e,t,a){return c.a.createElement(f.a,{id:e.id},c.a.createElement(b.a,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),t&&c.a.createElement(v.a,{header:c.a.createElement(h.a,{mode:"secondary"},"User Data Fetched with VK Bridge")},c.a.createElement(x.a,{before:t.photo_200?c.a.createElement(g.a,{src:t.photo_200}):null,description:t.city&&t.city.title?t.city.title:""},"".concat(t.first_name," ").concat(t.last_name))),c.a.createElement(y.a,null,c.a.createElement(j.a,{onClick:a,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},c.a.createElement(U.a,null)),c.a.createElement(j.a,{indicator:c.a.createElement(O.a,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},c.a.createElement(W.a,null)),c.a.createElement(j.a,{text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},c.a.createElement(k.a,null)),c.a.createElement(j.a,{text:"\u0415\u0449\u0451"},c.a.createElement(w.a,null))))}),K=function(){var e=Object(n.useState)("home"),t=Object(E.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),i=Object(E.a)(l,2),o=i[0],f=i[1],b=Object(n.useState)(c.a.createElement(p.a,{size:"large"})),h=Object(E.a)(b,2),v=h[0],x=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,f(t),x(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var g=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(d.a,{activePanel:a,popout:v},c.a.createElement(A,{id:"home",fetchedUser:o,go:g}),c.a.createElement(I,{id:"persik",go:g}))};m.a.send("VKWebAppInit"),l.a.render(c.a.createElement(K,null),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.c99a8e87.chunk.js.map