import Feather from "@expo/vector-icons/Feather";
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

const roadmaps = [
  {
    id: "1",
    title: "Frontend Developer",
    description:
      "Domine o desenvolvimento de interfaces modernas e responsivas. Aprenda a criar experiências de usuário incríveis utilizando as tecnologias mais atuais do mercado, desde HTML e CSS até frameworks avançados como React e Next.js.",
  },
  {
    id: "2",
    title: "Backend Developer",
    description:
      "Torne-se um especialista em desenvolvimento de APIs e arquitetura de servidores. Aprenda a construir sistemas escaláveis e seguros, trabalhando com bancos de dados, autenticação e integração de serviços.",
  },
  {
    id: "3",
    title: "DevOps Engineer",
    description:
      "Automatize processos de deploy e gerencie infraestrutura em nuvem. Domine ferramentas de CI/CD, containerização com Docker e orquestração com Kubernetes para criar pipelines eficientes e confiáveis.",
  },
  {
    id: "4",
    title: "Mobile Developer",
    description:
      "Desenvolva aplicativos nativos e multiplataforma para iOS e Android. Aprenda React Native, Flutter e as melhores práticas de desenvolvimento mobile, incluindo performance, UX e publicação nas stores.",
  },
  {
    id: "5",
    title: "Data Scientist",
    description:
      "Entre no mundo da ciência de dados e análise avançada. Aprenda a extrair insights valiosos de grandes volumes de dados usando Python, machine learning e técnicas de visualização para tomada de decisões baseada em dados.",
  },
];

export default function RoadMapScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
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
          {roadmaps.map((roadmap) => (
            <RoadmapCard
              key={roadmap.id}
              roadmapId={roadmap.id}
              roadmapTitle={roadmap.title}
              roadmapDescription={roadmap.description}
            />
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
