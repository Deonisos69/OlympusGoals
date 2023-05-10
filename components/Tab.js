import { View, Pressable, Text, StyleSheet } from "react-native";

export default function Tab({ text, active, onPress }) {
    return (
        <View style={[styles.tab, { backgroundColor: active ? "#aaa" : "#555" }]}>
            <Pressable onPress={onPress}>
                <Text style={ active ? { color: "#fff" } : { color: "#999999"} }>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    tab: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: "25%",
    },
    tabText: {
        color: "#fff"
    }
})