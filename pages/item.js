import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import fonts from "../theme/fonts";
import colors from "../theme/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
export default function Item({ route }) {
  const item = route.params;
  console.log(item);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: fonts.size.font16,
          fontWeight: fonts.weight.bold,
          textAlign: "left"
        }}
      >
        Brand: {item.brand}
      </Text>
      <Text style={{ fontSize: fonts.size.font18, paddingVertical: 10 }}>
        {item.description}
      </Text>
      <Image
        source={{ uri: item.imageLink }}
        style={{
          width: width * 0.9,
          height: width * 0.6,
          alignSelf: "center"
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: fonts.size.font26 }}>{item.price}</Text>
        <Text
          style={{
            textAlignVertical: "bottom",
            alignSelf: "flex-end",
            paddingBottom: 4
          }}
        >
          EGP
        </Text>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text style={{ fontSize: fonts.size.font16, color: colors.blue }}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10
  }
});
