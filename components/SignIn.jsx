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
import { getUser } from "../utils/api";
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

        // send api request to make user
    };

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
        } else {
            getUser(username).then((result) => {
                if (result) {
                    // if backend is string
                    if (result.password === password) {
                        navigation.navigate("HomePage");
                    } else {
                        setIsValidPassword(false);
                        console.log(result.message);
                    }
                } else {
                    setIsValidUsername(false);
                }
            });
        }
    }, [username, password]);

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://source.unsplash.com/random/sign language",
                }}
                style={styles.image}
            />
            {/* <View style={styles.button}>
                <Button
                    color="green"
                    title="Sign up!"
                    onPress={() =>
                        navigation.navigate("SignUp", { name: "Jane" })
                    }
                />
            </View> */}
            <Pressable
                onPress={() => navigation.navigate("SignUp", { name: "Jane" })}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign up!</Text>
            </Pressable>

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
    buttonText: {
        color: "white",
    },
    errorText: {
        color: "red",
        width: 200,
    },
});

export default SignIn;
