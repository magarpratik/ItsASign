import { useEffect, useState } from "react";
import {
    Button,
    Image,
    View,
    TextInput,
    StyleSheet,
    Text,
    Pressable,
} from "react-native";
import { postUser } from "../utils/api";

const SignUp = ({ navigation }) => {
    const [name, setName] = useState("");
    // just as username would conflict with context?
    const [usernameSignUp, setUsernameSignUp] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [nameText, setNameText] = useState("");
    const [usernameSignUpText, setUsernameSignUpText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [emailText, setEmailText] = useState("");

    const [isValidUsername, setIsValidUsername] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [dbError, setDbError] = useState(null);

    const handleSignUp = (event) => {
        event.preventDefault();
        setIsFirstLoad(false);
        setIsValidEmail(true);
        setIsValidPassword(true);
        setIsValidUsername(true);

        const checkPasswordValid = (text) => {
            return text.match(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,50})/) !== null;
        };
        const checkEmailValid = (text) => {
            return (
                text.match(
                    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                ) !== null
            );
        };

        setName(nameText);
        setUsernameSignUp(usernameSignUpText);
        setPassword(passwordText);
        setEmail(emailText);

        if (usernameSignUpText.length < 4) {
            setIsValidUsername(false);
        } else if (!checkPasswordValid(passwordText)) {
            setIsValidPassword(false);
        } else if (!checkEmailValid(emailText)) {
            setIsValidEmail(false);
        }

        // send api request to make user
    };
    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false);
        } else {
            postUser(name, usernameSignUp, password, email).then((result) => {
                console.log(result);
                if (result.success) {
                    navigation.navigate("SignIn");
                } else {
                    console.log(result);
                    if (result.status !== 400) setDbError(result.message);
                    setPasswordText("");
                    console.log(result.message);
                }
            });
        }
    }, [name, usernameSignUp, password, email]);
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Name"
                style={styles.textInput}
                onChangeText={setNameText}
            />

            <TextInput
                placeholder="Username"
                style={styles.textInput}
                onChangeText={setUsernameSignUpText}
            />
            {isValidUsername ? null : (
                <Text style={styles.text}>
                    Username should be longer than 4 characters.
                </Text>
            )}

            <TextInput
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={setPasswordText}
            />
            {isValidPassword ? null : (
                <Text style={styles.text}>
                    Password should be longer than 8 characters and contain a
                    mix of letters and numbers.
                </Text>
            )}

            <TextInput
                placeholder="Email"
                style={styles.textInput}
                onChangeText={setEmailText}
            />
            {isValidEmail ? null : (
                <Text style={styles.text}>Please enter a valid email.</Text>
            )}

            <Pressable
                style={styles.createButton}
                onPress={(event) => {
                    handleSignUp(event);
                }}
            >
                <Text>Create Account</Text>
            </Pressable>
            {dbError ? <Text>{dbError}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 50,
    },
    message: {},
    image: { width: 200, height: 200 },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
        marginTop: 15,
    },
    text: {
        color: "red",
    },
    createButton: {
        marginTop: 15,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 6,
    },
});

export default SignUp;
