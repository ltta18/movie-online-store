import React from "react";
import FilmBox from "components/common/FilmBox";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";

const SimilarMovies = ({ navigation }) => {
  // Component displays similar movies to the current film

  const data = useSelector(
    (state) => state.filmReducer.fetchRecommendation?.results
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar Movies</Text>
      <View style={styles.similarItemWrapper}>
        {data && data.length > 0 && (
          <FlatList
            data={data}
            renderItem={(item) => (
              <FilmBox item={item.item} width={200} navigation={navigation} />
            )}
            keyExtractor={(_item, index) => String(index)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  similarItemWrapper: {
    flex: 1,
    marginBottom: 50,
  },
  similarItemName: {
    flex: 1,
    flexShrink: 1,
    fontSize: 11,
  },
  similarItemPrice: {
    fontSize: 11,
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
});

export default SimilarMovies;
