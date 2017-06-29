import * as APIUtil from '../util/vote_api_util';
import { receiveAnnotation } from './annotation_actions';

export const RECEIVE_ANNOTATION_VOTES = 'RECEIVE_ANNOTATION_VOTES';
export const RECEIVE_COMMENT_VOTES = 'RECEIVE_COMMENT_VOTES';

export const createVote = (vote) => dispatch => {
  return(APIUtil.createVote(vote)).then( (response) => {
    console.log("Successfully Created Vote");
    if (vote.votable_type === "Annotation") {
      const annotation = response;
      dispatch(receiveAnnotationVotes(annotation));
    } else if (vote.votable_type === "Comment") {

    }
  });
};

export const deleteVote = (voteData) => dispatch => {
  const type = voteData.votable_type;
  return(APIUtil.deleteVote(voteData)).then( (response) => {
    console.log("Successfully Deleted Vote");
    if (vote.votable_type === "Annotation") {
      const annotation = response;
      dispatch(receiveAnnotationVotes(annotation));
    } else if (vote.votable_type === "Comment") {

    }
  });
};

export const receiveAnnotationVotes = (annotation) => {
  return({
    type: RECEIVE_ANNOTATION_VOTES,
    annotation
  });
};

export const receiveCommentVotes = (score) => {
  return({
    type: RECEIVE_COMMENT_VOTES,
    votes: score
  });
};
