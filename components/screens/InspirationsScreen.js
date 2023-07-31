import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { localDB } from "../../db/db";
import AddButton from "../AddButton";
import AddInspirationModal from "../modals/AddInspirationModal";
import { useEffect, useState } from "react";

function ListItem({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItem}>
        <Text style={{ color: "#fff" }}>{title} </Text>
      </View>
    </TouchableOpacity>
  );
}


export default function MotivationSourcesScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [inspiration, setInspiration] = useState({
    title: "",
    type: "",
    value: "",
  });
  const inspirationsDB = localDB(state => state.inspirations)


  function openEditModal(item) {
    setInspiration({
      id: item.id,
      title: item.title,
      type: item.type,
      value: item.value,
    })
    setIsModalEditOpen(true)
  }

  return (
    <View style={styles.motivationSourcesScreenContainer}>
      {/* Open normal modal if Add Inspiration Button is pressed */}
      {isModalOpen ? (
        <AddInspirationModal
          onRequestClose={() => setIsModalOpen(false)}
        />
      ) : null}
      {/* Open Inspiration Edit Modal if Inspiration is pressed */}
      {isModalEditOpen ? (
        <AddInspirationModal
          onRequestClose={() => setIsModalEditOpen(false)}
          inspiration={inspiration}
        />
      ) : null}
      {/* Check if DB is empty, if yes return empty View. If not return List of Inspirations */}
      {inspirationsDB === [] ? (
        <View>
          <Text>Nothing here...</Text>
        </View>
      ) : (
        <FlatList
          data={inspirationsDB}
          keyExtractor={(item) => item.id}
          style={{ width: "100%" }}
          renderItem={({ item }) => (
            <ListItem
              title={item.value}
              onPress={() =>
              openEditModal(item)
              }
            />
          )}
        />
      )}
      <AddButton icon={"add-outline"} color={"white"} onPress={() => setIsModalOpen(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  motivationSourcesScreenContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  listItem: {
    padding: 16,
    backgroundColor: "#666",
    margin: 5,
    flex: 1,
  },
});
