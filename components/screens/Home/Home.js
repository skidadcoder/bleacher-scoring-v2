import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import {
  Avatar,
  Button,
  Icon,
  Layout,
  List,
  Tab,
  TabBar,
  Text,
  withStyles
} from 'react-native-ui-kitten';

//import Button from '../../common/Button';

import TextStyles from '../../../helpers/TextStyles';
import strings from '../../../localization';
import getUser from '../../../selectors/UserSelectors';

import styles from './styles';

const games = [
  {
    lastUpdated: 'Sat August 12 @ 6PM',
    gameName: 'Game 1',
    homeTeamName: 'Hawks',
    homeTeamScore: 14,
    awayTeamName: 'Cobras',
    awayTeamScore: 7,
    currentSet: 'Final'
  }, {
    lastUpdated: 'Sat August 12 @ 6PM',
    gameName: 'Game 1',
    homeTeamName: 'Hawks',
    homeTeamScore: 14,
    awayTeamName: 'Cobras',
    awayTeamScore: 7,
    currentSet: 'Final'
  }, {
    lastUpdated: 'Sat August 12 @ 6PM',
    gameName: 'Game 1',
    homeTeamName: 'Hawks',
    homeTeamScore: 14,
    awayTeamName: 'Cobras',
    awayTeamScore: 7,
    currentSet: 'Final'
  },
]

const HomeScreenComponent = (props) => {
  const { themedStyle } = props;
  const user = useSelector(state => getUser(state));
  console.log(user);
  const getMessage = useCallback(() => `${strings.homeMessage} ${user && user.name}`, [user]);
  const FacebookIcon = (style) => (
    <Icon name='facebook' {...style} />
  );

  const renderItem = ({ item, index }) => {
    return (
      <Layout level='1' style={{ marginVertical: 8, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
          <Text appearance='hint'>{item.lastUpdated}</Text>
          <View style={[themedStyle.liveIndicator]}>
            <Text>Live</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, marginVertical: 8 }}>
            <Text>{item.awayTeamName}</Text>
            <Text>{item.homeTeamName}</Text>
          </View>
          <View style={{ marginVertical: 8 }}>
            <Text>{item.awayTeamScore}</Text>
            <Text>{item.homeTeamScore}</Text>
          </View>
          <View style={{ marginVertical: 8 }}>
            <Text>{item.currentSet}</Text>
          </View>
        </View>
      </Layout>
    );
  };

  const StarIcon = (style) => (
    <Icon {...style} name='plus-circle-outline' />
  );

  return (
    <Layout style={[styles.container]}>
      <View style={{paddingBottom: 24}}>
        <View style={{ flexDirection: 'row', padding: 24 }}>
          <Avatar
            size='giant'
            source={{ uri: user.user.photoURL }}
          />
          <View style={{paddingHorizontal: 16}}>
            <Text category='h5'>{user.user.displayName}</Text>
            <Text appearance='hint' category='s2'>{user.user.email}</Text>
          </View>
        </View>

        <View style={{ paddingHorizontal: 24, paddingVertical: 32 }}>
          <Button status='primary'>CREATE A GAME</Button>
        </View>
      </View>

      <TabBar>
        <Tab title='MY GAMES' />
        <Tab title='FOLLOWING' />
      </TabBar>

      <List
        contentContainerStyle={themedStyle.listContentContainer}
        renderItem={renderItem}
        data={games} />
    </Layout>






    // <Text category='h4'>Welcome to UI Kitten</Text>
    // <Button>BUTTON</Button>
    // <Button icon={FacebookIcon}
    //   onPress={() => props.navigation.navigate('WatchGame')}>Login with Facebook</Button>


    // <View style={styles.container}>
    //   <Text style={TextStyles.lightTitle}>
    //     {strings.home}
    //   </Text>
    //   <Text>
    //     {getMessage()}
    //   </Text>
    //   <Button
    //     title="Watch Game"
    //     onPress={() => props.navigation.navigate('WatchGame')}
    //   />
    // </View>
  );
}

HomeScreenComponent.navigationOptions = {
  title: strings.home,
};

const Home = withStyles(HomeScreenComponent, (theme) => ({
  tabBarContent: {
    backgroundColor: theme['background-basic-color-3']
  },
  listContentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: theme['background-basic-color-2'],
  },
  liveIndicator: {
    backgroundColor: theme['color-success-700'],
    paddingHorizontal: 4,
    paddingVertical: 4
  },
}));

export default Home;
