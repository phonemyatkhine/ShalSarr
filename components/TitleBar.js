import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'

const ShopLogo = (props) => {
  StatusBar.setBarStyle('light-content', true);
   return (
     <View style = {styles.titlebar}>
      <Text style = {styles.title} >Shel Chway Tar</Text>
     </View>
   )
}
export default ShopLogo

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  titlebar : {
     alignSelf: 'stretch',
     ...Platform.select({
          ios: {
             height: 40,
          },
          android: {
           height:  statusBarHeight+40,
          },
     }),
     backgroundColor : "#9d000a",
  },
  title : {
    color: '#FFFFFF',
    fontSize : 18,
    width : 600,
    paddingLeft:10,
    ...Platform.select({
         ios: {
            paddingTop: 5,
         },
         android: {
          paddingTop:  statusBarHeight+5,
         },
    }),
    fontWeight : 'bold',
  },
  statusbar : {
    height: StatusBar.currentHeight,
    backgroundColor: "#9d000a"
  }
})
