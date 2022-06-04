import React, { useEffect, useState, createContext} from "react";
import { AsyncStorage } from 'react-native';

const ExerciseStatCount = createContext([{}, () => {}]);

const ExerciseProvider = (props) => {
  const [state, setState] = useState({
    counts: {
      CountEx: 0, //cчётчик упражнений 
      CountWrk: 0, //счётчик тренировок
    },
    completedDates: {},
  });

  useEffect(() => {
  const load = async () => {
    try {
      let CountEx = await AsyncStorage.getItem("MyExercise");
      let CountWrk = await AsyncStorage.getItem("MyWorkout");

      setState((prevState) => ({
        ...prevState,
        counts: {
          CountEx: CountEx ? parseInt(CountEx) : 0,
          CountWrk: CountWrk ? parseInt(CountWrk) : 0,
        },
      }));
    } catch (err) {
        alert(err);
      }
  };

    load();
  }, []);

  useEffect(() => {
    const save = async () => {
      try {
        const jsonExerciseValue = state.counts.CountEx.toString()
        const jsonWorkoutValue = state.counts.CountWrk.toString()
  
        await AsyncStorage.setItem(
          "MyExercise",
          jsonExerciseValue
        );
        await AsyncStorage.setItem(
          "MyWorkout",
          jsonWorkoutValue
        );
      } catch (err) {
        alert(err);
      }
    };
  
      save();
    }, [state.counts]);

 


  return (
    <ExerciseStatCount.Provider value={[state, setState]}>
      {props.children}
    </ExerciseStatCount.Provider>
  );
};

export { ExerciseStatCount, ExerciseProvider };
