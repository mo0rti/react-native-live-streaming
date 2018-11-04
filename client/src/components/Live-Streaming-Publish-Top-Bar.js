import React from "react";
import { View, StyleSheet } from "react-native";
import LiveStreamingItem from "./Live-Streaming-Item";
import LiveStreamingManager from "@Components/Live-Streaming-Manager";
import NavigationService from "@Navigations/Navigation-Service";

class LiveStreamingAudienceBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1, position: 'absolute', width: '100%',
          left: 0,
          top: 0,
          opacity: 0.5,
          height: "20%"
        }}
        >
          <View style={{ flex: 0.4, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
          </View>

          <View style={{ flex: 0.6, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
          </View>

        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  buttons: {
    flex: 1,
    height: 50,
    flexDirection: 'row',

  }
});

export default LiveStreamingAudienceBar;
