import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchTracks, fetch70sTracks, fetch80sTracks,fetch90sTracks, fetch00sTracks, fetch10sTracks } from '../../actions/track_actions';
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
    },
    fetch70sTracks: () => {
      dispatch(fetch70sTracks());
    },
    fetch80sTracks: () => {
      dispatch(fetch80sTracks());
    },
    fetch90sTracks: () => {
      dispatch(fetch90sTracks());
    },
    fetch00sTracks: () => {
      dispatch(fetch00sTracks());
    },
    fetch10sTracks: () => {
      dispatch(fetch10sTracks());
    }
  });
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
