// import { useState } from 'react';
// import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

// const Ca = () => {
//     return (
//         <Text>THIS IS A CAMERA</Text>
//     )
// }



import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';

const Cam = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View>
        <Camera style={{ flex: 10 }} type={type}>
          <View
          style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
          }}>
            <TouchableOpacity
            style={{
                flex:0.1,
                alignSelf: "flex-end",
                alignItems: "center",
            }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text
              style={{
                fontSize: 18,
                marginBottom: 10,
                color: "white",
              }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
}

export { Cam }




// import React, { useRef, useEffect, useState } from 'react'

// const Cam2 = () => {
//   const videoRef = useRef(null)
//   const photoRef = useRef(null)

//   const [hasPhoto, setHasPhoto] = useState(false)

//   const getVideo = () => {
//     navigator.mediaDevices
//       .getUserMedia({ video: { width: 1920, height: 1080 } })
//       .then(stream => {
//         const video = videoRef.current
//         video.srcObject = stream
//         video.play()
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }

//   const takePhoto = () => {
//     const width = 414
//     const height = width / (16 / 9)

//     const video = videoRef.current
//     const photo = photoRef.current

//     photo.width = width
//     photo.height = height

//     const ctx = photo.getContext('2d')
//     ctx.drawImage(video, 0, 0, width, height)
//     setHasPhoto(true)
//   }

//   const closePhoto = () => {
//     const photo = photoRef.current
//     const ctx = photo.getContext('2d')
//     ctx.clearRect(0, 0, photo.width, photo.height)
//     setHasPhoto(false)
//   }

//   useEffect(() => {
//     getVideo()
//   }, [videoRef])

//   return (
//     <div>
//         <Text>CAM</Text>
//       <div className='camera'>
//         <video ref={videoRef} />
//         <button onClick={takePhoto}>SNAP!</button>
//       </div>
//       <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
//         <canvas ref={photoRef} />
//         <button onClick={closePhoto}>CLOSE!</button>
//       </div>

//     </div>
//   )
// }

// export { Cam2 }