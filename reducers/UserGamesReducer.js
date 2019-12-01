import { actionTypes } from '../actions/UserGamesActions';

const initialState = {
  games: null
};

const userGamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_GAMES_REQUEST:
      return {
        ...state,
      };
    case actionTypes.FETCH_USER_GAMES_SUCCESS:
      return {
        ...state,
        games: action.games,
      };
    default:
      return state;
  }
};

export default userGamesReducer;
