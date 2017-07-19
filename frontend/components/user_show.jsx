import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveUser(this.props.userId);
    this.props.fetchContributions(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      this.props.receiveUser(nextProps.userId);
      this.props.fetchContributions(nextProps.userId);
    }
  }

  contributionsRender() {
    let contribs = this.props.contributions.map( (contrib, idx) => {
      let nOrNoN = (contrib.commentable_type === "Annotation" ? 'n' : '');

      return(
        <li className="contribution" key={idx}>
          <p className="contribution-date"><i className="fa fa-calendar" aria-hidden="true"></i> {contrib.created_at.slice(0,10)}</p>
          <div className="contribution-body">
            <i className="fa fa-comment" aria-hidden="true"></i>
            <p>{this.props.user.username} added a comment to a{nOrNoN} {contrib.commentable_type.toLowerCase()}:</p>
            <p className="contribution-body-text">{contrib.body}</p>
          </div>
        </li>
      );
    });

    return contribs
  }

  render() {
    let currentUser = this.props.currentUser;
    let editButton;
    if (currentUser && (this.props.userId === currentUser.id) && (currentUser.username !== 'Guest')) {
      editButton = (<Link to={`${this.props.location.pathname}?edit=true`} className="user-show-edit-button">
        <i className="fa fa-pencil" aria-hidden="true"></i>Edit
      </Link>);
    } else {
      editButton = <div></div>;
    }

    if (this.props.user.id === this.props.userId) {
      return(
        <div className="user-show-div">
          <div className="user-show-banner">
            <img className="user-show-background" src={this.props.user.avatar_url}></img>
          </div>

          <div className="user-show-info-div">
            <img className="user-avatar-image" src={this.props.user.avatar_url}></img>
            <h1>@{this.props.user.username}</h1>
            {editButton}
          </div>

          <div className="user-show-contributions-div">
            <h1>{this.props.user.username.toUpperCase()} CONTRIBUTIONS</h1>
            <ul className="contributions">
              {this.contributionsRender()}
            </ul>
          </div>
        </div>
      );
    } else {
      return(
        <div className="user-show-div">
          <div className="loader"></div>
        </div>
      );
    }
  }
}

export default UserShow;
