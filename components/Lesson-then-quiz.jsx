
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

import { data } from '../utils/Quiz-A-data'
import { Question } from './Questions';
import { Answer } from './Answer-options'
import { Lesson } from './Lesson'
import { Cam } from './Camera-test';
import CamTest from './Camera-testing';

const LessonThenQuiz = () => {

  const allQuestions = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [lessonCompleted, setLessonCompleted] = useState(false)

  if (lessonCompleted === false) {
    return (
      <View>
        <Lesson setLessonCompleted={setLessonCompleted} />
      </View>
    )
  } else if (lessonCompleted === true) {
    return (
      <CamTest />
    )
  }
}
  

export { LessonThenQuiz }