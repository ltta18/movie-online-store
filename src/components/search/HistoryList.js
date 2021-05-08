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

const HistoryItem = ({ item, index, removeHistory }) => {
  return (
    <View style={styles.historyItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => removeHistory(index)}>
        <Feather name="x" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const HistoryList = ({ historyList, setHistoryList }) => {
  const removeAllHistory = () => {
    historyList.length = 0;
  };

  const removeHistory = (index) => {
    const history = [...historyList];
    history.splice(index, 1);
    setHistoryList(history);
  };

  return (
    <View style={[styles.history, globalStyles.m10]}>
      <View style={styles.historyHeader}>
        <Text style={styles.title}>Search History</Text>
        <TouchableOpacity onPress={() => removeAllHistory()}>
          <Text style={styles.subtitle}>Clear history</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={historyList}
        renderItem={({ item, index }) => (
          <HistoryItem
            item={item}
            index={index}
            removeHistory={removeHistory}
          />
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
    flex: 2 / 7,
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
