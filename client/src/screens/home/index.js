import React, { Component } from "react";
import Content from "./Content";
import NavigationService from "@Navigations/Navigation-Service";

class HomeScreen extends Component {

  _gotoLive =() => {
    NavigationService.navigate('Publisher');
  }

  render() {
    return (
      <Content gotoLive={this._gotoLive} />
    );
  }
}

export default HomeScreen;