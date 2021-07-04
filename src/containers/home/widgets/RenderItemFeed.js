import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import { s, vs } from '@size';
import moment from 'moment';
import GradientImage from '@components/GradientImage';
import theme from '@theme';
import DoubleTap from '@components/DoubleTap';

const RenderItemFeed = (props) => {
  const { item, index } = props.props;
  const { state, setState, navigation } = props;

  const Comment = () => {
    return (<Text style={{ color: theme.colors.genderBorder }}>... more</Text>);
  };

  const randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
  }

  const FeedHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push('AnothersProfile', { item })}
        style={styles.feedHeader}
        activeOpacity={1}
      >
        <View style={styles.feedUser}>
          <GradientImage
            imageUri={item.image}
            style={styles.feedUserImage}
            linearGradientStyle={styles.feedLinearGradient}
            whiteBorder={styles.feedWhiteBorder}
          />
          <Text style={{ marginLeft: s(2) }}>{item.userId}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => alert(`User ${item.userId}'s feed`)}
          style={styles.verticalDots}
        >
          <IoniconsIcons
            name="ellipsis-vertical"
            color={theme.colors.text}
            size={s(5)}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  const FeedImage = () => {
    const handleDoubleTap = () => {
      setState((prev) => ({ ...prev, like: !state.like }))
    }
    return (
      <DoubleTap
        onDoubleTap={handleDoubleTap}
      >
        <ImageBackground
          source={{ uri: item.bgImage }}
          style={{
            width: s(100),
            height: s(item.randomHeight),
            justifyContent: 'center',
            alignItems: 'center'
          }}
          resizeMode={'cover'}>
          <IoniconsIcons
            name="heart"
            color={theme.colors.card}
            style={[styles.feedImageHearts, { opacity: state.like ? 1 : 0 }]}
            size={s(25)}
          />
        </ImageBackground>
      </DoubleTap>
    );
  }

  const FeedFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: s(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: s(30),
            justifyContent: 'space-between',
          }}>
          <IoniconsIcons
            name={state.like
              ? "heart"
              : "heart-outline"}
            color={state.like
              ? theme.colors.instaRed
              : theme.colors.text}
            size={s(6)}
          />
          <IoniconsIcons
            name="chatbubble-outline"
            color={theme.colors.text}
            size={s(6)}
          />
          <IoniconsIcons
            name="paper-plane-outline"
            color={theme.colors.text}
            size={s(6)}
          />
        </View>
        <IoniconsIcons
          name="bookmark-outline"
          color={theme.colors.text}
          size={s(6)}
        />
      </View>
    );
  }

  const FeedComment = () => {
    return (
      <View style={{ paddingHorizontal: s(2) }}>
        <Text style={{ lineHeight: s(4.5) }}>
          Liked by <Text style={{ fontWeight: 'bold' }}>{item.likeName}</Text> and{' '}
          <Text style={{ fontWeight: 'bold' }}>others</Text>
        </Text>
        <View>
          <View>
            <Text
              style={{ flexDirection: 'row', width: s(85), lineHeight: s(4.5) }}>
              <Text style={{ fontWeight: 'bold' }}>{item.commentName} </Text>
              {item.comment.length > 70
                ? item.comment.substring(0, 67)
                : item.comment}
              {item.comment.length > 70 ? <Comment /> : null}
            </Text>
            <Text
              style={{ color: theme.colors.genderBorder, lineHeight: s(4.5) }}>
              View all {item.randomHeight * 7} comments
            </Text>
            <Text
              style={{
                color: theme.colors.genderBorder,
                fontSize: s(2.5),
                lineHeight: s(4.5),
              }}>
              {moment(randomDate(new Date(2012, 0, 1), new Date())).fromNow()}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.feedCard}>
      <FeedHeader />
      <FeedImage />
      <FeedFooter />
      <FeedComment />
    </View>
  );
};

const styles = StyleSheet.create({
  feedCard: {
    marginBottom: vs(1.5),
  },
  feedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: s(2),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.infoBorder,
  },
  feedUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  feedUserImage: {
    width: s(8),
    height: s(8),
    borderRadius: s(8),
    overflow: 'hidden',
  },
  feedLinearGradient: {
    width: s(10.4),
    height: s(10.4),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: s(10.4),
  },
  feedWhiteBorder: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: s(10),
  },
  verticalDots: {
    paddingVertical: vs(1),
    justifyContent: 'center'
  },
  feedCaptionIcon: {
    width: s(7),
    height: s(7),
  },
  feedImageHearts: {
    elevation: 2,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5
  }

})

export default RenderItemFeed;