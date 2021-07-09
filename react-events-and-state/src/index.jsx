import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked === false) {
      return <button onClick={this.handleClick}>Click Me!</button>;
    } else {
      return <button onClick={this.handleClick}>I`ve been Clicked!</button>;
    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
