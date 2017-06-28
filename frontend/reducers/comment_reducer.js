import merge from 'lodash/merge';

import { RECEIVE_ANNOTATION_COMMENTS, RECEIVE_TRACK_COMMENTS } from '../actions/comment_actions';

const defaultState = {
  annotationComments: {},
  trackComments: {}
};

const CommentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ANNOTATION_COMMENTS:
      newState = Object.assign({}, state);
      newState.annotationComments = action.comments;
      return newState;
    case RECEIVE_TRACK_COMMENTS:
      newState = Object.assign({}, state);
      newState.trackComments = action.comments;
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
