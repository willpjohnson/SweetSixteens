import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const fetchTrack = (trackId) => dispatch => {
  return APIUtil.fetchTrack(trackId).then( (track) => {
    dispatch(receiveTrack(track));
  });
};

export const fetchTracks = () => dispatch => {
  return APIUtil.fetchTracks().then( (tracks) => {
    dispatch(receiveTracks(tracks));
  });
};

export const receiveTrack = (track) => {
  return({
    type: RECEIVE_TRACK,
    track
  });
};

export const receiveTracks = (tracks) => {
  return({
    type: RECEIVE_TRACKS,
    tracks
  });
};
