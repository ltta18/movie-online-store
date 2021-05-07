import React, { useEffect } from "react";
import Specifications from "components/detail/Specifications";
import SuggestDetail from "components/detail/SuggestDetail";
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

const DetailPage = ({ id }) => {
  const recommend = useSelector((state) => state.fetchRecommendation?.results);
  const film = useSelector((state) => state.fetchDetail?.results);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchRecommendation(item.id));
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
      />
      <ScrollView style={styles.body}>
        <Image />
        {/* <Specifications data={film} /> */}
        {/* <SuggestDetail
          name="Similar Movies"
          // data={}
        /> */}
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
  },
  body: {
    flex: 10 / 11,
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
  countryPickStyle: {
    borderRightWidth: 2,
    borderRightColor: "#000",
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
