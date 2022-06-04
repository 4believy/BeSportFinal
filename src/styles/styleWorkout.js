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
    timerCont: {
      bottom: 20,
      left: 0,
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Roboto",
    },
    timer: {
      fontFamily: "lato-regular",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: 18,
      color: Colors.main,
    },
    text: {
      color: "#aaa",
      fontSize: 18,
    },
    value: {
      fontSize: 20,
      color: Colors.main,
      position: "absolute",
      marginTop: "45%",
      marginLeft: "35%",
    },
    timeOutside: {
      bottom: 11,
    },
    control: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      marginTop: "65%",
      marginHorizontal:"0%"
      
    },
    timerOver: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: 72,
      position: "absolute",
    },
    complete: {
      fontFamily: "lato-regular",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: 18,
      marginTop: "25%",
      marginLeft: "15%",
      color: Colors.main,
      justifyContent: "center",
      position: "absolute",
    },
    toggleTimer: {
      flexDirection: "row",
      fontSize: 20,
      color: Colors.main,
      marginLeft: 13,
    },
    backButton: {
      flexDirection: "row",
      fontSize: 20,
      color: Colors.main,
      marginLeft: 10,
      marginLeft: 13,
    },
    forwardButton: {
      flexDirection: "row",
      fontSize: 20,
      color: Colors.main,
      marginLeft: 10,
      marginLeft: 13,
    },
  });