import React, { useEffect } from "react";
import CategoryList from "components/home/CategoryList";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
} from "reduxHandler/actions/film";
import Logo from "components/common/Logo";
import globalStyles from "../globalStyles";

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = {
    nowPlaying: {
      title: "Now Playing",
      data: useSelector((state) => state.filmReducer.fetchNowPlaying?.results),
    },
    topRated: {
      title: "Top Rated",
      data: useSelector((state) => state.filmReducer.fetchTopRated?.results),
    },
    popular: {
      title: "Popular",
      data: useSelector((state) => state.filmReducer.fetchPopular?.results),
    },
  };

  useEffect(() => {
    dispatch(fetchNowPlaying());
    dispatch(fetchTopRated());
    dispatch(fetchPopular());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, globalStyles.m10]}>
        <View>
          <View>
            <Logo />
          </View>
          <Text style={styles.subtitle}>Welcome!</Text>
        </View>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Feather
              name="search"
              size={25}
              color="#1434C3"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Feather
              name="shopping-cart"
              size={25}
              color="#1434C3"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        style={styles.body}
        ref={(c) => {
          this.scroll = c;
        }}
        data={Object.keys(category)}
        renderItem={(item) => (
          <CategoryList
            title={category[item.item]?.title}
            item={category[item.item]?.data}
            navigation={navigation}
            key={category[item.item]?.id}
          />
        )}
        keyExtractor={(_item, index) => "category-list" + String(index)}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.goTopButton}
            onPress={() =>
              this.scroll.scrollToOffset({ animated: true, offset: 0 })
            }
            key="back"
          >
            <Text style={styles.goTopText} key="back-text">
              Go back to top
            </Text>
            <Feather
              name="chevron-up"
              size={30}
              color="#1434C3"
              key="back-icon"
            />
          </TouchableOpacity>
        }
      />
      {/* {Object.keys(category)?.map((item) => (
          <CategoryList
            title={category[item].title}
            item={category[item].data}
            navigation={navigation}
            key={category[item].id}
          />
        ))} */}
      {/* </FlatList> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#fff",
  },
  header: {
    flex: 2 / 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
    zIndex: 10,
  },
  iconBox: {
    flexDirection: "row",
  },
  headerIcon: {
    marginTop: 15,
    marginLeft: 20,
  },
  body: {
    flex: 10 / 12,
    elevation: 2,
    zIndex: 2,
  },
  subtitle: {
    color: "#1434C3",
    fontWeight: "200",
    marginTop: 10,
  },
  goTopText: {
    color: "#707070",
  },
  goTopButton: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default HomePage;
