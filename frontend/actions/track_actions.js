import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const CREATE_TRACK = 'CREATE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export const fetchTrack = (trackId) => dispatch => {
  return APIUtil.fetchTrack(trackId).then( ({track, annotations}) => {
    dispatch(receiveTrack(track, annotations));
    return track;
  });
};

export const fetchTracks = () => dispatch => {
  return APIUtil.fetchTracks().then( (tracks) => {
    dispatch(receiveTracks(tracks));
  });
};

export const createTrack = (track) => dispatch => {
  return APIUtil.createTrack(track).then( (track) => {
    dispatch(receiveTrack(track.track));
    return track.track;
  });
};

export const updateTrack = (track, trackId) => dispatch => {
  return APIUtil.updateTrack(track, trackId).then( (track) => {
    dispatch(receiveTrack(track));
    return track;
  })
};

export const deleteTrack = (trackId) => dispatch => {
  return APIUtil.deleteTrack(trackId).then( (track) => {
    dispatch(removeTrack(track))
  });
};

export const receiveTrack = (track, annotations) => {
  return({
    type: RECEIVE_TRACK,
    track,
    annotations
  });
};

export const receiveTracks = (tracks) => {
  return({
    type: RECEIVE_TRACKS,
    tracks
  });
};

export const removeTrack = (track) => {
  return({
    type: REMOVE_TRACK,
    track
  })
};
