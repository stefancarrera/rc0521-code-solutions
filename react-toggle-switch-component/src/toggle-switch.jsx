import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  switch() {
    if (this.state.isToggleOn === false) {
      return 'off';
    } else {
      return 'on';
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} className={this.switch()}>
        <span onClick={this.handleClick} className='switch'></span>
      </div>
    );
  }
}
