import { Text, Button, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FinishedLesson = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You unlocked Lesson 2!</Text>
      <Text style={styles.text}>You earned 100 xp!</Text>
      <Pressable
        onPress={() => navigation.navigate("HomePage")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 32, textAlign: "center" },
  container: { display: "flex", flexDirection: "column", marginTop: 150 },
  button: {
    marginTop: 20,
    backgroundColor: "#004346",
    margin: 20,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
  },
});

export { FinishedLesson };
