import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import { s, vs } from '@size';
import theme from '@theme';
import DATA from '../widgets/Data';
import count from '@components/Count';


const Reel = () => {

  const RenderItem = ({ item }) => {
    return (
      <View style={styles.reels}>
        <Image source={{ uri: item.bgImage }} style={{ flex: 1 }} resizeMode={'cover'} />
        <View style={styles.reelViews}>
          <IoniconsIcons
            name="play-outline"
            color={theme.colors.card}
            size={s(6)}
          />
          <Text style={{
            fontWeight: 'bold',
            color: theme.colors.card,
            marginLeft: s(1),
          }}>{count(item.viewCount)}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {DATA.map((data) => <RenderItem item={data} />)}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  reels: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: s(100 / 3),
    height: vs(100 / 3.7),
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
  },
  reelViews: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
  }
})
export default Reel;