import React from "react";
import PriceItem from "components/common/PriceItem";
import globalStyles from "globalStyles";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { getImage } from "utils";
import { useDispatch } from "react-redux";
import { removeFilm } from "reduxHandler/actions/cart";

const CartItem = ({ film, modalVisible, setModalVisible }) => {
  // Component displays item in cart
  // Params: (3)
  // film: Object
  // modalVisible: bool
  // setModalVisible: function

  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(removeFilm(film?.id));
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={styles.container}>
        {/* poster */}
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: getImage(film?.poster_path) }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* film's general info */}
        <View style={styles.detail}>
          <Text style={styles.title}>{film?.title}</Text>
          <Text style={styles.company}>
            By{" "}
            {Object.keys(film).length > 0 && film.production_companies[0].name}
          </Text>
          <PriceItem price={15.0} cls={styles.price} />
        </View>

        {/* remove icon */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather name="x" size={24} color="black" style={globalStyles.m10} />
        </TouchableOpacity>
      </View>

      {/* modal */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Are you sure?</Text>
              <Text style={styles.modalText}>
                You want to remove {film?.title} from the cart?
              </Text>
              <View style={[globalStyles.dpCt]}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonCancel]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonConfirm]}
                  onPress={onConfirm}
                >
                  <Text style={styles.textStyle}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },

  // poster
  imageWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    height: null,
    width: "100%",
    resizeMode: "contain",
  },

  // film's general info
  detail: {
    flex: 2,
  },
  title: {
    fontWeight: "bold",
    color: "#1435C3",
    marginBottom: 5,
  },
  company: {
    color: "#B2BEC3",
    marginBottom: 5,
  },
  price: {
    color: "#C31414",
    marginBottom: 10,
  },
  discountedPrice: {
    color: "#C31414",
    marginBottom: 5,
  },

  // modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 3,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  button: {
    borderRadius: 3,
    padding: 10,
    elevation: 2,
  },
  buttonCancel: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  buttonConfirm: {
    backgroundColor: "#f15e5e",
    marginLeft: 10,
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: "rgba(0,0,0,0.7)",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "rgba(0,0,0,0.5)",
  },
});

export default CartItem;
