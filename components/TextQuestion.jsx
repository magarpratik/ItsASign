import { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, View, Button } from "react-native";
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

      console.log(tempAnswers)

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
        console.log(answer[1])
        // make the next button show up
        setRenderButton(true)
      }
    })
  };

  return (
    <View>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/B.png")}
      />
      {answers.map((option) => {
        return (
          <TouchableOpacity key={option[0]}>
            <Button title={option[0]} onPress={() => isCorrect(option[0])} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TextQuestion;
