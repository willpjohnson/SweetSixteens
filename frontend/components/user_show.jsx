import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveUser(this.props.userId);
  }

  render() {
    if (this.props.user.id === this.props.userId) {
      return(
        <div className="user-show-div">
          <div className="user-show-banner">
            <img className="user-show-background" src={this.props.user.avatar_url}></img>
          </div>

          <div className="user-show-info-div">
            <img className="user-avatar-image" src={this.props.user.avatar_url}></img>
            <h1>@{this.props.user.username}</h1>
            <button className="user-show-edit-button">
              <i className="fa fa-pencil" aria-hidden="true"></i>Edit
            </button>
          </div>
        </div>
      );
    } else {
      return(
        <div className="user-show-div">
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default UserShow;
