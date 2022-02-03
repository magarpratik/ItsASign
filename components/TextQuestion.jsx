import { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { getLessonAnswers, getLessonQuestions } from "../utils/api";

const TextQuestion = ({ questionNumber, setRenderButton }) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setRenderButton(false);
    getLessonAnswers(1, questionNumber).then((response) => {
      const keys = ["a", "b", "c", "d"];

      const tempAnswers = [];

      for (let i = 0; i < keys.length; i++) {
        tempAnswers.push([response[keys[i]].answer, response[keys[i]].correct]);
      }

      console.log(tempAnswers);

      setAnswers(tempAnswers);
    });
    getLessonQuestions(1, questionNumber).then((response) => {
      console.log(response);
      setQuestion(response);
    });
  }, []);

  const isCorrect = (picture) => {
    console.log(picture);
    // if (answers[picture].correct === true) {
    //   // show the next button

    //   setRenderButton(true);

    //   // when button is clicked, increment question number
    // }

    answers.map((answer) => {
      if (answer[0] === picture && answer[1] === true) {
        console.log(answer[1]);
        // make the next button show up
        setRenderButton(true);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Which letter does the sign represent?
      </Text>
      <Image
        style={styles.question}
        source={require("../assets/B.png")}
      />
      <View style={styles.answers}>
        {answers.map((option) => {
          return (
            <TouchableOpacity key={option[0]}>
              <Pressable
                title={option[0]}
                onPress={() => isCorrect(option[0])}
                style={styles.button}
              >
                <Text style={styles.text}>{option[0]}</Text>
              </Pressable>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questionText: { fontSize: 32, textAlign: "center" },
  question: { width: 250, height: 250 },
  container: { display: "flex", flexDirection: "column", marginTop: 50, alignItems: "center" },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#27B197",
    width: 200,
    margin: 3
  },
  answers: { marginTop: 8},
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default TextQuestion;
