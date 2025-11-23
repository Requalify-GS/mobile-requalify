import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function About() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                <Header label="Sobre o App" />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios-new" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.text}>
                    Commit de referência:
                </Text>
                <Text style={styles.SecondText}>
                    1TDSPZ - Requalify Mobile - Versão Final
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#000",
    },
    content: {
        padding: 20,
        paddingBottom: 40,
        alignItems: "center",
    },
    title: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        textAlign: "center",
    },
    backButton: {
        marginTop: 10,
        alignSelf: "flex-start",
        marginBottom: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#F2A70D",
        borderRadius: 50,
    },
    backButtonText: {
        color: "#F2A70D",
        fontSize: 16,
        fontWeight: "bold",
    },
    text: {
        marginTop: 80,
        color: "#ccc",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 22,
        paddingHorizontal: 10,
    },
    SecondText: {
        color: "#F2A70D",
        fontSize: 15,
        textAlign: "center",
        marginBottom: 30,
        lineHeight: 22,
        paddingHorizontal: 10,
    },
    teamTitle: {
        width: "100%",
        color: "#F2A70D",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        marginTop: 10,
        textAlign: "left",
    },
});
