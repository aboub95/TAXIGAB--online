import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const Moncompte = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/taxi.gif")}
        style={{ alignSelf: "center" }}
      />
      <ThemedText></ThemedText>
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
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default Moncompte;
