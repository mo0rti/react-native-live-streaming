import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const LiveStreamingItem = ({ streamingItem, onStreamingItemPressed }) =>
  <TouchableOpacity onPress={() => onStreamingItemPressed(streamingItem)}>
    <View style={styles.button}>
      <Text>{streamingItem.username}</Text>
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