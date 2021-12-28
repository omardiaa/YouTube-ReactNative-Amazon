import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cart from "../pages/cart";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationOptions from "./navigationOptions";

export default function CartNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} options={navigationOptions} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
