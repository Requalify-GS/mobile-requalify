import { StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
}

export default function Header({ label }: Props) {
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
    height: "22%",
    backgroundColor: "#F2A70D",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderEndEndRadius: 36,
    borderEndStartRadius: 36,
  },
});
