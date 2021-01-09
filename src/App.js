import './App.css';
import React from 'react';
// import defaultText from './defaultText';

const initText = `Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/
`

const marked = require ('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const DOMPurify = createDomPurify(window);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.processText = this.processText.bind(this);
    }

    handleChange = (event) => {
      this.setState({ input: event.target.value });
    }

    processText = () => {
      let dirtyHTML = marked(this.state.input, {breaks: true, });
      let cleanHTML = DOMPurify.sanitize(dirtyHTML); // Sanitize HTML using dompurify
      return cleanHTML;
    }

    componentDidMount() {
      this.setState({ input: initText })
    }

    render () {
      return (
        <>
        <div id="header">
          <h1 id="title">Markdown Previewer</h1>
        </div>
        <div id="container">
          <div id="textEditor">
          <textarea id="editor" placeholder="Enter markdown text here" value={this.state.input} onChange={this.handleChange}></textarea>
          </div>
          <div id="previewArea">
            <div id="preview">
            <div dangerouslySetInnerHTML={{__html: this.processText()}} />
            </div>
            <div id="raw-html-block">
              <h3>Raw HTML</h3>
              <p id="raw-html">{this.processText()}</p>
            </div>
          </div>
        </div>
        </>
      );
    }
  };

export default App;
