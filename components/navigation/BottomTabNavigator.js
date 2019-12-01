import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon, withStyles } from 'react-native-ui-kitten';
import { SafeAreaView } from 'react-navigation';

const DashboardIcon = (style) => (
    <Icon name='layout' {...style} />
);

const FacebookIcon = (style) => (
    <Icon name='facebook' {...style} />
);

const BottomTabNavigatorBase = (props) => {

    const onTabSelect = (selectedIndex) => {
        const { [selectedIndex]: selectedRoute } = props.navigation.state.routes;
        props.navigation.navigate(selectedRoute.routeName);
    };

    const { themedStyle } = props;

    return (
        <SafeAreaView style={themedStyle.safeArea}>
            <BottomNavigation
                selectedIndex={props.navigation.state.index}
                onSelect={onTabSelect}>
                <BottomNavigationTab title='Home' icon={FacebookIcon} />
                <BottomNavigationTab title='Watch Game' icon={DashboardIcon} />
                <BottomNavigationTab title='Keep Score' icon={DashboardIcon} />
                <BottomNavigationTab title='Settings' icon={DashboardIcon} />
            </BottomNavigation>
        </SafeAreaView>
    );
}

export const BottomTabNavigator = withStyles(BottomTabNavigatorBase, (theme) => ({
    safeArea: {
        backgroundColor: theme['background-basic-color-1'],
    },
}));