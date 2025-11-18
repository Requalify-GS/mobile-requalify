import { Image, StyleSheet, Text, View } from "react-native";
import { Job } from "../types/roadmap.type";
import { truncateEllipsis } from "../utils/string";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  return (
    <View style={styles.jobCard}>
      <Image source={job.companyLogo} style={styles.jobLogo} />
      <View>
        <Text style={styles.jobPosition}>
          {truncateEllipsis(job.position, 22)}
        </Text>
        <Text style={styles.jobInfos}>{job.company}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.jobInfos}>{job.location}</Text>
          <Text style={styles.jobInfos}>{job.agoTime}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  jobCard: {
    width: "90%",
    height: 88,
    backgroundColor: "#F2A70D",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  jobLogo: {
    width: 58,
    height: 58,
    backgroundColor: "#000",
    borderRadius: 12,
  },
  jobPosition: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  jobInfos: {
    fontSize: 14,
    color: "#636363",
    fontWeight: "bold",
  },
});
