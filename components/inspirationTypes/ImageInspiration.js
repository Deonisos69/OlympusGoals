import { StyleSheet, View, Image, Dimensions } from 'react-native'

/**
 * Renders an image inspiration.
 * @param {String} inspiration 
 * @returns {React.ReactElement}
 */
export default function ImageInspiration({ inspiration }) {
  const width = Dimensions.get("window").width
  return (
    <View style={styles.ImageContainer}>
      <Image source={{uri: inspiration.value}} style={{ width: width, height: 300 }}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  ImageContainer: {

  },
})