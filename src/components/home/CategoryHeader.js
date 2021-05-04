import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlaying } from "../../redux/actions/film";

const CategoryHeader = (props) => {
  const { title } = props;
  const dispatch = useDispatch();

  return (
    <View style={[globalStyles.p5, globalStyles.dpRow]}>
      <Text style={styles.title}>{title}</Text>
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

export default CategoryHeader;
