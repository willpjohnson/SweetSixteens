import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack } from '../../actions/track_actions';
import { fetchAnnotation, fetchAnnotations, createAnnotation } from '../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
  const trackId = parseInt(ownProps.match.params.id);
  const track = state.track.currentTrack;
  const anno = state.annotation.allAnno;
  const currentUser = state.session.currentUser;
  return({
    trackId,
    track,
    anno,
    currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchTrack: (trackId) => {
      dispatch(fetchTrack(trackId));
    },
    fetchAnnotations: (trackId) => {
      dispatch(fetchAnnotations(trackId));
    },
    fetchAnnotation: (id) => {
      dispatch(fetchAnnotation(id));
    },
    createAnnotation: (annotation) => {
      dispatch(createAnnotation(annotation));
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
