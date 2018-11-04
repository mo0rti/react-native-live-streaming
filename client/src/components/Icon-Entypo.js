import React from "react";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default ({ name, ...props }) => (
  <Icon
    name={name}
    {...props}
  />
);