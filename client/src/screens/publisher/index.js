import React, { Component } from "react";
import Content from "./Content";
import NavigationService from "@Navigations/Navigation-Service";
import LiveStreamingManager from "@Components/Live-Streaming-Manager";

class PublisherScreen extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.navigation);
    this.state = {
      isPublishing: true,
      user: this.props.navigation.state.params.user
    }
    this.socket = LiveStreamingManager.getSocket();
  }

  _setCameraRef = (vb) => { this.vb = vb }

  _toggleActionCamera = () => {
    let { isPublishing } = this.state;
    if (isPublishing) {
      this.vb.stop();
      this._streamStopped();
    }
    else
      this.vb.start();
    this.setState({ isPublishing: !isPublishing });
  }

  _streamStopped = () => {
    this.socket.emit("user_ends_streaming", { userId: this.state.user.userId });
    NavigationService.goBack();
  }

  componentDidMount() {
    this.vb.start();
  }

  componentWillUnmount() {    
    this.vb.stop();
  }

  render() {
    let { isPublishing, user } = this.state;
    let url = `rtmp://192.168.1.14/live/stream?sign=${user.expireDate}-${user.token}`;
    return (
      <Content
        url={url}
        isPublishing={isPublishing}
        setCameraRef={this._setCameraRef}
        toggleActionCamera={this._toggleActionCamera}
      />
    );
  }
}

export default PublisherScreen;