import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  ImageBackground,
} from "react-native";
import { ImageSourcePropType } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import FavoriteBtn from "./FavoriteBtn";
import BasketBtn from "./BasketBtn";
import { StackNavigation } from "../navigation/Index";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

type Props = {
  img: ImageSourcePropType;
  title: string;
  price: number;
  piece: any;
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

const ProductItem = ({
  img,
  title,
  price,
  piece,
  navigation,
}: Props) => {
  const { navigate } = useNavigation<StackNavigation>();
  return (
    <Pressable onPress={() => navigate('Product', {
      title: title,
      img: img,
      price: price,
      piece: piece 
    })}>
      <View style={{ flexDirection: "row", width: windowWidth * 0.5 }}>
        <ImageBackground
          source={img}
          borderRadius={15}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}></View>
        </ImageBackground>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.pieceOrKg}>
              € / {piece === true ? "piece" : "kg"}
            </Text>
          </View>
          <View style={styles.btnsContainer}>
            <FavoriteBtn />
            <BasketBtn />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.5,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    height: 210,
    borderRadius: 15,
  },
  image: {
    alignItems: "center",
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderRadius: 15,
  },
  content: {
    width: windowWidth * 0.42,
    height: 210,
    paddingHorizontal: 10,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "500",
    fontSize: 22,
  },
  priceContainer: {
    paddingVertical: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  price: {
    color: "#2D0C57",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 5,
  },
  pieceOrKg: {
    color: "#9586A8",
    fontSize: 18,
  },
  btnsContainer: {
    flex: 1,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
