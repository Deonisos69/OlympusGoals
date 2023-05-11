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
  },
})