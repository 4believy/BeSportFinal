import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Alert,
} from "react-native";
import { Colors } from "./Colors";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    exerciseType: {
      position: "absolute",
      zIndex: 1,
      top: 30,
      right: 40,
    },
   
    textExerciseType: {
      fontSize: 18,
      color: Colors.main,
      fontWeight: "500",
    },
    desc: {
      top: 35,
      left: 30,
      zIndex: 2,
      width: "40%",
      fontSize: 12,
      color: "grey",
      position: "absolute"
    }
  });
  