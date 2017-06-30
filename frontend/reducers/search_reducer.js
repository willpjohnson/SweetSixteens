import merge from 'lodash/merge';

import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const defaultState = {tracks: []};

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      newState = merge({}, state);
      newState.tracks = action.tracks;
      return newState;
    default:
      return state;
  }

};

export default SearchReducer;
