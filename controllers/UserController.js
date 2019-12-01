// import httpClient from './HttpClient';
import firebase from "firebase";
import { ThemeContext } from "react-navigation";

class UserController {
  constructor() { }

  login = async (email, password) => {
    return await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  };

  logout = async () => {
    return await firebase
      .auth()
      .signOut;
  };
}

export default new UserController();
