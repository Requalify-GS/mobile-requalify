import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { authApi } from "../api/auth";
import { useAuth } from "../context/authContext";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function AccountActionsSection() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { userId, logout: authLogout } = useAuth();

  const deleteMutation = useMutation({
    mutationFn: () => authApi.deleteUser(userId!),
    onSuccess: async () => {
      Alert.alert("Sucesso", "Conta excluída com sucesso!");
      await authLogout();
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    },
    onError: (error: any) => {
      Alert.alert(
        "Erro ao Excluir",
        error.response?.data?.error || "Erro ao excluir conta"
      );
    },
  });

  const handleLogout = () => {
    Alert.alert("Sair da Conta", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: async () => {
          await authLogout();
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        },
      },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Deletar Conta",
      "⚠️ ATENÇÃO: Esta ação é irreversível!\n\nTodos os seus dados serão permanentemente excluídos. Deseja realmente deletar sua conta?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Deletar",
          style: "destructive",
          onPress: () => {
            Alert.alert(
              "Confirmação Final",
              "Confirme novamente que deseja excluir sua conta permanentemente.",
              [
                { text: "Cancelar", style: "cancel" },
                {
                  text: "Confirmar Exclusão",
                  style: "destructive",
                  onPress: () => deleteMutation.mutate(),
                },
              ]
            );
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ações da Conta</Text>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          styles.deleteButton,
          deleteMutation.isPending && styles.buttonDisabled,
        ]}
        onPress={handleDeleteAccount}
        disabled={deleteMutation.isPending}
      >
        {deleteMutation.isPending ? (
          <ActivityIndicator color="#FFF" size="small" />
        ) : (
          <Text style={styles.buttonText}>Excluir Conta</Text>
        )}
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
  logoutButton: {
    backgroundColor: "#555",
  },
  deleteButton: {
    backgroundColor: "#DC3545",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
