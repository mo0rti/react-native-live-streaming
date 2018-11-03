import React, { Component } from "react";
import Content from "./Content";
import SocketIOClient from 'socket.io-client';
import settings from "@Constants/settings";
import NavigationService from "@Navigations/Navigation-Service";
import LiveStreamingManager from "@Components/Live-Streaming-Manager";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user,
      streamingUsers: []
    };
    this.socket = SocketIOClient("http://192.168.1.14:4000");
    LiveStreamingManager.setSocket(this.socket);
  }

  componentDidMount() {
    this._getOnlineStreams();

    this.socket.on('*', () => {
      console.log("all");
    });
  }

  _getOnlineStreams() {
    fetch(`${settings.URL}/streaming/getStreamingUsers`)
      .then(x => x.json())
      .then(streamingUsers => {
        this.setState({ streamingUsers });
      });
  }

  _gotoLive = () => {
    this.socket.emit("user_starts_streaming", { userId: this.state.user.userId });
    NavigationService.navigate('Publisher', { user: this.state.user });
  }

  render() {
    let { user, streamingUsers } = this.state;
    return (
      <Content gotoLive={this._gotoLive} streamingUsers={streamingUsers} user={user} />
    );
  }
}

export default HomeScreen;