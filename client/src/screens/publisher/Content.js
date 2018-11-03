import React, { Component } from "react";
import { View, Button } from "react-native";
import { NodeCameraView } from 'react-native-nodemediaclient';
import styles from "./style";

const Content = ({ url, setCameraRef, toggleActionCamera, isPublishing }) =>
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, height: 50 }}>
      </View>
      <NodeCameraView
        style={{ flex: 1 }}
        ref={setCameraRef}
        outputUrl={url}
        camera={{ cameraId: 1, cameraFrontMirror: true }}
        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
        video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
        autopreview={true}
      />

      <Button
        onPress={toggleActionCamera}
        title={(isPublishing) ? 'Stop Publish' : 'Start Publish'}
        color="#841584"
      />
    </View>
  </View>

export default Content;
