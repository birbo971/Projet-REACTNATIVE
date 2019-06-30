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
  FlatList,
  KeyboardAvoidingView,
  AsyncStorage, 
  Picker,
  ActivityIndicator
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

export default class HomeBeaute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      professionnels: '',
      prestations: [],
      ville: [],
      isLoading: true,
      PickerValueHolder: ''
    };
    //this._getListActivites = this._getListActivites.bind(this)

  };
   componentDidMount() {
    //fonction des activites
    this._getListActivites();

  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
        <View style={styles.container} >
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>

            <View style={styles.container}>
              <View style={{ padding: 20 }}>
                <Text style={styles.title}>Vos rendez-vous beauté chez Pickidate</Text>
                <TextInput style={{ height: 40, borderColor: 'lightgrey', borderWidth: 1, padding: 3, marginBottom: 5 }}
                  placeholder="Nom de l'établissement"
                  onChangeText={(professionnels) => this.setState({ professionnels })} />
                <Picker
                  selectedValue={this.state.PickerValueHolder}

                  onValueChange={(itemValue) => this.setState({ PickerValueHolder: itemValue })} >

                  {this.state.dataSource.map((item, key) => (
                    <Picker.Item label={item.matieres} value={item.matieres} key={key} />)
                  )}

                </Picker>

                <TextField label='Ville' style={styles.txtField}></TextField>
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                style={[styles.buttonContainer, styles.beauteBtn]} onPress={() =>this.GetPickerSelectedItemValue() }> 
                <Text style={styles.loginText}>Rechercher</Text></TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
  GetPickerSelectedItemValue = () => {

    alert(this.state.PickerValueHolder);

  }
  _getListActivites = ()  => {
    return fetch('http://192.168.0.23:3001/listActivites')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 0,

  },
  title: {
    color: '#444',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeImage: {
    flex: 1,
    resizeMode: 'stretch',
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
    marginTop: 80,
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
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    width: 250,
    borderRadius: 30,
  },
  financeBtn: {
    backgroundColor: "#00b5ec",
  },
  beauteBtn: {
    marginTop: 10,
    backgroundColor: "#2980b9",
  },
  loginText: {
    color: '#FFF'
  },
  txtField: {
    color: '#FFF'
  }, flatview: {
    justifyContent: 'center',
    borderRadius: 2,
  }

});
