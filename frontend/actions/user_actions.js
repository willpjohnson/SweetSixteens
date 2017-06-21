import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (userId) => dispatch => {
  return APIUtil.fetchUser(userId).then( (user) => {
    dispatch(receiveSingleUser(user));
  });
};

export const receiveSingleUser = (user) => {
  return({
    type: RECEIVE_USER,
    user
  });
};
