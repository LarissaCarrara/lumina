import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Link } from "expo-router";
import Fields from "./components/Fields";
import SubmitButton from "./components/SubmitButton";
import axios from 'axios'; 

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    console.log("forgotpassword")
    // try {
    //   const response = await axios.post('http://localhost:8000/forgot-password', {
    //     email,
    //   });
    //   Alert.alert("Sucesso", "Instruções para redefinir a senha foram enviadas para o seu e-mail.");
    // } catch (error) {
    //   Alert.alert("Erro", "Não foi possível enviar as instruções.");
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageHeader}
          source={require("../assets/images/header.png")}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Esqueceu a Senha</Text>

        <Fields
          placeholder="Email"
          value={email}
          onChanged={setEmail}
          secure={false}
        />

        <SubmitButton name="Enviar" onPress={handleForgotPassword} />

        <Text style={styles.linkSignIn}>
          Já tem uma conta?{" "}
          <Link href="/" style={styles.link}>
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageHeader: {
    height: 250,
    width: 250,
    aspectRatio: 1 / 1,
    objectFit: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "left",
    color: "#3C3D37",
  },
  form: {
    flex: 2,
    paddingLeft: 20,
    paddingRight: 20,
  },
  linkSignIn: {
    paddingTop: 20,
    textAlign: "center",
  },
  link: {
    color: "#FF6969",
    fontWeight: "bold",
  },
});
