import * as APIUtil from '../util/session_api_util';

import { receiveUser } from './user_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_NULL_USER = 'RECEIVE_NULL_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (formData) => dispatch => {
  return APIUtil.login(formData).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(user => (dispatch(receiveNullUser())
  ));
};

export const signup = (formData) => dispatch => {
  return APIUtil.signup(formData)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors.responseJSON))
      // err => dispatch(receiveErrors(err))
    );
};

export const edit = (formData, id) => dispatch => {
  return APIUtil.edit(formData, id)
    .then(
      (user) => {
        return dispatch(receiveUser(user.id));
      },
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const receiveCurrentUser = (currentUser) => {
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveNullUser = () => {
  return({
    type: RECEIVE_NULL_USER
  });
};

export const receiveErrors = (errors) => {
  return({
    type: RECEIVE_ERRORS,
    errors
  });
};
