import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
    <Text style={styles.text}>    COVID-19 Tracking Screen</Text >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'orange',
  },
  text:{
    color: 'white',
    padding: 22,
    fontSize:22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;