import { Image, StyleSheet, Text, View } from "react-native";
import aluraLogo from "../../assets/alura.png";
import { Course } from "../types/roadmap.type";
import { truncateEllipsis } from "../utils/string";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <View style={styles.checkpointCard}>
      <Image source={aluraLogo} style={styles.platformLogo} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseName}>
          {truncateEllipsis(course.name, 29)}
        </Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkpointCard: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 20,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 15,
  },
  platformLogo: {
    width: 48,
    height: 48,
    borderRadius: 12,
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  courseDescription: {
    fontSize: 12,
    color: "#7d7d7d",
    fontWeight: "bold",
  },
});
