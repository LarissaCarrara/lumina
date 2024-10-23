import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface FieldsProps {
  placeholder: string;
  value: string;
  onChanged: (text: string) => void;
  secure: boolean;
}

export default function Fields({
  placeholder,
  value,
  onChanged,
  secure,
}: FieldsProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChanged}
      secureTextEntry={secure ? true : false}
      placeholderTextColor="#80808C"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});
