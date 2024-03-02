import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PasswordInput from "./src/components/PasswordInput";
import Login from "./src/screens/Login";
import RootNavigation from "./src/navigation/Index";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
