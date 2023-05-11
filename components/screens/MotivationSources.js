import { View, Text, StyleSheet, FlatList } from "react-native"

import motivationSources from "../../db/motivationSources"
import AddButton from "../AddButton"

function ListItem({ title }) {
    return (
        <View style={styles.listItem}>
            <Text style={ { color: "#fff" } }>{ title } </Text>
        </View>
    )
}

export default function MotivationSourcesScreen() {
    return (
      <View style={styles.motivationSourcesScreenContainer}>
            <FlatList
            data={motivationSources}
            style={ { width: "100%" } }
            renderItem={({ item }) => <ListItem title={item} />}
            />
            <AddButton /> 
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