import React, { Component } from "react";
import settings from "@Constants/settings";
import Content from "./Content";

class ViewerScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user,
      streamingUser: this.props.navigation.state.params.streamingUser
    }
  }

  _setCameraRef = (vp) => { this.vp = vp }

  componentDidUpdate() {
    this.vp.stop();
    this.vp.start();
  }

  componentWillUnmount() {
    this.socket.emit("user_leaves_streaming", { userId: this.props.user.userId, sessionId: streamingUser.sessionId });
    this.vp.stop();
  }

  render() {
    let { streamingUser } = this.state;
    let url = `rtmp://${settings.URL}/live/stream?sign=${streamingUser.expireDate}-${streamingUser.token}`;
    return (
      <Content
        setCameraRef={this._setCameraRef}
        url={url}
      />
    );
  }
}

export default ViewerScreen;