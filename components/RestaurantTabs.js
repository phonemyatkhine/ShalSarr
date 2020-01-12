import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Line from './Line';

const RestaurantTab = (props) => {
   return (
        <TouchableOpacity
          style = {styles.container}
          >
          <Image source = {{uri: "https://i.ibb.co/GkBqQg9/download.png" }}
          style = {styles.logo}/>
          <View style = {styles.tab2}>
            <Text style = {styles.text}>
              Shwe Bell
            </Text>
            <View style = {styles.tab1}>
              <Image
              source = {{uri:'https://i.ibb.co/128g5ty/Pngtree-vector-location-icon-3781982.png'}}
              style = {styles.icon}
              />
              <Text style={styles.location} adjustsFontSizeToFit={true} numberOfLines={1}>
               8 Miles
              </Text>
            </View>
            <Text style={styles.location} adjustsFontSizeToFit={true}>
             Number of times visited : 3
            </Text>
            <Text style={styles.location} adjustsFontSizeToFit={true} numberOfLines={2}>
             Promotion : 30 %
            </Text>
          </View>
          <Line/>
        </TouchableOpacity>
   )
}
export default RestaurantTab

const styles = StyleSheet.create ({
    icon : {
     width: 18,
     height: 18,
    },
    text: {
        color: '#4f603c',
        fontSize : 20,
        fontWeight : 'bold',
        width : 120,
     },
     logo : {
       margin : 20,
       width : 100,
       height : 100,
     },
    container: {
        padding: 10,
        marginBottom: 3,
        flexDirection : "row",
        backgroundColor: '#d9f9b1',
     },
     tab1 : {
      flexDirection : "row",

    },
    tab2 : {
      flexDirection : "column",
    },
    location : {
      color: '#616161',
      fontSize : 14,
      fontWeight : 'bold',
      width : 1000,
    },
});
