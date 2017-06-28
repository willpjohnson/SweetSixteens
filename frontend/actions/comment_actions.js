import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_ANNOTATION_COMMENTS = 'RECEIVE_ANNOTATION_COMMENTS';
export const RECEIVE_TRACK_COMMENTS = 'RECEIVE_TRACK_COMMENTS';

export const fetchAnnotationComments = (commentableId) => dispatch => {
  return(APIUtil.fetchAnnotationComments(commentableId)).then( (comments) => {
    dispatch(receiveAnnotationComments(comments));
  });
};

export const fetchTrackComments = (commentableId) => dispatch => {
  return(APIUtil.fetchTrackComments(commentableId)).then( (comments) => {
    dispatch(receiveTrackComments(comments));
  });
};

export const createComment = (comment) => dispatch => {
  return(APIUtil.createComment(comment)).then( (comments) => {
    if (comment.commentable_type === 'Track') {
      dispatch(receiveTrackComments(comments));
    } else if (comment.commentable_type === 'Annotation') {
      dispatch(receiveAnnotationComments(comments));
    }
  });
};

export const deleteComment = (commentId, commentableType) => dispatch => {
  const type = commentableType;
  return(APIUtil.deleteComment(commentId)).then( (comments) => {
    if (commentableType === 'Track') {
      dispatch(receiveTrackComments(comments));
    } else if (commentableType === 'Annotation') {
      dispatch(receiveAnnotationComments(comments));
    }
  });
};

export const receiveAnnotationComments = (comments) => {
  return({
    type: RECEIVE_ANNOTATION_COMMENTS,
    comments
  });
};

export const receiveTrackComments = (comments) => {
  return({
    type: RECEIVE_TRACK_COMMENTS,
    comments
  });
};
