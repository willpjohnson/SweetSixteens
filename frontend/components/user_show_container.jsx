import { connect } from 'react-redux';
import UserShow from './user_show';
// import { login, signup } from '../actions/session_actions';
import { receiveUser } from '../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  const user = state.user;
  const currentUser = state.session.currentUser;
  return({
    userId,
    user,
    currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    receiveUser: (userId) => {
      dispatch(receiveUser(userId));
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
