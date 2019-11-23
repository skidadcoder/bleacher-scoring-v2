import React, { useCallback } from 'react';
import { View, Text, } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeColors, useTheme } from 'react-navigation';
import PropTypes from 'prop-types';

import strings from '../../../localization';
import getUser from '../../../selectors/UserSelectors';

import Button from '../../common/Button';

import ContainerStyles from '../../../helpers/ContainerStyles';
import TextStyles from '../../../helpers/TextStyles';
import styles from './styles';

function MyGameList(props) {
   let theme = useTheme();
  let colors = ThemeColors[theme];
  return (
    <View style={[ContainerStyles.container]}>
      <Text style={TextStyles.lightTitle}>
        My Game List
      </Text>
      <Button
          title="Keep Score"
          onPress={() => props.navigation.navigate('Scoreboard')}
        />
    </View>
  );
}

MyGameList.navigationOptions = {
  title: 'Game List',
};

MyGameList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MyGameList;
