import { Text, View, Pressable, StyleSheet } from "react-native";
import { useAnimatedScrollHandler } from "react-native-reanimated";
import { useEffect, useState, useContext } from "react";
import { TextInput } from "react-native-gesture-handler";
import { patchUserDetails } from "../utils/api";
import { LoadingContext, UserContext } from "../utils/userContext";

const Settings = () => {
    const { username } = useContext(UserContext);

    const [isInputDisplayed, setIsInputDisplayed] = useState(false);

    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    const [currentText, setCurrentText] = useState("");
    const [emailText, setEmailText] = useState("");

    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [updateFail, setUpdateFail] = useState(false);

    const handleEmailInput = () => {
        setIsInputDisplayed(true);
        setIsEditingName(false);
        setIsEditingPassword(false);

        setIsEditingEmail(true);
    };
    const handleNameInput = () => {
        setIsInputDisplayed(true);
        setIsEditingPassword(false);
        setIsEditingEmail(false);
        setIsEditingName(true);
    };
    const handlePasswordInput = () => {
        setIsInputDisplayed(true);
        setIsEditingName(false);
        setIsEditingEmail(false);
        setIsEditingPassword(true);
    };
    const handlePatch = () => {
        setEmailText(currentText);
        setTimeout(function () {
            setUpdateSuccess(true);
        }, 1200);
    };
    useEffect(() => {
        patchUserDetails(username, emailText, null, null, null).then(
            (result) => {
                console.log("test", result);
            }
        );
    }, [emailText]);

    useEffect(() => {}, [updateFail, updateSuccess]);
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={handleEmailInput}>
                <Text style={styles.buttonText}>Edit e-mail</Text>
                {isEditingEmail ? (
                    <TextInput
                        style={styles.input}
                        onChangeText={setCurrentText}
                        placeholder="example@example.com"
                    ></TextInput>
                ) : null}
            </Pressable>
            {updateSuccess ? (
                <Text style={styles.successText}>E-mail updated!</Text>
            ) : null}
            <Pressable style={styles.button} onPress={handleNameInput}>
                <Text style={styles.buttonText}>Edit name</Text>
                {isEditingName ? (
                    <TextInput
                        style={styles.input}
                        placeholder="John Smith"
                    ></TextInput>
                ) : null}
            </Pressable>
            <Pressable style={styles.button} onPress={handlePasswordInput}>
                <Text style={styles.buttonText}>Edit password</Text>
                {isEditingPassword ? (
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                    ></TextInput>
                ) : null}
            </Pressable>
            <Pressable style={styles.buttonSubmit} onPress={handlePatch}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            {updateFail ? (
                <Text style={styles.failText}>Sorry there was an issue.</Text>
            ) : null}
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F0F7F4",
    },
    button: {
        marginTop: 20,
        backgroundColor: "#004346",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "white",
        alignSelf: "center",
    },
    input: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        margin: 3,
        borderRadius: 3,
    },
    successText: {
        color: "green",
    },
    failText: {
        color: "red",
    },
    buttonSubmit: {
        backgroundColor: "green",
        padding: 6,
        marginTop: 3,
    },
});
