
import React, { useCallback } from 'react';
import { View, Text, } from 'react-native';
import { useSelector } from 'react-redux';

import TextStyles from '../../../helpers/TextStyles';
import strings from '../../../localization';
import getUser from '../../../selectors/UserSelectors';

import ContainerStyles from '../../../helpers/ContainerStyles';
import styles from './styles';

function Scoreboard() {
  return (
    <View style={ContainerStyles.container}>
      <Text style={TextStyles.lightTitle}>
      Scoreboard
      </Text>
    </View>
  );
}

Scoreboard.navigationOptions = {
  title: 'Scoreboard',
};

export default Scoreboard;
