import React, { useState } from "react";
import { Button, View, Text, TextInput, Keyboard, TouchableOpacity,StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';

import { Colors } from "../styles/Colors";

const Plan = () => {
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false);
  const [datetime, setDateTime] = useState(null);

  const showDateTimePicker = () => {
    Keyboard.dismiss();
    setDateTimePickerVisibility(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };



  
  const handleConfirm = (datetime) => {
    setDateTime(Moment(datetime).format('DD MM YYYY hh:mm'));
    hideDateTimePicker();
    Keyboard.dismiss();
  };

 

  

  return (
  
    <View  style={styles.header}>

<View style={{ marginVertical:20}}   >
      <Text style={styles.textstyle}>Plan your workout datetime: </Text>
      <TouchableOpacity onPress={showDateTimePicker} >
 
        <Text style={styles.textstyle}>Date and time: {datetime? datetime: 'please input datetime'}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDateTimePicker}
      />
          </View>

      
  

    </View>





  );
};

const styles = StyleSheet.create({
  header:{

    flex: 1,
      justifyContent: "center",
      alignItems: "center",
    
      marginBottom:"40%"
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: Colors.greyLight,
    width: "90%",
    marginVertical: 10,
  },
  textstyle: {
    color: Colors.main, 
    fontWeight: "bold",
    fontSize: 16,
  },

})


export default Plan;