import React from "react";
import { FlatList, View } from "react-native";
import CategoryHeader from "./CategoryHeader";
import CategoryItem from "./CategoryItem";
import globalStyles from "globalStyles";

const CategoryList = (props) => {
  const { title, item, onPress } = props;
  return (
    <View>
      <CategoryHeader title={title} url={null} />
      <FlatList
        data={item?.slice(0, 4)}
        renderItem={(item) => (
          <CategoryItem item={item.item} onPress={onPress} width="48%" />
        )}
        keyExtractor={(_item, index) => String(index)}
        numColumns={2}
        columnWrapperStyle={globalStyles.dpSa}
      />
    </View>
  );
};

export default CategoryList;
