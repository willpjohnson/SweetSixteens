import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import TrackReducer from './track_reducer';
import AnnotationReducer from './annotation_reducer';
import CommentReducer from './comment_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  track: TrackReducer,
  annotation: AnnotationReducer,
  comment: CommentReducer,
  search: SearchReducer
});

export default RootReducer;
