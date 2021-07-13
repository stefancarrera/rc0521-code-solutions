import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
  }

  render() {
    return (
      <div className="container">
        {/* {
          this.props.topics.map(item => (
            <div className="accordion-item" onClick={() => this.setOpenId(item.id)}>
              <h2 className="accordion-title">{item.title}</h2>
              <div className={`accordion-content ${this.state.openId === item.id ? 'text' : 'hide'}`}>
                {item.content}
              </div>
            </div>
          ));
        } */}
      </div>
    );
  }
}
