import React, { useState } from "react";
import NoLogoHeader from "components/common/NoLogoHeader";
import SearchBar from "components/search/SearchBar";
import HistoryList from "components/search/HistoryList";
import SearchResult from "components/search/SearchResult";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import globalStyles from "globalStyles";
import { searchByTitle } from "reduxHandler/actions/search";
import { useDispatch, useSelector } from "react-redux";
import SuggestMovies from "components/search/SuggestMovies";

const SearchPage = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const dispatch = useDispatch();
  const handleSearch = (text) => {
    setSearch(text);
    setIsSearch(true);
  };
  const onSearch = () => {
    dispatch(searchByTitle(search));
    setIsSearch(false);
    setHistoryList((prev) => [...prev, search]);
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
          <HistoryList
            historyList={historyList}
            setHistoryList={setHistoryList}
          />
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
