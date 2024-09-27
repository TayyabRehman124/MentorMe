import {combineReducers} from 'redux';
import userReducer from './Reducer';

export default combineReducers({
  user: userReducer, // Use "user" to access the state as state.user
});
