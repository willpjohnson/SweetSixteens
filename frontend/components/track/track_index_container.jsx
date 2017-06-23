import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchTracks } from '../../actions/track_actions';
import { values } from 'lodash';

const mapStateToProps = (state) => {
  const tracks = state.track.entities;
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
