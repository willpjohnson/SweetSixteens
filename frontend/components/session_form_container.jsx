import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, edit } from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  // Boolean of loggedIn indicating whether currentUser exists
  // Array of errors listing errors from the state
  // String of formType indicating if 'login' or 'signup'
  const formType = ownProps.formType;
  return({
    loggedIn: Boolean(state.session.currentUser.id),
    errors: state.session.errors,
    currentUserId: state.session.currentUser.id,
    currentlyViewedUser: state.user,
    formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  if (ownProps.formType === 'login') {
    return({
      processForm: (formData) => dispatch(login(formData))
    });
  } else if (ownProps.formType === 'edit'){
    return({
      processForm: (formData, id) => dispatch(edit(formData, id))
    });
  } else {
    return({
      processForm: (formData) => dispatch(signup(formData))
    });
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
