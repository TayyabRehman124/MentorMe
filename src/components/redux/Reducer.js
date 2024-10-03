import {SET_USER_DATA, LOGOUT_USER} from './Constants';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  // console.log('reducer log', action.payload);
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
