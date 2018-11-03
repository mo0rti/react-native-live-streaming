import React from "react";
import { View, StyleSheet } from "react-native";
import io from 'socket.io-client';
import LiveStreamingItem from "./Live-Streaming-Item";
import NavigationService from "@Navigations/Navigation-Service";
import settings from "@Constants/settings";

class LiveStreamingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { streamingUsers: [] };
    this.socket = io(`http://${settings.URL}`);
  }

  _onStreamingItemPressed = (item) => {
    NavigationService.navigate('Viewer', { item });
  }

  _getOnlineStreams() {
    fetch(`${settings.URL}/streaming/getStreamingUsers`)
      .then(x => x.json())
      .then(streamingUsers => {
        this.setState({ streamingUsers });
      });
  }

  componentDidMount() {

    this.socket.on("EVENTS.STREAM_STARTED", (data) => {
      console.log(data);

      /*this.setState(prevState => {
        const [...liveStreams] = prevState.liveStreams;
        const index = liveStreams.findIndex(x => x.userId === userId);
        if (index === -1) {
          liveStreams.push({ userId, username, sign, expireDate });
        }
        return { liveStreams };
      });*/
    });

    this.socket.on("EVENTS.STREAM_ENDED", (data) => {
      console.log(data);
      /*
      this.setState(prevState => {
        const [...liveStreams] = prevState.liveStreams;
        const index = liveStreams.findIndex(x => x.userId === userId);
        if (index !== -1) {
          liveStreams.splice(index, 1);
        }
        return { liveStreams };
      });*/
    });

    this._getOnlineStreams();
  }

  render() {
    let { streamingUsers } = this.state;
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