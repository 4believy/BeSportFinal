import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Workoutfullbody from "../components/Workoutfullbody";
import styles from "../styles/styleWorkoutScreen"
export default function WorkoutScreenTimer() {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>Improves your overall flexibility and movement</Text>
      <View style={styles.exerciseType}>
   
        <Text style={styles.textExerciseType}>Full Body</Text>
      </View>
      <Workoutfullbody />
    </View>
  );
}
