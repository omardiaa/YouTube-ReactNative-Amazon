import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./homeNavigator";
import ProfileNavigator from "./profileNavigator";
import CartNavigator from "./cartNavigator";

export default function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Tab.Screen name="CartNavigator" component={CartNavigator} />
    </Tab.Navigator>
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
