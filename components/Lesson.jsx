import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

const Lesson = ({ setLessonCompleted, setQuestionNumber }) => {
  const completeLesson = () => {
    setLessonCompleted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Today you will be learning how to sign the letters 'A' and 'B'.
      </Text>
      <Image style={styles.img} source={require("../assets/A-q.png")} />
      <Image style={styles.img} source={require("../assets/B-q.png")} />
      <Pressable style={styles.button} onPress={completeLesson}>
        <Text style={styles.buttonText}>Start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#F0F7F4",
  },
  header: {
    marginTop: 30,
    fontSize: 32,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    marginBottom: 0,
  },
  img: {
    marginBottom: 10,
    width: 180,
    height: 180,
    borderRadius: 100 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#004346",
    margin: 20,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    height: 50,
    width: 150,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 30,
  },
});

export { Lesson };
