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

    const handleSignUp = () => {
        setName(nameText);
        setUsernameSignUp(usernameSignUpText);
        setPassword(passwordText);
        setEmail(emailText);
        navigation.navigate("SignIn");
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Name" style={styles.textInput} />
            <TextInput placeholder="Username" style={styles.textInput} />
            <TextInput
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry={true}
            />
            <TextInput placeholder="Email" style={styles.textInput} />
            <Button
                style={styles.button}
                color="green"
                title="Create account"
                onPress={handleSignUp}
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
