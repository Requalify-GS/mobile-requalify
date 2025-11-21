import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import logoRequalify from "../../assets/logo-requalify.png";
import { authApi } from "../api/auth";
import TextField from "../components/TextField";
import { useAuth } from "../context/authContext";
import { RootStackParamList } from "../navigation/AppNavigator";
import { SignUpFormData, signUpSchema } from "../types/auth.type";

export default function SignUpScreen() {
  const [isPassword, setIsPassword] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    username?: string;
    password?: string;
  }>({});

  const icon = isPassword ? "eye" : "eye-off";
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { login: authLogin } = useAuth();

  const signUpMutation = useMutation({
    mutationFn: authApi.signUp,
    onSuccess: async (data) => {
      await authLogin(data.token, data.id, data.name);
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Tabs");
    },
    onError: (error: any) => {
      Alert.alert(
        "Erro no Cadastro",
        error.response?.data?.error || "Erro ao criar conta"
      );
    },
  });

  const handleSignUp = () => {
    setErrors({});

    const formData: SignUpFormData = { name, username, password };

    const validation = signUpSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: {
        name?: string;
        username?: string;
        password?: string;
      } = {};
      validation.error.issues.forEach((err) => {
        const field = err.path[0] as keyof typeof fieldErrors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    signUpMutation.mutate(formData);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Image
              source={logoRequalify}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>Cadastro</Text>
              <Text style={styles.subtitle}>Se você já possui uma conta.</Text>
              <Text
                style={styles.signUpText}
                onPress={() => navigation.navigate("Login")}
              >
                Entre
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                paddingHorizontal: 20,
                alignItems: "center",
                gap: 10,
              }}
            >
              <TextField
                label="Nome"
                placeholder="Informe seu nome"
                value={name}
                onChangeText={setName}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

              <TextField
                label="Email"
                placeholder="Informe seu email"
                value={username}
                onChangeText={setUsername}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}

              <TextField
                label="Senha"
                placeholder="Informe sua senha"
                value={password}
                onChangeText={setPassword}
                isPassword={isPassword}
                right={
                  <TextInput.Icon
                    icon={icon}
                    color="#999"
                    onPress={() => setIsPassword(!isPassword)}
                  />
                }
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                signUpMutation.isPending && styles.buttonDisabled,
              ]}
              onPress={handleSignUp}
              disabled={signUpMutation.isPending}
            >
              {signUpMutation.isPending ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    gap: 25,
    paddingBottom: 30,
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
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "#ff4444",
    fontSize: 12,
    paddingLeft: 5,
  },
});
