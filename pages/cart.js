import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../theme/colors";
import fonts from "../theme/fonts";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);
  let cartItems = useSelector(state => {
    console.log("Updating");
    console.log("Current Cart items: ", state.cartReducer);
    let tempCartItems = state.cartReducer;
    let tempSubtotal = 0;
    for (let i = 0; i < tempCartItems.length; i++) {
      tempSubtotal += tempCartItems[i].price * tempCartItems[i].quantity;
    }
    if (tempSubtotal != subtotal) setSubtotal(tempSubtotal);
    return tempCartItems;
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: -0.5, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          padding: 15,
          backgroundColor: colors.primary,
          flexDirection: "row"
        }}
        colors={[colors.primary, colors.lighterPrimary]}
      >
        <Icon name="map-marker-alt" size={fonts.size.font16} />
        <Text
          style={{
            fontSize: fonts.size.font16
          }}
        >
          {"  "}
          Delivery to Cairo - Omar
        </Text>
      </LinearGradient>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Text
          style={{
            fontSize: fonts.size.font20
          }}
        >
          Subtotal
        </Text>
        <Text style={{ fontWeight: fonts.weight.semibold }}> EGP</Text>

        <Text
          style={{
            fontSize: fonts.size.font20,
            fontWeight: fonts.weight.semibold
          }}
        >
          {subtotal}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.yellow,
          borderRadius: "20%",
          padding: 10,
          margin: 10,
          borderWidth: 0.4,
          borderColor: colors.lightGrey
        }}
      >
        <Text
          style={{
            fontSize: fonts.size.font16,
            textAlign: "center"
          }}
        >
          Proceed to Buy
        </Text>
      </TouchableOpacity>
      <View style={{ borderColor: colors.lightGrey, borderWidth: 0.4 }}></View>
      <FlatList
        data={cartItems}
        numColumns={1}
        contentContainerStyle={{
          alignItems: "center"
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                paddingVertical: 20,
                marginVertical: 5,
                borderColor: colors.lightGrey,
                borderWidth: 1
              }}
            >
              <View
                style={{
                  flex: 2,
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <Image
                  source={{ uri: item.imageLink }}
                  style={{
                    width: width * 0.3,
                    height: width * 0.2
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    margin: 10,
                    borderRadius: "5%",
                    borderWidth: 0.5,
                    borderColor: colors.lightGrey,
                    backgroundColor: colors.lighterGrey
                  }}
                >
                  <TouchableOpacity
                    style={styles.btnGrey}
                    onPress={() => {
                      dispatch({ type: "cart/remove", payload: item });
                    }}
                  >
                    <Text style={styles.txtBtnGrey}>-</Text>
                  </TouchableOpacity>
                  <View style={styles.txtQuantity}>
                    <Text
                      style={{
                        fontSize: fonts.size.font18,
                        textAlign: "center"
                      }}
                    >
                      {item.quantity}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.btnGrey}
                    onPress={() => {
                      dispatch({ type: "cart/add", payload: item });
                    }}
                  >
                    <Text style={styles.txtBtnGrey}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flex: 3 }}>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  {item.description}
                </Text>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: fonts.size.font18
                    }}
                  >
                    {item.price}
                  </Text>
                  <Text style={{ textAlignVertical: "bottom" }}>EGP</Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: fonts.size.font12
                    }}
                  >
                    Brand:{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: fonts.size.font12
                    }}
                  >
                    {item.brand}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => "key" + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  txtBtnGrey: {
    fontSize: fonts.size.font24,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: fonts.weight.semibold
  },
  btnGrey: {
    flex: 2
  },
  txtQuantity: {
    alignSelf: "center",
    height: "100%",
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRightWidth: 0.4,
    borderLeftWidth: 0.4,
    borderColor: colors.lightGrey
  }
});
