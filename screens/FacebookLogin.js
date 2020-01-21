import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity,Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import { AsyncStorage } from 'react-native';

export default class YourApp extends Component {
      /*
      {
      "picture": {
            "data": {
            "height": 50,
            "is_silhouette": false,
            "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2449688681957652&height=50&width=50&ext=1581537835&hash=AeQE0J4ebob8mL1E",
            "width": 50
          }
        },
      "name": "PhoneMyat Khine",
      "gender": "male",
      "link": "https://www.facebook.com/app_scoped_user_id/YXNpZADpBWEh5eEFLZAGxCWlBhcDRXUkFzRUJnXzFRT05NLTJaM3prYnU1aDlpRGJGUEtmQk5McHdmZAHNkOHlJUjJnVVlfU2gyRGh6M0xTVmdrTS1ucENoX2lSVFdzOGJURnJpdWJPYWZASdmlTbVhBTzJXbGlG/",
      "email": "phonemyatkhine88@gmail.com",
      "location": {
          "id": "103729219665367",
          "name": "Yangon"
        },
      "age_range": {
          "max": 20,
          "min": 18
        },
      "id": "2449688681957652"
      }
      */

    setUserSession = async (data) => {
      try {
        fetch('http://192.168.43.4:8080/user/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id :data.id,
            name :data.name,
            email :data.email,
            profile :data.link,
            gender :data.gender,
            location :data.location.name,
            picture :data.picture.data.url,
            ageRange :((data.age_range.max+data.age_range.min)/2),
          }),
        });
      } catch(error) {
          console.log(error.message);
      };

      }

     getUserSession = async () => {

      try {
          /*const value = await AsyncStorage.multiGet([
               'id',
               'name',
               'email',
               'profile',
               'gender',
               'location',
               'picture',
               'ageRange',
            ]) */
          //console.log(value[0])
            console.log("VALUE_______________________")
            fetch('http://192.168.43.4:8080/user/', {
              method: 'POST',
              headers: {
                 Accept: 'application/json',
                 'Content-Type': "multipart/form-data",
              },
              body: JSON.stringify({
                 id : await AsyncStorage.getItem('id') ,
                 name :await AsyncStorage.getItem('name'),
                 email :await AsyncStorage.getItem('email'),
                 profile :await AsyncStorage.getItem('profile'),
                 gender :await AsyncStorage.getItem('gender'),
                 location :await AsyncStorage.getItem('location'),
                 picture :await AsyncStorage.getItem('picture'),
                 ageRange :await AsyncStorage.getItem('ageRange'),
              }),
            }).then((response) => response.json())
                  .then((responseJson) => {
                  return responseJson;
                })
                .catch((error) => {
                  console.log(error.message);
                });
        } catch(e) {
          console.log(e)
        }
    }

    logIn = async () => {
      try {
        await Facebook.initializeAsync('287641608838908');
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile','email','user_age_range', 'user_location','user_link','user_gender'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?fields=picture.width(200).height(200),name,gender,link,email,location,age_range&access_token=${token}`);
          const responseJson = await response.json();
          //console.log(responseJson);
          this.setUserSession(responseJson);
          //AsyncStorage.setItem('ID',json.id);
          //Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    }


  render() {
    return (
        <View style={styles.FBcontainer}>
          <TouchableOpacity onPress= {this.logIn} style={styles.button}>
            <Text> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {this.getUserSession} style={styles.button}>
            <Text> Get </Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  FBcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F0004F',
    padding: 10,
    margin : 20,
  },
});

AppRegistry.registerComponent('YourApp', () => YourApp);
