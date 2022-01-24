import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="green"
          title="Sign up!"
          onPress={() => navigation.navigate("SignUp", { name: "Jane" })}
        />
      </View>

      <Text style={styles.message}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  message: {},
  button: {},
});

export default SignIn;
