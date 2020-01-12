import React from 'react';
import {
  Image,
  StyleSheet
} from 'react-native'

const Logo = (props) => {
   return (
     <Image source = {{uri: props.imageUri }}
     style = {props.class}/>
   )
}
export default Logo

const styles = StyleSheet.create({
  logo : {
     width: 250,
     height: 153,
     marginTop:140,
     
  }
})
