import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  // Boolean of loggedIn indicating whether currentUser exists
  // Array of errors listing errors from the state
  // String of formType indicating if 'login' or 'signup'
  const formType = ownProps.location.pathname.slice(1);
  return({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  if (formType === 'login') {
    return({
      processForm: (user) => dispatch(login(user))
    });
  } else {
    return({
      processForm: (user) => dispatch(signup(user))
    });
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
