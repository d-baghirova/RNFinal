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

const windowWidth = Dimensions.get("window").width;

type Props = {
  img: ImageSourcePropType;
  title: string;
  quantity: number;
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

const Card = ({ img, title, quantity, navigation }: Props) => {
  return (
    <Pressable onPress={() => navigation.navigate("Products")}>
      <ImageBackground
        source={img}
        borderTopLeftRadius={15}
        borderTopRightRadius={15}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}></View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.quantity}>({quantity})</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.42,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  image: {
    alignItems: "center",
    borderColor: "#D9D0E3",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  content: {
    width: windowWidth * 0.42,
    borderColor: "#D9D0E3",
    borderWidth: 1,
    height: 60,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
  },
  title: {
    color: "#2D0C57",
    fontWeight: "500",
    fontSize: 18,
  },
  quantity: {
    color: "#9586A8",
    fontSize: 12,
  },
});
