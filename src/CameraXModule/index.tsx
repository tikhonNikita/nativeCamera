import {requireNativeComponent, StyleProp, ViewStyle} from 'react-native';

type BaseView = {
  style: StyleProp<ViewStyle> | undefined;
};

const ComposeTextRow = requireNativeComponent<BaseView>('ComposeRowView');
export default ComposeTextRow;
