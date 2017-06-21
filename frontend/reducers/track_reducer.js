import merge from 'lodash/merge';

import { RECEIVE_TRACK } from '../actions/track_actions';

const defaultState = {};

const TrackReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRACK:
      return action.track;
    default:
      return state;
  }
};

export default TrackReducer;
