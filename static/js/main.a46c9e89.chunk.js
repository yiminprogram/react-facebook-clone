(this["webpackJsonpreact-facebook-clone"]=this["webpackJsonpreact-facebook-clone"]||[]).push([[0],{24:function(n,e,t){n.exports=t(33)},33:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(18),c=t.n(o),i=t(2),l=t(3),u=t(45),d=t(46);function f(){var n=Object(i.a)(["\n  position: absolute;\n  top: 0.25rem;\n  left: 0.65rem;\n  color: #606770;\n"]);return f=function(){return n},n}function m(){var n=Object(i.a)(["\n  position: relative;\n  flex: 4;\n  input {\n    width: 100%;\n    font-size: 18px;\n    padding: 0.5rem 1.3rem 0.5rem 2.5rem;\n    border: none;\n    border-radius: 30px;\n    background-color: #f0f2f5;\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(i.a)(["\n  flex: 1;\n  color: #3579ea;\n"]);return b=function(){return n},n}function s(){var n=Object(i.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]);return s=function(){return n},n}var p=l.b.div(s()),g=Object(l.b)(u.a)(b()),v=l.b.div(m()),E=Object(l.b)(d.a)(f()),h=function(){return a.a.createElement(p,null,a.a.createElement(g,null),a.a.createElement(v,null,a.a.createElement(E,null),a.a.createElement("input",{type:"text",placeholder:"\u641c\u5c0b Facebook"})))},x=t(47),j=t(48),O=t(49),y=t(50),k=t(51),w=t(52),I=t(53),z=t(54),C=t(55),q=t(56),F=t(7);function H(){var n=Object(i.a)(["\n  cursor: pointer;\n  flex: 1;\n  border: none;\n  background-color: #fff;\n  &:hover {\n    border-bottom: 3px solid #3579ea;\n  }\n"]);return H=function(){return n},n}var N=l.b.button(H()),S=function(n){var e=n.Fill,t=n.Outline,o=Object(r.useState)(!1),c=Object(F.a)(o,2),i=c[0],l=c[1];return a.a.createElement(N,{onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)}},i?a.a.createElement(e,{style:{color:"#3579ea"}}):a.a.createElement(t,{style:{color:"#87898c"}}))};function M(){var n=Object(i.a)(["\n  flex: 2;\n  display: flex;\n"]);return M=function(){return n},n}var J=l.b.div(M()),L=function(){return a.a.createElement(J,null,a.a.createElement(S,{Fill:x.a,Outline:j.a}),a.a.createElement(S,{Fill:O.a,Outline:y.a}),a.a.createElement(S,{Fill:k.a,Outline:w.a}),a.a.createElement(S,{Fill:I.a,Outline:z.a}),a.a.createElement(S,{Fill:C.a,Outline:q.a}))},T=t(6),A=t.n(T);function B(){var n=Object(i.a)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: none;\n  padding: 1.1rem;\n  margin: 0 0.3rem;\n  background-color: #e4e6ea;\n\n  &:hover {\n    background-color: #c5cad3;\n  }\n\n  .btn-icon {\n    width: 20px;\n    height: 20px;\n  }\n"]);return B=function(){return n},n}var D=l.b.button(B()),G=function(n){var e=n.Icon;return a.a.createElement(D,null,a.a.createElement(e,{className:"btn-icon"}))},K=t(57),P=t(58),Q=t(59);function R(){var n=Object(i.a)(["\n  display: flex;\n"]);return R=function(){return n},n}function U(){var n=Object(i.a)(["\n  cursor: pointer;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 30px;\n  border: none;\n  padding: 0.3rem;\n  background-color: #fff;\n\n  &:hover {\n    background-color: #e4e6ea;\n  }\n\n  img {\n    width: 30px;\n    border-radius: 50%;\n    margin-right: 0.5rem;\n  }\n  span {\n    font-size: 1rem;\n    font-weight: 700;\n  }\n"]);return U=function(){return n},n}function V(){var n=Object(i.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]);return V=function(){return n},n}var W=l.b.div(V()),X=l.b.button(U()),Y=l.b.div(R()),Z=function(){return a.a.createElement(W,null,a.a.createElement(X,null,a.a.createElement("img",{src:A.a,alt:"error"}),a.a.createElement("span",null,"yimin")),a.a.createElement(Y,null,a.a.createElement(G,{Icon:K.a}),a.a.createElement(G,{Icon:P.a}),a.a.createElement(G,{Icon:Q.a})))};function $(){var n=Object(i.a)(["\n  width: 100%;\n  height: 60px;\n  position: fixed;\n  background-color: #fff;\n  box-shadow: 0 0 10px 5px #ddd;\n  margin-bottom: 1rem;\n  z-index: 1;\n\n  display: flex;\n"]);return $=function(){return n},n}var _=l.b.header($()),nn=function(){return a.a.createElement(_,null,a.a.createElement(h,null),a.a.createElement(L,null),a.a.createElement(Z,null))},en=t(64),tn=t(65),rn=t(66),an=t(67);function on(){var n=Object(i.a)(["\n  cursor: pointer;\n  width: 80%;\n  margin-left: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  border-radius: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border: none;\n  background-color: transparent;\n  &:hover {\n    background-color: #e4e6ea;\n  }\n\n  span {\n    margin-left: 1rem;\n    font-size: 0.8rem;\n  }\n  .btn-icon {\n    color: #3579ea;\n  }\n"]);return on=function(){return n},n}var cn=l.b.button(on()),ln=function(n){var e=n.Icon,t=n.children;return a.a.createElement(cn,null,a.a.createElement(e,{className:"btn-icon"}),a.a.createElement("span",null,t))},un=t(60),dn=t(61),fn=t(62),mn=t(63);function bn(){var n=Object(i.a)(["\n  max-height: ",";\n  overflow: hidden;\n  transition: 0.5s;\n"]);return bn=function(){return n},n}var sn=l.b.div(bn(),(function(n){return n.isHidden?"auto":0})),pn=function(n){var e=n.isHidden;return a.a.createElement(sn,{isHidden:e},a.a.createElement(ln,{Icon:K.a},"Messenger"),a.a.createElement(ln,{Icon:un.a},"\u5929\u6c23"),a.a.createElement(ln,{Icon:dn.a},"\u52d5\u614b\u56de\u9867"),a.a.createElement(ln,{Icon:fn.a},"\u904a\u6232"),a.a.createElement(ln,{Icon:mn.a},"\u6d3b\u52d5"))};function gn(){var n=Object(i.a)(["\n  cursor: pointer;\n  width: 80%;\n  margin-left: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  border-radius: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border: none;\n  background-color: transparent;\n  &:hover {\n    background-color: #e4e6ea;\n  }\n\n  span {\n    margin-left: 1rem;\n    font-size: 0.8rem;\n  }\n  .btn-icon {\n    color: #3579ea;\n  }\n  .rotate {\n    transform: rotate(180deg);\n  }\n"]);return gn=function(){return n},n}var vn=l.b.button(gn()),En=function(n){var e=n.showHidden,t=n.isHidden,r=n.Icon,o=n.children;return a.a.createElement(vn,{onClick:e},a.a.createElement(r,{className:"btn-icon ".concat(t?"rotate":"")}),a.a.createElement("span",null,o))};function hn(){var n=Object(i.a)(["\n  position: fixed;\n  top: 80px;\n  bottom: 0;\n  left: 0;\n  width: 25%;\n  overflow-y: auto;\n"]);return hn=function(){return n},n}var xn=l.b.div(hn()),jn=function(){var n=Object(r.useState)(!1),e=Object(F.a)(n,2),t=e[0],o=e[1];return a.a.createElement(xn,null,a.a.createElement(ln,{Icon:O.a},"\u5c0b\u53cb\u5de5\u5177"),a.a.createElement(ln,{Icon:en.a},"\u6700\u65b0\u52d5\u614b"),a.a.createElement(ln,{Icon:tn.a},"\u793e\u5718"),a.a.createElement(ln,{Icon:I.a},"Marketplace"),a.a.createElement(ln,{Icon:rn.a},"\u5f71\u7247"),a.a.createElement(pn,{isHidden:t}),a.a.createElement(En,{showHidden:function(){o(!t)},isHidden:t,Icon:an.a},"\u986f\u793a\u66f4\u591a"))};function On(){var n=Object(i.a)(["\n  cursor: pointer;\n  flex: 1;\n  margin: 0 0.5rem;\n  padding: 0.2rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  border-radius: 5px;\n  background-color: #fff;\n\n  &:hover {\n    background-color: #f1f1f1;\n  }\n\n  span {\n    margin: 0 0.2rem;\n  }\n"]);return On=function(){return n},n}var yn=l.b.button(On()),kn=function(n){var e=n.Icon,t=n.Color,r=n.children;return a.a.createElement(yn,null,a.a.createElement(e,{style:t}),a.a.createElement("span",null,r))};function wn(){var n=Object(i.a)(["\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 50%;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  .btn-icon {\n    width: 20px;\n    height: 20px;\n  }\n\n  &:hover {\n    background-color: #e4e6ea;\n  }\n"]);return wn=function(){return n},n}var In=l.b.button(wn()),zn=function(n){var e=n.Icon,t=n.Color;return a.a.createElement(In,null,a.a.createElement(e,{style:t,className:"btn-icon"}))},Cn=t(68),qn=t(70),Fn=t(71),Hn=t(72),Nn=t(73),Sn=t(74),Mn=t(75),Jn=t(69),Ln=t(15),Tn=t(14),An=t(13),Bn=t(12),Dn=t(11);function Gn(){var n=Object(i.a)(["\n  border: 1px solid #cdcfd3;\n  border-radius: 5px;\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  span {\n    font-size: 0.8rem;\n  }\n"]);return Gn=function(){return n},n}function Kn(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  img {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n  }\n  span {\n    margin-left: 0.5rem;\n    font-size: 0.8rem;\n  }\n"]);return Kn=function(){return n},n}function Pn(){var n=Object(i.a)(["\n  cursor: pointer;\n  position: absolute;\n  right: 3%;\n  top: 3%;\n  color: #5f666f;\n  background-color: #e4e6ea;\n  border-radius: 50%;\n\n  &:hover {\n    background-color: #c5cad3;\n  }\n"]);return Pn=function(){return n},n}function Qn(){var n=Object(i.a)(["\n  position: relative;\n  width: 30%;\n  height: 45%;\n  background-color: #fff;\n  box-shadow: 0 0 10px #ddd;\n  border-radius: 5px;\n  padding: 1rem 1.3rem;\n\n  h1 {\n    font-size: 1rem;\n    text-align: center;\n  }\n  textarea {\n    width: 100%;\n    height: 125px;\n    border: none;\n    resize: none;\n    font-size: 1rem;\n    margin-bottom: 0.5rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  > button {\n    cursor: pointer;\n    width: 100%;\n    font-size: 1rem;\n    color: #fff;\n    background-color: #3579ea;\n    border: none;\n    border-radius: 5px;\n    padding: 0.3rem;\n  }\n"]);return Qn=function(){return n},n}function Rn(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: #ffffffcc;\n  z-index: 1;\n"]);return Rn=function(){return n},n}var Un=l.b.div(Rn()),Vn=l.b.form(Qn()),Wn=Object(l.b)(Cn.a)(Pn()),Xn=l.b.div(Kn()),Yn=l.b.div(Gn()),Zn=function(n){var e=n.close;return a.a.createElement(Un,null,a.a.createElement(Vn,null,a.a.createElement(Wn,{onClick:function(){return e()}}),a.a.createElement("h1",null,"\u5efa\u7acb\u8cbc\u6587"),a.a.createElement("hr",null),a.a.createElement(Xn,null,a.a.createElement("img",{src:A.a,alt:"error"}),a.a.createElement("span",null,"yimin")),a.a.createElement("textarea",{placeholder:"yimin\uff0c\u5728\u60f3\u4e9b\u4ec0\u9ebc"}),a.a.createElement(Yn,null,a.a.createElement("span",null,"\u65b0\u589e\u5230\u8cbc\u6587"),a.a.createElement(zn,{Color:{color:Jn.a[500]},Icon:qn.a}),a.a.createElement(zn,{Color:{color:Ln.a[500]},Icon:Fn.a}),a.a.createElement(zn,{Color:{color:Tn.a[500]},Icon:Hn.a}),a.a.createElement(zn,{Color:{color:An.a[500]},Icon:Nn.a}),a.a.createElement(zn,{Color:{color:Bn.a[500]},Icon:Sn.a}),a.a.createElement(zn,{Color:{color:Dn.a[500]},Icon:Mn.a})),a.a.createElement("button",null,"\u767c\u4f48")))},$n=t(76);function _n(){var n=Object(i.a)(["\n  display: flex;\n"]);return _n=function(){return n},n}function ne(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 35px;\n    cursor: pointer;\n    margin: 0 1rem;\n    border-radius: 50%;\n  }\n  button {\n    flex: 1;\n    cursor: pointer;\n    padding: 0.2rem 0.8rem;\n    border: none;\n    border-radius: 30px;\n    text-align: left;\n    background-color: #eff1f4;\n    color: #887c90;\n    font-size: 1rem;\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(i.a)(["\n  padding: 0.5rem;\n  background-color: #fff;\n  border-radius: 5px;\n\n  hr {\n    width: 100%;\n    background-color: #edeef1;\n    color: #edeef1;\n    border-width: 0;\n    height: 1px;\n  }\n"]);return ee=function(){return n},n}var te=l.b.div(ee()),re=l.b.div(ne()),ae=l.b.div(_n()),oe=function(){var n=Object(r.useState)(!1),e=Object(F.a)(n,2),t=e[0],o=e[1];return a.a.createElement(te,null,a.a.createElement(re,null,a.a.createElement("img",{src:A.a,alt:"error"}),a.a.createElement("button",{onClick:function(){return o((function(n){return!0}))}},"yimin\uff0c\u5728\u60f3\u4e9b\u4ec0\u9ebc")),a.a.createElement("hr",null),a.a.createElement(ae,null,a.a.createElement(kn,{Icon:$n.a,Color:{color:Tn.a[500]}},"\u76f4\u64ad\u8996\u8a0a"),a.a.createElement(kn,{Icon:Fn.a,Color:{color:Bn.a[500]}},"\u76f8\u7247/\u5f71\u7247"),a.a.createElement(kn,{Icon:Nn.a,Color:{color:Ln.a[500]}},"\u611f\u53d7/\u6d3b\u52d5")),t?a.a.createElement(Zn,{close:function(){o((function(n){return!1}))}}):null)};function ce(){var n=Object(i.a)([""]);return ce=function(){return n},n}var ie=l.b.div(ce()),le=function(){return a.a.createElement(ie,null)};function ue(){var n=Object(i.a)(["\n  width: 45%;\n  margin: 0 auto;\n"]);return ue=function(){return n},n}var de=l.b.div(ue()),fe=function(){return a.a.createElement(de,null,a.a.createElement(oe,null),a.a.createElement(le,null))};function me(){var n=Object(i.a)(["\n  cursor: pointer;\n  width: 100%;\n  background-color: #e4e6ea;\n  text-align: center;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 10px;\n\n  &:hover {\n    background-color: #c5cad3;\n  }\n"]);return me=function(){return n},n}function be(){var n=Object(i.a)(["\n  .icon {\n    width: 20px;\n    margin: 0 0.5rem;\n  }\n"]);return be=function(){return n},n}function se(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #65676b;\n  font-size: 0.8rem;\n  margin-bottom: 1rem;\n"]);return se=function(){return n},n}function pe(){var n=Object(i.a)(["\n  position: fixed;\n  width: 20%;\n  top: 80px;\n  right: 0;\n  margin-right: 1rem;\n"]);return pe=function(){return n},n}var ge=l.b.div(pe()),ve=l.b.div(se()),Ee=l.b.div(be()),he=l.b.button(me()),xe=function(){return a.a.createElement(ge,null,a.a.createElement(ve,null,a.a.createElement("span",null,"\u806f\u7d61\u4eba"),a.a.createElement(Ee,null,a.a.createElement(qn.a,{className:"icon"}),a.a.createElement(d.a,{className:"icon"}),a.a.createElement(Mn.a,{className:"icon"}))),a.a.createElement(he,null,"\u67e5\u770b\u5168\u90e8"))};function je(){var n=Object(i.a)(["\n  width: 100%;\n  padding-top: 80px;\n  position: relative;\n"]);return je=function(){return n},n}var Oe=l.b.div(je()),ye=function(){return a.a.createElement(Oe,null,a.a.createElement(jn,null),a.a.createElement(fe,null),a.a.createElement(xe,null))};function ke(){var n=Object(i.a)(["\n  min-height: 100vh;\n  background-color: #f0f2f5;\n"]);return ke=function(){return n},n}var we=l.b.div(ke()),Ie=function(){return a.a.createElement(we,null,a.a.createElement(nn,null),a.a.createElement(ye,null))};function ze(){var n=Object(i.a)(["\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n/* ============================================== */\n\nbody,html{\n  width:100%;\n  font-size: calc(0.75rem + 1vmin);\n  font-family: 'Noto Sans TC', sans-serif;\n}\n\n*,*::before,*::after{\n  box-sizing:border-box;\n}\n\n#root{\n  width:100%;\n}\n"]);return ze=function(){return n},n}var Ce=Object(l.a)(ze());c.a.render(a.a.createElement(r.Fragment,null,a.a.createElement(Ce,null),a.a.createElement(Ie,null)),document.querySelector("#root"))},6:function(n,e,t){n.exports=t.p+"static/media/user-photo.2f093f73.png"}},[[24,1,2]]]);
//# sourceMappingURL=main.a46c9e89.chunk.js.map