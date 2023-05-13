import {requireNativeComponent, StyleProp, ViewStyle} from 'react-native';

interface NativeCamera {
  style: StyleProp<ViewStyle> | undefined;
  onResultImageExported?: (event: any) => void;
}

const RCTCustomView = requireNativeComponent<NativeCamera>('ArCamera');

export default RCTCustomView;
