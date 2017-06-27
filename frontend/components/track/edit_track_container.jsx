import { connect } from 'react-redux';
import EditTrackForm from './edit_track';
import { fetchTrack } from '../../actions/track_actions';
import { updateTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  const trackId = parseInt(ownProps.match.params.id);
  return({
    trackId: trackId,
    currentTrack: state.track.entities[trackId],
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    updateTrack: (track, trackId) => {
      return dispatch(updateTrack(track, trackId));
    },
    fetchTrack: (trackId) => {
      return dispatch(fetchTrack(trackId));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTrackForm);
