import { useState } from 'react';
import { Button, StyleSheet, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';

const Camera = () => {
    return (
        <Text>THIS IS A CAMERA</Text>
    )
}

export { Camera }


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
// import { Camera } from 'expo-camera';

// const Cam = () => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View>
//         <View>
//          <Camera type={type} style={{ flex: 1 }} />
//         </View>
//         <Button title="Flip"
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//          </Button>
//     </View>
//   );
// }




// export { Cam }