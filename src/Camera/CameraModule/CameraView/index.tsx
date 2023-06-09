import React from 'react';
import {
  Button,
  NativeModules,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';
import RCTCustomView from './cameraView';

export type PhotoResult = {resultUrl: string};
export type PhotoResultError = {reason: string};

export type CameraViewProps = {
  style?: StyleProp<ViewStyle> | undefined;
  onPhoto: (uri: string) => void;
  onError: (reason: string) => void;
};

type TakePhoto = {
  takePhoto: () => void;
};

export const CameraView: React.FC<CameraViewProps> & TakePhoto = ({
  style,
  onPhoto,
  onError,
}: CameraViewProps) => {
  const onResultImageExported = (event: NativeSyntheticEvent<PhotoResult>) => {
    onPhoto(event.nativeEvent.resultUrl);
  };

  const onErrorEvent = (event: NativeSyntheticEvent<PhotoResultError>) => {
    onError(event.nativeEvent.reason);
  };

  return (
    <View style={style}>
      <RCTCustomView
        style={styles.container}
        onResultImageExported={onResultImageExported}
        onImageCaptureError={onErrorEvent}
      />
      <Button title={'TakePhoto'} onPress={CameraView.takePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

CameraView.takePhoto = () => {
  NativeModules.ArCamera?.takePhoto();
};
