import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Animated,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ProScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const fadeAnim = new Animated.Value(1); // Animação para o fade-in/out
  const navigation = useNavigation();

  const handlePress = () => {
    // Controle da animação ao pressionar
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    setIsEnabled(!isEnabled);

    // Mostrar o card de notificação após 3 segundos se entrando na fila
    if (!isEnabled) {
      setTimeout(() => {
        setShowNotification(true);
      }, 3000);
    } else {
      setShowNotification(false);
    }
  };

  const handleAccept = () => {
    setShowNotification(false);
    navigation.navigate("CallPage"); // Navega para a página de chamada
  };

  const handleReject = () => {
    setShowNotification(false); // Esconde a notificação
  };

  return (
    <LinearGradient
      colors={["#EDE7F6", "#FFFFFF"]}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Fila de Atendimento</Text>
        <Text style={styles.subtitle}>
          Controle seu status de entrada e saída da fila.
        </Text>

        <Animated.View style={[styles.statusBox, { opacity: fadeAnim }]}>
          <Ionicons
            name={isEnabled ? "checkmark-circle" : "close-circle"}
            size={40}
            color={isEnabled ? "#4CAF50" : "#FF6969"}
          />
          <Text style={styles.statusText}>
            {isEnabled ? "Você está na fila" : "Você está fora da fila"}
          </Text>
        </Animated.View>

        <Pressable
          style={[
            styles.toggleButton,
            isEnabled ? styles.enabledButton : styles.disabledButton,
          ]}
          onPress={handlePress}
        >
          <Text style={styles.toggleButtonText}>
            {isEnabled ? "Sair da Fila" : "Entrar na Fila"}
          </Text>
        </Pressable>
      </View>

      {/* Card de Notificação */}
      {showNotification && (
        <View style={styles.notificationCard}>
          <Ionicons
            name="call"
            size={40}
            color="#4CAF50"
            style={styles.notificationIcon}
          />
          <View style={styles.notificationTextContainer}>
            <Text style={styles.notificationTitle}>Nova Chamada</Text>
            <Text style={styles.notificationMessage}>
              Você está recebendo uma chamada. Deseja atender?
            </Text>
          </View>
          <View style={styles.notificationButtons}>
            <TouchableOpacity
              style={[styles.notificationButton, styles.acceptButton]}
              onPress={handleAccept}
            >
              <Text style={styles.notificationButtonText}>Atender</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.notificationButton, styles.rejectButton]}
              onPress={handleReject}
            >
              <Text style={styles.notificationButtonText}>Rejeitar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: "InterSemiBold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  statusBox: {
    width: "100%",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    marginBottom: 20,
  },
  statusText: {
    marginTop: 8,
    fontSize: 18,
    fontFamily: "InterSemiBold",
    color: "#333",
  },
  toggleButton: {
    width: "100%",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  enabledButton: {
    backgroundColor: "#FF6969",
  },
  disabledButton: {
    backgroundColor: "#4CAF50",
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "InterSemiBold",
  },
  notificationCard: {
    position: "absolute",
    bottom: 120, // Alterado de 20 para 120
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
  },
    
  notificationIcon: {
    marginRight: 12,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontFamily: "InterSemiBold",
    color: "#333",
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    fontFamily: "Inter",
    color: "#666",
  },
  notificationButtons: {
    flexDirection: "row",
    gap: 8,
  },
  notificationButton: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
  },
  rejectButton: {
    backgroundColor: "#FF6969",
  },
  notificationButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "InterSemiBold",
  },
});

export default ProScreen;
