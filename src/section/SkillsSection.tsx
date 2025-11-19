import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip, IconButton } from "react-native-paper";
import TextField from "../components/TextField";

interface Props {
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (index: number) => void;
}

export default function SkillsSection({
  skills,
  onAddSkill,
  onRemoveSkill,
}: Props) {
  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = () => {
    if (skillInput.trim() && skills.length < 20) {
      onAddSkill(skillInput.trim());
      setSkillInput("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades (máx. 20)</Text>

      <View style={styles.inputContainer}>
        <TextField
          placeholder="Digite uma habilidade"
          value={skillInput}
          onChangeText={setSkillInput}
          width="75%"
          onSubmitEditing={handleAddSkill}
        />
        <IconButton
          icon="plus-circle"
          iconColor="#F2A70D"
          size={35}
          onPress={handleAddSkill}
          disabled={skills.length >= 20}
        />
      </View>

      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            onClose={() => onRemoveSkill(index)}
            style={styles.chip}
            textStyle={styles.chipText}
          >
            {skill}
          </Chip>
        ))}
      </View>
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
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: "#F2A70D",
    marginVertical: 4,
  },
  chipText: {
    color: "#000",
    fontWeight: "bold",
  },
});
