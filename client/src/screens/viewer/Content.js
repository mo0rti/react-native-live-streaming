import React, { Component } from "react";
import { View, Text } from "react-native";
import { NodePlayerView } from 'react-native-nodemediaclient';
import styles from "./style";

const Content = ({ setCameraRef, url }) =>
  <View style={styles.container}>
    <Text>Viewing ...</Text>
    <NodePlayerView
      style={{ flex: 1 }}
      ref={setCameraRef}
      inputUrl={url}
      scaleMode={"ScaleAspectFill"}
      bufferTime={300}
      maxBufferTime={1000}
      autoplay={true}
    />
  </View>

export default Content;