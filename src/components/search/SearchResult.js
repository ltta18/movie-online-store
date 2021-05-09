import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CategoryItem from "components/home/CategoryItem";
import { useSelector } from "react-redux";

const SearchResult = ({ navigation }) => {
  const searchResult = useSelector(
    (state) => state.searchReducer.searchByTitle
  );

  return (
    <View>
      <Text style={styles.title}>Search Results</Text>
      <View style={styles.categoryContainer}>
        {Object.keys(searchResult).length > 0 ? (
          <FlatList
            data={Object.keys(searchResult).map((item) => searchResult[item])}
            renderItem={(item) => (
              <CategoryItem
                item={item.item}
                width="48%"
                navigation={navigation}
              />
            )}
            keyExtractor={(_item, index) => String(index)}
            numColumns={2}
            columnWrapperStyle={styles.categoryItemContainer}
          />
        ) : (
          <View>
            <Image source={require("img/no-result.png")} style={styles.image} />
            <Text style={styles.greyText}>Sorry, no results were found.</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalResultContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  totalSearchText: {
    color: "#FB1212",
  },
  categoryContainer: {
    marginBottom: 10,
  },
  suggestText: {
    color: "#FC4141",
    fontStyle: "italic",
  },
  title: {
    color: "#1434C3",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 30,
    width: "65%",
    textTransform: "uppercase",
  },
  greyText: {
    color: "grey",
    textAlign: "center",
  },
  image: {
    width: 250,
    height: 250,
    opacity: 0.2,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default SearchResult;
