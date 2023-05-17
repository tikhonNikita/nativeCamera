import React from 'react';
import {View} from 'react-native';
import ComposeTextRow from '../CameraXModule';

export function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <View style={{backgroundColor: 'white', width: '80%', height: '80%'}}>
        <ComposeTextRow style={{flex: 1}} />
      </View>
    </View>
  );
}
