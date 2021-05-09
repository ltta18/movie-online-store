import React, { useEffect } from "react";
import Specifications from "components/detail/Specifications";
import SimilarMovies from "components/detail/SimilarMovies";
import NoLogoHeader from "components/common/NoLogoHeader";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendation } from "reduxHandler/actions/film";
import globalStyles from "../globalStyles";
import { fetchDetail } from "../redux/actions/film";
import { getImage } from "utils";
import MainInfo from "../components/detail/MainInfo";

const DetailPage = ({ navigation, route }) => {
  const { id } = route.params;
  const film = useSelector((state) => state.filmReducer.fetchDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecommendation(id));
    dispatch(fetchDetail(id));
  }, []);

  const onBuying = () => {
    alert("Added to cart");
    // addingToCart
  };

  return (
    <SafeAreaView style={styles.container}>
      <NoLogoHeader
        // onAddingToCart={onAddingToCart}
        // data={product}
        navigation={navigation}
      />

      <ScrollView style={styles.body}>
        <View style={styles.itemImageContainer}>
          <MainInfo />
        </View>
        <Specifications />
        <SimilarMovies navigation={navigation} />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={onBuying}
          style={[styles.footerItem, globalStyles.dpCt]}
        >
          <Text style={styles.buyNow}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  body: {
    flex: 13 / 14,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  iconWrapper: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: -50,
  },
  logoWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formWrapper: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  phoneInput: {
    width: 200,
    height: 35,
    borderRadius: 17,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  button: {
    width: 200,
    height: 35,
    borderRadius: 17,
    marginTop: 20,
    backgroundColor: "rgb(21, 54, 195)",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerItem: {
    width: "100%",
    height: 50,
    backgroundColor: "#627DF5",
    borderRadius: 3,
  },
  buyNow: {
    textTransform: "uppercase",
    color: "white",
  },
});

export default DetailPage;
