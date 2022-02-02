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

import { data } from "../utils/Quiz-A-data";
import { Question } from "./Questions";
import { Answer } from "./Answer-options";
import { Lesson } from "./Lesson";
import { Cam } from "./Camera-test";
import CamTest from "./CameraWithML";
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


const LessonThenQuiz = () => {
  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lessonCompleted, setLessonCompleted] = useState(true);

  // CAMERA

   if (lessonCompleted === false) {
     return (
       <View>
         <Lesson setLessonCompleted={setLessonCompleted} />
       </View>
     );
   } else if (lessonCompleted === true) {
     return (
       <View>
         <Question
           allQuestions={allQuestions}
           currentQuestionIndex={currentQuestionIndex}
         />
         <Answer
           allQuestions={allQuestions}
           currentQuestionIndex={currentQuestionIndex}
           setCurrentQuestionIndex={setCurrentQuestionIndex}
         />
       </View>
     );
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
