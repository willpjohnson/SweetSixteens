import merge from 'lodash/merge';

import { RECEIVE_TRACK, RECEIVE_TRACKS, REMOVE_TRACK } from '../actions/track_actions';

const defaultState = {
  entities: {}
};

const TrackReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TRACK:
      return merge({}, state, {entities: {[action.track.id]: action.track}} );
    case RECEIVE_TRACKS:
      newState = merge({}, state);
      newState.entities = action.tracks;
      return newState;
    case REMOVE_TRACK:
      newState = merge({}, state);
      delete newState.entities[action.track.track.id];
      return newState;
    default:
      return state;
  }
};

export default TrackReducer;
