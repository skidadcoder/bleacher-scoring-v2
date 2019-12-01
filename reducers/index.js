import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import {AsyncStorage} from 'react-native'
import rootReducer from './RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading', 'error', 'userGames'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const rootStore = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

export const store = rootStore;

export const persist = callback => persistStore(rootStore, null, callback);
