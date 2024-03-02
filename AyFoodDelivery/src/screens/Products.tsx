import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../components/HeaderTitle";
import SearchBar from "../components/SearchBar";
import ProductItem from "../components/ProductItem";
import Product from "../screens/Product";

type Props = {
  route: any,
  navigation: StackNavigationProp<RootStackParams, "Login">;
};
const vegetablesList = [
  {
    img: require("../images/vegetables/BostonLettuce.jpeg"),
    title: "Boston Lettuce",
    price: 0.53,
    piece: true,
  },
  {
    img: require("../images/vegetables/Carrot.jpeg"),
    title: "Carrot",
    price: 0.81,
    piece: false,
  },
  {
    img: require("../images/vegetables/Cucumber.jpeg"),
    title: "Cucumber",
    price: 0.56,
    piece: false,
  },
  {
    img: require("../images/vegetables/Onion.jpg"),
    title: "Onion",
    price: 0.78,
    piece: false,
  },
  {
    img: require("../images/vegetables/PurpleCauliflower.jpeg"),
    title: "Purple Cauliflower",
    price: 0.79,
    piece: true,
  },
  {
    img: require("../images/vegetables/RedOnion.jpg"),
    title: "Red Onion",
    price: 0.33,
    piece: false,
  },
  {
    img: require("../images/vegetables/SavoyCabbage.jpeg"),
    title: "Savoy Cabbage",
    price: 0.94,
    piece: false,
  },
  {
    img: require("../images/vegetables/Tomato.jpg"),
    title: "Tomato",
    price: 0.32,
    piece: false,
  },
];



const windowWidth = Dimensions.get("window").width;

export default function Products({ navigation, route }: Props) {
  const {params} = route;
  const productsLst = params.products;
  console.log(params)
  function drawProducts() {
    return productsLst.map((product : any, i : number) => (
      <ProductItem
        title={product.title}
        img={product.img} 
        price={product.price}
        piece={product.piece}
        key={i}
        navigation={navigation}
      />
    ));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <HeaderTitle title={"Products"} />
        <View style={styles.mainContainer}>
          <SearchBar />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productsContainer}
          >
            {drawProducts()}
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
  productsContainer: {
    width: windowWidth * 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 20,
  },
});
