import React, { useState } from "react";
import {
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  
} from "react-native";

import styles from "../styles/styleExersises"


const DATA = [
  {
    id: "1",
    title: "side bends",
    section: "morning warm-up",
    image: require("../../assets/morning/side-bend.gif"),
    modalTitle: "side bends",
    modalDesc:
      "Stand straight with feet shoulder-width apart. Put your hands on your belt, expand your shoulders. Now pull in your stomach, tighten your buttocks, and twist your tailbone slightly forward and upward. Without changing the position of the pelvis and abdomen, fixing them with muscle tension, bend strictly to the side, directing your shoulder to the knee. The legs may be slightly bent.",
  },
  {
    id: "2",
    title: "hip abduction (left leg)",
    section: "morning warm-up",
    image: require("../../assets/morning/hip-abduction-left.gif"),
    modalTitle: "hip abduction (left leg)",
    modalDesc:
      "Lie on your side, put your lower hand on the floor or support your head with it, lower your upper hand to the floor. Tighten your glutes and lift your leg as high as possible. Lock the top position for 2 seconds while maintaining muscle tension, and then lower your leg. To keep the muscles tense, do not place your upper leg on your lower leg.",
  },
  {
    id: "3",
    title: "hip abduction (right leg)",
    section: "morning warm-up",
    image: require("../../assets/morning/hip-abduction-right.gif"),
    modalTitle: "hip abduction (right leg)",
    modalDesc:
      "Lie on your side, put your lower hand on the floor or support your head with it, lower your upper hand to the floor. Tighten your glutes and lift your leg as high as possible. Lock the top position for 2 seconds while maintaining muscle tension, and then lower your leg. To keep the muscles tense, do not place your upper leg on your lower leg.",
  },
  {
    id: "4",
    title: "forward bends",
    section: "morning warm-up",
    image: require("../../assets/morning/standing-forward-bend.gif"),
    modalTitle: "forward bends",
    modalDesc:
      "Stand up straight, place your feet shoulder-width apart, straighten your back. The natural deflection should be maintained in the lower back, the chest should be straightened. Tighten your abs and, keeping your back straight, put your body down, twisting at the hip joints. If your current level of flexibility does not allow you to reach the floor with your hands, do not round your back, but slightly bend your knees.Hold at the lowest point for 1-2 seconds and, due to the effort of the gluteal muscles, return to the starting position. Perform the desired number of repetitions.",
  },
  {
    id: "5",
    title: "breeding straight arms",
    section: "morning warm-up",
    image: require("../../assets/morning/body-weight-empty-can.gif"),
    modalTitle: "breeding straight arms",
    modalDesc:"Stand with palms facing up. Raise your arms and trace a heart shape with your thumbs. Reserve and repeat."
  },
  {
    id: "6",
    title: "squats",
    section: "morning warm-up",
    image: require("../../assets/morning/squat.gif"),
    modalTitle: "squats",
    modalDesc:"put your feet shoulder-width apart, spread the toes of your feet slightly to the sides. Transfer body weight from toes to heels, while squatting, do not take your feet off the floor. Keep your hands as convenient for you - stretched out in front of you, tucked behind your head or crossed over your chest."
  },
  {
    id: "7",
    title: "(left leg) quads stretch ",
    section: "morning warm-up",
    image: require("../../assets/morning/quadricep-stretch.gif"),
    modalTitle: " (left leg) quads stretch",
    modalDesc:"Stand up straight, transfer your body weight to one leg, and lift the other with your heel to the buttock. If you want ti increase the tension ther grasp your ankle with the same hand . Place your opposite hand at the waist, and if balance is difficult, grab a support such as the back of a chair or a wall."
  },
  {
    id: "8",
    title: "(right leg) quads stretch ",
    section: "morning warm-up",
    image: require("../../assets/morning/quadricep-stretch.gif"),
    modalTitle: "(right leg) quads stretch ",
    modalDesc:"Stand up straight, transfer your body weight to one leg, and lift the other with your heel to the buttock. Grasp the ankle with the same hand to increase the tension. Place your opposite hand at the waist, and if balance is difficult, grab a support such as the back of a chair or a wall."
  },
  {
    id: "9",
    title: "cross lunge(left)",
    section: "morning warm-up",
    image: require("../../assets/morning/curtsey-lunge-left.gif"),
    modalTitle: "cross lunge(left)",
    modalDesc:"Take dumbbells in your hands and stand with your feet keep shoulder width apart. Tighten your abs statically. Direct your gaze forward. This is your starting position, and as you inhale, lunge backwards with your foot diagonally. The knee bends to a 90 degree angle. As you exhale, return to the PI. Repeat the movement for the other leg. Perform the specified number of times for both legs."
  },
  {
    id: "10",
    title: "cross lunge(right)",
    section: "morning warm-up",
    image: require("../../assets/morning/curtsey-lunge-right.gif"),
    modalTitle: "cross lunge(right)",
    modalDesc:"Take dumbbells in your hands and stand with your feet shoulder-width apart. Tighten your abs statically. Direct your gaze forward. This is your starting position, and as you inhale, lunge backwards with your foot diagonally. The knee bends to a 90 degree angle. As you exhale, return to the PI. Repeat the movement for the other leg. Perform the specified number of times for both legs."
  },
  {
    id: "11",
    title: "stretching chest mice",
    section: "morning warm-up",
    image: require("../../assets/morning/chest-stretch.gif"),
    modalTitle: "stretching chest mice",
    modalDesc:"The exercise is performed in a standing position. Straighten your back, head forward, feet hip-width apart. Place your straight arms behind your back, interlocking them in a lock at the level of the lumbar spine. Next, try to bring the shoulder blades to the highest possible level and stay in this position."
  },
];

export default function ExercisesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const Item = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.exerciseImage} />
      <View style={styles.detailSection}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.section}>{item.section}</Text>
      </View>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => {
          openSettingsModal(item);
        }}
      >
        <Text style={styles.viewText}>Info</Text>
      </TouchableOpacity>
    </View>
  );

  const openSettingsModal = (item) => {
    setCurrentItem(item);
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{currentItem.modalTitle}</Text>
            <Text style={styles.modalText}>{currentItem.modalDesc}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: 'black' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

