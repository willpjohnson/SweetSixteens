import merge from 'lodash/merge';

import { RECEIVE_COMMENTS } from '../actions/comment_actions';

const defaultState = {};

const CommentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default CommentReducer;
