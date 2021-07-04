import React,
{
  useState,
  useRef,
  useEffect,
  useLayoutEffect
} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  StatusBar,
} from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { s, vs } from '@size';
import theme from '@theme';
import Data from './widgets/Data';
import RenderItem from './widgets/RenderItem';

const Reels = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const headerAnim = useRef(new Animated.Value(1)).current;
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 90 })
  const tabBarHeight = useBottomTabBarHeight();
  const isFocused = useIsFocused();
  const rootNav = useNavigation();
  const [state, setState] = useState({
    activeIndex: 0,
    paused: false,
    muted: false,
    anim: false,
    longPress: false,
  })


  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,

    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,

    }).start();
  };

  const highOpacity = () => {
    Animated.timing(headerAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,

    }).start();
  };

  const lowOpacity = () => {
    Animated.timing(headerAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,

    }).start();
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <Animated.View style={[styles.headerContainer, { opacity: headerAnim }]}>
            <LinearGradient
              colors={['rgba(0,0,0,0.5)', 'transparent']}
              style={styles.linearGradientStyles}>
              <Text style={styles.headerText}>
                Reels
              </Text>
              <TouchableOpacity onPress={() => alert('Nothing is added')}>
                <IoniconsIcons
                  name={'camera-outline'}
                  size={s(7)}
                  color={theme.colors.card}
                />
              </TouchableOpacity>
            </LinearGradient>
          </Animated.View>
        )
      }
    })
  }, [navigation, state.longPress]);

  useEffect(() => {
    setTimeout(() => fadeOut(), 300)
    if (state.longPress) {
      lowOpacity()
    } else {
      highOpacity()
    }
  }, [state.muted, state.longPress])


  const onViewRef = React.useRef((viewableItems) => {
    const val = viewableItems.changed[0]
    if (val) {
      setState((prev) => ({ ...prev, activeIndex: val['index'] }))
    }
  })

  const getItemLayout = (data, index) => ({
    length: Dimensions.get('window').height - tabBarHeight,
    offset: (Dimensions.get('window').height - tabBarHeight) * index,
    index,
  });

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        showHideTransition={'slide'}
        animated={true}
        hidden={state.longPress}
      />
      <FlatList
        data={Data}
        renderItem={({ item, index }) => RenderItem({
          state,
          setState,
          fadeAnim,
          headerAnim,
          item,
          index,
          tabBarHeight,
          isFocused,
          fadeIn
        })}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        getItemLayout={getItemLayout}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        snapToInterval={Dimensions.get('window').height - tabBarHeight}
        style={styles.reelContainer}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  )
}

const styles = StyleSheet.create({
  reelContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.text,
  },
  headerContainer: {
    position: 'absolute',
    width: s(100),
    height: vs(20),
  },
  linearGradientStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: s(3),
    alignItems: 'center'
  },
  headerText: {
    color: theme.colors.card,
    fontSize: s(6),
    fontWeight: '600'
  }
})

export default Reels;