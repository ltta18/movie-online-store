import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "reduxHandler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailPage from "./src/containers/DetailPage";
import HomePage from "./src/containers/HomePage";
import SearchPage from "./src/containers/SearchPage";
import CartPage from "./src/containers/CartPage";
import FinishPage from "./src/containers/FinishPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Finish"
            component={FinishPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
