import { View, StyleSheet } from "react-native";

import MotivationButton from "../MotivateMeButton";
import { useState } from "react";
import ActiveMotivation from "../ActiveMotivation";
import { localDB } from "../../db/db";

export default function MotivationScreen() {
  const [isMotivationActive, setIsMotivationActive] = useState(false);
  const db = localDB((state) => state.inspirations);
  const numberOfInspirationsInActiveMotivation = localDB(state => state.settings.numberOfInspirationsInActiveMotivation)

  function getNumberOfRandomInspirations(number) {
    const result = [];
    let tempArray = [...db]; // Copy the array to avoid modifying the original array

    for (let i = 0; i < number; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      result.push(tempArray.splice(randomIndex, 1)[0]);
      tempArray = tempArray.filter((item, index) => index !== randomIndex)
    }
    return result;
  }

  return (
    <View style={styles.motivationScreenContainer}>
      {isMotivationActive ? (
        <ActiveMotivation
          onRequestClose={() => setIsMotivationActive(false)}
          inspirations={getNumberOfRandomInspirations(numberOfInspirationsInActiveMotivation)}
        />
      ) : (
        <MotivationButton onPress={() => setIsMotivationActive(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  motivationScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
