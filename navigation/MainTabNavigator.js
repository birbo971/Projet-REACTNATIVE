// import all necessary components
import React from 'react';
import { Platform } from 'react-native';
import {
    Easing,
    Animated,
    Image,
    StyleSheet,
    View
} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeBeaute from '../screens/HomeBeaute';
import HomeFinance from '../screens/HomeFinance';

class LogoHeader extends React.Component {
    render() {
        return (
            <Image
                style={styles.logo}
                source={require('../assets/images/logo-pickidate-cut.png')}
            />
        );
    }
}

// Configuration of transition left-right/right-left
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(8)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps
            const thisSceneIndex = scene.index
            const width = layout.initWidth
            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [ { translateX } ] }
        },
    }
}

const LinksStack = createStackNavigator({
    Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Beaute: HomeBeaute,
    Finance: HomeFinance
},{
    initialRouteName: "Home",
    transitionConfig,
    defaultNavigationOptions: {
        gesturesEnabled: true,
        transitionStyle: 'inverted',
        headerTitle: <LogoHeader/>,
        headerStyle: {
            backgroundColor: '#3498db',
        },
        headerTintColor: '#fff',
    },
})

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: 'pink'
    }
});

export default createAppContainer(AppNavigator);
