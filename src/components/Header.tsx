import { StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
  description?: string;
}

export default function Header({ label, description }: Props) {
  if (description) {
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.targetOccupation}>{label}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </>
    );
  }

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    height: 131,
    backgroundColor: "#F2A70D",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderEndEndRadius: 36,
    borderEndStartRadius: 36,
  },
  targetOccupation: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
  description: {
    color: "#636363",
    fontSize: 14,
    fontWeight: "bold",
    width: "80%",
    marginTop: 15,
    textAlign: "center",
  },
});
