import { Feather } from "@expo/vector-icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { roadmapApi } from "../api/roadmap";
import CreateRoadmapDialog from "../components/CreateRoadmapDialog";
import Header from "../components/Header";
import RoadmapCard from "../components/RoadmapCard";
import { useAuth } from "../context/authContext";
import { Roadmap } from "../types/roadmap.type";

export default function RoadMapScreen() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const { userId, userName } = useAuth();

  const {
    data: roadmaps = [],
    isLoading,
    refetch,
    isRefetching,
  } = useQuery<Roadmap[]>({
    queryKey: ["roadmaps", userId],
    queryFn: () => roadmapApi.getRoadmapsByUserId(userId!),
    enabled: !!userId,
  });

  const roadmapsWithUserName = roadmaps.map((roadmap) => ({
    ...roadmap,
    userName: userName || "",
  }));

  const createRoadmapMutation = useMutation({
    mutationFn: ({
      targetOccupation,
      description,
    }: {
      targetOccupation: string;
      description: string;
    }) =>
      roadmapApi.createRoadmap(userId!, {
        targetOccupation,
        description,
      }),
    onSuccess: () => {
      refetch();
    },
  });

  const handleCreateRoadmap = async (
    targetOccupation: string,
    description: string
  ) => {
    await createRoadmapMutation.mutateAsync({
      targetOccupation,
      description,
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView
        style={styles.roadmaps}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
            tintColor="#F2A70D"
            colors={["#F2A70D"]}
          />
        }
      >
        <Header label="Seus RoadMaps" />

        <View style={styles.body}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDialogVisible(true)}
          >
            <Feather name="plus" size={26} color="#fff" />
            <Text style={styles.buttonText}>Criar novo</Text>
          </TouchableOpacity>

          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#F2A70D" />
              <Text style={styles.loadingText}>Carregando roadmaps...</Text>
            </View>
          ) : roadmapsWithUserName.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Feather name="map" size={60} color="#636363" />
              <Text style={styles.emptyTitle}>Nenhum roadmap ainda</Text>
              <Text style={styles.emptySubtitle}>
                Crie seu primeiro roadmap personalizado com IA
              </Text>
            </View>
          ) : (
            roadmapsWithUserName.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))
          )}
        </View>
      </ScrollView>

      <CreateRoadmapDialog
        visible={dialogVisible}
        setVisible={setDialogVisible}
        onCreateRoadmap={handleCreateRoadmap}
        isLoading={createRoadmapMutation.isPending}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
    marginTop: 15,
    gap: 15,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#F2A70D",
    width: "85%",
    height: 47,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  roadmaps: {
    width: "100%",
    marginTop: 20,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 30,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    gap: 15,
  },
  loadingText: {
    color: "#999",
    fontSize: 16,
    fontWeight: "500",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 40,
    gap: 15,
  },
  emptyTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  emptySubtitle: {
    color: "#636363",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
});
