import React, { useCallback, useEffect } from 'react';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { isLoadingSelector } from '../../../selectors/StatusSelectors';
import getUser from '../../../selectors/UserSelectors';
import getUserGames from '../../../selectors/UserGamesSelectors';

import { fetchUserGames, actionTypes } from '../../../actions/UserGamesActions';

import strings from '../../../localization';
import ContainerStyles from '../../../helpers/ContainerStyles';
import styles from './styles';

function MyGameList(props) {
  const games = useSelector(state => getUserGames(state));
  const isLoading = useSelector(state => isLoadingSelector([actionTypes.FETCH_USER_GAMES], state));
  const user = useSelector(state => getUser(state));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserGames());
  }, []);

  return (
    <Layout style={ContainerStyles.container}>
      <Text>My Game List</Text>
      <Button onPress={() => props.navigation.navigate('Scoreboard')}>Scoreboard</Button>

      {isLoading && (
        <Text>Loading...</Text>
      )}

      {!games && (
        <Text>no games</Text>
      )}

      {games && games.length > 0 && (
        <Text>{games.length}</Text>
      )}
    </Layout>
  );
}

MyGameList.navigationOptions = {
  title: 'Game List',
};

MyGameList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MyGameList;
