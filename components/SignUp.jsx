import { Button, Image, View, TextInput, StyleSheet } from "react-native";

const SignUp = ({ navigation }) => {
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
      <View style={styles.button}>
        <Button
          color="white"
          title="Create account"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
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
    margin: 10,
    borderRadius: 10,
    width: 150,
  },
  image: { width: 200, height: 200 },
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

export default SignUp;
