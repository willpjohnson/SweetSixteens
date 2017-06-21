import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const fetchTrack = (trackId) => dispatch => {
  return APIUtil.fetchTrack(trackId).then( (track) => {
    dispatch(receiveTrack(track));
  });
};

export const receiveTrack = (track) => {
  return({
    type: RECEIVE_TRACK,
    track
  });
};
