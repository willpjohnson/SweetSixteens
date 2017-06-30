import React from 'react';
import { Link, Route, NavLink, withRouter } from 'react-router-dom';
import UserDropdown from './user_dropdown';
import SearchIndex from './search_index_container';

class Navbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {'visible_dropdown': false, 'search_text': ""};

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
    let formData = new FormData();
    formData.append("user[username]", 'Guest');
    formData.append("user[password]", 'password');
    this.props.login(formData);
  }

  handleGoHome() {
    window.location.href = "/#/";
  }

  updateSearch() {
    return e => {
      this.setState({search_text: e.currentTarget.value});
    };
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
          <input onChange={this.updateSearch()} value={this.state.search_text} className="search-bar" placeholder="Search..."></input>
          <SearchIndex searchText={this.state.search_text}/>
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
