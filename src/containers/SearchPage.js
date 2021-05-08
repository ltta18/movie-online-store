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
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "globalStyles";
import { searchByTitle } from "reduxHandler/actions/search";
import { useDispatch } from "react-redux";
import SuggestMovies from "components/search/SuggestMovies";

const SearchPage = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const dispatch = useDispatch();
  const onNavigatingToDetailScreen = (data) => {
    // navigate
  };
  const handleSearch = (text) => {
    setSearch(text);
  };
  const onSearch = () => {
    dispatch(searchByTitle(search));
    setHistoryList((prev) => [...prev, search]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <NoLogoHeader />
        <SearchBar
          search={search}
          handleSearch={(text) => handleSearch(text)}
          onSearch={onSearch}
        />
        {search ? (
          search !== "" ? (
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
            <HistoryList
              historyList={historyList}
              setHistoryList={setHistoryList}
            />
            <SuggestMovies />
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
    width: "100%",
  },
  body: {
    flex: 9 / 11,
  },
});

export default SearchPage;
