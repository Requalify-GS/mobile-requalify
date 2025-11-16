import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import logoRequalify from "../../assets/logo-requalify.png";

export default function App() {
  const [isPassword, setIsPassword] = useState(true);
  const icon = isPassword ? "eye" : "eye-off";
  return (
    <SafeAreaProvider>
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
            <Text style={styles.signUpText}>Cadastre-se</Text>
          </View>

          <TextInput
            label="Email"
            mode="outlined"
            style={styles.input}
            outlineStyle={styles.inputOutline}
            theme={{
              colors: {
                onSurfaceVariant: "#F2A70D",
                primary: "#F2A70D",
                outline: "#F2A70D",
                text: "#fff",
              },
            }}
            placeholder="Informe seu email"
            textColor="#fff"
            placeholderTextColor="#999"
          />

          <TextInput
            label="Senha"
            mode="outlined"
            secureTextEntry={isPassword}
            style={styles.input}
            outlineStyle={styles.inputOutline}
            theme={{
              colors: {
                onSurfaceVariant: "#F2A70D",
                primary: "#F2A70D",
                outline: "#F2A70D",
                text: "#fff",
              },
            }}
            textColor="#fff"
            placeholder="Informe sua senha"
            placeholderTextColor="#999"
            right={
              <TextInput.Icon
                icon={icon}
                color="#999"
                onPress={() => setIsPassword(!isPassword)}
              />
            }
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
  input: {
    width: "80%",
    marginBottom: 15,
    backgroundColor: "#000",
  },
  inputOutline: {
    borderRadius: 20,
    borderColor: "#F2A70D",
    borderWidth: 1,
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
