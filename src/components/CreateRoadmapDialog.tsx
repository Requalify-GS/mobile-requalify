import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Dialog, Portal } from "react-native-paper";
import TextField from "./TextField";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onCreateRoadmap: (
    targetOccupation: string,
    description: string
  ) => Promise<void>;
  isLoading?: boolean;
}

export default function CreateRoadmapDialog({
  visible,
  setVisible,
  onCreateRoadmap,
  isLoading = false,
}: Props) {
  const [targetOccupation, setTargetOccupation] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{
    targetOccupation?: string;
    description?: string;
  }>({});

  const handleClose = () => {
    if (!isLoading) {
      setVisible(false);
      setTimeout(() => {
        setTargetOccupation("");
        setDescription("");
        setErrors({});
      }, 300);
    }
  };

  const handleCreate = async () => {
    setErrors({});

    const newErrors: { targetOccupation?: string; description?: string } = {};

    if (!targetOccupation.trim()) {
      newErrors.targetOccupation = "Profissão é obrigatória";
    } else if (targetOccupation.trim().length < 3) {
      newErrors.targetOccupation = "Profissão deve ter no mínimo 3 caracteres";
    }

    if (!description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    } else if (description.trim().length < 10) {
      newErrors.description = "Descrição deve ter no mínimo 10 caracteres";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await onCreateRoadmap(targetOccupation.trim(), description.trim());
      handleClose();
      Alert.alert(
        "Sucesso!",
        "RoadMap criado com sucesso! A IA está gerando seus checkpoints personalizados."
      );
    } catch (error: any) {
      Alert.alert(
        "Erro ao Criar RoadMap",
        error.response?.data?.error || "Não foi possível criar o roadmap"
      );
    }
  };

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={handleClose}
        style={styles.dialog}
        dismissable={!isLoading}
      >
        <Dialog.Title style={styles.dialogTitle}>
          Criar novo RoadMap
        </Dialog.Title>

        <Dialog.Content style={styles.content}>
          <TextField
            label="Profissão Desejada"
            helperText={
              errors.targetOccupation || "Ex: Desenvolvedor Full Stack"
            }
            placeholder="Informe a profissão desejada"
            value={targetOccupation}
            onChangeText={setTargetOccupation}
            error={!!errors.targetOccupation}
            width="100%"
            editable={!isLoading}
          />

          <TextField
            label="Descrição"
            helperText={
              errors.description ||
              "Descreva seus objetivos e expectativas com este roadmap"
            }
            placeholder="Ex: Quero aprender desenvolvimento web completo..."
            value={description}
            onChangeText={setDescription}
            error={!!errors.description}
            width="100%"
            multiline
            numberOfLines={4}
            editable={!isLoading}
          />

          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#F2A70D" />
              <Text style={styles.loadingText}>
                Criando seu roadmap personalizado com IA...
              </Text>
            </View>
          )}
        </Dialog.Content>

        <Dialog.Actions style={styles.actions}>
          <TouchableOpacity
            style={[
              styles.dialogCancelButton,
              isLoading && styles.buttonDisabled,
            ]}
            onPress={handleClose}
            disabled={isLoading}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.dialogConfirmButton,
              isLoading && styles.buttonDisabled,
            ]}
            onPress={handleCreate}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Criando..." : "Criar"}
            </Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: "#191919",
    maxHeight: "80%",
  },
  dialogTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  content: {
    width: "100%",
    alignItems: "center",
    gap: 15,
    paddingTop: 10,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    gap: 10,
  },
  loadingText: {
    color: "#F2A70D",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
  actions: {
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  dialogConfirmButton: {
    backgroundColor: "#F2A70D",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  dialogCancelButton: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
