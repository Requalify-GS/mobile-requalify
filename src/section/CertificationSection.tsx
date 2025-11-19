// src/section/CertificationSection.tsx
import { StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import TextField from "../components/TextField";
import { Certification } from "../types/roadmap.type";

interface Props {
  certifications: Certification[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: keyof Certification, value: string) => void;
}

export default function CertificationSection({
  certifications,
  onAdd,
  onRemove,
  onUpdate,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Certificações</Text>
        <IconButton
          icon="plus-circle"
          iconColor="#F2A70D"
          size={28}
          onPress={onAdd}
        />
      </View>

      {certifications.map((cert, index) => (
        <View key={index} style={styles.card}>
          {certifications.length > 1 && (
            <IconButton
              icon="close-circle"
              iconColor="#ff4444"
              size={24}
              style={styles.removeButton}
              onPress={() => onRemove(index)}
            />
          )}

          <TextField
            label="Nome da Certificação *"
            placeholder="Ex: AWS Certified Solutions Architect"
            value={cert.name}
            onChangeText={(text) => onUpdate(index, "name", text)}
            width="100%"
          />

          <TextField
            label="Organização Emissora *"
            placeholder="Ex: Amazon Web Services"
            value={cert.issuingOrganization}
            onChangeText={(text) =>
              onUpdate(index, "issuingOrganization", text)
            }
            width="100%"
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
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    margin: 0,
    zIndex: 1,
  },
});
