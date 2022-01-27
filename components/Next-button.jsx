import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

const Next = ({ allQuestions, currentQuestionIndex, setCurrentQuestionIndex, setCurrentSelectedOption, setCorrectOption, setIsOptionDisabled, showNextButton, setShowNextButton }) => {
    
    const handleNext = () => {
        if (currentQuestionIndex === allQuestions.length+1) {
          //this is last q so show quiz completed
        } else {
          setCurrentQuestionIndex(currentQuestionIndex+1);
          setCurrentSelectedOption(null);
          setCorrectOption(null);
          setIsOptionDisabled(false);
          setShowNextButton(false);
        }
    }
    
    if (showNextButton) {
          return (
            <TouchableOpacity onPress={handleNext}>
              <Text>Next</Text>
            </TouchableOpacity>
          )
        } else {
          return null
        }
    
   
}

export { Next }