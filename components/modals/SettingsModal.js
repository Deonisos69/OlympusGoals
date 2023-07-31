import { StyleSheet, Text, View, Modal, Pressable, Alert } from 'react-native'
import FlatButton from '../buttons/flatButton'
import { localDB } from '../../db/db'
import { showMessage } from "react-native-flash-message";


export default function SettingsModal({onRequestClose}) {
  const dropDatabase = localDB(state => state.dropDatabase)

  const areYouSureAlert = () => {
    Alert.alert(
      "Delete all Inspirations",
      "Are you sure? This will delete all your saved Inspirations PERMANENTLY.",
      [
        {text: "Confirm", onPress: () => {
          dropDatabase()
          showMessage({
            message: "All Inspirations have been deleted.",
            type: "danger",
          });
          onRequestClose()
        }},
        {text: "Cancel"}
      ]
    )
  }
  return (
    <View style={styles.SettingsModalContainer}>
      <Modal
        animationType="none"
        onRequestClose={onRequestClose}
        style={styles.SettingsModalContainer}
      >
        <Text style={{padding: 10, fontWeight: "bold", fontSize: 25}}>Settings</Text>
        <Pressable 
        style={styles.dropDatabaseButton}
        onPress={
          () => areYouSureAlert()
        }>
          <Text>Delete all Inspirations</Text>
        </Pressable>

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
  dropDatabaseButton: {
    padding: 15,
    backgroundColor: "red",
  }
})