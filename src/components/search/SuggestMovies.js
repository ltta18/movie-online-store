import React, { useState, useEffect } from "react";
import CategoryItem from "components/home/CategoryItem";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

const SuggestMovies = () => {
  const popular = useSelector(
    (state) => state.filmReducer.fetchPopular?.results
  );
  const [suggestList, setSuggestList] = useState([]);
  const [suggestPage, setSuggestPage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    popular && getSuggestList(0);
    console.log(popular);
  }, [popular]);

  useEffect(() => {
    dispatch(fetchPopular());
  }, []);

  const getSuggestList = (start) => {
    const arr = [];
    for (let i = start; i < start + 2; i++) {
      arr.push(popular[i]);
    }
    setSuggestList(arr);
  };

  const handleNextSuggestPage = () => {
    const start = (suggestPage + 1) * 2;
    getSuggestList(start);
    setSuggestPage(suggestPage + 1);
  };

  const handlePreviousSuggestPage = () => {
    const start = (suggestPage - 1) * 2;
    getSuggestList(start);
    setSuggestPage(suggestPage - 1);
  };

  return (
    <View style={styles.suggest}>
      <Text style={styles.title}>Movie Suggestions</Text>
      <View style={styles.suggestBody}>
        <TouchableOpacity
          onPress={() => handlePreviousSuggestPage()}
          delayPressIn={1500}
        >
          <Feather
            name="chevron-left"
            size={40}
            style={suggestPage < 1 ? styles.hide : ""}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", width: "75%" }}>
          {suggestList.map((item, i) =>
            item ? (
              <CategoryItem
                key={i}
                item={item}
                showDiscounted={false}
                width="50%"
              />
            ) : null
          )}
        </View>
        <TouchableOpacity
          onPress={() => handleNextSuggestPage()}
          delayPressIn={1500}
        >
          <Feather
            name="chevron-right"
            size={40}
            style={suggestPage > 1 ? styles.hide : ""}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hide: {
    opacity: 0,
    height: 0,
  },
  title: {
    color: "#1434C3",
    fontSize: 16,
    fontWeight: "bold",
  },
  suggest: {
    flex: 4 / 7,
  },
  suggestBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SuggestMovies;
