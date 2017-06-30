import values from 'lodash/values';

import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const fetchSearchResults = (searchData) => dispatch => {
  return(APIUtil.fetchSearchResults(searchData)).then( (tracks) => {
    dispatch(receiveSearchResults(values(tracks)));
  });
};

export const receiveSearchResults = (tracks) => {
  return({
    type: RECEIVE_SEARCH_RESULTS,
    tracks
  });
};
