import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form_container';
import NavbarContainer from './navbar/navbar_container';
import FooterContainer from './footer_container';
import UserShowContainer from './user_show_container';
import TrackShowContainer from './track/track_show_container';
import TrackIndexContainer from './track/track_index_container';
import NewTrackContainer from './track/new_track_container';


const App = (props) => {
  let authForm;
  if(props.location.search === "?login=true") {
    authForm = (<SessionFormContainer formType="login"/>);
  } else if (props.location.search === "?signup=true") {
    authForm = (<SessionFormContainer formType="signup"/>);
  } else {
    authForm = null;
  }
  return(
    <div className="entire-app">
      <NavbarContainer />

      <div className="all-content">
        {authForm}

        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />

        <Route exact path="/" component={TrackIndexContainer} />

        <Route path="/users/:id" component={UserShowContainer}/>
        <Route exact path="/tracks/:id" component={TrackShowContainer}/>
        <ProtectedRoute exact path="/new-track" component={NewTrackContainer}/>
      </div>

      <FooterContainer />
    </div>
  );
};

export default withRouter(App);
