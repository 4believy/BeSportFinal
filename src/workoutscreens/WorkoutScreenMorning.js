import React from "react";
import { StyleSheet, View, Text } from "react-native";



import WorkoutMorning from "../components/Workoutmorning";
import styles from "../styles/styleWorkoutScreen"
export default function WorkoutScreenMorning() {
  return (
    <View style={styles.container}>
      <Text style={styles.desc}>Improves your overall flexibility and movement</Text>
      <View style={styles.exerciseType}>
     
        <Text style={styles.textExerciseType}>Good morning start</Text>
      </View>
      <WorkoutMorning />
    </View>
  );
}



