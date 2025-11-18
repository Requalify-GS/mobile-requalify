import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Checkpoint } from "../types/roadmap.type";
import { truncateEllipsis } from "../utils/string";

interface Props {
  checkpoint: Checkpoint;
}

export default function CheckpointCard({ checkpoint }: Props) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const seeDetails = () => {
    navigation.navigate("CheckpointDetail", { checkpoint });
  };

  return (
    <View>
      <TouchableOpacity style={styles.checkpointCard} onPress={seeDetails}>
        <Ionicons name="flag-sharp" size={24} color="black" />
        <View style={styles.checkpointInfo}>
          <Text style={styles.checkpointTitle}>
            {truncateEllipsis(checkpoint.title, 25)}
          </Text>
          <Text style={styles.checkpointDescription}>
            {truncateEllipsis(checkpoint.description, 72)}
          </Text>
        </View>
        <Fontisto name="share-a" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  checkpointCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    width: "95%",
    height: 111,
    padding: 15,
  },
  checkpointInfo: {
    gap: 10,
  },
  checkpointTitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  checkpointDescription: {
    color: "#7c7c7c",
    fontSize: 13,
    fontWeight: "bold",
    width: 273,
  },
});
