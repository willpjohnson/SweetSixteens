import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, edit, clearErrors } from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  // Boolean of loggedIn indicating whether currentUser exists
  // Array of errors listing errors from the state
  // String of formType indicating if 'login' or 'signup'
  const formType = ownProps.formType;
  return({
    loggedIn: Boolean(state.session.currentUser.id),
    errors: state.session.errors,
    currentUser: state.session.currentUser,
    currentUserId: state.session.currentUser.id,
    currentlyViewedUser: state.user,
    formType
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.formType;
  if (ownProps.formType === 'login') {
    return({
      processForm: (formData) => dispatch(login(formData)),
      clearErrors: () => dispatch(clearErrors())
    });
  } else if (ownProps.formType === 'edit'){
    return({
      processForm: (formData, id) => dispatch(edit(formData, id)),
      clearErrors: () => dispatch(clearErrors())
    });
  } else {
    return({
      processForm: (formData) => dispatch(signup(formData)),
      clearErrors: () => dispatch(clearErrors())
    });
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
