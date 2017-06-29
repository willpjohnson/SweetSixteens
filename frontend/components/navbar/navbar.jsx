import React from 'react';
import { Link, Route, NavLink, withRouter } from 'react-router-dom';
import UserDropdown from './user_dropdown';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {'visible_dropdown': false};

    this.turnOnDropdown = this.turnOnDropdown.bind(this);
    this.turnOffDropdown = this.turnOffDropdown.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleGoHome = this.handleGoHome.bind(this);
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

  handleGoHome() {
    window.location.href = "/#/";
  }

  render() {
    let userArea;
    if (this.props.currentUser.id !== null) {
      userArea = (
        <section className="yes-current-user-section">
          <div className="add-track"><Link to="/new-track">ADD TRACK</Link></div>
          <img className="user-avatar" src={this.props.currentUser.avatar_url} onClick={this.turnOnDropdown} />
          {this.state.visible_dropdown ? <UserDropdown logout={this.props.logout} turnOffDropdown={this.turnOffDropdown} currentUser={this.props.currentUser}/> : <div></div>}
        </section>
      );
    } else {
      userArea = (
        <section className="no-current-user-section">
          <h1><Link className="no-current-user" to={`${this.props.location.pathname}?signup=true`}>SIGN UP</Link></h1>
          <h1><Link className="no-current-user" to={`${this.props.location.pathname}?login=true`}>SIGN IN</Link></h1>
          <h1 onClick={this.handleGuest}>GUEST</h1>
        </section>
      );
    }
    return (
      <div className="navbar-div">
        <div className="search-bar-div">
          <h1>SEARCH BAR GOES HERE</h1>
        </div>

        <div className="logo-div" onClick={this.handleGoHome}>
          <h1 className="logo-line-1">SWEET</h1>
          <h1 className="logo-line-2">SIXTEENS</h1>
        </div>

        <div className="user-div">
          {userArea}
        </div>
      </div>
    );
  }
}

export default Navbar;
