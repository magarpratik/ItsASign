import { useState } from "react";
import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import { FinishedLesson } from "./Finished-lesson";

const Next = ({
  allQuestions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setCurrentSelectedOption,
  setCorrectOption,
  setIsOptionDisabled,
  showNextButton,
  setShowNextButton,
  answered,
}) => {
  const navigation = useNavigation();

  const handleNext = () => {
    console.log(currentQuestionIndex, allQuestions.length);
    if (answered) {
      navigation.navigate("FinishedLesson");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentSelectedOption(null);
      setCorrectOption(null);
      setIsOptionDisabled(false);
      setShowNextButton(false);
    }
  };

  if (showNextButton) {
    return (
      <TouchableOpacity onPress={handleNext}>
        <Text>Next</Text>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

export { Next };
