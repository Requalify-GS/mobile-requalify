import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { authApi } from "../api/auth";
import TextField from "../components/TextField";
import { useAuth } from "../context/authContext";

export default function ProfileSection() {
  const { userId } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { data: user, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => authApi.getUser(userId!),
    enabled: !!userId,
  });

  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
    }
  }, [user]);

  const updateMutation = useMutation({
    mutationFn: (data: {
      name?: string;
      username?: string;
      password?: string;
    }) => authApi.updateUser(userId!, data),
    onSuccess: () => {
      Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
      setIsEditing(false);
      setPassword("");
    },
    onError: (error: any) => {
      Alert.alert(
        "Erro ao Atualizar",
        error.response?.data?.error || "Erro ao atualizar perfil"
      );
    },
  });

  const handleUpdate = () => {
    if (!name.trim() || !username.trim()) {
      Alert.alert("Atenção", "Nome e email são obrigatórios");
      return;
    }

    const updateData: { name: string; username: string; password?: string } = {
      name: name.trim(),
      username: username.trim(),
    };

    if (password.trim()) {
      updateData.password = password.trim();
    }

    updateMutation.mutate(updateData);
  };

  const handleCancelEdit = () => {
    setName(user?.name || "");
    setUsername(user?.username || "");
    setPassword("");
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Informações Pessoais</Text>
        <ActivityIndicator size="large" color="#F2A70D" />
      </View>
    );
  }

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileTitle}>Informações Pessoais</Text>

      <View style={{ gap: 15 }}>
        <TextField
          label="Nome"
          placeholder="Insira seu nome"
          value={name}
          onChangeText={setName}
          editable={isEditing}
        />

        <TextField
          label="Email"
          placeholder="Insira seu email"
          value={username}
          onChangeText={setUsername}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={isEditing}
        />

        {isEditing && (
          <TextField
            label="Nova Senha (opcional)"
            placeholder="Digite uma nova senha"
            value={password}
            onChangeText={setPassword}
            isPassword={!isPasswordVisible}
            right={
              <TextInput.Icon
                icon={isPasswordVisible ? "eye-off" : "eye"}
                color="#999"
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            }
          />
        )}
      </View>

      {isEditing ? (
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleCancelEdit}
            disabled={updateMutation.isPending}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              styles.updateButton,
              updateMutation.isPending && styles.buttonDisabled,
            ]}
            onPress={handleUpdate}
            disabled={updateMutation.isPending}
          >
            {updateMutation.isPending ? (
              <ActivityIndicator color="#000" size="small" />
            ) : (
              <Text style={[styles.buttonText, styles.updateButtonText]}>
                Salvar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsEditing(true)}
          >
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  profileTitle: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#F2A70D",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#555",
  },
  updateButton: {
    flex: 1,
    backgroundColor: "#F2A70D",
  },
  updateButtonText: {
    color: "#000",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
