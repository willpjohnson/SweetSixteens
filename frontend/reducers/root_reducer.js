import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import TrackReducer from './track_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  track: TrackReducer,
});

export default RootReducer;
