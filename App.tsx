import React, {useState} from 'react';
import {
  Animated,
  Button,
  Image,
  NativeModules,
  NativeSyntheticEvent,
  requireNativeComponent,
  SafeAreaView,
  Text,
  useColorScheme,
} from 'react-native';
// import {CameraScreen} from './CameraScreen';
// @ts-ignore

import {Colors} from 'react-native/Libraries/NewAppScreen';
import View = Animated.View;
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
const RCTCustomView = requireNativeComponent('ArCamera');

type PhotoResult = {resultUrl: string};
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [hello, setHello] = useState<string | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPhotoTaken = ({
    nativeEvent: {resultUrl},
  }: NativeSyntheticEvent<PhotoResult>) => {
    console.log('REZURL\n', resultUrl);
    setPhotoURL(resultUrl);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
        <RCTCustomView
          style={{width: 150, height: 150}}
          onResultImageExported={onPhotoTaken}
        />

        {photoURL !== null ? (
          <Image source={{uri: photoURL}} style={{width: 200, height: 200}} />
        ) : (
          <View style={{height: 230}} />
        )}
        <Button
          title={'TakePhoto'}
          onPress={async () => {
            NativeModules.ArCamera?.takePhoto();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
