import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  KeyboardAvoidingView 
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class HomeBeaute extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        Professionnels:'',
        Prestations:'',
        Ville:'',
     };
  };
  render(){
    let { professionnels } = '';
    let { prestations } = '';
    let { ville } = '';
    return (
   <KeyboardAvoidingView behavior='padding'  style={styles.container} enabled>
    <View style={styles.container} >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.container}>
            <View style={{ padding:20 }}>
              <Text style={styles.title}>Vos rendez-vous beauté chez Pickidate</Text>
                <TextField label="Nom de l'établissement" value={professionnels}></TextField>
                <TextField label='Prestations' value={prestations}></TextField>
                <TextField label='Ville' value={ville}></TextField>
            </View>
          </View>
          <View style={{ alignItems:'center'}}>
          <TouchableHighlight 
              style={[styles.buttonContainer, styles.beauteBtn]}>
                <Text style={styles.loginText}>Rechercher</Text></TouchableHighlight>
          </View>
        </ScrollView>
    </View>
  </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#9b59b6'
  },
  contentContainer: {
    paddingTop: 0,

  },
  title:{
    color:'#FFF',
    fontSize: 16,
    textAlign:'center',
    marginTop:20,
    marginBottom:20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeImage: {
    flex: 1,
    resizeMode:'stretch',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
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
    marginTop:5,
    width:250,
    borderRadius:30,
  },
  financeBtn: {
    backgroundColor: "#00b5ec",
  },
  beauteBtn: {
    marginTop:10,
    backgroundColor: "#FFF",
  },
  loginText:{
    color:'#333'
  }
});
