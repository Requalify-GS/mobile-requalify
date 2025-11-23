import { Ionicons } from "@expo/vector-icons";
import { Image, Linking, StyleSheet, Text, View } from "react-native";

interface CardProps {
  nome: string;
  rm: string;
  imagem: any; 
  insta: string;
  linkedin: string;
  github: string;
}

export default function Card({ nome, rm, imagem, insta, linkedin, github }: CardProps) {
  return (
    <View style={styles.devBox}>
      <Image source={imagem} style={styles.image} resizeMode="contain" />
      <Text style={styles.devName}> {nome}</Text>
      <Text style={styles.class}> 2TDSPZ</Text>
      <Text style={styles.class}> {rm}</Text>
      <View style={styles.social}>
        <Ionicons
          name="logo-github"
          size={30}
          color="#F2A70D"
          onPress={() => Linking.openURL(github)}
        />
        <Ionicons
          name="logo-linkedin"
          size={30}
          color="#F2A70D"
          onPress={() => Linking.openURL(linkedin)}
        />
        <Ionicons
          name="logo-instagram"
          size={30}
          color="#F2A70D"
          onPress={() => Linking.openURL(insta)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  devBox: {
    backgroundColor: "#2a2a2a",
    padding: 16,
    borderRadius: 10,
    width: "95%",
    alignItems: "center",
    marginBottom: 10,
  },
  devName: {
    color: "#fff",
    fontSize: 16,
    paddingTop: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  social: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  class: {
    color: "white",
    padding: 5,
    marginVertical: 6,
  },
});
