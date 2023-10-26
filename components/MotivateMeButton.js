import { View, Pressable, Text, StyleSheet } from "react-native";

/**
 * Renders the motivation button.
 * @param {Function} onPress - Function that's called, when the button is pressed.
 * @returns {React.ReactElement}
 */
export default function MotivationButton({ onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Motivate me!</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#000000",
        borderRadius: 100,
        padding: 20,
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