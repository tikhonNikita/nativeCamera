import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeCamera} from '../Camera';

export function HomeScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [photoURL, setPhotoURL] = useState<string | null>(null);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPhotoTaken = (resultUrl: string) => {
    setPhotoURL(resultUrl);
  };

  const onImageCaptureError = (reason: string) =>
    console.log('Error\n', reason);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        {photoURL !== null ? (
          <Image source={{uri: photoURL}} style={styles.cameraResult} />
        ) : (
          <NativeCamera
            onPhoto={onPhotoTaken}
            onError={onImageCaptureError}
            style={styles.camera}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'flex-start'},
  camera: {width: '100%', height: '100%'},
  cameraResult: {width: 300, height: 300, marginTop: 16, borderRadius: 16},
  placeholder: {height: 310},
});
