import { View, Text, StyleSheet, FlatList } from "react-native";

import { localDB } from "../../db/db";
import AddButton from "../AddButton";
import AddInspirationModal from "../modals/AddInspirationModal";
import { useState } from "react";

function ListItem({ title }) {
  return (
    <View style={styles.listItem} >
      <Text style={{ color: "#fff" }}>{title} </Text>
    </View>
  );
}

export default function MotivationSourcesScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.motivationSourcesScreenContainer}>
      {isModalOpen ? (
          <AddInspirationModal
          onRequestClose={() => setIsModalOpen(false)}
          closeFunction={() => setIsModalOpen(false)}
          />
          ) : null}
          {/* Check if DB is empty */}
      {localDB === [] ? (
        <View>
          <Text>Nothing here...</Text>
        </View>
      ) : (
        <FlatList
          data={localDB}
          keyExtractor={item => item.id}
          style={{ width: "100%" }}
          renderItem={({ item }) => <ListItem title={item.value} />}
        />
      )}
      <AddButton color={"white"} onPress={() => setIsModalOpen(true)} />
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
