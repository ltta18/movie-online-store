import React from "react";
import CartItem from "../components/cart/CartItem";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const CartPage = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather
            name="chevron-left"
            size={30}
            color="#239FE6"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Cart</Text>
      </View>
      <ScrollView style={styles.body}>
        {cart &&
          cart?.addedMovies?.map((movie, i) => (
            <CartItem key={i} data={movie} />
          ))}
      </ScrollView>
      <View style={styles.couponWrapper}>
        <TextInput editable style={styles.textInput} placeholder="Coupon" />
        <TouchableOpacity
          style={styles.couponButton}
          onPress={() => alert("Invalid coupon")}
        >
          <Text style={styles.couponText}>APPLY</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkOutWrapper}>
        <View style={styles.checkOutText}>
          <Text style={styles.greyText}>Subtotal</Text>
          <Text style={styles.greyText}>{cart.sellPriceTotal}</Text>
        </View>
        <View style={styles.checkOutText}>
          <Text style={styles.greyText}>Discount</Text>
          <Text style={styles.greyText}>
            {cart.sellPriceTotal - cart.supplierSaleTotal}
          </Text>
        </View>
        <View style={styles.checkOutText}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>{cart.supplierSaleTotal}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1 / 9,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
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
    backgroundColor: "#fff",
  },
  couponWrapper: {
    flex: 1 / 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    zIndex: 2,
    marginTop: 10,
  },
  couponButton: {
    width: 70,
    height: 45,
    backgroundColor: "#51D2FF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  couponText: {
    color: "#1435C3",
  },
  textInput: {
    width: "60%",
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
    alignItems: "center",
    elevation: 2,
    zIndex: 2,
  },
  checkOutText: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
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
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default CartPage;
