import React, { useContext,  } from "react";
import { StyleSheet,
  Text,
  View,
  Image,
  } from "react-native";
import { ExerciseStatCount } from "../components/ExerciseStatCount";
import { Colors } from "../styles/Colors";

import { Calendar} from "react-native-calendars";


export default function CalendarScreen() {
  const [exerciseContext] = useContext(ExerciseStatCount);

  return (
    <View style={styles.container}>
   
      <View style={styles.filler}></View>
      <Calendar
        markedDates={exerciseContext.completedDates}
        
        markingType={"multi-dot"}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: Colors.mainFont,
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: Colors.main,
          selectedDayTextColor: "#ffffff",
          todayTextColor: 'red',
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: Colors.main,
          disabledArrowColor: "#d9e1e8",
          monthTextColor: Colors.main,
          indicatorColor: "blue",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          "stylesheet.calendar.header": {
            dayHeader: {
              width: 48,
            },
          },


          
        }}
      />


        <Text style={styles.calendarSummary}>
     here you can check the current date and plan your workouts
      </Text>
      <Image
       source={require("../../assets/calendar.jpg")}
        style={{ width: "100%", height: "20%", marginBottom: 5, marginTop: "0%" }}
        resizeMode="contain"
      />
      <Text style={styles.calendarSummary}>
      Experts recommend three times a week for 60 minutes. It is better to choose the time in the morning or in the evening until 21 o'clock. If you want to play sports later or skip a workout, then choose the first option. Try to go to bed two hours after class.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
 
  text: {
    marginTop: 0,
    paddingRight: 30,
  },
  main: {
    justifyContent: "center",
    alignItems: "center",
    top: 250,
  },
  answerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarSummary: {
    fontSize: 15,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
    color: Colors.mainFont,
  
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    width: 200,
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#eeeeee",
    marginTop: "20%",
    marginBottom: "10%",
    elevation: 8,
  },
});
