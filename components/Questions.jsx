import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

const Question = ({ allQuestions, currentQuestionIndex }) => {
    
    return (
        <View>
          <Text>
            {allQuestions[currentQuestionIndex]?.question}
          </Text>
        </View>
      )


}

export { Question }