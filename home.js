webpackJsonp([2],{152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),r=n.n(a),o=n(19),l=n.n(o),c=n(20),i=n.n(c),s=n(21),u=n.n(s),f=n(0),p=n(171),d=n(172),_=n(68),m=function(e){function t(){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),l()(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"pt-content-card__home-container pt-content-card__home-container--home flex flex-dc"},f.default.createElement(p.a,{profile:_.profile}),f.default.createElement(d.a,{profile:_.profile}))}}]),t}(f.default.PureComponent);t.default=m},157:function(e,t,n){"use strict";var a=n(18),r=n.n(a),o=n(19),l=n.n(o),c=n(20),i=n.n(c),s=n(21),u=n.n(s),f=n(0),p=function(e){function t(){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return f.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},f.default.createElement("use",{xlinkHref:"assets/icons.svg#"+this.props.iconName}))}}]),t}(f.default.PureComponent);t.a=p},171:function(e,t,n){"use strict";var a=n(18),r=n.n(a),o=n(19),l=n.n(o),c=n(20),i=n.n(c),s=n(21),u=n.n(s),f=n(0),p=n(68),d=function(e){function t(){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),l()(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"pt-content-card__header flex flex-dc flex-main-center"},f.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",preserveAspectRatio:"none",className:"pt-content-card__header__background"},f.default.createElement("polygon",{points:"0,200 200,0 200,200"})),f.default.createElement("div",{className:"pt-content-card__header__image flex flex-main-center"},f.default.createElement("img",{src:"./assets/"+p.profile.avatarPath,alt:this.props.profile.fullName})),f.default.createElement("h1",{className:"pt-content-card__header__title-name ta-c"},this.props.profile.fullName),f.default.createElement("p",{className:"pt-content-card__header__title-desc ta-c"},this.props.profile.description))}}]),t}(f.default.PureComponent);t.a=d},172:function(e,t,n){"use strict";var a=n(18),r=n.n(a),o=n(19),l=n.n(o),c=n(20),i=n.n(c),s=n(21),u=n.n(s),f=n(0),p=n(27),d=n(173),_=n(157),m=n(67),h=n.n(m),v=h.a.home,E=function(e){function t(){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.profile.social.map(function(e,t){return f.default.createElement("a",{key:t,className:"pt-content-card__body__social-icons__icon",href:e.url,target:"_blank",title:e.text},f.default.createElement(_.a,{iconName:e.iconName,iconColor:e.hoverColor}))});return f.default.createElement("div",{className:"pt-content-card__body flex flex-dc flex-main-center"},f.default.createElement("div",{className:"pt-content-card__body__icons flex flex-cross-center flex-sa"},f.default.createElement(p.Link,{to:"/about",title:v.about},f.default.createElement(d.a,{iconTitle:v.about_alt,iconName:"account"})),f.default.createElement(p.Link,{to:"/work",title:v.work},f.default.createElement(d.a,{iconTitle:v.work_alt,iconName:"folder"})),f.default.createElement(p.Link,{to:"/contact",title:v.contact},f.default.createElement(d.a,{iconTitle:v.contact_alt,iconName:"message"}))),this.props.profile.social.length>0&&f.default.createElement("div",{className:"pt-content-card__body__social-icons flex flex-full-center"},e))}}]),t}(f.default.PureComponent);t.a=E},173:function(e,t,n){"use strict";var a=n(18),r=n.n(a),o=n(19),l=n.n(o),c=n(20),i=n.n(c),s=n(21),u=n.n(s),f=n(0),p=n(157),d=function(e){function t(){return r()(this,t),i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),l()(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"pt-content-card__body__icons__icon flex flex-dc flex-cross-center"},f.default.createElement(p.a,{iconName:this.props.iconName}),f.default.createElement("p",null,this.props.iconTitle))}}]),t}(f.default.PureComponent);t.a=d}});