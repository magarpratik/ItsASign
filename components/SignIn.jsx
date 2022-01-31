import { useState, useContext } from "react";

import { Button, Image, View, TextInput, StyleSheet, Text } from "react-native";
import { UserContext } from "../utils/userContext";

const SignIn = ({ navigation }) => {
  const [userText, setUserText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const { username, setUsername } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://source.unsplash.com/random/sign language",
        }}
        style={styles.image}
      />

      <TextInput
        placeholder="Username"
        style={styles.textInput}
        onChangeText={setUserText}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        onChangeText={setPasswordText}
        secureTextEntry={true}
      />

      <View style={styles.button}>
        <Button
          color="white"
          title="Sign in"
          onPress={() => {
            setUsername(userText);

            navigation.navigate("HomePage");
          }}
        />
      </View>
      <Text>Haven't got an account yet?</Text>
      <View style={styles.button}>
        <Button
          color="white"
          title="Sign up!"
          onPress={() => navigation.navigate("SignUp", { name: "Jane" })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#78ba97",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#56a996",
    margin: 20,
    borderRadius: 10,
    width: 150,
  },
  image: { width: 300, height: 300 },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    padding: 5,
    margin: 5,
    backgroundColor: "white",
  },
});

export default SignIn;
