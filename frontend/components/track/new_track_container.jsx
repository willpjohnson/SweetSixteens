import { connect } from 'react-redux';
import NewTrackForm from './new_track';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.track.currentTrack,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return({
    createTrack: (track) => {
      return dispatch(createTrack(track));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTrackForm);
