import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native'



export default class App extends React.Component {
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
      `https://graph.facebook.com/me?access_token=${token}`);
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
  }
}
