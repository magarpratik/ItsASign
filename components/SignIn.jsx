import { Button, Image, View, TextInput, StyleSheet } from "react-native";

const SignIn = ({ navigation }) => {
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
          onPress={() => navigation.navigate("SignUp", { name: "Jane" })}
        />
      </View>

      <TextInput placeholder="Username" style={styles.textInput} />
      <TextInput placeholder="Password" style={styles.textInput} />

      <View style={styles.button}>
        <Button color="green" title="Sign in" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { display: "flex", flexDirection: "column", alignItems: "center" },
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
