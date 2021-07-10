import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggleOn: !this.isToggleOn });
  }

  iconSwitch() {
    if (this.state.isToggleOn === false) {
      return 'far fa-play-circle';
    } else {
      return 'far fa-pause-circle';
    }
  }

  render() {
    return (
      <div className="col">
        <div>Time</div>
        <i onClick={this.handleClick} className={this.iconSwitch()}></i>
      </div>
    );
  }
}
