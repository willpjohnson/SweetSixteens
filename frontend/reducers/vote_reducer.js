import merge from 'lodash/merge';

import { RECEIVE_ANNOTATION_VOTES, RECEIVE_COMMENT_VOTES } from '../actions/vote_actions';

const defaultState = {
  annotationVotesByCU: {},
  commentVotesByCU: {}
};

const VoteReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    default:
      return state;
  }
};

export default VoteReducer;
