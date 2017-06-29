import { values } from 'lodash';
import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import { fetchAnnotation, fetchAnnotations, createAnnotation, receiveAnnotation, receiveHeight } from '../../actions/annotation_actions';

const mapStateToProps = (state, ownProps) => {
  const trackId = parseInt(ownProps.match.params.id);
  const track = state.track.entities[trackId];
  const anno = track ?
  track.annotation_ids.map(annoId => state.annotation.allAnno[annoId]) : [];
  const currentAnno = state.annotation.currentAnno;
  const currentAnnoHeight = state.annotation.currentAnnoHeight;
  const currentUser = state.session.currentUser;
  return({
    trackId,
    track,
    anno,
    currentAnno,
    currentUser,
    currentAnnoHeight
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchTrack: (trackId) => {
      dispatch(fetchTrack(trackId));
    },
    deleteTrack: (trackId) => {
      dispatch(deleteTrack(trackId));
    },
    fetchAnnotations: (trackId) => {
      dispatch(fetchAnnotations(trackId));
    },
    fetchAnnotation: (id) => {
      dispatch(fetchAnnotation(id));
    },
    createAnnotation: (annotation) => {
      dispatch(createAnnotation(annotation));
    },
    receiveAnnotation: (annotation, height) => {
      dispatch(receiveAnnotation(annotation, height));
    },
    receiveHeight: (height) => {
      dispatch(receiveHeight(height));
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
