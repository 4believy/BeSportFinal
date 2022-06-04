import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { ExerciseStatCount } from "../components/ExerciseStatCount";

import { AsyncStorage } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../styles/Colors";

export default function StatsScreen() {
  const [exerciseContext, setExerciseStatCount] = useContext(ExerciseStatCount);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/stat.jpg")}
        style={{ width: "100%", height: 300, marginTop: 14 }}
        resizeMode="contain"
      />
     
      <View style={styles.cardWide}>
        <AntDesign
          style={styles.iconOne}
          name="Trophy"
          size={24}
          color="white"
        />
        <Text style={styles.headerOne}>Exercises Completed:</Text>
        <Text style={styles.exerciseNumber}>
          {exerciseContext.counts.CountEx.toString()}
        </Text>
        
      </View>

      <View style={styles.cardWide}>
        <AntDesign
          style={styles.iconOne}
          name="staro"
          size={24}
          color="white"
        />
        <Text style={styles.headerOne}>Workouts Completed:</Text>
        <Text style={styles.exerciseNumber}>
          {exerciseContext.counts.CountWrk.toString()}
        </Text>
        
      </View>

      <Text style={styles.stattext}>
      statistics page, here you can see how many exercises and workouts you have done, if you want, progress can be reset in the "Settings" section
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cardWide: {
    borderRadius: 15,
    height: 70,
    width: "90%",
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.main,
    marginTop: 30,
  },
  iconOne: {
    left: 0,
    top: 0,
  },
  headerOne: {
    position: "absolute",
    top: 10,
    left: 40,
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  exerciseNumber: {
    top: 20,
    right: 45,
    position: "absolute",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  remove: {
    width: "30%",
    padding: "2%",
    alignItems: "center",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    borderRadius: 5,
    marginLeft: "10%",
    marginTop: 10,
  },
  stattext:{
    marginTop:20,
    marginHorizontal: "5%",
    fontSize: 18,
  },
});