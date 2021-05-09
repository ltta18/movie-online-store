import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import globalStyles from "../../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { removeAllHistory, removeHistory } from "../../redux/actions/history";

const HistoryList = () => {
  // Component displays search history list

  const dispatch = useDispatch();
  const historyList = useSelector((state) => state.historyReducer);

  const HistoryItem = ({ item, index }) => {
    // Component displays item in search history list
    // Params: (2)
    // item: Object
    // index: Number

    return (
      <View style={styles.historyItem}>
        <Text>{item}</Text>
        <TouchableOpacity onPress={() => dispatch(removeHistory(index))}>
          <Feather name="x" size={20} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.history, globalStyles.m10]}>
      {/* history list header */}
      <View style={styles.historyHeader}>
        <Text style={styles.title}>Search History</Text>
        <TouchableOpacity onPress={() => dispatch(removeAllHistory())}>
          <Text style={styles.subtitle}>Clear history</Text>
        </TouchableOpacity>
      </View>

      {/* history list content */}
      <FlatList
        data={historyList}
        renderItem={({ item, index }) => (
          <HistoryItem item={item} index={index} />
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#1434C3",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#1434C3",
    fontWeight: "200",
  },
  history: {
    flex: 3 / 7,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 5,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#FAFAFA",
    borderRadius: 3,
  },
});

export default HistoryList;
