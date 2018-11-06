import React, { Component } from "react";
import NavigationService from "@Navigations/Navigation-Service";
import LiveStreamingManager from "@Components/Live-Streaming-Manager";
import settings from "@Constants/settings";
import Content from "./Content";

class PublisherScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cameraType: 'front',
      mirrorMode: true,
      viewerCount: 43,
      likePanelDimension: { width: undefined, height: undefined },
      likes: [{ id: 1 }]
    };
    /*
    this.state = {
      isPublishing: true,
      user: this.props.navigation.state.params.user
    }
    this.socket = LiveStreamingManager.getSocket();
    */
  }

  _setCameraRef = (vb) => { this.vb = vb }

  _toggleActionCamera = () => {
    let { isPublishing } = this.state;
    if (isPublishing) {
      this.vb.stop();
      this.setState({ isPublishing: !isPublishing }, () => {
        this._streamStopped();
      });
    }
    else {
      this.vb.start();
      this.setState({ isPublishing: !isPublishing });
    }
  }

  _streamStopped = () => {
    this.socket.emit("user_ends_streaming", { userId: this.state.user.userId });
    NavigationService.goBack();
  }

  componentDidMount() {
    //this._generateLikes();
    //this.vb.start();
  }

  componentWillUnmount() {
    if (this.state.isPublishing) {
      this.vb.stop();
      this.socket.emit("user_ends_streaming", { userId: this.state.user.userId });
    }
  }

  _generateLikes = () => {
    let { likes } = this.state;
    setInterval(() => {
      likes.push({
        id: 1
      });

      this.setState({ likes });
    }, 1000);
  }

  _onLikePanelLayout = (event) => {
    if (this.state.likePanelDimension.width) return;
    let { width, height } = event.nativeEvent.layout
    this.setState({ likePanelDimension: { width, height } })
  }

  render() {
    /*
    let { isPublishing, user } = this.state;
    let url = `rtmp://${settings.URL}/live/stream?sign=${user.expireDate}-${user.token}`;
    return (
      <Content
        url={url}
        isPublishing={isPublishing}
        setCameraRef={this._setCameraRef}
        toggleActionCamera={this._toggleActionCamera}
      />
    );*/
    let { cameraType, viewerCount, mirrorMode, likes, likePanelDimension } = this.state;

    console.log(likes);
    return (
      <Content
        onLikePanelLayout={this._onLikePanelLayout}
        likePanelDimension={likePanelDimension}
        likes={likes}
        cameraType={cameraType}
        mirrorMode={mirrorMode}
        viewerCount={viewerCount}
        setCameraRef={this._setCameraRef}
      />
    );
  }
}

export default PublisherScreen;
