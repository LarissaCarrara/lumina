import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface SubmitButtonProps {
  name: string;
  onPress: () => void;
}

export default function SubmitButton({ name, onPress }: SubmitButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6969",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: 500,
  },
});
