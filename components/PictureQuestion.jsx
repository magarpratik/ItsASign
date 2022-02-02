import { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { getLessonAnswers, getLessonQuestions } from "../utils/api";

const PictureQuestion = ({ questionNumber, setRenderButton}) => {
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

      setRenderButton(true)

      // when button is clicked, increment question number
      
    }
  };

  return (
    <View>
      <Text>
        {questionNumber + 1}: {question}
      </Text>
      <Text>
        <TouchableOpacity onPress={() => isCorrect("a")} key="picA">
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/A.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => isCorrect("b")} key="picB">
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/B.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => isCorrect("c")} key="picC">
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/C.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => isCorrect("d")} key="picD">
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/D.png")}
          />
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default PictureQuestion;
