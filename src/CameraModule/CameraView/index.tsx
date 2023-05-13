import React from 'react';
import {
  NativeModules,
  NativeSyntheticEvent,
  requireNativeComponent,
} from 'react-native';
import {StyleProp} from 'react-native';
import {ViewStyle} from 'react-native';

interface NativeCamera {
  style: StyleProp<ViewStyle> | undefined;
  onResultImageExported?: (event: any) => void;
}

const RCTCustomView = requireNativeComponent<NativeCamera>('ArCamera');

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
