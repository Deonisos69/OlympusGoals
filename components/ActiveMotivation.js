import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { getInspirationComponent } from "../functions/getInspirationComponent";
import Inspiration from "../model/inspiration";

/**
 * Renders the motivation session.
 * @param {Array<Inspiration>} inspirations - Array of Inspirations to be included in the motivation session.
 * @param {Function} onRequestClose - Function that's called to close the motivation.
 * @returns {React.ReactElement}
 */
export default function ActiveMotivation({ inspirations, onRequestClose }) {

  return (
    <View style={styles.ActiveMotivationContainer}>
      <ScrollView
      horizontal
      pagingEnabled
      contentContainerStyle={styles.otherContainer}
      centerContent={true}

      >
        {inspirations.map((inspiration) =>
        getInspirationComponent(inspiration)
      )}
      </ScrollView>
     <View style={{backgroundColor: "grey", borderRadius: 15, padding: 12, margin: 8, position: "absolute", bottom: 5, right: 5, paddingHorizontal: 40}}>
        <Pressable onPress={onRequestClose}>
          <Text>Done</Text>
        </Pressable>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ActiveMotivationContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  otherContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
});
