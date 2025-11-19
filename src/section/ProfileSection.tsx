import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import TextField from "../components/TextField";

export default function ProfileSection() {
  const [isPassword, setIsPassword] = useState(true);
  const icon = isPassword ? "eye" : "eye-off";

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileTitle}>Informações Pessoais</Text>
      <View style={{ gap: 15 }}>
        <TextField label="Nome" placeholder="Insira seu nome" />
        <TextField label="Email" placeholder="Insira seu email" />
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
      </View>
      <View style={{ alignItems: "flex-end", marginVertical: 20 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  profileTitle: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#F2A70D",
    width: 120,
    height: 40,
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
