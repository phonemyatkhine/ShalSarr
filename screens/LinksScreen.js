import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import RestaurantTab from '../components/RestaurantTabs';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container} >
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
        <RestaurantTab/>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

});
