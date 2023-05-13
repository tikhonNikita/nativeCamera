import React, {useState} from 'react';
import {
  Animated,
  Button,
  Image,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
// import {CameraScreen} from './CameraScreen';
// @ts-ignore

import {Colors} from 'react-native/Libraries/NewAppScreen';
import View = Animated.View;
import {CameraView} from './src/CameraModule';
import type {PhotoResult} from './src/CameraModule';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [photoURL, setPhotoURL] = useState<string | null>(null);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPhotoTaken = ({
    nativeEvent: {resultUrl},
  }: NativeSyntheticEvent<PhotoResult>) => {
    setPhotoURL(resultUrl);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <CameraView onPhotoTaken={onPhotoTaken} style={styles.camera} />

        {photoURL !== null ? (
          <Image source={{uri: photoURL}} style={styles.cameraResult} />
        ) : (
          <View style={styles.placeholder} />
        )}
        <Button title={'TakePhoto'} onPress={() => CameraView.takePhoto()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},
  camera: {width: 200, height: 200},
  cameraResult: {width: 300, height: 300, marginTop: 16, borderRadius: 16},
  placeholder: {height: 310},
});

export default App;
