import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import * as firebase from 'firebase';

import Navigation from './components/navigation';
import getEnvVars from "./env";
import Colors from './helpers/Colors';
import { store, persist } from './reducers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyBfskI7Ziimj-JwCushuVthGfWh1JMKtPs",
  authDomain: "bleacher-tech.firebaseapp.com",
  databaseURL: getEnvVars.databaseUrl,
  projectId: "bleacher-tech",
  storageBucket: "bleacher-tech.appspot.com",
  //messagingSenderId: "843005735895"
};

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    persist(() => {
      setReady(true);
    });
  });

  const loading = (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );

  const loaded = (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={darkTheme}>
        <Navigation />
      </ApplicationProvider>
    </Provider>
  );

  return ready ? loaded : loading;
}