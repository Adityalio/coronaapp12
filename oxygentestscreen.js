import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  style,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class OxgenTestScreen extends Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}> Test Your Oxgen Level from here</Text>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: 'aqua',
              width: 400,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
             
            },
          ]}
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://www.youtube.com/watch?v=_2jZO7B6HYc'
            );
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' ,width:200}}>
            Test from this Video
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'aqua',
  },
  text: {
    color: 'white',
    padding: 22,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
