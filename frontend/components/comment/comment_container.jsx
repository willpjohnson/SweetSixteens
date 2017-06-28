import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import values from 'lodash/values';
import Comment from './comment';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    comments: values(state.comment)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchComments: (annotationId) => {
      dispatch(fetchComments(annotationId));
    },
    createComment: (comment) => {
      dispatch(createComment(comment));
    },
    deleteComment: (commentId) => {
      dispatch(deleteComment(commentId));
    }
  });
};

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(Comment));
