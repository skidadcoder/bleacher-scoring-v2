import { combineReducers } from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import userGames from './UserGamesReducer';
import status from './StatusReducer';

const rootReducer = combineReducers({
  error,
  user,
  userGames,
  status,
});

export default rootReducer;
