import { Button, Image, View, TextInput, StyleSheet } from "react-native";

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Name" style={styles.textInput} />
            <TextInput placeholder="Username" style={styles.textInput} />
            <TextInput placeholder="Password" style={styles.textInput} />
            <TextInput placeholder="Email" style={styles.textInput} />
            <Button
                style={styles.button}
                color="green"
                title="Create account"
                onPress={() => {
                    navigation.navigate("SignIn");
                }}
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
