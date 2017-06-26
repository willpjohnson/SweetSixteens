import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack } from '../../actions/track_actions';
import { fetchAnnotation, fetchAnnotations } from '../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
  const trackId = parseInt(ownProps.match.params.id);
  const track = state.track.currentTrack;
  const anno = state.annotation.allAnno;
  return({
    trackId,
    track,
    anno
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
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
