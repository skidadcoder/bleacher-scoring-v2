import React from 'react';
import { Icon, TopNavigation, TopNavigationAction, withStyles } from 'react-native-ui-kitten';
import { SafeAreaView } from 'react-navigation';

const BackIcon = (style) => (
    <Icon {...style} name='arrow-back'/>
  );

const EditIcon = (style) => (
    <Icon {...style} name='edit' />
);

const MenuIcon = (style) => (
    <Icon {...style} name='more-vertical' />
);

const BackAction = (props) => (
    <TopNavigationAction {...props} icon={BackIcon} />
);

const EditAction = (props) => (
    <TopNavigationAction {...props} icon={EditIcon} />
);

const MenuAction = (props) => (
    <TopNavigationAction {...props} icon={MenuIcon} />
);

const TopNavigationBarBase = (props) => {
    const { themedStyle, title, displayBackAction } = props;
    
    const onBackPress = () => {
        console.log("going back")
    };

    const renderLeftControl = () => (
        <BackAction onPress={onBackPress} />
    );

    const renderRightControls = () => [
        <EditAction />,
        <MenuAction />,
    ];

    return (
        <SafeAreaView style={themedStyle.safeArea}>
            <TopNavigation
                alignment='center'
                title={title}
                leftControl={displayBackAction && renderLeftControl()}
                rightControls={renderRightControls()}
            />
        </SafeAreaView>
    );
}

export const TopNavigationBar = withStyles(TopNavigationBarBase, (theme) => ({
    safeArea: {
        backgroundColor: theme['background-basic-color-1'],
    },
}));