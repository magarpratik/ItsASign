import { useState, useContext, useEffect } from "react";

import {
  Button,
  Image,
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { getUser, signIn } from "../utils/api";
import { UserContext } from "../utils/userContext";

const SignIn = ({ navigation }) => {
  const [userText, setUserText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [password, setPassword] = useState("");

  const [isValidUsername, setIsValidUsername] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const { username, setUsername } = useContext(UserContext);

  const handleSignIn = () => {
    setIsValidPassword(true);
    setIsValidUsername(true);
    const checkPasswordValid = (text) => {
      return text.match(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,50})/) !== null;
    };

    setUsername(userText);
    setPassword(passwordText);

    if (userText.length < 4) {
      setIsValidUsername(false);
    } else if (!checkPasswordValid(passwordText)) {
      setIsValidPassword(false);
    }

    signIn(userText, passwordText)
      .then((res) => {
        console.log(res.status);

        if (res.successful === true) {
          navigation.navigate("HomePage");
        } else if (res.status === 404) {
          setIsValidUsername(false);
        } else if (res.status === 401) {
          setIsValidPassword(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, [username, password]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/title.png")} style={styles.image} />

      <TextInput
        placeholder="Username"
        style={styles.textInput}
        onChangeText={setUserText}
      />
      {isValidUsername ? null : (
        <Text style={styles.errorText}>User does not exist.</Text>
      )}
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        onChangeText={setPasswordText}
        secureTextEntry={true}
      />
      {isValidPassword ? null : (
        <Text style={styles.errorText}>Incorrect password.</Text>
      )}

      <Pressable style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      <Text>Don't already have an account?</Text>
      <Pressable
        onPress={() => navigation.navigate("SignUp", { name: "Jane" })}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign up!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F0F7F4",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#004346",
    margin: 20,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },

  image: { height: 270, width: 380, marginVertical: 10, borderRadius: 10 },
  textInput: {
    height: 40,
    borderColor: "#004346",
    borderWidth: 1,
    width: 200,
    padding: 5,
    margin: 5,
    backgroundColor: "white",
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
  errorText: {
    color: "red",
    width: 200,
  },
});

export default SignIn;
