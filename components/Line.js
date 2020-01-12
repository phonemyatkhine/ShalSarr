import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import Layout from '../constants/Layout'

const Line = (props) => {
   return (
     <TextInput
       style = {styles.line}
       editable = {false}
     />
   )
}
export default Line

const width = Layout.window.width

const styles = StyleSheet.create({
  line: {
     borderBottomColor: '#ede7f6',
     borderBottomWidth: 3,
     width : width-(width/10),
     marginLeft:20,
     marginRight:20,
  },

})
