import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CONTRIBUTIONS = 'RECEIVE_CONTRIBUTIONS';

export const receiveUser = (userId) => dispatch => {
  return APIUtil.fetchUser(userId).then( (user) => {
    return dispatch(receiveSingleUser(user));
  });
};

export const fetchContributions = (userId) => dispatch => {
  return APIUtil.fetchContributions(userId).then( (contributions) => {
    return dispatch(receiveContributions(contributions));
  });
};

export const receiveSingleUser = (user) => {
  return({
    type: RECEIVE_USER,
    user
  });
};

export const receiveContributions = (contributions) => {
  return({
    type: RECEIVE_CONTRIBUTIONS,
    contributions
  })
};
