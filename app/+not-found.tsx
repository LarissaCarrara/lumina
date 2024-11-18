import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lumina</Text>
      <Link href="/(tabs)" style={styles.link}>
        Clique aqui para ir para Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#313A51",
  },
  titulo: {
    fontFamily: "InterMedium",
    color: "#fff",
    fontSize: 56,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    color: "#fff",
  },
});
