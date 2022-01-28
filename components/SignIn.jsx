import { useState, useContext } from "react";

import { Button, Image, View, TextInput, StyleSheet } from "react-native";
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
            <View style={styles.button}>
                <Button
                    color="green"
                    title="Sign up!"
                    onPress={() =>
                        navigation.navigate("SignUp", { name: "Jane" })
                    }
                />
            </View>

            <TextInput
                placeholder="Username"
                style={styles.textInput}
                onChangeText={setUserText}
            />
            <TextInput
                placeholder="Password"
                style={styles.textInput}
                onChangeText={setPasswordText}
            />

            <View style={styles.button}>
                <Button
                    color="green"
                    title="Sign in"
                    onPress={() => {
                        setUsername(userText);
                        navigation.navigate("HomePage");
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: { marginTop: 20 },
    image: { width: 300, height: 300 },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: 200,
    },
});

export default SignIn;
