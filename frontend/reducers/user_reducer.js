import merge from 'lodash/merge';
import values from 'lodash/values';

import { RECEIVE_USER, RECEIVE_CONTRIBUTIONS } from '../actions/user_actions';

const defaultState = {
  avatar_url: null,
  id: null,
  username: null,
  votes: {
    Annotation: {},
    Comment: {}
  },
  contributions: []
};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state, action.user);
      return newState;
    case RECEIVE_CONTRIBUTIONS:
      newState = merge({}, state, action.user);
      newState.contributions = values(action.contributions);
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
