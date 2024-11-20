
import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native"; // Usando a navegação
import { StackNavigationProp } from '@react-navigation/stack'; // Importando a tipagem de navegação
import { RootStackParamList } from '../../components/types'; // Certifique-se de que o caminho do arquivo está correto

import SubmitButton from "../../components/SubmitButton"; // Componente de botão personalizado



const CallCard: React.FC = () => {
  const [isCalling, setIsCalling] = useState(true); // Simula o estado de uma chamada recebida
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Tipando o hook de navegação

  // Função para aceitar a chamada
  const handleAcceptCall = () => {
    setIsCalling(false); // Para a exibição do Card de chamada
    Alert.alert("Chamada Aceita", "Você agora está na chamada.");
    navigation.navigate("CallPage")
    
  };

  // Função para recusar a chamada
  const handleRejectCall = () => {
    setIsCalling(false); // Para a exibição do Card de chamada
    Alert.alert("Chamada Recusada", "Você recusou a chamada.");
  };

  return (
    <View style={styles.container}>
      {isCalling && (
        <LinearGradient
          colors={["#e2e5ec", "#fff"]}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Recebendo chamada...</Text>
            <View style={styles.buttonContainer}>
              <SubmitButton name="Aceitar" onPress={handleAcceptCall} />
              <SubmitButton name="Recusar" onPress={handleRejectCall} />
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    height: 20,
    width: "100%",
    marginVertical: 20,
    backgroundColor: "#F5F5FA",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  card: {
    width: 270,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 14,
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 20,
    fontFamily: "InterMedium",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default CallCard;
