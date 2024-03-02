import React from "react";
import { BackHandler, Pressable, View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Products from "../screens/Products";
import Product from "../screens/Product";

export type RootStackParams = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Categories: undefined;
  Products: undefined;
  Product: any;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />
      <RootStack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
        }}
        name="Categories"
        component={Categories}
      />
      <RootStack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
        }}
        name="Products"
        component={Products}
      />
       <RootStack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
        }}
        name="Product"
        component={Product}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
