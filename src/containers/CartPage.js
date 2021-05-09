import React from "react";
import CartItem from "../components/cart/CartItem";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import globalStyles from "../globalStyles";
import PriceItem from "../components/detail/PriceItem";

const CartPage = ({ navigation }) => {
  const { cart, totalMoney } = useSelector((state) => state.cartReducer);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, globalStyles.m10]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={30} color="#1434C3" />
        </TouchableOpacity>
        <Text style={styles.title}>Cart</Text>
      </View>
      <ScrollView style={styles.body}>
        {cart &&
          Object.keys(cart)?.map((id, i) => (
            <CartItem key={i} film={cart[id]} />
          ))}
      </ScrollView>
      <View style={[styles.couponWrapper, globalStyles.dpCt, globalStyles.m10]}>
        <TextInput editable style={styles.textInput} placeholder="Coupon" />
        <TouchableOpacity
          style={[styles.couponButton, globalStyles.dpCt]}
          onPress={() => alert("Invalid coupon")}
        >
          <Text style={styles.couponText}>APPLY</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.checkOutWrapper, globalStyles.m10]}>
        <View style={[styles.checkOutText, globalStyles.dpSb]}>
          <Text style={styles.greyText}>Subtotal</Text>
          <PriceItem price={totalMoney} cls={styles.greyText} />
        </View>
        <View style={[styles.checkOutText, globalStyles.dpSb]}>
          <Text style={styles.greyText}>Discount</Text>
          <PriceItem price={0} cls={styles.greyText} />
        </View>
        <View style={[styles.checkOutText, globalStyles.dpSb]}>
          <Text style={styles.total}>Total</Text>
          <PriceItem price={totalMoney} cls={styles.total} />
        </View>
        <TouchableOpacity style={[styles.button, globalStyles.dpCt]}>
          <Text style={styles.buttonText}>CHECK OUT</Text>
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
  header: {
    flex: 1 / 9,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    elevation: 2,
    zIndex: 2,
  },
  title: {
    color: "rgb(21, 54, 195)",
    fontWeight: "bold",
    fontSize: 24,
  },
  body: {
    flex: 3 / 9,
    elevation: 2,
    zIndex: 2,
    width: "100%",
  },
  couponWrapper: {
    flex: 1 / 9,
    elevation: 2,
    zIndex: 2,
    marginTop: 10,
  },
  couponButton: {
    width: 70,
    height: 45,
    backgroundColor: "#51D2FF",
    marginLeft: 10,
  },
  couponText: {
    color: "#1435C3",
  },
  textInput: {
    flexGrow: 1,
    height: 45,
    color: "#707070",
    fontSize: 15,
    fontWeight: "500",
    backgroundColor: "#fff",
    borderColor: "#112DA8",
    borderWidth: 1,
    padding: 10,
  },
  checkOutWrapper: {
    flex: 4 / 9,
    justifyContent: "center",
    elevation: 2,
    zIndex: 2,
  },
  checkOutText: {
    marginBottom: 10,
  },
  greyText: {
    color: "#B2BEC3",
  },
  total: {
    fontWeight: "bold",
    color: "#1435C3",
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgb(21, 54, 195)",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default CartPage;
