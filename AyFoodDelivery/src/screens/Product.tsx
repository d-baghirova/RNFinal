import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageSourcePropType } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import SearchBar from "../components/SearchBar";

type ProductParams = {
  img: ImageSourcePropType;
  title: string;
  price: number;
  piece: any;
};

type Props = {
  route: any;
};

const windowWidth = Dimensions.get("window").width;

export default function Product({ route }: Props) {
  const { params } = route;
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <HeaderTitle title={"Product"} />
        <View style={styles.mainContainer}>
          <SearchBar />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  whiteContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F6F5F5",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {},
});
