import Fontisto from "@expo/vector-icons/Fontisto";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TabParamList } from "../navigation/TabNavigator";
import { Roadmap } from "../types/roadmap.type";
import { truncateEllipsis } from "../utils/string";

interface Props {
  roadmap: Roadmap;
}

export default function RoadmapCard({ roadmap }: Props) {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  const handlePress = () => {
    navigation.navigate("RoadmapDetail", { roadmap });
  };

  return (
    <TouchableOpacity style={styles.roadmapCard} onPress={handlePress}>
      <View style={styles.roadmapInfo}>
        <Text style={styles.roadmapTitle}>
          {truncateEllipsis(roadmap.targetOccupation, 25)}
        </Text>
        <Text style={styles.roadmapDescription}>
          {truncateEllipsis(roadmap.description || "", 35)}
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
