import React from "react";
import globalStyles from "../globalStyles";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FinishPage = ({ navigation }) => {
  // Component displays screen after pressing purchase button in cart

  return (
    <SafeAreaView style={[globalStyles.dpCt, styles.container]}>
      <Text>Successfully purchased.</Text>
      <Text style={styles.thankText}>Thank you for shopping with us!</Text>
      <TouchableOpacity
        style={[styles.button, globalStyles.dpCt]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>BACK TO HOME</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgb(21, 54, 195)",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  thankText: {
    marginBottom: 20,
  },
});

export default FinishPage;
