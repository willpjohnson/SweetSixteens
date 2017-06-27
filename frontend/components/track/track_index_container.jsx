import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchTracks } from '../../actions/track_actions';
import { values } from 'lodash';

const mapStateToProps = (state) => {
  const unsortedTracks = values(state.track.entities);
  const tracks = unsortedTracks.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });
  return({
    tracks
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchTracks: () => {
      dispatch(fetchTracks());
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
