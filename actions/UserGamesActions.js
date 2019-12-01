import GameController from '../controllers/GameController';

export const actionTypes = {
    FETCH_USER_GAMES: 'FETCH_USER_GAMES',
    FETCH_USER_GAMES_REQUEST: 'FETCH_USER_GAMES_REQUEST',
    FETCH_USER_GAMES_ERROR: 'FETCH_USER_GAMES_ERROR',
    FETCH_USER_GAMES_SUCCESS: 'FETCH_USER_GAMES_SUCCESS',
};

const userGamesFetchRequest = () => ({
    type: actionTypes.FETCH_USER_GAMES_REQUEST,
});

const userGamesFetchError = error => ({
    type: actionTypes.FETCH_USER_GAMES_ERROR,
    error,
});

const userGamesFetchSuccess = games => ({
    type: actionTypes.FETCH_USER_GAMES_SUCCESS,
    games,
});

export const fetchUserGames = () => async (dispatch) => {
    dispatch(userGamesFetchRequest());
    try {
        await GameController.fetchUserGames().then(function(snapshot){
            let gameObject = snapshot.val();
            let gameArray = Object.values(gameObject);
            dispatch(userGamesFetchSuccess(gameArray));
        });
    } catch (error) {
        dispatch(userGamesFetchError(error.message));
    }
};