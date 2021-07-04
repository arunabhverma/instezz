import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import { s, vs } from '@size';
import GradientImage from '@components/GradientImage';
import theme from '../../../theme';

const RenderItemStory = ({ item, index }) => {
  if (index === 0) {
    return (
      <TouchableOpacity style={styles.storyUserButton}>
        <View style={styles.storyLinearGradient}>
          <Image
            source={{ uri: item.image }}
            style={styles.storyUserImage}
            resizeMode={'contain'}
          />
          <View style={styles.storyPlusButton}>
            <IoniconsIcons
              name="add-outline"
              color={theme.colors.card}
              size={s(3)}
            />
          </View>
        </View>
        <Text numberOfLines={1} style={styles.storyUserName}>
          Your story
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.storyUserButton}>
        <GradientImage
          imageUri={item.image}
          style={styles.storyUserImage}
          linearGradientStyle={styles.storyLinearGradient}
          whiteBorder={styles.storyWhiteBorder}
        />
        <Text numberOfLines={1} style={styles.storyUserName}>
          {item.userId}
        </Text>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  storyUserButton: {
    marginHorizontal: s(2),
    width: s(20),
    alignItems: 'center',
    height: vs(13),
    overflow: 'hidden',
  },
  storyLinearGradient: {
    width: vs(9.6),
    height: vs(9.6),
    borderRadius: vs(9.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyUserImage: {
    width: vs(8),
    height: vs(8),
    borderRadius: vs(8),
    overflow: 'hidden',
  },
  storyPlusButton: {
    backgroundColor: '#4896f5',
    width: s(5),
    height: s(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(5),
    borderWidth: s(.5),
    borderColor: theme.colors.card,
    position: 'absolute',
    bottom: 6,
    right: 6,
  },
  storyUserName: {
    width: vs(8),
    color: 'black',
    marginTop: s(2),
  },
  storyWhiteBorder: {
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: s(10),
  }
})

export default RenderItemStory;