import React from 'react';
import {Image, View} from 'react-native';
import {CameraX} from '../Camera/CameraXModule';

export function HomeScreen() {
  const [uri, setUri] = React.useState<string>('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <View style={{backgroundColor: 'white', width: '80%', height: '80%'}}>
        <CameraX
          style={{flex: 1}}
          onPhoto={e => {
            if (e) {
              setUri(e);
            }
          }}
        />
      </View>
      {uri ? <Image source={{uri}} style={{width: 50, height: 50}} /> : null}
    </View>
  );
}
