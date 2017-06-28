import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const fetchComments = (commentableData) => dispatch => {
  return(APIUtil.fetchComments(commentableData)).then( (comments) => {
    dispatch(receiveComments(comments));
  });
};

export const createComment = (comment) => dispatch => {
  return(APIUtil.createComment(comment)).then( (comments) => {
    dispatch(receiveComments(comments));
  });
};

export const deleteComment = (commentId) => dispatch => {
  return(APIUtil.deleteComment(commentId)).then( (comments) => {
    dispatch(receiveComments(comments));
  });
};

export const receiveComments = (comments) => {
  return({
    type: RECEIVE_COMMENTS,
    comments
  });
};
