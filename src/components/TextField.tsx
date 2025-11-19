import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

interface Props {
  label?: string;
  mode?: "flat" | "outlined";
  placeholder?: string;
  isPassword?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
  helperText?: string;
  options?: object;
}

export default function TextField({
  label,
  mode = "outlined",
  placeholder,
  isPassword = false,
  right,
  left,
  helperText,
  options,
}: Props) {
  return (
    <>
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
        left={left}
      />
      {helperText && <HelperText type="info">{helperText}</HelperText>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    backgroundColor: "transparent",
  },
  inputOutline: {
    borderRadius: 20,
    borderColor: "#F2A70D",
    borderWidth: 1,
  },
});
