import React, { useState } from "react";
import NoLogoHeader from "components/common/NoLogoHeader";
import SearchBar from "components/search/SearchBar";
import HistoryList from "components/search/HistoryList";
import Catalogue from "components/search/Catalogue";
import SearchResult from "components/search/SearchResult";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "../globalStyles";

const SearchPage = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const onNavigatingToDetailScreen = (data) => {
    // navigate
  };
  const handleStateSearch = (text) => {
    setSearch(text);
  };
  const handleSearch = () => {
    setIsSearching(true);
    setIsSearching(false);
    // search api
    setHistoryList((prev) => [...prev, [search]]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NoLogoHeader />
        <SearchBar
          search={search}
          handleStateSearch={(text) => handleStateSearch(text)}
          handleSearch={handleSearch}
        />
        {search ? (
          isSearching ? (
            <ActivityIndicator size="large" />
          ) : (
            <View style={[styles.body, globalStyles.m10]}>
              <SearchResult
                search={search}
                onPress={onNavigatingToDetailScreen}
              />
            </View>
          )
        ) : (
          <View style={styles.body}>
            <HistoryList historyList={historyList} />
            <Catalogue />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  body: {
    flex: 9 / 11,
  },
});

export default SearchPage;
