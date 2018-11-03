import React, { Component } from "react";
import Content from "./Content";
import SocketIOClient  from 'socket.io-client';
import settings from "@Constants/settings";
import NavigationService from "@Navigations/Navigation-Service";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { user: this.props.navigation.state.params.user };
    this.socket = SocketIOClient(`http://${settings.URL}`);
    this.socket.connect();
    console.log(this.socket.connected);
  }

  componentDidMount() {
    this.socket.on('connection', () => {
      console.log(this.socket.id);
    });
  }

  _gotoLive = () => {
    this.socket.emit("user_starts_streaming", { userId: this.state.user.userId });
    //NavigationService.navigate('Publisher', { user: this.state.user });
  }

  render() {
    let { user } = this.state;
    return (
      <Content gotoLive={this._gotoLive} user={user} />
    );
  }
}

export default HomeScreen;