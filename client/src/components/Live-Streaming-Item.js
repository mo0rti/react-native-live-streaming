import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const LiveStreamingItem = ({ streamingUser, onStreamingUserPress }) =>
  <TouchableOpacity onPress={() => onStreamingUserPress(streamingUser)}>
    <View style={styles.button}>
      <Text>{streamingUser.userName}</Text>
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  }
});

export default LiveStreamingItem;