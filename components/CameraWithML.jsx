import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { data } from "../utils/Quiz-A-data";
import { Question } from "./Questions";
import { Answer } from "./Answer-options";
import { Lesson } from "./Lesson";
import * as tf from "@tensorflow/tfjs";

import {
  bundleResourceIO,
  cameraWithTensors,
} from "@tensorflow/tfjs-react-native";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";

import React, { Component } from "react";

const TensorCamera = cameraWithTensors(Camera);

const CAM_PREVIEW_WIDTH = Dimensions.get("window").width;
const CAM_PREVIEW_HEIGHT = CAM_PREVIEW_WIDTH / (9 / 16);

const OUTPUT_TENSOR_WIDTH = 272;
const OUTPUT_TENSOR_HEIGHT = 480;

const CameraWithML = ({setAnswered, setShowNextButton}) => {
  const [lessonCompleted, setLessonCompleted] = useState(true);

  // CAMERA

  const [tfReady, setTfReady] = useState(false);
  const [model, setModel] = useState();
  const [up, setUp] = useState(null);

  const rafId = useRef(null);

  useEffect(() => {
    async function prepare() {
      rafId.current = null;
      await Camera.requestCameraPermissionsAsync();
      await tf.ready();

      const modelJson = require("./model/model.json");
      const modelWeights = require("./model/weights.bin");

      const model = await tf.loadLayersModel(
        bundleResourceIO(modelJson, modelWeights)
      );
      setModel(model);

      setTfReady(true);

      console.log("ready!");
    }

    prepare();
  }, []);

  useEffect(() => {
    return () => {
      if (rafId.current != null && rafId.current !== 0) {
        cancelAnimationFrame(rafId.current);
        rafId.current = 0;
      }
    };
  }, []);

  const handleCameraStream = async (images, updatePreview, gl) => {
    console.log("camera ready!");

    let counter = 0;


    const loop = async () => {
      if (rafId.current === 0) {
        return;
      }

      tf.tidy(() => {
        const imageTensor = images.next().value.expandDims(0).div(127.5).sub(1);

        const f =
          (OUTPUT_TENSOR_HEIGHT - OUTPUT_TENSOR_WIDTH) /
          2 /
          OUTPUT_TENSOR_HEIGHT;

        const cropped = tf.image.cropAndResize(
          imageTensor,
          tf.tensor2d([f, 0, 1 - f, 1], [1, 4]),
          [0],
          [224, 224]
        );

        const result = model.predict(cropped);

        const logits = result.dataSync();



        if (logits) {
          setUp(logits[0] > logits[1]);
          if (logits[1] > logits[0]) {
            counter++;
            console.log("Lettter A");
          } else {
            counter--;
            console.log("Default");
          }
        }

        console.log(counter)

        if (counter < -5) counter = 0;

        if (counter === 10) {
          counter = 0;
          console.log("Correct!")
          setAnswered(true)
          setShowNextButton(true)
        }
      });

      rafId.current = requestAnimationFrame(loop);
    };

    loop();
  };

  if (!tfReady) {
    return (
      <View style={styles.loadingMsg}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TensorCamera
          style={styles.camera}
          autorender={true}
          type={Camera.Constants.Type.front}
          resizeWidth={OUTPUT_TENSOR_WIDTH}
          resizeHeight={OUTPUT_TENSOR_HEIGHT}
          resizeDepth={3}
          onReady={handleCameraStream}
        />
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{up ? "UP!" : "DOWN!"}</Text>
        </View>
      </View>
    );
  }
};

export { CameraWithML };

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
  container: {
    position: "relative",
    width: CAM_PREVIEW_HEIGHT,
    height: CAM_PREVIEW_HEIGHT,
    marginTop: Dimensions.get("window").height / 2 - CAM_PREVIEW_HEIGHT / 2,
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
