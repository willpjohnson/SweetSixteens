import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  const trackId = parseInt(ownProps.match.params.id);
  const track = state.track.currentTrack;
  return({
    trackId,
    track
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchTrack: (trackId) => {
      dispatch(fetchTrack(trackId));
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
