import React from 'react';
import {NativeModules, NativeSyntheticEvent} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';
import RCTCustomView from './cameraView';

export type PhotoResult = {resultUrl: string};

interface Props {
  style: StyleProp<ViewStyle> | undefined;
  onPhotoTaken?: (event: NativeSyntheticEvent<PhotoResult>) => void;
}

type TakePhoto = {
  takePhoto: () => void;
};

export const CameraView: React.FC<Props> & TakePhoto = ({
  style,
  onPhotoTaken,
}: Props) => (
  <RCTCustomView style={style} onResultImageExported={onPhotoTaken} />
);

CameraView.takePhoto = () => {
  NativeModules.ArCamera?.takePhoto();
};
