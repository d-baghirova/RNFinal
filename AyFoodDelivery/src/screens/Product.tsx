import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Dimensions, View, ImageBackground, Text } from "react-native";
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
const windowHeight = Dimensions.get("window").height;

export default function Product({ route }: Props) {
  const { params } = route;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={params.img}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>{params.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{params.price}</Text>
            <Text style={styles.pieceOrKg}>
              € / {params.isPiece === true ? "piece" : "kg"}
            </Text>
          </View>
          <Text style={styles.greenText}>~ 150 gr / piece</Text>
          <Text style={styles.country}>{params.country}</Text>
          <Text style={styles.desciption}>
            Lettuce is an annual plant of the daisy family, Asteraceae. It is
            most often grown as a leaf vegetable, but sometimes for its stem and
            seeds. Lettuce is most often used for salads, although it is also
            seen in other kinds of food, such as soups, sandwiches and wraps; it
            can also be grilled.
          </Text>
          <View style={styles.btns}>
            {/* <FavoriteBtn isBig={true} />
            <BasketBtn hasTitle={true} /> */}
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
  },
  image: {
    height: windowHeight / 2,
    alignItems: "center",
  },
  whiteContainer: {
    marginTop: 290,
    height: windowHeight * 0.7,
    width: windowWidth,
    backgroundColor: "#F6F5F5",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 25,
    paddingTop: 40,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  priceContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  price: {
    color: "#2D0C57",
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 5,
  },
  pieceOrKg: {
    color: "#9586A8",
    fontSize: 22,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "bold",
    fontSize: 34,
  },
  greenText: {
    paddingBottom: 30,
    color: "#06BE77",
    fontWeight: "500",
    fontSize: 17,
  },
  country: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2D0C57",
  },
  desciption: {
    color: "#9586A8",
    flexWrap: "wrap",
    fontSize: 17,
    width: windowWidth * 0.9,
    paddingVertical: 10,
  },
  btns: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
