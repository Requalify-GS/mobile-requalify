import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateRoadmapDialog from "../components/CreateRoadmapDialog";
import Header from "../components/Header";
import RoadmapCard from "../components/RoadmapCard";
import { mockRoadmaps } from "../mockup";

export default function RoadMapScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ScrollView
        style={styles.roadmaps}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Header label="Seus RoadMaps" />
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisible(true)}
          >
            <Feather name="plus" size={26} color="#fff" />
            <Text style={styles.buttonText}>Criar novo</Text>
          </TouchableOpacity>
          {mockRoadmaps.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
        </View>
      </ScrollView>
      <CreateRoadmapDialog visible={visible} setVisible={setVisible} />
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
});
