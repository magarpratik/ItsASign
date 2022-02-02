import { useEffect, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { data } from "../utils/Quiz-A-data";
import { Question } from "./Questions";
import { Answer } from "./Answer-options";
import { Lesson } from "./Lesson";
import { Cam } from "./Camera-test";
import CamTest, { CameraWithML } from "./CameraWithML";
import * as tf from "@tensorflow/tfjs";
import * as tmPose from "@teachablemachine/pose";

import { tmImage } from "@teachablemachine/pose";

import {
  bundleResourceIO,
  cameraWithTensors,
} from "@tensorflow/tfjs-react-native";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";

import React, { Component } from "react";

import PictureQuestion from "./PictureQuestion";
import TextQuestion from "./TextQuestion";
import { Next } from "./Next-button";
import NewButton from "./NewButton";
import { FinishedLesson } from "./Finished-lesson";

const LessonThenQuiz = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(0);
  const [renderButton, setRenderButton] = useState(false);
  const [answered, setAnswered] = useState(false);

  const navigation = useNavigation();

  // CAMERA
  console.log(questionNumber);

  if (lessonCompleted === false) {
    return (
      <View>
        <Lesson
          setLessonCompleted={setLessonCompleted}
          setQuestionNumber={setQuestionNumber}
        />
      </View>
    );
  } else if (lessonCompleted === true) {
    // return (
    //   <View>
    //     {/* <Question
    //        allQuestions={allQuestions}
    //        currentQuestionIndex={currentQuestionIndex}
    //      />
    //      <Answer
    //        allQuestions={allQuestions}
    //        currentQuestionIndex={currentQuestionIndex}
    //        setCurrentQuestionIndex={setCurrentQuestionIndex}
    //      /> */}

    //   </View>
    // );

    switch (questionNumber) {
      case 0:
        console.log("hello");
        return (
          <View>
            <PictureQuestion
              questionNumber={questionNumber}
              setRenderButton={setRenderButton}
            />
            {renderButton ? (
              <NewButton
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            ) : null}
          </View>
        );
        break;
      case 1:
        return (
          <View>
            <TextQuestion
              questionNumber={questionNumber}
              setRenderButton={setRenderButton}
            />
            {renderButton ? (
              <NewButton
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            ) : null}
          </View>
        );
        break;
      case 2:
        return !answered ? (
          <View>
            <CameraWithML setAnswered={setAnswered} />
          </View>
        ) : (
          <Button
            title="Finish!"
            onPress={() => navigation.navigate("FinishedLesson")}
          />
        );
    }
  }

  // {
  //     lessonCompleted ? (
  //         <CamTest />
  //     ) : (
  //         <View>
  //             <Lesson setLessonCompleted={setLessonCompleted} />
  //         </View>
  //     );
  // }
};

export { LessonThenQuiz };

{
  // More API functions here:
  // https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image
  // the link to your model provided by Teachable Machine export panel
  // </script> */
}
const styles = StyleSheet.create({
  cameraStart: { marginTop: 20, backgroundColor: "white" },
  topText: { marginTop: 50 },
  image: {
    width: 200,
    height: 200,
  },
  loadingMsg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  resultContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    padding: 20,
    borderRadius: 8,
  },
  resultText: {
    fontSize: 30,
  },
});
