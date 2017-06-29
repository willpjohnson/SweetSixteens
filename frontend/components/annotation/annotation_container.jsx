import { connect } from 'react-redux';
import Annotation from './annotation';
import { fetchAnnotation, deleteAnnotation } from '../../actions/annotation_actions';
import { createVote, deleteVote } from '../../actions/vote_actions';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    currentAnno: state.annotation.allAnno[state.annotation.currentAnno],
    currentAnnoHeight: state.annotation.currentAnnoHeight,
    allAnno: state.annotation.allAnno,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAnnotation: (id) => {
      dispatch(fetchAnnotation(id));
    },
    deleteAnnotation: (annotationId) => {
      dispatch(deleteAnnotation(annotationId));
    },
    createVote: (vote) => {
      dispatch(createVote(vote));
    },
    deleteVote: (voteData) => {
      dispatch(deleteVote(voteData));
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Annotation);
