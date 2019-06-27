import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class LoginScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:''
        };
  };
  render(){

    return (
   <KeyboardAvoidingView behavior='padding'  style={styles.container} enabled>
    <View style={styles.container} >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.container}>
            <View style={{ padding:20 }}>
                <TextField label="Email" value={professionnels}></TextField>
            </View>
          </View>
          <View style={{ alignItems:'center'}}>
          <TouchableHighlight
              style={[styles.buttonContainer, styles.beauteBtn]}>
                <Text style={styles.loginText}>Se connecter</Text></TouchableHighlight>
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
  },
  txtField :{
    color:'#FFF'
  }
});
