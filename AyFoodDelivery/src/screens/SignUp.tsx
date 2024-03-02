import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Btn from "../components/Btn";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import Title from "../components/Title";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Categories">;
};

export default function SignUp({ navigation }: Props) {
  const onPressHandler = () => {
    navigation.navigate("Categories");
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.loginContainer}>
          <Title title={"Sign Up"} />
          <InputField placeholder="Name" />
          <InputField placeholder="Email" />
          <PasswordInput />
          <Btn btnText="Sign Up" onPress={onPressHandler} />
        </View>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
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

  loginContainer: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
