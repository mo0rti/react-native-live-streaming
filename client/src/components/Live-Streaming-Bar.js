import React from "react";
import { View, StyleSheet } from "react-native";
import io from 'socket.io-client';
import LiveStreamingItem from "./Live-Streaming-Item";
import NavigationService from "@Navigations/Navigation-Service";
import settings from "@Constants/settings";

class LiveStreamingBar extends React.Component {
  constructor(props) {
    super(props);
  }

  _onStreamingItemPressed = (item) => {
    NavigationService.navigate('Viewer', { item });
  }

  render() {
    let { streamingUsers } = this.props;
    return (
      <View style={styles.container}>
        {
          streamingUsers.map(item => <LiveStreamingItem streamingItem={item} onStreamingItemPressed={this._onStreamingItemPressed} />)
        }
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#f2f5f9'
  }
});

export default LiveStreamingBar;