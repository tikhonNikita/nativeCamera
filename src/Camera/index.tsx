import {Platform, StyleProp, ViewStyle} from 'react-native';
import {CameraView} from './CameraModule';
import {CameraX} from './CameraXModule';
import React, {FC} from 'react';

export type Props = {
  style?: StyleProp<ViewStyle> | undefined;
  onPhoto: (uri: string) => void;
  onError: (reason: string) => void;
};

const _NativeCamera: FC<Props> = ({style, onPhoto, onError}) => {
  if (Platform.OS === 'ios') {
    return <CameraView style={style} onPhoto={onPhoto} onError={onError} />;
  } else {
    return <CameraX style={style} onPhoto={onPhoto} onError={onError} />;
  }
};

export const NativeCamera = React.memo(_NativeCamera);
