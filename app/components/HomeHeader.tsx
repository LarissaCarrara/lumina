import { View, Image, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
        <Image source={require("@/assets/images/icons/logo.png")} />
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Image
              source={require("@/assets/images/icons/local.png")}
              style={styles.local}
            />
            <Text style={{fontSize: 10, fontFamily: 'InterMedium', color: '#313A51'}}>Current location</Text>
          </View>
          <Text style={{fontSize: 12, fontFamily: 'InterMedium', color: '#313A51'}}>4th Mound road, California</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
        <FontAwesome name="camera" size={24} color="#313A51" />
        <Ionicons name="notifications" size={24} color="#313A51" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F5FA",
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  local: {
    width: 8,
    height: 8,
  },
});

export default HomeHeader;
