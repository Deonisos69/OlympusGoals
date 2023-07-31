import { StyleSheet, Text, View, Modal } from 'react-native'

export default function SettingsModal({onRequestClose}) {
  return (
    <View style={styles.SettingsModalContainer}>
      <Modal
        animationType="none"
        onRequestClose={onRequestClose}
        style={styles.SettingsModalContainer}
      >
        <Text style={{padding: 10, fontWeight: "bold", fontSize: 25}}>Settings</Text>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  SettingsModalContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
})