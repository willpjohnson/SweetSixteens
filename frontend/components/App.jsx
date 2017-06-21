import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import NavbarContainer from './navbar/navbar_container';
import UserShowContainer from './user_show_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavbarContainer />

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route path="/users/:id" component={UserShowContainer}/>
  </div>
);

export default App;
