// src/screen/RoadmapDetailScreen.tsx
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { roadmapApi } from "../api/roadmap";
import CheckpointCard from "../components/CheckpointCard";
import Header from "../components/Header";
import { useAuth } from "../context/authContext";
import { RootStackParamList } from "../navigation/AppNavigator";

type RoadmapDetailRouteProp = RouteProp<RootStackParamList, "RoadmapDetail">;

export default function RoadmapDetailScreen() {
  const route = useRoute<RoadmapDetailRouteProp>();
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const { userId } = useAuth();

  const { roadmap } = route.params;
  const { id, targetOccupation, description, checkpoints } = roadmap;

  const deleteRoadmapMutation = useMutation({
    mutationFn: () => roadmapApi.deleteRoadmap(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roadmaps", userId] });

      Alert.alert("Sucesso", "Roadmap excluído com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    },
    onError: (error: any) => {
      Alert.alert(
        "Erro ao Excluir",
        error.response?.data?.error || "Não foi possível excluir o roadmap"
      );
    },
  });

  const handleDelete = () => {
    Alert.alert(
      "Confirmar Exclusão",
      `Tem certeza que deseja excluir o roadmap "${targetOccupation}"? Esta ação não pode ser desfeita.`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => deleteRoadmapMutation.mutate(),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ gap: 15, alignItems: "center" }}
      >
        <Header label={targetOccupation} description={description} />

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back-ios-new" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.deleteButton,
              deleteRoadmapMutation.isPending && styles.buttonDisabled,
            ]}
            onPress={handleDelete}
            disabled={deleteRoadmapMutation.isPending}
          >
            <FontAwesome5 name="trash" size={24} color="#FF0000" />
          </TouchableOpacity>
        </View>

        {checkpoints.map((checkpoint) => (
          <CheckpointCard key={checkpoint.id} checkpoint={checkpoint} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    gap: 15,
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  backButton: {
    backgroundColor: "#F2A70D",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    borderColor: "#FF0000",
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
