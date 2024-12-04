import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Usando a navegação
import { StackNavigationProp } from "@react-navigation/stack"; // Importando a tipagem de navegação
import { RootStackParamList } from "../../components/types"; // Certifique-se de que o caminho do arquivo está correto
import { Ionicons } from "@expo/vector-icons"; // Para ícones modernos

const CallPage: React.FC = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Tipando o hook de navegação

  // Função para alternar o estado da câmera
  const toggleCamera = () => {
    setIsCameraOn((prevState) => !prevState);
  };

  // Função para alternar o estado do microfone
  const toggleMic = () => {
    setIsMicOn((prevState) => !prevState);
  };

  // Função para desligar a chamada
  const endCall = () => {
    Alert.alert("Chamada finalizada", "Você encerrou a chamada.");
    navigation.navigate("ProScreen");
  };

  return (
    <View style={styles.container}>
      {/* Foto da pessoa */}
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2kidYmirplUecVIpvnKrNfOsKmXaG89DNUA&s", // Substitua pelo URI da foto real
        }}
        style={styles.avatar}
      />

      {/* Nome e status */}
      <Text style={styles.name}>Leandro Cardoso</Text>
      <Text style={styles.status}>Chamada em andamento...</Text>

      {/* Botões de controle */}
      <View style={styles.controls}>
        {/* Botão de câmera */}
        <Pressable
          style={[
            styles.controlButton,
            isCameraOn ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={toggleCamera}
        >
          <Ionicons
            name={isCameraOn ? "camera" : "camera-off"}
            size={30}
            color="#fff"
          />
        </Pressable>

        {/* Botão de microfone */}
        <Pressable
          style={[
            styles.controlButton,
            isMicOn ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={toggleMic}
        >
          <Ionicons
            name={isMicOn ? "mic" : "mic-off"}
            size={30}
            color="#fff"
          />
        </Pressable>

        {/* Botão para desligar a chamada */}
        <Pressable style={styles.endCallButton} onPress={endCall}>
          <Ionicons name="call" size={30} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    paddingHorizontal: 20,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#4CAF50",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  status: {
    fontSize: 18,
    color: "#666",
    marginBottom: 30,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  controlButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: "#4CAF50",
  },
  inactiveButton: {
    backgroundColor: "#757575",
  },
  endCallButton: {
    backgroundColor: "#FF5722",
    padding: 20,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});

export default CallPage;
