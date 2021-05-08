import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "reduxHandler";
import Logo from "components/common/Logo";
import DetailPage from "./src/containers/DetailPage";
import HomePage from "./src/containers/HomePage";
import SearchPage from "./src/containers/SearchPage";
import CartPage from "./src/containers/CartPage";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {/* <HomePage />
        <DetailPage /> */}
        {/* <SearchPage /> */}
        <CartPage />
      </SafeAreaView>
    </Provider>
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
