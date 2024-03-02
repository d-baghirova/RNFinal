import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../components/HeaderTitle";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { CategoriesLst } from "../data/Categories";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Login">;
}; 
const categoriesList = [
  {
    img: require("../images/categories/bread.jpeg"),
    title: "Bread",
    quantity: 26,
  },
  {
    img: require("../images/categories/drinks.jpeg"),
    title: "Drinks",
    quantity: 5,
  },
  {
    img: require("../images/categories/fruits.jpeg"),
    title: "Fruits",
    quantity: 56,
  },
  {
    img: require("../images/categories/pasta.jpeg"),
    title: "Pasta",
    quantity: 78,
  },
  {
    img: require("../images/categories/sweets.jpeg"),
    title: "Sweets",
    quantity: 50,
  },
  {
    img: require("../images/categories/vegetables.jpeg"),
    title: "Vegetables",
    quantity: 30,
  },
];

const windowWidth = Dimensions.get("window").width;

export default function Categories({ navigation }: Props) {
  console.log('Categories' + CategoriesLst)
  function drawCards() {
    return categoriesList.map((card, i) => (
      <Card
        title={card.title}
        img={card.img}
        quantity={card.quantity}
        key={i}
        navigation={navigation}
      />
    ));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <HeaderTitle title={"Categories"} />
        <View style={styles.mainContainer}>
          <SearchBar />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          >
            {drawCards()}
          </ScrollView>
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
  categoriesContainer: {
    width: windowWidth * 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 20,
  },
});
