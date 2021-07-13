import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  iconClass() {
    if (this.state.isClicked === false) {
      return 'fas fa-bars fa-2x';
    } else {
      return 'fas fa-bars hidden';
    }
  }

  rowClass() {
    if (this.state.isClicked === false) {
      return 'row hidden';
    } else {
      return 'row';
    }
  }

  render() {
    return (
    <div className="container">
      <i onClick={this.handleClick} className={this.iconClass()}></i>
      <div id="navHolder" onClick={this.handleClick} className={this.rowClass()}>
        <div id="navBar" className="colFrth">
        <h2>Sorrowful Goose&apos;s Memoirs</h2>
        <ul onClick={this.handleClick}>
          <li>Birth</li>
          <li>Welcome to Gridania</li>
          <li>Level 1 - 20</li>
          <li>My first Chocobo</li>
          <li>Level 21 - 40</li>
          <li>Level 41 - 60</li>
          <li>Level 61 - 70</li>
          <li>Level 71 - 80</li>
          <li>The White Mage Years</li>
          <li>The Red Mage Callth</li>
          <li>Dancing His Heart Out</li>
          <li>He Picks Up a Sword and Shield</li>
        </ul>
        </div>
        <div id="modal" className="colThrFrth"></div>
      </div>
    </div>
    );
  }
}
