import {SET_USER_DATA, LOGOUT_USER} from './Constants';

export const setUserData = userData => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
