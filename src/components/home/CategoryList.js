import React from "react";
import { FlatList, View } from "react-native";
import CategoryHeader from "./CategoryHeader";
import CategoryItem from "./CategoryItem";
import globalStyles from "globalStyles";

const CategoryList = ({ title, item, navigation }) => {
  return (
    <View>
      <CategoryHeader title={title} url={null} />
      <FlatList
        data={item?.slice(0, 4)}
        renderItem={(item) => (
          <CategoryItem item={item.item} width="48%" navigation={navigation} />
        )}
        keyExtractor={(_item, index) => "category-item" + String(index)}
        numColumns={2}
        columnWrapperStyle={globalStyles.dpSa}
      />
    </View>
  );
};

export default CategoryList;
