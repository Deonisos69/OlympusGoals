import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions } from "react-native";
import { getInspirationComponent } from "../functions/getInspirationComponent";
// import Carousel from "react-native-reanimated-carousel";

export default function ActiveMotivation({ inspirations, onRequestClose }) {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.ActiveMotivationContainer}>
      <ScrollView
      horizontal
      pagingEnabled
      // showsHorizontalScrollIndicator={true}
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
