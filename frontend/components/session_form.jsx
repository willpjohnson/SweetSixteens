import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      imageFile: undefined,
      imageUrl: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "edit") {

      this.setState({
        username: this.props.currentUser.username,
        imageUrl: this.props.currentUser.avatar_url
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formType !== this.props.formType) {
      this.props.clearErrors();
      this.setState({
        username: "",
        password: "",
        imageFile: undefined,
        imageUrl: undefined
      });
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleExit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.history.replace(this.props.location.pathname);
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    if (this.props.formType !== 'login') {
      formData.append("user[avatar]", this.state.imageFile);
    }

    let that = this;
    this.props.processForm(formData, this.props.currentUserId).then( (response) => {
      that.props.history.push(`/users/${that.props.currentUserId}`);
    });
  }

  render() {
    document.body.scrollTop = 0;

    let buttonText;
    let headerText;
    let footerText;
    let avatarInput;
    if (this.props.formType === 'login') {
      headerText = (<h1>SIGN IN TO SweetSixteens</h1>);
      footerText = (<Link to={`${this.props.location.pathname}?signup=true`}>CREATE AN ACCOUNT</Link>);
      avatarInput = <div></div>;
      buttonText = 'Sign In';
    } else if (this.props.formType === 'signup') {
      headerText = (<h1>SIGN UP FOR SweetSixteens</h1>);
      footerText = (<Link to={`${this.props.location.pathname}?login=true`}>ALREADY HAVE AN ACCOUNT? SIGN IN HERE</Link>);
      avatarInput = (<div><input id="avatarFile" type="file" className="user-avatar-select" onChange={this.updateFile}/>
      <label className="ntf-file-select-label" htmlFor="avatarFile"><h2>Choose Image</h2></label></div>);
      buttonText = 'Sign Up';
    } else if (this.props.formType === 'edit') {
      headerText = (<h1>EDIT USER PROFILE</h1>);
      footerText = <div></div>;
      avatarInput = (<div><input id="avatarFile" type="file" className="user-avatar-select" onChange={this.updateFile}/>
      <label className="ntf-file-select-label" htmlFor="avatarFile"><h2>Choose Image</h2></label></div>);
      buttonText = 'Save';
    }

    let errors = [];
    if (this.props.errors) {
      this.props.errors.forEach( (error, index) => {
        errors.push(<p className="auth-errors" key={index}>{error}</p>);
      });

    }

    if (this.props.loggedIn && this.props.formType !== "edit") {
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
                  className="username-select"
                  onChange={this.update("username")}
                  type="text"
                  value={this.state.username}
                  placeholder="Username"
                />
                <input
                  className="password-select"
                  onChange={this.update("password")}
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                />
                {avatarInput}
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
