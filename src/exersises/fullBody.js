import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  Modal,
  Text,
  View,
  SafeAreaView,
  FlatList,
 
  TouchableHighlight,
} from "react-native";

import styles from "../styles/styleExersises"


const DATA = [
  {
    id: "1",
    title: "jumping jack",
    section: "full body",
    image: require("../../assets/legtrain/15.gif"),
    modalTitle: "jumping jack",
    modalDesc:"Stand up straight, feet are brought together, arms are lowered.Bend your knees and jump. In a jump, at the same time, spread your legs slightly wider than your shoulders and raise your arms through the sides up, you can do a clap on your head.Jump to the starting position.Repeat jumping at a fast pace."
  },
  {
    id: "2",
    title: "wall squats",
    section: "full body",
    image: require("../../assets/Fullbody/2.gif"),
    modalTitle:"wall squats",
    modalDesc:
      " From the starting position, begin to squat down smoothly and slowly, bending your knees. The back is still firmly pressed against the wall.Reach the bottom point when your knees are bent nearly at right angles (80–90 °) and your hips are parallel to the floor. The most common comparison is that you sit in an imaginary chair. Depending on your level of fitness, stay at the bottom as long as you can. The longer the better. Smoothly and under control, but at the same time, quite strongly and powerfully rise up and go to the starting position. Repeat as needed.",
  },

  {
    id: "3",
    title: "push ups ",
    section: "full body",
    image: require("../../assets/Fullbody/3.gif"),
    modalTitle:"push ups",
    modalDesc:"The body forms a straight line, the pelvis does not go up and does not bend down.The abdominal muscles are tense, but the breath is not delayed.The head is in a neutral position, does not look down, but also does not lift up. The palms are strictly under the shoulders, do not go forward.The palms look forward, parallel to each other.The elbows are turned back 45 degrees, not to the side. As we inhale, we bend our arms at the elbows, then lower the body parallel to the floor, keeping the straight line of the body.",
  },
  
  {
    id: "4",
    title: "twisting",
    section: "full body",
    image: require("../../assets/Fullbody/4.gif"),
    modalTitle:"twisting",
    modalDesc:"Using your abdominal muscles, lift your shoulders from the floor and lift your torso towards your legs, but do not try to touch your hips with your forehead or belly. At the same time as lifting, turn your torso slightly to the right. Do the next repetition with a turn to the left.",
  },
  
  {
    id: "5",
    title: "squats",
    section: "full body",
    image: require("../../assets/morning/squat.gif"),
    modalTitle: "squats",
    modalDesc:"put your feet shoulder-width apart, spread the toes of your feet slightly to the sides. Transfer body weight from toes to heels, while squatting, do not take your feet off the floor. Keep your hands as convenient for you - stretched out in front of you, tucked behind your head or crossed over your chest."
  },
  
  {
    id: "6",
    title: "push-ups behind",
    section: "full body",
    image: require("../../assets/Fullbody/6.gif"),
    modalTitle:"push-ups behind",
    modalDesc:"Reverse push-ups also require your arms to be wider than your shoulders, but not too far apart.The shoulder joint moves as if on a hinge, in a straight line.The elbows do not extend to the sides, but tend straight back. Do not straighten your arms until the elbow joints snap into place - let them be straightened by 98-99%, and the joints remain included in the work.How low you go depends on your ability and skill level. Do not deepen the push-up if you feel discomfort in your shoulder joints. ",
  },
  
  {
    id: "7",
    title: "plank",
    section: "full body",
    image: require("../../assets/Fullbody/7.gif"),
    modalTitle:"plank",
    modalDesc:"get into a push-up position, next bend your elbows on 90 degrees and transfer your weight to your forearms. The whole body should form one straight line, the stomach is tucked up, the muscles are tense.",
  },
  
  {
    id: "8",
    title: "running with a high hip lift",
    section: "full body",
    image: require("../../assets/legtrain/high-knee.gif"),
    modalTitle: "running with a high hip lift",
    modalDesc:"Starting position: stand up straight, raise your right leg, bending it at the knee, while the right hand is pulled back in a straightened state. The left arm is bent at the elbow and is positioned at the level of the chest.Then we change the legs, while simultaneously changing the position of the hands to mirror. That is, now the Right leg is raised and the right hand is pulled back. The left arm is now bent at the elbow. It turns out that the hands work as when running, only more actively and expressively. To help the body balance"
  },
    
  {
    id: "9",
    title: "lunges",
    section: "full body",
    image: require("../../assets/Fullbody/9.gif"),
    modalTitle:"lunges",
    modalDesc:"Smoothly while inhaling, start moving down.As you exhale, thereafter rise to the starting position. When lowering, make sure that the knee does not protrude forward beyond the toe. The amplitude should be maximum. That is, the knee behind the standing leg almost touches the floor. To strengthen the work of the gluteal muscles, slightly bend your body towards the thigh, while remembering to keep the back arch. Do not round your back - this significantly relieves the load on the buttocks. On the inhale - we go down, on the exhale - we get up.",
  },
    
  {
    id: "10",
    title: "push-ups with torso rotation",
    section: "full body",
    image: require("../../assets/Fullbody/10.gif"),
    modalTitle:"push-ups with torso rotation",
    modalDesc:"Take the starting position: lower yourself to the classic push-up position.After that, Tighten your abdominal muscles, tighten them slightly your hips and buttocks, and straighten your back.With a deep breath, gently bend your arms and lower your sternum to the floor until it touches (if possible).Exhale and push out the body, but do not stop at the top point, but raise one hand and rotate the body 90 °.Hold for 2-3 seconds, then gently lower to the starting position and repeat the push-up with a turn to the other side.",
  },
    
  {
    id: "11",
    title: "side plank",
    section: "full body",
    image: require("../../assets/Fullbody/11.gif"),
    modalTitle:"side plank",
    modalDesc:"Lie sideways on the mat. Lean on your left arm bent at the elbow, and put your right leg on your left. This is the starting position. Then tear off the pelvis from the floor and position the body so that it is in one straight line. You will feel tension in your arm, but try to evenly distribute the load - the entire left side of the body and the muscles of the core should be in tension. In this position, stand for as long as possible (start with 30 seconds).",
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

