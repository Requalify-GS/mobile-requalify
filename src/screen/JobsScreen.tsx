import { ScrollView, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import TextField from "../components/TextField";

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
