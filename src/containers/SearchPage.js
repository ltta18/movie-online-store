import React, { useState } from "react";
import NoLogoHeader from "components/common/NoLogoHeader";
import SearchBar from "components/search/SearchBar";
import HistoryList from "components/search/HistoryList";
import SearchResult from "components/search/SearchResult";
import SuggestMovies from "components/search/SuggestMovies";
import globalStyles from "globalStyles";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { searchByTitle } from "reduxHandler/actions/search";
import { useDispatch } from "react-redux";
import { addHistory } from "../redux/actions/history";

const SearchPage = ({ navigation }) => {
  // Component displays Search Page

  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const dispatch = useDispatch();
  const handleSearch = (text) => {
    setSearch(text);
    setIsSearch(true);
  };
  const onSearch = () => {
    dispatch(searchByTitle(search));
    dispatch(addHistory(search));
    setIsSearch(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <NoLogoHeader navigation={navigation} />
      <SearchBar
        search={search}
        handleSearch={(text) => handleSearch(text)}
        onSearch={onSearch}
      />
      {search ? (
        !isSearch ? (
          <View style={[styles.body, globalStyles.m10]}>
            <SearchResult navigation={navigation} />
          </View>
        ) : (
          <ActivityIndicator size="large" style={{ marginTop: 30 }} />
        )
      ) : (
        <View style={styles.body}>
          <HistoryList />
          <SuggestMovies navigation={navigation} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  body: {
    flex: 12 / 14,
  },
});

export default SearchPage;
