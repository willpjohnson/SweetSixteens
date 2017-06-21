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

  handleClick() {
    this.props.turnOffDropdown();
    this.props.logout();
  }

  render() {
    return(
      <div>
        <div className="user-dropdown-hider"      onClick={this.handleExit}></div>
        <ul className="user-dropdown">
          <li>ACCOUNT</li>
          <li
            onMouseOver={this.turnOnHighlight}
            onMouseOut={this.turnOffHighlight}
            onClick={this.handleClick}
            className={this.state.liClass}>Sign Out
          </li>
        </ul>
      </div>
    );
  }
}

export default UserDropdown;
