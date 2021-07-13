import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHTML: false,
      isCSS: false,
      isJS: false,
      topics: [
        { id: 'html', text: 'Hypertext Markup Language(HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.' },
        { id: 'css', text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
        { id: 'js', text: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curlybracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.' }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.id === 'html') {
      if (!this.state.isHTML) {
        this.setState({
          isHTML: true,
          isCSS: false,
          isJS: false
        });
      } else {
        this.setState({
          isHTML: false
        });
      }
    } else if (event.target.id === 'css') {
      if (!this.state.isCSS) {
        this.setState({
          isHTML: false,
          isCSS: true,
          isJS: false
        });
      } else {
        this.setState({
          isCSS: false
        });
      }
    } else if (event.target.id === 'js') {
      if (!this.state.isJS) {
        this.setState({
          isHTML: false,
          isCSS: false,
          isJS: true
        });
      } else {
        this.setState({
          isJS: false
        });
      }
    }
  }

  htmlText() {
    if (!this.state.isHTML) {
      return '';
    } else {
      return this.state.topics[0].text;
    }
  }

  cssText() {
    if (!this.state.isCSS) {
      return '';
    } else {
      return this.state.topics[1].text;
    }
  }

  jsText() {
    if (!this.state.isJS) {
      return '';
    } else {
      return this.state.topics[2].text;
    }
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2 onClick={this.handleClick} id="html">HyperText Markup Language</h2>
          <div>
            <p onClick={this.handleClick}>{this.htmlText()}</p>
          </div>
        </div>
        <div>
          <h2 onClick={this.handleClick} id="css">Cascading Style Sheets</h2>
          <div>
            <p onClick={this.handleClick}>{this.cssText()}</p>
          </div>
        </div>
        <div>
          <h2 onClick={this.handleClick} id="js">JavaScript</h2>
          <div>
            <p onClick={this.handleClick} className="lastP">{this.jsText()}</p>
          </div>
        </div>
      </div>
    );
  }
}
