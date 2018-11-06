import React, { Component } from "react";
import { StyleSheet, Animated, TouchableOpacity, Easing } from "react-native";
import Icon from "@Components/Icon-Entypo";

class Like extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yPosition: new Animated.Value(0),
      opacity: new Animated.Value(1),
      xPosition: new Animated.Value(0)
    }
  }

  _startAnimation = () => {

    console.log(this.props.parentViewDimension);
    let parentViewWidth = Math.floor(this.props.parentViewDimension.width);
    console.log(parentViewWidth);
    let xPosition = Math.floor((Math.random() * parentViewWidth) + 1);
    console.log(xPosition);

    //Animated.loop()

    Animated.parallel(
      [
        Animated.timing(this.state.yPosition, {
          toValue: -200,
          duration: 3000,
          useNativeDriver: true
        }),
        Animated.timing(this.state.xPosition, {
          toValue: this.props.parentViewDimension.width,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          delay: 200,
          useNativeDriver: true
        }),
        Animated.timing(this.state.opacity, {
          toValue: 0.2,
          duration: 3000,
          useNativeDriver: true
        }).start()
      ]
    ).start();
  }

  componentDidMount() {
    setTimeout(this._startAnimation, 500);
  }

  render() {

    let animationStyle = {
      //transform: translate(this.xPosition,this.state.yPosition);  [{ translateY: this.state.yPosition, translateX: this.state.xPosition }],
      transform: [{ translateX: this.state.xPosition }, { translateY: this.state.yPosition }],
      opacity: this.state.opacity
    };

    return (
      <Animated.View style={[styles.like, animationStyle]}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            name="heart-outlined"
            color={"white"}
            size={32}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  like: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 25,
  }
});

export default Like;
