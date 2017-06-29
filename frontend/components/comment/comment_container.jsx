import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import values from 'lodash/values';
import Comment from './comment';
import { fetchAnnotationComments, fetchTrackComments, createComment, deleteComment } from '../../actions/comment_actions';
import { createVote, deleteVote } from '../../actions/vote_actions';

const mapStateToProps = (state, ownProps) => {
  let comments;
  if (ownProps.commentableType === "Track") {
    comments = values(state.comment.trackComments);
  } else if (ownProps.commentableType === "Annotation") {
    comments = values(state.comment.annotationComments);
  }

  return({
    currentUser: state.session.currentUser,
    comments
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let fetchComments;
  if (ownProps.commentableType === "Track") {
    fetchComments = (commentableId) => {
      dispatch(fetchTrackComments(commentableId));
    };
  } else if (ownProps.commentableType === "Annotation") {
    fetchComments = (commentableId) => {
      dispatch(fetchAnnotationComments(commentableId));
    };
  }

  return({
    createComment: (comment) => {
      dispatch(createComment(comment));
    },
    deleteComment: (commentId, commentableType) => {
      dispatch(deleteComment(commentId, commentableType));
    },
    createVote: (vote) => {
      dispatch(createVote(vote));
    },
    deleteVote: (vote) => {
      dispatch(deleteVote(vote));
    },
    fetchComments
  });
};

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(Comment));
