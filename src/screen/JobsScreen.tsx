import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { jobsApi, LinkedInJob } from "../api/jobs";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import TextField from "../components/TextField";

export default function JobsScreen() {
  const [jobs, setJobs] = useState<LinkedInJob[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = async (keyword: string) => {
    if (!keyword.trim()) {
      setJobs([]);
      return;
    }

    setLoading(true);

    try {
      const results = await jobsApi.searchJobs(keyword);
      setJobs(results);
    } catch (err) {
      console.error("Erro ao buscar vagas:", err);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchKeyword) {
        handleSearch(searchKeyword);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [searchKeyword]);

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "left", "right", "bottom"]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Header label="Procure Vagas" />

        <TextField
          placeholder="Pesquisar"
          value={searchKeyword}
          onChangeText={setSearchKeyword}
          left={<TextInput.Icon icon="magnify" color="#999" />}
        />

        {loading && (
          <ActivityIndicator
            size="large"
            color="#F2A70D"
            style={styles.loader}
          />
        )}

        {!loading && jobs.length === 0 && searchKeyword && (
          <Text style={styles.emptyText}>Nenhuma vaga encontrada</Text>
        )}

        {!loading &&
          jobs.map((job, index) => (
            <JobCard
              key={index}
              job={{
                ...job,
                companyLogo:
                  job.companyLogo || require("../../assets/alura.png"),
              }}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    gap: 15,
    width: "100%",
    alignItems: "center",
    paddingBottom: 20,
  },
  loader: {
    marginTop: 30,
  },
  emptyText: {
    color: "#999",
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
  },
  loader: {
    marginTop: 30,
  },
  emptyText: {
    color: "#999",
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
  },
});
