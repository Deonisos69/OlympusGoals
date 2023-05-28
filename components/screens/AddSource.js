import { StyleSheet, Text, View, Modal, TextInput } from 'react-native'
import AddButton from '../AddButton'
import { useState } from 'react'
import motivationSources from '../../db/motivationSources'
import { showMessage, hideMessage } from "react-native-flash-message";

export default function AddSource({ onRequestClose, closeFunction }) {
    const [ text, setText ] = useState("")
  return (
    <View style={styles.AddSourceContainer}>
      <Modal animationType="slide" onRequestClose={onRequestClose}>
        <TextInput style={styles.input} value={text} onChangeText={setText}/>
        <AddButton onPress={() =>  { motivationSources.push(text); showMessage({ message: text + " added successfully.", type: "info" }); closeFunction() } }/>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  AddSourceContainer: {
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})