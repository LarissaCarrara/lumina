import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from "react-native"; // Importando Picker
import { Picker } from '@react-native-picker/picker';
import { Link } from "expo-router";
import Fields from "../components/Fields";
import SubmitButton from "../components/SubmitButton";
import { Register } from "@/services/userServices";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState<string>(""); 
  const handleSignup = async () => {
    // Validações simples
    if (!name || !email || !password || !confirmPassword || !userType) {  // **Alteração: verificando se o tipo de usuário está preenchido**
      alert("Por favor, preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      alert("senhas não coincidem");
      return;
    }
    try {
      const response = await Register(email, password, name, userType);  // **Alteração: passando tipo de usuário para o serviço**
      console.log("Usuário criado com sucesso:", response);
    } catch {
      // Tratamento de erro
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageHeader}
          source={require("../assets/images/headerSignUp.png")}
        />
      </View>
      {/* Formulário */}
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

        {/* Novo campo: Tipo de Usuário */}
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Tipo de Usuário</Text>
          <Picker
            selectedValue={userType}
            onValueChange={(itemValue: string) => setUserType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Usuário" value="usuario" />
            <Picker.Item label="Profissional" value="profissional" />
          </Picker>
        </View>

        <Text style={styles.terms}>
          Cadastrando, você estará de acordo com nossos{" "}
          <Text style={styles.termsLink}>Termos & Condições</Text> e{" "}
          <Text style={styles.termsLink}>Política de Privacidade</Text>
        </Text>

        <SubmitButton name="Cadastrar" onPress={handleSignup} />

        <Text style={styles.linkSignUp}>
          Já tem uma conta?{" "}
          <Link href="/signin" style={styles.link}>
            Login
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: "40%",
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
    fontFamily: "InterBold",
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
    color: "#FF6969",
  },
  linkSignUp: {
    paddingTop: 20,
    textAlign: "center",
  },
  link: {
    color: "#FF6969",
    fontWeight: "bold",
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: "InterBold",
    color: "#3C3D37",
  },
  picker: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingLeft: 10,
  },
});
