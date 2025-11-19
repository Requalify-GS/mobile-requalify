import { StyleSheet, Text, View } from "react-native";
import TextField from "../components/TextField";

interface Props {
  occupation: string;
  summary: string;
  onOccupationChange: (text: string) => void;
  onSummaryChange: (text: string) => void;
}

export default function ResumeBasicInfoSection({
  occupation,
  summary,
  onOccupationChange,
  onSummaryChange,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações Básicas</Text>

      <View style={styles.section}>
        <TextField
          label="Cargo Atual *"
          placeholder="Ex: Desenvolvedor Full Stack"
          value={occupation}
          onChangeText={onOccupationChange}
          width="100%"
          maxLength={150}
        />
      </View>

      <View style={styles.section}>
        <TextField
          label="Resumo Profissional *"
          placeholder="Descreva sua trajetória profissional e principais conquistas..."
          value={summary}
          onChangeText={onSummaryChange}
          multiline
          numberOfLines={6}
          width="100%"
          maxLength={1000}
          helperText={`${summary.length}/1000 caracteres (mínimo 50)`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    color: "#F2A70D",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  section: {
    marginBottom: 15,
  },
});
