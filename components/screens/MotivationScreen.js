import { View, StyleSheet } from "react-native";

import MotivationButton from "../MotivateMeButton";
import { useState } from "react";
import ActiveMotivation from "../ActiveMotivation";
import { localDB } from "../../db/db";
import plog from "../../utility/prettylog";

export default function MotivationScreen() {
  const [isMotivationActive, setIsMotivationActive] = useState(false);
  const db = localDB((state) => state.inspirations);
  const numberOfInspirationsInActiveMotivation = localDB(state => state.settings.numberOfInspirationsInActiveMotivation)

  /**
   * Returns an array containing number of random inspirations
   * @param {Number} number 
   * @returns an array containing random inspirations
   */
  function getNumberOfRandomInspirations(number) {
    const result = [];
    let tempInspirationsArray = [...db]; // Copy the array to avoid modifying the original array
    if (tempInspirationsArray.length < number) number = tempInspirationsArray.length

    for (let i = 0; i < number; i++) {
      const randomIndex = Math.floor(Math.random() * tempInspirationsArray.length);
      const randomInspiration = tempInspirationsArray.splice(randomIndex, 1)[0]
      result.push(randomInspiration);
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
