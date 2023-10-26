import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
const quotes = require("../../assets/double-quotes.png")

/**
 * Renders a Quote Inspiration. 
 * @param {String} quote - the Quote that gets displayed. 
 * @param {any} key - the key of the item in the list.
 * @returns {React.ReactElement}
 */
export default function QuoteSource({ quote }) {
  const width = Dimensions.get("window").width
  return (
    <ScrollView style={{width, flex: 1, height: "100%"}}>
      <View style={styles.quoteSourceContainer}>
        <View style={styles.imageContainer}>
          <Image source={quotes} />
        </View>
        <Text ellipsizeMode='middle' style={styles.quoteText}>{quote}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  quoteSourceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20
  },
  imageContainer: {
    flex: 1,
    
  },
  quoteText: {
    // margin: 8,
    fontSize: 30,
    fontWeight: "bold",
    color: "#BFD9FF",
    flex: 3
  },
})