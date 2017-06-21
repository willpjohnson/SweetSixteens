import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import UserDropdown from './user_dropdown';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {'visible_dropdown': false};

    this.turnOnDropdown = this.turnOnDropdown.bind(this);
    this.turnOffDropdown = this.turnOffDropdown.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  turnOnDropdown() {
    this.setState({'visible_dropdown': true});
  }

  turnOffDropdown() {
    this.setState({'visible_dropdown': false});
  }

  handleGuest() {
    this.props.login({user: {username: 'Guest', password: 'password'}});
  }

  render() {
    let userArea;
    if (this.props.currentUser !== null) {
      userArea = (
        <section>
          <h1 onClick={this.turnOnDropdown}>{this.props.currentUser.username}</h1>
          {this.state.visible_dropdown ? <UserDropdown logout={this.props.logout} turnOffDropdown={this.turnOffDropdown}/> : <div></div>}
        </section>
      );
    } else {
      userArea = (
        <section className="no-current-user-section">
          <h1><Link className="no-current-user" to="/signup">SIGN UP</Link></h1>
          <h1><Link className="no-current-user" to="/login">SIGN IN</Link></h1>
          <h1 onClick={this.handleGuest}>GUEST</h1>
        </section>
      );
    }
    return (
      <div className="navbar-div">
        <div className="search-bar-div">
          <h1>SEARCH BAR GOES HERE</h1>
        </div>

        <div className="logo-div">
          <h1>LOGO GOES HERE</h1>
        </div>

        <div className="user-div">
          {userArea}
        </div>
      </div>
    );
  }
}

export default Navbar;
