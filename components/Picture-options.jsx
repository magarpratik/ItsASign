import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

const PictureOptions = ({ isCorrect }) => {
    return (
        <Text>
              <TouchableOpacity onPress={() => isCorrect('picA')} key="picA">
                  <Image style={{width:50, height:50}} source={require('../assets/A.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => isCorrect('picB')} key="picB">
                  <Image style={{width:50, height:50}} source={require('../assets/B.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => isCorrect('picC')} key="picC">
                  <Image style={{width:50, height:50}} source={require('../assets/C.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => isCorrect('picD')} key="picD">
                  <Image style={{width:50, height:50}} source={require('../assets/D.png')} />
              </TouchableOpacity>
          </Text>
    )
}

export { PictureOptions }