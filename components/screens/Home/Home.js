import React, { useCallback } from 'react';
//import { View, Text, } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';

//import Button from '../../common/Button';

import TextStyles from '../../../helpers/TextStyles';
import strings from '../../../localization';
import getUser from '../../../selectors/UserSelectors';

import styles from './styles';

function Home(props) {
  const user = useSelector(state => getUser(state));
  const getMessage = useCallback(() => `${strings.homeMessage} ${user && user.name}`, [user]);
  const FacebookIcon = (style) => (
    <Icon name='facebook' {...style} />
  );

  return (
    <Layout style={styles.container}>
    <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
    <Button>BUTTON</Button>
    <Button icon={FacebookIcon}>Login with Facebook</Button>
  </Layout>
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

Home.navigationOptions = {
  title: strings.home,
};

export default Home;
