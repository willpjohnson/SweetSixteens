import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';

const defaultState = {
  avatar_url: null,
  id: null,
  username: null,
  votes: {
    Annotation: {},
    Comment: {}
  }
};

const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state, action.user);
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
