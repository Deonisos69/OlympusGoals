import { Pressable, StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AddButton({ onPress, color, icon }) {
  return (
    <View style={[styles.AddButtonContainer, {backgroundColor: color}]}>
        <Pressable onPress={onPress} >
            <Ionicons name={icon} size={32} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  AddButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 25,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
})