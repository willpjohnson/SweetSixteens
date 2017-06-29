import * as APIUtil from '../util/vote_api_util';
import { receiveAnnotation } from './annotation_actions';

export const RECEIVE_ANNOTATION_VOTE = 'RECEIVE_ANNOTATION_VOTE';
export const RECEIVE_COMMENT_VOTE = 'RECEIVE_COMMENT_VOTE';
export const REMOVE_ANNOTATION_VOTE = 'REMOVE_ANNOTATION_VOTE';
export const REMOVE_COMMENT_VOTE = 'REMOVE_COMMENT_VOTE';

export const createVote = (vote) => dispatch => {
  return(APIUtil.createVote(vote)).then( (vote) => {
    if (vote.votable_type === "Annotation") {
      dispatch(receiveAnnotationVote(vote));
    } else if (vote.votable_type === "Comment") {
      dispatch(receiveCommentVote(vote));
    }
  });
};

export const deleteVote = (vote) => dispatch => {
  const type = vote.votable_type;
  return(APIUtil.deleteVote(vote.id)).then( (vote) => {
    if (type === "Annotation") {
      dispatch(removeAnnotationVote(vote));
    } else if (type === "Comment") {
      dispatch(removeCommentVote(vote));
    }
  });
};

export const receiveAnnotationVote = (vote) => {
  return({
    type: RECEIVE_ANNOTATION_VOTE,
    vote
  });
};

export const receiveCommentVote = (vote) => {
  return({
    type: RECEIVE_COMMENT_VOTE,
    vote
  });
};

export const removeAnnotationVote = (vote) => {
  return({
    type: REMOVE_ANNOTATION_VOTE,
    vote
  });
};

export const removeCommentVote = (vote) => {
  return({
    type: REMOVE_COMMENT_VOTE,
    vote
  });
};
