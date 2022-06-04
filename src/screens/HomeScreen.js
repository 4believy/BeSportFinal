import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button,Flatlist, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Colors } from "../styles/Colors";

export default function HomeScreen({ navigation }) {
  return (
    
    <SafeAreaView style={styles.container}>
     
      <Text style={styles.heading}>Workout list</Text>

      <View style={styles.content}>


        <TouchableOpacity
          style={styles.timerDefault}
          onPress={() => navigation.navigate("WorkoutScreenMorning")}
        >

        <Image  source={require("../../assets/first.jpg")} style={styles.homeImage} />

          <Text color={Colors.main} style={styles.callToAction}>
            Morning warm-up{"\n"}
            <Entypo name="star" size={24} color="black" />
            <Entypo name="star-outlined" size={24} color="black" />
            <Entypo name="star-outlined" size={24} color="black" />
          </Text> 
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.timerDefault}
          onPress={() => navigation.navigate("WorkoutScreenLeg")}
        >
          
        <Image  source={require("../../assets/second.jpg")} style={styles.homeImage} />
          <Text color={Colors.main} style={styles.callToAction}>
          Vigorous leg workout
          {"\n"}
            <Entypo name="star" size={24} color="black" />
            <Entypo name="star" size={24} color="black" />
            <Entypo name="star" size={24} color="black" />
          </Text>
        </TouchableOpacity>
    

        <TouchableOpacity
          style={styles.timerDefault}
          onPress={() => navigation.navigate("WorkoutScreenFullBody")}
        >
          
        <Image  source={require("../../assets/third.jpg")} style={styles.homeImage} />
          <Text color={Colors.main} style={styles.callToAction}>
          Full body fast workout
          {"\n"}
            <Entypo name="star" size={24} color="black" />
            <Entypo name="star" size={24} color="black" />
            <Entypo name="star-outlined" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.timerDefault}
          onPress={() => navigation.navigate("WorkoutScreenLeg")}
        >
          
        <Image  source={require("../../assets/4th.jpg")} style={styles.homeImage} />
          <Text color={Colors.main} style={styles.callToAction}>
          One more training
          {"\n"}
            <Entypo name="star" size={24} color="black" />
            <Entypo name="star" size={24} color="black" />
            <Entypo name="star" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  heading: {
    position: "absolute",
    top: "6%",
    fontFamily: "lato-regular",
    fontSize: 24,
    color: Colors.main,
  },
  callToAction: {
    width: "40%",
   
    color: Colors.main,
    fontSize: 22,
    left:"60%",
    margin: 5,
    position: "absolute",
    
  },
 
  timerDefault: {
   
    justifyContent: "center",
    width: 370,
    height: 130,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#eeeeee",
    marginHorizontal: 5,
    marginVertical: 5,
  

    elevation: 3,
  },
  content: {
    top:"5%",
    alignItems: "center",
    width:"100%"
  },
  homeImage:{
    width: "50%",
    height:"100%",
    borderRadius: 0,
  
    margin: 5
  }
})