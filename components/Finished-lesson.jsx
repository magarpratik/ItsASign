import { Text, Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FinishedLesson = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You unlocked Lesson 2!!!</Text>
      <Text style={styles.text}>You earned 100 xp!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 32, textAlign: "center" },
  container: { display: "flex", flexDirection: "column", marginTop: 150}
});

export { FinishedLesson };
