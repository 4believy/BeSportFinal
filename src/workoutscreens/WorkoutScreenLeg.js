import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Workoutleg from "../components/Workoutleg";
import styles from "../styles/styleWorkoutScreen"
export default function WorkoutScreenTimer() {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>great workout for your legs and whole body</Text>
      <View style={styles.exerciseType}>
       
        <Text style={styles.textExerciseType}>Leg training</Text>
      </View>
      <Workoutleg />
    </View>
  );
}

