import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AddButton({ onPress }) {
  return (
    <View style={styles.AddButtonContainer}>
        <Pressable onPress={onPress}>
            <Ionicons name='add-outline' size={32} />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  AddButtonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
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