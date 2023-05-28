import { View, Text, StyleSheet, FlatList } from "react-native"

import motivationSources from "../../db/motivationSources"
import AddButton from "../AddButton"
import AddSource from "./AddSource"
import { useState } from "react"

function ListItem({ title }) {
    return (
        <View style={styles.listItem}>
            <Text style={ { color: "#fff" } }>{ title } </Text>
        </View>
    )
}

export default function MotivationSourcesScreen() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
      <View style={styles.motivationSourcesScreenContainer}>
        { isModalOpen ? (<AddSource onRequestClose={() => setIsModalOpen(false)} closeFunction={() => setIsModalOpen(false)} />) : (null) }
            <FlatList
            data={motivationSources}
            style={ { width: "100%" } }
            renderItem={({ item }) => <ListItem title={item} />}
            />
            <AddButton onPress={() => setIsModalOpen(true)}/> 
      </View>
    )
  }

const styles = StyleSheet.create({
    motivationSourcesScreenContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    listItem: {
        padding: 16,
        backgroundColor: "#666",
        margin: 5,
        flex: 1
    }
})