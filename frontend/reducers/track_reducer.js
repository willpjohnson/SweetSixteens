import merge from 'lodash/merge';

import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions';

const defaultState = {
  entities: {},
  currentTrack: {}
};

const TrackReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, state, {currentTrack: action.track});
    case RECEIVE_TRACKS:
      return merge({}, state, {entities: action.tracks});
    default:
      return state;
  }
};

export default TrackReducer;
