
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TrackPlayer from 'react-native-track-player';
import { setUpPlayer, addTrack } from '../musicPlayerService';



function App(): React.JSX.Element {

  const [isPlayerReady, setIsPlayerReady] = useState(false)
  
  async function setUp () {
    let isSetup = await setUpPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>I am super hero..</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default App;
