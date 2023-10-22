import { StyleSheet, Text, View, Modal, TextInput, Dimensions } from "react-native";
import AddButton from "../AddButton";
import { useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";
import { Picker } from "@react-native-picker/picker";

import { localDB } from "../../db/db";

import QuoteSource from "../inspirationTypes/Quote"
import Inspiration from "../../model/inspiration";
import { getInspirationComponent } from "../../functions/getInspirationComponent";

export default function AddSource({ onRequestClose, reloadFunction, inspiration }) {
  const [sourceTitle, setSourceTitle] = useState("");
  const [sourceValue, setSourceValue] = useState();
  const [sourceType, setSourceType] = useState("quote");

  const inspirationsDB = localDB(state => state.inspirations)
  const createInspiration = localDB(state => state.createInspiration)
  const updateInspiration = localDB(state => state.updateInspirationById)
  const height = Dimensions.get("window").height
  
  
  useEffect(() => {
    // If a inspiration object is given, input the values of the inspiration object
    if (inspiration) {
      setSourceTitle(inspiration.title)
      setSourceType(inspiration.type)
      setSourceValue(inspiration.value)
    }
  }, [])

  function addInspiration() {
    createInspiration(new Inspiration(1, sourceTitle, sourceType, sourceValue));
    showMessage({
      message: sourceType + " added successfully.",
      type: "info",
    });
    onRequestClose();
  }

  function editInspiration() {
    updateInspiration(inspiration.id, { title: sourceTitle, type: sourceType, value: sourceValue })
    showMessage({
      message: sourceType + " updated.",
      type: "info",
    });
    onRequestClose();
  }

  /**
   * Returns a jsx component based on the inspiration type containing needed input elements for that type. 
   * @param {String} type 
   * @returns jsx component
   */
  function GetInputElementFromInspirationType({type}) {
    switch (type) {
      case "quote":
        return (
          <View>
            <Text style={styles.text}>Quote</Text>
            <TextInput style={styles.input} value={sourceValue} onChangeText={setSourceValue} />
          </View>
        )
      case "youtube-video":
        return (
          <View>
            <Text style={styles.text}>Video URL</Text>
            <TextInput style={styles.input} value={sourceValue} onChangeText={setSourceValue} />
          </View>
        )
      case "local-video":
        return (
          <View>
            <Text style={styles.text}>Video</Text>
            <TextInput style={styles.input} value={sourceValue} onChangeText={setSourceValue} />
          </View>
        )
      case "picture":
        return (
          <View>
            <Text style={styles.text}>Image</Text>
            <TextInput style={styles.input} value={sourceValue} onChangeText={setSourceValue} />
          </View>
        )
      case "link":
        return (
          <View>
            <Text style={styles.text}>URL</Text>
            <TextInput style={styles.input} value={sourceValue} onChangeText={setSourceValue} />
          </View>
        )
      default:
        return (
          <View>
            <Text style={styles.text}>ERROR: Type Unknown</Text>
          </View>
        )
    }
  }

  return (
    <View style={[styles.AddSourceContainer]}>
      <Modal
        animationType="slide"
        onRequestClose={onRequestClose}
        style={styles.AddSourceContainer}
      >
        <Text style={styles.text}>Title</Text>
        <TextInput style={styles.input} value={sourceTitle} onChangeText={setSourceTitle} />
        <Text style={styles.text}>Type</Text>
        <Picker 
          selectedValue={sourceType}
          onValueChange={(itemValue, itemIndex) => {
            setSourceType(itemValue);
          }}
          style={styles.input}
          prompt="What is the type of this motivation source?"
        >
          <Picker.Item label="Quote" value="quote" />
          <Picker.Item label="Local video" value="local-video" />
          <Picker.Item label="Youtube video" value="youtube-video" />
          <Picker.Item label="Picture" value="picture" />
          <Picker.Item label="Link" value="link" />
        </Picker>
        <GetInputElementFromInspirationType type={sourceType}/>
        <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={styles.preview}>
          <Text style={styles.previewText}>Preview</Text>
          {getInspirationComponent(new Inspiration(1, sourceTitle, sourceType, sourceValue))}
        </View>
        <AddButton
          color={"lightgreen"}
          onPress={() => {
            inspiration ? editInspiration() : addInspiration()
            }
          }
          icon={inspiration ? "checkmark-outline" : "add-outline"}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  AddSourceContainer: {
    alignItems: "center",
    flex: 1
  },
  text: {
    textAlign: "center",
  },
  previewText: {
    textAlign: "center",
    margin: 30,
    fontWeight: "bold",
  },
  dropdownContainer: {
    margin: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    borderColor: "black"
  },
  modalDropdown: {
    height: 40,
    borderWidth: 1,
  },
  preview: {
    flex: 1
  }
});
