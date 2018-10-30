import React, { Component } from "react";
import { View, Text } from "react-native";
import Camera from "react-native-camera";
import styles from "./style";

const Content = ({ }) =>
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, height: 50 }}>
      </View>
      <Camera style={{ flex: 1 }}
        ref={cam => this.camera = cam}
        aspect={Camera.constants.Aspect.fill}>
      </Camera>
    </View>
  </View>

export default Content;