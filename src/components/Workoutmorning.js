import React, { useState, useEffect, useContext } from "react";
import {
  Animated,
  Alert,
  Image,
  Text,
  View,
 
} from "react-native";
 


import { TouchableOpacity} from 'react-native-gesture-handler'

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../styles/Colors";
import { ExerciseStatCount } from "../components/ExerciseStatCount";
import moment from "moment";

import styles from "../styles/styleWorkout"
export default function WorkoutTimer() {
 


  const [count, setCount] = useState(1);
  const [key, setKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [exerciseContext, setExerciseStatCount] = useContext(ExerciseStatCount);

  const _format = "YYYY-MM-DD";
  const _today = moment(new Date().dateString).format(_format);

  const id = new Array(11);
  id[1] = require("../../assets/morning/side-bend.gif");
  id[2] = require("../../assets/morning/hip-abduction-left.gif");
  id[3] = require("../../assets/morning/hip-abduction-right.gif");
  id[4] = require("../../assets/morning/standing-forward-bend.gif");
  id[5] = require("../../assets/morning/body-weight-empty-can.gif");
  id[6] = require("../../assets/morning/squat.gif");
  id[7] = require("../../assets/morning/quadricep-stretch.gif");
  id[8] = require("../../assets/morning/quadricep-stretch.gif");
  id[9] = require("../../assets/morning/curtsey-lunge-left.gif");
  id[10] = require("../../assets/morning/curtsey-lunge-right.gif");
  id[11] = require("../../assets/morning/chest-stretch.gif");
  

  const onPressSkip = () => {
    if (count < 11) {
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
    if (count >= 11) {
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
        
          duration={25}
          size={300}
          colors={Colors.main}
          key={key}
          onComplete={() => {
 

            setCount((prevState) => prevState + 1);
        // добавление в статистику 
            setExerciseStatCount((prevState) => ({
              ...prevState,
              counts: 
               {
                CountWrk: (count >= 11) ? prevState.counts.CountWrk + 1 : prevState.counts.CountWrk,
                CountEx: (count < 11) ? prevState.counts.CountEx + 1 : prevState.counts.CountEx,
              },
              completedDates: {
                ...prevState.completedDates,
                ...date,
              }, 
            }));
            if (count >= 11) {
              console.log(exerciseContext);
              const createTwoButtonAlert = () =>
                Alert.alert(
                  "Workout complete! You did it, congratulation",
                 "your progress is saved, you can return to the home page",
                  [
                    {
                      text: "OK",
                      
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
