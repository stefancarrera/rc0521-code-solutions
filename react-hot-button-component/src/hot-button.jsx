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

  render() {
    if (this.state.count < 3) {
      return <button onClick={this.handleClick} className="zeroClicks">Click Me!</button>;
    } else if ((this.state.count >= 3) && (this.state.count < 6)) {
      return <button onClick={this.handleClick} className="threeClicks">Click Me!</button>;
    } else if ((this.state.count >= 6) && (this.state.count < 9)) {
      return <button onClick={this.handleClick} className="sixClicks">Click Me!</button>;
    } else if ((this.state.count >= 9) && (this.state.count < 12)) {
      return <button onClick={this.handleClick} className="nineClicks">Click Me!</button>;
    } else if ((this.state.count >= 12) && (this.state.count < 15)) {
      return <button onClick={this.handleClick} className="twelveClicks">Click Me!</button>;
    } else if ((this.state.count >= 15) && (this.state.count < 18)) {
      return <button onClick={this.handleClick} className="fifteenClicks">Click Me!</button>;
    } else if (this.state.count >= 18) {
      return <button onClick={this.handleClick} className="eightteenClicks">Click Me!</button>;
    }
  }
}
