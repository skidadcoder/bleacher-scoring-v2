import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from '../screens/Profile';
import Home from '../screens/Home';
import FavoriteGameList from '../screens/FavoriteGameList';
import Scoreboard from '../screens/Scoreboard';
import MyGameList from '../screens/MyGameList';

import homeIcon from '../../assets/ic_home/ic_home.png';
import settingsIcon from '../../assets/ic_settings/ic_settings.png';
import Colors from '../../helpers/Colors';

const iconForTab = ({ state }) => {
  switch (state.routeName) {
    case 'Home':
      return homeIcon;
    case 'Profile':
      return settingsIcon;
    case 'WatchGame':
      return settingsIcon;
    case 'KeepScore':
      return settingsIcon;
    default:
      return null;
  }
};

const TabIcon = ({ icon, tintColor }) => (// eslint-disable-line
  <Image
    source={icon}
    style={{ tintColor }}
  />
);

const ProfileStack = createStackNavigator({ Profile });

const HomeStack = createStackNavigator({ Home });
HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index === 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
}

const WatchGameStack = createStackNavigator({
  FavoriteGameList,
  Scoreboard,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#212121',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});
const KeepScoreStack = createStackNavigator(
  {
    MyGameList,
    Scoreboard,
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#212121',
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });
const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    WatchGame: WatchGameStack,
    KeepScore: KeepScoreStack,
    Profile: ProfileStack,
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.active,
      inactiveTintColor: Colors.inactive,
      style: {
        backgroundColor: Colors.background,
        //borderTopWidth: 0,
        height: 60,
        paddingTop: 10
      },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (// eslint-disable-line
        <TabIcon
          icon={iconForTab(navigation)}
          tintColor={tintColor}
        />
      ),
    }),
  },
);

export default AppStack;
