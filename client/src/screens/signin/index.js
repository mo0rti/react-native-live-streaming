import React, { Component } from "react";
import Content from "./Content";
import NavigationService from "@Navigations/Navigation-Service";
import settings from "@Constants/settings";

class SignInScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { userName: 'morteza' };
  }

  _signin = () => {
    fetch(`http://${settings.URL}:${settings.PORT}/users/signin`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: this.state.userName })
    })
      .then(response => response.json())
      .then(response => {
        NavigationService.navigate('Home', { user: response });
      });
  }

  _onChangeText = (text) => {
    this.setState({ userName: text });
  }

  render() {
    let { userName } = this.state;
    return (
      <Content signin={this._signin} userName={userName} onChangeText={this._onChangeText} />
    );
  }
}

export default SignInScreen;