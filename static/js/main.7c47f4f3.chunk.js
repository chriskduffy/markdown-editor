(this["webpackJsonpmarkdown-editor"]=this["webpackJsonpmarkdown-editor"]||[]).push([[0],{1102:function(e,t,n){"use strict";n.r(t);var i=n(34),o=n(110),r=n.n(o),a=n(484),s=n.n(a),c=(n(494),n(485)),d=n(486),h=n(129),u=n(488),l=n(487),f=(n(495),n(496)),p=n(497)(new(0,n(254).JSDOM)("").window),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).handleChange=function(e){i.setState({input:e.target.value})},i.processText=function(){var e=f(i.state.input,{breaks:!0});return p.sanitize(e)},i.state={input:" ",html:"<></>"},i.handleChange=i.handleChange.bind(Object(h.a)(i)),i.processText=i.processText.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({input:"Marked - Markdown Parser\n========================\n\n[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.\n\nHow To Use The Demo\n-------------------\n\n1. Type in stuff on the left.\n2. See the live updates on the right.\n\nThat's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:\n\n- **Preview:**  A live display of the generated HTML as it would render in a browser.\n- **HTML Source:**  The generated HTML before your browser makes it pretty.\n- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.\n- **Quick Reference:**  A brief run-down of how to format things using markdown.\n\n[Marked]: https://github.com/markedjs/marked/\n[Markdown]: http://daringfireball.net/projects/markdown/\n"})}},{key:"componentDidUpdate",value:function(e,t){t.input!==this.state.input&&this.setState({html:this.processText()})}},{key:"render",value:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{id:"header",children:Object(i.jsx)("h1",{id:"title",children:"Markdown Previewer"})}),Object(i.jsxs)("div",{id:"container",children:[Object(i.jsx)("div",{id:"textEditor",children:Object(i.jsx)("textarea",{id:"editor",placeholder:"Enter markdown text here",value:this.state.input,onChange:this.handleChange})}),Object(i.jsxs)("div",{id:"previewArea",children:[Object(i.jsxs)("div",{id:"preview",children:[console.log(this.state),Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.html}})]}),Object(i.jsxs)("div",{id:"raw-html-block",children:[Object(i.jsx)("h3",{children:"Raw HTML"}),Object(i.jsx)("p",{id:"raw-html",children:this.state.html})]})]})]})]})}}]),n}(r.a.Component),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1103)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),o(e),r(e),a(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root")),j()},301:function(e,t){},494:function(e,t,n){},495:function(e,t,n){},547:function(e,t){},548:function(e,t){},852:function(e,t){},854:function(e,t){},864:function(e,t){},866:function(e,t){},875:function(e,t){},877:function(e,t){},902:function(e,t){},904:function(e,t){},905:function(e,t){},910:function(e,t){},912:function(e,t){},931:function(e,t){},943:function(e,t){},946:function(e,t){},968:function(e,t){}},[[1102,1,2]]]);
//# sourceMappingURL=main.7c47f4f3.chunk.js.map