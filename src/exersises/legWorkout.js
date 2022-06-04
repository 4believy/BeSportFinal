import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";


import styles from "../styles/styleExersises"

const DATA = [

  {
    id: "1",
    title: "squats",
    section: "vigorous leg workout",
    image: require("../../assets/morning/squat.gif"),
    modalTitle: "squats",
    modalDesc:"put your feet shoulder-width apart, spread the toes of your feet slightly to the sides. Transfer body weight from toes to heels, while squatting, do not take your feet off the floor. Keep your hands as convenient for you - stretched out in front of you, tucked behind your head or crossed over your chest."
  },
  {
    id: "2",
    title: "jumping lunges",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/lunge-jump.gif"),
    modalTitle: "jumping lunges",
    modalDesc:"Start in a standard lunge position with one leg forward, knee bent 90 degrees, and your back leg almost touching the floor. Make sure that the bent knee does not protrude beyond the toe. Jump up and quickly swap legs in the air while keeping your torso straight. When jumping, also connect your arms to better feel and gain height. Land in a lunge position, bending your knees 90 degrees."
  },

  {
    id: "3",
    title: "side step",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/step-touch.gif"),
    modalTitle: "side step",
    modalDesc:"the initial position of the legs together, raise our arms, use our hands to raise our body, jump, move to the right with our right foot, put our left foot, then repeat the same with the left foot"
    
  },

  {
    id: "4",
    title: "running with jumping",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/power-skip.gif"),
    modalTitle: "running with jumping",
    modalDesc:"From a standing start, lift your right knee and swing your left arm forward and up whilst at the same time hopping on your left leg. As your left land lands, lower your right knee and swing your left arm back. At the same time shift your weight onto your right leg as you skip feet and raise your left knee, swing your right arm forwards and hop off your right foot. Continue this flowing skipping motion for the required duration.Aim to keep your back straight and upright during the exercise and engage your core."
  },

  {
    id: "5",
    title: "running with a high hip lift",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/high-knee.gif"),
    modalTitle: "running with a high hip lift",
    modalDesc:"Starting position: stand up straight, after that raise your right leg, bending it at the knee, while the right hand is pulled back in a straightened state. The left arm is bent at the elbow and is positioned at the level of the chest.Then we change the legs, while simultaneously changing the position of the hands to mirror. That is, now the Right leg is raised and the right hand is pulled back. The left arm is now bent at the elbow. It turns out that the hands work as when running, only more actively and expressively. To help the body balance"
  },

  {
    id: "6",
    title: "plank jump to squat",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/plank-jump-to-squat.gif"),
    modalTitle: "plank jump to squat",
    modalDesc:"Keep your shoulders over your wrists and tighten your abs when returning to the plank to avoid compression in your lower back. In squatting, you need to jump and, not straightening completely, again go to the lying position.If the squat jump fails, eliminate it."
  },

  {
    id: "7",
    title: "running with high heels",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/7.gif"),
    modalTitle: "running with high heels",
    modalDesc:"Get into a run-ready stance and sway slightly on your feet.From a standing position, run in place. Bend your knees until your heels touch your buttocks. Sweep in place for 10-15 seconds. When running with an overlap, the heels should lightly touch the buttocks. The exercises are performed without placing the heel on the surface (on the toes). It is necessary to monitor the accuracy of the movements and only then increase their frequency."
  },
  {
    id: "8",
    title: "side jumping",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/8.gif"),
    modalTitle: "side jumping",
    modalDesc:"Stand straight with your legs straight and your arms down at your sides. Take three quick sliding side steps to one side, trying to get your knees as high as possible with each step. For the last step, land on your outer leg and pause by lifting the knee of your inner leg. Slowly lower your leg and repeat the movement in the other direction."
  },
  {
    id: "9",
    title: "upward punches with twisting",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/9.gif"),
    modalTitle: "upward punches with twisting",
    modalDesc:"the legs are slightly bent, the body is tense, while performing the blow, keep the edge of the palm parallel to the floor"
  },
  {
    id: "10",
    title: "jumping on one leg",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/10.gif"),
    modalTitle: "jumping on one leg",
    modalDesc:"Stand on your right foot and jump, bringing your left knee up. Use your hands to move forward. trying to spend as little time as possible on the ground"
  },
  {
    id: "11",
    title: "sitting up kicks",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/11.gif"),
    modalTitle: "sitting up kicks",
    modalDesc:"take a bridge pose, alternate kicks with your leg up from this position, as a result, the leg should become perpendicular to the floor, repeat with the other leg."
  },
  {
    id: "12",
    title: "burpee with breeding and converging legs",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/12.gif"),
    modalTitle: "burpee with breeding and converging legs",
    modalDesc:"Starting position: standing, feet shoulder-width apart, without deflection in the lower back, abs and buttocks are tightened. We perform a squat (the knees do not come together), put our palms near the feet and jump into the bar. Further, depending on the complexity - either push-ups, or a plank, or even touching the floor with the chest.Then - return to the starting position or jump with a clap over your head."
  },
  {
    id: "13",
    title: "star jumping",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/13.gif"),
    modalTitle: "star jumping",
    modalDesc:"Take the starting position: stand up straight, feet shoulder-width apart, arms freely lower at your sides. Inhale and sit down until the hands are below the knee joints. Exhale, powerfully push off the floor and jump up as high as possible.  Simultaneously with the jump, spread your straight legs to the sides, and your arms at an angle of 45 ° up.Lowering to the floor, bring your limbs back to the starting position."
  },
  {
    id: "14",
    title: "running in place",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/14.gif"),
    modalTitle: "running in place",
    modalDesc:"In order for running on the spot to contribute to weight loss and bring the body benefits, not harm, it is very important to adhere to a competent technique for its implementation:Keep your shoulders straight and your stomach in.Bend your arms at the elbows just below chest level.Inhale with your nose and exhale with your mouth.Land your feet on your toes."
  },
  {
    id: "15",
    title: "jumping jack",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/15.gif"),
    modalTitle: "jumping jack",
    modalDesc:"Stand up straight, feet are brought together, arms are lowered.Bend your knees and jump. In a jump, at the same time, spread your legs slightly wider than your shoulders and raise your arms through the sides up, you can do a clap on your head.Jump to the starting position.Repeat jumping at a fast pace."
  },
  {
    id: "16",
    title: "mill",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/16.gif"),
    modalTitle: "mill",
    modalDesc:"Stand straight with your feet wider than shoulder level. Lean forward while maintaining a straight back as low as possible, but not below level when the body is parallel to the floor.Unfold the body so that one hand is pointing towards the floor and perpendicular to the surface. The other arm is extended upwards at the same angle. This is the starting position.Begin to synchronously rotate the body so that the hands are swapped. That is, the right hand from the lower position passed over the side to the upper and vice versa from the left. Without pause, repeat the movement at a moderate pace."
  },
  {
    id: "17",
    title: "jumping lunges",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/17.gif"),
    modalTitle: "jumping lunges",
    modalDesc:"Start in a standard lunge position with one leg forward, knee bent 90 degrees, and your back leg almost touching the floor. Make sure that the bent knee does not protrude beyond the toe. Jump up and quickly swap legs in the air while keeping your torso straight. When jumping, also connect your arms to better feel and gain height. Land in a lunge position, bending your knees 90 degrees."
  },
  {
    id: "18",
    title: "side jumps with a 180 degree turn",
    section: "vigorous leg workout",
    image: require("../../assets/legtrain/18.gif"),
    modalTitle: "side jumps with a 180 degree turn",
    modalDesc:"Jumping 180 degrees Sit down slightly and then jump using the strength of your core muscles to rotate your body 180 degrees before landing. Then jump in the opposite direction, turning 180 degrees again."
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

