import {
  Button,
  Image,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CameraView, PhotoResult} from '../CameraModule';

export function HomeScreen(): JSX.Element {
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
