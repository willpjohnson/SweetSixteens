import * as APIUtil from '../util/vote_api_util';
import { receiveAnnotation } from './annotation_actions';

export const createVote = (vote) => dispatch => {
  return(APIUtil.createVote(vote)).then( (response) => {
    console.log("Successfully Created Vote");
    if (vote.votable_type === "Annotation") {
      const annotation = response;
      dispatch(receiveAnnotation(annotation.id));
    } else if (vote.votable_type === "Comment") {

    }
  });
};

export const deleteVote = (vote_id, votable_type) => dispatch => {
  const type = votable_type;
  return(APIUtil.deleteVote(vote_id)).then( (response) => {
    console.log("Successfully Deleted Vote");
    if (vote.votable_type === "Annotation") {

    } else if (vote.votable_type === "Comment") {

    }
  });
};
