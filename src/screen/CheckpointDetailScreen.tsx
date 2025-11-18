import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabParamList } from "../navigation/TabNavigator";

type CheckpointDetailRouteProp = RouteProp<TabParamList, "CheckpointDetail">;

export default function CheckpointDetailScreen() {
  const route = useRoute<CheckpointDetailRouteProp>();
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  const { checkpoint } = route.params;

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back-ios-new" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>{checkpoint.title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{checkpoint.description}</Text>
        <View style={styles.courses}>
          <Text style={styles.coursesTitle}>Cursos</Text>
        </View>
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
  backButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  title: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopEndRadius: 59,
    borderTopStartRadius: 59,
    gap: 20,
    paddingHorizontal: 50,
    paddingTop: 30,
  },
  description: {
    color: "#000",
    fontSize: 15,
    alignItems: "center",
  },
  coursesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  courses: {
    gap: 20,
  },
});
