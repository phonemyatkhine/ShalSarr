import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import Logo from './Logo'
import Line from './Line'
import Icon from './Icon'

import Layouts from '../constants/Layout'

const ProfileHeader = (props) => {
   return (
      <View style={{flex:1 ,flexDirection:"column"}}>
        <View style = {styles.tab1}>
          <Logo imageUri = "https://scontent.fbkk15-1.fna.fbcdn.net/v/t1.0-9/p960x960/50476214_2195585670701289_1374980608119275520_o.jpg?_nc_cat=110&_nc_ohc=P7AnTzYLh2UAQnn6hTmdopcdcfqpsJBszIS4iyUkmgI3DlLPFoCAEvE2Q&_nc_ht=scontent.fbkk15-1.fna&oh=72e7a5afab18df2b3b4e5fe3ce21b20d&oe=5EAA4602"
          class = {styles.logo}/>
          <View style = {styles.tab2}>
            <Text style={styles.name} numberOfLines={1} > {props.name} </Text>
            <View style = {styles.tab3} >
              <Icon name="md-mail"/>
              <Text style={styles.email} numberOfLines={1} > {props.email} </Text>
            </View>
            <View style = {styles.tab3}>
              <Icon name="md-call"/>
              <Text style={styles.phone} numberOfLines={1} > {props.phone} </Text>
            </View>
          </View>
        </View>
        <View style = {styles.tab4}>
          <Line/>
          <Text>
          You saved a total amount of : <Text style={{fontSize : 20, fontWeight: "bold"}}> {props.saved}  </Text>
          </Text>
          <Line/>
        </View>
      </View>

   )
}
export default ProfileHeader

 const width = Layouts.window.width
 const height = Layouts.window.height

const styles = StyleSheet.create({

  tab1 : {
    paddingTop : height/40,
    paddingLeft : width/18,
    flexDirection : "row",
    flex : 0.1,
    //backgroundColor : 'red',
    justifyContent : 'center',
  },
  tab2 : {
    flexDirection : "column",
    flex : 1,
    height : height/10,
    //backgroundColor : 'blue',
    marginTop : height/40,
    marginLeft :width/35,
    marginRight :width/18,
  },
  tab3 : {
    flex : 1,
    flexDirection : "row",
  },
  tab4 : {
    paddingTop : 20,
    flexDirection : "column",
    flex : 0.9,
    alignItems : "center",
  },
  logo : {
     width: width/5,
     height: width/5,
     marginTop: 10,
     borderRadius : 100,
     borderColor : "#ede7f6",
     marginBottom : 10,
     borderWidth: 3,
  },
  name : {
    color: '#000000',
    fontSize : 17,
    fontWeight : 'bold',
    flex : 1,
  },
  email : {
    color : '#000000',
    fontSize : 14,
    flex : 1,
  }

})
