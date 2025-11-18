import { ScrollView, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import aluraLogo from "../../assets/alura.png";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import TextField from "../components/TextField";

const job = {
  position: "Desenvolvedor React Native",
  company: "Requalify",
  companyLogo: aluraLogo,
  location: "São Paulo, SP",
  agoTime: "há 2 dias",
  jobUrl: "https://www.linkedin.com/mynetwork/grow/",
};

export default function JobsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Header label="Procure Vagas" />
        <TextField
          placeholder="Pesquisar"
          left={<TextInput.Icon icon="magnify" color="#999" />}
        />
        <JobCard job={job} />
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
    flex: 1,
    alignItems: "center",
  },
});
