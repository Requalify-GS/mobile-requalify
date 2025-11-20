import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { RootStackParamList } from "../navigation/AppNavigator";
import BasicInformationSection from "../section/BasicInformationSection";
import CertificationSection from "../section/CertificationSection";
import EducationSection from "../section/EducationSection";
import ExperienceSection from "../section/ExperienceSection";
import ProfileSection from "../section/ProfileSection";
import SkillsSection from "../section/SkillsSection";
import { Education, Resume } from "../types/roadmap.type";

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [resume, setResume] = useState<Resume>({
    occupation: "",
    summary: "",
    skills: [],
    educations: [
      {
        institution: "",
        course: "",
        educationLevel: "",
        startDate: "",
        endDate: "",
        inProgress: false,
      },
    ],
    experiences: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        currentJob: false,
        description: "",
      },
    ],
    certifications: [
      {
        name: "",
        issuingOrganization: "",
      },
    ],
  });

  const handleAddSkill = (skill: string) => {
    setResume({ ...resume, skills: [...resume.skills, skill] });
  };

  const handleRemoveSkill = (index: number) => {
    setResume({
      ...resume,
      skills: resume.skills.filter((_, i) => i !== index),
    });
  };

  const handleAddEducation = () => {
    setResume({
      ...resume,
      educations: [
        ...resume.educations,
        {
          institution: "",
          course: "",
          educationLevel: "",
          startDate: "",
          endDate: "",
          inProgress: false,
        },
      ],
    });
  };

  const handleRemoveEducation = (index: number) => {
    setResume({
      ...resume,
      educations: resume.educations.filter((_, i) => i !== index),
    });
  };

  const handleUpdateEducation = (
    index: number,
    field: keyof Education,
    value: any
  ) => {
    const newEducations = [...resume.educations];
    newEducations[index] = { ...newEducations[index], [field]: value };
    setResume({ ...resume, educations: newEducations });
  };

  const handleAddExperience = () => {
    setResume({
      ...resume,
      experiences: [
        ...resume.experiences,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          currentJob: false,
          description: "",
        },
      ],
    });
  };

  const handleRemoveExperience = (index: number) => {
    setResume({
      ...resume,
      experiences: resume.experiences.filter((_, i) => i !== index),
    });
  };

  const handleUpdateExperience = (index: number, field: string, value: any) => {
    const newExperiences = [...resume.experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setResume({ ...resume, experiences: newExperiences });
  };

  const handleAddCertification = () => {
    setResume({
      ...resume,
      certifications: [
        ...resume.certifications,
        {
          name: "",
          issuingOrganization: "",
        },
      ],
    });
  };

  const handleRemoveCertification = (index: number) => {
    setResume({
      ...resume,
      certifications: resume.certifications.filter((_, i) => i !== index),
    });
  };

  const handleUpdateCertification = (
    index: number,
    field: string,
    value: string
  ) => {
    const newCertifications = [...resume.certifications];
    newCertifications[index] = { ...newCertifications[index], [field]: value };
    setResume({ ...resume, certifications: newCertifications });
  };

  const handleToggleEducationInProgress = (index: number, value: boolean) => {
    setResume((prevResume) => {
      const newEducations = [...prevResume.educations];
      newEducations[index] = {
        ...newEducations[index],
        inProgress: value,
        endDate: value ? "" : newEducations[index].endDate,
      };
      return { ...prevResume, educations: newEducations };
    });
  };

  const handleToggleExperienceCurrentJob = (index: number, value: boolean) => {
    setResume((prevResume) => {
      const newExperiences = [...prevResume.experiences];
      newExperiences[index] = {
        ...newExperiences[index],
        currentJob: value,
        endDate: value ? "" : newExperiences[index].endDate,
      };
      return { ...prevResume, experiences: newExperiences };
    });
  };

  const handleLogout = () => {
    Alert.alert(
      "Sair da Conta",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          style: "destructive",
          onPress: async () => {
            try {
              // TODO: Limpar token/sessão
              // await AsyncStorage.removeItem('token');

              console.log("Fazendo logout...");
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              });
            } catch (error) {
              console.error("Erro ao fazer logout:", error);
              alert("Erro ao fazer logout");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  // ✅ FUNÇÃO DE DELETAR CONTA
  const handleDeleteAccount = () => {
    Alert.alert(
      "Deletar Conta",
      "⚠️ ATENÇÃO: Esta ação é irreversível! Todos os seus dados serão permanentemente excluídos. Deseja realmente deletar sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar",
          style: "destructive",
          onPress: () => {
            // Segunda confirmação
            Alert.alert(
              "Confirmação Final",
              "Digite 'DELETAR' para confirmar a exclusão da conta",
              [
                {
                  text: "Cancelar",
                  style: "cancel",
                },
                {
                  text: "Confirmar",
                  style: "destructive",
                  onPress: async () => {
                    try {
                      // TODO: Chamada para API de deletar conta
                      // await fetch('SUA_API_URL/user/delete', {
                      //   method: 'DELETE',
                      //   headers: { 'Authorization': `Bearer ${token}` }
                      // });

                      console.log("Deletando conta...");

                      alert("Conta deletada com sucesso");

                      navigation.reset({
                        index: 0,
                        routes: [{ name: "Login" }],
                      });
                    } catch (error) {
                      console.error("Erro ao deletar conta:", error);
                      alert("Erro ao deletar conta");
                    }
                  },
                },
              ]
            );
          },
        },
      ],
      { cancelable: true }
    );
  };

  const saveResume = async () => {
    try {
      if (!resume.occupation || resume.occupation.length < 3) {
        alert("A profissão deve ter pelo menos 3 caracteres");
        return;
      }
      if (!resume.summary || resume.summary.length < 50) {
        alert("O resumo profissional deve ter pelo menos 50 caracteres");
        return;
      }

      console.log("Salvando currículo:", resume);

      // TODO: Integração com API
      // const response = await fetch('SUA_API_URL/resume', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(resume)
      // });

      alert("Currículo salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar currículo:", error);
      alert("Erro ao salvar currículo");
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Header label="Seu Perfil" />

          <ProfileSection />

          <View style={styles.resumeContainer}>
            <Text style={styles.resumeTitle}>Currículo</Text>

            <BasicInformationSection
              occupation={resume.occupation}
              summary={resume.summary}
              onOccupationChange={(text) =>
                setResume({ ...resume, occupation: text })
              }
              onSummaryChange={(text) =>
                setResume({ ...resume, summary: text })
              }
            />

            <SkillsSection
              skills={resume.skills}
              onAddSkill={handleAddSkill}
              onRemoveSkill={handleRemoveSkill}
            />

            <EducationSection
              educations={resume.educations}
              onAdd={handleAddEducation}
              onRemove={handleRemoveEducation}
              onUpdate={handleUpdateEducation}
              onToggleInProgress={handleToggleEducationInProgress}
            />

            <ExperienceSection
              experiences={resume.experiences}
              onAdd={handleAddExperience}
              onRemove={handleRemoveExperience}
              onUpdate={handleUpdateExperience}
              onToggleCurrentJob={handleToggleExperienceCurrentJob}
            />

            <CertificationSection
              certifications={resume.certifications}
              onAdd={handleAddCertification}
              onRemove={handleRemoveCertification}
              onUpdate={handleUpdateCertification}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={saveResume}>
                <Text style={styles.saveButtonText}>Salvar Currículo</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.accountActionsContainer}>
              <Text style={styles.accountActionsTitle}>Ações da Conta</Text>

              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonText}>Sair da Conta</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDeleteAccount}
              >
                <Text style={styles.deleteButtonText}>Deletar Conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  scrollContent: {
    paddingBottom: 120,
    alignItems: "center",
  },
  resumeContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  resumeTitle: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  saveButton: {
    backgroundColor: "#F2A70D",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#F2A70D",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  saveButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  accountActionsContainer: {
    marginTop: 40,
    marginBottom: 30,
    paddingTop: 30,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  accountActionsTitle: {
    color: "#999",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#F2A70D",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
  },
  logoutButtonText: {
    color: "#F2A70D",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#ff4444",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#ff4444",
    fontSize: 16,
    fontWeight: "bold",
  },
});
