import React from 'react';
import { Link, Route } from 'react-router-dom';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liClass: "user-dropdown-li"};

    this.turnOnHighlight = this.turnOnHighlight.bind(this);
    this.turnOffHighlight = this.turnOffHighlight.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  turnOnHighlight() {
    this.setState({liClass: "user-dropdown-li-blue"});
  }

  turnOffHighlight() {
    this.setState({liClass: "user-dropdown-li"});
  }

  handleExit() {
    this.props.turnOffDropdown();
  }

  handleClick(e) {
    this.props.turnOffDropdown();
    switch (e.currentTarget.textContent) {
      case "Sign Out":
        this.props.logout();
        window.location.href = '/';
        break;
      case "View Profile":
        window.location.href = `/#/users/${this.props.currentUser.id}`;
        break;
    }
  }

  render() {
    return(
      <div>
        <div className="user-dropdown-hider"      onClick={this.handleExit}></div>
        <ul className="user-dropdown">
          <li>ACCOUNT</li>
          <li
            className={this.state.liClass}
            onClick={this.handleClick}>View Profile
          </li>
          <li
            onClick={this.handleClick}
            className={this.state.liClass}>Sign Out
          </li>
        </ul>
      </div>
    );
  }
}

export default UserDropdown;
