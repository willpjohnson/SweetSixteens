import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: [],
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      //# debugger
      const currentUser = action.currentUser;
      return merge({}, defaultState, { currentUser });
    case RECEIVE_ERRORS:
    // debugger
      const errors = action.errors;
      return merge({}, defaultState, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
