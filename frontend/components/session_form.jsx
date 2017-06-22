import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleExit(e) {
    e.preventDefault();
    this.props.history.replace(this.props.location.pathname);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  render() {
    const buttonText = this.props.formType === 'login' ? 'Sign In' : 'Sign Up';
    let headerText;
    let footerText;
    if (this.props.formType === 'login') {
      headerText = (<h1>SIGN IN TO GENIUS</h1>);
      footerText = (<Link to={`${this.props.location.pathname}?signup=true`}>CREATE AN ACCOUNT</Link>);
    } else {
      headerText = (<h1>SIGN UP FOR GENIUS</h1>);
      footerText = (<Link to={`${this.props.location.pathname}?login=true`}>ALREADY HAVE AN ACCOUNT? SIGN IN HERE</Link>);
    }

    let errors = [];
    if (this.props.errors) {
      this.props.errors.forEach( (error, index) => {
        errors.push(<p className="auth-errors" key={index}>{error}</p>);
      });

    }

    if (this.props.loggedIn) {
      return (<Redirect to="/" />);
    } else {
      return (
        <div>
          <div onClick={this.handleExit} className="session-form-hider"></div>
          <div className="session-form-div">
            {headerText}
            <form className="session-form" onSubmit={this.handleSubmit}>
              <div className="session-form-inputs">
                {errors}
                <input
                  onChange={this.update("username")}
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                />
                <input
                  onChange={this.update("password")}
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                />
              </div>
              <button>{buttonText}</button><br />
              {footerText}
            </form>
          </div>
        </div>
      );
    }
  }

}

export default withRouter(SessionForm);
