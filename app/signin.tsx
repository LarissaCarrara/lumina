import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import SubmitButton from "./components/SubmitButton";
import Fields from "./components/Fields";
import { Login } from "@/services/userServices";
import { useRouter } from "expo-router";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await Login(email, password);
      router.push("/(tabs)");
      // Salvando o token no localStorage
      localStorage.setItem("token", response.token);
    } catch (error) {
      alert("Credenciais inválidas :(");
    }
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
        <Text style={styles.title}>Login</Text>

        <Fields
          placeholder="Email"
          value={email}
          onChanged={setEmail}
          secure={false}
        />

        <Fields
          placeholder="Password"
          value={password}
          onChanged={setPassword}
          secure={true}
        />

        <Text style={styles.forgotPass}>
          <Link href={"/ForgotPassword"}>Esqueçeu a senha?</Link>
        </Text>

        <SubmitButton name="Login" onPress={handleLogin} />

        <Text style={styles.or}>OU</Text>

        <TouchableOpacity style={styles.googleBtn}>
          <Image
            style={styles.googleLogo}
            source={require("../assets/images/googleLogo.png")}
          />
          <Text style={styles.googleTxt}>Login com Google</Text>
        </TouchableOpacity>

        <Text style={styles.linkSignUp}>
          Ainda não tem uma conta?{" "}
          <Link href="/signup" style={styles.link}>
            Cadastre-se
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
  forgotPass: {
    color: "#FF6969",
    fontWeight: 600,
    paddingBottom: 20,
    textAlign: "right",
  },

  or: {
    textAlign: "center",
    padding: 24,
    color: "#ccc",
    fontWeight: 700,
  },
  googleBtn: {
    backgroundColor: "#EDF3FF",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  googleTxt: {
    color: "#515357",
    fontWeight: 500,
  },
  googleLogo: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 24,
    alignItems: "center",
  },
  linkSignUp: {
    paddingTop: 48,
    textAlign: "center",
  },
  link: {
    color: "#FF6969",
    fontWeight: "bold",
  },
});
