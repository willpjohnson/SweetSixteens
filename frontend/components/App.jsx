import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session_form_container';
import NavbarContainer from './navbar/navbar_container';
import UserShowContainer from './user_show_container';
import TrackShowContainer from './track/track_show_container';
import TrackIndexContainer from './track/track_index_container';

const App = () => (
  <div>
    <NavbarContainer />

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" component={TrackIndexContainer} />
    <Route path="/users/:id" component={UserShowContainer}/>
    <Route path="/tracks/:id" component={TrackShowContainer}/>
  </div>
);

export default App;
