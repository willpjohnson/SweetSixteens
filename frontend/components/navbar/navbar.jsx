import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import UserDropdown from './user_dropdown';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {'visible_dropdown': false};

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  toggleDropdown() {
    if (this.state.visible_dropdown) {
      this.setState({'visible_dropdown': false});
    } else {
      this.setState({'visible_dropdown': true});
    }
  }

  handleGuest() {
    this.props.login({user: {username: 'Guest', password: 'password'}});
  }

  render() {
    let userArea;
    if (this.props.currentUser !== null) {
      userArea = (
        <section id="blech">
          <h1 onClick={this.toggleDropdown}>{this.props.currentUser.username}</h1>
          {this.state.visible_dropdown ? <UserDropdown logout={this.props.logout} /> : <div></div>}
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
