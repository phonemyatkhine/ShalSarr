import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Facebook from 'expo-facebook';

import AppNavigator from './navigation/AppNavigator';
import TitleBar from './components/TitleBar';
import RestaurantTab from './components/RestaurantTabs';
import FacebookLogin from './screens/FacebookLogin';


export default function App(props) {

  const FBlogin =  true;

  if (FBlogin === true) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress= {this.logIn} style={styles.button}>
          <Text> Login </Text>
        </TouchableOpacity>
      </View>
      );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <TitleBar/>
        <AppNavigator />
      </View>
    );
  }
}

los = () => {
  alert("jajaj");
}
logIn = async () => {
  alert("jajaj");
  try {
    await Facebook.initializeAsync('287641608838908');
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  FBcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F0004F',
    padding: 10,
    paddingTop : 400,
  },
});
