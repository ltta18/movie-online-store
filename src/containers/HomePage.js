import React, { useEffect } from "react";
import CategoryList from "components/home/CategoryList";
// import Icon from '../components/common/Icon'
// import Logo from '../components/common/Logo'
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
} from "../redux/actions/film";

const HomePage = (props) => {
  const handleGoTop = () => {
    this.scroll.scrollTo({
      y: 0,
      animated: true,
    });
  };
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
      <View style={styles.header}>
        <View>
          <View style={styles.logo}>{/* <Logo /> */}</View>
          <Text style={styles.subtitle}>
            Welcome
            {/* {props.userInformation.name
              ? props.userInformation.name
              : "Anonymous"} */}
            !
          </Text>
        </View>
        <View style={styles.iconBox}>
          <TouchableOpacity
          // onPress={onNavigatingToSearchScreen}
          >
            <Feather
              name="search"
              size={25}
              color="#1434C3"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={onNavigatingToCartScreen}
          >
            <Feather
              name="shopping-cart"
              size={25}
              color="#1434C3"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.body}
        ref={(c) => {
          this.scroll = c;
        }}
      >
        {Object.keys(category)?.map((item) => (
          <CategoryList
            title={category[item].title}
            item={category[item].data}

            // onPress={onNavigatingToDetailScreen}
          />
        ))}
        <TouchableOpacity
          style={styles.goTopButton}
          onPress={() => handleGoTop()}
        >
          <Text style={styles.goTopText}>Go back to top</Text>
          <Feather name="chevron-up" size={30} color="#1434C3" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 1 / 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    elevation: 2,
    zIndex: 2,
  },
  logo: {
    marginTop: 15,
    marginBottom: 5,
  },
  iconBox: {
    flexDirection: "row",
  },
  headerIcon: {
    marginTop: 15,
    marginLeft: 20,
  },
  body: {
    flex: 8 / 9,
    elevation: 2,
    zIndex: 2,
    backgroundColor: "white",
  },
  upperImage: {
    position: "absolute",
    top: -15,
    left: -15,
    zIndex: 1,
    elevation: 1,
  },
  subtitle: {
    color: "#1434C3",
    fontWeight: "200",
  },
  footer: {
    backgroundColor: "#E1F9FB",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
  footerText: {
    color: "#1C3DC5",
    fontSize: 10,
    textAlign: "center",
    marginTop: 5,
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
