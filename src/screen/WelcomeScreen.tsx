import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image
          source={require("../../assets/logo-requalify.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Requalify</Text>
        <Text style={styles.subtitle}>Construindo seu próximo passo</Text>

        <Image
          source={require("../../assets/banner-home.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* CARD INFERIOR AJUSTADO */}
      <View style={styles.bottomCard}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("OnboardingScreen")}
        >
          <Text style={styles.startButtonText}>Começar</Text>
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
    marginTop: 40,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: -40,
  },
  title: {
    fontSize: 42,
    color: "#fff",
    fontWeight: "bold",
    marginTop: -20,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 15,
    color: "#ccc",
    marginBottom: 10,
  },
  illustration: {
    width: 300,
    height: 300,
    marginTop: -20,
  },
  bottomCard: {
    width: "100%",
    backgroundColor: "#111",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 80,
    minHeight: 170,
    alignItems: "center",
    justifyContent: "center", 
  },
  startButton: {
    backgroundColor: "#F2A70D",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
