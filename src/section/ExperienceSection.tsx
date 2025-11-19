import { StyleSheet, Text, View } from "react-native";
import { IconButton, Switch } from "react-native-paper";
import MaskedTextField from "../components/MaskTextField";
import TextField from "../components/TextField";
import { Experience } from "../types/roadmap.type";
import { DATE_MASK } from "../utils/masks";

interface Props {
  experiences: Experience[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: keyof Experience, value: any) => void;
  onToggleCurrentJob: (index: number, value: boolean) => void;
}

export default function ExperienceSection({
  experiences,
  onAdd,
  onRemove,
  onUpdate,
  onToggleCurrentJob,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Experiência Profissional</Text>
        <IconButton
          icon="plus-circle"
          iconColor="#F2A70D"
          size={28}
          onPress={onAdd}
        />
      </View>

      {experiences.map((exp, index) => (
        <View key={index} style={styles.card}>
          {experiences.length > 1 && (
            <IconButton
              icon="close-circle"
              iconColor="#ff4444"
              size={24}
              style={styles.removeButton}
              onPress={() => onRemove(index)}
            />
          )}

          <TextField
            label="Cargo *"
            placeholder="Ex: Desenvolvedor Backend Sênior"
            value={exp.position}
            onChangeText={(text) => onUpdate(index, "position", text)}
            width="100%"
          />

          <TextField
            label="Empresa *"
            placeholder="Ex: Tech Solutions LTDA"
            value={exp.company}
            onChangeText={(text) => onUpdate(index, "company", text)}
            width="100%"
          />

          <View style={styles.row}>
            <MaskedTextField
              label="Data de Início *"
              placeholder="DD/MM/AAAA"
              value={exp.startDate}
              onChangeText={(masked) => onUpdate(index, "startDate", masked)}
              mask={DATE_MASK}
              width="48%"
            />

            <MaskedTextField
              label="Data de Saída"
              placeholder="DD/MM/AAAA"
              value={exp.endDate || ""}
              onChangeText={(masked) => onUpdate(index, "endDate", masked)}
              mask={DATE_MASK}
              width="48%"
              disabled={exp.currentJob}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Trabalho atualmente aqui</Text>
            <Switch
              value={!!exp.currentJob}
              onValueChange={(value) => onToggleCurrentJob(index, value)} // ✅ UMA ÚNICA CHAMADA
              color="#F2A70D"
            />
          </View>

          <TextField
            label="Descrição das Atividades"
            placeholder="Descreva suas principais responsabilidades e conquistas..."
            value={exp.description}
            onChangeText={(text) => onUpdate(index, "description", text)}
            multiline
            numberOfLines={4}
            width="100%"
            maxLength={1000}
          />
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
