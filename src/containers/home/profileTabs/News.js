import React, { useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from 'react-native-video'

const News = () => {
  const videoRef = useRef();
  return (
    // <Video
    //   source={{ uri: 'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4' }}

    //   // ref={(ref) => {
    //   //   this.player = ref
    //   // }}                                      // Store reference
    //   // onBuffer={this.onBuffer}                // Callback when remote video is buffering
    //   // onError={this.videoError}               // Callback when video cannot be loaded
    //   style={styles.backgroundVideo} />
    <Video
      ref={videoRef}
      source={{
        uri:
          'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
      }}
      style={{ width: 300, height: 300, backgroundColor: 'red' }}
      resizeMode={'cover'}
      controls={true}
      paused={false}
    // muted
    />
  );
}
var styles = StyleSheet.create({
  backgroundVideo: {

    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default News;