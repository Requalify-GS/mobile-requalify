import { DimensionValue, StyleSheet } from "react-native";
import { HelperText, TextInput, TextInputProps } from "react-native-paper";

interface Props extends Omit<TextInputProps, "mode" | "style" | "theme"> {
  label?: string;
  mode?: "flat" | "outlined";
  placeholder?: string;
  isPassword?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
  helperText?: string;
  width?: DimensionValue;
  error?: boolean;
}

export default function TextField({
  label,
  mode = "outlined",
  placeholder,
  isPassword = false,
  right,
  left,
  helperText,
  width,
  error = false,
  ...rest
}: Props) {
  return (
    <>
      <TextInput
        label={label}
        mode={mode}
        style={[styles.input, width !== undefined && { width }]}
        contentStyle={styles.contentStyle}
        secureTextEntry={isPassword}
        outlineStyle={styles.inputOutline}
        theme={{
          colors: {
            onSurfaceVariant: "#F2A70D",
            primary: "#F2A70D",
            outline: error ? "#ff4444" : "#F2A70D",
            text: "#fff",
            error: "#ff4444",
          },
        }}
        placeholder={placeholder}
        textColor="#fff"
        placeholderTextColor="#999"
        right={right}
        left={left}
        error={error}
        {...rest}
      />
      {helperText && (
        <HelperText type={error ? "error" : "info"} style={styles.helperText}>
          {helperText}
        </HelperText>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    backgroundColor: "transparent",
  },
  contentStyle: {
    paddingLeft: 10,
  },
  inputOutline: {
    borderRadius: 20,
    borderWidth: 1,
  },
  helperText: {
    width: "80%",
    color: "#999",
  },
});
