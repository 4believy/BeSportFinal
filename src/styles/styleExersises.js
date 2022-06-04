
import {
  StyleSheet,
  
} from "react-native";
import { Colors } from "./Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBackground: {
    backgroundColor: Colors.main,
    width: "100%",
    height: "10%",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    position: "absolute",
    color: "white",
    fontSize: 12,
  },
  item: {
    padding: 5,
    backgroundColor: "#FFF",
    width: "100%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: Colors.greyLight,
    justifyContent: "center",
    alignItems: "center",
  },
  exerciseImage: {
    width: "45%",
    height: 120,
    borderRadius: 0,
   
  },
  detailSection: {
    width: "35%",
    justifyContent: "center",
    left: 0,
    marginLeft: 5,
  },
  title: {
    fontSize: 15,
  },
  section: {
    fontSize: 13,
  },
  viewButton: {
    height: 40,
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.greyMedium,
    borderRadius: 3,
  },
  viewText: {
    left: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTitle: {
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
