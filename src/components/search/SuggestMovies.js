import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import FilmBox from "components/common/FilmBox";
import globalStyles from "../../globalStyles";

const SuggestMovies = ({ navigation }) => {
  // Component displays suggested movies based on the popularity

  const popular = useSelector(
    (state) => state.filmReducer.fetchPopular?.results
  );
  const [suggestList, setSuggestList] = useState([]);
  const [suggestPage, setSuggestPage] = useState(0);

  // suggest list data handler
  useEffect(() => {
    popular && getSuggestList(0);
  }, [popular]);

  const getSuggestList = (start) => {
    const arr = [];
    for (let i = start; i < start + 2; i++) {
      arr.push(popular[i]);
    }
    setSuggestList(arr);
  };

  // pagination handler
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
    <View style={[styles.suggest, globalStyles.m10]}>
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
              <FilmBox
                key={i}
                item={item}
                width="50%"
                navigation={navigation}
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
    justifyContent: "flex-end",
  },
  suggestBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SuggestMovies;
