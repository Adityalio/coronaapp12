import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './apptabnavigator'
import CustomSideBarMenu  from '../customside';
import HomeScreen from '../screen/Vaccinescreen';
import TrackScreen from '../screen/trackingscreen';
import StatisticsScreen from '../screen/newsscreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
  HomeScreen : {
    screen : HomeScreen
  },
  TrackScreen : {
    screen : TrackScreen
  },
  StatisticsScreen : {
    screen : StatisticsScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
