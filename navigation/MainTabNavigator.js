import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Profile from '../screens/HomeScreen';
import RestaurantsScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Profile,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarOptions: {
       activeTintColor: '#d63031',
       inactiveTintColor: '#000',
       style: {
        backgroundColor: '#FFF',
        paddingBottom : 10,
        height : 60,
      },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-person'  : 'md-contact'
      }
    />
  ),
};

HomeStack.path = '';

const RestaurantsStack = createStackNavigator(
  {
    Restaurants: RestaurantsScreen,
  },
  config
);

RestaurantsStack.navigationOptions = {
  tabBarLabel: 'Restaurants',
  tabBarOptions: {
       activeTintColor: '#d63031',
       inactiveTintColor: '#000',
       style: {
        backgroundColor: '#FFF',
        paddingBottom : 10,
        height : 60,
      },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-restaurant' : 'md-home'} />
  ),
};

RestaurantsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions: {
       activeTintColor: '#d63031',
       inactiveTintColor: '#000',
       style: {
        backgroundColor: '#FFF',
        paddingBottom : 10,
        height : 60,
      },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    RestaurantsStack,
    SettingsStack,
  },
  {
    initialRouteName: "HomeStack"
  });

tabNavigator.path = '';

export default tabNavigator;
