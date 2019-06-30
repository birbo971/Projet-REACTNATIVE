import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView, 
  FlatList,
  ActivityIndicator,
  ListItem
} from 'react-native';

export default class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      isLoading: true,
    };
  }
  componentDidMount(){
    this.getNotes();
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
   <KeyboardAvoidingView behavior='padding'  style={styles.container} enabled>
        <View style={styles.contentContainer} >
        <ScrollView
          style={styles.container}>
            <Text>Welcome to member area</Text>

            <FlatList

              data={this.state.dataSource}

              ItemSeparatorComponent={this.FlatListItemSeparator}

              renderItem={({ item }) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.notes)} >{item.nom} {item.prenom} {item.notes} </Text>}

              keyExtractor={(item, index) => index}

            />

        </ScrollView>
    </View>
  </KeyboardAvoidingView>
    );
  }
    getNotes = () => {
      return fetch('http://192.168.0.23:3001/notes')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function () {
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  GetFlatListItem(notes) {

    alert(notes);

  } 
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
    color: '#FFF',
    fontSize: 25,
    alignItems:'center',
  },
    text : {

    }
});
