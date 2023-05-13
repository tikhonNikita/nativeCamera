// import React, {useEffect, useRef} from 'react';
// import {Button, StyleSheet, Text, View} from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

// export const CameraScreen = () => {
//   const camera = useRef<Camera>(null);

//   useEffect(() => {
//     Camera.requestCameraPermission();
//   }, []);

//   const devices = useCameraDevices();
//   const device = devices.back;

//   if (!device) {
//     return <Text>Loading</Text>;
//   }

//   /*
//     takePhoto
//     device
//     cakera view
//   */

//   return (
//     <View style={{flex: 1}}>
//       <Camera
//         style={StyleSheet.absoluteFill}
//         isActive={true}
//         device={device}
//         ref={camera}
//         photo
//       />

//       <Button
//         onPress={() => {
//           camera.current?.takePhoto().then(result => {
//             console.log(result);
//           });
//         }}
//         title="Take photo"
//       />
//     </View>
//   );
// };
