import React from "react";
import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import BasketIconActive from "../icons/BasketIconActive";
import BasketIcon from "../icons/BasketIcon";

const BasketBtn = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Pressable style={styles.btn} onPress={() => setIsActive(!isActive)}>
      <View style={isActive ? styles.containerActive : styles.container}>
        {isActive ? (
          <BasketIconActive style={styles.favoriteIcon} />
        ) : (
          <BasketIcon style={styles.favoriteIcon} />
        )}
      </View>
    </Pressable>
  );
};

export default BasketBtn;

const styles = StyleSheet.create({
  btn: {
    width: 45,
  },
  container: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#ffffff",
    width: 45,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteIcon: {
    color: "D9D0E3",
    width: 22,
    height: 20,
  },
  containerActive: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#0bce83",
    width: 45,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
