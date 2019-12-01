import firebase from "firebase";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

class GameController {
    constructor() { }
  
    fetchUserGames = async () => {
        await(sleep(5000));  

        const { currentUser } = firebase.auth();
        
        return await firebase
            .database()
            .ref(`/games`)
            .orderByChild("userId")
            .equalTo(currentUser.uid)
            .once("value");
    };
}

export default new GameController;