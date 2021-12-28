import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./homeNavigator";
import ProfileNavigator from "./profileNavigator";
import CartNavigator from "./cartNavigator";
import Icon from "react-native-vector-icons/FontAwesome5";

import colors from "../theme/colors";
import fonts from "../theme/fonts";

export default function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="home"
                size={fonts.size.font18}
                color={focused ? colors.secondary : colors.black}
              />
            );
          },
          headerShown: false,
          title: ""
        }}
      />

      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="user"
                size={fonts.size.font18}
                color={focused ? colors.secondary : colors.black}
              />
            );
          },
          headerShown: false,
          title: ""
        }}
      />
      <Tab.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Icon
                name="shopping-cart"
                size={fonts.size.font18}
                color={focused ? colors.secondary : colors.black}
              />
            );
          },
          headerShown: false,
          title: ""
        }}
      />
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
