import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_NULL_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_ANNOTATION_VOTE, RECEIVE_COMMENT_VOTE, REMOVE_ANNOTATION_VOTE, REMOVE_COMMENT_VOTE } from '../actions/vote_actions';

const defaultState = {
  currentUser: {
    avatar_url: null,
    id: null,
    username: null,
    votes: {
      Annotation: {},
      Comment: {}
    }
  },
  errors: [],
};

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let annoId;
  let commentId;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, defaultState, { currentUser });
    case RECEIVE_NULL_USER:
      return defaultState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, { errors });
    case CLEAR_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    case RECEIVE_ANNOTATION_VOTE:
      newState = merge({}, state);
      annoId = action.vote.votable_id;
      if (!newState.currentUser.votes.Annotation) newState.currentUser.votes.Annotation = {};
      newState.currentUser.votes.Annotation[annoId] = {
        id: action.vote.id,
        user_id: state.currentUser.id,
        votable_id: annoId,
        votable_type: 'Annotation',
        value: action.vote.value
      };
      return newState;
    case REMOVE_ANNOTATION_VOTE:
      newState = merge({}, state);
      annoId = action.vote.votable_id;
      delete newState.currentUser.votes.Annotation[annoId];
      return newState;
    case RECEIVE_COMMENT_VOTE:
      newState = merge({}, state);
      commentId = action.vote.votable_id;
      if (!newState.currentUser.votes.Comment) newState.currentUser.votes.Comment = {};
      newState.currentUser.votes.Comment[commentId] = {
        id: action.vote.id,
        user_id: state.currentUser.id,
        votable_id: commentId,
        votable_type: 'Comment',
        value: action.vote.value
      };
      return newState;
    case REMOVE_COMMENT_VOTE:
      newState = merge({}, state);
      commentId = action.vote.votable_id;
      delete newState.currentUser.votes.Comment[commentId];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
