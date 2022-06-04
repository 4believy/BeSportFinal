import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

import { Colors } from "../styles/Colors";

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
       
        <Text style={styles.paragraph}>
          Мобільний додадок для спортивних занять реалізований на React Native 
          і створенний для дипломної роботи студента Білокрильця Ярослава 
        </Text>
        
      </ScrollView>
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
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    paddingHorizontal: "5%",
    paddingVertical: 2,
    fontSize: 16,
  },
});
