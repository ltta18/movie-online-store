import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import PriceItem from "../detail/PriceItem";
import { getImage } from "../../utils";

const CartItem = ({ key, film }) => {
  return (
    <View style={styles.container} key={key}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: getImage(film?.poster_path) }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{film?.title}</Text>
        <Text style={styles.company}>
          By {Object.keys(film).length > 0 && film.production_companies[0].name}
        </Text>

        <PriceItem price={15.0} cls={styles.price} />
      </View>
      <TouchableOpacity onPress={() => onRemovingFromCart()}>
        <Feather name="x" size={24} color="black" style={styles.removeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "pink",
    marginVertical: 15,
    paddingTop: 10,
  },
  imageWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    height: null,
    width: "100%",
    resizeMode: "contain",
  },
  detail: {
    flex: 2,
  },
  title: {
    fontWeight: "bold",
    color: "#1435C3",
    marginBottom: 5,
  },
  company: {
    color: "#B2BEC3",
    marginBottom: 5,
  },
  price: {
    color: "#C31414",

    marginBottom: 10,
  },
  discountedPrice: {
    color: "#C31414",
    marginBottom: 5,
  },
  removeIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
});

export default CartItem;
