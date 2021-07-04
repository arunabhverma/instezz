import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientImage = ({ imageUri, style, linearGradientStyle, whiteBorder }) => {
  return (
    <LinearGradient
      colors={['#fb3958', '#e95950', '#fccc63']}
      style={linearGradientStyle}>
      <View style={whiteBorder}>
        <Image source={{ uri: imageUri }} style={style} resizeMode={'contain'} />
      </View>
    </LinearGradient>
  );
};

export default GradientImage;