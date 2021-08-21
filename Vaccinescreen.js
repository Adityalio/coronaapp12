import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";

import CallIcon from "react-native-vector-icons/Ionicons";
import SMSIcon from "react-native-vector-icons/MaterialIcons";
import WelcomeScreen from "../screen/login";
import firebase from 'firebase';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Images: [
        { image: require("../assets/cough.png") },
        { image: require("../assets/handshake.png") },
        { image: require("../assets/handwash.png") },

         { image: require("../assets/social-distance.jpg") },
      ],
      ImageText: [
        { text: "Cover To Sneez" },
        { text: "No HandShake" },
        { text: "Wash Hands" },
        
          { text: "  Social Distancing" },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View
          style={{
            width: "100%",
            height: "46%",
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            backgroundColor: "brown"
          }}
        >
          <View style={{ marginTop: 33, marginLeft: 30 }}>
            <Text style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>
              Covid-19
            </Text>
             <View style={styles.logOutContainer}>
          <TouchableOpacity
            style={{color:"white"}}
            onPress={() => {
              this.props.navigation.navigate("WelcomeScreen");
              firebase.auth().signOut();
            }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
     
          </View>

          <View style={{ marginTop: 20, marginLeft: 35, width: "100%" }}>
            <Text style={{ fontSize: 20, color: "#fff" }}>
              Are you feeling sick?
            </Text>

            <View style={{ marginTop: 20, width: "80%" }}>
              <Text style={{ fontSize: 14, color: "#fff" }}>
                If you feel sick with any of covid-19 symptoms please call or
                SMS us immediately for help.
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center",
              padding: 20,
              width: "90%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("tel:1075");
              }}
            >
              <View style={[styles.Button, { backgroundColor: "#FF4D58" }]}>
                <CallIcon name="call" size={30} color="#fff" />
                <Text style={{ fontSize: 16, color: "#fff", padding: 10 }}>
                  Call Now
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL("sms:1075");
              }}
            >
              <View style={[styles.Button, { backgroundColor: "#4D79FF" }]}>
                <SMSIcon name="chat" size={30} color="#fff" />
                <Text style={{ fontSize: 16, color: "#fff", padding: 10 }}>
                  SMS
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>



        <View
          style={{
            width: "90%",
            height: "28%",
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Precautions
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              padding: 7,
            }}
          >
            {this.state.Images.map((item, idx) => (
              <View
                key={idx}
                style={{
                  backgroundColor: "#FFE5EE",
                  padding: 1,
                  borderRadius: 20,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 80, height: 80, borderRadius: 20 }}
                />
              </View>
            ))}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {this.state.ImageText.map((item, idx) => (
              <Text key={idx} style={styles.BodyText}>
                {item.text}
              </Text>
            ))}
          </View>
          
        </View>


  
     
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 30,
  },
  BodyText: {
    fontSize: 15,
    padding: 10,
    fontWeight: "bold",
  },
});
