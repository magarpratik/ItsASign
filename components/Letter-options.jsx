import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

const LetterOptions = ({ isCorrect, allQuestions, currentQuestionIndex }) => {

    return (
        <Text>
            <Image style={{width:50, height:50}} source={require('../assets/A.png')} />
            {allQuestions[currentQuestionIndex]?.options.map(option => {
                {console.log(option)}
                return (
                    <TouchableOpacity key={option}>
                        <Button title={option} onPress={() => isCorrect(option)} />
                    </TouchableOpacity>
                )
            })}
          </Text>
    )
}

export { LetterOptions }