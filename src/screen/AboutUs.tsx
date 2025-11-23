import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const imagens = {
    jv: require("../../assets/jv-perfil.png"),
    gui: require("../../assets/gui-perfil.png"),
    rafa: require("../../assets/rafa-perfil.png"),
};

export default function About() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <Header label="Sobre Nós" />

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios-new" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.text}>
                    O Requalify foi criado por um grupo de estudantes apaixonados por tecnologia e inovação.
                    Aqui estão os membros da nossa equipe:
                </Text>

                <Card
                    nome="João Vitor da Silva"
                    rm="RM554694"
                    imagem={imagens["jv"]}
                    github={"https://github.com/joaosilvaz"}
                    insta={"https://www.instagram.com/joaovitoor._/"}
                    linkedin={"https://www.linkedin.com/in/jo%C3%A3o-vitor-da-silva-5677202b1/"}
                />

                <Card
                    nome="Guilherme Alves Pedroso"
                    rm="RM557888"
                    imagem={imagens["gui"]}
                    github={"https://github.com/guialvesped"}
                    insta={"https://www.instagram.com/g__alves_/"}
                    linkedin={"https://www.linkedin.com/in/guialvesped/"}
                />

                <Card
                    nome="Rafael Souza Bezerra"
                    rm="RM555357"
                    imagem={imagens["rafa"]}
                    github={"https://github.com/Rafazls"}
                    insta={"https://www.instagram.com/raffsz.__/"}
                    linkedin={"https://www.linkedin.com/in/rafa-bezerra/"}
                />

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
        marginTop: 20,
        color: "#ccc",
        fontSize: 15,
        textAlign: "center",
        marginBottom: 30,
        lineHeight: 22,
        paddingHorizontal: 10,
    },
});
