import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { TopNavigationBar } from './TopNavigationBar';

import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Scoreboard from '../screens/Scoreboard';

import {
  getCurrentRouteState,
  isRootRoute,
  getCurrentRouteIndex,
  RouteState,
} from './utils';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

const MenuTopNavigationParams = {
  header: props => {
    const { routeName } = getCurrentRouteState(props.navigation);
    const index = getCurrentRouteIndex(props.navigation);
    
    return <TopNavigationBar
      {...props}
      title={routeName}
      displayBackAction={!isRootRoute(index)} />
  }
}

const MenuNavigationOptions = {
  ...MenuTopNavigationParams
}

const AppStack = createStackNavigator({
  Home,
  Profile,
  Scoreboard,
  Profile,
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: MenuNavigationOptions
  });


export default AppStack;
