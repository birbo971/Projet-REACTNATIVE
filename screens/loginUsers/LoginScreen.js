import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  KeyboardAvoidingView, 
  AsyncStorage,
  AsyncStorageStatic
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { TextInput } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:''
    };

  };
  componentDidMount(){
    this._loadInitialState().done();
  }
  _loadInitialState = async() =>{

    let value = await AsyncStorage.getItem('email');
      if(value !== null){
        this.props.navigation.navigate('Profile');
      }

  }
  render(){
    return (
   <KeyboardAvoidingView behavior='padding'  style={styles.container} enabled>
    <View style={styles.container} >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.container}>
            <View style={{ padding:20 }}>
                <TextInput style={{ height: 40, borderColor: 'lightgrey', borderWidth: 1, padding: 3, marginBottom: 5 }}
                  placeholder="Email"
                  onChangeText={(email) => this.setState({ email })} />
                <TextInput style={{ height: 40, borderColor: 'lightgrey', borderWidth: 1, padding: 3 }}
                  placeholder="Mot de passe"
                  onChangeText={(password) => this.setState({ password })} secureTextEntry={true} />
            </View>
          </View>
          <View style={{ alignItems:'center'}}>
          <TouchableHighlight
              style={[styles.buttonContainer, styles.beauteBtn]} onPress={ () =>this._login() } >
                <Text style={styles.loginText}>Se connecter</Text></TouchableHighlight>
          </View>
        </ScrollView>
    </View>
  </KeyboardAvoidingView>
    );
  }
  //function de connexion
  _login = () => {
      fetch('http://192.168.0.23:3001/users',  {
          method : 'POST',
          headers :{
            'Accept' :'application/json',
            'Content-Type': 'application/json',
          },
          body : JSON.stringify({
              email : this.state.email,
              password : this.state.password,

          })
      }).then((response) => response.json())
        .then((res)=> {
            if (res.success === true){
              AsyncStorage.setItem('user', res.user);
              this.props.navigation.navigate('Profile');
            }else{
               alert(res.message);
            }
        }).done();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  beauteBtn: {
    marginTop:10,
    backgroundColor: "#2980b9",
  },
  loginText:{
    color:'#FFF'
  },
  txtField :{
    color:'#FFF'
  }
});
