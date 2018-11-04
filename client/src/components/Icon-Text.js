import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "@Components/Icon-Entypo";

const IconText = ({ title, iconName, textColor, size }) =>
  <View style={styles.container}>
    <Icon
      name={iconName}
      color={(textColor) ? textColor : "black"}
      size={(size) ? size : 25}
    />
    <Text style={{ ...styles.title, color: (textColor) ? textColor : "black" }}>{title}</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    paddingLeft: 5
  }
});

export default IconText;