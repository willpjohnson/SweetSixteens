import { connect } from 'react-redux';
import Annotation from './annotation';
import { fetchAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = (state) => {
  return({
    currentAnno: state.annotation.currentAnno,
    currentAnnoHeight: state.annotation.currentAnnoHeight,
    allAnno: state.annotation.allAnno,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAnnotation: (id) => {
      dispatch(fetchAnnotation(id));
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Annotation);
