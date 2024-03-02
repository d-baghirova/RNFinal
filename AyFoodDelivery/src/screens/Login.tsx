import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Btn from "../components/Btn";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import Title from "../components/Title";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

export default function Login({ navigation }: Props) {
  const onPressHandler = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.loginContainer}>
          <Title title={"Sign In"} />
          <InputField placeholder="Email" />
          <PasswordInput />
          <Btn btnText="Login" onPress={onPressHandler} />
          <Pressable onPress={onPressHandler}>
            <Text style={styles.text}>Forgot your password?</Text>
          </Pressable>
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
  text: {
    color: "#5DB075",
    textAlign: "center",
    fontSize: 16,
  },
  loginContainer: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
