import { StyleSheet, Text, View, Modal, TextInput } from "react-native";
import AddButton from "../AddButton";
import { useState } from "react";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Picker } from "@react-native-picker/picker";

import { createInspiration } from "../../drivers/dbDriver";

import QuoteSource from "../inspirationTypes/Quote"

export default function AddSource({ onRequestClose, closeFunction }) {
  const [sourceTitle, setSourceTitle] = useState("");
  const [sourceValue, setSourceValue] = useState();
  const [open, setOpen] = useState(false);
  const [sourceType, setSourceType] = useState("quote");

  let addSourceComponent = null;
  switch (sourceType) {
    case "quote":
      addSourceComponent = (
        <View>
          <Text style={styles.text}>Quote</Text>
          <TextInput
            style={styles.input}
            value={sourceValue}
            onChangeText={setSourceValue}
          />
        </View>
      );
      break;
    case "local-video":
      addSourceComponent = <View></View>;
      break;
    case "youtube-video":
      addSourceComponent = <View></View>;
      break;
    case "picture":
      addSourceComponent = <View></View>;
      break;
    case "link":
      addSourceComponent = <View></View>;
      break;
  }

  return (
    <View style={styles.AddSourceContainer}>
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
        <View style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        {addSourceComponent}
        <Text style={styles.previewText}>Preview</Text>
        <QuoteSource quote={sourceValue}/>
        <AddButton
          color={"lightgreen"}
          onPress={() => {
            createInspiration(sourceTitle, sourceType, sourceValue);
            showMessage({
              message: sourceType + " added successfully.",
              type: "info",
            });
            closeFunction();
          }}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  AddSourceContainer: {
    alignItems: "center",
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
});
