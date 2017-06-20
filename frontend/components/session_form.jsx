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
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  render() {
    //debugger
    const buttonText = this.props.formType === 'login' ? 'Sign In' : 'Sign Up';
    let headerText;
    let footerText;
    if (this.props.formType === 'login') {
      headerText = (<h1>SIGN IN TO GENIUS</h1>);
      footerText = (<Link to="/signup">CREATE AN ACCOUNT</Link>);
    } else {
      headerText = (<h1>SIGN UP FOR GENIUS</h1>);
      footerText = (<Link to="/login">ALREADY HAVE AN ACCOUNT? SIGN IN HERE</Link>);
    }

    if (this.props.loggedIn) {
      return (<Redirect to="/" />);
    } else {
      return (
        <div className="session-form-div">
          {headerText}
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="session-form-inputs">
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
              {this.props.errors}
          </form>
        </div>
      );
    }
  }

}

export default withRouter(SessionForm);
