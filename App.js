import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FormLabel, FormInput } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';




//const AppNavigator = StackNavigator(SomeAppRouteConfigs);

export default class App extends React.Component {
  


  constructor(props) {
    super(props);
    this.state = { userInfo: null };
  }

  _renderUserInfo = (userInfo) => {
    render (
      <View style={ alignItems = 'center' }>
        <Image
          source = {{ uri: this.state.userInfo.picture.data.url }}
          style = {{ width: 100, height: 100, borderRadius: 50}}
        />

        <Text style={{ fontSize: 20 }}> {this.state.userInfo.name} </Text>
      </View>

      );
  };


  re

  render() {
    return (
      <View>
        {!this.state.userInfo? 
          (<Button
            onPress={logIn}
            title="Facebook Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />) : 

          (this._renderUserInfo())}
        }

      </View>
    
      
      );
    }
  }

  async function logIn() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('130142711018493', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id.name.picture.type(large)`);
      const userInfo = await response.json();
      //this.setState({ userInfo });
      _renderUserInfo(userInfo);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }


/*

  render() {
    return (
    
     <Button
    onPress={logIn}
    title="Facebook Login"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    />
    
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

async function logIn() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('130142711018493', {
      permissions: ['public_profile'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id.name.picture.type(large)`);
    const userInfo = await response.json();
    this.setState({ userInfo })
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
  } 
} */
