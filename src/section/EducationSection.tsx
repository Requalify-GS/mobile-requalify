import { StyleSheet, Text, View } from "react-native";
import { IconButton, Switch } from "react-native-paper";
import MaskedTextField from "../components/MaskTextField";
import TextField from "../components/TextField";
import { Education } from "../types/roadmap.type";
import { DATE_MASK } from "../utils/masks";

interface Props {
  educations: Education[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: keyof Education, value: any) => void;
  onToggleInProgress: (index: number, value: boolean) => void;
}

export default function EducationSection({
  educations,
  onAdd,
  onRemove,
  onUpdate,
  onToggleInProgress,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Educação</Text>
        <IconButton
          icon="plus-circle"
          iconColor="#F2A70D"
          size={28}
          onPress={onAdd}
        />
      </View>

      {educations.map((edu, index) => (
        <View key={index} style={styles.card}>
          {educations.length > 1 && (
            <IconButton
              icon="close-circle"
              iconColor="#ff4444"
              size={24}
              style={styles.removeButton}
              onPress={() => onRemove(index)}
            />
          )}

          <TextField
            label="Curso *"
            placeholder="Ex: Análise e Desenvolvimento de Sistemas"
            value={edu.course}
            onChangeText={(text) => onUpdate(index, "course", text)}
            width="100%"
          />

          <TextField
            label="Instituição *"
            placeholder="Ex: FIAP"
            value={edu.institution}
            onChangeText={(text) => onUpdate(index, "institution", text)}
            width="100%"
          />

          <TextField
            label="Nível de Formação *"
            placeholder="Ex: Graduação, Pós-graduação, Técnico"
            value={edu.educationLevel}
            onChangeText={(text) => onUpdate(index, "educationLevel", text)}
            width="100%"
          />

          <View style={styles.row}>
            <MaskedTextField
              label="Data de Início *"
              placeholder="DD/MM/AAAA"
              value={edu.startDate}
              onChangeText={(masked) => onUpdate(index, "startDate", masked)}
              mask={DATE_MASK}
              width="48%"
            />

            <MaskedTextField
              label="Data de Conclusão"
              placeholder="DD/MM/AAAA"
              value={edu.endDate || ""}
              onChangeText={(masked) => onUpdate(index, "endDate", masked)}
              mask={DATE_MASK}
              width="48%"
              disabled={edu.inProgress}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Ainda estou cursando</Text>
            <Switch
              value={!!edu.inProgress}
              onValueChange={(value) => onToggleInProgress(index, value)} // ✅ UMA ÚNICA CHAMADA
              color="#F2A70D"
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
  },
  title: {
    color: "#F2A70D",
    fontSize: 22,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 15,
    padding: 16,
    marginBottom: 15,
    gap: 12,
    position: "relative",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  switchLabel: {
    color: "#fff",
    fontSize: 16,
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    margin: 0,
    zIndex: 1,
  },
});
