import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Dialog, Portal } from "react-native-paper";
import TextField from "../components/TextField";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export default function CreateRoadmapDialog({ visible, setVisible }: Props) {
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={() => setVisible(false)}
        style={styles.dialog}
      >
        <Dialog.Title style={styles.dialogTitle}>
          Criar novo RoadMap
        </Dialog.Title>
        <Dialog.Content style={{ width: "100%", alignItems: "center" }}>
          <TextField
            label="Profissão Desejada"
            helperText="Ex: Desenvolvedor de Software"
            placeholder="Informe a profissão desejada"
          />
        </Dialog.Content>
        <Dialog.Actions
          style={{ justifyContent: "space-around", width: "100%" }}
        >
          <TouchableOpacity
            style={styles.dialogCancelButton}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dialogConfirmButton}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialog: { backgroundColor: "#191919", alignItems: "center" },
  dialogTitle: { fontSize: 24, fontWeight: "bold" },
  dialogConfirmButton: {
    backgroundColor: "#F2A70D",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  dialogCancelButton: {
    backgroundColor: "transparent",
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
