import React from "react";
import CategoryPrice from "./CategoryPrice";
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "globalStyles";

const CategoryItem = (props) => {
  const { item, onPress, width } = props;
  return (
    <View style={[styles.shadow, { width: width, padding: 10 }]}>
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.itemImageContainer}>
          <Image
            source={{ uri: item?.images?.[0]?.url }}
            style={globalStyles.m5}
          />
        </View>
        <Text numberOfLines={2} style={globalStyles.p5}>
          {item?.displayName}
        </Text>
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <CategoryPrice
          price={item?.price?.sellPrice}
          cls={[styles.itemPrice, globalStyles.m5]}
        />
        <Feather name="truck" color="lightgreen" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemImageContainer: {
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "lightgrey",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
    borderColor: "transparent",
    borderWidth: 1,
  },
  itemImage: {
    flex: 1,
    height: 200,
    marginTop: 15,
    resizeMode: "contain",
    width: 200,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  itemPrice: {
    fontWeight: "bold",
  },
  onlyCost: {
    textAlign: "right",
    fontSize: 11,
  },
  saleText: {
    color: "#EF2741",
    fontWeight: "bold",
    fontSize: 11,
  },
});
export default CategoryItem;
