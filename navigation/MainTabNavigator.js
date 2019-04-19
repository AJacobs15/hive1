import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MapScreen from '../screens/MapScreen';
import UserScreen from '../screens/UserScreen';
import EventScreen from '../screens/EventScreen'
import FoodForm from '../screens/FoodForm';
import SigninForm from '../screens/SigninForm';

const MapStack = createStackNavigator({
  Map: MapScreen,
  Food: FoodForm,
  Event: EventScreen,
},
{
  initialRouteName: 'Map',
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'? 'ios-map':'md-map'}
    />
  ),
};

const UserStack = createStackNavigator({
  User: UserScreen,
});

UserStack.navigationOptions = {
  tabBarLabel: 'You',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
};

const SigninStack = createStackNavigator({
  Signin: SigninForm,
});

UserStack.navigationOptions = {
  tabBarLabel: 'Signin Test',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'}
    />
  ),
};

export default createBottomTabNavigator({
  MapStack,
  UserStack,
  SigninStack
});
