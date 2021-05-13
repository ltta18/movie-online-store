import React from "react";
import globalStyles from "../../globalStyles";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ search, handleSearch, onSearch }) => {
  // Component displays search bar
  // Params: (3)
  // search: String
  // handleSearch: function
  // onSearch: function

  const handleRemoveSearchAll = () => {
    handleSearch("");
  };

  return (
    <View style={[styles.searchBar, globalStyles.m10]}>
      <TextInput
        style={[styles.subtitle, styles.searchInput]}
        placeholder="Which movie do you want for today?"
        underlineColor="white"
        underlineColorAndroid="white"
        autoCorrect={false}
        spellCheck={false}
        onChangeText={handleSearch}
        onSubmitEditing={onSearch}
        value={search}
      />
      {search ? (
        <Feather
          name="x"
          size={20}
          color="#1434C3"
          style={styles.searchIcon}
          onPress={() => handleRemoveSearchAll()}
        />
      ) : (
        <Feather
          name="search"
          size={20}
          color="#1434C3"
          style={styles.searchIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#1434C3",
    fontWeight: "200",
  },
  searchBar: {
    flex: 1 / 14,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 10,
    elevation: 5,
    height: 40,
  },
  searchInput: {
    backgroundColor: "transparent",
    width: "90%",
  },
  searchIcon: {
    marginRight: 20,
    flexShrink: 0,
  },
});

export default SearchBar;
