import { View, Pressable, Text, StyleSheet } from "react-native";

export default function MotivationButton() {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} >
                <Text style={styles.buttonText}>Motivate me!</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000000",
        borderRadius: 100,
        height: "160px",
        width: "160px",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff"
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    }
})