import { View, Text, StyleSheet } from "react-native"

export default function MotivationSourcesScreen() {
    return (
      <View style={styles.motivationSourcesScreenContainer}>
        <Text>Motivation sources</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    motivationSourcesScreenContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
})