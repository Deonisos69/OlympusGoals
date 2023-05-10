import { View, Pressable, Text, StyleSheet } from "react-native";

import Tab from "./Tab";

export default function Navbar() {
    return (
        <View style={styles.navbarContainer}>
            <Tab text={"Motivation"} active={true}></Tab>
            <Tab text={"Goals"} active={false}></Tab>
        </View>
    );
}

const styles = StyleSheet.create({
    navbarContainer: {
        width: "100%",
        height: "40px",
        backgroundColor: "#222222",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    tab: {
        height: "100%",
        justifyContent: "center",
        padding: "16px"
    },
    tabText: {
        color: "#fff"
    }
})