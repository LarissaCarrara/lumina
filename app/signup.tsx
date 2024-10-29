import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import Fields from "./components/Fields";
import SubmitButton from "./components/SubmitButton";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Validações simples
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Função de cadastro (pode ser alterada para lógica do backend)
    alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageHeader}
          source={require("../assets/images/headerSignUp.png")}
        />
      </View>
      {/* form */}
      <View style={styles.form}>
        <Text style={styles.title}>SignUp</Text>
        <Fields
          placeholder="Nome"
          value={name}
          onChanged={setName}
          secure={false}
        />

        <Fields
          placeholder="E-mail"
          value={email}
          onChanged={setEmail}
          secure={false}
        />

        <Fields
          placeholder="Senha"
          value={password}
          onChanged={setPassword}
          secure={true}
        />

        <Fields
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChanged={setConfirmPassword}
          secure={true}
        />

        <Text style={styles.terms}>
          Cadastrando, você estará de acordo com nossos{" "}
          <b style={styles.termsLink}>Termos & Condições</b> e <b  style={styles.termsLink}>Política de Privacidade</b>
        </Text>

        <SubmitButton name="Cadastrar" onPress={handleSignup} />

        <Text style={styles.linkSignUp}>
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
  terms: {
    paddingBottom: 20,
  },
  termsLink: {
    color: "#FF6969"
  },
  linkSignUp: {
    paddingTop: 20,
    textAlign: "center",
  },
  link: {
    color: "#FF6969",
    fontWeight: "bold",
  },
});
