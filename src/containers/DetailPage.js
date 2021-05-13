import React, { useEffect } from "react";
import Specifications from "components/detail/Specifications";
import SimilarMovies from "components/detail/SimilarMovies";
import NoLogoHeader from "components/common/NoLogoHeader";
import MainInfo from "components/detail/MainInfo";
import globalStyles from "globalStyles";
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendation } from "reduxHandler/actions/film";
import { fetchDetail } from "reduxHandler/actions/film";
import { addFilm } from "reduxHandler/actions/cart";

const DetailPage = ({ navigation, route }) => {
  // Component displays Detail Page

  const { id } = route.params;
  const film = useSelector((state) => state.filmReducer.fetchDetail);
  const cart = useSelector((state) => state.cartReducer.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecommendation(id));
    dispatch(fetchDetail(id));
  }, []);

  const onBuying = () => {
    if (id in cart) {
      alert("Already in the cart");
    } else {
      alert("Added to cart");
      dispatch(addFilm({ [id]: film }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <NoLogoHeader navigation={navigation} />

      {/* body */}
      <ScrollView style={styles.body}>
        <View style={styles.itemImageContainer}>
          <MainInfo />
        </View>
        <Specifications />
        <SimilarMovies navigation={navigation} />
      </ScrollView>

      {/* footer */}
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
  // body
  body: {
    flex: 13 / 14,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  // footer
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
