// import all necessary components
import React from 'react';
import { Platform } from 'react-native';
import {
    Easing,
    Animated,
    Image,
    StyleSheet,
    View,
    TouchableOpacity
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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import LoginScreen from '../screens/loginUsers/LoginScreen';
import ProfileScreen from '../screens/loginUsers/ProfileScreen';

class LogoHeader extends React.Component {
    render() {
        return (
            <View style = {{ flex:1, alignItems:'center' }}>
            <Image
                style={styles.logo}
                source={require('../assets/images/logo-pickidate-cut.png')}/>

            </View>
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
    Finance: HomeFinance,
    Login: LoginScreen,
    Profile: ProfileScreen

},{
    initialRouteName: "Home",
    transitionConfig,
        defaultNavigationOptions: (props) => {
            const { navigation } = props;
            return ({

        gesturesEnabled: true,
        transitionStyle: 'inverted',
        headerTitle:  <LogoHeader/>,
            headerRight: <TouchableOpacity onPress={() => navigation.navigate({ routeName: 'Login' })}>
            <FontAwesomeIcon icon={faSignInAlt} size={20}  style={{ color: '#FFF', marginRight: 10 }} />
            </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#3498db',
        },
        headerTintColor: '#fff'
        })
    }
})

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    }
});

export default createAppContainer(AppNavigator);
