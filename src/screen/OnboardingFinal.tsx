import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function OnboardingFinal() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Image
                    source={require("../../assets/logo-requalify.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Aprenda com Propósito</Text>
                <Text style={styles.subtitle}>
                    Roadmaps personalizados com cursos{"\n"}
                    selecionados para cada etapa da sua jornada.{"\n"}
                    Do zero ao profissional.
                </Text>
                <Image
                    source={require("../../assets/banner-proposito.png")}
                    style={styles.illustration}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.bottomCard}>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={() => navigation.navigate("SignUp")}
                >
                    <Text style={styles.signUpText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "space-between",
    },
    topContent: {
        alignItems: "center",
        marginTop: 30,
        paddingHorizontal: 20,
    },
    logo: {
        width: 220,
        height: 220,
        marginBottom: -30,
    },
    title: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 12,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#ccc",
        textAlign: "center",
        marginBottom: 30,
        lineHeight: 20,
    },
    illustration: {
        width: 250,
        height: 220,
    },
    bottomCard: {
        width: "100%",
        backgroundColor: "#111",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 40,
        alignItems: "center",
        gap: 15,
    },
    loginButton: {
        backgroundColor: "#F2A70D",
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 25,
    },
    loginText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    signUpButton: {
        backgroundColor: "#FFF",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#F2A70D",
    },
    signUpText: {
        color: "#F2A70D",
        fontSize: 18,
        fontWeight: "bold",
    },
});
