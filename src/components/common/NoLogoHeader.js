import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import globalStyles from "globalStyles";

export default function NoLogoHeader({ navigation }) {
  return (
    <View style={[globalStyles.dpSb, globalStyles.m10, styles.header]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={30} color="#1434C3" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <Feather name="shopping-cart" size={30} color="#1434C3" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1 / 14,
  },
});
