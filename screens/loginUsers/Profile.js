import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView, 

} from 'react-native';

export default class Porfile extends React.Component{

  render(){
    return (
   <KeyboardAvoidingView behavior='padding'  style={styles.container} enabled>
    <View style={styles.container} >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.container}>
            <Text styles = { styles.text }>Welcome to member area</Text>
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
    alignItems:'center',
    justifyContent:'center',
        backgroundColor:'#2c3e50'
  },
    text : {
        color:'#FFF'
    }
});
