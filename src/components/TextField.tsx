import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

interface Props {
  label: string;
  mode?: "flat" | "outlined";
  placeholder?: string;
  isPassword?: boolean;
  right?: React.ReactNode;
}

export default function TextField({
  label,
  mode = "outlined",
  placeholder,
  isPassword = false,
  right,
}: Props) {
  const icon = isPassword ? "eye" : "eye-off";
  return (
    <TextInput
      label={label}
      mode={mode}
      style={styles.input}
      secureTextEntry={isPassword}
      outlineStyle={styles.inputOutline}
      theme={{
        colors: {
          onSurfaceVariant: "#F2A70D",
          primary: "#F2A70D",
          outline: "#F2A70D",
          text: "#fff",
        },
      }}
      placeholder={placeholder}
      textColor="#fff"
      placeholderTextColor="#999"
      right={right}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    marginBottom: 15,
    backgroundColor: "#000",
  },
  inputOutline: {
    borderRadius: 20,
    borderColor: "#F2A70D",
    borderWidth: 1,
  },
});
