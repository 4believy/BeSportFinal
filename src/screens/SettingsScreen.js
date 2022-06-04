import React, { useState, useContext } from "react";
import { StyleSheet, View, Switch, Linking } from "react-native";
import { Text, Button } from "react-native-elements";
import { ExerciseStatCount } from "../components/ExerciseStatCount";

import { Colors } from "../styles/Colors";

import { TouchableOpacity } from "react-native-gesture-handler";
import { AsyncStorage } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [isNotifEnabled, setIsNotifEnabled] = useState(true);
  const [exerciseContext, setExerciseStatCount] = useContext(ExerciseStatCount);



  const removeDates = async () => {
    try {
      await AsyncStorage.removeItem("MyCompletedDates");
    } catch (err) {
      alert(err);
    } finally {
      setExerciseStatCount((prevState) => ({
        ...prevState,
        completedDates: {},
      }));
    }
  };

  const removeExercise = async () => {
    try {
      await AsyncStorage.removeItem("MyExercise");
    } catch (err) {
      alert(err);
    } finally {
      setExerciseStatCount((prevState) => ({
        ...prevState,
        counts: {
          CountEx: 0,
          CountWrk: prevState.counts.CountWrk,
        },
      }));
    }
  };

  
  const removeWorkout = async () => {
    try {
      await AsyncStorage.removeItem("MyWorkout");
    } catch (err) {
      alert(err);
    } finally {
      setExerciseStatCount((prevState) => ({
        ...prevState,
        counts: {
          CountWrk: 0,
          CountEx: prevState.counts.CountEx,
        },
      }));
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.pageRef}>SETTINGS</Text>
      <View style={styles.top}>
        <Text style={styles.title}>Setting page</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.settingsTitle}>Settings Screen</Text>
        <View style={{marginTop: "15%", width: "100%"}}>
  
        </View>
      
        <TouchableOpacity   style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5,
          }} onPress={() => removeWorkout()}>
           <Text style={{ color: Colors.main, fontWeight: "bold" }}>Remove workout statistic</Text>
        </TouchableOpacity>
        
        <View style={styles.divider}></View>

        <TouchableOpacity   style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5,
          }} onPress={() => removeExercise()}>
          <Text style={{ color: Colors.main, fontWeight: "bold" }}>Remove exercise statistic</Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>






        
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5,
          }}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={{ color: Colors.main, fontWeight: "bold" }}>
          About
          </Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>

        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  pageRef: {
    zIndex: 4,
    position: "absolute",
    top: "5%",
    left: "7%",
    color: "#ffffff",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonGroup: {
    height: 60,
    width: 300,
  },
  buttonGroupText: {
    fontSize: 18,
    color: "white",
  },
  slider: {
    width: 250,
    marginLeft: 16,
  },
  card: {
    alignItems: "center",
    backgroundColor: "#eeeeee",
    borderColor: "#ABB2B9",
    borderWidth: 0.3,
    width: "90%",
    borderRadius: 10,
  },
  restoreButtonContainer: {
    marginTop: 48,
    marginHorizontal: 48,
    marginBottom: 24,
    left: 40,
    bottom: 0,
    position: "absolute",
  },
  top: {
    height: "40%",
    width: "100%",
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "black",
    top: 0,
  },
  middle: {
    width: "85%",
    height: "70%",
    flex: 1,
    position: "absolute",
    zIndex: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 26.3,
    borderRadius: 10,
    top: "25%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
   
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    top: "5%",
    color: "#2D3057",
  },
  lockDesc: {
    fontSize: 9,
    width: "100%",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    color: Colors.mainFont,
    marginBottom: 3,
  },
  lockDescBold: {
    fontSize: 10,
    width: "100%",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    color: Colors.mainFont,
    marginBottom: 3,
  },



  divider: {
    borderBottomWidth: 1,
    borderColor: Colors.greyLight,
    width: "90%",
    marginVertical: 10,
  },

});
