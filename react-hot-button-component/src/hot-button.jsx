import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  pickClass() {
    if (this.state.count < 3) {
      return 'zeroClicks';
    } else if ((this.state.count >= 3) && (this.state.count < 6)) {
      return 'threeClicks';
    } else if ((this.state.count >= 6) && (this.state.count < 9)) {
      return 'sixClicks';
    } else if ((this.state.count >= 9) && (this.state.count < 12)) {
      return 'nineClicks';
    } else if ((this.state.count >= 12) && (this.state.count < 15)) {
      return 'twelveClicks';
    } else if ((this.state.count >= 15) && (this.state.count < 18)) {
      return 'fifteenClicks';
    } else if (this.state.count >= 18) {
      return 'eightteenClicks';
    }
  }

  render() {
    return <button onClick={this.handleClick} className={this.pickClass}>Click Me!</button>;
  }

}
