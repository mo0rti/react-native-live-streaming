import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LiveStreamingBar from "@Components/Live-Streaming-Bar";
import styles from "./style";

const Content = ({ gotoLive, streamingUsers, user }) =>
  <View style={styles.container}>
    <LiveStreamingBar streamingUsers={streamingUsers} user={user} />
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
