import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Linking,
  Button

} from 'react-native';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/logo-pickidate_03_300dpi.png')
                : require('../assets/images/logo-pickidate_03_300dpi.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Prenez un rendez-vous dès maintenant sur notre plateforme</Text>
          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
             <TouchableHighlight onPress={() => this.props.navigation.navigate('Beaute') }
              style={[styles.buttonContainer, styles.beauteBtn]}>
                <Text style={styles.loginText}>Beauté</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Finance')}
               style={[styles.buttonContainer, styles.financeBtn]}>
                <Text style={styles.loginText}>Finance</Text>
              </TouchableHighlight>
          </View>
        </View>

        <View style={styles.helpContainer}>
        </View>
      </ScrollView>
    </View>
  );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


function handleLearnMorePress() {
  const {navigate} =this.props.navigation;
    navigate('Beaute');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    marginTop:80,
    fontSize: 17,
    color: '#FFF',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    width:250,
    borderRadius:30,
  },
  financeBtn: {
    backgroundColor: "#00b5ec",
  },
  beauteBtn: {
    marginTop:50,
    backgroundColor: "#8e44ad",
  },
  loginText:{
    color:'#FFF'
  }
});
