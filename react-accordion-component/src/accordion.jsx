import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.openId === id) {
      this.setState({ openId: null });
    }
  }

  render() {
    return (
      <div className="container"> {
          this.props.topics.map(item => (
            <div key={item.id} onClick={() => { this.setState({ openId: item.id }); this.handleClick(item.id); }}>
              <h2>{item.title}</h2>
              <div className={`${this.state.openId === item.id ? 'text' : 'hide'}`}>
                {item.text}
              </div>
            </div>
          ))
          }
      </div>
    );
  }
}
