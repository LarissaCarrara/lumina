import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, GestureResponderEvent, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SOS: React.FC = () => {
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

  // Função para ser chamada após 3 segundos de pressão
  const handleLongPressAction = () => {
    console.log("Botão pressionado por 3 segundos!");
    Alert.alert("Alerta SOS", "Botão pressionado por 3 segundos!");
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
        colors={['#FFAD59', '#FF7E7B']}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    width: "100%",
    backgroundColor: "#F5F5FA",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'InterBold',
    fontSize: 38,
    userSelect: 'none' as const, // Impede a seleção do texto
  },
});

export default SOS;
