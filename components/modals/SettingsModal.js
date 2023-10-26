import { StyleSheet, Text, View, Modal, Pressable, Alert } from 'react-native'
import { localDB } from '../../db/db'
import { showMessage } from "react-native-flash-message";
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';

/**
 * Renders a Modal displaying the settings for the app.
 * @param {Function} onRequestClose - Callbackfunction that closes the modal.
 * @returns {React.ReactElement}
 */
export default function SettingsModal({onRequestClose}) {
  const dropDatabase = localDB(state => state.dropDatabase)
  const setSettings = localDB(state => state.setSettings)
  const initialNumberOfInspirationsInActiveMotivation = localDB(state => state.settings.numberOfInspirationsInActiveMotivation)

  const [numberOfInspirationsInActiveMotivation, setNumberOfInspirationsInActiveMotivation] = useState(initialNumberOfInspirationsInActiveMotivation.toString())

  // Refresh Inspirations Picker
  const [refreshInspirationsInterval, setRefreshInspirationsInterval] = useState()


  useEffect(() => {
    if (numberOfInspirationsInActiveMotivation !== NaN && numberOfInspirationsInActiveMotivation !== "") {
      let textToNumber = parseInt(numberOfInspirationsInActiveMotivation.trim())
      setSettings({ numberOfInspirationsInActiveMotivation: textToNumber })
    }
  },[numberOfInspirationsInActiveMotivation])

  /**
   * When called, opens a popup wich asks to confirm the deletion of inspirations.
   */
  const areYouSureAlert = () => {
    Alert.alert(
      "Delete all Inspirations",
      "Are you sure? This will delete all your saved Inspirations PERMANENTLY.",
      [
        {text: "Cancel"},
        {text: "Confirm", onPress: () => {
          dropDatabase()
          showMessage({
            message: "All Inspirations have been deleted.",
            type: "danger",
          });
          onRequestClose()
        }},
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

        <View>
          <Text>Number of Inspirations in motivation session</Text>
          <TextInput value={numberOfInspirationsInActiveMotivation} onChangeText={setNumberOfInspirationsInActiveMotivation} ></TextInput>
        </View>
        <View>
          <Text>Refresh available Inspirations every</Text>
          <Picker>
          <Picker.Item label="day" value="day" />
          <Picker.Item label="week" value="week" />
          <Picker.Item label="2 weeks" value="2weeks" />
          <Picker.Item label="month" value="month" />
          </Picker>
        </View>
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