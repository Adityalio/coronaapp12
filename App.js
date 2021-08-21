import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './components/config';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppDrawerNavigator } from "./components/appdrawer";
import Vaccinescreen from '../Corona/screen/Vaccinescreen';
import StatisticsScreen from '../Corona/screen/newsscreen';
import OxgenTestScreen from '../Corona/screen/oxygentestscreen'
import Trackscreen from '../Corona/screen/trackingscreen';
import WelcomeScreen from "../Corona/screen/login"; 
import AppTabNavigator from "../Corona/components/apptabnavigator"

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab: AppTabNavigator
})


const AppContainer =  createAppContainer(switchNavigator);
