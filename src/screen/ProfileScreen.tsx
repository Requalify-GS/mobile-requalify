import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
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
import { resumeApi, ResumeDTO } from "../api/resume";
import Header from "../components/Header";
import { useAuth } from "../context/authContext";
import { RootStackParamList } from "../navigation/AppNavigator";
import AccountActionsSection from "../section/AccountActionsSection";
import BasicInformationSection from "../section/BasicInformationSection";
import CertificationSection from "../section/CertificationSection";
import EducationSection from "../section/EducationSection";
import ExperienceSection from "../section/ExperienceSection";
import ProfileSection from "../section/ProfileSection";
import SkillsSection from "../section/SkillsSection";
import { Education, Experience, Resume } from "../types/roadmap.type";
import { convertDateFromISO, convertDateToISO } from "../utils/date";

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { userId } = useAuth();

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

  // Buscar currículo existente
  const {
    data: existingResume,
    isLoading: isLoadingResume,
    refetch,
  } = useQuery({
    queryKey: ["resume", userId],
    queryFn: () => resumeApi.getResumeByUserId(userId!),
    enabled: !!userId,
    retry: false,
  });

  // Preencher formulário com dados existentes
  useEffect(() => {
    if (existingResume) {
      setResume({
        occupation: existingResume.occupation || "",
        summary: existingResume.summary || "",
        skills: existingResume.skills || [],
        educations: existingResume.educations.map((edu) => ({
          ...edu,
          startDate: convertDateFromISO(edu.startDate),
          endDate: edu.endDate ? convertDateFromISO(edu.endDate) : "",
        })),
        experiences: existingResume.experiences.map((exp) => ({
          ...exp,
          startDate: convertDateFromISO(exp.startDate),
          endDate: exp.endDate ? convertDateFromISO(exp.endDate) : "",
        })),
        certifications: existingResume.certifications || [],
      });
    }
  }, [existingResume]);

  // Mutation para criar currículo
  const createMutation = useMutation({
    mutationFn: (data: ResumeDTO) => resumeApi.createResume(userId!, data),
    onSuccess: () => {
      Alert.alert("Sucesso", "Currículo cadastrado com sucesso!");
      refetch();
    },
    onError: (error: any) => {
      Alert.alert(
        "Erro ao Cadastrar",
        error.response?.data?.error || "Erro ao cadastrar currículo"
      );
    },
  });

  // Mutation para atualizar currículo
  const updateMutation = useMutation({
    mutationFn: (data: ResumeDTO) =>
      resumeApi.updateResume(existingResume!.id, data),
    onSuccess: () => {
      Alert.alert("Sucesso", "Currículo atualizado com sucesso!");
      refetch();
    },
    onError: (error: any) => {
      Alert.alert(
        "Erro ao Atualizar",
        error.response?.data?.error || "Erro ao atualizar currículo"
      );
    },
  });

  // Handlers para Skills
  const handleAddSkill = (skill: string) => {
    if (resume.skills.length >= 20) {
      Alert.alert(
        "Limite atingido",
        "Você pode adicionar no máximo 20 habilidades"
      );
      return;
    }
    setResume({ ...resume, skills: [...resume.skills, skill] });
  };

  const handleRemoveSkill = (index: number) => {
    setResume({
      ...resume,
      skills: resume.skills.filter((_, i) => i !== index),
    });
  };

  // Handlers para Education
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

  // Handlers para Experience
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

  const handleUpdateExperience = (
    index: number,
    field: keyof Experience,
    value: any
  ) => {
    const newExperiences = [...resume.experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setResume({ ...resume, experiences: newExperiences });
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

  // Handlers para Certification
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

  // Validações
  const validateResume = (): boolean => {
    if (!resume.occupation || resume.occupation.trim().length < 3) {
      Alert.alert("Atenção", "A profissão deve ter pelo menos 3 caracteres");
      return false;
    }

    if (!resume.summary || resume.summary.trim().length < 50) {
      Alert.alert(
        "Atenção",
        "O resumo profissional deve ter pelo menos 50 caracteres"
      );
      return false;
    }

    // Validar educações
    for (const edu of resume.educations) {
      if (
        !edu.course.trim() ||
        !edu.institution.trim() ||
        !edu.educationLevel.trim() ||
        !edu.startDate.trim()
      ) {
        Alert.alert(
          "Atenção",
          "Preencha todos os campos obrigatórios da educação"
        );
        return false;
      }
    }

    // Validar experiências
    for (const exp of resume.experiences) {
      if (
        !exp.company.trim() ||
        !exp.position.trim() ||
        !exp.startDate.trim()
      ) {
        Alert.alert(
          "Atenção",
          "Preencha todos os campos obrigatórios da experiência"
        );
        return false;
      }
    }

    // Validar certificações
    for (const cert of resume.certifications) {
      if (!cert.name.trim() || !cert.issuingOrganization.trim()) {
        Alert.alert("Atenção", "Preencha todos os campos das certificações");
        return false;
      }
    }

    return true;
  };

  // Salvar currículo
  const handleSaveResume = async () => {
    if (!validateResume()) return;

    const resumeData: ResumeDTO = {
      occupation: resume.occupation.trim(),
      summary: resume.summary.trim(),
      skills: resume.skills,
      educations: resume.educations.map((edu) => ({
        institution: edu.institution.trim(),
        course: edu.course.trim(),
        educationLevel: edu.educationLevel.trim(),
        startDate: convertDateToISO(edu.startDate),
        endDate: edu.endDate ? convertDateToISO(edu.endDate) : undefined,
        inProgress: edu.inProgress,
      })),
      experiences: resume.experiences.map((exp) => ({
        company: exp.company.trim(),
        position: exp.position.trim(),
        startDate: convertDateToISO(exp.startDate),
        endDate: exp.endDate ? convertDateToISO(exp.endDate) : undefined,
        currentJob: exp.currentJob,
        description: exp.description.trim(),
      })),
      certifications: resume.certifications.map((cert) => ({
        name: cert.name.trim(),
        issuingOrganization: cert.issuingOrganization.trim(),
      })),
    };

    if (existingResume) {
      updateMutation.mutate(resumeData);
    } else {
      createMutation.mutate(resumeData);
    }
  };

  const isLoading = createMutation.isPending || updateMutation.isPending;

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

          {isLoadingResume ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#F2A70D" />
              <Text style={styles.loadingText}>Carregando currículo...</Text>
            </View>
          ) : (
            <>
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
                  <TouchableOpacity
                    style={[
                      styles.saveButton,
                      isLoading && styles.buttonDisabled,
                    ]}
                    onPress={handleSaveResume}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <ActivityIndicator size="small" color="#000" />
                    ) : (
                      <Text style={styles.saveButtonText}>
                        {existingResume
                          ? "Atualizar Currículo"
                          : "Cadastrar Currículo"}
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <AccountActionsSection />
            </>
          )}
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
    width: "100%",
  },
  scrollContent: {
    paddingBottom: 30,
    alignItems: "center",
    gap: 25,
  },
  loadingContainer: {
    padding: 40,
    alignItems: "center",
    gap: 15,
  },
  loadingText: {
    color: "#fff",
    fontSize: 16,
  },
  resumeContainer: {
    width: "90%",
    backgroundColor: "#1a1a1a",
    borderRadius: 20,
    padding: 20,
    gap: 20,
  },
  resumeTitle: {
    color: "#F2A70D",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
  saveButton: {
    backgroundColor: "#F2A70D",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 56,
  },
  saveButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});
