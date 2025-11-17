import Fontisto from "@expo/vector-icons/Fontisto";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { truncateEllipsis } from "../utils/string";

interface Props {
  roadmapTitle: string;
  roadmapDescription: string;
  roadmapId: string;
}

export default function RoadmapCard({
  roadmapTitle,
  roadmapDescription,
  roadmapId,
}: Props) {
  return (
    <TouchableOpacity style={styles.roadmapCard}>
      <View style={styles.roadmapInfo}>
        <Text style={styles.roadmapTitle}>{roadmapTitle}</Text>
        <Text style={styles.roadmapDescription}>
          {truncateEllipsis(roadmapDescription, 35)}
        </Text>
      </View>
      <Fontisto name="share-a" size={22} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  roadmapCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#191919",
    width: "95%",
    height: 91,
    padding: 15,
  },
  roadmapInfo: {
    gap: 5,
  },
  roadmapTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  roadmapDescription: {
    color: "#636363",
    fontSize: 14,
    fontWeight: "bold",
  },
});
