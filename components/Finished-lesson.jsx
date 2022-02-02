import { Text, Button } from "react-native";
import {
  useNavigation,
} from "@react-navigation/native";


const FinishedLesson = () => {
  const navigation = useNavigation();


  return (
      <Text>Lesson Finished!!!</Text>
  );
};

export { FinishedLesson };
