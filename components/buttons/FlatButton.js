import { Pressable, StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function FlatButton({ onPress, icon }) {
  return (
    <View>
        <Pressable style={styles.AddButtonContainer} onPress={onPress} >
            <Ionicons name={icon}  />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  AddButtonContainer: {
    backgroundColor: "#000000",
    flex: 0,
    height: 5,
    width: 1
  },
})