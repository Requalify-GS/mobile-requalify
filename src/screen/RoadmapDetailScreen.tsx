import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { TabParamList } from "../navigation/TabNavigator";

type RoadmapDetailRouteProp = RouteProp<TabParamList, "RoadmapDetail">;

export default function RoadmapDetailScreen() {
  const route = useRoute<RoadmapDetailRouteProp>();
  const navigation = useNavigation();

  const { roadmap } = route.params;
  const { targetOccupation, description, checkpoints } = roadmap;

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Header label={targetOccupation} description={description} />
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios-new" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <FontAwesome5 name="trash" size={24} color="#FF0000" />
        </TouchableOpacity>
      </View>
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
});
