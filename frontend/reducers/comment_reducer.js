import merge from 'lodash/merge';

import { RECEIVE_ANNOTATION_COMMENTS, RECEIVE_TRACK_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_COMMENT_VOTE, REMOVE_COMMENT_VOTE } from '../actions/vote_actions';

const defaultState = {
  annotationComments: {},
  trackComments: {}
};

const CommentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let commentId;

  switch (action.type) {
    case RECEIVE_ANNOTATION_COMMENTS:
      newState = Object.assign({}, state);
      newState.annotationComments = action.comments;
      return newState;
    case RECEIVE_TRACK_COMMENTS:
      newState = Object.assign({}, state);
      newState.trackComments = action.comments;
      return newState;
    case RECEIVE_COMMENT_VOTE:
      newState = merge({}, state);
      commentId = action.vote.votable_id;
      if (newState.annotationComments[commentId]) {
        newState.annotationComments[commentId].score += action.vote.value;
      } else if (newState.trackComments[commentId]) {
        newState.trackComments[commentId].score += action.vote.value;
      }
      return newState;
    case REMOVE_COMMENT_VOTE:
      newState = merge({}, state);
      commentId = action.vote.votable_id;
      if (newState.annotationComments[commentId]) {
        newState.annotationComments[commentId].score -= action.vote.value;
      } else if (newState.trackComments[commentId]) {
        newState.trackComments[commentId].score -= action.vote.value;
      }
      return newState;
    default:
      return state;

  }
};

export default CommentReducer;
