import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';
import * as WebBrowser from 'expo-web-browser';


export default class Trackscreen extends Component {
render(){
return(
<View>

<View>
<AppHeader
 />

</View> 
<View style = {{alignContent:"center" , justifyContent:"center",marginTop:50}}>

 <TouchableOpacity  
 style={[styles.button,{backgroundColor:"aqua"}]}
 onPress={() => 
 { WebBrowser.openBrowserAsync('https://bing.com/covid/local/meerut_uttarpradesh_india'); }}>
  <Text style={styles.buttonText}>
Track COVID-19 Patients Near You  </Text> 
  
  </TouchableOpacity>
  

          </View>
<View style = {{alignContent:"center" , justifyContent:"center",marginTop:50}}>

 <TouchableOpacity  
 style={[styles.button,{backgroundColor:"pink"}]}
 onPress={() => 
 { WebBrowser.openBrowserAsync('https://dir.indiamart.com/lucknow/oxygen-cylinders.html'); }}>

  <Text style={styles.buttonText}>
  Buy Oxygen Cylinders from here
  </Text> 
  
  </TouchableOpacity>
  

          </View>
          <View style = {{alignContent:"center" , justifyContent:"center",marginTop:50}}>

          <TouchableOpacity  
 style={[styles.button,{backgroundColor:"yellow"}]}
 onPress={() => 
 { WebBrowser.openBrowserAsync('http://dgmhup.gov.in/en/CovidReport'); }}>

  <Text style={styles.buttonText}>
  Availability of Beds In UP from here
  </Text> 
  
  </TouchableOpacity>
  </View>
</View>
)
}       

}
const styles = StyleSheet.create({
  button: {
    marginLeft: 70,
    marginRight:80,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 75,
    backgroundColor: 'aqua',
    borderRadius: 25,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    
  }
  
});


















