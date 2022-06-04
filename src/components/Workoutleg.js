import React, { useState, useEffect, useContext } from "react";
import {
 
  Text,
  View,
  Animated,
  Image,
  Alert,
} from "react-native";
import { TouchableOpacity} from 'react-native-gesture-handler'

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../styles/Colors";
import { ExerciseStatCount } from "./ExerciseStatCount";
import moment from "moment";
import styles from "../styles/styleWorkout"

export default function WorkoutTimer() {
  const [count, setCount] = useState(1);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [exerciseContext, setExerciseStatCount] = useContext(ExerciseStatCount);

  const _format = "YYYY-MM-DD";
  const _today = moment(new Date().dateString).format(_format);

  const id = new Array(18);
  id[1] = require("../../assets/morning/squat.gif");
  id[2] = require("../../assets/legtrain/lunge-jump.gif");
  id[3] = require("../../assets/legtrain/step-touch.gif");
  id[4] = require("../../assets/legtrain/power-skip.gif");
  id[5] = require("../../assets/legtrain/high-knee.gif");
  id[6] = require("../../assets/legtrain/plank-jump-to-squat.gif");
  id[7] = require("../../assets/legtrain/7.gif");
  id[8] = require("../../assets/legtrain/8.gif");
  id[9] = require("../../assets/legtrain/9.gif");
  id[10] = require("../../assets/legtrain/10.gif");
  id[11] = require("../../assets/legtrain/11.gif");
  id[12] = require("../../assets/legtrain/12.gif");
  id[13] = require("../../assets/legtrain/13.gif");
  id[14] = require("../../assets/legtrain/14.gif");
  id[15] = require("../../assets/legtrain/15.gif");
  id[16] = require("../../assets/legtrain/16.gif");
  id[17] = require("../../assets/legtrain/17.gif");
  id[18] = require("../../assets/legtrain/18.gif");


  const onPressSkip = () => {
    if (count < 18) {
      setCount((prevState) => prevState + 1);
      setKey((prevKey) => prevKey + 1);
    }
  };

  const onPressBack = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
      setKey((prevKey) => prevKey + 1);
    }
  };

  let date = {
    [_today]: { selected: true },
  };

  useEffect(() => {
    if (count >= 18) {
      setExerciseStatCount((prevState) => ({
        ...prevState,
        completedDates: {
          ...prevState.completedDates,
          ...date,
        },
      })) }}, [count]);

  return (
    <View style={styles.container}>
      <View style={styles.timerCont}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={30}
          size={300}
          colors={Colors.main}
          key={key}
          onComplete={() => {
 
            setCount((prevState) => prevState + 1);
      
            setExerciseStatCount((prevState) => ({
              ...prevState,
              counts: 
               {
                CountWrk: (count >= 18) ? prevState.counts.CountWrk + 1 : prevState.counts.CountWrk,
                CountEx: (count < 18) ? prevState.counts.CountEx + 1 : prevState.counts.CountEx,
              },
              completedDates: {
                ...prevState.completedDates,
                ...date,
              }, 
            }));
            if (count >= 18) {
              console.log(exerciseContext);
              const createTwoButtonAlert = () =>
                Alert.alert(
                  "Workout complete! You did it, congratulation",
                  "your progress is saved, you can return to the home page",
                  [
                    {
                      text: "OK",
                      onPress: () => console.log("okay"),
                    },
                  ],
                  { cancelable: true }
                );
              return [false, 0], createTwoButtonAlert();
            }
           
               
            return(
            [true, 10000]);
           }}


            
          
        >
          {({ remainingTime, animatedColor }) => (
            <View>
              <Image
                source={id[count]}
                style={{
                  width: 230,
                  height: 150,
                }}
              />
              <View style={styles.timeOutside}>
                <Animated.Text
                style={{
                  color: animatedColor,
                  fontSize: 20,
                  position: "absolute",
                  marginTop: "45%",
                  marginLeft: "20%",
                }}
                >
                  {remainingTime}
                </Animated.Text>
                <Text style={styles.value}>SECONDS</Text>
                <View style={styles.control}>
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={onPressBack}
                    disabled={count === 1}
                  >
                    <AntDesign
                      name="left"
                      size={50}
                      color={Colors.main}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setIsPlaying((prev) => !prev)}
                    color={Colors.main}
                    style={styles.toggleTimer}
                  >
                    {isPlaying ? (
                      <AntDesign
                        name="pause"
                        size={60}
                        color={Colors.main}
                      />
                    ) : (
                      <AntDesign
                        name="play"
                        size={60}
                        color={Colors.main}
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.forwardButton}
                    onPress={onPressSkip}
                    disabled={count === 21}
                  >
                    <AntDesign
                      name="right"
                      size={50}
                      color={Colors.main}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </CountdownCircleTimer>
      </View>
    </View>
  );
}
