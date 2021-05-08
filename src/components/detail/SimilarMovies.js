import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CategoryItem from "components/home/CategoryItem";
import { useSelector } from "react-redux";

const SuggestDetail = () => {
  const data = useSelector(
    (state) => state.filmReducer.fetchRecommendation?.results
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar Movies</Text>
      <View style={styles.similarItemWrapper}>
        {data.length > 0 && (
          <FlatList
            data={data}
            renderItem={(item) => (
              <CategoryItem item={item?.item} width={200} />
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
    // width: "65%",
    marginTop: 20,
  },
});

export default SuggestDetail;
