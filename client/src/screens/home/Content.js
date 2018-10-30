import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

const Content = ({ gotoLive }) =>
  <View style={styles.container}>
    <View style={styles.livebar}></View>
    <View style={styles.content}>
      <Text style={styles.title}>Welcome to live streaming{"\n"}If you want to go live press the below button</Text>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.btnLive} onPress={gotoLive}>
        <Text style={styles.liveButtonCaption}>Go Live</Text>
      </TouchableOpacity>
    </View>
  </View>

export default Content;
