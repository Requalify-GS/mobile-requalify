import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function OnboardingScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image
          source={require("../../assets/logo-requalify.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Transforme Sua Carreira</Text>
        <Text style={styles.subtitle}>
          Crie seu currículo profissional e descubra{"\n"}
          o caminho para a profissão dos seus sonhos.{'\n'}
          Tudo em um só lugar.
        </Text>
        <Image
          source={require("../../assets/banner-carreira.png")}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomCard}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("OnboardingFinal")}
        >
          <Text style={styles.nextButtonText}>Próximo</Text>
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
    marginTop: 60,
    paddingHorizontal: 20,
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: -40,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 35,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: -15,
    lineHeight: 20,
  },
  illustration: {
    width: 260,
    height: 220,
  },
  bottomCard: {
    width: "100%",
    backgroundColor: "#111",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 70,
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#F2A70D",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
