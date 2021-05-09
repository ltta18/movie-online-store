import React from "react";
import { Image } from "react-native";

export default function Logo() {
  // component displays logo

  return (
    <Image style={{ height: 60, width: 60 }} source={require("img/logo.png")} />
  );
}
