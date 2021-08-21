import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Trackscreen from '../screen/trackingscreen';
import StatisticsScreen from '../screen/newsscreen';
import HomeScreen from '../screen/login';
import OxgenTestScreen from '../screen/oxygentestscreen'


export const AppTabNavigator = createBottomTabNavigator({
  Vaccinescreen : {
    screen: HomeScreen,
    navigationOptions :{
      
      tabBarLabel : "Vaccine Screen",
    }
  },
  StatisticsScreen: {
    screen: StatisticsScreen,
    navigationOptions :{
      tabBarLabel : "Statistcs Screen",
    }
  },
  Trackscreen : {
    screen: Trackscreen,
    navigationOptions :{
      
      tabBarLabel : "Track Screen",
    }
  },
   OxgenTestScreen: {
    screen: OxgenTestScreen,
    navigationOptions :{
      tabBarLabel : "OxgenTestScreen",
    }
  },
});