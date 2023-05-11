import { View, Text, StyleSheet } from "react-native"

import MotivationButton from "../MotivationButton"

export default function MotivationScreen() {
    return (
      <View style={styles.motivationScreenContainer}>
        <MotivationButton />
      </View>
    )
  }

const styles = StyleSheet.create({
    motivationScreenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
})