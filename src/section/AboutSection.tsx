import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function AboutSection() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nos conheça</Text>
            <TouchableOpacity
                style={[styles.button, styles.aboutUsButton]}
                onPress={() => navigation.navigate("About")}
            >
                <Text style={styles.buttonText}>Sobre nós</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.aboutAppButton]}
                onPress={() => navigation.navigate("AboutApp")}
            >
                <Text style={styles.buttonText}>Sobre o App</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 40,
        paddingTop: 30,
        borderTopWidth: 1,
        borderTopColor: "#333",
    },
    title: {
        color: "#999",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: "center",
        marginBottom: 15,
    },
    aboutUsButton: {
        backgroundColor: "#555",
    },
    aboutAppButton: {
        backgroundColor: "#555",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});
