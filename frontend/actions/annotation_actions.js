import * as APIUtil from '../util/annotation_api_util';
import { receiveTrack } from './track_actions';

export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION';
export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS';

export const fetchAnnotation = (data) => dispatch => {
  const id = data[0];
  const height = data[1];
  return(APIUtil.fetchAnnotation(id)).then( (annotation) => {
    dispatch(receiveAnnotation(annotation, height));
  });
};

export const fetchAnnotations = (trackId) => dispatch => {
  return(APIUtil.fetchAnnotations(trackId)).then( (annotations) => {
    dispatch(receiveAnnotations(annotations));
  });
};

export const createAnnotation = (annotation) => dispatch => {
  return APIUtil.createAnnotation(annotation).then( ({track, annotations}) => {
    dispatch(receiveTrack(track, annotations));
  });
};

export const receiveAnnotation = (annotation, height) => {
  return({
    type: RECEIVE_ANNOTATION,
    annotation,
    height
  });
};

export const receiveAnnotations = (annotations) => {
  return({
    type: RECEIVE_ANNOTATIONS,
    annotations
  });
};
