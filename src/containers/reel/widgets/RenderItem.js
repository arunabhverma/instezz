import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Text,
} from 'react-native';
import Video from 'react-native-video';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import count from '@components/Count';
import { s, vs } from '@size';
import theme from '@theme';


const RenderItem = (props) => {

  const onPress = () => {
    props.fadeIn()
    props.setState((prev) => ({ ...prev, muted: !props.state.muted }))
  }

  const onLongPress = () => {
    props.setState((prev) => ({ ...prev, paused: !props.state.paused, longPress: true }))
  }

  const onPressOut = () => {
    props.setState((prev) => ({ ...prev, paused: false, longPress: false }))
  }

  const Icons = ({ iconName, iconSize, value }) => {
    return (
      <View>
        <IoniconsIcons
          name={iconName}
          color={theme.colors.card}
          size={s(iconSize)}
        />
        {value
          ? <Text style={{ color: theme.colors.card }}>{count(value)}</Text>
          : null
        }

      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      onPressOut={onPressOut}
    >
      <View style={styles.center}>
        <Animated.View style={[styles.volumeIcon, {
          opacity: props.fadeAnim
        }]}>
          <IoniconsIcons
            name={props.state.muted ? "volume-mute" : "volume-high"}
            color={theme.colors.card}
            size={s(6)}
          />
        </Animated.View>
        <Video
          style={{ width: s(100), height: vs(100) - props.tabBarHeight }}
          source={props.item.video}
          paused={
            props.isFocused
              ? props.state.activeIndex === props.index
                ? props.state.paused
                : true
              : true}
          resizeMode={'cover'}
          repeat={true}
          muted={props.state.muted}
        />
        <Animated.View style={[styles.sidePanel, { opacity: props.headerAnim }]}>
          <Icons iconName={'heart-outline'} iconSize={7} value={props.item.likeCount} />
          <Icons iconName={'chatbubble-outline'} iconSize={7} value={props.item.commentCount} />
          <Icons iconName={'paper-plane-outline'} iconSize={7} />
          <Icons iconName={'ellipsis-vertical'} iconSize={6} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  volumeIcon: {
    backgroundColor: 'rgba(0, 0, 0,0.7)',
    width: s(15),
    height: s(15),
    borderRadius: s(15),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  sidePanel: {
    position: 'absolute',
    height: vs(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 50,
    right: 10
  }
})

export default RenderItem;