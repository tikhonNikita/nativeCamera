import React from 'react';
import {NativeModules, NativeSyntheticEvent} from 'react-native';
import {StyleProp, ViewStyle} from 'react-native';
import RCTCustomView from './cameraView';

export type PhotoResult = {resultUrl: string};
export type PhotoResultError = {reason: string};

interface Props {
  style: StyleProp<ViewStyle> | undefined;
  onPhotoTaken?: (event: NativeSyntheticEvent<PhotoResult>) => void;
  onImageCaptureError?: (event: NativeSyntheticEvent<PhotoResultError>) => void;
}

type TakePhoto = {
  takePhoto: () => void;
};

export const CameraView: React.FC<Props> & TakePhoto = ({
  style,
  onPhotoTaken,
  onImageCaptureError,
}: Props) => (
  <RCTCustomView
    style={style}
    onResultImageExported={onPhotoTaken}
    onImageCaptureError={onImageCaptureError}
  />
);

CameraView.takePhoto = () => {
  NativeModules.ArCamera?.takePhoto();
};
