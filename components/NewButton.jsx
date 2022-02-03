import { Button } from "react-native";

const NewButton = ({ setQuestionNumber, questionNumber }) => {
    const currentQuestion = questionNumber;
  
    const incrementQuestionNumber = () => {
    setQuestionNumber(currentQuestion + 1);
  };

  return <Button title="Next" onPress={incrementQuestionNumber} />;
};

export default NewButton;
