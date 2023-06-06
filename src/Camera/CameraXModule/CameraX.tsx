import React from 'react';
import {NativeEventEmitter, StyleProp, ViewStyle} from 'react-native';
import {FC, useEffect} from 'react';
import CameraView from './nativeCameraModule';

type Props = {
  style: StyleProp<ViewStyle> | undefined;
  onPhoto: (uri: string) => void;
};

export const CameraX: FC<Props> = ({style, onPhoto}) => {
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter();
    const subscription = eventEmitter.addListener('onPhotoTaken', event => {
      if (event.resultUri) {
        onPhoto(event.resultUri);
      }
    });

    const errorSubscription = eventEmitter.addListener(
      'onPhotoErrorEvent',
      event => {
        if (event.error) {
          console.log(event.error);
        }
      },
    );
    return () => {
      subscription.remove();
      errorSubscription.remove();
    };
  });

  return <CameraView style={style} />;
};
