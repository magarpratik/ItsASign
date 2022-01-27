
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

import { data } from '../utils/Quiz-A-data'
import { Question } from './Questions';
import { Answer } from './Answer-options'
import { Lesson } from './Lesson'

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
      <View>
        <Question allQuestions={allQuestions} currentQuestionIndex={currentQuestionIndex} />
        <Answer allQuestions={allQuestions} currentQuestionIndex={currentQuestionIndex} setCurrentQuestionIndex={setCurrentQuestionIndex} />
      </View>
    )
  }
}
  

export { LessonThenQuiz }