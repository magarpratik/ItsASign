import { useState } from "react";
import { Button, Image, View, TextInput, StyleSheet } from "react-native";
import { set } from "react-native-reanimated";

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

    const handleSignUp = () => {
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
            console.log("user");
            setIsValidUsername(false);
        } else if (!checkPasswordValid(passwordText)) {
            console.log("pass");
            setIsValidPassword(false);
        } else if (!checkEmailValid(emailText)) {
            console.log(emailText);
            setIsValidEmail(false);
        } else {
            console.log("navv");
            navigation.navigate("SignIn");
        }

        // send api request to make user
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Name"
                style={styles.textInput}
                onChangeText={setNameText}
            />
            {/* {isValidUsername ? null : (
                <Text>
                    Invalid Username! Should be longer than 4 characters.
                </Text>
            )} */}
            <TextInput
                placeholder="Username"
                style={styles.textInput}
                onChangeText={setUsernameSignUpText}
            />
            <TextInput
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry={true}
                onChangeText={setPasswordText}
            />
            <TextInput
                placeholder="Email"
                style={styles.textInput}
                onChangeText={setEmailText}
            />
            <Button
                style={styles.button}
                color="green"
                title="Create account"
                onPress={handleSignUp}
                onChangeText={setPasswordText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    message: {},
    button: {},
    image: { width: 200, height: 200 },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
    },
});

export default SignUp;
