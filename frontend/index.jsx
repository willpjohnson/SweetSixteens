import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.store = store;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // ReactDOM.render(<h1>Test</h1>, root);
  ReactDOM.render(<Root store={ store } />, root);
});
