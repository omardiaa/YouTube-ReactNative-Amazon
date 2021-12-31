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
      tempSubtotal += tempCartItems[i].price;
    }
    if (tempSubtotal != subtotal) setSubtotal(tempSubtotal);
    return tempCartItems;
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: fonts.size.font18,
          fontWeight: "bold",
          padding: 10
        }}
      >
        Subtotal {subtotal}
      </Text>
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

      <FlatList
        data={cartItems}
        numColumns={1}
        contentContainerStyle={{
          alignItems: "center"
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: "row",
                paddingVertical: 20,
                marginVertical: 5,
                backgroundColor: colors.lighterGrey,
                borderColor: colors.lightGrey,
                borderWidth: 1
              }}
              onPress={() => {
                navigation.navigate("Item", item);
              }}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={{ uri: item.imageLink }}
                  style={{
                    width: width * 0.3,
                    height: width * 0.25
                  }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <Text numberOfLines={3} ellipsizeMode="tail">
                  {item.description}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    numberOfLines={1}
                    style={{ fontWeight: "bold", fontSize: fonts.size.font18 }}
                  >
                    {item.price}
                  </Text>
                  <Text style={{ textAlignVertical: "bottom" }}>EGP</Text>
                </View>
              </View>
            </TouchableOpacity>
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
  }
});
