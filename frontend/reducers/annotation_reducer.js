import merge from 'lodash/merge';

import { RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS, REMOVE_ANNOTATION, RECEIVE_HEIGHT } from '../actions/annotation_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_ANNOTATION_VOTES } from '../actions/vote_actions';

const defaultState = {
  allAnno: {},
  currentAnno: null,
  currentAnnoHeight: null
};

const AnnotationReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  let annoId;

  switch (action.type) {
    case RECEIVE_ANNOTATION:
      return merge({}, state, {currentAnno: action.annotation, currentAnnoHeight: action.height});
    case RECEIVE_HEIGHT:
      return merge({}, state, {currentAnnoHeight: action.height});
    case RECEIVE_TRACK:
      newState = merge({}, state, {allAnno: action.annotations});
      newState.currentAnno = null;
      return newState;
    case RECEIVE_ANNOTATIONS:
      newState = merge({}, state, {allAnno: action.annotations});
      newState.currentAnno = null;
      return newState;
    case RECEIVE_ANNOTATION_VOTES:
      newState = merge({}, state);
      annoId = action.annotation.id;
      newState.allAnno[annoId].score = action.annotation.score;
      return newState;
    case REMOVE_ANNOTATION:
      newState = merge({}, state);
      annoId = action.annotation.id;
      delete newState.allAnno[annoId];
      newState.currentAnno = null;
      newState.currentAnnoHeight = null;

      return newState;
    default:
      return state;
  }
};

export default AnnotationReducer;
