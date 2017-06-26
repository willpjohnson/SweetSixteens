import merge from 'lodash/merge';

import { RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS } from '../actions/annotation_actions';

const defaultState = {
  allAnno: [],
  currentAnno: {},
  currentAnnoHeight: null
};

const AnnotationReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ANNOTATION:
      return merge({}, state, {currentAnno: action.annotation, currentAnnoHeight: action.height});
    case RECEIVE_ANNOTATIONS:
      newState = {allAnno: action.annotations, currentAnno: {}, currentAnnoHeight: null};
      return newState;
    default:
      return state;
  }
};

export default AnnotationReducer;
