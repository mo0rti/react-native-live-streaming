import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import NavigationService from "./Navigation-Service";
import HomeScreen from "@Screens/home";
import PublisherScreen from "@Screens/publisher";
import ViewerScreen from "@Screens/viewer";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Publisher: PublisherScreen,
    Viewer: ViewerScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const TopLevelNavigator = createStackNavigator(
  {
    TopLevel: AppNavigator
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

export default class RootNavigation extends Component {
  render() {
    return (
      <TopLevelNavigator ref={NavigationService.setTopLevelNavigator} />
    );
  }
}