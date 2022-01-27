import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';


const Lesson = ({ setLessonCompleted }) => {

    const completeLesson = () => {
        setLessonCompleted(true)
    }

    return (
        <View>
            <Text>Today you will be learning how to sign the letter 'A'.</Text>
            <Image style={{width:50, height:50}} source={require('../assets/A.png')} />
            <Button title="Next" onPress={completeLesson} />
        </View>
    )


}

export { Lesson }
