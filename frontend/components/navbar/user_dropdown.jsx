import React from 'react';
import { Link, Route } from 'react-router-dom';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liClass: "user-dropdown-li"};

    this.turnOnHighlight = this.turnOnHighlight.bind(this);
    this.turnOffHighlight = this.turnOffHighlight.bind(this);
  }

  turnOnHighlight() {
    this.setState({liClass: "user-dropdown-li-blue"});
  }

  turnOffHighlight() {
    this.setState({liClass: "user-dropdown-li"});
  }

  render() {
    return(
      <ul className="user-dropdown">
        <li>ACCOUNT</li>
        <li
          onMouseOver={this.turnOnHighlight}
          onMouseOut={this.turnOffHighlight}
          onClick={this.props.logout}
          className={this.state.liClass}>Sign Out
        </li>
      </ul>
    );
  }
}

export default UserDropdown;
