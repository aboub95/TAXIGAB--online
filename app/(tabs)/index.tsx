import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";

const { width, height } = Dimensions.get("window");

const MyComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/taxi.gif")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <ThemedText style={styles.text}>
          Simplifiez vos déplacements avec notre application de transport en
          ligne. Réservez un trajet en quelques clics et profitez d'un service
          rapide, fiable et sécurisé pour vous emmener où vous le souhaitez !
        </ThemedText>
        <TouchableOpacity
          style={[styles.button, isHovered && styles.buttonHover]}
          onPress={handlePress}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          <ThemedText style={styles.buttonText}>Réserver Maintenant</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    padding: "20%",
    position: "absolute",
    top: 0,
    left: 0,
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    top: height > 800 ? "30%" : "20%",
    left: "50%",
    transform: [{ translateX: -width * 0.4 }, { translateY: -50 }],
    backgroundColor: "rgba(173, 216, 230, 0.8)",
    padding: width > 600 ? 30 : 20,
    borderRadius: 15,
    width: width > 600 ? "70%" : "80%",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold",
    textAlign: "justify",
    fontSize: width > 600 ? 24 : 18,
    letterSpacing: 2,
    lineHeight: width > 600 ? 30 : 24,
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: width > 600 ? 30 : 20,
    borderRadius: 5,
  },
  buttonHover: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontSize: width > 600 ? 20 : 18,
    fontWeight: "bold",
  },
});

export default MyComponent;
