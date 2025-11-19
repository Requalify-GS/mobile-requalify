import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import TextField from "../components/TextField";
import ProfileSection from "../section/ProfileSection";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        automaticallyAdjustKeyboardInsets={false}
      >
        <Header label="Seu Perfil" />
        <ProfileSection />
        <View style={styles.resumeContainer}>
          <Text style={styles.resumeTitle}>Currículo</Text>
          <View style={{ gap: 15 }}>
            <TextField
              label="Cargo Atual"
              placeholder="Insira seu cargo atual"
            />
            <TextField
              label="Resumo Profissional"
              placeholder="Fale um pouco sobre sua jornada"
              options={{
                multiline: true,
              }}
            />
            <View>
              <TextField
                label="Habilidades"
                placeholder="Insira suas habilidades"
                helperText="Separe-as por virgula. Ex: Javascript,Typescript"
              />
            </View>
            <View>
              <Text style={styles.educationTitle}>Educação</Text>
              <TextField label="Curso" />
              <TextField label="Instituição" />
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TextField label="Data de Início" />
                <TextField label="Data de Conclusão" />
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <TextField label="Nivel de formação" />
                <TextField label="Ainda estou cursando" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    gap: 15,
    width: "100%",
    alignItems: "center",
    paddingBottom: 200,
  },
  resumeContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  resumeTitle: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  educationTitle: {
    color: "#c6c6c6",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
