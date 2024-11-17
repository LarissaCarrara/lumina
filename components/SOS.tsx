import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000", {
  transports: ["websocket"],
  reconnection: true,
});

const SOS: React.FC = () => {
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [queueStatus, setQueueStatus] = useState<{
    position: number;
    queueLength: number;
  } | null>(null);

  // Função para ser chamada após 3 segundos de pressão
  const handleLongPressAction = () => {
    console.log("Botão pressionado por 3 segundos!");
    try {
      // Emitir evento 'joinQueue'
      socket.emit("joinQueue", { userId: "user123" });
      console.log("Evento 'joinQueue' enviado para o servidor");

      Alert.alert("Você entrou na fila para ser atendido!");
    } catch (error) {
      console.error("Erro ao entrar na fila:", error);
      Alert.alert("Erro", "Não foi possível entrar na fila.");
    }
  };

  // Inicia o cronômetro ao pressionar
  const handlePressIn = (event: GestureResponderEvent) => {
    const timer = setTimeout(handleLongPressAction, 3000); // 3 segundos
    setPressTimer(timer);
  };

  // Cancela o cronômetro ao soltar o botão
  const handlePressOut = (event: GestureResponderEvent) => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#e2e5ec", "#fff"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: 270,
          height: 270,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 1000,
        }}
      >
        <LinearGradient
          colors={["#F0A457", "#FF6969"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          <Pressable
            style={styles.sosBtn}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.sosText}>SOS</Text>
          </Pressable>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 320,
    width: "100%",
    marginVertical: 20,
    backgroundColor: "#F5F5FA",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  gradient: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 14,
  },
  sosBtn: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  sosText: {
    color: "#fff",
    fontFamily: "InterBold",
    fontSize: 38,
    userSelect: "none" as const,
  },
  btnContainer: {},
});

export default SOS;
