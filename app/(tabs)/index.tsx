import React, { useCallback, useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import HomeHeader from "@/components/HomeHeader";
import { StatusBar } from "expo-status-bar";
import SOS from "@/components/SOS";

function Home({ navigation }) {
  const [showCallCard, setShowCallCard] = useState(false);

  useFocusEffect(
    useCallback(() => {
      console.log("Página Home carregada");
      return () => {
        console.log("Página Home saiu de foco");
      };
    }, [])
  );

  // Simula o recebimento de uma chamada (substitua isso por sua lógica real)
  const simulateIncomingCall = () => {
    setShowCallCard(true);
    setTimeout(() => {
      setShowCallCard(false);
    }, 10000); // O card desaparece automaticamente após 10 segundos
  };

  const handleAcceptCall = () => {
    setShowCallCard(false);
    navigation.navigate("CallPage"); // Navega para a página de chamada
  };

  const handleRejectCall = () => {
    setShowCallCard(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <HomeHeader />
      <View style={{ paddingHorizontal: 18 }}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 18,
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "60%" }}>
            <Text style={{ fontFamily: "InterSemiBold", fontSize: 24 }}>
              Você precisa{"\n"}de ajuda?
            </Text>
            <Text
              style={{
                fontFamily: "Inter",
                fontSize: 16,
                textAlign: "justify",
              }}
            >
              Pressione o botão SOS por 3 segundos, e o primeiro especialista
              do CVV ativo falar com você em tempo real por voz
            </Text>
          </View>
          <Image source={require("@/assets/images/sos-image.png")} />
        </View>

        <SOS onActivateSOS={simulateIncomingCall} />
      </View>

      {/* Card de chamada */}
      {showCallCard && (
        <View style={styles.callCard}>
          <Text style={styles.callCardTitle}>Nova Chamada</Text>
          <Text style={styles.callCardText}>Você está recebendo uma chamada</Text>
          <View style={styles.callCardActions}>
            <Pressable
              style={[styles.callCardButton, styles.acceptButton]}
              onPress={handleAcceptCall}
            >
              <Text style={styles.callCardButtonText}>Atender</Text>
            </Pressable>
            <Pressable
              style={[styles.callCardButton, styles.rejectButton]}
              onPress={handleRejectCall}
            >
              <Text style={styles.callCardButtonText}>Rejeitar</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    position: "relative",
    height: "100%",
  },
  callCard: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
    alignItems: "center",
  },
  callCardTitle: {
    fontSize: 18,
    fontFamily: "InterSemiBold",
    color: "#333",
    marginBottom: 8,
  },
  callCardText: {
    fontSize: 14,
    fontFamily: "Inter",
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  callCardActions: {
    flexDirection: "row",
    gap: 10,
  },
  callCardButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
  },
  rejectButton: {
    backgroundColor: "#FF6969",
  },
  callCardButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "InterSemiBold",
  },
});

export default Home;
