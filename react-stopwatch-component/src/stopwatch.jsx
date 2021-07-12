import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      tick: 0,
      intervalId: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.iconSwitch = this.iconSwitch.bind(this);
    this.faceClick = this.faceClick.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn === false) {
      this.setState({ isToggleOn: true });
      let seconds = this.state.tick;
      this.setState({
        intervalId: setInterval(() => {
          seconds++;
          this.setState({ tick: seconds });
        }, 1000)
      });
    } else {
      this.setState({ isToggleOn: false });
      this.setState({ intervalId: clearInterval(this.state.intervalId) });
    }
  }

  iconSwitch() {
    if (this.state.isToggleOn === false) {
      return 'far fa-play-circle fa-3x';
    } else if (this.state.isToggleOn === true) {
      return 'far fa-pause-circle fa-3x';
    }
  }

  faceClick() {
    if (!this.state.isToggleOn) {
      this.setState({ tick: 0 });
    }
  }

  render() {
    return (
      <div className="col">
        <div className="watchFace" onClick={this.faceClick}>
          <p>
          {this.state.tick}
          </p>
        </div>
        <div className="btn">
        <i onClick={this.handleClick} className={this.iconSwitch()}></i>
        </div>
      </div>
    );
  }
}
