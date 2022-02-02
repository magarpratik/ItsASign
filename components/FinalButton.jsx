import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const FinalButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Finish!"
      onPress={
        () => navigation.navigate("FinishedLesson")

        // add user xp

        // update user completed_lessons
      }
    />
  );
};

export default FinalButton;
