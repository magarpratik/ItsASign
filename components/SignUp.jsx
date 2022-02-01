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
            <Text style={styles.title}>ItsASign!</Text>
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
                <Text style={styles.errorText}>
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
                <Text style={styles.errorText}>
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
                <Text style={styles.errorText}>
                    Please enter a valid email.
                </Text>
            )}

            <Pressable
                style={styles.createButton}
                onPress={(event) => {
                    handleSignUp(event);
                }}
            >
                <Text style={styles.buttonText}>Create Account</Text>
            </Pressable>
            {dbError ? <Text style={styles.errorText}>{dbError}</Text> : null}
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
    message: {},
    image: { width: 200, height: 200 },
    textInput: {
        height: 40,
        borderColor: "#004346",
        borderWidth: 1,
        width: 200,
        padding: 5,
        margin: 5,
        backgroundColor: "white",
    },
    errorText: {
        color: "red",
        width: 200,
    },
    createButton: {
        marginTop: 15,
        backgroundColor: "#004346",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        color: "white",
    },
    title: {
        fontSize: 50,
        color: "#002729",
    },
    buttonText: {
        color: "white",
        alignSelf: "center",
    },
});

export default SignUp;
