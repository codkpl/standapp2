(this.webpackJsonpstandapp2=this.webpackJsonpstandapp2||[]).push([[0],{205:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);a(123),a(149),a(151),a(152),a(154),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(163),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(174),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191);var n=a(0),r=a.n(n),c=a(59),l=a.n(c),i=a(49),m=a.n(i),o=a(85),s=a.n(o),d=a(114),u=a(68),p=a(50),E=a(120),b=(a(200),a(60)),h=a(67),f=a(86),g=a(119),k=a(87),v=a(121),y=a(118),j=a(117),I=a(209),O=a(210),x=a(207),T=a(208),w=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(b.a,{id:t},r.a.createElement(h.a,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),n&&r.a.createElement(k.a,{header:r.a.createElement(f.a,{mode:"secondary"},"User Data Fetched with VK Bridge")},r.a.createElement(v.a,{before:n.photo_200?r.a.createElement(j.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(k.a,{header:r.a.createElement(f.a,{mode:"secondary"},"Navigation Example")},r.a.createElement(y.a,null,r.a.createElement(g.a,{stretched:!0,size:"l",mode:"secondary",onClick:a,"data-to":"persik"},"Show me the Persik, please"))),r.a.createElement(Tabbar,null,r.a.createElement(TabbarItem,{text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},r.a.createElement(x.a,null)),r.a.createElement(TabbarItem,{indicator:r.a.createElement(Counter,{size:"s",mode:"prominent"},"NEW"),text:"\u0418\u0433\u0440\u044b"},r.a.createElement(T.a,null)),r.a.createElement(TabbarItem,{indicator:r.a.createElement(Badge,{mode:"prominent"}),text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(I.a,null)),r.a.createElement(TabbarItem,{indicator:r.a.createElement(Badge,{mode:"prominent"}),text:"\u0415\u0449\u0451"},r.a.createElement(O.a,null))))},C=a(122),P=a.p+"static/media/persik.ae9f0072.png",U=(a(205),function(e){return r.a.createElement(b.a,{id:e.id},r.a.createElement(h.a,{left:r.a.createElement(C.a,{onClick:e.go,"data-to":"home"})},"Persik"),r.a.createElement("img",{className:"Persik",src:P,alt:"Persik The Cat"}))}),_=function(){var e=Object(n.useState)("home"),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),o=i[0],b=i[1],h=Object(n.useState)(r.a.createElement(E.a,{size:"large"})),f=Object(u.a)(h,2),g=f[0],k=f[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,b(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){c(e.currentTarget.dataset.to)};return r.a.createElement(p.a,{activePanel:a,popout:g},r.a.createElement(w,{id:"home",fetchedUser:o,go:v}),r.a.createElement(U,{id:"persik",go:v}))};m.a.send("VKWebAppInit"),l.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.65474d98.chunk.js.map