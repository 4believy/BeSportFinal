import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign } from '@expo/vector-icons';
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";

import { Colors } from "./src/styles/Colors";

import HomeScreen from "./src/screens/HomeScreen";
import CalendarScreen from "./src/planning/CalendarScreen";
import Plan from "./src/planning/Plan";

import SettingsScreen from "./src/screens/SettingsScreen";
import WorkoutScreenMorning from "./src/workoutscreens/WorkoutScreenMorning";
import WorkoutScreenLeg from "./src/workoutscreens/WorkoutScreenLeg";
import WorkoutScreenFullBody from "./src/workoutscreens/WorkoutScreenFullBody";
import StatsScreen from "./src/screens/StatsScreen";

import { ExerciseProvider } from "./src/components/ExerciseStatCount";

import Morning from "./src/exersises/morning";
import LegWorkout from "./src/exersises/legWorkout";
import FullBody from "./src/exersises/fullBody";


import About from "./src/screens/About";


const getFonts = () =>
  Font.loadAsync({
    "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

const Tab = createBottomTabNavigator();
const NestedStack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.main,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Nested}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Planning"
        component={SecondScreens}
        options={{
          tabBarLabel: "Planning",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={MyTopTabs}
        options={{
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-handball" size={size} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarLabel: "Statistic",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="piechart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={NestedSettings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Nested = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        options={{ headerShown: false, title: "Back" }}
        name="HomeScreen"
        component={HomeScreen}
      />

<NestedStack.Screen
        name="WorkoutScreenLeg"
        component={WorkoutScreenLeg}
        options={{
          title: " Leg workout",
          headerStyle: {
            backgroundColor: Colors.main,
          },
          headerTintColor: "#fff",
        }}
      />
      <NestedStack.Screen
        name="WorkoutScreenMorning"
        component={WorkoutScreenMorning}
        options={{
          title: "Good morning start",
          headerStyle: {
            backgroundColor: Colors.main,
          },
          headerTintColor: "#fff",
        }}
      />

<NestedStack.Screen
        name="WorkoutScreenFullBody"
        component={WorkoutScreenFullBody}
        options={{
          title: "Full body",
          headerStyle: {
            backgroundColor: Colors.main,
          },
          headerTintColor: "#fff",
        }}
      />



      <NestedStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{
          title: "Statistics",
          headerStyle: {
            backgroundColor: Colors.main,
          },
          headerTintColor: "#fff",
        }}
      />
    </NestedStack.Navigator>
  );
};

const NestedSettings = () => {
  return (
    <NestedStack.Navigator>
      <NestedStack.Screen
        options={{ headerShown: false, title: "Back" }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <NestedStack.Screen
        name="About"
        component={About}
        options={{
          title: "About",
          headerStyle: {
            backgroundColor: Colors.main,
          },
          headerTintColor: "#fff",
        }}
      />
     
    </NestedStack.Navigator>
  );
};

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 25 : 0,
     flex: 1,
     backgroundColor: "white" }}>
      <TopTab.Navigator>
      <TopTab.Screen name="Morning warm-up " component={Morning} />
      <TopTab.Screen name="vigorous leg workout " component={LegWorkout} />
      <TopTab.Screen name="Full body fast workout " component={FullBody} />
     
      </TopTab.Navigator>
    </SafeAreaView>
  );
}




function SecondScreens() {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 25 : 0,
     flex: 1,
     backgroundColor: "white" }}>
      <TopTab.Navigator>
      
      <TopTab.Screen name="Calendar  " component={CalendarScreen} />
      <TopTab.Screen name="Plans" component={Plan} />
 
     
      </TopTab.Navigator>
    </SafeAreaView>
  );
}






export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <ExerciseProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ExerciseProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
