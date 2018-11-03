import React, { Component } from "react";
import Content from "./Content";

class ViewerScreen extends Component {

  _setCameraRef = (vp) => { this.vp = vp }

  componentWillUnmount() {
    this.vp.stop();
  }

  render() {
    let { streamingUser } = this.props;
    let url = "rtmp://192.168.1.14/live/stream?sign=1503458721-80c1d1ad2e0c2ab63eebb50eed64201a";

    return (
      <Content setCameraRef={this._setCameraRef} url={url} />
    );
  }
}

export default ViewerScreen;