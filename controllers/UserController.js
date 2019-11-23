// import httpClient from './HttpClient';
import firebase from "firebase";
import { ThemeContext } from "react-navigation";

class UserController {
  constructor() {
    this.basePath = '/users';
  }

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
