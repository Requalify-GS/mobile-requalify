import { useState } from "react";
import { DimensionValue, StyleSheet, View } from "react-native";
import MaskInput, { Mask } from "react-native-mask-input";
import { HelperText, TextInput } from "react-native-paper";

interface Props {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (masked: string, unmasked: string) => void;
  mask: Mask;
  width?: DimensionValue;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
}

export default function MaskedTextField({
  label,
  placeholder,
  value,
  onChangeText,
  mask,
  width,
  helperText,
  error = false,
  disabled = false,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.wrapper, width !== undefined && { width }]}>
      <TextInput
        label={label}
        mode="outlined"
        style={styles.input}
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
        placeholder={isFocused || value ? placeholder : ""}
        placeholderTextColor="#999"
        error={error}
        disabled={disabled}
        value={value || " "}
        render={(props) => (
          <MaskInput
            {...props}
            value={value}
            onChangeText={onChangeText}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            mask={mask}
            keyboardType="numeric"
            placeholderTextColor="#999"
            editable={!disabled}
            style={[
              props.style,
              {
                color: "#fff",
                fontSize: 16,
              },
            ]}
          />
        )}
      />
      {helperText && (
        <HelperText type={error ? "error" : "info"} style={styles.helperText}>
          {helperText}
        </HelperText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "80%",
  },
  input: {
    width: "100%",
    backgroundColor: "transparent",
  },
  inputOutline: {
    borderRadius: 20,
    borderWidth: 1,
  },
  helperText: {
    color: "#999",
  },
});
