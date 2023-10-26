import { View, Text, StyleSheet } from "react-native"

/**
 * Renders the goals screen in wich you can choose the current set of inspirations.
 * @returns {React.ReactElement}
 */
export default function GoalsScreen() {
    return (
      <View style={styles.goalsScreenContainer}>
        <Text>GOALS</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    goalsScreenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
})