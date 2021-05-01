import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "globalStyles";
import CategoryItem from "./CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlaying } from "../../redux/actions/film";

const CategoryHeader = (props) => {
  const { title } = props;
  const state = useSelector((state) => console.log(state.filmReducer));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, []);

  return (
    <View style={[globalStyles.p5, globalStyles.dpRow]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeMore}>
          {title !== "Search result" ? "See more" : ""}
        </Text>
        <CategoryItem />
      </TouchableOpacity>
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
  seeMore: {
    marginTop: 30,
    fontSize: 20,
    textTransform: "uppercase",
    color: "#1434C3",
    fontWeight: "200",
  },
});

export default CategoryHeader;
