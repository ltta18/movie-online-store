import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryHeader from "components/home/CategoryHeader";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CategoryHeader title="hi" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
