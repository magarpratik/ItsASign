import { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { getLessonAnswers, getLessonQuestions } from "../utils/api";

const PictureQuestion = ({ questionNumber, setRenderButton }) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    getLessonAnswers(1, questionNumber).then((response) => {
      setAnswers(response);
    });
    getLessonQuestions(1, questionNumber).then((response) => {
      setQuestion(response);
    });
  });

  const isCorrect = (picture) => {
    console.log(answers[picture].correct);
    if (answers[picture].correct === true) {
      // show the next button

      setRenderButton(true);

      // when button is clicked, increment question number
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Question {questionNumber + 1}: {question}
      </Text>
      <Text style={styles.answers}>
        <TouchableOpacity
          onPress={() => isCorrect("a")}
          key="picA"
        >
          <Image style={styles.image} source={require("../assets/A.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => isCorrect("b")}
          key="picB"
        >
          <Image style={styles.image} source={require("../assets/B.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => isCorrect("c")}
          key="picC"
        >
          <Image style={styles.image} source={require("../assets/C.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => isCorrect("d")} key="picD">
          <Image style={styles.image} source={require("../assets/D.png")} />
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 80,
  },
  answers: { display: "flex", alignSelf: "center" },
  question: { fontSize: 32, textAlign: "center" },
  image: {
    margin: 10,
    width: 150,
    height: 150,
  }
});

export default PictureQuestion;
