import React, { useCallback } from 'react';
import { View, Text, } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import strings from '../../../localization';
import getUser from '../../../selectors/UserSelectors';

import Button from '../../common/Button';

import ContainerStyles from '../../../helpers/ContainerStyles';
import TextStyles from '../../../helpers/TextStyles';
import styles from './styles';

function FavoriteGameList(props) {
  return (
    <View style={ContainerStyles.container}>
      <Text style={TextStyles.lightTitle}>
        Favorite Game List
      </Text>
      <Button
          title="Watch Game"
          onPress={() => props.navigation.navigate('Scoreboard')}
        />      
    </View>
  );
}

FavoriteGameList.navigationOptions = {
  title: 'Game List',
};

FavoriteGameList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default FavoriteGameList;
