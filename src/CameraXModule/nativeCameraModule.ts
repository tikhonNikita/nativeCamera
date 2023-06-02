import {requireNativeComponent, StyleProp, ViewStyle} from 'react-native';

type BaseView = {
  style: StyleProp<ViewStyle> | undefined;
};

const CameraView = requireNativeComponent<BaseView>('CameraView');
export default CameraView;
