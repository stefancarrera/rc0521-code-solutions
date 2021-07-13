import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  render() {
    const password = this.state.value;
    let p = '';
    let icon = '';
    if ((password.length <= 7) && (password.length >= 1)) {
      p = <p>Your password is too short</p>;
      icon = <i className="fas fa-times icon icon-red"></i>;
    } else if (password.length <= 0) {
      p = <p>A password is required</p>;
      icon = <i className="fas fa-times icon icon-red"></i>;
    } else {
      icon = <i className="fas fa-check icon icon-green"></i>;
    }
    return (
        <div className="col">
        <form>
          <label htmlFor="password" onChange={this.handleChange}>
            Password
          </label>
          <div className="row">
          <input name="password" id="password" type="password" value={this.state.value} onChange={this.handleChange}></input>
            {icon}
          </div>
            {p}
        </form>
      </div>
    );
  }

}
