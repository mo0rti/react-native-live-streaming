import React from "react";
import { View, StyleSheet } from "react-native";
import LiveStreamingItem from "./Live-Streaming-Item";
import LiveStreamingManager from "@Components/Live-Streaming-Manager";
import NavigationService from "@Navigations/Navigation-Service";

class LiveStreamingBar extends React.Component {
  constructor(props) {
    super(props);
    this.socket = LiveStreamingManager.getSocket();
  }

  _onStreamingUserPress = (streamingUser) => {
    this.socket.emit("user_joins_streaming", { userId: this.props.user.userId, sessionId: streamingUser.sessionId });
    NavigationService.navigate('Viewer', { user: this.props.user, streamingUser });
  }

  render() {
    let { streamingUsers } = this.props;
    return (
      <View style={styles.container}>
        {
          streamingUsers.map(item => <LiveStreamingItem streamingUser={item} onStreamingUserPress={this._onStreamingUserPress} />)
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