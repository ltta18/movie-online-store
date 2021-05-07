import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import globalStyles from "globalStyles";
import { getImage } from "utils";
import PriceItem from "../detail/PriceItem";

const CategoryItem = ({ item, width }) => {
  const onNavigationToDetail = (id) => {};
  return (
    <View style={[styles.shadow, { width: width, padding: 10 }]}>
      <TouchableOpacity onPress={() => onNavigationToDetail(item?.id)}>
        <View style={styles.itemImageContainer}>
          <Image
            source={{
              uri: getImage(item?.poster_path),
            }}
            style={[styles.itemImage, globalStyles.m5]}
          />
        </View>
        <Text numberOfLines={2} style={[globalStyles.txCt, globalStyles.p5]}>
          {item?.title}
        </Text>
      </TouchableOpacity>
      <View style={[globalStyles.dpCt, styles.priceContainer]}>
        <PriceItem price="15.00" cls={[styles.itemPrice, globalStyles.m5]} />
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
    width: 200,
    marginTop: 15,
    resizeMode: "contain",
  },
  priceContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  itemPrice: {
    fontWeight: "bold",
  },
});
export default CategoryItem;
