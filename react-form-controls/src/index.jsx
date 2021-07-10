import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    console.log('Submitted Email:', this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userEmail">
          Email:
          <input name="userEmail" id="userEmail" type="email" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterFrom />,
  document.getElementById('root')
);
