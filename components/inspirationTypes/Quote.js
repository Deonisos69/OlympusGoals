import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
const quotes = require("../../assets/double-quotes.png")

export default function QuoteSource({ quote }) {
  return (
    <ScrollView>
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
    alignItems: "flex-start",
    paddingLeft: 60,
    paddingRight: 60,
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