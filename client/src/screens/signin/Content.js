import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";

const Content = ({ signin, userName, onChangeText }) =>
  <View style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Press SignIn to generate a user{"\n"}Enter a user name for yourself !!!</Text>
      <TextInput
        style={styles.txtUsername}
        onChangeText={onChangeText} value={userName} placeholder="Your user name"
      />
    </View>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.btnSignin} onPress={signin}>
        <Text style={styles.singinCaption}>Sign In</Text>
      </TouchableOpacity>
    </View>
  </View>

export default Content;
