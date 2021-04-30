import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "../../../assets/styles/globalStyles";

const CategoryHeader = (props) => {
  const { title } = props;
  return (
    <View style={[globalStyles.p5, globalStyles.dpRow]}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeMore}>
          {title !== "Search result" ? "See more" : ""}
        </Text>
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
