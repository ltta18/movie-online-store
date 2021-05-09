import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FilmBox from "../common/FilmBox";
import globalStyles from "globalStyles";

const CategoryHeader = ({ title }) => {
  // Component displays category's title

  return (
    <View style={globalStyles.m10}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const CategoryList = ({ title, item, navigation }) => {
  // Component displays list of films for a category

  return (
    <View>
      <CategoryHeader title={title} url={null} />
      <FlatList
        data={item?.slice(0, 4)}
        renderItem={(item) => (
          <FilmBox item={item.item} width="48%" navigation={navigation} />
        )}
        keyExtractor={(_item, index) => "category-item" + String(index)}
        numColumns={2}
        columnWrapperStyle={globalStyles.dpSa}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#1434C3",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 30,
    width: "65%",
    textTransform: "uppercase",
  },
});

export default CategoryList;
