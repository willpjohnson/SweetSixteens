import merge from 'lodash/merge';

import { RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS } from '../actions/annotation_actions';
import { RECEIVE_TRACK } from '../actions/track_actions';

const defaultState = {
  allAnno: {},
  currentAnno: null,
  currentAnnoHeight: null
};

const AnnotationReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ANNOTATION:

      return merge({}, state, {currentAnno: action.annotation, currentAnnoHeight: action.height});
    case RECEIVE_TRACK:
      newState = merge({}, state, {allAnno: action.annotations});
      newState.currentAnno = null;
      return newState;
    case RECEIVE_ANNOTATIONS:
      newState = merge({}, state, {allAnno: action.annotations});
      newState.currentAnno = null;
      return newState;
    default:
      return state;
  }
};

export default AnnotationReducer;
