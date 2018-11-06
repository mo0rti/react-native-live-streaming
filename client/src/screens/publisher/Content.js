import React, { Component } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { NodeCameraView } from 'react-native-nodemediaclient';
import { RNCamera } from "react-native-camera";
import IconText from "@Components/Icon-Text";
import Like from "@Components/Like";
import styles from "./style";

const renderLikes = (likes, parentViewDimension) => likes.map((t, index) => <Like key={index} parentViewDimension={parentViewDimension} />);

const Content = ({ url, setCameraRef, cameraType, mirrorMode, toggleActionCamera, isPublishing, viewerCount, likes, onLikePanelLayout, likePanelDimension }) =>
  <View style={styles.container}>
    <RNCamera
      style={styles.camera}
      ref={setCameraRef}
      type={cameraType}
      mirrorImage={mirrorMode}
    />

    <View style={{
      flex: 1, position: 'absolute', width: '100%',
      left: 0,
      top: 0,
      backgroundColor: 'transparent',
      height: "20%"
    }}
    >
      <View style={{ flex: 0.4, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ backgroundColor: 'white', height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={toggleActionCamera}>
            <IconText
              iconName="controller-stop"
              title="Stop"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'red', width: "80%", height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>ON AIR</Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'black', height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
            <IconText
              iconName="eye"
              textColor="white"
              title={viewerCount}
              size={20}
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 0.6, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
      </View>

    </View>

    <View style={{
      flex: 1, position: 'absolute', width: '100%',
      left: 0,
      bottom: 0,
      opacity: 0.5,
      height: '40%', flexDirection: 'row'
    }}
    >
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}>

      </View>
      <View style={{ width: 100, height: '100%', backgroundColor: 'skyblue', flexDirection: 'column-reverse', alignItems: 'center' }} onLayout={onLikePanelLayout}>
        {renderLikes(likes, likePanelDimension)}
      </View>
    </View>

    {/*     <NodeCameraView
      style={styles.camera}
      ref={setCameraRef}
      outputUrl={url}
      camera={{ cameraId: 1, cameraFrontMirror: true }}
      audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
      video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
      autopreview={true}
    />
 */}
  </View>

export default Content;
