import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import logoRequalify from "../../assets/logo-requalify.png";
import TextField from "../components/TextField";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function LoginScreen() {
  const [isPassword, setIsPassword] = useState(true);
  const icon = isPassword ? "eye" : "eye-off";
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const login = () => {
    navigation.navigate("Tabs");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={logoRequalify}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Se você ainda não possui uma conta
          </Text>
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate("SignUp")}
          >
            Cadastre-se
          </Text>
        </View>

        <TextField label="Email" placeholder="Informe seu email" />

        <TextField
          label="Senha"
          placeholder="Informe sua senha"
          isPassword={isPassword}
          right={
            <TextInput.Icon
              icon={icon}
              color="#999"
              onPress={() => setIsPassword(!isPassword)}
            />
          }
        />

        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    gap: 25,
  },
  logo: {
    width: 95,
    height: 66,
    marginBottom: 30,
    marginTop: 50,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subtitle: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
  },
  signUpText: {
    color: "#F2A70D",
    textDecorationLine: "underline",
    fontSize: 13,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#F2A70D",
    width: 132,
    height: 47,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
